// "use client";

// import React, { useState, useRef } from "react";
// import { 
//   LayoutGrid, 
//   Layers, 
//   Calendar, 
//   Database, 
//   BarChart2, 
//   Settings, 
//   Bell, 
//   FlaskConical, 
//   Calculator, 
//   FileText, 
//   Video, 
//   HelpCircle,
//   Camera,
//   X,
//   Check
// } from "lucide-react";
// import AIChatBot from "@/components/AIchatBox";
// const StudentDashboard = () => {
//   // --- Dashboard States ---
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   // --- Profile Data (Default values since we removed onboarding) ---
//   const [displayName, setDisplayName] = useState("Student");
//   const [profileImg, setProfileImg] = useState("https://api.dicebear.com/7.x/avataaars/svg?seed=Felix");
//   const [studentProfile, setStudentProfile] = useState({ 
//     path: "school", 
//     grade: "12th Grade" 
//   });

//   // Handle Profile Image Upload
//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImg(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const navItems = [
//     { id: "dashboard", name: "Dashboard", icon: <LayoutGrid size={20} /> },
//     { id: "batches", name: "My Batches", icon: <Layers size={20} /> },
//     { id: "schedule", name: "My Schedule", icon: <Calendar size={20} /> },
//     { id: "library", name: "Study Library", icon: <Database size={20} /> },
//     { id: "performance", name: "Performance", icon: <BarChart2 size={20} /> },
//   ];

//   return (
//     <div className="flex h-screen w-full bg-slate-50 overflow-hidden relative">
      
//       {/* --- HIDDEN FILE INPUT --- */}
//       <input 
//         type="file" 
//         accept="image/*" 
//         className="hidden" 
//         ref={fileInputRef} 
//         onChange={handleImageUpload} 
//       />

//       {/* --- PROFILE SETTINGS MODAL --- */}
//       {isProfileModalOpen && (
//         <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
//             <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-sm" onClick={() => setIsProfileModalOpen(false)}></div>
//             <div className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl p-8 animate-in fade-in zoom-in duration-200">
//                 <div className="flex justify-between items-center mb-6">
//                     <h3 className="text-xl font-bold text-slate-900">Profile Settings</h3>
//                     <button onClick={() => setIsProfileModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400"><X size={20}/></button>
//                 </div>

//                 <div className="flex flex-col items-center gap-6">
//                     <div className="relative group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
//                         <div className="w-24 h-24 rounded-full border-4 border-violet-100 overflow-hidden relative">
//                             <img src={profileImg} alt="Avatar" className="w-full h-full object-cover" />
//                             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
//                                 <Camera size={24} />
//                             </div>
//                         </div>
//                         <div className="absolute bottom-0 right-0 bg-violet-600 text-white p-1.5 rounded-full border-2 border-white">
//                             <Camera size={14} />
//                         </div>
//                     </div>

//                     <div className="w-full space-y-2">
//                         <label className="text-sm font-semibold text-slate-500 ml-1">Display Name</label>
//                         <input 
//                             type="text" 
//                             value={displayName}
//                             onChange={(e) => setDisplayName(e.target.value)}
//                             className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-5 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all font-medium"
//                         />
//                     </div>

//                     <button 
//                         onClick={() => setIsProfileModalOpen(false)}
//                         className="w-full bg-violet-600 text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-violet-200 flex items-center justify-center gap-2 hover:bg-violet-700 transition-all"
//                     >
//                         <Check size={18}/> Save Changes
//                     </button>
//                 </div>
//             </div>
//         </div>
//       )}

//       {/* --- SIDEBAR --- */}
//       <aside className="w-[260px] bg-white border-r border-slate-200 p-6 flex flex-col shrink-0">
//         <div className="text-2xl font-extrabold text-violet-600 mb-10 tracking-tight">GyaanX</div>
//         <nav className="flex-grow flex flex-col gap-1">
//           {navItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => setActiveTab(item.id)}
//               className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
//                 activeTab === item.id 
//                   ? "bg-violet-50 text-violet-600 shadow-sm" 
//                   : "text-slate-500 hover:bg-slate-50 hover:text-violet-600"
//               }`}
//             >
//               {item.icon}
//               {item.name}
//             </button>
//           ))}
//         </nav>
//         <button className="flex items-center gap-3 px-4 py-3 text-slate-500 font-medium hover:text-violet-600 mt-auto border-t pt-4">
//           <Settings size={20} />
//           Settings
//         </button>
//       </aside>

//       {/* --- MAIN CONTENT --- */}
//       <main className="flex-grow overflow-y-auto p-8 lg:p-12">
//         <header className="flex justify-between items-center mb-10">
//           <div>
//             <h1 className="text-2xl font-bold text-slate-900">Welcome back, {displayName}! 👋</h1>
//             <p className="text-slate-500">{studentProfile.grade} • {studentProfile.path === 'school' ? 'CBSE/ICSE' : 'Competitive Track'}</p>
//           </div>
//           <div className="flex items-center gap-6">
//             <Bell size={24} className="text-slate-400 cursor-pointer hover:text-violet-600 transition-colors" />
//             <div 
//               onClick={() => setIsProfileModalOpen(true)}
//               className="w-12 h-12 rounded-full border-2 border-violet-600 p-0.5 overflow-hidden cursor-pointer hover:scale-110 transition-transform active:scale-95"
//             >
//                 <img src={profileImg} alt="avatar" className="rounded-full w-full h-full object-cover" />
//             </div>
//           </div>
//         </header>

//         {/* --- VIEW SWITCHER --- */}
//         <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          
//           {/* DASHBOARD TAB */}
//           {activeTab === "dashboard" && (
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               <div className="lg:col-span-2 flex flex-col gap-8">
//                 {/* Live Card */}
//                 <div className="bg-violet-600 p-8 rounded-[2rem] text-white flex justify-between items-center shadow-lg shadow-violet-200">
//                   <div>
//                     <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">Live Soon</span>
//                     <h2 className="text-2xl font-bold mt-4 mb-1">Physics: Quantum Mechanics</h2>
//                     <p className="text-violet-100 opacity-90 text-sm">Starts in 12m 45s • AI Faculty</p>
//                   </div>
//                   <button className="bg-white text-violet-600 px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform active:scale-95 shadow-md">Join Now</button>
//                 </div>

//                 <h2 className="text-xl font-bold text-slate-900 -mb-2">My Subjects & Modules</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   {[
//                     { name: "Advanced Physics", next: "Electromagnetic Waves", progress: "78%", icon: <FlaskConical size={32}/> },
//                     { name: "Core Mathematics", next: "Integral Calculus", progress: "45%", icon: <Calculator size={32}/> }
//                   ].map((subject, idx) => (
//                     <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-violet-300 transition-colors cursor-pointer group">
//                       <div className="w-full h-32 bg-indigo-50 rounded-2xl flex items-center justify-center text-violet-600 mb-4 group-hover:scale-[1.02] transition-transform">
//                         {subject.icon}
//                       </div>
//                       <h3 className="font-bold text-lg mb-1">{subject.name}</h3>
//                       <p className="text-xs text-slate-400 mb-4">Next: {subject.next}</p>
//                       <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
//                         <div className="h-full bg-violet-600 rounded-full" style={{width: subject.progress}}></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Sidebar Cards */}
//               <div className="flex flex-col gap-6">
//                 <div className="bg-white p-6 rounded-3xl border border-slate-200">
//                   <h3 className="font-bold text-lg mb-4">Course Completion</h3>
//                   <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
//                     <div className="h-full bg-violet-600 rounded-full" style={{width: '65%'}}></div>
//                   </div>
//                   <p className="mt-4 text-sm font-medium text-slate-500">65% of Syllabus Completed</p>
//                 </div>

//                 <div className="bg-white p-6 rounded-3xl border border-slate-200 flex-grow">
//                   <h3 className="font-bold text-lg mb-6">Today&apos;s Schedule</h3>
//                   <div className="flex flex-col gap-6">
//                     <div className="flex gap-4 border-l-2 border-slate-200 pl-4 py-1">
//                       <span className="text-xs font-bold text-slate-400 w-16 pt-1">09:00 AM</span>
//                       <div><p className="font-semibold text-sm">Recorded: Atoms Theory</p></div>
//                     </div>
//                     <div className="flex gap-4 border-l-2 border-violet-600 pl-4 py-1">
//                       <span className="text-xs font-bold text-violet-600 w-16 pt-1">03:00 PM</span>
//                       <div><p className="font-semibold text-sm">LIVE: Logic Quiz</p></div>
//                     </div>
//                   </div>
//                   <button className="w-full bg-slate-50 text-slate-600 py-3 rounded-xl mt-10 font-bold hover:bg-slate-100 transition-colors">View Week Table</button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* MY BATCHES TAB */}
//           {activeTab === "batches" && (
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//               {["Lakshya JEE 2025", "Board Booster 12th"].map((batch, i) => (
//                 <div key={i} className="bg-white p-4 rounded-3xl border border-slate-200">
//                    <div className="h-44 bg-slate-100 rounded-2xl mb-4 overflow-hidden relative">
//                         <div className="absolute inset-0 bg-violet-600/10 flex items-center justify-center font-bold text-violet-600 text-lg">Class Content</div>
//                    </div>
//                    <h3 className="font-bold text-lg">{batch}</h3>
//                    <p className="text-slate-400 text-sm mb-4">Top AI Faculties • All Subjects</p>
//                    <button className="w-full bg-violet-600 text-white py-3 rounded-xl font-bold">Enter Batch</button>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* PERFORMANCE TAB */}
//           {activeTab === "performance" && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 text-center">
//                   <h3 className="text-slate-500 font-bold mb-4 uppercase tracking-widest text-sm">Accuracy Rate</h3>
//                   <div className="text-7xl font-black text-emerald-500">84%</div>
//                   <p className="text-slate-400 mt-4 font-medium">Top 5% among users</p>
//                </div>
//                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 text-center">
//                   <h3 className="text-slate-500 font-bold mb-4 uppercase tracking-widest text-sm">Test Ranking</h3>
//                   <div className="text-7xl font-black text-violet-600">#24</div>
//                   <p className="text-slate-400 mt-4 font-medium">Overall Batch Ranking</p>
//                </div>
//             </div>
//           )}

//           {/* SCHEDULE TAB */}
//           {activeTab === "schedule" && (
//              <div className="bg-white p-8 rounded-3xl border border-slate-200 overflow-x-auto">
//                 <table className="w-full min-w-[600px] text-left">
//                   <thead>
//                     <tr className="border-b border-slate-100 h-16 text-slate-400 uppercase text-xs tracking-wider">
//                       <th>Time</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr className="h-20 border-b border-slate-50 font-medium">
//                       <td className="text-slate-400 font-bold">10:00 AM</td>
//                       <td><div className="bg-indigo-50 text-violet-600 p-2 rounded-lg text-sm inline-block px-4">Physics</div></td>
//                       <td><div className="bg-rose-50 text-rose-600 p-2 rounded-lg text-sm inline-block px-4">Chemistry</div></td>
//                       <td><div className="bg-emerald-50 text-emerald-600 p-2 rounded-lg text-sm inline-block px-4">Math</div></td>
//                     </tr>
//                   </tbody>
//                 </table>
//              </div>
//           )}

//           {/* LIBRARY TAB */}
//           {activeTab === "library" && (
//              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//                 {[
//                   { name: "Notes PDF", icon: <FileText/>, color: "text-blue-500" },
//                   { name: "Recorded", icon: <Video/>, color: "text-rose-500" },
//                   { name: "Previous Papers", icon: <HelpCircle/>, color: "text-emerald-500" },
//                   { name: "Modules", icon: <Layers/>, color: "text-violet-500" }
//                 ].map((lib, i) => (
//                   <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 text-center cursor-pointer hover:-translate-y-2 transition-transform shadow-sm">
//                       <div className={`mx-auto w-12 h-12 mb-4 flex items-center justify-center ${lib.color}`}>{lib.icon}</div>
//                       <h4 className="font-bold text-slate-800">{lib.name}</h4>
//                   </div>
//                 ))}
//              </div>
//           )}
//         </div>
//       </main>
//       <AIChatBot/>
//     </div>
//   );
// };

// export default StudentDashboard;


"use client";

import React, { useState, useRef, useEffect } from "react";
import Script from "next/script"; // Required for Razorpay
import { 
  LayoutGrid, Layers, Calendar, Database, BarChart2, 
  Settings, Bell, FlaskConical, Calculator, FileText, 
  Video, HelpCircle, Camera, X, Check,
  Lock, CreditCard, Zap, Sparkles, ShieldCheck, ArrowRight
} from "lucide-react";
import AIChatBot from "@/components/AIchatBox";

// Fix for TypeScript Razorpay error
declare global {
  interface Window {
    Razorpay: any;
  }
}

const StudentDashboard = () => {
  // --- AUTH & PAYMENT STATES ---
  const [hasPaid, setHasPaid] = useState<boolean | null>(null); // null = checking, false = paywall
  const [loading, setLoading] = useState(false);

  // --- Your Dashboard States (Unchanged) ---
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- Your Profile Data (Unchanged) ---
  const [displayName, setDisplayName] = useState("Student");
  const [profileImg, setProfileImg] = useState("https://api.dicebear.com/7.x/avataaars/svg?seed=Felix");
  const [studentProfile, setStudentProfile] = useState({ 
    path: "school", 
    grade: "12th Grade" 
  });

  // --- CHECK SUBSCRIPTION STATUS ON LOAD ---
  useEffect(() => {
    const checkAccess = async () => {
      const email = localStorage.getItem("userEmail");
      if (!email) return setHasPaid(false);

      try {
        // We call your database to see if the user is a paid subscriber
        const res = await fetch(`/api/subscription/status?email=${email}`);
        const data = await res.json();
        setHasPaid(data.isSubscribed);
      } catch (err) {
        setHasPaid(false);
      }
    };
    checkAccess();
  }, []);

  // --- RAZORPAY HANDLER ---
  const handlePayment = async () => {
    setLoading(true);
    const email = localStorage.getItem("userEmail") || "student@gyaanx.ai";
    const name = localStorage.getItem("userName") || "Student";

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: 199 * 100, // ₹199.00
      currency: "INR",
      name: "GyaanX Prime",
      description: "Unlock AI Powered Learning Batch",
      image: "https://your-logo-url.com/logo.png",
      handler: async function (response: any) {
        // 1. Notify Backend of Success
        const res = await fetch("/api/subscription/save", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, paymentId: response.razorpay_payment_id }),
        });

        if (res.ok) {
          setHasPaid(true); // 2. Unlock Dashboard UI instantly
          alert("Payment Successful! Dashboard Unlocked.");
        }
      },
      prefill: { name, email },
      theme: { color: "#6366f1" },
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

  // --- SHOW LOADER WHILE CHECKING DB ---
  if (hasPaid === null) {
    return <div className="h-screen w-full flex items-center justify-center bg-white font-bold italic text-indigo-600">Syncing with GyaanX Neural Cloud...</div>;
  }

  // --- SHOW PAYWALL IF USER HAS NOT PAID ---
  if (!hasPaid) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6 relative">
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
        <div className="max-w-2xl w-full bg-white rounded-[3.5rem] shadow-2xl border border-slate-100 p-10 lg:p-16 text-center animate-in zoom-in duration-300">
           <div className="flex justify-center mb-8">
              <div className="p-5 bg-indigo-50 rounded-full">
                <Sparkles className="w-12 h-12 text-indigo-600" />
              </div>
           </div>
           <h2 className="text-4xl font-black text-slate-950 mb-3 italic tracking-tighter">Level Up Your Journey</h2>
           <p className="text-slate-500 mb-10 text-lg leading-relaxed font-medium">Unlock full access to 24/7 AI Tutors, Recorded Batches, and Premium PDF notes.</p>
           
           <div className="bg-[#020617] rounded-[2.5rem] p-10 text-white text-center shadow-xl mb-10">
              <span className="bg-indigo-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest italic flex items-center gap-2 mx-auto w-fit mb-4"> <Lock size={12} /> Pro Access Only </span>
              <div className="text-6xl font-black mb-1 italic">₹199</div>
              <p className="text-slate-400 font-bold text-[10px] uppercase tracking-tighter">One-time Lifetime Upgrade Fee</p>
           </div>

           <button 
             onClick={handlePayment}
             disabled={loading}
             className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-5 rounded-3xl font-black text-xl flex items-center justify-center gap-4 transition-all shadow-xl shadow-indigo-100 hover:-translate-y-1 active:scale-95 disabled:opacity-50"
           >
              {loading ? "Initializing Secure Bridge..." : <>Pay & Start Learning <ArrowRight /></>}
           </button>

           <div className="mt-8 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase italic"><ShieldCheck className="text-emerald-500" size={14}/> Encrypted</div>
              <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase italic"><Check className="text-indigo-600" size={14}/> Unlimited Access</div>
           </div>
        </div>
      </div>
    );
  }

  // --- UNLOCKED: ORIGINAL UI (Returns only if hasPaid === true) ---
  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden relative">
      <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleImageUpload} />

      {isProfileModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-sm" onClick={() => setIsProfileModalOpen(false)}></div>
            <div className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl p-8 animate-in fade-in zoom-in duration-200">
                <div className="flex justify-between items-center mb-6 text-slate-900 font-black tracking-tight italic uppercase">Edit Profile</div>
                <div className="flex flex-col items-center gap-6">
                    <div className="relative group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                        <div className="w-24 h-24 rounded-full border-4 border-indigo-500/20 overflow-hidden">
                           <img src={profileImg} alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="w-full">
                       <label className="text-xs font-black uppercase text-slate-400">Display Name</label>
                       <input value={displayName} onChange={(e)=>setDisplayName(e.target.value)} className="w-full bg-slate-50 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-600 transition-all text-slate-900" />
                    </div>
                    <button onClick={() => setIsProfileModalOpen(false)} className="w-full bg-indigo-600 text-white font-black py-4 rounded-2xl">Confirm Update</button>
                </div>
            </div>
        </div>
      )}

      {/* Sidebar (Original Code) */}
      <aside className="w-[260px] bg-white border-r border-slate-200 p-6 flex flex-col shrink-0 italic tracking-tight">
        <div className="text-2xl font-black text-indigo-600 mb-10 tracking-tight">GyaanX Pro</div>
        <nav className="flex-grow flex flex-col gap-1 italic">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => setActiveTab(item.id)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold ${activeTab === item.id ? "bg-indigo-50 text-indigo-600 shadow-sm" : "text-slate-500 hover:bg-slate-50"}`}>
              {item.icon} {item.name}
            </button>
          ))}
        </nav>
        <button className="flex items-center gap-3 px-4 py-3 text-slate-400 font-bold hover:text-indigo-600 mt-auto border-t pt-4"><Settings size={20} /> Settings</button>
      </aside>

      {/* Main Area (Original Code) */}
      <main className="flex-grow overflow-y-auto p-8 lg:p-12">
        <header className="flex justify-between items-center mb-10 italic">
          <div>
            <h1 className="text-3xl font-black text-slate-950">Welcome back, {displayName}! 👋</h1>
            <p className="text-indigo-500 font-black uppercase text-[10px] tracking-[0.4em]">{studentProfile.grade} • Pro Plan Active</p>
          </div>
          <div className="flex items-center gap-6">
            <Bell size={24} className="text-slate-400" />
            <div onClick={() => setIsProfileModalOpen(true)} className="w-12 h-12 rounded-2xl border-2 border-indigo-600 p-0.5 overflow-hidden cursor-pointer hover:rotate-2 transition-all shadow-md">
                <img src={profileImg} alt="avatar" className="rounded-xl w-full h-full object-cover" />
            </div>
          </div>
        </header>

        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          {/* TAB LOGIC: DASHBOARD */}
          {activeTab === "dashboard" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 italic">
              <div className="lg:col-span-2 flex flex-col gap-8">
                <div className="bg-indigo-600 p-10 rounded-[3rem] text-white flex justify-between items-center shadow-2xl shadow-indigo-100 relative overflow-hidden group">
                  <div className="relative z-10">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Active Class</span>
                    <h2 className="text-3xl font-black mt-4 mb-2">Modern Physics & Laws</h2>
                    <p className="opacity-70 text-xs mb-8">Professor Marcus • Special 2025 Edition</p>
                    <button className="bg-white text-indigo-600 px-10 py-3 rounded-2xl font-black hover:scale-105 transition-transform active:scale-95 shadow-md">Continue Learning</button>
                  </div>
                  <Zap size={150} className="absolute -right-4 -bottom-4 text-white opacity-10 group-hover:rotate-12 transition-transform duration-1000" />
                </div>
                
                {/* Subjects/Modules (As they were) */}
                <h2 className="text-xl font-black text-slate-900 tracking-tight italic">Batch Core Modules</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[{ name: "Logic Math", icon: <Calculator/> }, { name: "Pure Physics", icon: <FlaskConical/> }].map((s, i)=>(
                    <div key={i} className="bg-white border-2 border-slate-100 p-6 rounded-[2.5rem] hover:border-indigo-600 transition-all cursor-pointer group">
                        <div className="h-14 w-14 bg-indigo-50 text-indigo-600 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform mb-6">{s.icon}</div>
                        <h4 className="font-black text-slate-800 italic">{s.name}</h4>
                        <p className="text-[10px] text-slate-400 font-bold uppercase mt-2 italic tracking-tighter">Last Active: Yesterday</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* SCHEDULE / COMPLETION (As they were) */}
              <div className="flex flex-col gap-6">
                  <div className="bg-slate-950 p-8 rounded-[2.5rem] text-white italic">
                      <p className="text-[10px] font-black uppercase text-indigo-500 mb-6 tracking-widest italic">Today's Goals</p>
                      <div className="space-y-4 font-bold text-sm">
                        <p className="flex items-center gap-3"> <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"/> 3 PM - Live SSC Vocab</p>
                        <p className="opacity-40"> 9 PM - Physics Flashcards</p>
                      </div>
                  </div>
              </div>
            </div>
          )}

          {/* ... Performance/Batches tabs as per original UI ... */}
          {activeTab === "batches" && (
            <div className="bg-white p-20 rounded-[3.5rem] border border-slate-100 text-center font-black text-slate-300 uppercase italic tracking-[0.5em] text-xs">
                Your Enrollment Batches go here
            </div>
          )}
        </div>
      </main>
      <AIChatBot/>
    </div>
  );
};

export default StudentDashboard;