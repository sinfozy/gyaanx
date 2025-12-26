"use client";

import React, { useState, useRef, useEffect } from "react";
import Script from "next/script"; 
import dynamic from 'next/dynamic';

import { 
  LayoutGrid, Layers, Calendar, Database, BarChart2, 
  Settings, Bell, FlaskConical, Calculator, FileText, 
  Video, HelpCircle, Camera, X, Check,
  Lock, Zap, Sparkles, ShieldCheck, ArrowRight
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
  
  // --- ZOOM STATES (NEW UPDATES) ---
  const [activeMeeting, setActiveMeeting] = useState<{id: string, pass: string, signature: string, role: number} | null>(null);
  const [isZoomLoading, setIsZoomLoading] = useState(false);

  // --- DASHBOARD STATES ---
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- PROFILE DATA ---
  const [displayName, setDisplayName] = useState("Student");
  const [profileImg, setProfileImg] = useState("https://api.dicebear.com/7.x/avataaars/svg?seed=Felix");
  const [studentProfile, setStudentProfile] = useState({ 
    path: "school", 
    grade: "12th Grade" 
  });

  // Check Subscription Status on Load
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

  // --- ZOOM JOIN/HOST HANDLER (NEW UPDATES) ---
  const handleStartMeeting = async (meetingId: string, password: string, role: number) => {
    setIsZoomLoading(true);
    try {
      // Fetching signature with role (1 for Host, 0 for Attendee)
      const res = await fetch("/api/zoom/signature", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ meetingNumber: meetingId, role: role }),
      });
      const data = await res.json();
      
      if (data.signature) {
        setActiveMeeting({ id: meetingId, pass: password, signature: data.signature, role: role });
      } else {
        alert("Signature Error: Check Backend Configuration.");
      }
    } catch (err) {
      alert("Connection to GyaanX Bridge Failed.");
    } finally {
      setIsZoomLoading(false);
    }
  };

  // --- RAZORPAY HANDLER ---
  const handlePayment = async () => {
    setLoading(true);
    const email = localStorage.getItem("userEmail") || "student@gyaanx.ai";
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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImg(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const navItems = [
    { id: "dashboard", name: "Dashboard", icon: <LayoutGrid size={20} /> },
    { id: "batches", name: "My Batches", icon: <Layers size={20} /> },
    { id: "schedule", name: "My Schedule", icon: <Calendar size={20} /> },
    { id: "library", name: "Study Library", icon: <Database size={20} /> },
    { id: "performance", name: "Performance", icon: <BarChart2 size={20} /> },
  ];

  // 1. LOADING STATE
  if (hasPaid === null) return (
    <div className="h-screen w-full flex items-center justify-center bg-white font-bold italic text-violet-600">
      Syncing with GyaanX Neural Cloud...
    </div>
  );

  // 2. LOCKED STATE
  if (!hasPaid) return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6 relative">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="max-w-2xl w-full bg-white rounded-[3.5rem] shadow-2xl border border-slate-100 p-10 lg:p-16 text-center animate-in zoom-in duration-300">
         <div className="flex justify-center mb-8">
            <div className="p-5 bg-violet-50 rounded-full"><Sparkles className="w-12 h-12 text-violet-600" /></div>
         </div>
         <h2 className="text-4xl font-black text-slate-950 mb-3 italic tracking-tighter">Level Up Your Journey</h2>
         <p className="text-slate-500 mb-10 text-lg leading-relaxed font-medium">Unlock full access to 24/7 AI Tutors, Recorded Batches, and Premium PDF notes.</p>
         <div className="bg-[#020617] rounded-[2.5rem] p-10 text-white text-center shadow-xl mb-10">
            <span className="bg-violet-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest italic flex items-center gap-2 mx-auto w-fit mb-4"> <Lock size={12} /> Pro Access Only </span>
            <div className="text-6xl font-black mb-1 italic">₹199</div>
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-tighter">One-time Lifetime Upgrade Fee</p>
         </div>
         <button onClick={handlePayment} disabled={loading} className="w-full bg-violet-600 hover:bg-violet-500 text-white py-5 rounded-3xl font-black text-xl flex items-center justify-center gap-4 transition-all shadow-xl shadow-violet-100 disabled:opacity-50">
            {loading ? "Initializing Secure Bridge..." : <>Pay & Start Learning <ArrowRight /></>}
         </button>
      </div>
    </div>
  );

  // 3. UNLOCKED STATE
  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden relative">
      {/* Zoom Embedded Library CDN - Fixes ReactCurrentOwner Error */}
      <Script 
        src="https://source.zoom.us/3.11.0/lib/embedded.min.js" 
        strategy="afterInteractive" 
      />

      <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleImageUpload} />

      {/* Profile Modal */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-sm" onClick={() => setIsProfileModalOpen(false)}></div>
            <div className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl p-8 animate-in fade-in zoom-in duration-200">
                <div className="flex justify-between items-center mb-6 text-slate-900 font-bold">
                    <h3 className="text-xl font-bold">Profile Settings</h3>
                    <button onClick={() => setIsProfileModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400"><X size={20}/></button>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <div className="relative group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                        <div className="w-24 h-24 rounded-full border-4 border-violet-100 overflow-hidden relative">
                           <img src={profileImg} alt="Avatar" className="w-full h-full object-cover" />
                           <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"><Camera size={24} /></div>
                        </div>
                    </div>
                    <div className="w-full space-y-2">
                       <label className="text-sm font-semibold text-slate-500 ml-1">Display Name</label>
                       <input value={displayName} onChange={(e)=>setDisplayName(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-5 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all font-medium" />
                    </div>
                    <button onClick={() => setIsProfileModalOpen(false)} className="w-full bg-violet-600 text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-violet-200 flex items-center justify-center gap-2 hover:bg-violet-700 transition-all">
                       <Check size={18}/> Save Changes
                    </button>
                </div>
            </div>
        </div>
      )}

      {/* Sidebar */}
      <aside className="w-[260px] bg-white border-r border-slate-200 p-6 flex flex-col shrink-0">
        <div className="text-2xl font-extrabold text-violet-600 mb-10 tracking-tight italic">GyaanX</div>
        <nav className="flex-grow flex flex-col gap-1">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => setActiveTab(item.id)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${activeTab === item.id ? "bg-violet-50 text-violet-600 shadow-sm" : "text-slate-500 hover:bg-slate-50 hover:text-violet-600"}`}>
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
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Welcome back, {displayName}! 👋</h1>
            <p className="text-slate-500 font-medium">{studentProfile.grade} • Pro Plan Active</p>
          </div>
          <div className="flex items-center gap-6">
            <Bell size={24} className="text-slate-400 cursor-pointer hover:text-violet-600 transition-colors" />
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
                    <h2 className="text-3xl font-bold mt-4 mb-1 italic tracking-tight">Physics: Quantum Mechanics</h2>
                    <p className="text-violet-100 opacity-90 text-sm font-medium">Starts in 12m 45s • AI Proctoring Active</p>
                  </div>
                  <button onClick={() => setActiveTab("batches")} className="bg-white text-violet-600 px-8 py-3 rounded-2xl font-bold hover:scale-105 transition-transform shadow-md">Join Now</button>
                </div>
                
                <h2 className="text-xl font-bold text-slate-900 -mb-2">My Subjects & Modules</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[{ name: "Advanced Physics", icon: <FlaskConical size={32}/> }, { name: "Core Mathematics", icon: <Calculator size={32}/> }].map((subject, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-[2rem] border border-slate-200 hover:border-violet-300 transition-all cursor-pointer group shadow-sm">
                      <div className="w-full h-32 bg-slate-50 rounded-2xl flex items-center justify-center text-violet-600 mb-4 group-hover:scale-[1.02] transition-transform">{subject.icon}</div>
                      <h3 className="font-bold text-lg mb-1">{subject.name}</h3>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mt-4"><div className="h-full bg-violet-600 rounded-full w-[60%]"></div></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                 <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-lg mb-4 text-slate-900">Course Completion</h3>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-violet-600 rounded-full w-[65%]"></div></div>
                  <p className="mt-4 text-sm font-semibold text-slate-500">65% of Syllabus Completed</p>
                </div>
              </div>
            </div>
          )}

          {/* --- MY BATCHES TAB WITH HOST/JOIN LOGIC --- */}
          {activeTab === "batches" && (
            <div className="space-y-12">
              {activeMeeting ? (
                <div className="animate-in fade-in zoom-in duration-500">
                  <div className="flex justify-between items-center mb-6 bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-sm">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight italic">
                        {activeMeeting.role === 1 ? "Hosting Session" : "Interactive Classroom"}
                      </h2>
                      <p className="text-slate-500 text-sm font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> GyaanX Secure Tunnel Active
                      </p>
                    </div>
                    <button 
                      onClick={() => setActiveMeeting(null)} 
                      className="bg-red-50 text-red-600 font-bold px-8 py-3 rounded-2xl hover:bg-red-100 transition-all flex items-center gap-2 shadow-sm shadow-red-100"
                    >
                      <X size={18}/> Leave Class
                    </button>
                  </div>
                  
                  <ZoomMeeting 
                    meetingNumber={activeMeeting.id} 
                    passWord={activeMeeting.pass} 
                    userName={displayName}
                    userEmail={localStorage.getItem("userEmail") || "student@gyaanx.ai"}
                    signature={activeMeeting.signature}
                    sdkKey={process.env.NEXT_PUBLIC_ZOOM_SDK_KEY || ""}
                    role={activeMeeting.role}
                  />
                </div>
              ) : (
                <>
                  {/* AI Learning Header */}
                  <div className="max-w-4xl py-6">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                      Your Smart Learning Partner — <span className="text-violet-600">Powered by AI</span>
                      <span className="block mt-2 text-2xl md:text-3xl font-bold text-slate-800 italic">
                        Welcome to a new era of learning.
                      </span>
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl font-medium leading-relaxed">
                      An AI-powered education platform designed to solve every question, clear every doubt, 
                      and guide you at every step of your academic journey.
                    </p>
                  </div>

                  {/* Dual Cards: Host vs Join */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
                    {/* HOST CARD */}
                    <div className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-900 transition-all group relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                          <Video size={80} />
                       </div>
                       <h3 className="font-black text-2xl mb-2 text-slate-900 italic tracking-tighter">HOST A SESSION</h3>
                       <p className="text-slate-500 text-sm font-medium mb-8 leading-relaxed">Start a new meeting as a teacher or moderator. You will have full proctoring controls.</p>
                       <button 
                         disabled={isZoomLoading}
                         onClick={() => handleStartMeeting("85879857435", "GQZLx0gfS6ImhfxsrSkdwjCL4lAxqx.1", 1)} 
                         className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-black transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                       >
                         {isZoomLoading ? "Syncing..." : <><Video size={18}/> Create & Start Meeting</>}
                       </button>
                    </div>

                    {/* JOIN CARD */}
                    <div className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-violet-300 transition-all group relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-violet-600">
                          <Sparkles size={80} />
                       </div>
                       <h3 className="font-black text-2xl mb-2 text-violet-600 italic tracking-tighter">JOIN AS STUDENT</h3>
                       <p className="text-slate-500 text-sm font-medium mb-8 leading-relaxed">Join an existing live batch. AI features like auto-notes and proctoring will be active.</p>
                       <button 
                         disabled={isZoomLoading}
                         onClick={() => handleStartMeeting("85879857435", "GQZLx0gfS6ImhfxsrSkdwjCL4lAxqx.1", 0)} 
                         className="w-full bg-violet-600 text-white py-4 rounded-2xl font-bold hover:bg-violet-700 transition-all shadow-lg shadow-violet-100 flex items-center justify-center gap-2 disabled:opacity-50"
                       >
                         {isZoomLoading ? "Generating Bridge..." : <><Zap size={18}/> Join Live Class</>}
                       </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* --- SCHEDULE TAB --- */}
          {activeTab === "schedule" && (
             <div className="max-w-4xl py-12">
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                  Master Your Time — <span className="text-violet-600 italic">AI Schedule</span>
                  <span className="block mt-2 text-2xl md:text-3xl font-bold text-slate-800">
                    Consistency is the bridge to success.
                  </span>
                </h2>
                <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl">
                  Organization is the key to academic excellence. Our smart scheduling system ensures you never miss a lecture or a critical revision deadline.
                </p>
             </div>
          )}
        </div>
      </main>
      <AIChatBot/>
    </div>
  );
};

export default StudentDashboard;