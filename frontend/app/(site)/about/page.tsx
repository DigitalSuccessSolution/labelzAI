import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Monitor,
  HeartPulse,
  Pill,
  Landmark,
  Factory,
  Wine,
  ShoppingCart,
  Users,
  ClipboardCheck,
  ShieldCheck,
  RefreshCcw,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const industries = [
  { name: "Information Technology", icon: Monitor },
  { name: "Medical & Healthcare", icon: HeartPulse },
  { name: "Pharmaceuticals", icon: Pill },
  { name: "BFSI", icon: Landmark },
  { name: "Manufacturing", icon: Factory },
  { name: "Liquor & Beverages", icon: Wine },
  { name: "FMCG", icon: ShoppingCart },
];

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
              <Badge variant="secondary">Our Core Strategy</Badge>
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
            <Badge variant="secondary">Our Portfolio</Badge>
            <h2 className="mt-4 text-3xl md:text-4xl font-normal font-poppins text-navy tracking-tight">
              Industries We Serve
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-14">
            <p className="text-base md:text-lg text-navy-gray leading-relaxed font-inter">
              We serve a diverse industry portfolio spanning Information Technology, Medical & Healthcare, Pharmaceuticals, BFSI, Manufacturing, Liquor & Beverages, FMCG, etc. — delivering end-to-end hiring solutions from executive search and lateral hiring to bulk recruitment and contract staffing.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.name}
                  className="group flex flex-col items-center text-center p-6 rounded-2xl border border-off-white-dark hover:border-accent-gold/30 hover:shadow-xl bg-white transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 bg-accent-gold/5 group-hover:scale-110 group-hover:bg-accent-gold/10">
                    <Icon className="h-6 w-6 text-accent-gold" />
                  </div>
                  <p className="text-sm font-semibold text-navy font-inter leading-snug">
                    {ind.name}
                  </p>
                </div>
              );
            })}

            <div className="group flex flex-col items-center justify-center text-center p-6 rounded-2xl border border-dashed border-navy/20 hover:border-accent-gold bg-white transition-all duration-300">
              <span className="text-2xl font-bold font-poppins text-navy mb-1 leading-none">…</span>
              <p className="text-sm font-semibold text-navy-gray font-inter">And Many More</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HR Services in Feature-List Style */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-6">
              <Badge variant="secondary">Corporate Support</Badge>
              <h2 className="text-3xl md:text-4xl font-normal font-poppins text-navy tracking-tight leading-tight">
                Strategic Lifecycle Support
              </h2>
              <p className="text-base md:text-lg text-navy-gray leading-relaxed font-inter">
                Our HR management services encompass workforce planning, onboarding optimization, compliance management, and employee lifecycle support — engineered to reduce operational overhead and improve retention rates.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {hrServicesList.map((srv) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={srv.title}
                    className="group bg-white border border-off-white-dark rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 hover:border-accent-gold/20 transition-all duration-300"
                  >
                    <div className="w-11 h-11 bg-accent-gold/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent-gold/10 transition-all duration-300">
                      <Icon className="h-5 w-5 text-accent-gold" />
                    </div>
                    <h3 className="text-base font-semibold font-poppins text-navy mb-1.5">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-navy-gray leading-relaxed font-inter">
                      {srv.description}
                    </p>
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
          <div className="max-w-4xl mx-auto relative">
            <div className="relative bg-white border border-off-white-dark rounded-3xl p-10 md:p-16 shadow-lg hover:shadow-xl transition-all duration-500 text-center space-y-8">
              <div className="mx-auto w-14 h-14 bg-accent-gold/5 rounded-2xl flex items-center justify-center">
                <Sparkles className="h-7 w-7 text-accent-gold" />
              </div>

              <p className="text-base md:text-lg text-navy-gray leading-relaxed max-w-3xl mx-auto font-inter">
                At LabelzAI, we don&apos;t just fill positions — we build scalable talent pipelines aligned to your long-term growth strategy. With deep domain expertise, a verified candidate network, and a structured delivery process, we ensure faster time-to-hire, lower attrition, and stronger team performance.
              </p>

              <p className="text-2xl sm:text-3xl md:text-4xl font-normal font-poppins text-navy leading-snug tracking-tight max-w-3xl mx-auto">
                Partner with LabelzAI — where{" "}
                <span className="text-accent-gold font-semibold">intelligent recruitment</span> meets{" "}
                <span className="text-accent-gold font-semibold">operational excellence.</span>
              </p>

              <div className="pt-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg" className="group text-base">
                    Contact Us
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
