"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Camera, Sparkles, MessageSquare, History, BrainCircuit } from "lucide-react";

export default function AIDoubtSolver() {
  return (
    <div className="bg-[#fcfcfd] min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20 max-w-7xl mx-auto px-6">
        <div className="bg-[#020617] rounded-[3.5rem] p-12 lg:p-24 text-white text-center mb-20 shadow-2xl relative overflow-hidden">
           <div className="relative z-10">
            <span className="text-indigo-500 font-bold uppercase tracking-[0.3em] text-[10px]">Instant Solutions</span>
            <h1 className="text-5xl lg:text-7xl font-black mt-4 mb-6 italic tracking-tight leading-[0.9]">Visual Doubt Solver.</h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">Simply capture a photo or type your question. Our 2025 Vision AI explains concepts rather than just giving answers.</p>
            <button className="mt-10 bg-indigo-600 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-indigo-500 transition-all flex items-center gap-4 mx-auto">Open Solver UI <Camera size={20} /></button>
           </div>
           <BrainCircuit size={400} className="absolute -right-20 -bottom-20 text-white opacity-5" />
        </div>

        <div className="grid md:grid-cols-3 gap-10 text-left">
           <FeatureBlock icon={<MessageSquare />} title="Socratic Dialogue" desc="Our AI won't spoon-feed. It asks leading questions to help YOU figure out the answer, just like a human teacher." />
           <FeatureBlock icon={<History />} title="Solution Vault" desc="Every doubt you've ever asked is categorized into a personalized learning library for revision before exams." />
           <FeatureBlock icon={<Sparkles />} title="Multiple Methods" desc="Get the shortest trick and the descriptive Board method simultaneously to excel in both Mocks and Boards." />
        </div>
      </main>
      <Footer />
    </div>
  );
}

function FeatureBlock({icon, title, desc}: any) {
    return (
        <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
            <div className="h-12 w-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-8">{icon}</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 italic">{title}</h3>
            <p className="text-slate-500 font-medium text-sm leading-relaxed">{desc}</p>
        </div>
    )
}