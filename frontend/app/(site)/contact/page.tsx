"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Globe,
  Send,
  ArrowRight,
  CheckCircle2,
  Building,
  User,
  Phone,
  MessageSquare,
  Briefcase,
  Calendar,
  X,
  Upload,
  FileText,
} from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function ContactPage() {

  // Form states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");

  // Submit states
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!fullName.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setError("Please fill out all required fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          companyName,
          message,
        }),
      });

      const resData = await response.json();
      if (response.ok && resData.success) {
        setSubmitted(true);
        // Reset form
        setFullName("");
        setEmail("");
        setPhone("");
        setCompanyName("");
        setMessage("");
      } else {
        setError(resData.error || "Failed to submit enquiry. Please try again.");
      }
    } catch (err) {
      setError("Unable to submit your enquiry. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-white min-h-[85vh]">

      {/* Redesigned Hero Banner (Centered text overlay, no image overlays) */}
      <div className="relative w-full min-h-[580px] flex items-center justify-center text-center bg-white overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/globecontact.png"
            alt="LabelzAI Global Connectivity Network"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Centered Content */}
        <div className="relative z-20 container mx-auto px-4 md:px-6 py-16 flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl space-y-6 flex flex-col items-center">
            <span className="text-black uppercase tracking-widest text-base md:text-lg font-bold">
              Contact Us — LabelzAI Techservices LLP
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.2rem] font-normal font-poppins text-black tracking-tight leading-[1.15] max-w-4xl text-center">
              Let's Build Your Future Workforce—Together.
            </h1>
          </div>
        </div>

      </div>

      {/* Middle Section: Corporate Sourcing Description & Office visual side-by-side */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Column: Text description */}
          <div className="space-y-4">
            <Badge variant="outline" className="border-navy/15 text-navy uppercase tracking-wider text-[9px] font-bold px-3 py-1">
              About Our Staffing Services
            </Badge>
            <h2 className="text-3xl font-normal font-poppins text-navy tracking-tight leading-tight">
              Sourcing Excellence Across India
            </h2>
            <p className="text-sm md:text-base text-navy-gray leading-relaxed font-inter">
              Connect with LabelzAI HR Management &amp; Recruitment Solutions to accelerate your hiring with a trusted
              recruitment partner delivering end-to-end IT and Non-IT recruitment services across India. Our talent
              acquisition specialists provide customized hiring strategies, executive search, permanent staffing, contract
              staffing, bulk hiring, and workforce management solutions tailored to your business objectives. Whether
              you are scaling a startup or strengthening enterprise teams, we ensure rapid turnaround, quality talent,
              and a seamless recruitment process. Contact LabelzAI today to discuss your hiring requirements and
              discover how our proven recruitment expertise, extensive candidate network, and industry-driven
              approach can help your organization secure top talent and achieve sustainable business growth.
            </p>
          </div>

          {/* Right Column: Premium Office Visual Asset */}
          <div className="relative h-[300px] sm:h-[350px] w-full rounded-[32px] overflow-hidden border border-off-white-dark shadow-md">
            <Image
              src="/images/contactus.png"
              alt="LabelzAI staffing and consulting services illustration"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>

      {/* Bottom Section: Address details and Enquiry form side-by-side */}
      <div className="w-full bg-[#f8fafc] border-t border-[#e2e8f0]/40 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Stack of separate details cards and Vision-Mission redirection link */}
            <div className="lg:col-span-5 space-y-6">

              {/* Office Address Card */}
              <div className="bg-white border border-[#e2e8f0]/80 rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-accent-gold/10 flex items-center justify-center text-accent-gold shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-1 font-inter">
                  <span className="block text-[10px] text-navy-gray uppercase font-bold tracking-wider">Office Address (Regd.)</span>
                  <p className="text-sm text-navy font-semibold leading-relaxed">
                    Baghbahara Road, Kutchhari Chowk, Opp. Hanuman Mandir, Mahasamund, Chhattisgarh – 493445
                  </p>
                </div>
              </div>

              {/* Email Sourcing Card */}
              <div className="bg-white border border-[#e2e8f0]/80 rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-accent-teal/10 flex items-center justify-center text-accent-teal shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="space-y-0.5 font-inter">
                  <span className="block text-[9px] text-navy-gray uppercase font-bold tracking-wider">Email Sourcing</span>
                  <a href="mailto:info@labelzai.in" className="text-sm text-navy font-semibold hover:underline">
                    info@labelzai.in
                  </a>
                </div>
              </div>

              {/* Web Portal Card */}
              <div className="bg-white border border-[#e2e8f0]/80 rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <Globe className="h-5 w-5" />
                </div>
                <div className="space-y-0.5 font-inter">
                  <span className="block text-[9px] text-navy-gray uppercase font-bold tracking-wider">Web Portal</span>
                  <a
                    href="https://www.labelzai.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-navy font-semibold hover:underline"
                  >
                    www.labelzai.in
                  </a>
                </div>
              </div>

              {/* Vision and Mission (Why Choose Us) Link */}
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center space-x-3 w-full group bg-white hover:bg-navy hover:text-white px-6 py-5 rounded-2xl text-sm font-semibold text-navy transition-all duration-300 border border-[#e2e8f0]"
                >
                  <span>Read our Mission and Vision</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

            </div>

            {/* Right Column: Enquiry Form Card */}
            <div className="lg:col-span-7 bg-white border border-[#e2e8f0]/80 rounded-[32px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)] space-y-6">
              <div>
                <h2 className="text-2xl font-normal font-poppins text-navy">
                  Enquiry Form
                </h2>
                <p className="text-xs text-navy-gray font-inter mt-1">
                  Tell us about your technical/corporate talent mandates, and we'll reach back with a tailored sourcing plan.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded-2xl flex flex-col items-center text-center space-y-3 py-10 animate-fade-in font-inter">
                  <CheckCircle2 className="h-12 w-12 text-green-600" />
                  <h4 className="text-lg font-bold text-navy font-poppins">Thank You!</h4>
                  <p className="text-xs text-navy-gray max-w-xs">
                    Your enquiry has been recorded successfully. Our recruitment consultants will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-bold text-accent-gold hover:underline cursor-pointer"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-5">
                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 text-xs font-semibold text-red-600 rounded-xl font-inter">
                      {error}
                    </div>
                  )}

                  {/* Name and Email side-by-side row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-bold text-navy uppercase tracking-wider font-inter">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-4.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-[#94a3b8]" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-[#e2e8f0]/60 bg-[#F1F5F9]/60 text-navy font-inter text-sm placeholder-[#94a3b8] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#0B2545]/8 focus:border-[#0B2545]/20 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-bold text-navy uppercase tracking-wider font-inter">Corporate Email *</label>
                      <div className="relative">
                        <Mail className="absolute left-4.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-[#94a3b8]" />
                        <input
                          type="email"
                          required
                          placeholder="e.g. rahul@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-[#e2e8f0]/60 bg-[#F1F5F9]/60 text-navy font-inter text-sm placeholder-[#94a3b8] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#0B2545]/8 focus:border-[#0B2545]/20 transition-all duration-200"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone and Organization Name side-by-side row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-bold text-navy uppercase tracking-wider font-inter">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-4.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-[#94a3b8]" />
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-[#e2e8f0]/60 bg-[#F1F5F9]/60 text-navy font-inter text-sm placeholder-[#94a3b8] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#0B2545]/8 focus:border-[#0B2545]/20 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-bold text-navy uppercase tracking-wider font-inter">Organization Name</label>
                      <div className="relative">
                        <Building className="absolute left-4.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-[#94a3b8]" />
                        <input
                          type="text"
                          placeholder="e.g. LabelzAI Techservices"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-[#e2e8f0]/60 bg-[#F1F5F9]/60 text-navy font-inter text-sm placeholder-[#94a3b8] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#0B2545]/8 focus:border-[#0B2545]/20 transition-all duration-200"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-bold text-navy uppercase tracking-wider font-inter">Message / Sourcing Requirements *</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4.5 top-4.5 h-4.5 w-4.5 text-[#94a3b8]" />
                      <textarea
                        required
                        rows={4}
                        placeholder="Provide details of active job positions, skill mandates, or general consultancy queries..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-[#e2e8f0]/60 bg-[#F1F5F9]/60 text-navy font-inter text-sm placeholder-[#94a3b8] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#0B2545]/8 focus:border-[#0B2545]/20 transition-all duration-200 resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center px-6 py-4 rounded-2xl text-base font-semibold bg-[#0B2545] text-white hover:bg-[#081a30] hover:shadow-lg hover:shadow-navy/10 transition-all duration-300 focus:outline-none cursor-pointer disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Submit Enquiry"}
                    <Send className="h-4 w-4 ml-2" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
