"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { questions } from "@/constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "business@bpurplehq.org",
    link: "mailto:business@bpurplehq.org",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+234 (0) 706 379 6215",
    link: "tel:+23408069394886",
  },
   {
    icon: Mail,
    title: "WhatsApp",
    content: "+234 (0) 806 939 4886",
    link: "tel:+23408069394886",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Lagos, Nigeria",
    link: "#",
  },
];

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus("idle");

  try {
    const submitData = new FormData();
    
    submitData.append("name", formData.name.trim());
    submitData.append("email", formData.email.trim());
    submitData.append("phone", formData.phone.trim());
    submitData.append("company", formData.company.trim());
    submitData.append("subject", formData.subject.trim());
    submitData.append("message", formData.message.trim());

    

    setSubmitStatus("success");
    setFormData({
      name: "", email: "", phone: "", company: "", subject: "", message: ""
    });

    setTimeout(() => setSubmitStatus("idle"), 5000);

  } catch (error) {
    console.error("Submission error:", error);
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <main className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-100 via-lavender-100 to-purple-50 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-400/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            We're Here to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-violet-600">
              Help
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Visit our FAQ page to find answers, shoot us an email, send us a
            WhatsApp message, or visit one of our physical locations.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                className="group bg-gradient-to-br from-purple-50 to-lavender-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-700 to-violet-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.content}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
     
 <section className="bg-gradient-to-br from-purple-100 via-lavender-100 to-purple-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 colgap-12 lg:gap-16">
         

            {/* Questions Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">How Can We Assist You?</h2>
              <div className="grid grid-cols-1 gap-6">
                {questions.map(({ id, image, title, content }) => (
                  <motion.div key={id} className="bg-white border-2 border-purple-200 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-purple-50 hover:to-lavender-50 hover:border-purple-400 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-lavender-100 rounded-xl flex items-center justify-center">
                          <Image src={image} alt={title} width={32} height={32} className="object-contain" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900 mb-2">{title}</h3>
                        <p className="text-gray-700 leading-relaxed">{content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </section>


    </main>
  );
}