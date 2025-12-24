"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { 
  Building2, 
  TrainFront, 
  LineChart, 
  SearchCheck, 
  Lightbulb, 
  BookMarked,
  ShieldCheck,
  CheckCircle,
  Play,
  ArrowRight
} from "lucide-react";

export default function BankRailways() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-6">
            
            {/* HERO CARD */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-[4rem] p-10 lg:p-24 text-white relative overflow-hidden mb-20 shadow-indigo-100/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
                    <div>
                        <h1 className="text-6xl font-black italic leading-[0.8] mb-10 tracking-tighter">Bank & <br/> <span className="text-emerald-500">Railways</span></h1>
                        <p className="text-slate-400 text-lg mb-10 font-medium italic underline underline-offset-8 decoration-indigo-500/50">
                            Neural-optimized coaching for Clerk, PO & NTPC aspirants. 
                        </p>
                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center gap-3 text-slate-200 font-bold uppercase text-[10px] tracking-widest"><CheckCircle className="text-emerald-500" size={14}/> IBPS PO Reasoning Hack</li>
                            <li className="flex items-center gap-3 text-slate-200 font-bold uppercase text-[10px] tracking-widest"><CheckCircle className="text-emerald-500" size={14}/> SBI Speed Arithmetic Modules</li>
                            <li className="flex items-center gap-3 text-slate-200 font-bold uppercase text-[10px] tracking-widest"><CheckCircle className="text-emerald-500" size={14}/> RRB Science Predictor 2026</li>
                        </ul>
                        <button className="w-full lg:w-fit bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-12 py-5 rounded-[2rem] font-black uppercase text-xs tracking-widest transition-all shadow-xl shadow-emerald-500/20">Enroll Prime Now</button>
                    </div>
                    
                    <div className="relative group">
                        <div className="h-64 lg:h-96 w-full bg-slate-800/50 rounded-[4rem] border-4 border-slate-700 overflow-hidden relative shadow-2xl">
                             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800')] bg-cover bg-center mix-blend-overlay"></div>
                             <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                <Play size={64} className="fill-white cursor-pointer hover:scale-110 transition-transform" />
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* AI GROWTH SECTION */}
            <div className="py-20 text-center max-w-5xl mx-auto">
                <h3 className="font-black text-emerald-500 text-xs tracking-[0.5em] uppercase mb-4">Neural Adaptive System</h3>
                <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-20 leading-[0.9] italic">How GyaanX AI Trains Your Mind for Bank/RRB.</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                   <FeatureRow 
                      title="Micro-Accuracy Training" 
                      text="The biggest failure in banking is 0.25 negative marks. Our AI tags exactly where you click instinctively wrong and retrains that logic." 
                   />
                   <FeatureRow 
                      title="RRB Science Memory Maps" 
                      text="Convert RRB physics & chemistry facts into short AI stories. Visual retention increases your General Science marks by 3X." 
                   />
                </div>
            </div>

            {/* PRICING FOOTER INTEGRATION */}
            <div className="bg-indigo-50 border-2 border-indigo-100 rounded-[3rem] p-10 mt-20 flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex gap-6 items-center">
                    <div className="h-16 w-16 bg-white rounded-3xl flex items-center justify-center text-indigo-600 shadow-sm"><ShieldCheck size={32}/></div>
                    <div>
                        <h4 className="text-2xl font-black italic tracking-tighter">Everything included.</h4>
                        <p className="text-slate-500 text-sm font-medium">Join 50k+ students clearing banking mains with AI.</p>
                    </div>
                </div>
                <button className="bg-indigo-600 text-white font-black px-12 py-5 rounded-2xl flex items-center gap-4 group">Get started with ₹199 <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform"/></button>
            </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

function FeatureRow({title, text}:any) {
    return (
        <div className="bg-[#fcfcfd] border-2 border-slate-50 p-12 rounded-[4rem] text-left hover:shadow-2xl transition-all group">
            <h4 className="text-2xl font-bold italic mb-6 text-slate-900 flex items-center gap-3">
                <span className="h-8 w-1 bg-indigo-600 group-hover:h-12 transition-all"></span> {title}
            </h4>
            <p className="text-slate-500 font-medium leading-relaxed italic opacity-80">{text}</p>
        </div>
    )
}