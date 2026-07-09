"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Shield, User, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("admin@labelzai.com");
  const [password, setPassword] = useState("LabelzAI@2026");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  // Check if already authenticated on mount
  useEffect(() => {
    const verifySession = async () => {
      try {
        const res = await fetch("/api/admin/session");
        const data = await res.json();
        if (data.success && data.authenticated) {
          router.replace("/admin/dashboard");
        } else {
          setChecking(false);
        }
      } catch (err) {
        setChecking(false);
      }
    };
    verifySession();
  }, [router]);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username.trim() || !password.trim()) {
      setError("Please enter your admin credentials.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: username, password: password }),
      });
      const data = await res.json();

      if (data.success) {
        router.push("/admin/dashboard");
      } else {
        setError(data.error || "Invalid username or secret key.");
      }
    } catch (err) {
      console.error("Login submission error:", err);
      setError("Server connection failed. Please verify the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <div className="flex-1 flex justify-center items-center min-h-[90vh] bg-[#f8fafc]">
        <div className="w-10 h-10 border-4 border-[#0B2545] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]/60 relative flex flex-col items-center justify-center py-16 px-4 min-h-[90vh] overflow-hidden">
      
      {/* Background soft dynamic ambient color nodes */}
      <div className="absolute top-1/4 left-1/4 w-[380px] h-[380px] bg-blue-400/5 rounded-full blur-[100px] z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] bg-indigo-400/5 rounded-full blur-[100px] z-0 pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-[250px] h-[250px] bg-amber-400/5 rounded-full blur-[90px] z-0 pointer-events-none" />

      <div className="max-w-[480px] w-full flex flex-col items-center text-center space-y-8 relative z-10">
        
        {/* Shield Icon header */}
        <div className="space-y-4 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#0B2545] flex items-center justify-center text-white shadow-[0_8px_20px_rgba(11,37,69,0.15)] border border-[#0B2545]/10">
            <Shield className="h-7 w-7 text-blue-300" />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-normal font-poppins text-[#0F172A] tracking-tight">
              Admin Portal
            </h1>
            <p className="text-sm text-[#475569] font-inter">
              Secure access to LabelzAI Command Center
            </p>
          </div>
        </div>

        {/* Login Form Card - Premium Light theme container */}
        <div className="w-full bg-white border border-[#e2e8f0]/80 rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.04)] relative overflow-hidden">
          
          <form onSubmit={handleLoginSubmit} className="space-y-6 text-left">
            
            {/* Error alerts */}
            {error && (
              <div className="p-3.5 bg-red-50 border border-red-200 text-xs font-semibold text-red-600 rounded-2xl font-inter">
                {error}
              </div>
            )}

            {/* Username field */}
            <div className="space-y-2">
              <label className="block text-[11px] font-bold text-[#475569] uppercase tracking-wider font-inter">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-4.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-[#94a3b8]" />
                <input
                  type="email"
                  required
                  placeholder="Enter admin username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-[#e2e8f0]/60 bg-[#F1F5F9]/60 text-[#0F172A] font-inter text-sm placeholder-[#94a3b8] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#0B2545]/8 focus:border-[#0B2545]/20 transition-all duration-200"
                />
              </div>
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <label className="block text-[11px] font-bold text-[#475569] uppercase tracking-wider font-inter">
                Secret Key
              </label>
              <div className="relative">
                <Lock className="absolute left-4.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-[#94a3b8]" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 rounded-2xl border border-[#e2e8f0]/60 bg-[#F1F5F9]/60 text-[#0F172A] font-inter text-sm placeholder-[#94a3b8] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#0B2545]/8 focus:border-[#0B2545]/20 transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94a3b8] hover:text-[#0B2545] transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                </button>
              </div>
            </div>

            {/* Submit button with hover styles */}
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center px-6 py-4 rounded-2xl text-base font-semibold bg-[#0B2545] text-white hover:bg-[#081a30] hover:shadow-lg hover:shadow-[#0B2545]/15 transition-all duration-300 focus:outline-none cursor-pointer disabled:opacity-60"
            >
              {loading ? "Verifying..." : "Enter Dashboard"}
              <ArrowRight className="h-4.5 w-4.5 ml-2" />
            </button>

          </form>

          {/* Dev credentials helper box */}
          <div className="mt-8 pt-6 border-t border-[#f1f5f9] text-[10px] text-[#94a3b8] text-center font-inter">
            <span>Username: <strong className="font-semibold text-[#475569]">admin@labelzai.com</strong> | Key: <strong className="font-semibold text-[#475569]">LabelzAI@2026</strong></span>
          </div>

        </div>

        {/* Footer info */}
        <p className="text-xs text-[#64748b] font-inter">
          Authorized access only. Technical issues? <Link href="/contact" className="text-[#0B2545] hover:underline font-semibold">Contact Support</Link>
        </p>

      </div>
    </div>
  );
}
