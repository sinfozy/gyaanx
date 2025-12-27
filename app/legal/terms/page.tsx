"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { 
  FileText, 
  UserPlus, 
  CreditCard, 
  Scale, 
  HelpCircle, 
  ShieldCheck, 
  Cpu, 
  Ban, 
  Globe, 
  Terminal,
  Zap,
  Info
} from "lucide-react";

// Animation Variants with explicit "as const" fix
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
} as const;

export default function TermsOfUse() {
  const sections = [
    { id: "nature", title: "Nature of AI Platform" },
    { id: "access", title: "Account & Dashboard" },
    { id: "prime", title: "Subscription (Prime)" },
    { id: "intellect", title: "IP & AI Solutions" },
    { id: "anti-bot", title: "Fair Use & Anti-Scraping" },
    { id: "disclaimer", title: "Liability & Accuracy" },
    { id: "termination", title: "Service Termination" },
    { id: "law", title: "Jurisdiction & Law" }
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen flex flex-col text-slate-900 selection:bg-indigo-600 selection:text-white">
      <Header />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* HIGH-IMPACT HERO HEADER */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-b-4 border-slate-950 pb-16 mb-20 flex flex-col md:flex-row justify-between items-end gap-10"
          >
            <div>
              <div className="flex items-center gap-3 text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6">
                <ShieldCheck size={16}/> GyaanX Standard Operating Agreement
              </div>
              <h1 className="text-7xl lg:text-[10rem] font-black italic tracking-[calc(-0.06em)] text-slate-950 mb-4 leading-none uppercase">
                Terms of <br/> <span className="text-indigo-600 underline decoration-indigo-200">Usage.</span>
              </h1>
            </div>
            <div className="text-right">
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">Internal Index v.2.4.0</p>
                <p className="text-indigo-600 font-black italic text-lg bg-indigo-50 px-6 py-2 rounded-full inline-block">Revision: Dec 2025</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
            
            {/* STICKY NAV SIDEBAR */}
            <aside className="hidden lg:block">
              <div className="sticky top-40 h-fit bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm">
                 <p className="text-[10px] font-black uppercase text-slate-400 mb-8 tracking-[0.2em] border-b pb-4">On this page</p>
                 <nav className="space-y-3">
                    {sections.map(s => (
                      <a 
                        key={s.id} 
                        href={`#${s.id}`} 
                        className="flex items-center justify-between group py-1"
                      >
                          <span className="font-black text-slate-400 group-hover:text-indigo-600 uppercase text-[11px] tracking-tight transition-all italic leading-tight">
                            {s.title}
                          </span>
                          <div className="h-1 w-1 bg-slate-200 rounded-full group-hover:bg-indigo-600 group-hover:w-4 transition-all"></div>
                      </a>
                    ))}
                 </nav>
                 <div className="mt-12 p-6 bg-slate-50 rounded-[2rem]">
                    <HelpCircle className="text-indigo-400 mb-4" size={24} />
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Legal Help</p>
                    <p className="text-xs font-medium italic text-slate-500 leading-relaxed">Confused by the fine print? <br/><span className="text-indigo-600 underline">Email Support.</span></p>
                 </div>
              </div>
            </aside>

            {/* THE LEGAL COMPONENT CLUSTERS */}
            <div className="lg:col-span-3 space-y-32">
               
               {/* 1. NATURE OF AI PLATFORM */}
               <motion.section {...fadeInUp} id="nature" className="scroll-mt-40">
                  <h3 className="text-3xl font-black mb-10 italic flex items-center gap-4 text-slate-900 tracking-tighter">
                     <Cpu className="text-indigo-600" size={32}/> 01. Nature of the AI Platform
                  </h3>
                  <div className="bg-white border-2 border-slate-50 p-10 rounded-[3rem] text-slate-500 leading-relaxed font-medium italic space-y-6 text-lg">
                    <p>
                        GyaanX is an **AI-Augmented Adaptive Learning Ecosystem**. Our AI Tutors and Reasoners act as supplemental educational aids. By using the platform, you acknowledge that the system operates using large-scale machine learning and probabilistic modeling.
                    </p>
                    <p>
                        The platform's goal is to simulate an elite teaching environment; however, GyaanX is NOT a substitute for mandatory school attendance or board-mandated academic registrations.
                    </p>
                  </div>
               </motion.section>

               {/* 2. ACCESS CODE & ACCOUNT SECURITY */}
               <section id="access" className="scroll-mt-40">
                  <h3 className="text-3xl font-black mb-10 italic flex items-center gap-4 text-slate-900 tracking-tighter"> 
                    <UserPlus className="text-indigo-600" size={32}/> 02. Dashboard Access & Verification
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                     <PolicyPoint 
                        title="Strict Individual Usage" 
                        text="Dashboard accounts are bound to a single identity. Accessing one account via multiple IPs or shared browser instances simultaneously will trigger a 'Security Lock'."
                     />
                     <PolicyPoint 
                        title="OTP Integrity" 
                        text="You are responsible for keeping your linked email secure. GyaanX utilizes one-time-passwords (OTP) for sensitive Prime wing access."
                     />
                  </div>
                  <div className="bg-rose-50 border-2 border-rose-100 p-8 rounded-[3rem] flex items-center gap-8">
                     <Ban className="text-rose-600 shrink-0" size={40} />
                     <p className="text-rose-900 font-bold italic">Renting or reselling GyaanX batch access to 3rd party coaching groups results in an automatic, irreversible hardware ban from the platform.</p>
                  </div>
               </section>

               {/* 3. PRIME PAYMENTS */}
               <section id="prime" className="scroll-mt-40">
                  <h3 className="text-3xl font-black mb-10 italic flex items-center gap-4 text-slate-900 tracking-tighter"> 
                    <CreditCard className="text-indigo-600" size={32}/> 03. GyaanX Prime Activation
                  </h3>
                  <div className="bg-white p-12 rounded-[4rem] border-2 border-indigo-50 shadow-sm relative overflow-hidden group">
                    <div className="absolute right-[-5%] bottom-[-10%] opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                        <Zap size={250} className="text-indigo-600"/>
                    </div>
                    <p className="font-black text-slate-900 text-3xl italic tracking-tighter mb-6 underline decoration-indigo-500">Subscription Protocol</p>
                    <div className="grid md:grid-cols-2 gap-10">
                        <ul className="text-sm font-bold text-slate-500 italic space-y-4">
                            <li className="flex gap-4"> <div className="h-2 w-2 bg-indigo-500 rounded-full mt-2" /> One-time Activation of ₹199 (Introductory)</li>
                            <li className="flex gap-4"> <div className="h-2 w-2 bg-indigo-500 rounded-full mt-2" /> Subscription grants 24/7 access to the Prime Reasoning batch</li>
                            <li className="flex gap-4"> <div className="h-2 w-2 bg-indigo-500 rounded-full mt-2" /> Pricing may be subject to revision based on GPU/Inference compute costs.</li>
                        </ul>
                        <div className="bg-indigo-50 p-6 rounded-3xl text-[10px] font-black uppercase text-indigo-400 tracking-widest leading-loose">
                            Refunds: All Prime digital assets are unlocked instantly upon purchase. Due to the intangible nature of AI compute units consumed during first launch, we do NOT provide refunds once activation is processed.
                        </div>
                    </div>
                  </div>
               </section>

               {/* 4. INTELLECTUAL PROPERTY - THE ANTI-SCRAPING */}
               <section id="intellect" className="scroll-mt-40">
                  <h3 className="text-3xl font-black mb-10 italic flex items-center gap-4 text-slate-900 tracking-tighter"> 
                    <Scale className="text-indigo-600" size={32}/> 04. IP & AI Output Ownership
                  </h3>
                  <p className="text-slate-500 leading-relaxed font-medium mb-12 italic text-lg max-w-2xl">
                    Every 3D simulation, neural story map, and visual quiz lab is a unique IP output generated via the GyaanX internal prompt library. 
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                     <MiniBox title="Trademark" icon={<Info size={16}/>} text="GyaanX® and the Brain Circuit logo are protected under copyright." />
                     <MiniBox title="Copyright" icon={<ShieldCheck size={16}/>} text="Republishing AI answers to YouTube/Telegram is prohibited." />
                     <MiniBox title="Derivatives" icon={<Terminal size={16}/>} text="Users retain rights to personal progress data export only." />
                  </div>
               </section>

               {/* 5. ANTI-BOT / FAIR USE */}
               <section id="anti-bot" className="scroll-mt-40">
                  <h3 className="text-3xl font-black mb-10 italic flex items-center gap-4 text-slate-900 tracking-tighter text-indigo-600"> 
                    <Terminal size={32}/> 05. Anti-Botting & Scraping Protocol
                  </h3>
                  <div className="bg-slate-900 rounded-[3rem] p-12 text-white">
                     <p className="text-slate-400 mb-10 leading-relaxed font-medium">To protect our proprietary inference cost and educational quality, we monitor platform behavior via behavioral telemetry.</p>
                     <ul className="grid md:grid-cols-2 gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300">
                        <li className="flex items-center gap-3 border-l-2 border-indigo-500 pl-4">No headless browser access</li>
                        <li className="flex items-center gap-3 border-l-2 border-indigo-500 pl-4">Max 50 daily doubt-solve queries</li>
                        <li className="flex items-center gap-3 border-l-2 border-indigo-500 pl-4">No systematic PDF downloading</li>
                        <li className="flex items-center gap-3 border-l-2 border-indigo-500 pl-4">Max 3 concurrent login sessions</li>
                     </ul>
                  </div>
               </section>

               {/* 6. DISCLAIMER OF ACCURACY */}
               <section id="disclaimer" className="scroll-mt-40">
                  <h3 className="text-3xl font-black mb-10 italic flex items-center gap-4 text-slate-900 tracking-tighter"> 
                    <Globe size={32} className="text-indigo-600" /> 06. Disclaimer of AI Hallucinations
                  </h3>
                  <div className="p-10 border-4 border-slate-100 rounded-[3rem] space-y-6">
                     <p className="text-slate-500 leading-relaxed font-medium">While our Reasoning engine is designed with high mathematical guardrails, AI is subject to "hallucinations" or logical inaccuracies. **Students are encouraged to double-verify AI-derived historical dates or extreme high-level research data.**</p>
                     <p className="text-slate-950 font-black uppercase tracking-[0.3em] text-[10px] bg-slate-50 p-4 rounded-xl border border-slate-200 inline-block">
                        Limitation of Liability: GyaanX is NOT responsible for academic grade loss based solely on an incorrect AI derivation.
                     </p>
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

// Visual Mini Components for Legal Styling
function PolicyPoint({ title, text }: any) {
  return (
    <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:border-indigo-200 transition-colors">
      <h4 className="text-lg font-black italic text-slate-950 mb-3">{title}</h4>
      <p className="text-slate-500 text-sm font-medium leading-relaxed italic">{text}</p>
    </div>
  );
}

function MiniBox({ title, text, icon }: any) {
  return (
    <div className="bg-slate-50 p-6 rounded-3xl flex flex-col items-center text-center">
       <div className="text-indigo-600 mb-4">{icon}</div>
       <h5 className="font-black italic text-[12px] uppercase tracking-widest text-slate-900 mb-2">{title}</h5>
       <p className="text-[10px] text-slate-500 font-medium italic">{text}</p>
    </div>
  )
}