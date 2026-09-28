import { NextResponse } from "next/server";
import { google } from "googleapis";

type SignupPayload = {
  role: string;
  fullName: string;
  email: string;
  phone: string;
  // school: string;
  // state?: string;
  // classLevel?: string;
  // subjectRole?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as SignupPayload;

    const required = [body.fullName, body.email, body.phone];
    if (required.some((value) => !String(value || "").trim())) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(body.email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (body.role !== "learner" && body.role !== "teacher") {
      return NextResponse.json({ error: "Invalid role." }, { status: 400 });
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

    const row = [
      new Date().toISOString(),
    
      body.fullName.trim(),
      body.email.trim(),
      body.phone.trim(),
      ,
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:I",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: [row] },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Google Sheets save failed:", error);
    return NextResponse.json(
      { error: "Could not save form data." },
      { status: 500 }
    );
  }
}