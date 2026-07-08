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

export default function AdminDashboardPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [activeTab, setActiveTab] = useState<"jobs" | "applications" | "db">("jobs");
  
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
      
      const jobsData = await jobsRes.json();
      const appsData = await appsRes.json();
      
      if (jobsData.success) setJobs(jobsData.data);
      if (appsData.success) setApplications(appsData.data);
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mb-8">
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
          </div>
          
          <button
            onClick={() => setActiveTab("db")}
            className={`pb-4 px-4 text-xs font-semibold uppercase tracking-wider flex items-center transition-all duration-300 border-b-2 focus:outline-none cursor-pointer ${
              activeTab === "db"
                ? "border-accent-gold text-accent-gold"
                : "border-transparent text-navy-gray hover:text-accent-gold"
            }`}
          >
            <Database className="h-3.5 w-3.5 mr-1.5" />
            DB Browser
          </button>
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
                    className="bg-white border border-off-white-dark rounded-3xl p-6 shadow-sm relative hover:shadow-md transition-shadow"
                  >
                    <button
                      onClick={() => handleDeleteApplication(id)}
                      className="absolute top-4 right-4 p-2 text-navy-gray hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                      title="Remove application"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>

                    <div className="space-y-4">
                      {/* Header */}
                      <div>
                        <h4 className="text-lg font-semibold font-poppins text-navy">{app.fullName}</h4>
                        <p className="text-xs font-semibold text-accent-gold mt-1 flex items-center">
                          <Briefcase className="h-3 w-3 mr-1" />
                          Applied for: {app.jobTitle}
                        </p>
                      </div>

                      {/* Details grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-inter text-navy-gray border-t border-b border-navy/5 py-3">
                        <div className="flex items-center">
                          <Mail className="h-3.5 w-3.5 mr-2 shrink-0 text-navy-gray/60" />
                          <a href={`mailto:${app.email}`} className="hover:text-navy underline">{app.email}</a>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-3.5 w-3.5 mr-2 shrink-0 text-navy-gray/60" />
                          <a href={`tel:${app.phone}`} className="hover:text-navy underline">{app.phone}</a>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3.5 w-3.5 mr-2 shrink-0 text-navy-gray/60" />
                          Experience: {app.experience} {Number(app.experience) === 1 ? "Year" : "Years"}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3.5 w-3.5 mr-2 shrink-0 text-navy-gray/60" />
                          Applied on: {new Date(app.createdAt).toLocaleDateString()}
                        </div>
                      </div>

                      {/* Cover Letter */}
                      {app.coverLetter && (
                        <div className="space-y-1">
                          <p className="text-xs font-bold text-navy uppercase tracking-wider font-inter">Cover Letter</p>
                          <p className="text-xs text-navy-gray bg-off-white p-3.5 rounded-xl font-inter leading-relaxed whitespace-pre-wrap max-h-28 overflow-y-auto">
                            {app.coverLetter}
                          </p>
                        </div>
                      )}

                      {/* CV Download button */}
                      <div className="pt-2">
                        <button
                          onClick={() => handleDownloadResume(app)}
                          className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-semibold bg-navy/5 text-navy hover:bg-navy hover:text-white transition-all duration-300 focus:outline-none cursor-pointer border border-navy/10"
                        >
                          <Download className="h-3.5 w-3.5 mr-2" />
                          Download CV ({app.resumeName})
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )
        ) : (
          /* DB Browser Tab (MongoDB Real Connection Details) */
          <div className="bg-white border border-off-white-dark rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
            <div className="flex items-start space-x-4 border-b border-navy/5 pb-6">
              <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center text-accent-gold shrink-0">
                <Database className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold font-poppins text-navy">
                  MongoDB Cloud / Local Database Server Connection
                </h3>
                <p className="text-sm text-navy-gray font-inter leading-relaxed">
                  The Admin Console and Careers Portal now fetch and write data directly to a dedicated Node/Express backend communicating with MongoDB. Job and candidate records are structured in standard schemas.
                </p>
              </div>
            </div>

            {/* Connection Status Panels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-inter text-navy">
              <div className="p-4 bg-off-white border border-navy/5 rounded-2xl space-y-1">
                <span className="text-[10px] text-navy-gray uppercase font-semibold font-inter">Backend API Link</span>
                <p className="font-semibold">http://localhost:5000</p>
              </div>
              <div className="p-4 bg-off-white border border-navy/5 rounded-2xl space-y-1">
                <span className="text-[10px] text-navy-gray uppercase font-semibold font-inter">Database Status</span>
                <p className="font-semibold flex items-center">
                  <span className={`w-2.5 h-2.5 rounded-full mr-2 inline-block ${dbStatus.database === "connected" ? "bg-emerald-500 animate-pulse" : "bg-red-500 animate-pulse"}`} />
                  MongoDB {dbStatus.database === "connected" ? "Connected" : "Disconnected"}
                </p>
              </div>
            </div>

            {/* Collection payloads */}
            <div className="space-y-3">
              <span className="block text-xs font-bold text-navy uppercase tracking-wider font-inter">Live MongoDB Payload Snapshot</span>
              <div className="bg-slate-950 rounded-2xl p-4 overflow-hidden border border-white/10 shadow-inner font-mono text-xs text-cyan-400">
                <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
                  <span className="text-[10px] text-slate-500 font-mono">MongoDB Documents Overview</span>
                  <span className="text-[10px] text-emerald-400 font-mono">● LIVE</span>
                </div>
                <pre className="max-h-[300px] overflow-y-auto leading-relaxed text-slate-300">
                  {JSON.stringify({
                    mongodbStatus: dbStatus.database,
                    activeJobsCount: jobs.length,
                    activeApplicationsCount: applications.length,
                    collections: {
                      jobs: jobs.map(j => ({ id: j._id || j.id, title: j.title, location: j.location, type: j.type })),
                      applications: applications.map(a => ({ id: a._id || a.id, name: a.fullName, email: a.email, jobId: a.jobId, resume: a.resumeName }))
                    }
                  }, null, 2)}
                </pre>
              </div>
            </div>
          </div>
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

    </div>
  );
}
