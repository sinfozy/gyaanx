"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  FlaskConical, Binary, BarChart3, Globe, Sparkles, 
  Target, Zap, ShieldCheck, PlayCircle, BookOpen,
  ArrowRight, BrainCircuit, Microscope, Calculator,
  Newspaper, Cpu, PenTool, Milestone
} from "lucide-react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2 } 
  }
};

export default function SeniorBoards() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/auth");
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen flex flex-col font-sans selection:bg-indigo-100">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        
        {/* HERO SECTION - HIGH IMPACT */}
        <section className="max-w-[1400px] mx-auto px-6 mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-[#020617] rounded-[3rem] lg:rounded-[5rem] p-10 lg:p-24 text-white relative overflow-hidden shadow-2xl"
          >
             {/* Animated Background Orbs */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full -mr-40 -mt-40 animate-pulse"></div>
             <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full -ml-20 -mb-20"></div>

             <div className="grid lg:grid-cols-2 items-center gap-16 relative z-10">
                <div>
                   <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="flex items-center gap-3 text-indigo-400 font-black text-[10px] uppercase tracking-[0.3em] mb-8 bg-indigo-500/10 w-fit px-4 py-2 rounded-full border border-indigo-500/20"
                   >
                       <Cpu size={14} className="animate-spin-slow" /> AI-Augmented Senior Wing
                   </motion.div>
                   
                   <h1 className="text-6xl lg:text-8xl font-black mb-8 italic leading-[0.85] tracking-tighter">
                       Class 11 & 12 <br/> <span className="text-indigo-500">Board Mastery.</span>
                   </h1>
                   
                   <p className="text-slate-400 text-xl leading-relaxed mb-12 max-w-lg font-medium italic">
                       Stop rote learning. Our Neural-Engine adapts to your cognitive speed, ensuring 95%+ in Boards while prepping you for JEE, NEET, or CUET.
                   </p>
                   
                   <div className="flex flex-wrap gap-6">
                       <button 
                        onClick={handleRedirect}
                        className="bg-indigo-600 px-12 py-5 rounded-2xl font-black shadow-xl shadow-indigo-600/30 hover:scale-105 transition-all flex items-center gap-4 group uppercase text-xs tracking-widest"
                       >
                           Get Started <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                       </button>
                     
                   </div>
                </div>

                <div className="relative">
                    <div className="aspect-square bg-slate-900/50 rounded-[4rem] border border-slate-800 p-8 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
                        <div className="space-y-6 relative z-10">
                            <div className="h-2 w-1/2 bg-indigo-500/20 rounded-full"></div>
                            <div className="space-y-3">
                                <div className="h-12 w-full bg-white/5 rounded-2xl flex items-center px-6 gap-4 border border-white/5">
                                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <span className="text-[10px] uppercase tracking-widest font-bold">Physics: Quantum Mechanics AI Guide Loaded</span>
                                </div>
                                <div className="h-12 w-full bg-white/5 rounded-2xl flex items-center px-6 gap-4 border border-white/5">
                                    <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                                    <span className="text-[10px] uppercase tracking-widest font-bold">Math: Integration Step-by-Step active</span>
                                </div>
                            </div>
                            <div className="mt-10 p-6 bg-indigo-600 rounded-3xl">
                                <p className="text-xs font-black uppercase tracking-widest mb-2">Predicted Board Score</p>
                                <p className="text-5xl font-black italic">98.4%</p>
                            </div>
                        </div>
                        <Binary className="absolute right-[-20%] bottom-[-20%] text-white/5 w-full h-full rotate-12" />
                    </div>
                </div>
             </div>
          </motion.div>
        </section>

        {/* STATS SECTION */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                    { label: "Active Seniors", val: "150k+" },
                    { label: "Avg Score Increase", val: "24%" },
                    { label: "Doubt Resolution", val: "Instant" },
                    { label: "Board Coverage", val: "All Boards" }
                ].map((stat, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="text-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm"
                    >
                        <div className="text-3xl font-black text-slate-950 mb-1 italic">{stat.val}</div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* AI GROWTH MODULES - BENTO GRID STYLE */}
        <section className="max-w-7xl mx-auto px-6 mb-40">
            <div className="text-center mb-20">
                <motion.h2 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 italic tracking-tighter"
                >
                    Neural Learning <span className="text-indigo-600 underline">Architecture.</span>
                </motion.h2>
                <p className="text-slate-500 font-medium italic text-lg">Beyond traditional tutoring—this is personalized cognitive evolution.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                <BentoFeature 
                    icon={<Sparkles className="text-indigo-600" />}
                    title="Adaptive Study Path"
                    desc="Our AI analyzes your physics & math accuracy to slow down or speed up concepts based on your brain's pace."
                    color="bg-indigo-50"
                />
                <BentoFeature 
                    icon={<Zap className="text-amber-500" />}
                    title="Instant Proof Solver"
                    desc="Upload any derivation or account problem. AI doesn't just give the answer—it explains the 'Why' in 3D."
                    color="bg-amber-50"
                />
                <BentoFeature 
                    icon={<ShieldCheck className="text-emerald-500" />}
                    title="Mock Predictor"
                    desc="Weekly tests calibrated against Board Difficulty. Get predicted marks for Board Exams with 98.7% accuracy."
                    color="bg-emerald-50"
                />
            </div>
        </section>

        {/* STREAM SECTIONS - INTERACTIVE CARDS */}
        <section className="bg-slate-950 py-32 text-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h3 className="text-indigo-500 font-black uppercase tracking-[0.4em] mb-4 text-sm">Choose Your Focus</h3>
                        <h2 className="text-5xl lg:text-7xl font-black italic tracking-tighter">Stream-Specific <br/> Intelligence.</h2>
                    </div>
                    <button 
                        onClick={handleRedirect}
                        className="bg-white text-slate-950 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-indigo-500 hover:text-white transition-all"
                    >
                        View All Batches
                    </button>
                </div>

                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    <StreamCard 
                        icon={<FlaskConical size={32} />}
                        title="Science (PCM/B)"
                        color="indigo"
                        topics={["Quantum Physics Guide", "Organic Chem Maps", "Calculus AI Solver", "NEET/JEE Bridge"]}
                        onClick={handleRedirect}
                    />
                    <StreamCard 
                        icon={<BarChart3 size={32} />}
                        title="Commerce Pro"
                        color="amber"
                        topics={["AI Accounts Auditor", "Macro-Economics Sim", "Business Case Studies", "Statistics Lab"]}
                        onClick={handleRedirect}
                    />
                    <StreamCard 
                        icon={<Globe size={32} />}
                        title="Arts Excellence"
                        color="purple"
                        topics={["History Visualizers", "Pol-Science AI", "Psychology Nodes", "Fine Arts Modules"]}
                        onClick={handleRedirect}
                    />
                </motion.div>
            </div>
        </section>

        {/* THE NEURAL DAILY - NEW SECTION */}
        <section className="py-32 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-black italic mb-4">A Day in the Life of a GyaanX Senior</h2>
                    <p className="text-slate-500 font-medium">How AI structures your success from 7 AM to 10 PM.</p>
                </div>

                <div className="space-y-12 relative before:absolute before:left-[50%] before:h-full before:w-[2px] before:bg-slate-100 before:hidden md:before:block">
                    <TimelineItem 
                        time="07:00 AM" 
                        title="Cognitive Warmup" 
                        desc="Daily 5-minute math/logic drill to wake up neural pathways."
                        icon={<BrainCircuit className="text-indigo-600" />}
                        align="left"
                    />
                    <TimelineItem 
                        time="04:00 PM" 
                        title="Post-School Synergy" 
                        desc="AI syncs your school lecture topics with our advanced library."
                        icon={<BookOpen className="text-blue-600" />}
                        align="right"
                    />
                    <TimelineItem 
                        time="08:00 PM" 
                        title="The Doubt Sprint" 
                        desc="Live AI avatar clears every hurdle encountered during self-study."
                        icon={<Milestone className="text-emerald-600" />}
                        align="left"
                    />
                </div>
            </div>
        </section>

        {/* FINAL CTA */}
        <section className="max-w-7xl mx-auto px-6 mt-20">
            <motion.div 
                whileHover={{ y: -10 }}
                className="bg-indigo-600 rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <h2 className="text-5xl lg:text-7xl font-black italic mb-8 relative z-10 tracking-tighter">Your Future AIR starts here.</h2>
                <p className="text-indigo-100 text-xl mb-12 max-w-2xl mx-auto font-medium opacity-80 italic">
                    Join 150,000+ seniors who have already moved past traditional coaching. 
                </p>
                <button 
                    onClick={handleRedirect}
                    className="bg-white text-indigo-600 px-16 py-6 rounded-2xl font-black uppercase text-sm tracking-[0.2em] hover:scale-110 transition-all shadow-2xl relative z-10"
                >
                    Enroll in Prime Wing Now
                </button>
            </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Internal reusable card components
function BentoFeature({ icon, title, desc, color }: any) {
    return (
        <motion.div 
            whileHover={{ y: -10 }}
            className={`p-12 rounded-[3.5rem] border border-slate-100 text-left transition-all duration-500 hover:shadow-2xl hover:border-indigo-100 group ${color}`}
        >
            <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:rotate-12 transition-transform duration-500">
                {icon}
            </div>
            <h3 className="text-2xl font-black mb-4 italic text-slate-900 tracking-tight">{title}</h3>
            <p className="text-slate-500 font-medium leading-relaxed italic opacity-80">{desc}</p>
        </motion.div>
    );
}

function StreamCard({ icon, title, topics, color, onClick }: any) {
    const colorClasses: any = {
        indigo: "hover:border-indigo-500 text-indigo-400",
        amber: "hover:border-amber-500 text-amber-400",
        purple: "hover:border-purple-500 text-purple-400"
    };

    return (
        <motion.div 
            variants={fadeInUp}
            className={`bg-slate-900/50 border-2 border-slate-800 p-10 rounded-[4rem] flex flex-col justify-between hover:bg-slate-900 transition-all group ${colorClasses[color]}`}
        >
            <div>
                <div className={`h-20 w-20 rounded-3xl bg-white/5 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform`}>
                    {icon}
                </div>
                <h4 className="text-3xl font-black mb-8 italic text-white tracking-tighter">{title}</h4>
                <ul className="space-y-4 mb-12">
                    {topics.map((t: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-slate-400 font-bold text-xs uppercase tracking-widest">
                            <div className="h-1.5 w-1.5 rounded-full bg-indigo-500"></div> {t}
                        </li>
                    ))}
                </ul>
            </div>
            <button 
                onClick={onClick}
                className="w-full py-5 bg-white/5 border border-white/10 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-slate-950 transition-all"
            >
                Enter Stream
            </button>
        </motion.div>
    );
}

function TimelineItem({ time, title, desc, icon, align }: any) {
    return (
        <motion.div 
            initial={{ opacity: 0, x: align === 'left' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-8 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}
        >
            <div className={`flex-1 ${align === 'left' ? 'md:text-right' : 'md:text-left'}`}>
                <div className="text-indigo-600 font-black italic mb-2">{time}</div>
                <h4 className="text-2xl font-black italic mb-2 tracking-tighter text-slate-900">{title}</h4>
                <p className="text-slate-500 font-medium italic text-sm max-w-sm mx-auto md:mx-0">{desc}</p>
            </div>
            <div className="h-16 w-16 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center z-10 relative">
                {icon}
            </div>
            <div className="flex-1 hidden md:block"></div>
        </motion.div>
    );
}