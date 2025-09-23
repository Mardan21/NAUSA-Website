"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function SponsorsPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    sponsorshipType: "",
    otherDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const sponsorshipOptions = [
    "Money Donation",
    "Food Sponsorship",
    "Refreshments",
    "Equipment/Materials",
    "Other",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sponsor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          companyName: "",
          contactName: "",
          email: "",
          sponsorshipType: "",
          otherDetails: "",
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
    <div className="pt-16 sm:pt-20 min-h-screen bg-gradient-to-br from-nausa-blue to-nausa-lightblue">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
              BECOME A <span className="text-nausa-vanilla">SPONSOR</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Partner with NAUSA to support the largest Uyghur sports tournament
              series in North America and help preserve our cultural heritage
              through sports.
            </p>
          </div>

          {/* Sponsorship Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-black text-nausa-vanilla mb-2 sm:mb-3">
                VISIBILITY
              </h3>
              <p className="text-white/90 text-sm sm:text-base">
                Your brand featured across all tournament materials and social
                media
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-black text-nausa-vanilla mb-2 sm:mb-3">
                COMMUNITY
              </h3>
              <p className="text-white/90 text-sm sm:text-base">
                Connect with 1000+ engaged community members and families
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-black text-nausa-vanilla mb-2 sm:mb-3">
                IMPACT
              </h3>
              <p className="text-white/90 text-sm sm:text-base">
                Support cultural preservation and youth development programs
              </p>
            </div>
          </div>

          {/* Sponsorship Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl font-black text-nausa-blue text-center mb-6 sm:mb-8">
              Sponsorship Inquiry Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-nausa-blue font-bold mb-2 uppercase text-sm tracking-wide">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full text-nausa-blue px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-nausa-blue rounded-lg focus:ring-2 focus:ring-nausa-lightblue focus:border-transparent font-medium text-sm sm:text-base"
                    placeholder="Your Company Name"
                  />
                </div>
                <div>
                  <label className="block text-nausa-blue font-bold mb-2 uppercase text-sm tracking-wide">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    className="w-full text-nausa-blue px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-nausa-blue rounded-lg focus:ring-2 focus:ring-nausa-lightblue focus:border-transparent font-medium text-sm sm:text-base"
                    placeholder="Your Full Name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-nausa-blue font-bold mb-2 uppercase text-sm tracking-wide">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full text-nausa-blue px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-nausa-blue rounded-lg focus:ring-2 focus:ring-nausa-lightblue focus:border-transparent font-medium text-sm sm:text-base"
                  placeholder="contact@company.com"
                />
              </div>

              <div>
                <label className="block text-nausa-blue font-bold mb-2 uppercase text-sm tracking-wide">
                  Sponsorship Type *
                </label>
                <select
                  name="sponsorshipType"
                  value={formData.sponsorshipType}
                  onChange={handleChange}
                  required
                  className="w-full text-nausa-blue px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-nausa-blue rounded-lg focus:ring-2 focus:ring-nausa-lightblue focus:border-transparent font-medium text-sm sm:text-base"
                >
                  <option value="">Select sponsorship type</option>
                  {sponsorshipOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-nausa-blue font-bold mb-2 uppercase text-sm tracking-wide">
                  Additional Details
                </label>
                <textarea
                  name="otherDetails"
                  value={formData.otherDetails}
                  onChange={handleChange}
                  rows={4}
                  className="w-full text-nausa-blue px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-nausa-blue rounded-lg focus:ring-2 focus:ring-nausa-lightblue focus:border-transparent font-medium text-sm sm:text-base"
                  placeholder="Please provide any additional details about your sponsorship goals, budget range, or specific requirements..."
                />
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-100 text-green-800 p-3 sm:p-4 rounded-lg text-sm sm:text-base">
                  Thank you for your interest in sponsoring NAUSA! We&apos;ll
                  contact you within 24 hours to discuss opportunities.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-100 text-red-800 p-3 sm:p-4 rounded-lg text-sm sm:text-base">
                  There was an error submitting your inquiry. Please try again
                  or email us directly at info@UyghurSports.com
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-nausa-lightblue text-white py-3 sm:py-4 rounded-lg font-black uppercase tracking-wide hover:bg-white hover:text-nausa-lightblue hover:border-nausa-lightblue border-2 border-nausa-lightblue transition-colors text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Submit Sponsorship Inquiry
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
