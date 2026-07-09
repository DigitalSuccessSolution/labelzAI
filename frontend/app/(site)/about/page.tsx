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
      {/* 1. Two-Column Layout (Core Strategy) */}
      <section className="py-10 md:py-8 bg-white">
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
                  src="/images/aboutus.png"
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
      <section className="py-12 md:py-16 bg-white border-t border-off-white-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Image Column */}
            <div className="lg:col-span-6 relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#7ABEF4]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-off-white-dark h-[300px] sm:h-[400px] w-full">
                <Image
                  src="/images/about-portfolio.png"
                  alt="Global industry connection network map"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl md:text-4xl font-normal font-poppins text-navy tracking-tight leading-tight">
                Industries We <span className="text-accent-gold font-semibold">Serve</span>
              </h2>
              <p className="text-base md:text-lg text-navy-gray leading-relaxed font-inter">
                We serve a diverse industry portfolio spanning Information Technology, Medical &amp; Healthcare, Pharmaceuticals, BFSI, Manufacturing, Liquor &amp; Beverages, FMCG, etc. — delivering end-to-end hiring solutions from executive search and lateral hiring to bulk recruitment and contract staffing.
              </p>
              
              {/* Sectors Tag Grid */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-gray/70 mb-4 font-inter">
                  Core Segments & Verticals
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "Information Technology",
                    "Medical & Healthcare",
                    "Pharmaceuticals",
                    "BFSI",
                    "Manufacturing",
                    "Liquor & Beverages",
                    "FMCG",
                    "Other Growth Sectors"
                  ].map((sector) => (
                    <span 
                      key={sector} 
                      className="px-3.5 py-2 bg-[#f0f5fa] border border-[#e2e8f0] text-navy text-xs font-semibold rounded-full hover:border-accent-gold/30 hover:bg-white hover:shadow-sm transition-all duration-300"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
                    className="group bg-[#f0f5fa] border border-[#e2e8f0]/80 rounded-2xl p-6 hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:border-accent-gold/25 transition-all duration-300 flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="text-accent-gold mb-4">
                        <Icon className="h-7 w-7 transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-6" />
                      </div>
                      <h3 className="text-base font-semibold font-poppins text-navy mb-1.5 group-hover:text-accent-gold transition-colors duration-300">
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

      {/* 5. Our Mission & Vision Sections */}
      <section className="py-16 md:py-24 bg-white border-t border-navy/5">
        <div className="container mx-auto px-4 md:px-6 space-y-20 md:space-y-28">

          {/* Mission Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <h2 className="text-3xl md:text-4.5xl font-semibold font-poppins text-navy">
                Our Mission
              </h2>
              <p className="text-base md:text-lg text-navy-gray leading-relaxed font-inter font-normal">
                LabelzAI Techservices is committed to bridging the widening gap between emerging technology demands and India&apos;s evolving talent ecosystem. As a trusted IT and Non-IT recruitment agency, our mission is to identify, assess, and deploy professionals equipped for tomorrow&apos;s roles — AI/ML engineers, data annotators, cloud architects, cybersecurity specialists, and automation experts — alongside core Non-IT talent across healthcare, pharma, and FMCG sectors. We deliver precision-driven staffing solutions and executive search services that anticipate industry shifts rather than react to them. By combining deep sector expertise with forward-looking workforce planning, LabelzAI empowers organizations to build future-ready teams, ensuring sustained competitiveness in an increasingly technology-driven, skills-based global economy.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 relative h-[300px] sm:h-[360px] w-full rounded-2xl overflow-hidden border border-off-white-dark shadow-md bg-off-white">
              <Image
                src="/images/mission-visual.png"
                alt="LabelzAI team collaboration representing our mission"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Vision Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Image (Ordered first on large screen) */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative h-[300px] sm:h-[360px] w-full rounded-2xl overflow-hidden border border-off-white-dark shadow-md bg-off-white">
              <Image
                src="/images/vision-visual.png"
                alt="LabelzAI future growth vision looking over the horizon"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column: Text (Ordered second on large screen) */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col space-y-6">
              <h2 className="text-3xl md:text-4.5xl font-semibold font-poppins text-navy">
                Our Vision
              </h2>
              <p className="text-base md:text-lg text-navy-gray leading-relaxed font-inter font-normal">
                LabelzAI envisions becoming India&apos;s most trusted talent acquisition partner, bridging the gap between skilled professionals and organizations across IT and Non-IT sectors. As a leading HR management and recruitment consultancy, we are committed to delivering scalable workforce solutions through data-driven candidate sourcing, rigorous screening protocols, and industry-specific hiring expertise. Our vision extends beyond transactional staffing — we aim to build long-term partnerships rooted in quality talent mapping, compliance-driven HR practices, and measurable placement success. By integrating technology with human insight, LabelzAI strives to redefine recruitment excellence, empowering businesses with the right talent and professionals with the right opportunities, consistently, ethically, and efficiently, nationwide.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Closing Paragraph as Card CTA-Style Banner */}
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
