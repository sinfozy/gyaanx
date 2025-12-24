"use client";

import React, { useState } from "react";
import { ChevronDown, BrainCircuit, Star, Users, Play, Globe } from "lucide-react";

// --- IMPORT YOUR COMPONENTS ---
import Header from "@/components/header"; 
import Footer from "@/components/footer";

// --- DATA STRUCTURE ---
const VIEW_DATA = {
  "primary": { title: "Class 6th - 8th", desc: "Foundational learning using AI-driven visual storytelling.", tutors: getTutors("school") },
  "secondary": { title: "Class 9th - 10th", desc: "Board-focused preparation for high-scoring results.", tutors: getTutors("school") },
  "senior": { title: "Class 11th - 12th", desc: "Deep conceptual mastery for Higher Secondary boards.", tutors: getTutors("school") },
  "jee": {
    
    title: "IIT-JEE (Mains & Adv)",
    desc: "Elite AI guidance for India's toughest engineering exam. Master Irodov-level Physics and Calculus.",
    tutors: [
      { name: "Dr. Arthur Halliday", title: "Physics Maestro", bio: "PhD from MIT. Expert in Rotational Mechanics. Simplifies complex Irodov problems using AI visual logic.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400", tags: ["JEE Adv", "MIT Alum", "Mechanics"], rating: "5.0/5", students: "42k+" },
      { name: "Prof. Richard Spivak", title: "Calculus Expert", bio: "Renowned for deep conceptual clarity in Integral Calculus. Helping students visualize abstract math functions.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400", tags: ["Calculus", "JEE Mains", "Maths"], rating: "4.9/5", students: "35k+" }
    ]
  },
  "neet": {
  
    title: "NEET (UG) Preparation",
    desc: "Cracking medical entrance with 3D Anatomy visualization and Organic Chemistry mastery.",
    tutors: [
      { name: "Dr. Sophia Van-Dijk", title: "Biology & Anatomy", bio: "MD researcher. Specialized in Human Physiology and Genetics. Uses 3D AI models for high-retention learning.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400", tags: ["Anatomy", "Genetics", "NEET"], rating: "5.0/5", students: "58k+" },
      { name: "Dr. Morison Boyd", title: "Organic Chemistry", bio: "Master of reaction mechanisms. Focuses on making organic chemistry intuitive rather than rote-memory based.", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400", tags: ["Chemistry", "NEET", "Organic"], rating: "4.8/5", students: "29k+" }
    ]
  },
  "cat": {
   
    title: "CAT (IIMs) & MBA",
    desc: "Mastering VARC, DILR, and Quant with strategy-driven AI training for the 99th percentile.",
    tutors: [
      { name: "Ms. Julian Beaufort", title: "VARC Specialist", bio: "Oxford Literature Alum. Expert in Critical Reasoning and Reading Comprehension strategies for CAT.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400", tags: ["VARC", "Strategy", "RC"], rating: "4.9/5", students: "22k+" },
      { name: "Marcus Thorne", title: "DILR & Logic", bio: "Former Wall Street Analyst. Expert in Data Interpretation and Logical Puzzles. Teaches time-saving AI shortcuts.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400", tags: ["DILR", "Logic", "Quant"], rating: "5.0/5", students: "40k+" }
    ]
  },
  "upsc": { title: "UPSC (IAS/IPS/IFS)", desc: "Elite AI guidance for Prelims & Mains. Mastery in Ethics and Polity.", tutors: getTutors("govt") },
  "ssc": { title: "SSC CGL / CHSL / MTS", desc: "Speed-focused AI training for quantitative aptitude and reasoning.", tutors: getTutors("govt") },
  "railway": { title: "RRB NTPC / Group D / ALP", desc: "Dedicated faculty for Indian Railway exams. Specializing in General Science.", tutors: getTutors("govt") },
  "state-pcs": { title: "BPSC / UPPSC / MPPSC", desc: "Localized AI faculty specializing in State History and Administrative exams.", tutors: getTutors("govt") },
  "police": { title: "Police Constable / SI", desc: "Training for state police exams. Focus on Mental Ability and Law.", tutors: getTutors("govt") }
};

function getTutors(type: string) {
  return [
    { name: "Dr. Elena Volkova", title: "Senior Expert", bio: "Board and Competitive specialist. Breaking down complex concepts for 100/100 scores.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400", tags: ["Expert", "NCERT"], rating: "5.0/5", students: "12k+" },
    { name: "Lucas Moretti", title: "Specialist", bio: "Master of visual learning. Simplifying technical concepts for high-speed retention.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400", tags: ["Science", "Logic"], rating: "4.9/5", students: "8.5k+" }
  ];
}

export default function Dashboard() {
  const [activeView, setActiveView] = useState("secondary");
  const [openDropdown, setOpenDropdown] = useState<string | null>("school");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const data = VIEW_DATA[activeView as keyof typeof VIEW_DATA] || VIEW_DATA["secondary"];

  const handleUpdateView = (key: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveView(key);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="flex min-h-screen bg-[#f8fafc] text-slate-900">
      
      {/* Sidebar - Fixed Left Column */}
      <aside className="w-80 bg-white border-r border-slate-200 p-6 sticky top-0 h-screen overflow-y-auto shrink-0 z-50">
        <div className="flex items-center gap-3 mb-10 pl-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <BrainCircuit className="h-5 w-5 text-white" />
          </div>
          <span className="text-2xl font-black text-slate-900 tracking-tight">Gyaan<span className="text-indigo-600">X</span></span>
        </div>

        <Dropdown title="Professional Entrance" isOpen={openDropdown === "pro"} onToggle={() => setOpenDropdown(openDropdown === "pro" ? null : "pro")}>
          <SidebarLink active={activeView === "jee"} label="JEE Mains / Adv" badge="IIT" onClick={() => handleUpdateView("jee")} />
          <SidebarLink active={activeView === "neet"} label="NEET Prep" badge="Med" onClick={() => handleUpdateView("neet")} />
          <SidebarLink active={activeView === "cat"} label="CAT (MBA)" badge="99%" onClick={() => handleUpdateView("cat")} />
        </Dropdown>

        <Dropdown title="Govt Job Exams" isOpen={openDropdown === "govt"} onToggle={() => setOpenDropdown(openDropdown === "govt" ? null : "govt")}>
          <SidebarLink active={activeView === "upsc"} label="UPSC (IAS/IPS)" badge="Elite" onClick={() => handleUpdateView("upsc")} />
          <SidebarLink active={activeView === "ssc"} label="SSC CGL/CHSL" onClick={() => handleUpdateView("ssc")} />
          <SidebarLink active={activeView === "railway"} label="Railway (RRB)" onClick={() => handleUpdateView("railway")} />
          <SidebarLink active={activeView === "state-pcs"} label="State PCS" onClick={() => handleUpdateView("state-pcs")} />
          <SidebarLink active={activeView === "police"} label="Police Constable" onClick={() => handleUpdateView("police")} />
        </Dropdown>

        <Dropdown title="School Education" isOpen={openDropdown === "school"} onToggle={() => setOpenDropdown(openDropdown === "school" ? null : "school")}>
          <SidebarLink active={activeView === "primary"} label="Class 6th - 8th" onClick={() => handleUpdateView("primary")} />
          <SidebarLink active={activeView === "secondary"} label="Class 9th - 10th" onClick={() => handleUpdateView("secondary")} />
          <SidebarLink active={activeView === "senior"} label="Class 11th - 12th" onClick={() => handleUpdateView("senior")} />
        </Dropdown>
      </aside>

      {/* Right Column Wrapper */}
      <div className="flex flex-col flex-grow min-w-0">
        
        {/* Header - Stays at the top of the right column */}
        <div className="sticky top-0 z-[40] bg-white border-b border-slate-200">
           <Header />
        </div>

        {/* Main Content Area - Scrollable */}
        <main className="p-8 lg:p-12 relative flex-grow bg-[#f8fafc]">
          <header className={`mb-12 transition-all duration-300 ${isTransitioning ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-widest mb-3">
              <Globe className="w-4 h-4" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight leading-tight">
              {data.title}
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl leading-relaxed font-medium">
              {data.desc}
            </p>
          </header>

          <div className={`grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8 transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
            {data.tutors.map((tutor) => (
              <TutorCard key={tutor.name + activeView} tutor={tutor} />
            ))}
          </div>
        </main>

        {/* Footer */}
        <Footer />
        
      </div>
    </div>
  );
}

// --- SUB-COMPONENTS (Light Theme Styles) ---

function Dropdown({ title, isOpen, onToggle, children }: any) {
  return (
    <div className="mb-4">
      <button onClick={onToggle} className={`w-full p-3 flex justify-between items-center rounded-xl transition-all ${isOpen ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500 hover:bg-slate-50'}`}>
        <span className="text-[11px] font-bold uppercase tracking-widest">{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96 pt-2" : "max-h-0"}`}>
        {children}
      </div>
    </div>
  );
}

function SidebarLink({ label, active, badge, onClick }: any) {
  return (
    <button onClick={onClick} className={`w-full flex items-center justify-between px-4 py-2.5 mb-1 rounded-xl transition-all ${active ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-100' : 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50'}`}>
      <span className="text-sm">{label}</span>
      {badge && <span className={`text-[9px] px-2 py-0.5 rounded font-black ${active ? 'bg-white/20 text-white' : 'bg-indigo-100 text-indigo-600'}`}>{badge}</span>}
    </button>
  );
}

function TutorCard({ tutor }: any) {
  return (
    <div className="group bg-white border border-slate-200 rounded-[32px] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-indigo-200">
      <div className="flex items-center gap-5 mb-6">
        <div className="w-20 h-20 relative shrink-0">
          <img src={tutor.img} alt={tutor.name} className="w-full h-full object-cover rounded-2xl border border-slate-100 grayscale group-hover:grayscale-0 transition-all duration-500" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-sm" />
        </div>
        <div className="min-w-0">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">{tutor.name}</h3>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">{tutor.title}</p>
        </div>
      </div>
      <p className="text-slate-500 text-sm leading-relaxed mb-6 h-[4.5em] overflow-hidden line-clamp-3 font-medium">{tutor.bio}</p>
      <div className="flex flex-wrap gap-2 mb-8">
        {tutor.tags.map((tag: string) => (
          <span key={tag} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] text-slate-600 font-bold group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors">{tag}</span>
        ))}
      </div>
      <div className="flex justify-between items-center pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2"><Star className="w-3 h-3 text-yellow-500 fill-yellow-500" /><b className="text-sm text-slate-700">{tutor.rating}</b></div>
        <div className="flex items-center gap-2"><Users className="w-3 h-3 text-indigo-500" /><b className="text-sm text-slate-700">{tutor.students}</b></div>
      </div>
      <button className="w-full mt-8 py-4 bg-indigo-600 text-white rounded-2xl font-black text-sm hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-100 transition-all flex items-center justify-center gap-2 shadow-sm">
        <Play className="w-4 h-4 fill-white" /> Start Session
      </button>
    </div>
  );
}