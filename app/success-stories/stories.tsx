"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  User, 
  Quote, 
  Star, 
  TrendingUp, 
  Trophy, 
  Award, 
  CheckCircle2, 
  Play,
  ArrowRight,
  Target,
  Users
} from "lucide-react";

// Animation Variants with explicit Easing for Build Efficiency
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
} as const;

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function Success() {
  const router = useRouter();
  const handleRedirect = () => router.push("/auth");

  return (
    <div className="bg-[#fcfcfd] min-h-screen flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Header />

      <main className="flex-grow pt-32 pb-20 overflow-hidden">
        
        {/* HERO SECTION: THE HALL OF FAME */}
        <section className="max-w-[1400px] mx-auto px-6 mb-24 text-center">
            <motion.div
             key={1}
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="mb-10 inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 px-5 py-2 rounded-full"
            >
               <Star size={16} className="fill-indigo-600" />
               <span className="text-[10px] font-black uppercase tracking-[0.2em]">The Class of 2025/26 Results</span>
            </motion.div>
            
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl lg:text-[9rem] font-black text-slate-900 mb-8 italic tracking-tighter leading-[0.85]"
            >
                The Results <br/> <span className="text-indigo-600">of Reasoning.</span>
            </motion.h1>
            
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-slate-500 font-bold italic text-xl max-w-3xl mx-auto leading-relaxed mb-16"
            >
                We don't sell dreams; we sell data-backed growth. Meet the 5,000+ students who cleared India’s toughest exams using GyaanX AI.
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
               <BigStat label="Total Selections" val="12.5k" sub="+45% vs last year" />
               <BigStat label="Top 1% Percentile" val="890" sub="Students in AI Ranking" />
               <BigStat label="Board Result" val="95.4%" sub="Average of Prime users" />
               <BigStat label="Average Rank Move" val="+1200" sub="Positions in Mocks" />
            </div>
        </section>

        {/* FEATURED STORY - VIDEO STYLE CASE STUDY */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
            <motion.div 
               {...fadeInUp}
               onClick={handleRedirect}
               className="bg-[#020617] rounded-[4rem] p-10 lg:p-20 text-white relative overflow-hidden group cursor-pointer shadow-2xl"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 via-transparent to-transparent opacity-50"></div>
                <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                   <div>
                      <span className="text-emerald-400 font-black uppercase tracking-widest text-xs">Featured Success Case</span>
                      <h2 className="text-4xl lg:text-6xl font-black italic tracking-tighter mt-4 mb-8 leading-tight">
                         From Failure <br/> to <span className="text-emerald-400 italic">AIR 142.</span>
                      </h2>
                      <p className="text-slate-400 text-lg italic leading-relaxed mb-10">
                        "I struggled with English Comprehension and Advance Quant for 2 years. GyaanX AI tracked my eye-patterns and realized I was skimming key words. It retrained my focus and the rest is history."
                      </p>
                      <div className="flex items-center gap-6">
                         <div className="h-16 w-16 bg-white rounded-3xl flex items-center justify-center">
                            <Play className="fill-slate-900 ml-1" />
                         </div>
                         <div>
                            <p className="font-bold text-lg leading-none italic">Siddharth Varma</p>
                            <p className="text-slate-500 font-bold uppercase text-[10px] mt-1 tracking-widest">SSC CGL Aspirant</p>
                         </div>
                      </div>
                   </div>
                   <div className="relative flex justify-center">
                      <div className="aspect-square w-80 h-80 bg-white/10 rounded-full flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-700">
                         <div className="w-full h-full bg-slate-800 rounded-full border-4 border-indigo-600 shadow-2xl overflow-hidden relative">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400')] bg-cover"></div>
                         </div>
                         <Trophy className="absolute -top-10 -right-10 text-emerald-400" size={80} />
                      </div>
                   </div>
                </div>
            </motion.div>
        </section>

        {/* TESTIMONIAL GRID: THE TIERED VIEW */}
        <section className="px-6 py-32 bg-slate-50 border-y border-slate-100">
           <div className="max-w-7xl mx-auto">
             <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
               <h2 className="text-5xl font-black italic tracking-tighter max-w-xl">Proven by Students, <br/> Verified by <span className="text-indigo-600">Results.</span></h2>
               <button onClick={handleRedirect} className="bg-indigo-600 text-white font-black px-10 py-5 rounded-2xl flex items-center gap-4 hover:bg-slate-900 transition-all uppercase tracking-widest text-[10px]">Verify Authenticity <Target size={18}/></button>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <StoryCard 
                   name="Aryan Sharma" 
                   stream="Class 12 - Science"
                   result="98.4% (PCM)"
                   text="GyaanX explains concepts using physics simulations I never saw in class. The Board Prediction accuracy was spot on."
                   color="border-indigo-100"
                   onClick={handleRedirect}
                />
                <StoryCard 
                   name="Anjali Iyer" 
                   stream="Gov Exams"
                   result="Bank PO Cleared"
                   text="The Logical Reasoning logic tree on the dashboard saved me 20 seconds per question. It's a game changer."
                   color="border-emerald-100"
                   onClick={handleRedirect}
                />
                <StoryCard 
                   name="Prateek Sen" 
                   stream="IIT JEE"
                   result="JEE Main - 99.8"
                   text="The Visual Geometry lab inside GyaanX Prime helped me understand vectors 10x faster than traditional coaching."
                   color="border-rose-100"
                   onClick={handleRedirect}
                />
                 <StoryCard 
                   name="David R." 
                   stream="Railways"
                   result="RRB NTPC Sel."
                   text="AI Doubt solver solved my GS science confusion. Handwritten notes to high-def visual study maps."
                   color="border-blue-100"
                   onClick={handleRedirect}
                />
                <StoryCard 
                   name="Simran Kaur" 
                   stream="Class 10"
                   result="State Rank #2"
                   text="Learning history and polity via AI-stories was easier than reading the book. Memory maps are insane."
                   color="border-amber-100"
                   onClick={handleRedirect}
                />
                <StoryCard 
                   name="Rajiv Malhotra" 
                   stream="SSC CGL"
                   result="Tier II Done"
                   text="Competitive speed matters. The AI track per question time was my only benchmark to clear."
                   color="border-indigo-100"
                   onClick={handleRedirect}
                />
             </div>
           </div>
        </section>

        {/* FEEDBACK MOCKUP: THE WALL OF FEEDBACK */}
        <section className="py-40 max-w-[1400px] mx-auto px-6">
           <div className="text-center mb-24">
              <h2 className="text-4xl lg:text-7xl font-black italic mb-4 tracking-tighter text-slate-900 leading-[0.85]">
                What's the Community <br/> <span className="text-indigo-600 underline decoration-indigo-200">Saying right now?</span>
              </h2>
           </div>

           <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {[
                {user: "@rahul_codes", text: "Math quiz score jumped from 60 to 90 in 2 weeks. AI tracking is scary good! #GyaanX"},
                {user: "@sneha.study", text: "Wait... the doubt solver actually talks to you like a teacher? Worth it for 199/mo."},
                {user: "@topper_2025", text: "Rank #1 today on the GyaanX board! Feeling like a god lol"},
                {user: "@board_prep", text: "Died for derivations until I saw the 3D explainers here."},
                {user: "@railway_man", text: "Science and General Knowledge and current affairs sorted via the AI news feeds."},
                {user: "@junior_class6", text: "Dad is happy with my result report dashboard! Weekly insights help a lot."},
              ].map((tweet, i) => (
                <motion.div 
                   {...fadeInUp}
                   key={i} 
                   whileHover={{ scale: 1.02 }}
                   onClick={handleRedirect}
                   className="break-inside-avoid bg-white p-8 rounded-3xl border-2 border-slate-50 shadow-sm cursor-pointer hover:border-indigo-600 transition-all group"
                >
                   <p className="text-slate-900 font-bold text-xs uppercase mb-4 tracking-widest text-indigo-600">{tweet.user}</p>
                   <p className="text-slate-600 font-medium italic group-hover:text-slate-950 transition-colors leading-relaxed">"{tweet.text}"</p>
                </motion.div>
              ))}
           </div>
        </section>

        {/* FINAL CONVERSION SECTION */}
        <section className="px-6 pb-20 max-w-7xl mx-auto">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="bg-indigo-600 rounded-[5rem] p-16 text-center text-white relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-10"></div>
                <Users size={64} className="mx-auto mb-8 text-white/50 animate-bounce" />
                <h3 className="text-4xl lg:text-7xl font-black italic tracking-tighter mb-8 relative z-10 leading-[0.85]">Join the 50,000 <br/> Toppers Hub.</h3>
                <p className="text-indigo-100 font-bold mb-12 italic relative z-10 max-w-xl mx-auto opacity-70">Become the next case study on this page. Unlock GyaanX Prime and accelerate your learning.</p>
                <button 
                   onClick={handleRedirect}
                   className="bg-slate-950 text-white font-black px-12 py-6 rounded-2xl hover:scale-110 transition-transform shadow-2xl uppercase tracking-widest text-xs italic relative z-10 group"
                >
                   Enroll in PRIME Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform inline ml-2" />
                </button>
            </motion.div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

// Small Stat Logic
function BigStat({label, val, sub}:any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 bg-white border border-slate-50 rounded-[2.5rem] text-center shadow-sm"
    >
      <p className="text-[9px] font-black uppercase text-slate-400 tracking-[0.2em] mb-2">{label}</p>
      <h3 className="text-5xl font-black italic text-indigo-600 leading-none mb-2">{val}</h3>
      <p className="text-[10px] font-black italic text-emerald-500">{sub}</p>
    </motion.div>
  )
}

// Improved Story Card Component
function StoryCard({name, stream, result, text, color, onClick}:any) {
    return (
        <motion.div 
            whileHover={{ y: -10 }}
            onClick={onClick}
            className={`p-10 bg-white border-2 border-transparent hover:${color} hover:shadow-2xl hover:shadow-indigo-100 rounded-[4rem] relative group cursor-pointer transition-all duration-500`}
        >
            <Quote className="absolute right-10 top-10 text-slate-100 group-hover:text-indigo-500/20 transition-all rotate-12" size={80} strokeWidth={3} />
            <div className="flex gap-4 items-center mb-8">
              <div className="h-16 w-16 bg-slate-50 rounded-[1.8rem] flex items-center justify-center border border-slate-100 overflow-hidden relative group-hover:border-indigo-600 group-hover:scale-110 transition-all">
                  <User size={30} className="text-slate-300" />
              </div>
              <div>
                <h4 className="font-black text-slate-900 text-xl tracking-tight leading-none italic group-hover:text-indigo-600 transition-colors">{name}</h4>
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-2">{stream}</p>
              </div>
            </div>
            
            <p className="text-slate-700 font-medium italic text-lg leading-relaxed mb-8 relative z-10">"{text}"</p>
            
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-5 py-2 rounded-2xl">
               <Award size={14} className="text-indigo-600" />
               <span className="text-indigo-600 font-black uppercase text-[10px] tracking-widest">{result}</span>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-50 flex justify-between items-center text-slate-200 group-hover:text-indigo-400 transition-all">
                <span className="text-[9px] font-black tracking-widest uppercase">Full Journey</span>
                <ChevronIcon />
            </div>
        </motion.div>
    )
}

function ChevronIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
  )
}