import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
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

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
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
          <div className="space-y-6">
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
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-navy-light hover:bg-accent-gold hover:text-navy rounded-xl transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
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

          {/* Col 3: Platform Quick Links */}
          <div className="space-y-4">
            <h4 className="font-poppins font-bold text-sm text-accent-gold uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
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
              <li>
                <Link
                  href="/contact"
                  className="group flex items-center text-sm text-off-white/80 hover:text-white transition-all duration-300"
                >
                  <ArrowRight className="h-3.5 w-3.5 mr-1.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 text-accent-gold transition-all duration-300" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Links */}
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
          <p>
            Designed and Developed by{" "}
            <a
              href="https://digitalsuccesssolutions.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-off-white hover:text-accent-gold transition-colors font-semibold hover:underline"
            >
              Digital Success Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
