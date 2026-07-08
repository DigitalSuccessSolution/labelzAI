import React from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function SemiconductorElectronicsPage() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center py-20 px-6 text-center">
      <div className="max-w-2xl bg-white border border-off-white-dark shadow-xl rounded-2xl p-8 md:p-12">
        <div className="flex items-center justify-center space-x-2 text-xs text-navy-gray mb-4">
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/industries" className="hover:text-navy transition-colors">Industries</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-accent-teal font-semibold">Semiconductor & Electronics Manufacturing</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold font-poppins text-navy mb-4 tracking-tight">
          Semiconductor & Electronics Manufacturing
        </h1>
        <p className="text-base text-navy-gray leading-relaxed mb-8">
          Detailed talent mapping, AI-assisted screening, and recruitment services tailored specifically for Semiconductor & Electronics Manufacturing sector are coming soon.
        </p>
        <Link href="/contact">
          <Button variant="primary" className="group">
            Contact Us
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
