"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  Fingerprint,
  ShieldAlert, 
  Database, 
  Cpu, 
  Eye, 
  Eraser, 
  Share2, 
  FileText,
  Cloud,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

// Animation Variants with explicit string literal types for 'ease'
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" }
} as const;

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function PrivacyPolicy() {
  const sections = [
    { id: "intro", title: "Transparency & Scope" },
    { id: "collection", title: "The Data We Process" },
    { id: "ai-usage", title: "Neural Logic Learning" },
    { id: "protection", title: "Encryption Standards" },
    { id: "rights", title: "Your Digital Rights" },
    { id: "retention", title: "Retention Policy" },
    { id: "sharing", title: "Third Party Governance" },
    { id: "minor", title: "Underage Guardianship" },
    { id: "contact", title: "Connect with Privacy Team" }
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen flex flex-col text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* HERO HEADER */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#020617] rounded-[3rem] lg:rounded-[5rem] p-12 lg:p-24 text-center text-white mb-20 shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full -mr-40 -mt-40 animate-pulse"></div>
             
             <div className="relative z-10 max-w-3xl mx-auto">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="flex justify-center mb-8"
                >
                  <div className="h-20 w-20 bg-indigo-600/20 text-indigo-400 rounded-[2rem] flex items-center justify-center border border-indigo-500/30">
                      <ShieldCheck size={40} />
                  </div>
                </motion.div>
                <h1 className="text-6xl lg:text-8xl font-black italic tracking-tighter mb-6">Trust & Privacy</h1>
                <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.5em] bg-white/5 inline-block px-6 py-2 rounded-full border border-white/10">
                  Last Updated: 2025-12-27 v.4.0.1
                </p>
                <p className="text-slate-500 text-lg mt-10 font-medium italic leading-relaxed">
                  "At GyaanX, privacy isn't just a legal checkbox. We protect your cognitive footprint as fiercely as we protect your name."
                </p>
             </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            
            {/* STICKY NAV SIDEBAR */}
            <aside className="hidden lg:block">
              <div className="sticky top-40 space-y-2 p-6 bg-white border border-slate-100 rounded-[3rem] shadow-sm">
                 <p className="text-[10px] font-black uppercase text-slate-400 mb-6 tracking-widest flex items-center gap-2">
                   <FileText size={14}/> Policy Sitemap
                 </p>
                 <nav className="space-y-1">
                    {sections.map(s => (
                      <motion.a 
                        whileHover={{ x: 5 }}
                        key={s.id} 
                        href={`#${s.id}`} 
                        className="group flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-indigo-50 transition-all font-black italic text-[11px] uppercase tracking-tighter text-slate-400 hover:text-indigo-600"
                      >
                         <div className="w-1.5 h-1.5 bg-slate-200 group-hover:bg-indigo-600 rounded-full"></div>
                         {s.title}
                      </motion.a>
                    ))}
                 </nav>
              </div>
            </aside>

            {/* CONTENT AREA */}
            <div className="lg:col-span-3 space-y-24">
                
                {/* 1. INTRO SECTION */}
                <section id="intro" className="scroll-mt-40">
                   <SectionHeader title="01. Transparency & Scope" />
                   <div className="bg-white p-10 rounded-[3rem] border border-slate-100 text-slate-500 font-medium italic leading-[1.8] space-y-6">
                      <p>GyaanX AI operates under the fundamental principle of <strong>User-Led Knowledge Processing</strong>. This Privacy Policy outlines how we manage personal identifying information (PII) and the anonymous conceptual data used by our AI.</p>
                      <p>By using the platform, you agree to the collection methods detailed below, intended specifically for improving personalized pedagogical outcomes.</p>
                   </div>
                </section>

                {/* 2. COLLECTION - BENTO GRID STYLE */}
                <section id="collection" className="scroll-mt-40">
                    <SectionHeader title="02. The Data We Process" />
                    <p className="text-slate-500 font-medium italic mb-8">We divide the data into two primary operational pipelines:</p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <motion.div {...fadeInUp} className="bg-white p-8 rounded-[3rem] border border-slate-100 group hover:border-indigo-500 transition-colors">
                            <Fingerprint className="text-indigo-600 mb-6" size={32}/>
                            <h3 className="font-black italic text-xl text-slate-900 mb-2">Static Account Identity</h3>
                            <p className="text-sm text-slate-500 italic">Name, school/college context, email, and authentication timestamps provided during Auth-handshake.</p>
                        </motion.div>
                        <motion.div {...fadeInUp} className="bg-white p-8 rounded-[3rem] border border-slate-100 group hover:border-indigo-500 transition-colors">
                            <Cpu className="text-indigo-600 mb-6" size={32}/>
                            <h3 className="font-black italic text-xl text-slate-900 mb-2">Neural Input Threads</h3>
                            <p className="text-sm text-slate-500 italic">Scanned question photos (Doubt Solver), quiz reaction times, and Socratic logic decisions.</p>
                        </motion.div>
                        <motion.div {...fadeInUp} className="bg-white p-8 rounded-[3rem] border border-slate-100 group hover:border-indigo-500 transition-colors md:col-span-2">
                            <Cloud className="text-indigo-600 mb-6" size={32}/>
                            <h3 className="font-black italic text-xl text-slate-900 mb-2">Platform Behavioral Telemetry</h3>
                            <p className="text-sm text-slate-500 italic">Device resolution, IP address (for region-specific localized language training), and time-per-page to optimize our dashboard efficiency.</p>
                        </motion.div>
                    </div>
                </section>

                {/* 3. AI USAGE - DEEP TRANS-AI CLAUSE */}
                <section id="ai-usage" className="scroll-mt-40">
                    <SectionHeader title="03. Neural Logic Learning" />
                    <div className="bg-indigo-950 rounded-[4rem] p-12 text-white relative overflow-hidden group">
                       <div className="absolute right-0 bottom-0 text-white/5 group-hover:rotate-12 transition-transform duration-1000"><Database size={400}/></div>
                       <div className="relative z-10 space-y-6">
                          <p className="text-indigo-300 font-black italic text-2xl">The "Cognitive Privacy" Standard.</p>
                          <p className="text-slate-400 font-medium italic leading-relaxed max-w-2xl">Your specific queries are fed into our local Inference Models. These models analyze **the logical failure point** of your question. This analysis is merged into our global dataset only after high-entropy anonymization, ensuring the model learns how people think, not what YOU specifically thought.</p>
                          <div className="flex flex-wrap gap-4 pt-4">
                             <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl text-xs"><CheckCircle2 className="text-emerald-400" size={14}/> No Model Back-Tracing</div>
                             <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl text-xs"><CheckCircle2 className="text-emerald-400" size={14}/> Data-Zero Retraining</div>
                             <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl text-xs"><CheckCircle2 className="text-emerald-400" size={14}/> Non-Sales Commitment</div>
                          </div>
                       </div>
                    </div>
                </section>

                {/* 4. SECURITY */}
                <section id="protection" className="scroll-mt-40">
                    <SectionHeader title="04. Encryption Standards" />
                    <div className="bg-emerald-50 border-2 border-emerald-100 rounded-[3rem] p-10 flex flex-col md:flex-row items-center gap-10">
                         <div className="h-20 w-20 bg-emerald-600 rounded-[2rem] shrink-0 flex items-center justify-center text-white shadow-xl">
                            <ShieldAlert size={40} />
                         </div>
                         <div>
                            <p className="font-black text-slate-950 text-2xl italic tracking-tight mb-3 leading-none">Military-Grade Persistence.</p>
                            <p className="text-slate-600 italic font-medium leading-relaxed">We utilize AES-256 for data at rest and TLS 1.3 for data in transit. Our database architecture utilizes VPC isolation, ensuring that even within our cloud provider (AWS), your individual data clusters are segmented and firewalled from general traffic.</p>
                         </div>
                    </div>
                </section>

                {/* 5. USER RIGHTS */}
                <section id="rights" className="scroll-mt-40">
                   <SectionHeader title="05. Your Digital Rights" />
                   <div className="grid md:grid-cols-2 gap-8">
                      <motion.div whileHover={{ y: -10 }} className="p-8 bg-white border-2 border-slate-50 rounded-[3rem] hover:border-indigo-600 transition-all cursor-pointer">
                        <Eye className="text-indigo-600 mb-6" size={24} />
                        <h4 className="text-xl font-black italic mb-4">Right of Access</h4>
                        <p className="text-slate-500 italic text-sm font-medium">Download a complete .JSON export of your learning footprint and analytics from your settings menu at any time.</p>
                      </motion.div>
                      <motion.div whileHover={{ y: -10 }} className="p-8 bg-white border-2 border-slate-50 rounded-[3rem] hover:border-rose-600 transition-all cursor-pointer">
                        <Eraser className="text-rose-600 mb-6" size={24} />
                        <h4 className="text-xl font-black italic mb-4">The Erasure Clause</h4>
                        <p className="text-slate-500 italic text-sm font-medium">Request full account and neural data deletion. Once initiated, all personal mappings are purged within 72 business hours.</p>
                      </motion.div>
                   </div>
                </section>

                {/* 6. MINORS PROTECT */}
                <section id="minor" className="scroll-mt-40">
                   <SectionHeader title="06. Underage Guardianship" />
                   <div className="bg-amber-50 border border-amber-200 p-10 rounded-[4rem]">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="h-10 w-10 bg-amber-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-amber-200"><AlertCircle size={20}/></div>
                        <h4 className="text-2xl font-black italic tracking-tighter">Students under 13</h4>
                      </div>
                      <p className="text-amber-800 font-medium italic leading-relaxed">Consistent with COPPA and global frameworks, GyaanX requires Parental Consent verification for any student identified under 13 years of age. Personal profile building for these students is severely limited to classroom topics only.</p>
                   </div>
                </section>

                {/* 7. CONTACT BOX */}
                <section id="contact" className="scroll-mt-40">
                   <SectionHeader title="07. Policy Connect" />
                   <motion.div 
                     whileHover={{ scale: 1.01 }}
                     className="bg-white p-12 rounded-[4rem] border-2 border-slate-100 flex flex-col md:flex-row justify-between items-center gap-12 group transition-all"
                    >
                      <div className="max-w-md">
                         <h4 className="text-3xl font-black italic mb-4 tracking-tight group-hover:text-indigo-600 transition-colors">Privacy Liaison.</h4>
                         <p className="text-slate-500 italic font-medium leading-relaxed">Reach our data compliance office directly regarding GDPR, DPDP Act 2023, or account investigations.</p>
                      </div>
                      <div className="text-center md:text-right space-y-4 w-full md:w-auto">
                        <button className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black italic uppercase text-xs tracking-widest hover:bg-slate-900 transition-all flex items-center justify-center gap-3 w-full">
                           Legal Inquiry <Share2 size={16}/>
                        </button>
                        <p className="text-slate-400 font-bold uppercase text-[9px] tracking-widest">Responses within 48 Hours</p>
                      </div>
                   </motion.div>
                </section>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Utility Components for a unified look
function SectionHeader({ title }: { title: string }) {
    return (
        <motion.div 
            {...fadeInUp}
            className="flex items-center gap-6 mb-12"
        >
            <h2 className="text-3xl lg:text-4xl font-black italic text-slate-950 tracking-tighter leading-none whitespace-nowrap">{title}</h2>
            <div className="h-[2px] w-full bg-slate-100"></div>
        </motion.div>
    );
}