import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  ClipboardCheck,
  ShieldCheck,
  RefreshCcw,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const hrServicesList = [
  {
    icon: Users,
    title: "Workforce Planning",
    description: "Aligning human capital needs with strategic organizational goals.",
  },
  {
    icon: ClipboardCheck,
    title: "Onboarding Optimization",
    description: "Designing streamlined processes for faster employee integration.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Management",
    description: "Assuring alignment with statutory regulations and policies.",
  },
  {
    icon: RefreshCcw,
    title: "Employee Lifecycle Support",
    description: "Providing ongoing operational support from onboarding to exit.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. Page Header (Minimal Premium White Hero) */}
      <section className="bg-white pt-16 pb-6 relative overflow-hidden">
        {/* Soft background accents */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-gold/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal font-poppins text-navy tracking-tight leading-tight">
            About Us
          </h1>
          <p className="mt-6 text-base md:text-lg text-navy-gray max-w-2xl mx-auto leading-relaxed font-inter">
            Operated on the principles of data intelligence and human expertise to build scalable talent solutions.
          </p>
        </div>
      </section>

      {/* 2. Two-Column Layout (Core Strategy) */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-normal font-poppins text-navy tracking-tight leading-tight">
                Where Intelligence Meets{" "}
                <span className="text-accent-gold font-semibold">Recruitment Excellence</span>
              </h2>
              <p className="text-base md:text-lg text-navy-gray leading-relaxed font-inter">
                At LabelzAI, we deliver precision-driven HR management and recruitment solutions for both IT and Non-IT industries, connecting organizations with high-caliber talent that drives measurable business outcomes.
              </p>
              <p className="text-base md:text-lg text-navy-gray leading-relaxed font-inter">
                Founded on the principles of data intelligence and human expertise, LabelzAI operates at the intersection of technology-enabled hiring and strategic workforce management. Our recruitment framework integrates competency-based assessment, role-specific talent mapping, and AI-assisted candidate screening to ensure every placement aligns with your organizational objectives.
              </p>
            </div>

            {/* Right Image Column */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-gold/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-off-white-dark h-[320px] sm:h-[450px] lg:h-[440px] w-full">
                <Image
                  src="/images/about-us.png"
                  alt="Professional team meeting in a high-tech corporate office"
                  width={960}
                  height={640}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Middle Section: Industry Portfolio */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="mt-4 text-3xl md:text-4xl font-normal font-poppins text-navy tracking-tight">
              Industries We Serve
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base md:text-lg text-navy-gray leading-relaxed font-inter">
              We serve a diverse industry portfolio spanning Information Technology, Medical &amp; Healthcare, Pharmaceuticals, BFSI, Manufacturing, Liquor &amp; Beverages, FMCG, etc. — delivering end-to-end hiring solutions from executive search and lateral hiring to bulk recruitment and contract staffing.
            </p>
          </div>
        </div>
      </section>

      {/* 4. HR Services in Feature-List Style */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-normal font-poppins text-navy tracking-tight leading-tight">
                Strategic Lifecycle Support
              </h2>
              <p className="text-base md:text-lg text-navy-gray leading-relaxed font-inter">
                Our HR management services encompass workforce planning, onboarding optimization, compliance management, and employee lifecycle support — engineered to reduce operational overhead and improve retention rates.
              </p>
              <p className="text-base text-navy-gray leading-relaxed font-inter pt-4 border-t border-navy/5">
                At LabelzAI, we don&apos;t just fill positions — we build scalable talent pipelines aligned to your long-term growth strategy. With deep domain expertise, a verified candidate network, and a structured delivery process, we ensure faster time-to-hire, lower attrition, and stronger team performance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {hrServicesList.map((srv) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={srv.title}
                    className="group bg-white border border-[#e2e8f0]/80 rounded-2xl p-6 hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:border-accent-gold/25 transition-all duration-300 flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="text-accent-gold mb-4">
                        <Icon className="h-7 w-7 transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-6" />
                      </div>
                      <h3 className="text-base font-bold font-poppins text-navy mb-1.5 group-hover:text-accent-gold transition-colors duration-300">
                        {srv.title}
                      </h3>
                      <p className="text-xs md:text-sm text-navy-gray leading-relaxed font-inter font-normal">
                        {srv.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Closing Paragraph as Card CTA-Style Banner */}
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
              <p className="text-2xl sm:text-3xl md:text-4xl font-normal font-poppins text-white leading-snug tracking-tight max-w-4xl mx-auto">
                Partner with LabelzAI — where{" "}
                <span className="text-[#7ABEF4] font-semibold">intelligent recruitment</span> meets{" "}
                <span className="text-[#7ABEF4] font-semibold">operational excellence.</span>
              </p>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-semibold bg-white text-navy hover:bg-white/95 hover:shadow-lg transition-all duration-300 focus:outline-none cursor-pointer"
                >
                  Contact Us
                  <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
