"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Building2, 
  TrainFront, 
  LineChart, 
  SearchCheck, 
  Lightbulb, 
  BookMarked,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Cpu,
  Zap,
  Target,
  BarChart3,
  Globe,
  Lock
} from "lucide-react";

// Animation Variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function BankRailways() {
  return (
    <div className="bg-[#f8fafc] min-h-screen flex flex-col font-sans selection:bg-emerald-200">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-6">
            
            {/* HERO SECTION - HIGH IMPACT */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative bg-slate-950 rounded-[3rem] lg:rounded-[5rem] p-8 lg:p-20 text-white overflow-hidden mb-24 shadow-2xl"
            >
                {/* Animated Background Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full -mr-40 -mt-40 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full -ml-40 -mb-40"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 relative z-10">
                    <div>
                        <motion.div 
                          initial={{ x: -20, opacity: 0 }} 
                          animate={{ x: 0, opacity: 1 }} 
                          className="flex items-center gap-2 mb-6"
                        >
                            <span className="bg-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-emerald-500/30">
                                2026 Batch Now Open
                            </span>
                        </motion.div>
                        
                        <h1 className="text-6xl lg:text-8xl font-black italic leading-[0.85] mb-8 tracking-tighter">
                            Bank & <br/> <span className="text-emerald-500">Railways</span>
                        </h1>
                        
                        <p className="text-slate-400 text-xl mb-10 font-medium leading-relaxed max-w-lg">
                            Neural-optimized coaching for <span className="text-white italic">IBPS, SBI & RRB</span>. We don't just teach; we reprogram your exam-solving reflexes using AI.
                        </p>
  <Link href="/auth">
                        <div className="flex flex-wrap gap-4 mb-12">
                          
                            <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest transition-all transform hover:scale-105 shadow-xl shadow-emerald-500/20 flex items-center gap-3">
                                Start Your Journey <ArrowRight size={18}/>
                            </button>
                           
                           
                        </div>
</Link>
                        <div className="grid grid-cols-3 gap-8 border-t border-slate-800 pt-10">
                            <div>
                                <p className="text-3xl font-black text-white">94%</p>
                                <p className="text-slate-500 text-xs uppercase font-bold tracking-tighter">Accuracy Rate</p>
                            </div>
                            <div>
                                <p className="text-3xl font-black text-white">12k+</p>
                                <p className="text-slate-500 text-xs uppercase font-bold tracking-tighter">Selections</p>
                            </div>
                            <div>
                                <p className="text-3xl font-black text-white">AI-Led</p>
                                <p className="text-slate-500 text-xs uppercase font-bold tracking-tighter">Pedagogy</p>
                            </div>
                        </div>
                    </div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="relative"
                    >
                        <div className="aspect-video lg:aspect-square w-full bg-slate-900 rounded-[3rem] border-8 border-slate-800/50 overflow-hidden relative group">
                             <img 
                                src="https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=1000" 
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                                alt="Platform Preview"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                             <div className="absolute inset-0 flex items-center justify-center">
                               
                             </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* THE AI ADVANTAGE - BENTO GRID */}
            <div className="py-24">
                <div className="text-center mb-20">
                    <h3 className="font-black text-indigo-600 text-xs tracking-[0.4em] uppercase mb-4">The Neural Advantage</h3>
                    <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight italic tracking-tighter">How we beat traditional coaching.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all group">
                        <div className="h-14 w-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
                            <Cpu size={28} />
                        </div>
                        <h4 className="text-3xl font-black italic mb-4">Predictive Error Mapping</h4>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed italic">
                            Our AI identifies patterns in your mistakes. If you consistently fail "Syllogism" under 30 seconds, GyaanX adjusts your mock tests to focus specifically on those neural triggers until you master them.
                        </p>
                    </div>

                    <div className="bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col justify-between hover:bg-slate-800 transition-colors">
                        <Zap className="text-emerald-400" size={40} />
                        <div>
                            <h4 className="text-2xl font-bold italic mb-2 tracking-tighter">Speed Arithmetic</h4>
                            <p className="text-slate-400 text-sm">Visual shortcuts for SBI PO Mains that reduce calculation time by 40%.</p>
                        </div>
                    </div>

                    <div className="bg-indigo-600 p-10 rounded-[3rem] text-white flex flex-col justify-between hover:scale-[0.98] transition-transform">
                        <Target size={40} />
                        <div>
                            <h4 className="text-2xl font-bold italic mb-2 tracking-tighter">Railway NTPC GS</h4>
                            <p className="text-indigo-100 text-sm">Memory maps for History and Science that utilize spatial repetition.</p>
                        </div>
                    </div>

                    <div className="md:col-span-2 bg-emerald-50 border border-emerald-100 p-10 rounded-[3rem] flex items-center gap-10">
                        <div className="hidden lg:block w-1/3">
                            <div className="bg-white p-6 rounded-3xl shadow-lg transform -rotate-6">
                                <BarChart3 className="text-emerald-500 mb-4" />
                                <div className="h-2 w-full bg-slate-100 rounded-full mb-2"></div>
                                <div className="h-2 w-2/3 bg-slate-100 rounded-full mb-2"></div>
                                <div className="h-2 w-1/2 bg-emerald-500 rounded-full"></div>
                            </div>
                        </div>
                        <div className="lg:w-2/3">
                            <h4 className="text-3xl font-black italic mb-4 text-slate-900">Real-time Ranking</h4>
                            <p className="text-slate-600 font-medium italic">Compare your performance against 50k+ active aspirants across India in real-time with AI-simulated cutoff predictions.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* DETAILED CURRICULUM SECTION */}
            <div className="py-24 border-t border-slate-200">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl font-black italic text-slate-900 tracking-tighter mb-6 underline decoration-emerald-500 decoration-8 underline-offset-[-2px]">Two Exams. One Core.</h2>
                        <p className="text-slate-500 text-xl font-medium">We've synchronized the syllabus for Banking (High Logic) and Railways (High Memory) into a unified learning path.</p>
                    </div>
                    <div className="flex gap-4">
                      
                        <div className="px-6 py-3 bg-white rounded-2xl border border-indigo-600 font-bold text-indigo-600 shadow-lg shadow-indigo-100">foundation-mastery</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Bank Module */}
                    <ModuleCard 
                        icon={<Building2 className="text-indigo-600" />}
                        title="Banking (PO/Clerk)"
                        subtitle="SBI, IBPS, RRB"
                        features={[
                            "Advanced Puzzles & Seating Arrangements",
                            "Data Interpretation (High Level)",
                            "English for Banking (Contextual Grammar)",
                            "Financial & Banking Awareness 2.0",
                            "Descriptive Writing AI Feedback"
                        ]}
                    />
                    {/* Railways Module */}
                    <ModuleCard 
                        icon={<TrainFront className="text-emerald-600" />}
                        title="Railways (RRB)"
                        subtitle="NTPC, Group D, ALP"
                        features={[
                            "General Science (Physics/Chem/Bio Focus)",
                            "Static GK Visual Chronology",
                            "Arithmetic & Number Systems",
                            "Non-Verbal Reasoning logic",
                            "Previous Year Pattern Predictor"
                        ]}
                    />
                </div>
            </div>

            {/* CALL TO ACTION FOOTER */}
            <motion.div 
                whileHover={{ y: -5 }}
                className="bg-indigo-950 border-2 border-indigo-800 rounded-[4rem] p-10 lg:p-20 mt-20 relative overflow-hidden text-white"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[80px]"></div>
                
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12 relative z-10">
                    <div className="text-center lg:text-left">
                        <div className="flex justify-center lg:justify-start gap-4 mb-6">
                            <div className="flex -space-x-3">
                                {[1,2,3,4].map(i => (
                                    <div key={i} className="h-10 w-10 rounded-full border-2 border-indigo-900 bg-slate-800 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-indigo-300 text-sm font-bold self-center">Join 50,000+ aspirants</p>
                        </div>
                        <h4 className="text-4xl lg:text-6xl font-black italic tracking-tighter mb-4">Start your preparation <br/> for the price of a <span className="text-emerald-400 underline italic">Pizza.</span></h4>
                        <p className="text-indigo-200 text-lg opacity-80">Full access to GyaanX AI, Mock Tests, and Video Lectures.</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-[3rem] border border-white/20 text-center w-full lg:w-auto">
                        <p className="text-sm font-bold uppercase tracking-widest text-indigo-300 mb-2">Special Introductory Offer</p>
                        <div className="text-6xl font-black mb-6">₹199<span className="text-xl text-indigo-300 font-medium">/mo</span></div>
                       <Link href="/auth">
                        <button className="w-full bg-emerald-500 text-slate-950 font-black py-5 rounded-2xl flex items-center justify-center gap-4 group hover:bg-white transition-all">
                            Claim Prime Access <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform"/>
                        </button>
                       </Link>
                    </div>
                </div>
            </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

function ModuleCard({icon, title, subtitle, features}: any) {
    return (
        <div className="bg-white border-2 border-slate-100 p-10 rounded-[4rem] hover:border-indigo-200 transition-all group">
            <div className="flex items-center gap-6 mb-10">
                <div className="h-20 w-20 bg-slate-50 rounded-3xl flex items-center justify-center group-hover:bg-white group-hover:shadow-xl transition-all duration-500">
                    {React.cloneElement(icon, { size: 40 })}
                </div>
                <div>
                    <h4 className="text-3xl font-black italic text-slate-900 leading-none">{title}</h4>
                    <p className="text-slate-400 font-bold uppercase text-xs tracking-widest mt-2">{subtitle}</p>
                </div>
            </div>
            
            <ul className="space-y-4">
                {features.map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-4 text-slate-600 font-medium italic">
                        <CheckCircle size={18} className="text-emerald-500 flex-shrink-0" />
                        {f}
                    </li>
                ))}
            </ul>
            
         
        </div>
    )
}