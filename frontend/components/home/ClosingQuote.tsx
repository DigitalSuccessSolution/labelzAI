import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ClosingQuote() {
  return (
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
            <p className="text-2xl sm:text-3xl md:text-4xl font-normal font-poppins text-white leading-relaxed tracking-tight max-w-3xl mx-auto">
              At LabelzAI, we don&apos;t just recruit — we build{" "}
              <span className="text-[#7ABEF4] font-semibold">scalable, future-ready workforces</span>{" "}
              that power{" "}
              <span className="text-[#7ABEF4] font-semibold">organizational excellence.</span>
            </p>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-px bg-white/30" />
              <div className="w-2 h-2 rounded-full bg-accent-gold" />
              <div className="w-12 h-px bg-white/30" />
            </div>

            {/* CTA Button */}
            <div>
              <Link href="/contact" className="inline-block">
                <button className="group inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-semibold bg-white text-navy hover:bg-white/95 hover:shadow-lg transition-all duration-300 focus:outline-none cursor-pointer">
                  Partner With LabelzAI
                  <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
