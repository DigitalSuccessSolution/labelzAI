import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import { COMPANY_INFO, NAV_ITEMS } from "@/lib/data";

// Inline SVGs for Brand Icons not available in older lucide-react versions
const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Filter services out of main nav items for clean lists
  const services = NAV_ITEMS.find((item) => item.name === "Services")?.children || [];
  const quickLinks = NAV_ITEMS.filter(
    (item) => item.name !== "Services"
  );

  return (
    <footer className="bg-navy text-white border-t border-navy-light pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/newlogo.png"
                alt="LabelzAI Techservices LLP"
                width={160}
                height={48}
                className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            
            <p className="text-sm text-off-white/80 leading-relaxed max-w-sm font-inter">
              {COMPANY_INFO.tagline}
            </p>
            
            <div className="flex items-center space-x-4 pt-2">
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-navy-light hover:bg-accent-gold hover:text-navy rounded-xl transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={COMPANY_INFO.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-navy-light hover:bg-accent-gold hover:text-navy rounded-xl transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-navy-light hover:bg-accent-gold hover:text-navy rounded-xl transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="space-y-4">
            <h4 className="font-poppins font-bold text-sm text-accent-gold uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-sm text-off-white/80 hover:text-white transition-all duration-300"
                  >
                    <ArrowRight className="h-3.5 w-3.5 mr-1.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 text-accent-gold transition-all duration-300" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & General Links */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-poppins font-bold text-sm text-accent-gold uppercase tracking-wider">
                Contact Us
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2.5 text-sm text-off-white/80">
                  <MapPin className="h-5 w-5 text-accent-gold shrink-0 mt-0.5" />
                  <span className="leading-snug">{COMPANY_INFO.address}</span>
                </li>
                <li className="flex items-center space-x-2.5 text-sm text-off-white/80">
                  <Phone className="h-4.5 w-4.5 text-accent-gold shrink-0" />
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                    className="hover:text-white transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center space-x-2.5 text-sm text-off-white/80">
                  <Mail className="h-4.5 w-4.5 text-accent-gold shrink-0" />
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-navy-light flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-off-white/60">
          <p>© {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
