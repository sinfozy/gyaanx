"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, 
  Target, 
  Flame, 
  Zap, 
  BrainCircuit, 
  TrendingUp, 
  Clock, 
  Activity,
  Award,
  BookOpen,
  Calendar,
  ChevronRight,
  User,
  LayoutDashboard,
  Timer,
  Settings,
  Bell
} from "lucide-react";

// Standard Animation with TypeScript fix
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" }
} as const;

export default function ProgressApp() {
  const router = useRouter();
  const handleRedirect = () => router.push("/auth");

  return (
    <div className="bg-[#f0f2f5] min-h-screen flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      <Header />
      
      <main className="flex-grow pt-28 pb-10">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-10 h-full">
          
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* LEFT SIDEBAR: PROFILE SUMMARY */}
            <aside className="lg:w-80 flex flex-col gap-6">
              <motion.div 
                whileHover={{ scale: 1.01 }}
                onClick={handleRedirect}
                className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-200 cursor-pointer group"
              >
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 bg-indigo-500 rounded-full animate-pulse opacity-20 scale-110"></div>
                  <div className="relative h-full w-full bg-slate-100 rounded-full border-4 border-white overflow-hidden flex items-center justify-center">
                    <User size={48} className="text-slate-300" />
                  </div>
                </div>
                <div className="text-center mb-8">
                  <h2 className="text-xl font-black italic tracking-tighter text-slate-900 leading-none">Aspirant_2026</h2>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500 mt-2">Level 42 · Master Elite</p>
                </div>
                <div className="space-y-3">
                  <SidebarStat label="Global Rank" value="#412" icon={<TrendingUp size={14}/>} />
                  <SidebarStat label="Exp Points" value="12,400" icon={<Award size={14}/>} />
                </div>
              </motion.div>

              <div 
                onClick={handleRedirect}
                className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-200 cursor-pointer group"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Activity Streak</h3>
                  <Flame className="text-orange-500 fill-orange-500 animate-bounce" size={16}/>
                </div>
                <div className="flex justify-between gap-1 mb-4">
                  {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                    <div key={d} className={`h-8 flex-1 rounded-lg ${d < 6 ? 'bg-indigo-600' : 'bg-slate-100'}`} />
                  ))}
                </div>
                <p className="text-[10px] font-bold text-center text-slate-500 uppercase tracking-widest">Current: 5 Day Streak</p>
              </div>
            </aside>

            {/* MAIN CONTENT AREA: DASHBOARD */}
            <div className="flex-1 space-y-8">
              
              {/* HEADER ACTION BAR */}
              <div className="bg-white rounded-[2rem] p-4 px-8 shadow-sm border border-slate-200 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <h1 className="text-xl font-black italic tracking-tight text-slate-900">Analytics Board</h1>
                  <nav className="hidden md:flex gap-4">
                    {['Overview', 'Accuracy', 'Time Lab', 'Reports'].map((t) => (
                      <span key={t} onClick={handleRedirect} className="text-[10px] font-black uppercase tracking-widest text-slate-400 cursor-pointer hover:text-indigo-600 transition-colors">
                        {t}
                      </span>
                    ))}
                  </nav>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={handleRedirect} className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-indigo-600 transition-all"><Bell size={18}/></button>
                  <button onClick={handleRedirect} className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-indigo-600 transition-all"><Settings size={18}/></button>
                </div>
              </div>

              {/* STAT GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 <AppMetricCard icon={<Target size={20}/>} color="indigo" label="Accuracy" val="84%" trend="+2.4%" onClick={handleRedirect} />
                 <AppMetricCard icon={<Timer size={20}/>} color="emerald" label="Avg Speed" val="42s" trend="-5.2s" onClick={handleRedirect} />
                 <AppMetricCard icon={<Activity size={20}/>} color="rose" label="Consistency" val="96" trend="+12 pts" onClick={handleRedirect} />
                 <AppMetricCard icon={<BrainCircuit size={20}/>} color="amber" label="Neural IQ" val="142" trend="Genius" onClick={handleRedirect} />
              </div>

              {/* LARGE CHART & LIVE ACTIONS */}
              <div className="grid lg:grid-cols-12 gap-8">
                
                {/* INTERACTIVE TRACKING CHART */}
                <motion.div 
                  {...fadeInUp}
                  onClick={handleRedirect}
                  className="lg:col-span-8 bg-white rounded-[3.5rem] p-10 border border-slate-200 shadow-sm relative overflow-hidden group cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-10">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Score Probability Projection</p>
                      <h3 className="text-2xl font-black italic tracking-tighter text-slate-900 mt-2">Mock Test Prediction Index</h3>
                    </div>
                    <div className="bg-indigo-50 px-4 py-2 rounded-xl text-indigo-600 font-bold text-xs uppercase tracking-tighter">Live Updates</div>
                  </div>

                  {/* VISUAL MOCK GRAPH */}
                  <div className="h-64 flex items-end justify-between gap-4 mb-10">
                    {[35, 60, 45, 85, 55, 90, 75, 95].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: i * 0.05 }}
                        className={`w-full rounded-t-xl group-hover:bg-indigo-600 transition-all duration-500 shadow-indigo-100 ${i === 7 ? 'bg-indigo-600' : 'bg-slate-100'}`}
                      />
                    ))}
                  </div>
                  <div className="grid grid-cols-4 pt-8 border-t border-slate-100">
                    <MiniInsight label="Focus Shift" val="+24%" color="indigo" />
                    <MiniInsight label="Logic Depth" val="8.2" color="indigo" />
                    <MiniInsight label="Rote Mastery" val="High" color="emerald" />
                    <MiniInsight label="Target Met" val="92%" color="indigo" />
                  </div>
                </motion.div>

                {/* AI ACTION LIST */}
                <motion.div 
                  {...fadeInUp}
                  className="lg:col-span-4 bg-slate-900 rounded-[3.5rem] p-10 text-white flex flex-col justify-between"
                >
                  <div className="mb-8">
                    <Zap className="text-amber-400 mb-6" size={32} />
                    <h4 className="text-xl font-black italic tracking-tight mb-2">Neural Focus Recommendations.</h4>
                    <p className="text-slate-500 text-xs font-bold leading-relaxed italic">Your accuracy in Calculus (Class 12) dipped by 5%. Focus on differentiation logic for 20 mins tonight.</p>
                  </div>
                  
                  <div className="space-y-4">
                     <ActionItem icon={<PlayCircle />} label="Start Remedial Logic" onClick={handleRedirect} color="indigo" />
                     <ActionItem icon={<BookOpen size={16}/>} label="Revise Trigonometry" onClick={handleRedirect} color="indigo" />
                     <ActionItem icon={<Target size={16}/>} label="Practice Mini Quiz" onClick={handleRedirect} color="amber" />
                  </div>
                </motion.div>
              </div>

              {/* SUBJECT WISE MASTER LIST */}
              <div className="bg-white rounded-[3.5rem] p-10 border border-slate-200 shadow-sm">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-8">Curriculum Proficiency Mapping</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                   <SubjectRing label="Math & Quantitative" percent={82} onClick={handleRedirect} />
                   <SubjectRing label="Visual Reasoning" percent={94} onClick={handleRedirect} />
                   <SubjectRing label="General Intelligence" percent={68} onClick={handleRedirect} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Sidebar Small Utility
function SidebarStat({label, value, icon}: any) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-slate-50 group-hover:border-slate-100 transition-all">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-slate-50 rounded-lg text-slate-400">{icon}</div>
        <p className="text-[10px] font-black uppercase text-slate-400">{label}</p>
      </div>
      <p className="text-sm font-black italic tracking-tighter text-slate-900">{value}</p>
    </div>
  )
}

// Mini insight within chart
function MiniInsight({label, val, color}: any) {
  return (
    <div className="text-center border-r last:border-r-0 border-slate-100">
      <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">{label}</p>
      <p className="font-black italic text-sm mt-1 text-slate-900">{val}</p>
    </div>
  )
}

// Primary Data Metric Cards
function AppMetricCard({ icon, label, val, trend, onClick, color }: any) {
  const colors: any = {
    indigo: "text-indigo-600 bg-indigo-50",
    emerald: "text-emerald-600 bg-emerald-50",
    rose: "text-rose-600 bg-rose-50",
    amber: "text-amber-600 bg-amber-50"
  }
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm cursor-pointer group flex flex-col gap-6"
    >
      <div className={`h-12 w-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500 ${colors[color]}`}>
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
        <div className="flex items-end gap-3">
          <span className="text-4xl font-black italic tracking-tighter text-slate-900 leading-none">{val}</span>
          <span className={`text-[9px] font-black mb-1 p-1 px-2 rounded-lg bg-emerald-50 text-emerald-600`}>{trend}</span>
        </div>
      </div>
    </motion.div>
  )
}

// Play circle svg icon logic
function PlayCircle() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg>
}

// Recommendation Action Items
function ActionItem({ icon, label, onClick, color }: any) {
  return (
    <button 
      onClick={onClick}
      className={`w-full p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 group/item hover:bg-white hover:text-slate-900 transition-all`}
    >
       <div className={`text-indigo-400 group-hover/item:text-indigo-600 transition-colors`}>{icon}</div>
       <span className="text-xs font-black italic tracking-tight">{label}</span>
       <ChevronRight size={14} className="ml-auto opacity-0 group-hover/item:opacity-100 transition-all translate-x-[-4px] group-hover/item:translate-x-0" />
    </button>
  )
}

// Profiency Circle
function SubjectRing({label, percent, onClick}: any) {
  return (
    <div onClick={onClick} className="flex items-center gap-6 cursor-pointer group p-2">
      <div className="h-16 w-16 relative flex items-center justify-center">
         <svg className="w-full h-full -rotate-90">
            <circle cx="32" cy="32" r="28" fill="none" stroke="#f1f5f9" strokeWidth="8" />
            <motion.circle 
              cx="32" cy="32" r="28" fill="none" stroke="#4f46e5" strokeWidth="8" 
              strokeDasharray="176" 
              initial={{ strokeDashoffset: 176 }} 
              whileInView={{ strokeDashoffset: 176 - (176 * percent) / 100 }}
              strokeLinecap="round"
            />
         </svg>
         <span className="absolute text-[10px] font-black">{percent}%</span>
      </div>
      <div>
         <h5 className="text-sm font-black italic text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">{label}</h5>
         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Classroom Status</p>
      </div>
    </div>
  )
}