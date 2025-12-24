"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { 
  FlaskConical, Binary, BarChart3, Globe, Sparkles, 
  Target, Zap, ShieldCheck, PlayCircle, BookOpen 
} from "lucide-react";

export default function SeniorBoards() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="bg-[#fcfcfd] min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-32">
        {/* HERO SECTION */}
        <section className="max-w-[1400px] mx-auto px-6 mb-20">
          <div className="bg-[#020617] rounded-[4rem] p-16 text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
             <div className="max-w-2xl relative z-10">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-widest mb-6">
                    <div className="w-8 h-[2px] bg-indigo-500"></div> New Age Board Preparation
                </div>
                <h1 className="text-6xl lg:text-7xl font-black mb-8 italic leading-tight">
                    Class 11th & 12th <br/> <span className="text-indigo-500 underline">AI Senior Wing</span>
                </h1>
                <p className="text-slate-400 text-xl leading-relaxed mb-10 max-w-lg">
                    Transform your senior school years with 24/7 AI Mentorship. Adaptive syllabi tailored to CBSE, ICSE, and State Boards.
                </p>
                <div className="flex gap-4">
                    <button className="bg-indigo-600 px-12 py-4 rounded-2xl font-black shadow-2xl hover:bg-indigo-500 transition-all flex items-center gap-3">
                        Join Prime Wing <Target size={20} />
                    </button>
                </div>
             </div>
             <div className="hidden lg:block absolute right-0 bottom-0 opacity-10 pointer-events-none">
                 <Binary size={500} />
             </div>
          </div>
        </section>

        {/* AI GROWTH MODULES */}
        <section className="max-w-7xl mx-auto px-6 mb-32 text-center">
            <h2 className="text-4xl font-black text-slate-900 mb-4 italic tracking-tight">How AI Empowers Seniors</h2>
            <p className="text-slate-500 mb-16 max-w-2xl mx-auto">High-stakes learning requires high-stakes precision. Our neural engine builds your daily roadmap.</p>
            
            <div className="grid md:grid-cols-3 gap-10">
                <FeatureCard 
                   icon={<Sparkles className="text-indigo-600" />}
                   title="Adaptive Study Path"
                   desc="Our AI analyzes your physics & math accuracy to slow down or speed up concepts based on your brain's pace."
                />
                <FeatureCard 
                   icon={<Zap className="text-amber-500" />}
                   title="Instant Proof Solver"
                   desc="Upload any derivation or account problem. AI doesn't just give the answer—it explains the 'Why' in 3D."
                />
                <FeatureCard 
                   icon={<ShieldCheck className="text-emerald-500" />}
                   title="Mock Predictor"
                   desc="Weekly tests calibrated against Board Difficulty. Get predicted marks for Board Exams with 98.7% accuracy."
                />
            </div>
        </section>

        {/* SUBJECT SECTIONS */}
        <section className="bg-slate-100/50 py-24">
            <div className="max-w-7xl mx-auto px-6">
                <h3 className="text-[10px] font-black uppercase text-indigo-500 tracking-[0.4em] text-center mb-4">Complete Curriculum Unlocked</h3>
                <h2 className="text-5xl font-black text-center mb-20 italic">Explore Your Stream</h2>

                <motion.div variants={containerVars} initial="hidden" whileInView="visible" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* SCIENCE */}
                    <motion.div variants={itemVars} className="bg-white p-8 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all group">
                        <div className="h-16 w-16 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-8"><FlaskConical size={32}/></div>
                        <h4 className="text-2xl font-black mb-6 italic">Science Wing</h4>
                        <ul className="space-y-4 text-slate-500 font-bold text-sm uppercase tracking-tight mb-10">
                            <li>• Advanced Physics (Atoms/Nuceli)</li>
                            <li>• Organic & Inorganic Chem</li>
                            <li>• Advanced Linear Calculus</li>
                            <li>• Biotech & Genetic Modules</li>
                        </ul>
                        <button className="w-full py-4 border-2 border-slate-100 rounded-2xl group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all font-bold">Start Learning</button>
                    </motion.div>

                    {/* COMMERCE */}
                    <motion.div variants={itemVars} className="bg-white p-8 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all group">
                        <div className="h-16 w-16 bg-amber-50 text-amber-600 rounded-3xl flex items-center justify-center mb-8"><BarChart3 size={32}/></div>
                        <h4 className="text-2xl font-black mb-6 italic">Commerce Pro</h4>
                        <ul className="space-y-4 text-slate-500 font-bold text-sm uppercase tracking-tight mb-10">
                            <li>• AI Accounts Bookkeeper</li>
                            <li>• Macro-Economic Simulations</li>
                            <li>• Advanced Statistics Pro</li>
                            <li>• Business Management Case studies</li>
                        </ul>
                        <button className="w-full py-4 border-2 border-slate-100 rounded-2xl group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-all font-bold">Access Batch</button>
                    </motion.div>

                    {/* HUMANITIES */}
                    <motion.div variants={itemVars} className="bg-white p-8 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all group">
                        <div className="h-16 w-16 bg-purple-50 text-purple-600 rounded-3xl flex items-center justify-center mb-8"><Globe size={32}/></div>
                        <h4 className="text-2xl font-black mb-6 italic">Arts Excellence</h4>
                        <ul className="space-y-4 text-slate-500 font-bold text-sm uppercase tracking-tight mb-10">
                            <li>• Critical History Mapping</li>
                            <li>• Political Theory Insights</li>
                            <li>• Sociology AI Modules</li>
                            <li>• Psychology Foundation</li>
                        </ul>
                        <button className="w-full py-4 border-2 border-slate-100 rounded-2xl group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all font-bold">Begin Course</button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Internal reusable card
function FeatureCard({ icon, title, desc }: any) {
    return (
        <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-slate-100 text-left hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:border-indigo-100 group">
            <div className="h-14 w-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">{icon}</div>
            <h3 className="text-2xl font-bold mb-4 italic text-slate-900 tracking-tight">{title}</h3>
            <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
        </div>
    );
}