"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  Trophy, 
  Target, 
  BarChart3, 
  Rocket, 
  Flame, 
  Users, 
  Timer, 
  CheckCircle2, 
  Brain, 
  Zap,
  ArrowRight,
  Calculator,
  Microscope,
  Star,
  Globe
} from "lucide-react";

// Framer Motion Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
} as const;

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function DailyQuizzes() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/auth");
  };

  return (
    <div className="bg-[#fcfcfd] min-h-screen flex flex-col font-sans selection:bg-emerald-100">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* HERO SECTION - GAMIFIED DESIGN */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-emerald-600 rounded-[3.5rem] lg:rounded-[5rem] p-10 lg:p-24 text-white relative overflow-hidden mb-24 shadow-2xl shadow-emerald-200/50"
          >
             {/* Abstract Particles */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full -mr-40 -mt-40"></div>
             <div className="absolute bottom-0 left-20 w-64 h-64 bg-emerald-400/20 blur-[80px] rounded-full"></div>

             <div className="max-w-3xl relative z-10">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full mb-8 inline-flex items-center gap-3 border border-white/30"
                >
                  <Flame size={16} className="text-orange-400 fill-orange-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-50">45,902 Students Streaks Today</span>
                </motion.div>

                <h1 className="text-6xl lg:text-9xl font-black mb-8 italic tracking-tighter leading-[0.85]">
                   Beat the <br/> <span className="text-[#020617]">Logic Burn.</span>
                </h1>
                
                <p className="text-emerald-50 text-xl leading-relaxed font-medium mb-12 max-w-xl italic">
                   10 High-Precision Questions every morning. GyaanX AI calculates your cognitive decay and targets the concepts you're about to forget.
                </p>

                <div className="flex flex-wrap gap-6">
                   <button 
                    onClick={handleRedirect}
                    className="bg-[#020617] px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#020617] transition-all flex items-center gap-4 group"
                   >
                     Join Daily Arena <Trophy size={18} className="group-hover:rotate-12 transition-transform" />
                   </button>
                   <div className="flex -space-x-3 items-center">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="h-10 w-10 rounded-full border-2 border-emerald-600 bg-emerald-400" />
                      ))}
                      <span className="ml-6 text-sm font-bold text-emerald-100">+ Active Live Rankings</span>
                   </div>
                </div>
             </div>
             <Brain size={400} className="absolute right-[-10%] bottom-[-10%] opacity-10 pointer-events-none" />
          </motion.div>

          {/* DASHBOARD PREVIEW SECTION */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
             <motion.div {...fadeInUp}>
                <div className="inline-flex items-center gap-2 text-emerald-600 font-black text-xs uppercase tracking-[0.3em] mb-4">
                  <BarChart3 size={14}/> Analytics Lab
                </div>
                <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 italic tracking-tighter leading-[0.9]">Your Brain. <br/> Quantified.</h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium italic">
                   Consistency isn't just a number. It's an AI-monitored growth curve. We track "Time per Solution" and "Mistake Persistence" to tell you exactly where you'll score.
                </p>
                <div className="space-y-4">
                   <ProgressTracker label="Spatial Intelligence" val="w-[78%]" onClick={handleRedirect} />
                   <ProgressTracker label="Calculation Speed" val="w-[52%]" onClick={handleRedirect} />
                   <ProgressTracker label="Logic Consistency" val="w-[91%]" onClick={handleRedirect} />
                </div>
             </motion.div>

             {/* STATS VISUALIZATION MOCKUP */}
             <motion.div 
               {...fadeInUp}
               onClick={handleRedirect}
               className="bg-white p-8 lg:p-12 rounded-[4rem] border border-slate-100 shadow-2xl relative cursor-pointer group"
             >
                <div className="flex justify-between items-end mb-12">
                   { [40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                      <div key={i} className="w-4 bg-slate-50 rounded-full relative overflow-hidden h-40">
                         <motion.div 
                          initial={{ height: 0 }} 
                          whileInView={{ height: `${h}%` }} 
                          className={`absolute bottom-0 w-full rounded-full transition-colors ${i === 3 ? 'bg-emerald-500' : 'bg-slate-200 group-hover:bg-emerald-200'}`}
                         />
                      </div>
                   ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-emerald-50 p-6 rounded-3xl">
                      <div className="text-3xl font-black text-emerald-600">89.4</div>
                      <div className="text-[10px] font-black uppercase text-emerald-400">Mastery Index</div>
                   </div>
                   <div className="bg-slate-950 p-6 rounded-3xl text-white">
                      <div className="text-3xl font-black">21</div>
                      <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Day Streak</div>
                   </div>
                </div>
             </motion.div>
          </div>

          {/* QUIZ ARENAS: SELECT BY CATEGORY */}
          <section className="py-20 border-t border-slate-100">
             <div className="text-center mb-24">
                <h3 className="text-emerald-600 font-black uppercase tracking-[0.4em] mb-4 text-xs italic">Live Now</h3>
                <h2 className="text-5xl font-black italic tracking-tighter">Choose Your Battleground.</h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ArenaCard 
                   icon={<Calculator className="text-blue-500"/>} 
                   title="Logic & Quant" 
                   difficulty="Hardcore" 
                   players="1,202"
                   onClick={handleRedirect}
                />
                <ArenaCard 
                   icon={<Microscope className="text-rose-500"/>} 
                   title="Deep Science" 
                   difficulty="Moderate" 
                   players="845"
                   onClick={handleRedirect}
                />
                <ArenaCard 
                   icon={<Globe className="text-indigo-500"/>} 
                   title="Global Awareness" 
                   difficulty="Easy" 
                   players="3,110"
                   onClick={handleRedirect}
                />
                <ArenaCard 
                   icon={<Zap className="text-amber-500"/>} 
                   title="English Sprint" 
                   difficulty="Fast" 
                   players="654"
                   onClick={handleRedirect}
                />
             </div>
          </section>

          {/* GLOBAL LEADERBOARD MOCKUP */}
          <div className="bg-slate-950 rounded-[4rem] p-10 lg:p-24 text-white relative overflow-hidden mb-24 shadow-3xl">
             <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 via-transparent to-transparent"></div>
             
             <div className="flex flex-col lg:flex-row justify-between items-center gap-16 relative z-10">
                <div className="lg:w-1/3">
                   <Star size={48} className="text-emerald-500 mb-6" />
                   <h3 className="text-4xl font-black italic tracking-tighter mb-4 leading-none">Global Arena <br/> Ranking.</h3>
                   <p className="text-slate-400 font-medium italic mb-10 text-lg">Top performers win scholarships and physical achievement kits monthly.</p>
                   <button 
                    onClick={handleRedirect}
                    className="w-full lg:w-fit py-4 px-10 bg-emerald-500 rounded-2xl font-black text-slate-950 uppercase text-[10px] tracking-[0.2em] hover:bg-white transition-colors"
                   >
                     Claim Your Username
                   </button>
                </div>
                
                <div className="flex-1 space-y-3 w-full max-w-lg" onClick={handleRedirect}>
                   {[
                    { name: "Rahul S.", points: "2.9k", rank: 1, streak: "42" },
                    { name: "Arpita K.", points: "2.7k", rank: 2, streak: "18" },
                    { name: "Sneha M.", points: "2.6k", rank: 3, streak: "9" }
                   ].map((user) => (
                      <motion.div 
                        whileHover={{ scale: 1.02, x: 5 }}
                        key={user.rank}
                        className="bg-white/5 border border-white/10 p-6 rounded-3xl flex items-center justify-between group cursor-pointer"
                      >
                         <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-emerald-500 text-slate-950 rounded-xl flex items-center justify-center font-black">#{user.rank}</div>
                            <div>
                               <p className="font-bold">{user.name}</p>
                               <p className="text-[10px] text-emerald-400 font-bold tracking-widest uppercase">{user.streak} DAY STREAK</p>
                            </div>
                         </div>
                         <div className="text-2xl font-black tracking-tighter italic">{user.points} XP</div>
                      </motion.div>
                   ))}
                </div>
             </div>
          </div>

          {/* FINAL PUSH CTA */}
          <section className="text-center pb-20">
             <div className="bg-slate-100 rounded-[3rem] p-12 lg:p-20 relative border border-slate-200">
                <div className="mb-10 inline-flex items-center gap-4">
                   <Rocket size={40} className="text-emerald-600" />
                </div>
                <h2 className="text-4xl lg:text-7xl font-black text-slate-900 mb-6 italic tracking-tighter leading-none">Your Streak <span className="text-emerald-600">starts today.</span></h2>
                <p className="text-slate-500 text-lg mb-10 italic">Small steps, Every single day. Join GyaanX and master consistency.</p>
                <button 
                  onClick={handleRedirect}
                  className="bg-[#020617] text-white px-16 py-6 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center gap-4 mx-auto group shadow-2xl hover:scale-110 transition-transform"
                >
                  Enter Your First Quiz <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
             </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

// Visual Internal Components
function ProgressTracker({ label, val, onClick }: any) {
  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      onClick={onClick}
      className="bg-white border border-slate-100 p-6 rounded-3xl group cursor-pointer hover:border-emerald-500 transition-colors"
    >
      <div className="flex justify-between items-center mb-3">
        <p className="font-bold text-[10px] text-slate-400 group-hover:text-emerald-600 uppercase tracking-widest">{label}</p>
        <CheckCircle2 size={16} className="text-emerald-100 group-hover:text-emerald-500" />
      </div>
      <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }} 
          whileInView={{ width: val.split("[")[1].split("]")[0] }}
          className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]" 
        />
      </div>
    </motion.div>
  );
}

function ArenaCard({ icon, title, difficulty, players, onClick }: any) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="bg-white p-10 rounded-[4rem] border border-slate-100 hover:shadow-2xl transition-all duration-500 group cursor-pointer text-center relative"
    >
       <div className="h-20 w-20 rounded-3xl bg-slate-50 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-white transition-all mx-auto border border-transparent group-hover:border-slate-50 shadow-sm">
{React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: 32 })}
       </div>
       <h4 className="text-2xl font-black italic mb-2 tracking-tighter text-slate-900 leading-none">{title}</h4>
       <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-slate-50">
          <div className="flex items-center justify-between text-[10px] font-black tracking-widest uppercase">
             <span className="text-slate-400">Level:</span>
             <span className="text-emerald-500 italic">{difficulty}</span>
          </div>
          <div className="flex items-center justify-between text-[10px] font-black tracking-widest uppercase">
             <span className="text-slate-400">Competing:</span>
             <span className="text-slate-900">{players} Users</span>
          </div>
       </div>
       <button className="mt-8 text-emerald-600 font-black text-[10px] uppercase tracking-widest group-hover:translate-x-2 transition-all inline-flex items-center gap-2">
         Enter Lab <ArrowRight size={14} />
       </button>
    </motion.div>
  );
}