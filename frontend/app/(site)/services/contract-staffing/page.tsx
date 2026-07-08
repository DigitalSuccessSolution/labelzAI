import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Check,
  Users,
  Clock,
  CreditCard,
  RefreshCw,
  TrendingUp,
} from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function ContractStaffingPage() {
  const whyContractPoints = [
    {
      title: "Rapid Deployment",
      desc: "Pre-vetted contract professionals available for immediate mobilization within defined timelines",
      icon: Zap,
    },
    {
      title: "Full Compliance Management",
      desc: "PF, ESIC, statutory deductions, and labour law compliance handled end-to-end by LabelzAI",
      icon: ShieldCheck,
    },
    {
      title: "Flexible Engagement Models",
      desc: "Short-term, long-term, and rolling contract options tailored to project duration and budget",
      icon: RefreshCw,
    },
    {
      title: "Seamless Payroll Administration",
      desc: "Accurate, on-time payroll processing for all deployed contract staff",
      icon: CreditCard,
    },
    {
      title: "Scalable Workforce Solutions",
      desc: "Ramp up or scale down headcount dynamically in response to business cycles",
      icon: TrendingUp,
    },
  ];

  const checklistItems = [
    "Rapid Deployment of Pre-Vetted Contract Talent",
    "Full PF, ESIC & Statutory Compliance Management",
    "Flexible Short-Term, Long-Term & Rolling Contracts",
    "Seamless Payroll Processing & Administration",
    "Replacement Assurance for Underperforming Resources",
    "Scalable Workforce for Project Ramp-Ups & Ramp-Downs",
    "IT & Non-IT Contract Staffing Across PAN India",
    "Zero Overhead on Permanent Headcount Commitment",
    "Dedicated Account Manager for Every Engagement",
    "End-to-End Staffing Lifecycle Management",
    "Background Verification & Onboarding Support",
    "Transparent Pricing with No Hidden Costs",
  ];

  return (
    <>
      {/* Responsive clip-path style block for desktop viewports only */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 1024px) {
          .custom-clipped-hero {
            clip-path: url(#slanted-cut-curve);
          }
        }
      `}} />

      {/* SVG ClipPath with objectBoundingBox for responsive vector clipping */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <clipPath id="slanted-cut-curve" clipPathUnits="objectBoundingBox">
            <path d="M 0.22,0 L 1,0 L 1,1 L 0.08,1 C 0.03,1 0,0.97 0,0.92 L 0.22,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* 1. Page Header (Full Bleed Edge-to-Edge Hero Layout with Diagonal Cut) */}
      <section className="bg-white border-b border-off-white-dark relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[320px] lg:min-h-[440px]">
          {/* Left Block (Text Content) */}
          <div className="lg:col-span-5 flex flex-col justify-center px-6 py-10 md:py-16 lg:px-12 xl:px-20 bg-gradient-to-r from-[#7ABEF4]/12 via-[#7ABEF4]/3 to-white text-navy relative z-10">
            {/* Background design elements */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-accent-gold/3 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3 pointer-events-none" />
            <div className="max-w-xl relative z-10 pb-8 lg:pb-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-gold bg-accent-gold/10 rounded-full mb-6">
                Services
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[36px] font-normal font-poppins text-navy leading-tight mb-6 tracking-tight">
                Contract Staffing
              </h1>
              <p className="text-lg md:text-xl text-navy-gray font-inter font-semibold leading-relaxed mb-4">
                Flexible Contract Staffing Solutions for Agile Business Demands
              </p>
              <p className="text-xs text-navy-gray/70 italic font-inter">
                Scale Fast. Hire Smart. Stay Compliant — Across IT &amp; Non-IT Sectors PAN India.
              </p>
              <div className="pt-6">
                <Link href="/contact" className="inline-block">
                  <button className="group inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold bg-navy text-white hover:bg-navy/90 hover:shadow-lg transition-all duration-300 focus:outline-none cursor-pointer">
                    Talk to Our Experts
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Block (Image with Slanted Cut) */}
          <div className="lg:col-span-7 relative min-h-[240px] lg:min-h-full overflow-hidden bg-off-white custom-clipped-hero">
            <Image
              src="/images/contract-staffing.png"
              alt="Contract staffing professionals collaborating"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Left Image Column */}
            <div className="lg:col-span-6 relative overflow-hidden rounded-3xl shadow-xl border border-off-white-dark h-[380px] w-full">
              <Image
                src="/images/contract-dashboard.png"
                alt="Contract staffing operations dashboard"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 relative pl-6 border-l-2 border-accent-gold">
              <p className="text-base md:text-lg text-navy font-semibold leading-relaxed font-inter mb-4">
                LabelzAI Techservices LLP provides contract staffing services designed for organizations that require skilled professionals on a fixed-term, project-based, or temporary engagement basis — without the overhead and commitment of permanent headcount.
              </p>
              <p className="text-sm text-navy-gray leading-relaxed font-inter mb-4">
                In today&apos;s dynamic business environment, workforce agility is a competitive advantage. Our contract staffing solutions enable companies to deploy qualified talent precisely when and where it is needed — for product launches, seasonal demand surges, project ramp-ups, or interim role coverage — with zero compromise on candidate quality.
              </p>
              <p className="text-sm text-navy-gray leading-relaxed font-inter mb-4">
                We manage the complete staffing lifecycle — from talent sourcing and screening to onboarding, payroll processing, and compliance management — so your internal HR and operations teams remain focused on core business priorities.
              </p>
              <p className="text-xs text-navy-gray font-inter">
                We deploy contract professionals across Technology, Healthcare, Pharmaceutical, Manufacturing, BFSI, Sales, and Operations functions, serving startups, mid-market enterprises, and large corporations with equal efficiency across PAN India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What Our Contract Staffing Delivers (Workflow Cards Style) */}
      <section className="py-12 md:py-16 bg-white border-t border-off-white-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary">Operational Strategy</Badge>
            <h2 className="mt-4 text-3xl md:text-4xl font-normal font-poppins text-navy tracking-tight">
              What Our Contract Staffing Delivers
            </h2>
            <p className="mt-2 text-sm text-navy-gray max-w-2xl mx-auto font-inter">
              Our contract staffing model addresses workforce gaps with speed, compliance, and operational excellence — enabling businesses to scale without the overhead of permanent hiring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {whyContractPoints.map((point) => (
              <div
                key={point.title}
                className="group flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-off-white-dark shadow-sm hover:border-accent-gold/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full border border-off-white-dark bg-accent-gold/5 shadow-sm flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white group-hover:border-navy transition-all duration-300 text-accent-gold">
                  <point.icon className="h-6 w-6 transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-semibold font-poppins text-navy mb-2 leading-tight">
                  {point.title}
                </h3>
                <p className="text-xs text-navy-gray leading-relaxed font-inter">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose LabelzAI Contract Staffing Checklist Grid */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(122,190,244,0.05),transparent_45%)] border-t border-off-white-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Left: Illustration with premium decorations */}
            <div className="lg:col-span-4 relative">
              {/* Glowing decorative backdrops */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#7ABEF4]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative overflow-hidden rounded-3xl shadow-xl border border-off-white-dark h-[380px] w-full group z-10">
                <Image
                  src="/images/contract-teamwork.png"
                  alt="Team collaborating on contract staffing solutions"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating analytics stats card overlay */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl p-4 border border-off-white-dark flex items-center space-x-3 transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <div className="w-10 h-10 rounded-full bg-[#7ABEF4]/10 flex items-center justify-center text-navy">
                    <Clock className="h-5 w-5 animate-pulse text-navy" />
                  </div>
                  <div>
                    <p className="text-[10px] text-navy-gray uppercase font-semibold tracking-wider">Deployment</p>
                    <h4 className="text-sm font-bold text-navy font-poppins">48-Hour Mobilization</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Checklists (2 Column Grid) */}
            <div className="lg:col-span-8">
              <Badge variant="secondary">Value Proposition</Badge>
              <h2 className="mt-4 text-3xl md:text-4xl font-normal font-poppins text-navy tracking-tight leading-tight mb-4">
                Why Choose LabelzAI Contract Staffing?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {checklistItems.map((item) => {
                  const words = item.split(" ");
                  const boldCount = 2; // bold the first 2 words
                  const boldPart = words.slice(0, boldCount).join(" ");
                  const normalPart = words.slice(boldCount).join(" ");

                  return (
                    <div
                      key={item}
                      className="group flex items-start bg-white border border-off-white-dark rounded-2xl p-4 hover:shadow-md hover:border-accent-gold/30 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-full bg-accent-gold/10 flex items-center justify-center shrink-0 text-accent-gold mr-3.5 group-hover:bg-navy group-hover:text-white transition-all duration-300">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="text-xs text-navy font-inter leading-relaxed mt-0.5">
                        <span className="font-semibold text-navy">{boldPart}</span> {normalPart}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Closing CTA Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl border border-off-white-dark group">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/cta-bg.png"
                alt="LabelzAI Corporate background"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-navy/85 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-80" />
            </div>

            <div className="relative z-10 p-6 md:p-8 text-center space-y-4">
              <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto font-inter">
                If your business needs dependable, compliant, and rapidly deployable talent — whether IT or Non-IT — LabelzAI&apos;s contract staffing division is built to deliver. Get in touch today to discuss your workforce requirements and build a staffing plan aligned with your project timelines.
              </p>

              <p className="text-xl sm:text-2xl md:text-3xl font-normal font-poppins text-white leading-snug tracking-tight max-w-2xl mx-auto">
                Contract Staffing is not just hiring — it is workforce agility.
              </p>

              <div className="pt-2">
                <Link href="/contact" className="inline-block">
                  <button className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-semibold bg-white text-navy hover:bg-white/95 hover:shadow-lg transition-all duration-300 focus:outline-none cursor-pointer">
                    Contact Us
                    <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
