"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-14 bg-nausa-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-12">
            GET IN <span className="text-nausa-vanilla">TOUCH</span>
          </h2>
          <div className="bg-white/80 rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-nausa-blue font-bold mb-2 uppercase text-sm tracking-wide">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full text-nausa-blue px-4 py-3 border-2 border-nausa-blue rounded-lg focus:ring-2 focus:ring-nausa-lightblue focus:border-transparent font-medium"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-nausa-blue font-bold mb-2 uppercase text-sm tracking-wide">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full text-nausa-blue px-4 py-3 border-2 border-nausa-blue rounded-lg focus:ring-2 focus:ring-nausa-lightblue focus:border-transparent font-medium"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-nausa-blue font-bold mb-2 uppercase text-sm tracking-wide">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full text-nausa-blue px-4 py-3 border-2 border-nausa-blue rounded-lg focus:ring-2 focus:ring-nausa-lightblue focus:border-transparent font-medium"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-nausa-blue font-bold mb-2 uppercase text-sm tracking-wide">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full text-nausa-blue px-4 py-3 border-2 border-nausa-blue rounded-lg focus:ring-2 focus:ring-nausa-lightblue focus:border-transparent font-medium"
                  placeholder="Your message..."
                />
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-100 text-nausa-blue p-4 rounded-lg">
                  Thank you for your message! We&apos;ll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-100 text-nausa-blue p-4 rounded-lg">
                  There was an error sending your message. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-nausa-lightblue text-white py-4 rounded-lg font-black uppercase tracking-wide hover:bg-white hover:text-nausa-lightblue hover:border-nausa-lightblue border-2 border-nausa-lightblue transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
            <div className="mt-8 text-center">
              <p className="flex items-center justify-center text-nausa-blue font-semibold">
                <Mail className="w-5 h-5 mr-2" />
                info@UyghurSports.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
