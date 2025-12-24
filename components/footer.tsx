"use client";

import { BrainCircuit, Mail, Github, Twitter, Youtube, Instagram, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import Link from "next/link"; // Imported Link for navigation

// Data Structures for Link Paths
const learningLinks = [
  { label: "Class 6-10", path: "/minorclasses" },
  { label: "Class 11-12", path: "/classes/senior" },
  { label: "SSC Exams", path: "/classes/ssc" },
  { label: "Banking & Railways", path: "/classes/banking-railway" },
];

const featureLinks = [
  { label: "AI Doubt Solver", path: "/features/ai-tutor" },
  { label: "Daily Quizzes", path: "/features/quizzes" },
  { label: "Notes & PDFs", path: "/notes" },
  { label: "Progress Tracking", path: "/analytics" },
];

const companyLinks = [
  { label: "About GyaanX", path: "/about" },
  { label: "Success Stories", path: "/success-stories" },
  { label: "Privacy Policy", path: "/legal/privacy" },
  { label: "Terms of Use", path: "/legal/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-slate-300 pt-10 pb-6 border-t border-slate-800/50 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] bg-indigo-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-0 left-0 h-[200px] w-[200px] bg-purple-600/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        {/* Main Section: Unified Logo and Links in one block */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-10">
          {/* Brand Column - Spans 2 columns on large screens */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 w-fit">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <BrainCircuit className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Gyaan<span className="text-indigo-500">X</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm max-w-xs mb-6">
              Revolutionizing Indian education with 24/7 AI Teachers. 
              Personalized, affordable, and accessible learning.
            </p>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-fit">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">AI Teacher Online (24/7)</span>
            </div>
          </div>

          {/* Link Columns */}
          <FooterColumn title="Learning" items={learningLinks} />
          <FooterColumn title="Features" items={featureLinks} />
          <FooterColumn title="Company" items={companyLinks} />
          
          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Contact Us</h4>
            <div className="space-y-4">
              <Link href="mailto:support@gyaanx.eu" className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                <Mail className="h-4 w-4 text-indigo-500" /> support@gyaanx.eu
              </Link>
             
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row-reverse justify-between items-center gap-6 text-center md:text-left ">
          <p className="text-sm text-slate-500 font-medium mr-110">
         © 2025 Infozy SMS & AI IntelliSoft LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/**
 * UPDATED FOOTER COLUMN:
 * Now accepts 'items' which contains 'label' and 'path'
 */
function FooterColumn({ title, items }: { title: string, items: { label: string, path: string }[] }) {
  return (
    <div>
      <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">{title}</h4>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.path} className="text-slate-400 hover:text-indigo-400 transition-colors font-medium text-sm">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * UPDATED SOCIAL ICON:
 * Now accepts 'url' prop
 */
function SocialIcon({ icon, url }: { icon: React.ReactNode, url: string }) {
  return (
    <Link 
      href={url} 
      target="_blank"
      rel="noopener noreferrer"
      className="h-9 w-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 text-slate-400"
    >
      {React.isValidElement(icon) 
        ? React.cloneElement(icon as React.ReactElement<any>, { 
            className: "h-4 w-4" 
          }) 
        : icon}
    </Link>
  );
}