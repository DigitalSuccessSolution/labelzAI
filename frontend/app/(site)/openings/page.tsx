"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Send,
  ArrowRight,
  CheckCircle2,
  User,
  Phone,
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

export default function OpeningsPage() {
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

    // Email address validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(applyForm.email.trim())) {
      setApplyError("Please enter a valid email address.");
      return;
    }

    // Phone number validation (allows optional '+' or leading country code, 10 to 12 digits)
    const cleanPhone = applyForm.phone.trim().replace(/[-\s()]/g, "");
    const phoneRegex = /^\+?[0-9]{10,12}$/;
    if (!phoneRegex.test(cleanPhone)) {
      setApplyError("Please enter a valid 10-to-12 digit phone number.");
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

  return (
    <div className="flex-1 flex flex-col bg-white min-h-[85vh]">
      
      {/* 1. Page Header (Minimal Premium White Hero) */}
      <section className="bg-white pt-12 pb-4 relative overflow-hidden">
        {/* Soft background accents */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-gold/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal font-poppins text-navy tracking-tight leading-tight">
            Current Openings
          </h1>
          <p className="mt-6 text-base md:text-lg text-navy-gray max-w-2xl mx-auto leading-relaxed font-inter">
            Explore opportunities to grow and make an impact with us. Submit your application directly below.
          </p>
        </div>
      </section>

      {/* 2. Openings Grid */}
      <section className="py-12 md:py-16 bg-white min-h-[400px]">
        <div className="container mx-auto px-4 md:px-6">
          {jobsLoading ? (
            <div className="flex flex-col items-center justify-center py-20 space-y-4">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#0B2545]"></div>
              <p className="text-sm text-navy-gray font-semibold font-inter">Loading active positions...</p>
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-20 max-w-md mx-auto space-y-4">
              <Briefcase className="h-12 w-12 text-navy-gray/40 mx-auto" />
              <h3 className="text-xl font-normal font-poppins text-navy">No Active Openings</h3>
              <p className="text-sm text-navy-gray leading-relaxed font-inter">
                We don&apos;t have any active openings right now. Check back soon or feel free to submit your resume for future considerations.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {jobs.map((job) => {
                const id = job._id || job.id;
                return (
                  <div
                    key={id}
                    className="group bg-[#f0f5fa] border border-[#e2e8f0]/80 rounded-2xl p-6 hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:border-accent-gold/25 transition-all duration-300 flex flex-col justify-between animate-fade-in max-w-[360px] w-full mx-auto"
                  >
                    <div className="space-y-5">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                          job.type === "Full Time"
                            ? "bg-accent-gold/10 text-accent-gold-hover"
                            : job.type === "Part Time"
                            ? "bg-accent-teal/10 text-accent-teal"
                            : "bg-blue-500/10 text-blue-500"
                        }`}>
                          {job.type}
                        </span>
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-navy/5 text-navy-gray">
                          {job.model}
                        </span>
                      </div>

                      {/* Title & Info */}
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold font-poppins text-navy group-hover:text-accent-gold transition-colors duration-300">
                          {job.title}
                        </h3>
                        <div className="flex items-center text-xs text-navy-gray mt-3 space-x-3.5">
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 text-[#94a3b8]" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1 text-[#94a3b8]" />
                            Posted {new Date(job.createdAt).toLocaleDateString("en-US", {
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
                        className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full text-xs font-semibold bg-[#23406F] text-white hover:bg-[#193054] hover:shadow-md transition-all duration-300 focus:outline-none cursor-pointer"
                      >
                        Apply Now
                        <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 3. Closing CTA Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl border border-off-white-dark group">
            {/* Background Image with Navy Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/cta-bg.png"
                alt="LabelzAI Corporate background"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-navy/60 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-80" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-14 text-center space-y-6">
              <p className="text-2xl sm:text-3xl md:text-4xl font-normal font-poppins text-white leading-snug tracking-tight max-w-3xl mx-auto">
                Ready to Join LabelzAI?
              </p>

              <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-inter">
                If you don&apos;t see a matching position but are eager to work with us, connect with our HR team directly.
              </p>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-semibold bg-white text-navy hover:bg-white/95 hover:shadow-lg transition-all duration-300 focus:outline-none cursor-pointer"
                >
                  Contact Our HR Team
                  <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Apply Modal Overlay */}
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
