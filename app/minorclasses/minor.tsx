"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  BrainCircuit, 
  Target, 
  Sparkles, 
  Gamepad2, 
  Zap, 
  Search, 
  ChevronRight,
  BookCheck,
  Video,
  Rocket,
  Palette,
  Calculator,
  Microscope,
  LineChart,
  Eye,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

// Animation Presets
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
} as const;

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function JuniorExcellence() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/auth");
  };

  return (
    <div className="bg-[#fcfcfd] min-h-screen flex flex-col selection:bg-indigo-100 text-slate-900 font-sans">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* --- HERO SECTION: THE FUTURE OF LEARNING --- */}
          <motion.section 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-[#020617] rounded-[3.5rem] lg:rounded-[5rem] p-10 lg:p-24 text-white relative overflow-hidden mb-24 shadow-2xl"
          >
            {/* Animated Orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full -mr-40 -mt-40 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full -ml-20 -mb-20"></div>

            <div className="grid lg:grid-cols-2 items-center gap-16 relative z-10">
              <div className="text-center lg:text-left">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-indigo-500/10 text-indigo-400 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 inline-flex items-center gap-2 border border-indigo-500/20"
                >
                  <Rocket size={14} className="animate-bounce" /> The Foundation for Greatness
                </motion.div>
                
                <h1 className="text-6xl lg:text-[9rem] font-black italic tracking-tighter mb-8 leading-[0.8] transition-all">
                  Junior <br/> <span className="text-indigo-500">Excellence.</span>
                </h1>
                
                <p className="text-slate-400 text-xl leading-relaxed mb-12 max-w-lg font-medium mx-auto lg:mx-0 italic">
                  We don't just teach subjects; we build <span className="text-white">Neural Logic.</span> Prepare for the future from Class 6.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  <button 
                    onClick={handleRedirect}
                    className="bg-indigo-600 px-12 py-6 rounded-2xl font-black shadow-2xl shadow-indigo-600/30 hover:bg-indigo-500 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-4 group"
                  >
                    Start Free Trial <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                  
                </div>
              </div>

              {/* Interactive Visual Element */}
              <div className="relative hidden lg:block">
                <div className="relative z-10 bg-slate-900/50 backdrop-blur-xl p-10 rounded-[4rem] border border-white/10 shadow-3xl">
                   <div className="flex justify-between items-center mb-10">
                      <div className="flex gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      </div>
                      <div className="text-indigo-400 text-[10px] font-black tracking-widest uppercase">GyaanX_AI_Engine_v1</div>
                   </div>
                   <div className="space-y-6">
                      <div className="h-14 w-full bg-indigo-500/20 rounded-2xl flex items-center px-6 gap-4 border border-indigo-500/30">
                         <div className="h-6 w-6 bg-indigo-500 rounded-lg flex items-center justify-center text-[10px] font-bold">6th</div>
                         <span className="text-xs font-bold text-slate-300">Class 6: Logic Building Started...</span>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                         <div className="p-6 bg-slate-800 rounded-3xl">
                            <Gamepad2 className="text-emerald-400 mb-2" size={20} />
                            <div className="text-2xl font-black">94%</div>
                            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Engagement</div>
                         </div>
                         <div className="p-6 bg-indigo-600 rounded-3xl">
                            <Target className="text-white mb-2" size={20} />
                            <div className="text-2xl font-black">AIR 1</div>
                            <div className="text-[10px] text-white/60 font-bold uppercase tracking-tighter">Goal Readiness</div>
                         </div>
                      </div>
                   </div>
                </div>
                {/* Floating Icons */}
                <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -top-10 -right-10 p-6 bg-white rounded-3xl shadow-xl text-indigo-600">
                  <Calculator size={32} />
                </motion.div>
                <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute -bottom-10 -left-10 p-6 bg-white rounded-3xl shadow-xl text-emerald-600">
                  <Microscope size={32} />
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* --- BENTO BOX FEATURES --- */}
          <section className="py-24">
             <div className="text-center mb-24">
                <motion.h2 {...fadeInUp} className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 italic tracking-tighter">
                  How AI Builds <span className="text-indigo-600">Geniuses.</span>
                </motion.h2>
                <p className="text-slate-500 text-lg font-medium italic">Standard education is a lecture. GyaanX AI is a conversation.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <BentoCard 
                  span="md:col-span-8"
                  bg="bg-indigo-50"
                  icon={<Sparkles className="text-indigo-600" />}
                  title="3D Concept Visualization"
                  desc="Don't just read about atoms—touch them. AI turns boring text into 3D interactive labs where Class 6-10 students can experiment safely."
                />
                <BentoCard 
                  span="md:col-span-4"
                  bg="bg-slate-900 text-white"
                  icon={<Gamepad2 className="text-emerald-400" />}
                  title="Gamified Quizzes"
                  desc="Points, levels, and badges. We make Math as addictive as Minecraft."
                />
                <BentoCard 
                  span="md:col-span-4"
                  bg="bg-emerald-50"
                  icon={<Search className="text-emerald-600" />}
                  title="Photo Doubt Solver"
                  desc="Snap a photo of any board question. Instant 1-on-1 AI explanation."
                />
                <BentoCard 
                  span="md:col-span-8"
                  bg="bg-white"
                  icon={<BrainCircuit className="text-indigo-600" />}
                  title="Neural Logic Pathways"
                  desc="Our system tracks logical fallacies. If a student struggles with 'Fractions', the AI builds a custom bridge from 'Pizza Slices' to 'Numerators'."
                />
             </div>
          </section>

          {/* --- GRADE-SPECIFIC LEARNING PATHS --- */}
          <div className="py-24 border-t border-slate-100">
             <h3 className="text-[11px] font-black uppercase text-indigo-600 tracking-[0.5em] mb-4 text-center">Specialized Grade Modules</h3>
             <h2 className="text-5xl font-black text-slate-900 text-center italic mb-20 tracking-tighter">The Junior Growth Curve</h2>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
                {/* Middle School */}
                <GradeCard 
                  title="Middle School (6th - 8th)"
                  subtitle="Curiosity & Exploration"
                  features={["Coding Basics with AI", "Mental Math Shortcuts", "World History Visualizers", "Grammar Logic Games"]}
                  onClick={handleRedirect}
                />
                {/* Foundation School */}
                <GradeCard 
                  title="High School (9th - 10th)"
                  subtitle="Foundation for JEE/NEET/CUET"
                  features={["Advanced Board Predictor", "Physics Numerical Labs", "CUET-Level English", "Career Mapping AI"]}
                  onClick={handleRedirect}
                />
             </div>
          </div>

          {/* --- PARENTAL INSIGHT SECTION --- */}
          <motion.section 
            whileHover={{ scale: 1.01 }}
            className="mt-24 bg-white border-2 border-indigo-100 rounded-[4rem] p-10 lg:p-20 flex flex-col lg:flex-row items-center gap-16 shadow-indigo-100 shadow-2xl"
          >
            <div className="lg:w-1/2">
                <div className="h-16 w-16 bg-indigo-600 text-white rounded-3xl flex items-center justify-center mb-8 shadow-xl">
                  <LineChart size={32} />
                </div>
                <h3 className="text-4xl font-black italic mb-6 tracking-tighter text-slate-900">Parental Control & Insights.</h3>
                <p className="text-slate-500 text-lg font-medium italic mb-10 leading-relaxed">
                   Receive weekly "Neural Reports." Not just marks, but insights into your child's concentration span, logical speed, and strongest subject areas.
                </p>
               
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100">
                    <ShieldCheck className="text-emerald-500 mb-4" />
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Safety First</p>
                    <p className="font-bold text-slate-900 italic">100% Ad-Free & AI Monitored</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100">
                    <Target className="text-indigo-500 mb-4" />
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Weekly Targets</p>
                    <p className="font-bold text-slate-900 italic">Curated by Subject Mentors</p>
                </div>
            </div>
          </motion.section>

          {/* --- FINAL CALL TO ACTION --- */}
          <section className="mt-32 text-center pb-20">
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="bg-indigo-600 rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden"
             >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10">
                   <h2 className="text-5xl lg:text-7xl font-black italic mb-8 tracking-tighter">Ready to Build <br/> a Superbrain?</h2>
                   <p className="text-indigo-100 text-xl mb-12 max-w-2xl mx-auto font-medium opacity-80 italic">
                      Classes start at just <span className="text-white font-black underline decoration-emerald-400 decoration-4 underline-offset-8">₹199/month.</span>
                   </p>
                   <button 
                      onClick={handleRedirect}
                      className="bg-white text-indigo-600 px-16 py-6 rounded-2xl font-black uppercase text-sm tracking-[0.2em] hover:scale-110 transition-all shadow-2xl"
                   >
                      Enroll in Junior Wing Now
                   </button>
                </div>
             </motion.div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

// Sub Components
function BentoCard({span, bg, icon, title, desc}: any) {
  return (
    <motion.div 
      {...fadeInUp}
      whileHover={{ y: -10 }}
      className={`${span} ${bg} p-12 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col justify-between group transition-all duration-500`}
    >
      <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:rotate-6 transition-transform">
        {icon}
      </div>
      <div>
        <h3 className="text-3xl font-black mb-6 italic tracking-tight">{title}</h3>
        <p className="opacity-70 leading-relaxed font-medium italic text-sm">{desc}</p>
      </div>
    </motion.div>
  )
}

function GradeCard({title, subtitle, features, onClick}: any) {
  return (
    <div className="bg-white border-2 border-slate-50 p-12 rounded-[4rem] group hover:border-indigo-600 hover:shadow-2xl transition-all duration-500">
      <h4 className="text-3xl font-black italic text-slate-900 mb-2 group-hover:text-indigo-600">{title}</h4>
      <p className="text-indigo-400 font-bold uppercase text-[10px] tracking-widest mb-10">{subtitle}</p>
      
      <ul className="space-y-4 mb-12">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex items-center gap-4 text-slate-500 font-medium italic">
            <ShieldCheck size={18} className="text-emerald-500" /> {f}
          </li>
        ))}
      </ul>

      <button 
        onClick={onClick}
        className="w-full py-5 border-2 border-slate-100 rounded-2xl font-black uppercase text-xs tracking-widest group-hover:bg-indigo-600 group-hover:text-white transition-all flex items-center justify-center gap-3"
      >
        View Grade Path <ChevronRight size={16}/>
      </button>
    </div>
  )
}