"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const verifySession = async () => {
      try {
        const res = await fetch("/api/admin/session");
        const data = await res.json();
        if (data.success && data.authenticated) {
          router.replace("/admin/dashboard");
        } else {
          router.replace("/admin/login");
        }
      } catch (error) {
        console.error("Session check failed:", error);
        router.replace("/admin/login");
      }
    };
    verifySession();
  }, [router]);

  return (
    <div className="flex-1 flex flex-col justify-center items-center min-h-[70vh] bg-off-white">
      <div className="w-10 h-10 border-4 border-navy border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-sm font-inter text-navy-gray">Verifying admin session credentials...</p>
    </div>
  );
}
