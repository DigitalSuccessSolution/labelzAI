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

interface Job {
  id: string;
  _id?: string;
  title: string;
  location: string;
  type: "Full Time" | "Part Time" | "Contract";
  model: "On Site" | "Hybrid" | "Work From Home";
  createdAt: string;
}

export default function ContactPage() {
  // Jobs states
  const [jobs, setJobs] = useState<Job[]>([]);
  const [jobsLoading, setJobsLoading] = useState(true);

  // Apply modal states
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applyForm, setApplyForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
    resumeName: "",
    resumeData: "",
  });
  const [applySubmitting, setApplySubmitting] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);
  const [applyError, setApplyError] = useState("");
  const [resumeError, setResumeError] = useState("");

  // Fetch jobs on mount
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs");
        const data = await res.json();
        if (data.success) {
          setJobs(data.data);
        }
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      } finally {
        setJobsLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // Lock body scroll when apply modal is open
  useEffect(() => {
    if (isApplyModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isApplyModalOpen]);

  const handleOpenApplyModal = (job: Job) => {
    setSelectedJob(job);
    setIsApplyModalOpen(true);
    setApplySuccess(false);
    setApplyError("");
    setResumeError("");
    setApplyForm({
      fullName: "",
      email: "",
      phone: "",
      experience: "",
      coverLetter: "",
      resumeName: "",
      resumeData: "",
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResumeError("");
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setResumeError("File size exceeds 5MB limit.");
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (
      !allowedTypes.includes(file.type) &&
      !file.name.endsWith(".pdf") &&
      !file.name.endsWith(".doc") &&
      !file.name.endsWith(".docx")
    ) {
      setResumeError("Only PDF, DOC, and DOCX files are allowed.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setApplyForm((prev) => ({
        ...prev,
        resumeName: file.name,
        resumeData: reader.result as string,
      }));
    };
    reader.onerror = () => {
      setResumeError("Error reading file. Please try again.");
    };
    reader.readAsDataURL(file);
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApplyError("");

    if (!selectedJob) return;

    if (
      !applyForm.fullName.trim() ||
      !applyForm.email.trim() ||
      !applyForm.phone.trim() ||
      !applyForm.experience.trim() ||
      !applyForm.resumeData
    ) {
      setApplyError("Please fill out all required fields and upload your resume.");
      return;
    }

    try {
      setApplySubmitting(true);
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobId: selectedJob._id || selectedJob.id,
          jobTitle: selectedJob.title,
          fullName: applyForm.fullName,
          email: applyForm.email,
          phone: applyForm.phone,
          experience: applyForm.experience,
          coverLetter: applyForm.coverLetter,
          resumeName: applyForm.resumeName,
          resumeData: applyForm.resumeData,
        }),
      });

      const resData = await response.json();
      if (response.ok && resData.success) {
        setApplySuccess(true);
      } else {
        setApplyError(resData.error || "Failed to submit application.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      setApplyError("Server error. Please check your network and try again.");
    } finally {
      setApplySubmitting(false);
    }
  };

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
                  href="/mission-vision"
                  className="inline-flex items-center justify-center space-x-3 w-full group bg-white hover:bg-navy hover:text-white px-6 py-5 rounded-2xl text-sm font-semibold text-navy transition-all duration-300 border border-[#e2e8f0]"
                >
                  <span>Read our Vision and Mission page</span>
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
      {/* 4. Current Openings Section */}
      {!jobsLoading && jobs.length > 0 && (
        <section className="py-16 md:py-20 bg-white border-t border-navy/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="secondary">Join Our Team</Badge>
              <h2 className="mt-4 text-3xl md:text-5xl font-normal font-poppins text-navy tracking-tight leading-tight">
                Current Openings
              </h2>
              <p className="mt-4 text-sm md:text-base text-navy-gray leading-relaxed font-inter">
                Explore opportunities to grow and make an impact with us. Submit your application directly below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {jobs.map((job) => {
                const id = job._id || job.id;
                return (
                  <div
                    key={id}
                    className="bg-white border border-off-white-dark rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between animate-fade-in"
                  >
                    <div className="space-y-4">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-lg ${
                          job.type === "Full Time"
                            ? "bg-accent-gold/10 text-accent-gold-hover"
                            : job.type === "Part Time"
                            ? "bg-accent-teal/10 text-accent-teal"
                            : "bg-blue-500/10 text-blue-500"
                        }`}>
                          {job.type}
                        </span>
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-lg bg-navy/5 text-navy-gray">
                          {job.model}
                        </span>
                      </div>

                      {/* Title & Info */}
                      <div>
                        <h3 className="text-lg font-semibold font-poppins text-navy leading-snug">
                          {job.title}
                        </h3>
                        <div className="flex items-center text-xs text-navy-gray mt-2 space-x-3">
                          <span className="flex items-center">
                            <MapPin className="h-3.5 w-3.5 mr-1 text-navy-gray/60" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-3.5 w-3.5 mr-1 text-navy-gray/60" />
                            {new Date(job.createdAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-6 mt-6 border-t border-navy/5">
                      <button
                        onClick={() => handleOpenApplyModal(job)}
                        className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#0B2545] text-white hover:bg-[#081a30] transition-all duration-300 focus:outline-none cursor-pointer"
                      >
                        Apply Now
                        <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 5. Apply Modal Overlay */}
      {isApplyModalOpen && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white border border-off-white-dark rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto relative">
            
            {/* Close button */}
            <button
              onClick={() => setIsApplyModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-navy-gray hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
              title="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div>
              <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-teal bg-accent-teal/10 rounded-full">
                Application Form
              </span>
              <h3 className="text-xl font-normal font-poppins text-navy mt-2">
                Apply for {selectedJob.title}
              </h3>
              <p className="text-xs text-navy-gray font-inter mt-1">
                {selectedJob.location} • {selectedJob.type} • {selectedJob.model}
              </p>
            </div>

            {applySuccess ? (
              <div className="p-6 bg-green-50 border border-green-200 rounded-2xl flex flex-col items-center text-center space-y-3 py-10 animate-fade-in font-inter">
                <CheckCircle2 className="h-12 w-12 text-green-600 animate-bounce" />
                <h4 className="text-lg font-bold text-navy font-poppins">Application Submitted!</h4>
                <p className="text-xs text-navy-gray max-w-xs leading-relaxed">
                  Your application for <span className="font-semibold text-navy">{selectedJob.title}</span> has been submitted successfully. Our team will review your profile and reach back if there is a match.
                </p>
                <button
                  onClick={() => setIsApplyModalOpen(false)}
                  className="mt-4 px-6 py-2 bg-[#0B2545] text-white text-xs font-semibold rounded-xl hover:bg-[#081a30] transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                {applyError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-xs font-semibold text-red-600 rounded-xl font-inter">
                    {applyError}
                  </div>
                )}

                {/* Full Name */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-navy uppercase tracking-wider font-inter">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94a3b8]" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amit Kumar"
                      value={applyForm.fullName}
                      onChange={(e) => setApplyForm((prev) => ({ ...prev, fullName: e.target.value }))}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#e2e8f0]/60 bg-[#F1F5F9]/60 text-navy font-inter text-sm placeholder-[#94a3b8] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#0B2545]/8 focus:border-[#0B2545]/20 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Email & Phone grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-navy uppercase tracking-wider font-inter">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94a3b8]" />
                      <input
                        type="email"
                        required
                        placeholder="e.g. amit@gmail.com"
                        value={applyForm.email}
                        onChange={(e) => setApplyForm((prev) => ({ ...prev, email: e.target.value }))}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#e2e8f0]/60 bg-[#F1F5F9]/60 text-navy font-inter text-sm placeholder-[#94a3b8] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#0B2545]/8 focus:border-[#0B2545]/20 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-navy uppercase tracking-wider font-inter">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94a3b8]" />
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 99999 88888"
                        value={applyForm.phone}
                        onChange={(e) => setApplyForm((prev) => ({ ...prev, phone: e.target.value }))}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#e2e8f0]/60 bg-[#F1F5F9]/60 text-navy font-inter text-sm placeholder-[#94a3b8] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#0B2545]/8 focus:border-[#0B2545]/20 transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                {/* Experience (Years) */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-navy uppercase tracking-wider font-inter">Years of Experience *</label>
                  <input
                    type="number"
                    required
                    min="0"
                    max="50"
                    placeholder="e.g. 3"
                    value={applyForm.experience}
                    onChange={(e) => setApplyForm((prev) => ({ ...prev, experience: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e2e8f0]/60 bg-[#F1F5F9]/60 text-navy font-inter text-sm placeholder-[#94a3b8] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#0B2545]/8 focus:border-[#0B2545]/20 transition-all duration-200"
                  />
                </div>

                {/* Cover Letter */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-navy uppercase tracking-wider font-inter">Cover Letter / Note</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly introduce yourself or list key achievements..."
                    value={applyForm.coverLetter}
                    onChange={(e) => setApplyForm((prev) => ({ ...prev, coverLetter: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e2e8f0]/60 bg-[#F1F5F9]/60 text-navy font-inter text-sm placeholder-[#94a3b8] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#0B2545]/8 focus:border-[#0B2545]/20 transition-all duration-200 resize-none"
                  />
                </div>

                {/* Resume Upload */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-navy uppercase tracking-wider font-inter">Upload Resume (PDF, DOC, DOCX) *</label>
                  
                  {resumeError && (
                    <p className="text-[11px] font-semibold text-red-600">{resumeError}</p>
                  )}

                  <div className="relative border-2 border-dashed border-[#e2e8f0] hover:border-[#0B2545]/30 rounded-2xl p-4 transition-colors bg-[#F1F5F9]/40 flex flex-col items-center justify-center text-center">
                    <input
                      type="file"
                      required={!applyForm.resumeData}
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    />
                    
                    {applyForm.resumeName ? (
                      <div className="flex items-center space-x-2 text-navy text-xs font-semibold">
                        <FileText className="h-5 w-5 text-accent-gold" />
                        <span className="truncate max-w-[240px]">{applyForm.resumeName}</span>
                      </div>
                    ) : (
                      <>
                        <Upload className="h-5 w-5 text-navy-gray/60 mb-1" />
                        <span className="text-[11px] font-semibold text-navy-gray">Drag &amp; drop or click to upload file</span>
                        <span className="text-[10px] text-navy-gray/50 mt-0.5">Max size: 5MB</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={applySubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-2xl text-sm font-semibold bg-[#0B2545] text-white hover:bg-[#081a30] hover:shadow-lg transition-all duration-300 focus:outline-none cursor-pointer disabled:opacity-60"
                >
                  {applySubmitting ? "Submitting Application..." : "Submit Application"}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
