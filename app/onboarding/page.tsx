"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, Trophy, CheckCircle2 } from "lucide-react";

export default function Onboarding() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState({ path: "", grade: "" });

  const finish = async (grade: string) => {
    const email = localStorage.getItem("userEmail");
    const finalData = { ...selection, grade };

    // SAVE CHOICE TO MONGO
    await fetch("/api/user/complete-onboarding", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, ...finalData }),
    });

    localStorage.setItem(`gyaanx_onboarding_${email}`, "done");
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 font-sans">
      <div className="bg-[#0f172a] border border-white/5 w-full max-w-2xl rounded-[3rem] p-12 text-center shadow-2xl">
        {step === 1 ? (
          <div className="animate-in fade-in zoom-in duration-300">
            <h2 className="text-4xl font-black text-white mb-2 italic">Your Goal?</h2>
            <p className="text-slate-500 mb-12 font-medium">Select your educational focus at GyaanX</p>
            <div className="grid grid-cols-2 gap-6">
              <button onClick={() => { setSelection({...selection, path:'school'}); setStep(2); }} className="flex flex-col items-center gap-5 p-10 border-2 border-slate-800 rounded-3xl hover:border-indigo-600 transition-all bg-[#1e293b]/40">
                 <BookOpen size={50} className="text-indigo-500" />
                 <span className="font-bold text-white text-xl">School Boards</span>
              </button>
              <button onClick={() => { setSelection({...selection, path:'comp'}); setStep(2); }} className="flex flex-col items-center gap-5 p-10 border-2 border-slate-800 rounded-3xl hover:border-indigo-600 transition-all bg-[#1e293b]/40">
                 <Trophy size={50} className="text-indigo-500" />
                 <span className="font-bold text-white text-xl">Competitive</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="animate-in slide-in-from-bottom-5 duration-500">
            <h2 className="text-3xl font-black text-white mb-10 italic">
               {selection.path === 'school' ? 'Choose Your Grade' : 'Choose Target Exam'}
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {(selection.path === 'school' 
                ? ['9th Grade', '10th Grade', '11th Grade', '12th Grade']
                : ['JEE Mains', 'NEET', 'UPSC', 'SSC CGL']
              ).map(item => (
                <button key={item} onClick={() => finish(item)} className="p-4 border border-slate-800 rounded-2xl text-slate-300 font-bold hover:bg-indigo-600 hover:text-white transition-all">{item}</button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}