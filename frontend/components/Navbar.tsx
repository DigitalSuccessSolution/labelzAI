"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  PhoneCall,
  UserCheck,
  Settings,
  Users,
  ShieldAlert,
  Monitor,
  HeartPulse,
  Pill,
  Wine,
  ShoppingCart,
  Leaf,
  Cpu,
  Landmark,
  Apple,
  Truck,
  Factory,
} from "lucide-react";
import { NAV_ITEMS, COMPANY_INFO } from "@/lib/data";
import Button from "./ui/Button";

// Map subpage names to distinct Lucide icons
const dropdownIconMap: Record<string, any> = {
  // Services
  "Permanent Recruitment": UserCheck,
  "Recruitment Process Outsourcing (RPO)": Settings,
  "Contract Staffing": Users,
  "Executive Search (Headhunting / Retained Search)": ShieldAlert,
  // Industries
  "Information Technology (IT)": Monitor,
  "Healthcare & Biotechnology": HeartPulse,
  "Pharma & Life Sciences": Pill,
  "Liquor & Beverages": Wine,
  "E-Commerce": ShoppingCart,
  "Renewable Energy & ESG": Leaf,
  "Semiconductor & Electronics Manufacturing": Cpu,
  "FinTech & BFSI": Landmark,
  "FMCG & FMCD": Apple,
  "Logistics": Truck,
  "Manufacturing (Automobile and Ancillaries)": Factory,
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and scroll to top on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-off-white-dark py-3"
          : "bg-white py-4"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/newlogo.png"
            alt="LabelzAI Techservices LLP"
            width={160}
            height={48}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

            if (hasChildren) {
              return (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`relative py-1.5 px-0.5 flex items-center space-x-1 text-[15px] font-medium font-inter transition-all duration-300 cursor-pointer group ${isActive
                        ? "text-accent-gold font-semibold"
                        : "text-navy-gray hover:text-accent-gold"
                      }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180 text-accent-gold" : "text-navy-gray/60"
                        }`}
                    />
                    <span className={`absolute bottom-0 left-0 h-[2px] bg-accent-gold transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`} />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute mt-1 bg-white border border-off-white-dark rounded-2xl p-4 shadow-xl transition-all duration-300 origin-top ${item.name === "Industries"
                        ? "w-[640px] md:w-[720px] left-1/2 -translate-x-1/2"
                        : "w-80 left-0"
                      } ${activeDropdown === item.name
                        ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
                        : "opacity-0 scale-95 pointer-events-none -translate-y-2"
                      }`}
                  >
                    <div className={`grid gap-2 ${item.name === "Industries" ? "grid-cols-2" : "grid-cols-1"}`}>
                      {item.children?.map((child) => {
                        const Icon = dropdownIconMap[child.name] || Settings;
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={`flex items-center space-x-2.5 p-2 rounded-r-xl transition-all duration-300 group/child ${
                              isChildActive
                                ? "border-l-2 border-accent-gold bg-accent-gold/5 pl-3.5"
                                : "border-l-2 border-transparent hover:border-accent-gold hover:bg-accent-gold/5 hover:pl-3.5"
                            }`}
                          >
                            <Icon
                              className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                                isChildActive
                                  ? "text-accent-gold scale-110 rotate-[15deg]"
                                  : "text-navy/40 group-hover/child:text-accent-gold group-hover/child:scale-110 group-hover/child:rotate-[15deg]"
                              }`}
                            />
                            <span
                              className={`text-sm font-semibold transition-colors duration-300 ${
                                isChildActive
                                  ? "text-accent-gold"
                                  : "text-navy group-hover/child:text-accent-gold"
                              }`}
                            >
                              {child.name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative py-1.5 px-0.5 text-[15px] font-medium font-inter transition-all duration-300 group ${pathname === item.href
                    ? "text-accent-gold font-semibold"
                    : "text-navy-gray hover:text-accent-gold"
                  }`}
              >
                <span>{item.name}</span>
                <span className={`absolute bottom-0 left-0 h-[2px] bg-accent-gold transition-all duration-300 ${pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/contact">
            <Button variant="secondary" size="md">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl text-navy hover:bg-off-white-dark transition-all focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-off-white-dark shadow-2xl transition-all duration-300 overflow-y-auto max-h-[calc(100vh-65px)] ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="px-4 py-6 space-y-4">
          {NAV_ITEMS.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

            if (hasChildren) {
              return (
                <div key={item.name} className="space-y-1">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${isActive
                        ? "text-accent-teal bg-accent-teal/5"
                        : "text-navy hover:bg-off-white-dark"
                      }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180 text-accent-gold" : "text-navy/55"
                        }`}
                    />
                  </button>

                  <div
                    className={`pl-4 space-y-1 transition-all duration-300 ${activeDropdown === item.name ? "block" : "hidden"
                      }`}
                  >
                    {item.children?.map((child) => {
                      const Icon = dropdownIconMap[child.name] || Settings;
                      const isChildActive = pathname === child.href;
                      return (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={`flex items-center space-x-2.5 px-4 py-2 border-l rounded-r-lg text-xs font-medium transition-all duration-300 group/child ${
                            isChildActive
                              ? "border-accent-gold text-accent-gold bg-accent-gold/5"
                              : "border-transparent text-navy-gray hover:border-accent-gold hover:text-accent-gold hover:bg-accent-gold/5"
                          }`}
                        >
                          <Icon
                            className={`h-3.5 w-3.5 shrink-0 transition-colors duration-300 ${
                              isChildActive
                                ? "text-accent-gold"
                                : "text-navy/40 group-hover/child:text-accent-gold"
                            }`}
                          />
                          <span>{child.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${pathname === item.href
                    ? "text-accent-teal bg-accent-teal/5"
                    : "text-navy hover:bg-off-white-dark"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-off-white-dark space-y-3">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
              className="flex items-center space-x-3 px-4 py-2 text-sm text-navy hover:text-accent-teal"
            >
              <PhoneCall className="h-4 w-4 text-accent-teal" />
              <span className="font-semibold">{COMPANY_INFO.phone}</span>
            </a>
            <div className="px-4">
              <Link href="/contact" className="block w-full">
                <Button variant="secondary" className="w-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
