"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Zap, 
  History, 
  TrendingUp, 
  Cpu, 
  Trophy, 
  ArrowRight,
  BrainCircuit,
  Target,
  FileText,
  MousePointer2,
  Sparkles,
  BarChart4,
  CheckCircle2
} from "lucide-react";

// Animation Presets
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
} as const;

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function SSCMasterpage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen flex flex-col font-sans selection:bg-indigo-200">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* HERO SECTION - DARK MODE IMPACT */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#020617] rounded-[3rem] lg:rounded-[5rem] p-8 lg:p-24 text-white relative overflow-hidden mb-24 shadow-2xl border border-slate-800"
          >
            {/* Ambient Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full -mr-40 -mt-40 animate-pulse"></div>
            <div className="absolute bottom-0 left-20 w-80 h-80 bg-violet-600/10 blur-[100px] rounded-full"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 relative z-10">
              <div>
                <motion.div 
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 px-4 py-2 rounded-full mb-8"
                >
                  <Sparkles size={14} className="text-indigo-400" />
                  <span className="text-indigo-300 text-[10px] font-black uppercase tracking-[0.2em]">Next-Gen SSC Preparation</span>
                </motion.div>

                <h1 className="text-6xl lg:text-9xl font-black italic tracking-tighter mb-8 leading-[0.85]">
                  Target <br/> <span className="text-indigo-500">SSC 2026.</span>
                </h1>
                
                <p className="text-slate-400 text-xl leading-relaxed mb-12 max-w-lg font-medium italic border-l-4 border-indigo-600 pl-6">
                  Not just coaching—<strong>Neural Training</strong>. Our AI reverse-engineers SSC CGL & CHSL patterns to predict the 2026 shifts before they happen.
                </p>

                <div className="flex flex-wrap gap-6">
                <Link href="/auth">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-5 rounded-2xl font-black shadow-xl shadow-indigo-600/20 transition-all hover:scale-105 uppercase tracking-widest text-xs italic flex items-center gap-3">
                    Activate Prime Batch <ArrowRight size={18} />
                  </button>
                </Link>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="bg-gradient-to-br from-indigo-500/20 to-transparent p-[1px] rounded-[4rem]">
                  <div className="bg-slate-900/80 backdrop-blur-3xl rounded-[4rem] p-10 border border-white/5 shadow-3xl">
                    <div className="flex items-center gap-4 mb-8">
                       <div className="h-3 w-3 rounded-full bg-red-500"></div>
                       <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                       <div className="h-3 w-3 rounded-full bg-green-500"></div>
                       <div className="ml-auto text-[10px] text-slate-500 font-mono tracking-widest uppercase">AI-Diagnostic_v.2.0</div>
                    </div>
                    <div className="space-y-6">
                       <div className="h-12 w-full bg-slate-800/50 rounded-xl animate-pulse"></div>
                       <div className="grid grid-cols-2 gap-4">
                          <div className="h-32 bg-indigo-600/10 border border-indigo-500/20 rounded-2xl p-4">
                             <BarChart4 className="text-indigo-400 mb-2" size={20} />
                             <div className="text-2xl font-black">98.2%</div>
                             <div className="text-[10px] text-indigo-300 uppercase font-bold tracking-widest">Logic Accuracy</div>
                          </div>
                          <div className="h-32 bg-slate-800/50 rounded-2xl p-4">
                             <Trophy className="text-yellow-500 mb-2" size={20} />
                             <div className="text-2xl font-black">AIR 12</div>
                             <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Predicted Rank</div>
                          </div>
                       </div>
                       <div className="h-20 w-full border border-slate-700 rounded-2xl flex items-center px-6 gap-4">
                          <BrainCircuit className="text-indigo-400" />
                          <div className="text-xs text-slate-400">AI is currently analyzing your weak areas in <strong>Geometry & Trigonometry</strong>...</div>
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* AI CAPABILITIES - BENTO GRID */}
          <section className="py-24">
             <div className="text-center mb-24">
                <motion.h2 
                  {...fadeInUp}
                  className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 italic tracking-tighter"
                >
                  The GyaanX <span className="text-indigo-600 underline decoration-indigo-600/20">Edge.</span>
                </motion.h2>
                <p className="text-slate-500 text-lg font-medium italic">Why traditional coaching is failing, and how AI wins.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <BentoCard 
                  className="md:col-span-8 bg-white"
                  icon={<Zap className="text-indigo-600"/>}
                  title="Flash Solving Engine"
                  text="SSC is a race against time. Our AI provides the 'Zero-Step' logic for Advance Math questions that usually take 2 minutes, reducing them to 15 seconds."
                />
                <BentoCard 
                  className="md:col-span-4 bg-indigo-600 text-white"
                  icon={<History className="text-white"/>}
                  title="PYQ Tracker"
                  text="Real-time recognition of repeating GS topics."
                />
                <BentoCard 
                  className="md:col-span-4 bg-slate-900 text-white"
                  icon={<TrendingUp className="text-indigo-400"/>}
                  title="Predictive Rank"
                  text="Know your AIR instantly after every practice set."
                />
                <BentoCard 
                  className="md:col-span-8 bg-slate-50"
                  icon={<MousePointer2 className="text-indigo-600"/>}
                  title="Click-Pattern Analysis"
                  text="We track where you hesitate. If you spend too long reading Comprehension passages, GyaanX triggers a focused 'Speed Reading' module automatically."
                />
             </div>
          </section>

          {/* COURSE STRUCTURE - REFINED CARDS */}
          <div className="mt-32">
             <div className="flex items-center gap-6 mb-16">
                <h3 className="text-4xl font-black italic text-slate-900 tracking-tighter">Unified SSC Curriculum</h3>
                <div className="h-[2px] flex-grow bg-slate-200"></div>
             </div>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ModuleCard 
                    title="Quantitative Aptitude" 
                    icon={<Target className="text-indigo-600" />}
                    topics={["AI-Shortcuts for Trig", "Advance Arithmetic", "Logical Geometry Hacks"]} 
                    description="From basic calculations to advanced Tier-II problem solving."
                />
                <ModuleCard 
                    title="English & Vocab" 
                    icon={<FileText className="text-blue-600" />}
                    topics={["Vocab Memory Maps", "Error AI Detection", "Reading Engine"]} 
                    description="Master 5,000+ words using our spatial repetition algorithm."
                />
                <ModuleCard 
                    title="General Intelligence" 
                    icon={<BrainCircuit className="text-emerald-600" />}
                    topics={["Pattern Logic", "Syllogism 2.0", "Mirror Image Tricks"]} 
                    description="100% accuracy modules for high-speed reasoning."
                />
                <ModuleCard 
                    title="General Awareness" 
                    icon={<Sparkles className="text-purple-600" />}
                    topics={["Current Affair Summary", "Polity Connectors", "Economy Maps"]} 
                    description="Visualizing history and science for permanent retention."
                />
             </div>
          </div>

          {/* PRICING INTEGRATION */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="mt-32 bg-gradient-to-r from-indigo-900 to-indigo-950 rounded-[4rem] p-12 lg:p-20 text-center relative overflow-hidden"
          >
            <div className="relative z-10">
                <h4 className="text-indigo-300 font-black uppercase tracking-[0.3em] text-xs mb-6">Limited Time Offer</h4>
                <h2 className="text-4xl lg:text-6xl font-black text-white italic tracking-tighter mb-10">
                    One Subscription. <br/>All SSC Exams. <span className="text-indigo-500">₹199/mo.</span>
                </h2>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <div className="flex items-center gap-3 text-white/70 font-bold italic justify-center">
                        <CheckCircle2 size={18} className="text-emerald-500"/> Tier I + Tier II Coverage
                    </div>
                    <div className="flex items-center gap-3 text-white/70 font-bold italic justify-center">
                        <CheckCircle2 size={18} className="text-emerald-500"/> 500+ AI Mock Tests
                    </div>
                    <div className="flex items-center gap-3 text-white/70 font-bold italic justify-center">
                        <CheckCircle2 size={18} className="text-emerald-500"/> Daily Live Doubts
                    </div>
                </div>
               <Link href="/auth">
                <button className="mt-12 bg-white text-indigo-950 px-16 py-6 rounded-2xl font-black uppercase text-sm tracking-[0.2em] hover:bg-indigo-500 hover:text-white transition-all shadow-2xl">
                    Get Started with Prime
                </button>
               </Link>

            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

// Visual Sub-components
function BentoCard({icon, title, text, className}: any) {
    return (
        <motion.div 
            {...fadeInUp}
            whileHover={{ y: -5 }}
            className={`p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-between group transition-all ${className}`}
        >
            <div className="h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 border border-white/20 shadow-lg group-hover:rotate-6 transition-transform">
                {icon}
            </div>
            <div>
                <h3 className="text-2xl font-black mb-4 italic tracking-tight">{title}</h3>
                <p className="opacity-70 leading-relaxed font-medium italic text-sm">{text}</p>
            </div>
        </motion.div>
    )
}

function ModuleCard({title, topics, icon, description}: any) {
    return (
        <motion.div 
            whileHover={{ x: 10 }}
            className="bg-white p-10 rounded-[3.5rem] border-2 border-slate-50 flex flex-col lg:flex-row items-center justify-between gap-8 group hover:border-indigo-600 hover:shadow-2xl transition-all cursor-default"
        >
            <div className="flex gap-8 items-center flex-1">
                <div className="h-20 w-20 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                    {React.cloneElement(icon as React.ReactElement, { size: 32 })}
                </div>
                <div>
                    <h4 className="text-2xl font-black italic text-slate-900 group-hover:text-indigo-600 mb-2">{title}</h4>
                    <p className="text-slate-400 text-sm font-medium italic mb-4">{description}</p>
                    <div className="flex flex-wrap gap-2">
                        {topics.map((t: any) => (
                            <span key={t} className="bg-slate-50 border border-slate-100 text-slate-500 font-bold px-3 py-1.5 rounded-xl text-[9px] uppercase tracking-tighter group-hover:border-indigo-100 group-hover:text-indigo-500">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="h-14 w-14 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <ArrowRight size={20} />
            </div>
        </motion.div>
    )
}