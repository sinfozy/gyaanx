"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation Links Data
  const navLinks = [
    { name: "AI Tutors", href: "/ai-tutors" },
    { name: "Courses", href: "/courses" },
  ];

  // Conditional color variables for clean code
  const textClass = scrolled ? "text-white hover:text-violet-400" : "text-black hover:text-violet-600";
  const gyaanClass = scrolled ? "text-white" : "text-black";

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
          scrolled 
            ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800 py-3 shadow-lg" 
            : "bg-transparent py-7"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="text-3xl font-bold tracking-tight flex items-center gap-1 group">
            <span className={`transition-colors duration-300 ${gyaanClass}`}>Gyaan</span>
            <span className="text-violet-600 drop-shadow-[0_0_10px_rgba(124,58,237,0.4)]">X</span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-10">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} // Updated from "#" to link.href
                  className={`text-[15px] font-semibold transition-colors duration-300 ${textClass}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* SEARCH BAR */}
            <div className="relative group w-[320px]">
              <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${scrolled ? 'text-slate-400' : 'text-slate-500'}`} />
              <input 
                type="text" 
                placeholder="Ask GyaanX AI..."
                className={`w-full text-sm rounded-full py-2.5 pl-11 pr-4 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500/50 
                ${scrolled 
                  ? "bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500" 
                  : "bg-slate-200/50 border-slate-300 text-black placeholder:text-slate-600"
                }`}
              />
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-4">
            <div className={`hidden sm:flex items-center gap-2 border px-3 py-1.5 rounded-full transition-all duration-300 ${
              scrolled ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-white border-slate-200 text-emerald-600 shadow-sm"
            }`}>
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider">24/7 LIVE</span>
            </div>

            <Link 
              href="/auth" 
              className="bg-violet-600 hover:bg-violet-700 text-white text-[15px] font-bold px-7 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-md shadow-violet-500/25"
            >
              Sign Up
            </Link>

            <button 
              onClick={() => setIsOpen(true)}
              className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-white' : 'text-black'}`}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE SIDEBAR --- */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} 
        onClick={() => setIsOpen(false)} 
      />

      <aside className={`fixed top-0 right-0 z-[70] w-72 h-full bg-white border-l p-8 shadow-2xl transition-transform duration-300 lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-slate-800"><X size={28}/></button>
        
        <div className="flex flex-col gap-8 mt-12">
            <Link href="/" className="text-2xl font-bold text-black">Gyaan<span className="text-violet-600">X</span></Link>
            
            <nav className="flex flex-col gap-6">
                <Link href="/ai-tutors" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-800 border-b pb-2">AI Tutors</Link>
                <Link href="/subjects" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-800 border-b pb-2">Subjects</Link>
                <Link href="#" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-800 border-b pb-2">Pricing</Link>
            </nav>

            <div className="mt-4">
                <input type="text" placeholder="Search..." className="w-full bg-slate-100 p-3 rounded-xl text-sm border focus:outline-violet-500" />
            </div>

            <Link href="/auth" className="mt-4 bg-violet-600 text-white text-center py-3 rounded-xl font-bold shadow-lg">Get Started</Link>
        </div>
      </aside>
    </>
  );
};

export default Header;