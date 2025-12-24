"use client";

import React from "react";
// Ensure these paths match your components folder exactly
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { 
  BrainCircuit, 
  Target, 
  Sparkles, 
  Gamepad2, 
  Zap, 
  Search, 
  ChevronRight,
  BookCheck,
  Video
} from "lucide-react";

export default function JuniorExcellence() {
  return (
    <div className="bg-white min-h-screen flex flex-col selection:bg-indigo-100 text-slate-900">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* --- TOP HERO CARD --- */}
          <section className="bg-[#020617] rounded-[3.5rem] p-12 lg:p-24 text-white relative overflow-hidden mb-20 shadow-2xl">
            <div className="max-w-3xl relative z-10 text-center lg:text-left mx-auto lg:mx-0">
              <span className="bg-indigo-500/20 text-indigo-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-flex items-center gap-2">
                <Target size={14}/> Foundational Years
              </span>
              <h1 className="text-5xl lg:text-8xl font-black italic tracking-tighter mb-8 leading-[0.9]">
                Junior Wing <br/> <span className="text-indigo-500 underline underline-offset-[10px]">Class 6th to 10th</span>
              </h1>
              <p className="text-slate-400 text-xl leading-relaxed mb-10 max-w-lg font-medium mx-auto lg:mx-0">
                Where curiosity meets AI. We build logical thinking skills for future JEE/NEET/CAT candidates before they reach senior school.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="bg-indigo-600 px-10 py-5 rounded-2xl font-black shadow-2xl hover:bg-indigo-500 transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-3 group">
                    Unlock Free Lessons <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
              </div>
            </div>
            <BrainCircuit className="absolute right-[-10%] bottom-[-10%] w-[600px] h-[600px] text-indigo-500 opacity-10 hidden lg:block animate-pulse" />
          </section>

          {/* --- HOW AI DEVELOPS JUNIORS --- */}
          <section className="py-16 text-center">
             <div className="mb-20">
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 italic tracking-tight uppercase">AI Personal Learning <br/><span className="text-indigo-600 font-normal underline decoration-indigo-200">How it works?</span></h2>
                <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px]">Neural feedback loop for students age 11-16</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <CapabilityCard 
                  icon={<Sparkles className="text-indigo-600" />}
                  title="Concept Visualization"
                  desc="AI turns a paragraph about the 'Water Cycle' into an interactive 3D model where the student can control rainfall and temperature."
                />
                <CapabilityCard 
                  icon={<Gamepad2 className="text-emerald-500" />}
                  title="Logic Based Quizzes"
                  desc="If a student misses a specific Math step, our AI logic engine resets to teach THAT missing concept specifically."
                />
                <CapabilityCard 
                  icon={<Search className="text-blue-500" />}
                  title="Instant Photo Doubts"
                  desc="Just click a photo of any board question. GyaanX AI provides the solution plus 3 practice problems to ensure mastery."
                />
             </div>
          </section>

          {/* --- SUBJECT WINGS --- */}
          <div className="mt-20 border-t border-slate-100 pt-32">
             <h3 className="text-[11px] font-black uppercase text-indigo-600 tracking-[0.5em] mb-4 text-center">Complete Subject Access</h3>
             <h2 className="text-5xl font-black text-slate-900 text-center italic mb-20">Grade 6 - 10 Modules</h2>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <ModuleTile title="Math Mastery" sub="Arithmetic, Geometry & Visual Data" />
                <ModuleTile title="Unified Science" sub="Physics, Bio & Lab Experiments" />
                <ModuleTile title="Social Sciences" sub="History timelines & Global Atlas" />
                <ModuleTile title="Verbal Excellence" sub="Vocabulary & Logical Grammar" />
             </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

// Sub Components for detailed UI
function CapabilityCard({icon, title, desc}:any) {
    return (
        <div className="bg-slate-50 p-10 rounded-[3.5rem] text-left hover:bg-white hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500 border border-transparent hover:border-slate-100 group">
            <div className="h-14 w-14 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-indigo-50 transition-all">{icon}</div>
            <h4 className="text-2xl font-black text-slate-900 italic mb-4">{title}</h4>
            <p className="text-slate-500 leading-relaxed font-medium text-sm">{desc}</p>
        </div>
    )
}

function ModuleTile({title, sub}:any) {
    return (
        <div className="flex items-center justify-between bg-white border-2 border-slate-50 p-8 rounded-[2.5rem] group hover:border-indigo-600 cursor-default transition-all shadow-sm">
           <div>
              <p className="font-black text-slate-800 text-2xl italic tracking-tighter group-hover:text-indigo-600 transition-colors">{title}</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase mt-2 tracking-widest">{sub}</p>
           </div>
           <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <ChevronRight size={20}/>
           </div>
        </div>
    )
}