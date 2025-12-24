"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ShieldCheck, Lock, Fingerprint,ShieldAlert } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    { id: "collection", title: "Information We Collect" },
    { id: "ai-usage", title: "How AI Uses Data" },
    { id: "protection", title: "Data Security" },
    { id: "sharing", title: "Third Party Sharing" },
    { id: "contact", title: "Contact Us" }
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen flex flex-col text-slate-900">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* TOP BANNER */}
          <div className="bg-[#020617] rounded-[3rem] p-12 text-center text-white mb-16 shadow-xl">
             <div className="flex justify-center mb-6">
                <div className="h-16 w-16 bg-indigo-600/20 text-indigo-400 rounded-full flex items-center justify-center border border-indigo-500/30">
                    <ShieldCheck size={32} />
                </div>
             </div>
             <h1 className="text-5xl font-black italic tracking-tighter mb-4">Privacy Policy</h1>
             <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.4em]">Last Updated: December 2025</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* STICKY NAV SIDEBAR */}
            <aside className="hidden lg:block">
              <div className="sticky top-40 space-y-2">
                 <p className="text-[10px] font-black uppercase text-slate-400 mb-6 tracking-widest px-4">Navigation</p>
                 {sections.map(s => (
                   <a 
                     key={s.id} 
                     href={`#${s.id}`} 
                     className="block px-4 py-3 rounded-xl hover:bg-white hover:shadow-sm hover:text-indigo-600 transition-all font-bold text-sm text-slate-500"
                    >
                      {s.title}
                   </a>
                 ))}
              </div>
            </aside>

            {/* CONTENT AREA */}
            <div className="lg:col-span-3 space-y-16">
                
                <section id="collection">
                    <h2 className="text-3xl font-black italic mb-6 text-slate-800">1. Information We Collect</h2>
                    <p className="text-slate-500 leading-relaxed font-medium mb-6">
                        To provide personalized learning through our AI engines, GyaanX collects data including:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-3xl border border-slate-100 flex items-start gap-4">
                            <Fingerprint className="text-indigo-600 shrink-0" size={24}/>
                            <div>
                                <p className="font-bold text-slate-900 text-sm mb-1">Identity Data</p>
                                <p className="text-xs text-slate-500">Name, email, and contact details during verification.</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-3xl border border-slate-100 flex items-start gap-4">
                            <Lock className="text-indigo-600 shrink-0" size={24}/>
                            <div>
                                <p className="font-bold text-slate-900 text-sm mb-1">Usage Data</p>
                                <p className="text-xs text-slate-500">How you interact with AI Tutors and Quiz behavior.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="ai-usage">
                    <h2 className="text-3xl font-black italic mb-6 text-slate-800">2. How AI Uses Data</h2>
                    <p className="text-slate-500 leading-relaxed font-medium mb-4">
                        Unlike traditional platforms, GyaanX uses an adaptive **Neural Feedback Loop**.
                    </p>
                    <p className="text-slate-500 leading-relaxed font-medium">
                        Your prompt queries and quiz performance are anonymized and analyzed to refine your learning map. This data helps our AI understand your conceptual gaps in subjects like Math or Physics. We never sell this intellectual footprint to third-party advertisers.
                    </p>
                </section>

                <section id="protection">
                    <h2 className="text-3xl font-black italic mb-6 text-slate-800">3. Data Security</h2>
                    <div className="bg-emerald-50 border-2 border-emerald-100 rounded-3xl p-8 flex items-center gap-6">
                         <ShieldAlert size={40} className="text-emerald-600 shrink-0"/>
                         <div>
                            <p className="font-bold text-emerald-900 text-lg mb-1 italic tracking-tight">Enterprise-Grade Protection</p>
                            <p className="text-emerald-700 text-sm leading-relaxed">Every piece of data is encrypted via SSL/TLS during transit. User accounts are isolated in secure MongoDB cloud instances.</p>
                         </div>
                    </div>
                </section>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}