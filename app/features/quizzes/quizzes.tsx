"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Trophy, Target, BarChart, Rocket } from "lucide-react";

export default function DailyQuizzes() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20 max-w-7xl mx-auto px-6">
        <div className="bg-emerald-600 rounded-[3.5rem] p-12 lg:p-24 text-white relative overflow-hidden mb-20 shadow-2xl shadow-emerald-50">
           <div className="max-w-2xl relative z-10">
                <h1 className="text-6xl font-black mb-8 italic tracking-tighter">Micro-Quiz <br/>Challenges</h1>
                <p className="text-emerald-50 text-xl leading-relaxed font-medium mb-10">10 Questions a day, Keeps failure away. Sharpen your logic with gamified quiz paths based on your grade.</p>
                <button className="bg-[#020617] px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-all flex items-center gap-3">Join Global Ranking <Trophy size={18}/></button>
           </div>
           <Target size={300} className="absolute right-0 bottom-0 opacity-10" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 italic leading-none">Your Progress Is <br/>Tracked Locally.</h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-10">We use AI behavior analysis to predict exactly which day you are ready for the final exam based on your consistency.</p>
                <div className="flex flex-col gap-4">
                    <ProgressBar label="Concept Clarity" val="w-[84%]"/>
                    <ProgressBar label="Time per Answer" val="w-[62%]"/>
                </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-[4rem] border-2 border-slate-100 flex items-center justify-center">
                <BarChart size={150} className="text-slate-200" />
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ProgressBar({label, val}: any) {
    return (
        <div className="bg-white border border-slate-100 p-6 rounded-3xl">
            <p className="font-bold text-[10px] text-slate-400 uppercase tracking-widest mb-3">{label}</p>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className={`${val} h-full bg-emerald-500`}></div>
            </div>
        </div>
    )
}