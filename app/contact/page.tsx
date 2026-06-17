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

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwxeWjZY29FNK739iyRTywSIVKsh9x6wRmOyYvnhLDL6mmJgMPvdFf02FGd_HJw11W5/exec",
      {
        method: "POST",
        body: submitData,
        mode: "no-cors"
      }
    );

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
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 lg:p-10 rounded-2xl shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <p className="text-green-800 font-medium">
                    Message sent successfully! We'll get back to you soon.
                  </p>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                  <p className="text-red-800 font-medium">
                    Something went wrong. Please try again.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form fields remain the same - all inputs are correctly connected */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none" placeholder="+234 123 456 7890" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none" placeholder="Your Company" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                  <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none bg-white">
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="training">Training & Courses</option>
                    <option value="solutions">Solutions & Services</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none resize-none" placeholder="Tell us more about your inquiry..." />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-700 to-violet-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-purple-700/50 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

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