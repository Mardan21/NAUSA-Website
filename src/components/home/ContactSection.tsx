"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
} from "lucide-react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
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
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-nausa-lightblue" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-nausa-blue rounded-full mb-4">
              <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-nausa-vanilla" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-nausa-blue mb-2">
              GET IN <span className="text-nausa-vanilla">TOUCH</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-lg mx-auto">
              Have questions? We typically reply within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Contact Info - Desktop Side Panel */}
            <div className="lg:col-span-1 space-y-4 lg:space-y-6">
              {/* Quick Contact */}
              <div className="bg-nausa-blue/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-nausa-vanilla" />
                  Quick Contact
                </h3>
                <a
                  href="mailto:info@UyghurSports.com"
                  className="text-nausa-vanilla hover:text-white transition-colors text-sm sm:text-base font-medium break-all"
                >
                  info@UyghurSports.com
                </a>
              </div>

              {/* Response Time */}
              <div className="bg-nausa-blue/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <h3 className="text-lg font-bold text-white mb-2">
                  Response Time
                </h3>
                <p className="text-gray-300 text-sm">
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-nausa-vanilla/70 backdrop-blur-sm rounded-xl shadow-xl p-4 sm:p-6 border border-nausa-blue/20">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-nausa-blue font-semibold mb-1.5 text-xs sm:text-sm uppercase tracking-wide"
                      >
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full text-nausa-blue px-3 py-2 sm:py-2.5 border-2 border-nausa-blue rounded-lg focus:ring-2 focus:ring-nausa-lightblue focus:border-nausa-lightblue font-medium text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-nausa-blue font-semibold mb-1.5 text-xs sm:text-sm uppercase tracking-wide"
                      >
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full text-nausa-blue px-3 py-2 sm:py-2.5 border-2 border-nausa-blue rounded-lg focus:ring-2 focus:ring-nausa-lightblue focus:border-nausa-lightblue font-medium text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-nausa-blue font-semibold mb-1.5 text-xs sm:text-sm uppercase tracking-wide"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full text-nausa-blue px-3 py-2 sm:py-2.5 border-2 border-nausa-blue rounded-lg focus:ring-2 focus:ring-nausa-lightblue focus:border-nausa-lightblue font-medium text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-nausa-blue font-semibold mb-1.5 text-xs sm:text-sm uppercase tracking-wide"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full text-nausa-blue px-3 py-2 sm:py-2.5 border-2 border-nausa-blue rounded-lg focus:ring-2 focus:ring-nausa-lightblue focus:border-nausa-lightblue font-medium text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Select a subject...</option>
                      <option value="general">General Inquiry</option>
                      <option value="tournament">Tournament Information</option>
                      <option value="sponsorship">
                        Sponsorship Opportunities
                      </option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="media">Media & Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-nausa-blue font-semibold mb-1.5 text-xs sm:text-sm uppercase tracking-wide"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows={3}
                      className="w-full text-nausa-blue px-3 py-2 sm:py-2.5 border-2 border-nausa-blue rounded-lg focus:ring-2 focus:ring-nausa-lightblue focus:border-nausa-lightblue font-medium text-sm resize-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="bg-green-50 border border-green-200 text-green-800 p-3 rounded-lg flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm">
                          Message sent successfully!
                        </h4>
                        <p className="text-xs">
                          We&apos;ll get back to you within 24 hours.
                        </p>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-800 p-3 rounded-lg flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm">
                          Failed to send message
                        </h4>
                        <p className="text-xs">
                          Please try again or email us directly.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-nausa-lightblue text-white py-2.5 sm:py-3 rounded-lg font-bold uppercase tracking-wide hover:bg-nausa-blue hover:scale-[1.02] border-2 border-nausa-lightblue transition-all text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner
                          size="sm"
                          className="border-white border-t-nausa-lightblue"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
