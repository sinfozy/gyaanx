"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Check, 
  Rocket, 
  Brain, 
  Languages, 
  ShieldCheck, 
  Users, 
  Target, 
  Cpu, 
  History, 
  Sparkles, 
  Globe,
  Search,
  CheckCircle2,
  Zap,
  Microscope
} from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

// Animation Variants with "as const"
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
} as const;

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#fcfaff] text-slate-900 font-sans selection:bg-violet-100 selection:text-violet-600">
      <Header />

      <main>
        {/* --- HERO SECTION: THE BIG VISION --- */}
        <section className="relative px-[8%] pt-48 pb-32 text-center overflow-hidden">
          {/* Advanced Background Ambient Glows */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-[0%] left-[10%] h-[500px] w-[500px] rounded-full bg-violet-200/30 blur-[150px] animate-pulse" />
            <div className="absolute bottom-[0%] right-[5%] h-[400px] w-[400px] rounded-full bg-blue-200/20 blur-[120px]" />
          </div>

          <motion.div 
          key={1}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-violet-600 mb-8 border border-violet-200">
              <Sparkles size={14}/> Intelligence for India's Future
            </span>
            <h1 className="mx-auto max-w-5xl text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter text-slate-950 mb-10">
              India's Digital <br />
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent italic">
                Reasoning Backbone
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl md:text-2xl text-slate-500 mb-12 font-medium italic">
              Elite education shouldn't be locked behind high coaching fees. GyaanX is the first "Socratic" AI designed for the 250 million students of Bharat.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 mt-20">
            <StatCounter label="Active Brains" val="150K+" />
            <StatCounter label="Accuracy" val="99.2%" />
            <StatCounter label="Cost to User" val="90% Less" />
          </div>
        </section>

        {/* --- PHILOSOPHY SECTION: THE GAP --- */}
        <section className="px-[8%] py-32 bg-white rounded-[5rem] mx-4 shadow-sm border border-slate-50 relative z-10">
           <div className="grid md:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
              <motion.div {...fadeInUp} className="space-y-8">
                 <h2 className="text-5xl font-black text-slate-950 italic tracking-tighter leading-none">Why GyaanX <br/><span className="text-violet-600">Actually Exists.</span></h2>
                 <p className="text-xl text-slate-600 leading-relaxed font-medium">
                    The average classroom size in India is 50-60. One teacher simply cannot provide the personalized "Aha!" moment every child needs. Traditional coaching fixes this, but only for the wealthy 5%.
                 </p>
                 <div className="space-y-6">
                    <BenefitRow 
                        title="Democratization" 
                        text="Scaling elite-level physics, accounts, and reasoning to the remotest parts of the country via any smartphone." 
                    />
                    <BenefitRow 
                        title="Hinglish Fluency" 
                        text="Our AI understands your language. If you say 'Sir ye integration samajh nahi aa raha,' it gets you immediately." 
                    />
                 </div>
              </motion.div>
              
              <div className="relative">
                 <motion.div 
                 key={1}
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="aspect-square bg-slate-950 rounded-[4rem] p-12 text-white relative overflow-hidden group shadow-2xl"
                 >
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-transparent"></div>
                    <History className="text-violet-400 mb-6" size={48} />
                    <h3 className="text-3xl font-black italic mb-4">Neural Feedback</h3>
                    <p className="text-slate-400 leading-relaxed text-lg">"GyaanX identifies not just what you got wrong, but WHY you clicked it. We solve for the logic, not just the answer."</p>
                    <div className="mt-12 p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
                       <div className="h-10 w-10 bg-violet-600 rounded-xl flex items-center justify-center text-xs font-bold">9/10</div>
                       <p className="text-[10px] uppercase font-black tracking-widest text-slate-300">Success Rate vs Benchmarks</p>
                    </div>
                 </motion.div>
              </div>
           </div>
        </section>

        {/* --- TECH PILLARS: THE ENGINE --- */}
        <section className="px-[8%] py-40">
           <div className="text-center mb-24">
              <h2 className="text-5xl lg:text-7xl font-black italic tracking-tighter mb-6">Built on Three <span className="text-indigo-600 underline decoration-indigo-600/20 underline-offset-8">Neural Pillars.</span></h2>
              <p className="text-slate-500 font-medium italic">GyaanX is more than a chatbot. It's an Cognitive Architecture.</p>
           </div>

           <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
              <PillarCard 
                icon={<Cpu className="text-violet-600"/>} 
                title="Context Awareness" 
                text="The system knows your class, your stream, and your exam board. A 9th grader's math query is explained with visual models, while a CGL aspirant gets shortcut hacks."
              />
              <PillarCard 
                icon={<Brain className="text-emerald-600"/>} 
                title="Neuro-Symbolic Reasoning" 
                text="Our AI checks mathematical proofs using logic engines, not just text prediction. This means zero hallucinations in STEM subjects."
              />
              <PillarCard 
                icon={<Globe className="text-blue-600"/>} 
                title="Bhasha Optimization" 
                text="Trained on millions of Indian dialects, slang, and educational scripts. We talk to you in 12+ Indian languages seamlessly."
              />
           </div>
        </section>

        {/* --- MISSION STATEMENT: THE BHARAT 2026 ROADMAP --- */}
        <section className="bg-slate-950 py-32 rounded-[4rem] lg:rounded-[6rem] mx-4 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>
           
           <div className="px-[8%] relative z-10 flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/3">
                 <h3 className="text-violet-500 font-black uppercase tracking-[0.4em] text-xs mb-6">Our Journey</h3>
                 <h2 className="text-white text-5xl font-black italic tracking-tighter mb-8 leading-none">The Path to <br/> Empowerment.</h2>
                 <p className="text-slate-400 font-medium italic">Transforming a side-project into India's educational neural-network.</p>
              </div>
              <div className="lg:w-2/3 space-y-8">
                 <TimelineStep year="2024" title="Foundations" text="Identified the gap in 'Zero-cost' doubts. Developed the core Hinglish OCR engine." />
                 <TimelineStep year="2025" title="Neural v2.0" text="Launched reasoning models for Boards & Gov Exams. Integrated Visual Lab simulations." />
                 <TimelineStep year="2026" title="Omnipresence" text="GyaanX offline mode for villages. Supporting every tribal dialect for deep inclusive education." />
              </div>
           </div>
        </section>

        {/* --- LEADERSHIP VISION --- */}
        <section className="px-[8%] py-40">
           <div className="max-w-4xl mx-auto text-center">
              <Target className="mx-auto text-violet-600 mb-8 animate-bounce" size={48} />
              <h2 className="text-5xl font-black italic tracking-tighter mb-10 text-slate-900 leading-[0.9]">The "1:1 Teacher-Student Ratio" is no longer a luxury. We are building the Digital Infrastructure for a <span className="text-violet-600 italic">Viksit Bharat.</span></h2>
              <div className="w-16 h-1 bg-violet-200 mx-auto rounded-full mb-10"></div>
              <p className="text-slate-500 font-black uppercase tracking-widest text-[10px]">The GyaanX Collective Founding Vision</p>
           </div>
        </section>

        {/* --- EXTENDED PROMO SECTION --- */}
        <section className="px-[8%] pb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="rounded-[4rem] bg-indigo-600 py-24 px-10 text-center relative overflow-hidden shadow-3xl"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[100px] rounded-full -mr-40 -mt-40"></div>
            
            <h2 className="text-white text-4xl lg:text-7xl font-black italic mb-8 relative z-10 tracking-tighter">Everything for Every Brain.</h2>
            <div className="flex justify-center items-end text-white gap-2 my-10 relative z-10">
              <span className="text-9xl font-black leading-none italic tracking-tighter">₹199</span>
              <span className="text-indigo-200 font-black uppercase text-xs pb-4 tracking-widest">Premium Prime access / mo</span>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto gap-8 text-left mb-16 relative z-10 bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10">
              <div className="flex items-center gap-3 text-white text-sm font-bold italic">
                <Zap size={18} className="text-amber-400 fill-amber-400"/> Zero Ad Interruption
              </div>
              <div className="flex items-center gap-3 text-white text-sm font-bold italic">
                <Brain size={18} className="text-white"/> Daily Neural Workouts
              </div>
              <div className="flex items-center gap-3 text-white text-sm font-bold italic">
                <Globe size={18} className="text-white"/> Supporting 12+ Dialects
              </div>
              <div className="flex items-center gap-3 text-white text-sm font-bold italic">
                <Microscope size={18} className="text-white"/> Boards, SSC & JEE Syllabus
              </div>
              <div className="flex items-center gap-3 text-white text-sm font-bold italic">
                <CheckCircle2 size={18} className="text-emerald-400"/> AI Simulated Mocks
              </div>
              <div className="flex items-center gap-3 text-white text-sm font-bold italic">
                <Search size={18} className="text-white"/> Scan handwritten notes
              </div>
            </div>

            <Link href="/auth">
            <button className="bg-slate-950 text-white font-black px-20 py-6 rounded-2xl shadow-3xl hover:bg-white hover:text-indigo-950 transition-all uppercase tracking-widest text-xs italic flex items-center gap-3 mx-auto active:scale-95 relative z-10 group">
              Get Started for ₹199 <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// --- INTERNAL UI SUB-COMPONENTS ---

function StatCounter({ label, val }: any) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white border border-slate-100 px-12 py-10 rounded-[3rem] shadow-sm flex flex-col items-center hover:border-violet-200 hover:shadow-2xl transition-all"
    >
      <h2 className="text-5xl font-black text-violet-600 mb-2 italic tracking-tighter">{val}</h2>
      <p className="text-[10px] font-black text-slate-400 tracking-[0.3em] uppercase">{label}</p>
    </motion.div>
  );
}

function PillarCard({ icon, title, text }: any) {
    return (
        <div className="bg-white p-12 rounded-[4rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all hover:translate-y-[-5px] group">
            <div className="h-16 w-16 bg-slate-50 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-indigo-50 transition-colors">
                {/* Fixed Line below */}
                {React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: 32 })}
            </div>
            <h4 className="text-3xl font-black italic text-slate-950 mb-6 tracking-tight">{title}</h4>
            <p className="text-slate-500 font-medium italic text-lg leading-relaxed">{text}</p>
        </div>
    )
}

function BenefitRow({ title, text }: any) {
    return (
        <div className="flex gap-6 group">
            <div className="flex-shrink-0 mt-1">
                <div className="h-6 w-6 rounded-full bg-violet-600 flex items-center justify-center text-white text-xs"><Check size={14} strokeWidth={4} /></div>
            </div>
            <div>
                <h4 className="text-lg font-bold italic text-slate-900 group-hover:text-violet-600 transition-colors">{title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{text}</p>
            </div>
        </div>
    )
}

function TimelineStep({ year, title, text }: any) {
    return (
        <div className="flex gap-10 p-10 rounded-[3rem] hover:bg-white/5 border border-transparent hover:border-white/10 transition-all">
            <div className="text-5xl font-black italic text-violet-600/30 font-serif leading-none">{year}</div>
            <div>
                <h4 className="text-2xl font-black italic text-white mb-2">{title}</h4>
                <p className="text-slate-500 italic text-lg">{text}</p>
            </div>
        </div>
    )
}

export default AboutPage;