"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  GraduationCap, 
  Library, 
  ArrowRight, 
  ChevronRight, 
  Train, 
  Scale, 
  Briefcase, 
  Sparkles,
  BookCheck,
  Globe2,
  FileText
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

// --- DATA STRUCTURES ---

const CLASSES = [
  { id: 6, name: "Class 6", topics: ["Basic Arithmetic", "Our Surroundings", "Early Empires"] },
  { id: 7, name: "Class 7", topics: ["Algebra Basics", "Medieval India", "Environment"] },
  { id: 8, name: "Class 8", topics: ["Geometry", "Modern History", "Resource Management"] },
  { id: 9, name: "Class 9", topics: ["Polynomials", "Atoms & Molecules", "World History"] },
  { id: 10, name: "Class 10", topics: ["Trigonometry", "Board Chemistry", "Indian Polity"] },
  { id: 11, name: "Class 11", subjects: ["Science", "Commerce", "Arts"], detail: "Focus on Foundations for Entrance Exams" },
  { id: 12, name: "Class 12", subjects: ["PCM/B", "Acc & Business", "Humanities"], detail: "Complete Board Preparation + JEE/NEET Prep" },
];

const COMPETITIVE = [
  {
    name: "SSC Exams",
    code: "CGL/CHSL/MTS",
    icon: <Briefcase className="text-blue-500" />,
    color: "bg-blue-50 border-blue-100 text-blue-700",
    features: ["Reasoning & Aptitude", "General English", "Tier 1 & 2 Modules"]
  },
  {
    name: "Indian Railways",
    code: "NTPC / RRB Group D",
    icon: <Train className="text-emerald-500" />,
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
    features: ["Railway Specific GK", "Static Science", "Speed Math Techniques"]
  },
  {
    name: "UPSC & State PSC",
    code: "Civil Services Prep",
    icon: <Scale className="text-purple-500" />,
    color: "bg-purple-50 border-purple-100 text-purple-700",
    features: ["Ancient to Modern History", "Economic Surveys", "Ethics & GS Prep"]
  },
  {
    name: "Banking",
    code: "IBPS PO / SBI Clerk",
    icon: <Globe2 className="text-amber-500" />,
    color: "bg-amber-50 border-amber-100 text-amber-700",
    features: ["Banking Awareness", "Complex Logic Gates", "Vocabulary Builder"]
  }
];

export default function CoursesPage() {
  const containerVars = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  } as const;

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100">
      <Header />

      <main className="pt-40 pb-20 px-[6%]">
        
        {/* --- HERO SECTION --- */}
        <section className="max-w-7xl mx-auto mb-24 text-center">
          <motion.div {...fadeIn}>
             <span className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-6 py-2 rounded-full text-indigo-600 text-xs font-black tracking-widest uppercase mb-8">
               <BookOpen className="w-4 h-4" /> Comprehensive Academic Map
             </span>
             <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
                Explore Our <br /> <span className="italic font-serif bg-gradient-to-r from-indigo-600 via-slate-800 to-indigo-400 bg-clip-text text-transparent">Pathways to Success</span>
             </h1>
             <p className="max-w-2xl mx-auto text-xl text-slate-600 font-medium">
                From foundation building in 6th grade to clearing prestigious national exams, GyaanX provides syllabus-accurate content tailored for you.
             </p>
          </motion.div>
        </section>

        {/* --- SCHOOL CURRICULUM SECTION --- */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="flex items-end justify-between mb-12 border-b border-slate-100 pb-8">
            <div className="space-y-2">
                <h2 className="text-4xl font-black tracking-tight flex items-center gap-3">
                   School Curriculum <GraduationCap className="text-indigo-600" />
                </h2>
                <p className="text-slate-500 font-medium">Standard Class 6th to 12th Foundations (All Boards)</p>
            </div>
          </div>

          <motion.div 
            variants={containerVars} 
            initial="initial" 
            whileInView="animate" 
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {CLASSES.map((cls) => (
              <ClassCard key={cls.id} cls={cls} />
            ))}
          </motion.div>
        </section>

        {/* --- COMPETITIVE EXAMS SECTION --- */}
        <section className="max-w-7xl mx-auto py-24 px-12 bg-slate-50 rounded-[50px] border border-slate-200">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tighter mb-4 flex items-center justify-center gap-3">
               Competitive Careers <Sparkles className="text-amber-500" />
            </h2>
            <p className="text-slate-600 font-medium max-w-xl mx-auto">Get ready for Indian Govt Exams with the specialized modules and AI strategy desks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {COMPETITIVE.map((exam, i) => (
              <ExamCard key={i} exam={exam} />
            ))}
          </div>

          {/* UPSC PROMO BAR */}
          <div className="mt-12 bg-white border border-slate-200 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-xl transition-all group">
            <div className="flex items-center gap-6 text-center md:text-left">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center font-black italic shadow-inner">IAS</div>
              <div>
                <h4 className="font-black text-xl text-slate-900 group-hover:text-indigo-600 transition-colors">Exclusive UPSC Mentorship</h4>
                <p className="text-sm text-slate-500 font-bold tracking-tight">Focusing on CSAT, History, Geography, and Daily Analysis</p>
              </div>
            </div>
            <Link href="#" className="bg-indigo-600 text-white font-black text-xs tracking-widest uppercase px-10 py-5 rounded-2xl flex items-center gap-2 hover:bg-slate-900 transition-all active:scale-95 shadow-xl shadow-indigo-100 group-hover:shadow-indigo-200">
               Enroll In UPSC Batch <ArrowRight size={16}/>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

// --- SUB-COMPONENTS ---

const ClassCard = ({ cls }: { cls: any }) => (
  <motion.div
    variants={{ initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 } }}
    whileHover={{ y: -8 }}
    className="group bg-white border border-slate-200 p-8 rounded-[35px] transition-all hover:border-indigo-400/50 hover:shadow-[0_20px_40px_rgba(79,70,229,0.06)] h-full flex flex-col justify-between"
  >
    <div>
       <div className="flex justify-between items-start mb-6">
          <span className="w-12 h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center text-xs font-black italic border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-all group-hover:scale-110 shadow-sm">
             0{cls.id > 9 ? cls.id : cls.id}
          </span>
          <FileText size={18} className="text-slate-300 group-hover:text-indigo-200 transition-colors" />
       </div>
       <h3 className="text-2xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors mb-2 tracking-tight">{cls.name}</h3>
       <div className="space-y-1.5 ">
          {(cls.topics || cls.subjects).map((item: string) => (
             <div key={item} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500  border-slate-50 pb-1.5 last:border-0">
                <ChevronRight size={10} className="text-indigo-300" /> {item}
             </div>
          ))}
       </div>
    </div>
    
    <Link href="#" className="border-dashed text-xs font-black uppercase tracking-[2px] flex items-center gap-2 group-hover:gap-4 transition-all text-slate-400 hover:text-indigo-600 pt-6 mt-4 border-t ">
       View Syllabus <ArrowRight size={14} />
    </Link>
  </motion.div>
);

const ExamCard = ({ exam }: { exam: any }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.01 }}
    className="bg-white p-10 rounded-[40px] border border-slate-200 hover:border-indigo-500/20 transition-all flex flex-col sm:flex-row gap-8 items-start group relative overflow-hidden shadow-sm"
  >
    {/* Inner decorative light glow */}
    <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[40px] opacity-10 ${exam.color}`} />

    <div className={`p-5 rounded-3xl ${exam.color} shadow-sm group-hover:scale-110 transition-transform shrink-0`}>
      {React.cloneElement(exam.icon, { size: 30 })}
    </div>
    
    <div className="flex-grow">
       <div className="mb-6">
          <h3 className="text-2xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{exam.name}</h3>
          <p className="text-[10px] font-black uppercase tracking-[4px] text-slate-400">{exam.code}</p>
       </div>
       
       <div className="grid grid-cols-1 sm:grid-cols-1 gap-3 mb-10">
          {exam.features.map((feat: string) => (
             <div key={feat} className="flex items-center gap-3 text-xs font-bold text-slate-600">
                <div className="p-1 rounded-full bg-slate-50 border border-slate-100">
                    <BookCheck size={14} className="text-indigo-400" />
                </div>
                {feat}
             </div>
          ))}
       </div>

       <button className="w-fit text-[11px] font-black uppercase tracking-widest text-indigo-600 border-b-2 border-transparent hover:border-indigo-600 transition-all pb-1">
          Explore Coaching Schedule &rsaquo;
       </button>
    </div>
  </motion.div>
);