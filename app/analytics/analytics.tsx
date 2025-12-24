"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { 
  BarChart3, 
  Target, 
  Zap, 
  BrainCircuit, 
  Flame, 
  LineChart, 
  TrendingUp, 
  Clock 
} from "lucide-react";
import { motion } from "framer-motion";

export default function ProgressTracking() {
  return (
    <div className="bg-[#fcfcfd] min-h-screen flex flex-col text-slate-900 selection:bg-indigo-600 selection:text-white">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* DASHBOARD HEADER */}
          <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <h1 className="text-6xl font-black italic tracking-tighter text-slate-950 mb-4">Neural Growth.</h1>
              <p className="text-indigo-600 font-bold uppercase tracking-[0.3em] text-[10px] flex items-center gap-2">
                <BrainCircuit size={14}/> Powered by GyaanX Performance Engine
              </p>
            </div>
            <div className="flex gap-4">
               <div className="bg-white border-2 border-slate-100 p-4 rounded-[1.5rem] flex items-center gap-4 px-8 shadow-sm">
                  <Flame className="text-orange-500 fill-orange-500" />
                  <div><p className="text-[10px] font-black uppercase text-slate-400">Current Streak</p><p className="font-black text-xl italic text-slate-900">12 Days</p></div>
               </div>
            </div>
          </div>

          {/* MAIN STATS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
             <StatCard icon={<Target className="text-indigo-600" />} label="Overall Accuracy" val="84%" trend="+12% vs last week" />
             <StatCard icon={<Clock className="text-blue-500" />} label="Avg Solve Time" val="42 sec" trend="-8s faster" />
             <StatCard icon={<LineChart className="text-emerald-500" />} label="Rank Prediction" val="Top 8%" trend="Elite Performer" />
          </div>

          {/* AI FEEDBACK SECTION */}
          <div className="bg-[#020617] rounded-[3.5rem] p-12 text-white flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative mb-20 shadow-2xl shadow-indigo-100">
             <div className="z-10 max-w-xl">
                <h3 className="text-4xl font-black italic mb-6">AI Strategic Analysis</h3>
                <p className="text-slate-400 text-lg leading-relaxed font-medium mb-10 italic">
                  "Based on your 200+ math queries, our AI identified that you solve Calculus 40% faster than average, but skip Probability derivations. Recommended focus: Master Combinations logic before Sunday's test."
                </p>
                <button className="bg-indigo-600 hover:bg-indigo-500 px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-widest transition-all">Get Detailed Roadmap</button>
             </div>
             <div className="lg:absolute right-[-10%] opacity-10 rotate-12 hidden lg:block">
                 <BarChart3 size={500} />
             </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

function StatCard({ icon, label, val, trend }: any) {
    return (
        <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm group hover:border-indigo-600 transition-all">
            <div className="h-14 w-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">{icon}</div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{label}</p>
            <h4 className="text-5xl font-black italic text-slate-900 mb-6">{val}</h4>
            <span className="text-[10px] font-black uppercase px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg">{trend}</span>
        </div>
    );
}