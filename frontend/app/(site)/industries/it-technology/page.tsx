import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Check,
  Code2,
  Cloud,
  Database,
  ShieldAlert,
  CheckSquare,
  Network,
  Layers,
  Sparkles,
} from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function InformationTechnologyPage() {
  const domains = [
    {
      name: "Software Development",
      desc: "Full-Stack, Backend, Frontend",
      icon: Code2,
    },
    {
      name: "Cloud & DevOps Engineering",
      desc: "AWS, Azure, GCP",
      icon: Cloud,
    },
    {
      name: "Data Science, AI/ML & Analytics",
      desc: "Neural networks, data modeling, BI",
      icon: Database,
    },
    {
      name: "Cybersecurity & Information Security",
      desc: "InfoSec, pen-testing, compliance",
      icon: ShieldAlert,
    },
    {
      name: "QA & Test Automation",
      desc: "Continuous integration, selenium, cypress",
      icon: CheckSquare,
    },
    {
      name: "IT Infrastructure & Network Administration",
      desc: "SysOps, virtualization, active directory",
      icon: Network,
    },
    {
      name: "Product Management & Technical Program Management",
      desc: "Agile alignment, roadmap execution",
      icon: Layers,
    },
    {
      name: "IT Leadership",
      desc: "CTOs, VPs of Engineering, Technical Directors",
      icon: Sparkles,
    },
  ];

  const whatSetsUsApart = [
    {
      title: "Pan-India Reach",
      desc: "Sourcing talent across Tier 1, Tier 2, and Tier 3 cities",
    },
    {
      title: "Role-Level Precision",
      desc: "Structured pipelines for junior, mid-level, senior, and executive IT roles",
    },
    {
      title: "Faster TAT",
      desc: "Optimized sourcing-to-offer turnaround for urgent tech hiring needs",
    },
    {
      title: "Contract-to-Hire Flexibility",
      desc: "Scalable staffing models for project-based and long-term engagements",
    },
    {
      title: "Compliance-First Approach",
      desc: "Adherence to labor law and HR compliance",
    },
  ];

  return (
    <>
      {/* Responsive clip-path style block for desktop viewports only */}
      <style dangerouslySetInnerHTML={{
        __html: `
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
                Industries
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[36px] font-normal font-poppins text-navy leading-tight mb-6 tracking-tight">
                Information Technology (IT)
              </h1>
              <p className="text-lg md:text-xl text-navy-gray font-inter font-semibold leading-relaxed mb-4">
                IT Recruitment Services | PAN India
              </p>
              <p className="text-xs text-navy-gray/70 italic font-inter">
                LabelzAI HR Management &amp; Recruitment Consultancy delivers specialized IT recruitment services across India, connecting technology companies with pre-vetted talent across the entire experience spectrum — junior developers to executive leadership.
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
              src="/images/it-hero-bg.jpg"
              alt="IT professionals collaborating in modern office"
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
                src="/images/it-meeting.png"
                alt="IT team reviewing technical metrics and evaluation"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 relative pl-6 border-l-2 border-accent-gold space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-normal font-poppins text-navy mb-3">
                  Full-Spectrum IT Staffing Solutions
                </h3>
                <p className="text-sm md:text-base text-navy-gray leading-relaxed font-inter">
                  We provide end-to-end IT recruitment and staffing solutions covering permanent placement, contract staffing, and executive search — tailored to your hiring velocity and technical requirements.
                </p>
              </div>
              <div>
                <p className="text-sm md:text-base text-navy-gray leading-relaxed font-inter">
                  Our technical recruitment specialists use structured candidate screening and skill-mapping frameworks to evaluate coding proficiency, system design capability, and cultural fit — reducing mismatched hires and shortening your time-to-fill.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Domains We Specialize In (Workflow Cards Style) */}
      <section className="py-12 md:py-16 bg-white border-t border-off-white-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary">Specialization</Badge>
            <h2 className="mt-4 text-3xl md:text-4xl font-normal font-poppins text-navy tracking-tight">
              Domains We Specialize In
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {domains.map((dom) => (
              <div
                key={dom.name}
                className="group flex flex-col justify-between p-6 bg-white rounded-2xl border border-off-white-dark shadow-sm hover:border-accent-gold/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl border border-off-white-dark bg-accent-gold/5 flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white group-hover:border-navy transition-all duration-300 text-accent-gold">
                    <dom.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-sm font-semibold font-poppins text-navy mb-2 leading-tight">
                    {dom.name}
                  </h3>
                  <p className="text-xs text-navy-gray leading-relaxed font-inter">
                    {dom.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What Sets Us Apart Checklist Grid */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(122,190,244,0.05),transparent_45%)] border-t border-off-white-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Content column */}
            <div className="lg:col-span-4">
              <Badge variant="secondary">Our Advantage</Badge>
              <h2 className="mt-4 text-3xl md:text-4xl font-normal font-poppins text-navy tracking-tight leading-tight">
                What Sets Us Apart
              </h2>
              <p className="mt-4 text-sm text-navy-gray font-inter leading-relaxed">
                Leverage our nationwide recruitment capability, precise screening workflows, and flexible models to build a compliant technical workforce.
              </p>
            </div>

            {/* Right: Checklists Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whatSetsUsApart.map((item) => (
                  <div
                    key={item.title}
                    className="group flex items-start bg-white border border-off-white-dark rounded-2xl p-5 hover:shadow-md hover:border-accent-gold/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent-gold/10 flex items-center justify-center shrink-0 text-accent-gold mr-3.5 group-hover:bg-navy group-hover:text-white transition-all duration-300">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold font-poppins text-navy mb-1">{item.title}</h4>
                      <p className="text-xs text-navy-gray font-inter leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
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
                Whether you need senior developers, cloud engineers, or IT leadership, LabelzAI is your dedicated talent acquisition partner across PAN India.
              </p>

              <p className="text-xl sm:text-2xl md:text-3xl font-normal font-poppins text-white leading-snug tracking-tight max-w-2xl mx-auto">
                Ready to build your high-performance tech team?
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
