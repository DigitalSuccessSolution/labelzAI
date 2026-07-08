"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Plus,
  Trash2,
  Download,
  Briefcase,
  Users,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Clock,
  LogOut,
  Database,
  ChevronRight,
  X,
  FileText,
  Building,
} from "lucide-react";
import Badge from "@/components/ui/Badge";

interface Job {
  id: string;
  _id?: string; // MongoDB object ID field
  title: string;
  location: string;
  type: "Full Time" | "Part Time" | "Contract";
  model: "On Site" | "Hybrid" | "Work From Home";
  createdAt: string;
}

interface Application {
  id: string;
  _id?: string; // MongoDB object ID field
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  coverLetter: string;
  resumeName: string;
  resumeData: string;
  createdAt: string;
}

interface Enquiry {
  id: string;
  _id?: string;
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  message: string;
  createdAt: string;
}


export default function AdminDashboardPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [activeTab, setActiveTab] = useState<"jobs" | "applications" | "enquiries">("jobs");
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);

  const handleOpenApplicationDetails = (app: Application) => {
    setSelectedApplication(app);
    setIsPreviewOpen(false);
  };
  
  // Dashboard states
  const [jobs, setJobs] = useState<Job[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Requisition Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [positionName, setPositionName] = useState("");
  const [location, setLocation] = useState("");
  const [positionType, setPositionType] = useState<"Full Time" | "Part Time" | "Contract">("Full Time");
  const [workModel, setWorkModel] = useState<"On Site" | "Hybrid" | "Work From Home">("On Site");
  const [formError, setFormError] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);

  // DB diagnostics state
  const [dbStatus, setDbStatus] = useState({ status: "checking", database: "disconnected" });

  // Check auth session
  useEffect(() => {
    const verifySession = async () => {
      try {
        const res = await fetch("/api/admin/session");
        const data = await res.json();
        if (data.success && data.authenticated) {
          setChecking(false);
          fetchDashboardData();
          fetchHealthStatus();
        } else {
          router.replace("/admin/login");
        }
      } catch (err) {
        console.error("Session check fail:", err);
        router.replace("/admin/login");
      }
    };
    verifySession();
  }, [router]);

  // Fetch Express DB Health
  const fetchHealthStatus = async () => {
    try {
      const res = await fetch("/health");
      const data = await res.json();
      setDbStatus(data);
    } catch (err) {
      setDbStatus({ status: "offline", database: "disconnected" });
    }
  };

  // Fetch Dashboard Data
  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const jobsRes = await fetch("/api/jobs");
      const appsRes = await fetch("/api/applications");
      const enquiriesRes = await fetch("/api/enquiries");
      
      const jobsData = await jobsRes.json();
      const appsData = await appsRes.json();
      const enquiriesData = await enquiriesRes.json();
      
      if (jobsData.success) setJobs(jobsData.data);
      if (appsData.success) setApplications(appsData.data);
      if (enquiriesData.success) setEnquiries(enquiriesData.data);
    } catch (error) {
      console.error("Error loading dashboard metrics:", error);
    } finally {
      setLoading(false);
    }
  };

  // Logout handler
  const handleLogout = async () => {
    try {
      const res = await fetch("/api/admin/logout", { method: "POST" });
      const data = await res.json();
      if (data.success) {
        router.push("/admin/login");
      }
    } catch (error) {
      console.error("Logout request failed:", error);
    }
  };

  // Handle adding job opening
  const handleAddJobSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!positionName.trim() || !location.trim()) {
      setFormError("Position Name and Location are required.");
      return;
    }

    try {
      setFormSubmitting(true);
      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: positionName,
          location: location,
          type: positionType,
          model: workModel,
        }),
      });

      const resData = await response.json();
      if (resData.success) {
        setJobs((prev) => [resData.data, ...prev]);
        setIsModalOpen(false);
        // Reset form
        setPositionName("");
        setLocation("");
        setPositionType("Full Time");
        setWorkModel("On Site");
      } else {
        setFormError(resData.error || "Failed to create position opening.");
      }
    } catch (error) {
      console.error("Error creating job:", error);
      setFormError("Server error. Please try again.");
    } finally {
      setFormSubmitting(false);
    }
  };

  // Handle job deletion
  const handleDeleteJob = async (id: string) => {
    if (!confirm("Are you sure you want to delete this position? This will also remove any candidate applications associated with it.")) {
      return;
    }

    try {
      const response = await fetch("/api/jobs", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      if (data.success) {
        setJobs((prev) => prev.filter((j) => (j._id || j.id) !== id));
        setApplications((prev) => prev.filter((app) => app.jobId !== id));
      } else {
        alert(data.error || "Failed to delete position.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete position due to connection error.");
    }
  };

  // Handle application deletion
  const handleDeleteApplication = async (id: string) => {
    if (!confirm("Are you sure you want to remove this application?")) {
      return;
    }

    try {
      const response = await fetch("/api/applications", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      if (data.success) {
        setApplications((prev) => prev.filter((a) => (a._id || a.id) !== id));
      } else {
        alert(data.error || "Failed to remove application.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete application.");
    }
  };

  // Handle enquiry deletion
  const handleDeleteEnquiry = async (id: string) => {
    if (!confirm("Are you sure you want to remove this enquiry?")) {
      return;
    }

    try {
      const response = await fetch("/api/enquiries", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      if (data.success) {
        setEnquiries((prev) => prev.filter((e) => (e._id || e.id) !== id));
      } else {
        alert(data.error || "Failed to remove enquiry.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete enquiry.");
    }
  };

  // Handle resume download
  const handleDownloadResume = (app: Application) => {
    try {
      const link = document.createElement("a");
      link.href = app.resumeData;
      link.download = app.resumeName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Resume download error:", error);
      alert("Unable to download resume file.");
    }
  };

  if (checking) {
    return (
      <div className="flex-1 flex justify-center items-center min-h-[85vh] bg-off-white">
        <div className="w-10 h-10 border-4 border-navy border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex-1 bg-off-white min-h-[85vh] py-12">
      <div className="container mx-auto px-4 md:px-6">
        


        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-normal font-poppins text-navy tracking-tight flex items-center">
              Admin Console
              <span className="ml-3 inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold bg-green-100 text-green-800 border border-green-200">
                Secure Session
              </span>
            </h1>
            <p className="text-sm text-navy-gray font-inter mt-1">
              Configure active jobs and review candidate applications.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center px-4 py-2.5 rounded-xl text-sm font-semibold bg-[#0B2545] text-white hover:bg-[#081a30] hover:shadow-md transition-all duration-300 focus:outline-none cursor-pointer"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Requisition
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2.5 rounded-xl text-sm font-semibold border border-navy/10 bg-white text-navy hover:bg-red-50 hover:text-red-600 transition-all duration-300 focus:outline-none cursor-pointer"
              title="Sign Out"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        </div>

        {/* Stats Panels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mb-8">
          <div className="bg-white border border-off-white-dark rounded-2xl p-6 shadow-sm flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center text-accent-gold">
              <Briefcase className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs text-navy-gray uppercase font-semibold tracking-wider font-inter">Active Positions</p>
              <h3 className="text-2xl font-bold text-navy font-poppins mt-0.5">{jobs.length}</h3>
            </div>
          </div>

          <div className="bg-white border border-off-white-dark rounded-2xl p-6 shadow-sm flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-accent-teal/10 flex items-center justify-center text-accent-teal">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs text-navy-gray uppercase font-semibold tracking-wider font-inter">Applications Received</p>
              <h3 className="text-2xl font-bold text-navy font-poppins mt-0.5">{applications.length}</h3>
            </div>
          </div>

          <div className="bg-white border border-off-white-dark rounded-2xl p-6 shadow-sm flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs text-navy-gray uppercase font-semibold tracking-wider font-inter">Enquiries Received</p>
              <h3 className="text-2xl font-bold text-navy font-poppins mt-0.5">{enquiries.length}</h3>
            </div>
          </div>
        </div>

        {/* Tabs navigation */}
        <div className="flex border-b border-navy/10 mb-6 justify-between items-center">
          <div className="flex">
            <button
              onClick={() => setActiveTab("jobs")}
              className={`pb-4 px-6 text-sm font-semibold tracking-tight transition-all duration-300 border-b-2 focus:outline-none cursor-pointer ${
                activeTab === "jobs"
                  ? "border-[#0B2545] text-[#0B2545]"
                  : "border-transparent text-navy-gray hover:text-navy"
              }`}
            >
              Positions ({jobs.length})
            </button>
            <button
              onClick={() => setActiveTab("applications")}
              className={`pb-4 px-6 text-sm font-semibold tracking-tight transition-all duration-300 border-b-2 focus:outline-none cursor-pointer ${
                activeTab === "applications"
                  ? "border-[#0B2545] text-[#0B2545]"
                  : "border-transparent text-navy-gray hover:text-navy"
              }`}
            >
              Applications ({applications.length})
            </button>
            <button
              onClick={() => setActiveTab("enquiries")}
              className={`pb-4 px-6 text-sm font-semibold tracking-tight transition-all duration-300 border-b-2 focus:outline-none cursor-pointer ${
                activeTab === "enquiries"
                  ? "border-[#0B2545] text-[#0B2545]"
                  : "border-transparent text-navy-gray hover:text-navy"
              }`}
            >
              Enquiries ({enquiries.length})
            </button>
          </div>
        </div>

        {/* Dynamic content rendering */}
        {loading ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-off-white-dark">
            <div className="inline-block w-8 h-8 border-2 border-[#0B2545] border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-sm text-navy-gray font-inter">Loading database metrics...</p>
          </div>
        ) : activeTab === "jobs" ? (
          /* Jobs Tab */
          jobs.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-off-white-dark">
              <Briefcase className="h-10 w-10 text-navy-gray/30 mx-auto mb-4" />
              <p className="text-base font-semibold text-navy font-poppins mb-1">No Active Positions</p>
              <p className="text-xs text-navy-gray max-w-sm mx-auto mb-6">Create a position requisition using the button above to list jobs on the careers page.</p>
            </div>
          ) : (
            <div className="bg-white border border-off-white-dark rounded-3xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-off-white border-b border-navy/5 text-navy-gray font-semibold text-xs font-inter uppercase">
                      <th className="p-4 pl-6">Position Name</th>
                      <th className="p-4">Location</th>
                      <th className="p-4">Type</th>
                      <th className="p-4">Work Model</th>
                      <th className="p-4">Date Added</th>
                      <th className="p-4 pr-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy/5 text-sm font-inter text-navy">
                    {jobs.map((job) => {
                      const id = job._id || job.id;
                      return (
                        <tr key={id} className="hover:bg-off-white/40 transition-colors">
                          <td className="p-4 pl-6 font-semibold font-poppins">{job.title}</td>
                          <td className="p-4">
                            <span className="inline-flex items-center text-xs text-navy-gray">
                              <MapPin className="h-3 w-3 mr-1" />
                              {job.location}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                              job.type === "Full Time" 
                                ? "bg-accent-gold/10 text-accent-gold" 
                                : job.type === "Part Time" 
                                ? "bg-accent-teal/10 text-accent-teal" 
                                : "bg-blue-500/10 text-blue-500"
                            }`}>
                              {job.type}
                            </span>
                          </td>
                          <td className="p-4 text-xs font-semibold text-navy/80">{job.model}</td>
                          <td className="p-4 text-xs text-navy-gray">
                            {new Date(job.createdAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </td>
                          <td className="p-4 pr-6 text-right">
                            <button
                              onClick={() => handleDeleteJob(id)}
                              className="p-2 text-navy-gray hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                              title="Delete requisition"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )
        ) : activeTab === "applications" ? (
          /* Applications Tab */
          applications.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-off-white-dark">
              <Users className="h-10 w-10 text-navy-gray/30 mx-auto mb-4" />
              <p className="text-base font-semibold text-navy font-poppins mb-1">No Applications Yet</p>
              <p className="text-xs text-navy-gray max-w-sm mx-auto">Candidate applications submitted through the Careers page will appear here.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {applications.map((app) => {
                const id = app._id || app.id;
                return (
                  <div
                    key={id}
                    onClick={() => handleOpenApplicationDetails(app)}
                    className="bg-white border border-off-white-dark rounded-3xl p-6 shadow-sm relative hover:shadow-md hover:border-accent-teal/30 hover:scale-[1.01] transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-semibold font-poppins text-navy">{app.fullName}</h4>
                          <p className="text-xs font-semibold text-accent-gold mt-1 flex items-center">
                            <Briefcase className="h-3 w-3 mr-1" />
                            Applied for: {app.jobTitle}
                          </p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteApplication(id);
                          }}
                          className="p-2 text-navy-gray hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors cursor-pointer z-10"
                          title="Remove application"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Details Summary */}
                      <div className="grid grid-cols-2 gap-2 text-xs font-inter text-navy-gray border-t border-navy/5 pt-3">
                        <div className="flex items-center">
                          <Mail className="h-3.5 w-3.5 mr-2 shrink-0 text-navy-gray/60" />
                          <span className="truncate">{app.email}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3.5 w-3.5 mr-2 shrink-0 text-navy-gray/60" />
                          <span>Exp: {app.experience} {Number(app.experience) === 1 ? "Yr" : "Yrs"}</span>
                        </div>
                      </div>
                    </div>

                    {/* View Profile Action Link */}
                    <div className="pt-4 mt-4 border-t border-navy/5 flex items-center justify-between text-xs font-semibold text-accent-teal">
                      <span>View Full Profile</span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                );
              })}
            </div>
          )
        ) : (
          /* Enquiries Tab */
          enquiries.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-off-white-dark">
              <Mail className="h-10 w-10 text-navy-gray/30 mx-auto mb-4" />
              <p className="text-base font-semibold text-navy font-poppins mb-1">No Enquiries Yet</p>
              <p className="text-xs text-navy-gray max-w-sm mx-auto">Sourcing lead enquiries submitted through the contact page will appear here.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {enquiries.map((enq) => {
                const id = enq._id || enq.id;
                return (
                  <div
                    key={id}
                    onClick={() => setSelectedEnquiry(enq)}
                    className="bg-white border border-off-white-dark rounded-3xl p-6 shadow-sm relative hover:shadow-md hover:border-blue-500/35 hover:scale-[1.01] transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-semibold font-poppins text-navy">{enq.fullName}</h4>
                          <p className="text-xs font-semibold text-accent-teal mt-1 flex items-center">
                            <Building className="h-3.5 w-3.5 mr-1.5" />
                            {enq.companyName || "Personal / Individual"}
                          </p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteEnquiry(id);
                          }}
                          className="p-2 text-navy-gray hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors cursor-pointer z-10"
                          title="Remove enquiry"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Summary fields */}
                      <div className="grid grid-cols-2 gap-2 text-xs font-inter text-navy-gray border-t border-navy/5 pt-3">
                        <div className="flex items-center">
                          <Mail className="h-3.5 w-3.5 mr-2 shrink-0 text-navy-gray/60" />
                          <span className="truncate">{enq.email}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-3.5 w-3.5 mr-2 shrink-0 text-navy-gray/60" />
                          <span>{enq.phone}</span>
                        </div>
                      </div>
                    </div>

                    {/* Footer link */}
                    <div className="pt-4 mt-4 border-t border-navy/5 flex items-center justify-between text-xs font-semibold text-accent-teal">
                      <span>View Message Details</span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                );
              })}
            </div>
          )
        )}

      </div>

      {/* Add Job Requisition Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white border border-off-white-dark rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto relative">
            
            {/* Header */}
            <div>
              <h3 className="text-xl font-normal font-poppins text-navy">
                Add Position Requisition
              </h3>
              <p className="text-xs text-navy-gray font-inter mt-1">
                Enter details below to publish an active job on the public Careers portal.
              </p>
            </div>

            {/* Error banner */}
            {formError && (
              <div className="p-3 bg-red-50 border border-red-200 text-xs font-semibold text-red-600 rounded-xl font-inter">
                {formError}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleAddJobSubmit} className="space-y-4">
              
              {/* Position Name */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-navy uppercase tracking-wider font-inter">Position Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senior Frontend Developer"
                  value={positionName}
                  onChange={(e) => setPositionName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-off-white/40 focus:bg-white focus:outline-none focus:border-accent-gold/40 text-sm text-navy font-inter transition-all duration-200"
                />
              </div>

              {/* Location */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-navy uppercase tracking-wider font-inter">Location</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mumbai, India or Remote"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-off-white/40 focus:bg-white focus:outline-none focus:border-accent-gold/40 text-sm text-navy font-inter transition-all duration-200"
                />
              </div>

              {/* Position Type */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-navy uppercase tracking-wider font-inter">Position Type</label>
                <select
                  value={positionType}
                  onChange={(e) => setPositionType(e.target.value as any)}
                  className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-off-white/40 focus:bg-white focus:outline-none focus:border-accent-gold/40 text-sm text-navy font-inter transition-all duration-200 cursor-pointer"
                >
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>

              {/* Work Model */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-navy uppercase tracking-wider font-inter">Work Model</label>
                <select
                  value={workModel}
                  onChange={(e) => setWorkModel(e.target.value as any)}
                  className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-off-white/40 focus:bg-white focus:outline-none focus:border-accent-gold/40 text-sm text-navy font-inter transition-all duration-200 cursor-pointer"
                >
                  <option value="On Site">On Site</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Work From Home">Work From Home</option>
                </select>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end space-x-3 pt-4 border-t border-navy/5">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  disabled={formSubmitting}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-navy-gray hover:bg-navy/5 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#0B2545] text-white hover:bg-[#081a30] hover:shadow-md transition-all duration-300 focus:outline-none cursor-pointer disabled:opacity-50"
                >
                  {formSubmitting ? "Adding..." : "Add Position"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* View Application Details Modal */}
      {selectedApplication && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className={`bg-white border border-off-white-dark rounded-3xl w-full p-6 md:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto relative transition-all duration-300 ${
            isPreviewOpen ? "max-w-5xl" : "max-w-2xl"
          }`}>
            
            {/* Close button */}
            <button
              onClick={() => setSelectedApplication(null)}
              className="absolute top-4 right-4 p-2 text-navy-gray hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
              title="Close details"
            >
              <X className="h-5 w-5" />
            </button>

            <div className={`grid grid-cols-1 gap-6 ${isPreviewOpen ? "lg:grid-cols-2" : "grid-cols-1"}`}>
              {/* Left Column: Profile Details */}
              <div className="space-y-6">
                {/* Candidate Header */}
                <div className="border-b border-navy/5 pb-5">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent-gold/10 text-accent-gold-hover">
                    Candidate Profile
                  </span>
                  <h3 className="text-2xl font-normal font-poppins text-navy mt-2">
                    {selectedApplication.fullName}
                  </h3>
                  <p className="text-sm font-semibold text-navy-gray mt-1 flex items-center">
                    <Briefcase className="h-4 w-4 mr-1.5 text-accent-teal" />
                    Applied for: <span className="text-navy ml-1">{selectedApplication.jobTitle}</span>
                  </p>
                </div>

                {/* Candidate Information Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-off-white/40 p-4 rounded-2xl border border-off-white-dark text-sm font-inter">
                  <div className="space-y-1">
                    <span className="block text-[10px] text-navy-gray uppercase font-bold tracking-wider">Email Address</span>
                    <a href={`mailto:${selectedApplication.email}`} className="font-semibold text-navy hover:underline flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-navy-gray/60" />
                      {selectedApplication.email}
                    </a>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] text-navy-gray uppercase font-bold tracking-wider">Phone Number</span>
                    <a href={`tel:${selectedApplication.phone}`} className="font-semibold text-navy hover:underline flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-navy-gray/60" />
                      {selectedApplication.phone}
                    </a>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] text-navy-gray uppercase font-bold tracking-wider">Experience</span>
                    <span className="font-semibold text-navy flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-navy-gray/60" />
                      {selectedApplication.experience} {Number(selectedApplication.experience) === 1 ? "Year" : "Years"}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] text-navy-gray uppercase font-bold tracking-wider">Date Applied</span>
                    <span className="font-semibold text-navy flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-navy-gray/60" />
                      {new Date(selectedApplication.createdAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                {/* Cover Letter Details */}
                {selectedApplication.coverLetter && (
                  <div className="space-y-2">
                    <span className="block text-[10px] text-navy-gray uppercase font-bold tracking-wider">Cover Letter</span>
                    <div className="bg-white border border-off-white-dark p-4 rounded-2xl text-sm font-inter text-navy-gray leading-relaxed whitespace-pre-wrap max-h-48 overflow-y-auto">
                      {selectedApplication.coverLetter}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Resume Live Preview */}
              {isPreviewOpen && (
                <div className="border-t lg:border-t-0 lg:border-l border-navy/5 pt-6 lg:pt-0 lg:pl-6 flex flex-col min-h-[450px]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-navy uppercase tracking-wider font-inter">Resume Preview</span>
                    <span className="text-xs text-navy-gray truncate max-w-[200px]">{selectedApplication.resumeName}</span>
                  </div>
                  <div className="flex-1 bg-off-white rounded-2xl border border-off-white-dark overflow-hidden relative min-h-[380px] h-full">
                    {selectedApplication.resumeData.startsWith("data:application/pdf") || selectedApplication.resumeName.toLowerCase().endsWith(".pdf") ? (
                      <iframe
                        src={selectedApplication.resumeData}
                        className="w-full h-full min-h-[380px] border-none"
                        title="Resume Document"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                        <FileText className="h-12 w-12 text-navy-gray/40 mb-3" />
                        <p className="text-sm font-semibold text-navy font-poppins">No Inline Preview</p>
                        <p className="text-xs text-navy-gray mt-1 max-w-[240px]">
                          This file type ({selectedApplication.resumeName.split('.').pop()?.toUpperCase()}) cannot be previewed directly in browser. Please download using the button below.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Resume File details and Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-navy/5">
              <button
                type="button"
                onClick={() => setIsPreviewOpen(!isPreviewOpen)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold border border-navy/10 bg-navy/5 text-navy hover:bg-navy/10 transition-all duration-300 focus:outline-none cursor-pointer"
              >
                {isPreviewOpen ? "Hide Resume Preview" : "Preview Resume"}
              </button>
              <button
                type="button"
                onClick={() => handleDownloadResume(selectedApplication)}
                className="w-full sm:flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold bg-[#0B2545] text-white hover:bg-[#081a30] hover:shadow-md transition-all duration-300 focus:outline-none cursor-pointer"
              >
                <Download className="h-4 w-4 mr-2" />
                Download CV ({selectedApplication.resumeName})
              </button>
              <button
                type="button"
                onClick={() => {
                  const id = selectedApplication._id || selectedApplication.id;
                  handleDeleteApplication(id);
                  setSelectedApplication(null);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold border border-red-200 text-red-600 hover:bg-red-50 transition-all duration-300 focus:outline-none cursor-pointer"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Reject Application
              </button>
            </div>
          </div>
        </div>
      )}
      {/* View Enquiry Details Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white border border-off-white-dark rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto relative">
            
            {/* Close button */}
            <button
              onClick={() => setSelectedEnquiry(null)}
              className="absolute top-4 right-4 p-2 text-navy-gray hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
              title="Close details"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="border-b border-navy/5 pb-5">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                Business Sourcing Lead
              </span>
              <h3 className="text-2xl font-normal font-poppins text-navy mt-2">
                {selectedEnquiry.fullName}
              </h3>
              {selectedEnquiry.companyName && (
                <p className="text-sm font-semibold text-navy-gray mt-1 flex items-center">
                  <Building className="h-4 w-4 mr-1.5 text-accent-teal" />
                  Organization: <span className="text-navy ml-1">{selectedEnquiry.companyName}</span>
                </p>
              )}
            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-off-white/40 p-4 rounded-2xl border border-off-white-dark text-sm font-inter">
              <div className="space-y-1">
                <span className="block text-[10px] text-navy-gray uppercase font-bold tracking-wider">Email Address</span>
                <a href={`mailto:${selectedEnquiry.email}`} className="font-semibold text-navy hover:underline flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-navy-gray/60" />
                  {selectedEnquiry.email}
                </a>
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] text-navy-gray uppercase font-bold tracking-wider">Phone Number</span>
                <a href={`tel:${selectedEnquiry.phone}`} className="font-semibold text-navy hover:underline flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-navy-gray/60" />
                  {selectedEnquiry.phone}
                </a>
              </div>
              <div className="space-y-1 col-span-2">
                <span className="block text-[10px] text-navy-gray uppercase font-bold tracking-wider">Submitted On</span>
                <span className="font-semibold text-navy flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-navy-gray/60" />
                  {new Date(selectedEnquiry.createdAt).toLocaleString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>

            {/* Sourcing Mandates / Message */}
            <div className="space-y-2">
              <span className="block text-[10px] text-navy-gray uppercase font-bold tracking-wider">Message / Sourcing Requirements</span>
              <div className="bg-white border border-off-white-dark p-4 rounded-2xl text-sm font-inter text-navy-gray leading-relaxed whitespace-pre-wrap max-h-60 overflow-y-auto font-inter">
                {selectedEnquiry.message}
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end pt-4 border-t border-navy/5">
              <button
                onClick={() => {
                  const id = selectedEnquiry._id || selectedEnquiry.id;
                  handleDeleteEnquiry(id);
                  setSelectedEnquiry(null);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold border border-red-200 text-red-600 hover:bg-red-50 transition-all duration-300 focus:outline-none cursor-pointer"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Enquiry Record
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
