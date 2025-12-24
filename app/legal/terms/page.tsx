"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { FileText, UserPlus, CreditCard, Scale, HelpCircle } from "lucide-react";

export default function TermsOfUse() {
  const sections = [
    { id: "access", title: "Dashboard Access" },
    { id: "payments", title: "Subscription & Payments" },
    { id: "intellect", title: "Intellectual Property" },
    { id: "rules", title: "Conduct Code" }
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col text-slate-900 selection:bg-indigo-600 selection:text-white">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="border-b border-slate-100 pb-12 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h1 className="text-7xl font-black italic tracking-tighter text-slate-950 mb-2">Terms of Use.</h1>
              <p className="text-indigo-600 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                 <FileText size={14}/> Agreement for Students & Educators
              </p>
            </div>
            <p className="text-slate-400 font-medium italic text-sm">Revised: 24 Dec 2025</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
            <aside className="hidden lg:block sticky top-40 h-fit">
               <nav className="space-y-4">
                  {sections.map(s => (
                    <a key={s.id} href={`#${s.id}`} className="flex items-center justify-between group">
                        <span className="font-black text-slate-400 group-hover:text-slate-900 uppercase text-[11px] tracking-widest transition-all italic">{s.title}</span>
                        <div className="h-px w-0 group-hover:w-10 bg-indigo-500 transition-all"></div>
                    </a>
                  ))}
               </nav>
            </aside>

            <div className="lg:col-span-3 space-y-24">
               
               <section id="access">
                  <h3 className="text-2xl font-black mb-8 italic flex items-center gap-3"> <UserPlus className="text-indigo-600"/> 1. Dashboard Access</h3>
                  <p className="text-slate-600 leading-relaxed font-medium mb-6 italic">
                    "Each user must verify their email via OTP to unlock account functions."
                  </p>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    Accounts on GyaanX are strictly personal. Sharing credentials or using automated scripts to extract AI content is a violation that may lead to instant permanent suspension without a refund.
                  </p>
               </section>

               <section id="payments">
                  <h3 className="text-2xl font-black mb-8 italic flex items-center gap-3"> <CreditCard className="text-indigo-600"/> 2. Subscription & Payments</h3>
                  <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
                    <p className="font-bold text-slate-800 text-xl mb-4">GyaanX Prime Activation</p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Access to the premium dashboard, special batches (Class 6-12, JEE/NEET/SSC), and advanced AI tutor features requires a one-time ₹199 subscription fee. 
                    </p>
                    <ul className="text-[11px] font-black text-slate-400 uppercase tracking-wider space-y-2">
                        <li>• Non-Refundable Nature</li>
                        <li>• Exclusive access for a single registered email ID</li>
                        <li>• Transaction managed via Razorpay Secure SSL</li>
                    </ul>
                  </div>
               </section>

               <section id="intellect">
                  <h3 className="text-2xl font-black mb-8 italic flex items-center gap-3"> <Scale className="text-indigo-600"/> 3. Intellectual Property</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    All generated AI solutions, 3D interactive models, and GyaanX exclusive modules are property of **InfoxySMS Pvt. Ltd.** Re-publishing these materials on public domains like YouTube, WhatsApp, or competitor sites without explicit written consent is illegal.
                  </p>
               </section>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}