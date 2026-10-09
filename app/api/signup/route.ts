import { NextResponse } from "next/server";
import { google } from "googleapis";

type SignupPayload = {
  role: string;
  fullName: string;
  email: string;
  phone: string;
  privacyConsent?: boolean;
  guardianConsent?: boolean | null; // learners only
  noticeVersion?: string; // which Privacy Notice version the person saw
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Trim and cap length so one oversized field can't bloat the sheet.
const clean = (value: unknown, max = 200) =>
  String(value ?? "").trim().slice(0, max);

export async function POST(req: Request) {
  try {
    let body: SignupPayload;
    try {
      body = (await req.json()) as SignupPayload;
    } catch {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const fullName = clean(body.fullName);
    const email = clean(body.email);
    const phone = clean(body.phone, 30);

    if (!fullName || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (body.role !== "learner" && body.role !== "teacher") {
      return NextResponse.json({ error: "Invalid role." }, { status: 400 });
    }

    // Consent is enforced here, not just in the browser, because client-side
    // checks can be bypassed. Nothing is saved without a clear "yes".
    if (body.privacyConsent !== true) {
      return NextResponse.json(
        { error: "Privacy consent is required to register." },
        { status: 400 }
      );
    }
    if (body.role === "learner" && body.guardianConsent !== true) {
      return NextResponse.json(
        { error: "Age or guardian confirmation is required for learners." },
        { status: 400 }
      );
    }

    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/^"|"$/g, "").replace(
      /\\n/g,
      "\n"
    );
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!serviceAccountEmail || !privateKey || !spreadsheetId) {
      return NextResponse.json(
        { error: "Google Sheets config missing." },
        { status: 500 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: serviceAccountEmail,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Column order must match the header row in Sheet1 (A1:M1):
    // A Timestamp | B Role | C Full Name | D Email | E Phone | F School | G State
    // H Class Level | I Subject/Role | J Privacy Consent | K Guardian Consent
    // L Consented At | M Notice Version
    const now = new Date().toISOString(); // server time, so it can't be spoofed
    const row = [
      now,
      fullName,
      email,
      phone,
      // clean(body.school),
      // clean(body.state, 60),
      // body.role === "learner" ? clean(body.classLevel, 60) : "",
      // // body.role === "teacher" ? clean(body.subjectRole) : "",
      // "YES",
      body.role === "learner" ? "YES" : "N/A",
      now,
      clean(body.noticeVersion, 40) || "unknown",
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:H",
      valueInputOption: "RAW", // stored as plain text, so "=..." can't run as a formula
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: [row] },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Google Sheets save failed:", error);
    return NextResponse.json({ error: "Could not save form data." }, { status: 500 });
  }
}