"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  Camera, 
  Sparkles, 
  MessageSquare, 
  History, 
  BrainCircuit,
  ArrowRight,
  Zap,
  Target,
  FileSearch,
  CheckCircle2,
  ScanEye,
  Microscope,
  RotateCcw,
  ShieldCheck
} from "lucide-react";

// Framer Motion Variants with "as const" to prevent TypeScript Errors
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
} as const;

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function AIDoubtSolver() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/auth");
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen flex flex-col selection:bg-indigo-100 font-sans">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* HERO SECTION - THE VISION ENGINE */}
          <motion.section 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-[#020617] rounded-[3.5rem] lg:rounded-[5rem] p-10 lg:p-24 text-white relative overflow-hidden mb-24 shadow-2xl"
          >
             {/* Dynamic Glows */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full -mr-40 -mt-40"></div>
             <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full -ml-20 -mb-20"></div>

             <div className="grid lg:grid-cols-2 items-center gap-16 relative z-10">
                <div className="text-center lg:text-left">
                   <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8"
                   >
                       <ScanEye size={14} className="text-indigo-400" />
                       <span className="text-indigo-300 text-[10px] font-black uppercase tracking-[0.2em]">Next-Gen Vision Engine v2.0</span>
                   </motion.div>
                   
                   <h1 className="text-6xl lg:text-[8.5rem] font-black italic mb-8 leading-[0.85] tracking-tighter">
                       Snap. Solve. <br/> <span className="text-indigo-500">Master.</span>
                   </h1>
                   
                   <p className="text-slate-400 text-xl leading-relaxed mb-12 max-w-lg font-medium italic border-l-4 border-indigo-600 pl-6">
                       Stop guessing. Our Vision AI doesn't just "show" you the answer; it builds a mental roadmap to ensure you can solve the next one alone.
                   </p>
                   
                   <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                     
                   </div>
                </div>

                {/* AI MOCKUP INTERFACE */}
                <div className="relative group">
                    <div className="bg-slate-900/80 backdrop-blur-2xl rounded-[4rem] border border-white/10 p-4 lg:p-10 shadow-3xl">
                       <div className="bg-black/50 rounded-[3rem] p-8 aspect-[4/3] flex flex-col justify-center items-center relative overflow-hidden border border-white/5">
                            <motion.div 
                              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                              transition={{ repeat: Infinity, duration: 4 }}
                              className="absolute inset-0 bg-indigo-500/5 flex items-center justify-center"
                            >
                                <Target size={180} strokeWidth={0.5} className="text-indigo-500" />
                            </motion.div>
                            <Camera size={64} className="text-indigo-400 mb-4 animate-pulse" />
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Align Question within Box</p>
                       </div>
                       <div className="mt-8 flex justify-around">
                          <div className="h-2 w-20 bg-indigo-500 rounded-full"></div>
                          <div className="h-2 w-10 bg-slate-700 rounded-full"></div>
                          <div className="h-2 w-16 bg-slate-700 rounded-full"></div>
                       </div>
                    </div>
                </div>
             </div>
          </motion.section>

          {/* PROCESS FLOW - 1, 2, 3 */}
          <section className="py-24">
             <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left mb-24">
                <div className="max-w-xl">
                  <h2 className="text-4xl lg:text-6xl font-black italic tracking-tighter mb-4">A Socratic <span className="text-indigo-600">Loop.</span></h2>
                  <p className="text-slate-500 font-medium italic text-lg">Our AI follows the ancient teaching method: Ask, Guide, Reveal.</p>
                </div>
                <div className="h-[2px] hidden lg:block flex-grow bg-slate-200"></div>
             </div>

             <div className="grid md:grid-cols-3 gap-8 relative">
                <ProcessStep 
                  number="01" 
                  title="Capture Doubt" 
                  text="Whether it's a blurry textbook or a handwritten note, our Vision OCR cleans up and identifies the concept."
                />
                <ProcessStep 
                  number="02" 
                  title="Context Training" 
                  text="The AI doesn't give the result. It asks: 'What is your first step?' to identify exactly where your logic failed."
                />
                <ProcessStep 
                  number="03" 
                  title="Neural Resolution" 
                  text="Final derivation with 'Short-trick' alternatives for Competitive Exams vs Step-by-step for Board exams."
                />
             </div>
          </section>

          {/* BENTO GRID OF CORE FEATURES */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-40">
              <BentoFeature 
                className="md:col-span-8 bg-indigo-600 text-white"
                icon={<MessageSquare size={32} />}
                title="Socratic Conversation"
                text="The solver acts like a personal tutor. It engages you in a text dialogue to ensure you are actually learning, not just copying the solution."
              />
              <BentoFeature 
                className="md:col-span-4 bg-white"
                icon={<History size={32} className="text-indigo-600" />}
                title="AI Revision Vault"
                text="Access your past doubts categorized by subject and difficulty."
              />
              <BentoFeature 
                className="md:col-span-4 bg-emerald-50"
                icon={<Zap size={32} className="text-emerald-600" />}
                title="Multiple Solutions"
                text="Provides Board-correct steps AND Competitive-ready shortcuts for the same question."
              />
              <BentoFeature 
                className="md:col-span-8 bg-slate-900 text-white"
                icon={<Microscope size={32} className="text-indigo-400" />}
                title="Handwriting Decoding"
                text="Trained on millions of messy notes, our AI can read complex diagrams and math scribbles with 99.2% precision."
              />
          </div>

          {/* VS TRADITIONAL SECTION */}
          <section className="bg-white border-2 border-slate-50 rounded-[4rem] p-10 lg:p-20 mb-32">
             <div className="text-center mb-16">
                <h2 className="text-4xl font-black italic mb-4">Old Search vs GyaanX AI</h2>
                <div className="h-1.5 w-20 bg-indigo-600 mx-auto rounded-full"></div>
             </div>
             
             <div className="grid md:grid-cols-2 gap-20">
                <div className="opacity-50 grayscale scale-95 pointer-events-none">
                    <h3 className="text-2xl font-bold mb-8">Other Doubt Apps</h3>
                    <ul className="space-y-4">
                        <li className="flex gap-4 p-4 border rounded-2xl bg-slate-50 line-through">Only 1 video solution for everyone</li>
                        <li className="flex gap-4 p-4 border rounded-2xl bg-slate-50 line-through">Copy-paste the answer (No learning)</li>
                        <li className="flex gap-4 p-4 border rounded-2xl bg-slate-50 line-through">Full of distracing ads</li>
                    </ul>
                </div>
                <div className="relative">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">GyaanX Solution <Target className="text-indigo-600" size={24}/></h3>
                    <ul className="space-y-4">
                        <li className="flex gap-4 p-4 border border-indigo-100 rounded-2xl bg-indigo-50 font-bold italic"><CheckCircle2 className="text-emerald-500 flex-shrink-0" /> Tailored to your learning speed</li>
                        <li className="flex gap-4 p-4 border border-indigo-100 rounded-2xl bg-indigo-50 font-bold italic"><CheckCircle2 className="text-emerald-500 flex-shrink-0" /> Asks leading questions to help you</li>
                        <li className="flex gap-4 p-4 border border-indigo-100 rounded-2xl bg-indigo-50 font-bold italic"><CheckCircle2 className="text-emerald-500 flex-shrink-0" /> Predicts Board high-yield questions</li>
                    </ul>
                    <div className="absolute -top-10 -right-10 animate-bounce">
                        <div className="bg-indigo-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase">10x Faster</div>
                    </div>
                </div>
             </div>
          </section>

          {/* FINAL CTA BOX */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-indigo-600 rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <div className="relative z-10">
                <h2 className="text-5xl lg:text-7xl font-black italic mb-8 tracking-tighter">Ready to resolve <br/> every hurdle?</h2>
                <p className="text-indigo-100 text-xl mb-12 max-w-2xl mx-auto font-medium italic">
                    Stop letting a single question stop your progress for the whole day.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button 
                        onClick={handleRedirect}
                        className="bg-white text-indigo-600 px-16 py-6 rounded-2xl font-black uppercase text-sm tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-all shadow-2xl"
                    >
                        Try AI Solver for just ₹199/month
                    </button>
                    
                </div>
             </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

// Reusable Components
function BentoFeature({ icon, title, text, className }: any) {
    return (
        <motion.div 
            {...fadeInUp}
            whileHover={{ y: -8 }}
            className={`p-10 rounded-[3.5rem] border border-slate-100 shadow-sm flex flex-col justify-between group transition-all duration-500 ${className}`}
        >
            <div className="h-16 w-16 bg-white/10 rounded-2xl backdrop-blur-md flex items-center justify-center mb-8 shadow-lg group-hover:rotate-6 transition-transform">
                {icon}
            </div>
            <div>
                <h3 className="text-2xl font-black mb-4 italic tracking-tight">{title}</h3>
                <p className="opacity-70 leading-relaxed font-medium italic text-sm">{text}</p>
            </div>
        </motion.div>
    );
}

function ProcessStep({ number, title, text }: any) {
    return (
        <motion.div 
            {...fadeInUp}
            className="relative bg-white p-10 rounded-[3rem] border border-slate-50 hover:border-indigo-200 transition-all group"
        >
            <div className="text-5xl font-black italic text-indigo-600/10 absolute top-8 right-8 group-hover:text-indigo-600/20 transition-colors">
                {number}
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4 italic">{title}</h3>
            <p className="text-slate-500 font-medium leading-relaxed italic text-sm">{text}</p>
            <button className="mt-8 flex items-center gap-2 text-indigo-600 font-black text-[10px] uppercase tracking-widest hover:translate-x-2 transition-all">
                Learn Logic <ArrowRight size={14} />
            </button>
        </motion.div>
    );
}