import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LabelzAI Techservices LLP | Premium HR & Recruitment Consultancy",
  description:
    "LabelzAI Techservices LLP is a leading HR, Executive Search, and Recruitment consultancy. Empowering corporate growth with intelligence-driven talent acquisition solutions.",
  keywords: [
    "Recruitment Consultancy",
    "Executive Search",
    "Staffing Solutions",
    "LabelzAI Techservices LLP",
    "IT Recruitment India",
    "RPO Services Mumbai",
  ],
  authors: [{ name: "LabelzAI Techservices LLP" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-off-white text-navy font-inter selection:bg-accent-gold/30 selection:text-navy">
        {children}
      </body>
    </html>
  );
}
