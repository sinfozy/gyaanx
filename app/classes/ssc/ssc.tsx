"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { 
  Zap, 
  History, 
  TrendingUp, 
  Search, 
  Cpu, 
  LayoutDashboard, 
  Trophy, 
  Clock,
  ArrowRight
} from "lucide-react";

export default function SSCMasterpage() {
  return (
    <div className="bg-[#fcfcfd] min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* HERO SECTION */}
          <section className="bg-[#020617] rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden mb-20 shadow-2xl">
            <div className="max-w-3xl relative z-10">
              <span className="bg-indigo-500/20 text-indigo-400 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">Govt Job Excellence</span>
              <h1 className="text-6xl lg:text-8xl font-black italic tracking-tighter mb-8 leading-none">
                Target <span className="text-indigo-600">SSC 2026.</span> <br/>Solved by AI.
              </h1>
              <p className="text-slate-400 text-xl leading-relaxed mb-10 max-w-lg font-medium">
                Our AI analyzes 10 years of SSC CGL & CHSL papers to predict high-probability questions and teaches you to solve them in under 30 seconds.
              </p>
              <button className="bg-indigo-600 px-12 py-5 rounded-2xl font-black shadow-2xl hover:scale-105 transition-all uppercase tracking-widest text-sm italic">
                Activate Prime Batch
              </button>
            </div>
            <Cpu className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] text-white opacity-5 hidden lg:block" />
          </section>

          {/* HOW AI BUILDS CAREER SECTION */}
          <section className="py-20">
             <div className="text-center mb-20">
                <h2 className="text-4xl font-black text-slate-900 mb-4 italic tracking-tight uppercase">Why AI for SSC?</h2>
                <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <AICapability 
                    icon={<Zap/>} 
                    title="Flash Solving Engine" 
                    text="AI analyzes your arithmetic steps and provides the 'Zero-Step' logical shortcut for Algebra and Geometry questions."
                />
                <AICapability 
                    icon={<History/>} 
                    title="PYQ Pattern Tracker" 
                    text="Identify exactly which GS and English topics are repeating this season using our real-time pattern recognition algorithm."
                />
                <AICapability 
                    icon={<TrendingUp/>} 
                    title="Real-Time Percentile" 
                    text="Know your rank among 1 Lakh+ aspirants after every single practice question, not just full mocks."
                />
             </div>
          </section>

          {/* COURSE STRUCTURE */}
          <div className="mt-32">
             <h3 className="text-2xl font-black italic mb-10 text-slate-800">Complete Tier I & II Curriculum</h3>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ModuleCard title="Quantitative Aptitude" topics={["AI-Shortcuts for Trig", "Advance Arithmetic", "Logical Data Interpretation"]} color="indigo" />
                <ModuleCard title="English Comprehension" topics={["Vocab Memory Maps", "Dynamic Grammar Error AI", "Reading Logic Engine"]} color="blue" />
                <ModuleCard title="Reasoning & Intelligence" topics={["Non-Verbal Pattern Logic", "Syllogism Mastery", "Clock & Calendar Hacks"]} color="emerald" />
                <ModuleCard title="General Awareness" topics={["6-Month Current Affair Summary", "Polity & History Connectors", "Economy Snapshots"]} color="purple" />
             </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

// Sub components
function AICapability({icon, title, text}:any) {
    return (
        <div className="text-center md:text-left group">
            <div className="h-14 w-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                {icon}
            </div>
            <h3 className="text-xl font-black text-slate-800 mb-3 italic tracking-tight">{title}</h3>
            <p className="text-slate-500 leading-relaxed font-medium text-sm">{text}</p>
        </div>
    )
}

function ModuleCard({title, topics, color}:any) {
    return (
        <div className="bg-white p-10 rounded-[3rem] border-2 border-slate-100 flex items-center justify-between group hover:border-indigo-600 transition-all cursor-default">
            <div>
                <h4 className="text-2xl font-black italic mb-6 text-slate-900 group-hover:text-indigo-600">{title}</h4>
                <div className="flex flex-wrap gap-2">
                    {topics.map((t:any) => <span key={t} className="bg-slate-50 border border-slate-100 text-slate-500 font-bold px-3 py-1.5 rounded-xl text-[10px] uppercase tracking-tighter">{t}</span>)}
                </div>
            </div>
            <ArrowRight className="text-slate-200 group-hover:text-indigo-600 transition-colors" />
        </div>
    )
}