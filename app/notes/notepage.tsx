"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { FileText, Download, Search, LayoutGrid, List, Layers, ShieldCheck } from "lucide-react";

export default function NotesAndPDFs() {
  const subjects = ["Math", "Physics", "Chemistry", "Biology", "Accounts", "Logic"];

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-6">
          
          <div className="bg-indigo-50 border-2 border-indigo-100 p-10 lg:p-20 rounded-[4rem] mb-16 relative overflow-hidden flex items-center justify-between">
             <div className="max-w-2xl relative z-10">
                <h1 className="text-6xl font-black italic text-slate-950 mb-6 tracking-tighter leading-none">The Prime <br/>Library.</h1>
                <p className="text-slate-500 text-lg mb-8 font-medium leading-relaxed max-w-lg italic">Expert notes verified by topper students and AI-generated rapid revision maps. Available in PDF format for offline access.</p>
                
                {/* Search in notes */}
                <div className="relative group w-full">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-indigo-400" />
                    <input type="text" placeholder="Search Chapter (eg. Thermodynamics)" className="w-full bg-white border border-indigo-100 rounded-3xl py-5 pl-16 pr-6 shadow-sm focus:outline-indigo-500 transition-all font-bold italic" />
                </div>
             </div>
             <FileText size={300} className="absolute right-0 bottom-[-10%] opacity-10 text-indigo-600" />
          </div>

          <div className="flex flex-col md:flex-row gap-16">
              
              {/* FILTER PANEL */}
              <div className="w-full md:w-1/4">
                 <h4 className="text-xs font-black uppercase text-indigo-500 mb-10 tracking-[0.5em] italic flex items-center gap-2"><Layers size={14}/> Index List</h4>
                 <div className="space-y-3">
                    {subjects.map(s => (
                        <button key={s} className="w-full text-left p-4 rounded-2xl hover:bg-slate-50 transition-all font-black text-sm uppercase italic border border-transparent hover:border-slate-200 text-slate-400 hover:text-slate-800 flex justify-between group">
                            {s} <div className="h-2 w-2 bg-indigo-500 rounded-full scale-0 group-hover:scale-100 transition-all"></div>
                        </button>
                    ))}
                 </div>
              </div>

              {/* NOTES GRID */}
              <div className="flex-grow">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <ResourceTile title="Class 12: Atoms Formulas" size="2.4 MB" date="Dec 24, 2025" premium />
                    <ResourceTile title="JEE 10-Year Physics PYQs" size="18.1 MB" date="Nov 30, 2025" premium />
                    <ResourceTile title="Accounting: Flow Chart" size="1.2 MB" date="Dec 20, 2025" />
                    <ResourceTile title="NEET Zoology Flashcards" size="5.0 MB" date="Dec 22, 2025" premium />
                    <ResourceTile title="Grammar Hacks Vol-01" size="800 KB" date="Dec 01, 2025" />
                    <ResourceTile title="Algebra Shortcut Cards" size="4.3 MB" date="Nov 25, 2025" premium />
                 </div>
              </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ResourceTile({ title, size, date, premium }: any) {
    return (
        <div className="p-8 border-2 border-slate-50 bg-[#fdfdfd] rounded-[3rem] hover:bg-white hover:border-indigo-600 hover:shadow-2xl hover:shadow-indigo-50 transition-all duration-500 group">
           <div className="flex justify-between items-start mb-10">
              <div className="h-12 w-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors duration-500">
                <FileText />
              </div>
              {premium && <span className="bg-indigo-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">Prime Access</span>}
           </div>
           
           <h4 className="text-xl font-black text-slate-900 italic tracking-tighter mb-2 group-hover:text-indigo-600">{title}</h4>
           <div className="flex gap-4 text-slate-400 font-bold text-[10px] uppercase tracking-wider border-b border-slate-50 pb-8 mb-8">
              <span>PDF • {size}</span>
              <span>Updated: {date}</span>
           </div>

           <button className="w-full py-4 bg-slate-950 text-white rounded-[1.8rem] font-black italic tracking-tighter hover:scale-95 transition-all flex items-center justify-center gap-4">
              Download File <Download size={18} />
           </button>
        </div>
    );
}