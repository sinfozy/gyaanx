"use client";

import React, { useState, useRef, useEffect } from "react";
import Script from "next/script"; 
import dynamic from 'next/dynamic';
import Link from "next/link";
import { 
  LayoutGrid, Layers, Calendar, Database, BarChart2, 
  Settings, Bell, FlaskConical, Calculator, FileText, 
  Video, HelpCircle, Camera, X, Check,
  Lock, Zap, Sparkles, ShieldCheck, ArrowRight, Loader2,Ticket
} from "lucide-react";
import AIChatBot from "@/components/AIchatBox";

declare global {
  interface Window {
    Razorpay: any;
    ZoomMtgEmbedded: any;
  }
}

// Dynamic Import of Zoom Component
const ZoomMeeting = dynamic(() => import('@/components/ZoomMeeting'), { 
  ssr: false,
  loading: () => (
    <div className="h-[650px] w-full bg-slate-950 rounded-[2.5rem] flex flex-col items-center justify-center text-white font-bold animate-pulse">
      <div className="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      Initializing Secure Neural Bridge...
    </div>
  )
});

const StudentDashboard = () => {
  // --- AUTH & SUBSCRIPTION STATES ---
  const [hasPaid, setHasPaid] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState("");
const [couponLoading, setCouponLoading] = useState(false);
  // --- ZOOM STATES ---
  const [activeMeeting, setActiveMeeting] = useState<{id: string, pass: string, signature: string, role: number} | null>(null);
  const [isZoomLoading, setIsZoomLoading] = useState(false);

  // --- QUIZ & PERFORMANCE STATES (NEW) ---
  const [quizQuestions, setQuizQuestions] = useState<any[]>([]);
  const [quizLoading, setQuizLoading] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(-1); // -1 = selection screen
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [performanceData, setPerformanceData] = useState<any[]>([]);

  // --- DASHBOARD STATES ---
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [displayName, setDisplayName] = useState("Student");
  const [profileImg, setProfileImg] = useState("https://api.dicebear.com/7.x/avataaars/svg?seed=Felix");
  const [studentProfile, setStudentProfile] = useState({ 
    path: "school", 
    grade: "12th Grade" 
  });

  // --- USE EFFECTS ---
  useEffect(() => {
    const checkAccess = async () => {
      const email = localStorage.getItem("userEmail");
      if (!email) return setHasPaid(false);
      try {
        const res = await fetch(`/api/subscription/status?email=${email}`);
        const data = await res.json();
        setHasPaid(data.isSubscribed);
      } catch (err) {
        setHasPaid(false);
      }
    };
    checkAccess();
  }, []);

  // Fetch Performance History
  useEffect(() => {
    const fetchPerformance = async () => {
      const email = localStorage.getItem("userEmail");
      if (!email) return;
      try {
        const res = await fetch(`/api/performance/history?email=${email}`);
        const data = await res.json();
        setPerformanceData(Array.isArray(data) ? data : []);
     } catch (err) {
  console.error("Performance API Error:", err);
  setPerformanceData([]); // Error aane par empty array set karein taaki app crash na ho
}
    };
    if (activeTab === "performance") fetchPerformance();
  }, [activeTab]);

  // --- QUIZ LOGIC ---
  const startAIQuiz = async (interest: string) => {
    setQuizLoading(true);
    setUserAnswers([]);
    try {
      const res = await fetch("/api/ai/generate-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ interest })
      });
      const data = await res.json();
      setQuizQuestions(data.questions);
      setCurrentQuizIndex(0);
    } catch (err) {
      alert("AI failed to generate quiz. Check your connection.");
    } finally {
      setQuizLoading(false);
    }
  };

  const submitQuiz = async (finalAnswers: string[]) => {
    let score = 0;
    finalAnswers.forEach((ans, idx) => {
      if (ans === quizQuestions[idx].correctAnswer) score++;
    });

    const accuracy = (score / quizQuestions.length) * 100;

    try {
      const res = await fetch("/api/performance/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: localStorage.getItem("userEmail"),
          subject: `AI Quiz: ${quizQuestions[0]?.subject || "General"}`,
          score,
          totalQuestions: quizQuestions.length,
          accuracy: Math.round(accuracy)
        })
      });

      if (res.ok) {
        alert(`Quiz Finished! Final Score: ${score}/20`);
        setActiveTab("performance");
        setCurrentQuizIndex(-1);
      }
    } catch (err) {
      alert("Error saving your performance.");
    }
  };

  // --- ZOOM HANDLER ---
 // --- ZOOM HANDLER ---
  const handleStartMeeting = async (meetingId: string, password: string, role: number) => {
    setIsZoomLoading(true);
    try {
      const res = await fetch("/api/zoom/signature", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ meetingNumber: meetingId, role: role }),
      });
      
      const data = await res.json();
      
      if (data.signature) {
        // Construct the URL for your meeting page
        // Note: You should create a separate page at /zoom-session/page.tsx to handle the SDK
        const queryParams = new URLSearchParams({
          id: meetingId,
          pass: password,
          sig: data.signature,
          name: displayName,
          role: role.toString()
        });

        // Redirect to a new tab
        window.open(`/zoom-session?${queryParams.toString()}`, "_blank");
      }
    } catch (err) {
      console.error(err);
      alert("Connection Failed. Could not generate secure bridge.");
    } finally {
      setIsZoomLoading(false);
    }
  };

  // --- RAZORPAY HANDLER ---
  const handlePayment = async () => {
    setLoading(true);
    const email = localStorage.getItem("userEmail") || "student@gyaanx.eu";
    const name = localStorage.getItem("userName") || "Student";
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: 199 * 100, 
      currency: "INR",
      name: "GyaanX Prime",
      description: "Unlock AI Powered Learning Batch",
      handler: async function (response: any) {
        const res = await fetch("/api/subscription/save", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, paymentId: response.razorpay_payment_id }),
        });
        if (res.ok) { setHasPaid(true); alert("Payment Successful!"); }
      },
      prefill: { name, email },
      theme: { color: "#7c3aed" },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
    setLoading(false);
  };
  const handleCouponRedeem = async () => {
  if (!couponCode) return;
  setCouponLoading(true);
  try {
    const email = localStorage.getItem("userEmail");
    const res = await fetch("/api/coupons/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, code: couponCode.trim().toUpperCase() }),
    });

    if (res.ok) {
      setHasPaid(true); // Dashboard unlock karne ke liye
      alert("Success! Access Granted via Coupon.");
    } else {
      const err = await res.json();
      alert(err.message || "Invalid Code");
    }
  } catch (error) {
    alert("Error validating coupon");
  } finally {
    setCouponLoading(false);
  }
};

  const navItems = [
    { id: "dashboard", name: "Dashboard", icon: <LayoutGrid size={20} /> },
    { id: "batches", name: "My Batches", icon: <Layers size={20} /> },
    { id: "library", name: "Study Library", icon: <Database size={20} /> },
    { id: "performance", name: "Performance", icon: <BarChart2 size={20} /> },
  ];

  if (hasPaid === null) return (
    <div className="h-screen w-full flex items-center justify-center bg-white font-bold italic text-violet-600">
      Syncing with GyaanX Neural Cloud...
    </div>
  );

  if (!hasPaid) return (
  <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6 relative">
    <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    <div className="max-w-2xl w-full bg-white rounded-[3.5rem] shadow-2xl p-10 lg:p-16 text-center animate-in zoom-in duration-300">
       <div className="flex justify-center mb-8">
          <div className="p-5 bg-violet-50 rounded-full"><Sparkles className="w-12 h-12 text-violet-600" /></div>
       </div>
       <h2 className="text-4xl font-black text-slate-950 mb-3 italic tracking-tighter uppercase">Level Up</h2>
       <p className="text-slate-500 mb-10 text-lg leading-relaxed font-medium">Unlock full access to 24/7 AI Tutors, Live Batches, and Premium Quiz Library.</p>
       
       <div className="bg-[#020617] rounded-[2.5rem] p-10 text-white text-center shadow-xl mb-10">
          <span className="bg-violet-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase italic flex items-center gap-2 mx-auto w-fit mb-4"> <Lock size={12} /> Pro Access </span>
          <div className="text-6xl font-black mb-1 italic">₹199</div>
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-tighter">One-time Lifetime Upgrade Fee</p>
       </div>

       {/* Payment Button */}
       <button onClick={handlePayment} disabled={loading || couponLoading} className="w-full bg-violet-600 hover:bg-violet-500 text-white py-5 rounded-3xl font-black text-xl flex items-center justify-center gap-4 transition-all shadow-xl shadow-violet-100 disabled:opacity-50">
          {loading ? "Processing..." : <>Unlock All Features <ArrowRight /></>}
       </button>

       {/* ✅ NEW: COUPON SECTION ADDED HERE */}
       <div className="mt-8 pt-8 border-t border-slate-100">
         <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-4 flex items-center justify-center gap-2 italic">
           <Ticket size={14} className="text-violet-600" /> Have a batch access code?
         </p>
         <div className="flex gap-2 max-w-sm mx-auto">
           <input 
             type="text" 
             placeholder="ENTER CODE"
             value={couponCode}
             onChange={(e) => setCouponCode(e.target.value)}
             className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-sm font-black uppercase outline-none focus:border-violet-600 transition-all placeholder:text-slate-300"
           />
           <button 
             onClick={handleCouponRedeem}
             disabled={couponLoading || loading || !couponCode}
             className="bg-slate-900 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase hover:bg-violet-600 transition-all disabled:opacity-50 active:scale-95"
           >
             {couponLoading ? <Loader2 className="animate-spin" size={16}/> : "Apply"}
           </button>
         </div>
       </div>

    </div>
  </div>
);

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden relative">
      <Script src="https://source.zoom.us/3.11.0/lib/embedded.min.js" strategy="afterInteractive" />

      {/* Sidebar */}
      <aside className="w-[260px] bg-white border-r border-slate-200 p-6 flex flex-col shrink-0">
        <div className="text-2xl font-extrabold text-violet-600 mb-10 tracking-tight italic">GyaanX</div>
        <nav className="flex-grow flex flex-col gap-1">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => { setActiveTab(item.id); setCurrentQuizIndex(-1); }} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${activeTab === item.id ? "bg-violet-50 text-violet-600 shadow-sm" : "text-slate-500 hover:bg-slate-50 hover:text-violet-600"}`}>
              {item.icon} {item.name}
            </button>
          ))}
        </nav>
        <button className="flex items-center gap-3 px-4 py-3 text-slate-500 font-medium hover:text-violet-600 mt-auto border-t pt-4"><Settings size={20} /> Settings</button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow overflow-y-auto p-8 lg:p-12">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight tracking-tighter italic uppercase">Welcome back, {displayName}! 👋</h1>
            <p className="text-slate-500 font-medium">{studentProfile.grade} • AI Pro Access Active</p>
          </div>
          <div className="flex items-center gap-6">
            <Bell size={24} className="text-slate-400 cursor-pointer hover:text-violet-600" />
            <div onClick={() => setIsProfileModalOpen(true)} className="w-12 h-12 rounded-full border-2 border-violet-600 p-0.5 overflow-hidden cursor-pointer hover:scale-110 transition-transform shadow-md">
                <img src={profileImg} alt="avatar" className="rounded-full w-full h-full object-cover" />
            </div>
          </div>
        </header>

        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          
          {/* --- DASHBOARD TAB --- */}
          {activeTab === "dashboard" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 flex flex-col gap-8">
                <div className="bg-violet-600 p-8 rounded-[2rem] text-white flex justify-between items-center shadow-xl shadow-violet-200">
                  <div>
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase italic">Live Soon</span>
                    <h2 className="text-3xl font-bold mt-4 mb-1 italic tracking-tight">Quantum Physics 101</h2>
                    <p className="text-violet-100 opacity-90 text-sm font-medium">Starts in 12m 45s • AI Faculty Ready</p>
                  </div>
                  <button onClick={() => setActiveTab("batches")} className="bg-white text-violet-600 px-8 py-3 rounded-2xl font-bold hover:scale-105 transition-transform shadow-md">Join Now</button>
                </div>
                
                <h2 className="text-xl font-bold text-slate-900 -mb-2 italic uppercase">Subject Mastery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[{ name: "Advanced Physics", icon: <FlaskConical size={32}/> }, { name: "Core Mathematics", icon: <Calculator size={32}/> }].map((subject, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-[2rem] border border-slate-200 hover:border-violet-300 transition-all shadow-sm">
                      <div className="w-full h-32 bg-slate-50 rounded-2xl flex items-center justify-center text-violet-600 mb-4">{subject.icon}</div>
                      <h3 className="font-bold text-lg mb-1">{subject.name}</h3>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mt-4"><div className="h-full bg-violet-600 rounded-full w-[60%]"></div></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* --- MY BATCHES TAB --- */}
          {/* --- MY BATCHES TAB --- */}
{activeTab === "batches" && (
  <div className="space-y-12">
    <div className="max-w-4xl py-6">
      <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 italic tracking-tighter uppercase">
        AI Learning Partner
      </h2>
      <p className="text-lg text-slate-500 max-w-2xl font-medium leading-relaxed">
        Choose whether to host a new session or join an existing batch powered by GyaanX Neural Bridge.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
      {/* Host Card */}
      <div className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
        <h3 className="font-black text-2xl mb-2 text-slate-900 italic tracking-tighter uppercase">Host a Session</h3>
        <p className="text-slate-500 text-sm font-medium mb-8">Start a proctored meeting as a teacher or moderator.</p>

     <Link href="https://www.zoom.com/">
        <button 
          disabled={isZoomLoading} 
          onClick={() => handleStartMeeting("85879857435", "GQZLx0gfS6ImhfxsrSkdwjCL4lAxqx.1", 1)} 
          className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-black transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isZoomLoading ? <Loader2 className="animate-spin" size={18}/> : "Create & Start Meeting"}
        </button>
     </Link>
        
      </div>

      {/* Join Card */}
      <div className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
        <h3 className="font-black text-2xl mb-2 text-violet-600 italic tracking-tighter uppercase">Join as Student</h3>
        <p className="text-slate-500 text-sm font-medium mb-8">Attend a live batch with AI-enabled auto-note taking.</p>
        <button 
          disabled={isZoomLoading} 
          onClick={() => handleStartMeeting("85879857435", "GQZLx0gfS6ImhfxsrSkdwjCL4lAxqx.1", 0)} 
          className="w-full bg-violet-600 text-white py-4 rounded-2xl font-bold hover:bg-violet-700 transition-all shadow-lg shadow-violet-100 flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isZoomLoading ? <Loader2 className="animate-spin" size={18}/> : "Join Live Class"}
        </button>
      </div>
    </div>
  </div>
)}

          {/* --- STUDY LIBRARY TAB (NEW QUIZ SYSTEM) --- */}
          {activeTab === "library" && (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="max-w-4xl">
      <h2 className="text-4xl font-black text-slate-900 italic tracking-tighter uppercase">AI Study Library</h2>
      <p className="text-slate-500 font-medium">Choose a stream to generate a personalized assessment.</p>
    </div>

    {quizLoading ? (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <Loader2 className="w-12 h-12 text-violet-600 animate-spin" />
        <p className="font-bold text-slate-900 italic tracking-tight">Chatbot is crafting your 20 MCQs...</p>
      </div>
    ) : currentQuizIndex === -1 ? (
      /* Selection Screen */
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Science", "Mathematics", "History", "Coding", "General Space"].map((stream) => (
          <div key={stream} onClick={() => startAIQuiz(stream)} className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-violet-400 transition-all group cursor-pointer">
            <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center text-violet-600 mb-6 group-hover:scale-110 transition-transform">
               <Database size={32} />
            </div>
            <h3 className="text-xl font-black text-slate-900 italic uppercase tracking-tighter">{stream}</h3>
            <button className="mt-4 text-violet-600 font-bold flex items-center gap-2">Generate Quiz <ArrowRight size={16}/></button>
          </div>
        ))}
      </div>
    ) : (
      /* QUIZ SCREEN - SAFETY CHECK ADDED HERE */
      quizQuestions && quizQuestions.length > 0 ? (
        <div className="bg-white p-10 rounded-[3rem] border-2 border-violet-100 shadow-2xl max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
             <span className="font-black text-violet-600 italic uppercase">Question {currentQuizIndex + 1} / {quizQuestions.length}</span>
             <div className="h-2 w-48 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-violet-600 transition-all duration-500" style={{width: `${((currentQuizIndex + 1) / quizQuestions.length) * 100}%`}}></div>
             </div>
          </div>
          
          {/* Optional Chaining (?.) handles undefined cases */}
          <h3 className="text-2xl font-bold text-slate-900 mb-8 leading-tight">
            {quizQuestions[currentQuizIndex]?.question || "Loading question text..."}
          </h3>
          
          <div className="grid gap-4">
            {quizQuestions[currentQuizIndex]?.options?.map((opt: string) => (
              <button 
                key={opt}
                onClick={() => {
                  const newAns = [...userAnswers];
                  newAns[currentQuizIndex] = opt;
                  setUserAnswers(newAns);
                  if (currentQuizIndex < quizQuestions.length - 1) setCurrentQuizIndex(prev => prev + 1);
                  else submitQuiz(newAns);
                }}
                className="w-full text-left p-5 rounded-2xl border-2 border-slate-100 hover:border-violet-600 hover:bg-violet-50 transition-all font-semibold"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Fallback UI if something went wrong */
        <div className="text-center p-10 bg-white rounded-[2rem] border border-slate-200">
          <p className="text-slate-500 font-bold italic mb-4">No questions were generated. AI might be busy.</p>
          <button onClick={() => setCurrentQuizIndex(-1)} className="bg-violet-600 text-white px-6 py-2 rounded-xl font-bold">Try Again</button>
        </div>
      )
    )}
  </div>
)}

          {/* --- PERFORMANCE TAB (NEW PROGRESS TRACKING) --- */}
          {activeTab === "performance" && (
            <div className="space-y-10 animate-in fade-in duration-500">
              <h2 className="text-4xl font-black text-slate-900 italic tracking-tighter uppercase">Neural Performance</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Global Progress Bar */}
                <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm flex flex-col justify-center">
                  <h3 className="font-black text-2xl mb-6 italic uppercase tracking-tighter">Overall Mastery</h3>
                  <div className="relative pt-1">
                    <div className="flex mb-4 items-center justify-between">
                      <div><span className="text-xs font-black inline-block py-1 px-3 uppercase rounded-full text-violet-600 bg-violet-100 italic">Academic Standing</span></div>
                      <div className="text-right"><span className="text-2xl font-black text-violet-600 italic">
                        {performanceData.length > 0 ? 
                          Math.round(performanceData.reduce((acc, curr) => acc + curr.accuracy, 0) / performanceData.length) 
                          : 0}%
                      </span></div>
                    </div>
                    <div className="overflow-hidden h-8 mb-4 text-xs flex rounded-3xl bg-slate-100 border border-slate-200 p-1">
                      <div 
                        style={{ width: `${performanceData.length > 0 ? performanceData.reduce((acc, curr) => acc + curr.accuracy, 0) / performanceData.length : 0}%` }} 
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-violet-600 transition-all duration-1000 rounded-2xl"
                      ></div>
                    </div>
                  </div>
                  <p className="text-slate-500 font-medium italic">Your learning curve is calculated based on the last {performanceData.length} AI Assessments.</p>
                </div>

                {/* History List */}
                <div className="space-y-4">
                  <h3 className="font-black text-xl italic uppercase tracking-tighter">Quiz History</h3>
                  <div className="overflow-y-auto max-h-[400px] pr-2 space-y-3 custom-scrollbar">
                    {performanceData.length > 0 ? performanceData.map((item, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-[2rem] border border-slate-100 flex justify-between items-center hover:border-violet-200 transition-all">
                        <div>
                          <p className="font-black text-slate-900 italic uppercase">{item.subject}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{new Date(item.date).toLocaleDateString()}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-black text-2xl text-violet-600 italic">{item.score}/20</p>
                          <p className="text-[10px] font-black uppercase text-slate-400 italic tracking-widest">{item.accuracy}% Accuracy</p>
                        </div>
                      </div>
                    )) : (
                      <div className="p-10 text-center border-2 border-dashed border-slate-200 rounded-[2rem] text-slate-400 font-bold italic uppercase">No assessments taken yet</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
      <AIChatBot/>
    </div>
  );
};

export default StudentDashboard;