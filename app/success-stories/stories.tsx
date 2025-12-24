"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { User, Quote } from "lucide-react";

export default function Success() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-40 pb-20 max-w-6xl mx-auto px-6">
        <h2 className="text-6xl font-black text-slate-900 mb-4 text-center tracking-tighter">Real Growth.</h2>
        <p className="text-center text-slate-500 font-bold uppercase tracking-widest text-xs mb-20 italic">5,000+ Students improved their score by 45% using AI Tutor.</p>

        <div className="grid md:grid-cols-2 gap-12">
            <Story name="Aryan Sharma" score="Class 10 - 98.4%" text="GyaanX's AI explained trigonometry identities better than any YouTube video. The visualization lab is amazing." />
            <Story name="Priya Singh" score="NEET Rank - #421" text="I studied primarily via AI modules. The precision in solving Inorganic Chem was the key to my rank." />
            <Story name="David R." score="CAT Percentile - 99.1" text="Logical Reasoning section on this dashboard is elite. AI identified my slow areas in day 1." />
            <Story name="Rohan Das" score="Railway ALP Selected" text="Technical science parts were a nightmare for me until the AI doubt solver broke them into small notes." />
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Story({name, score, text}:any) {
    return (
        <div className="p-10 bg-[#f8fafc] border border-slate-100 rounded-[3.5rem] relative group">
            <Quote className="absolute right-10 top-10 text-indigo-100 group-hover:text-indigo-300 transition-colors" size={60} />
            <div className="h-16 w-16 bg-white rounded-3xl border border-slate-100 flex items-center justify-center mb-8"><User className="text-slate-400" /></div>
            <p className="text-slate-700 font-medium italic text-lg leading-relaxed mb-6">"{text}"</p>
            <h4 className="font-black text-slate-900 text-xl">{name}</h4>
            <span className="text-indigo-600 font-black uppercase text-[10px] tracking-widest">{score}</span>
        </div>
    )
}