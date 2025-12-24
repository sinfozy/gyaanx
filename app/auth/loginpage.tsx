// // "use client";

// // import React, { useState } from "react";
// // import { useRouter } from "next/navigation";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { 
// //   Mail, Lock, User, ArrowRight, BrainCircuit, Zap, Brain, ShieldCheck 
// // } from "lucide-react";
// // import Link from "next/link";

// // // --- PRESERVED ORIGINAL COMPONENTS ---
// // const FloatingIcon = ({ icon, className, delay }: { icon: React.ReactNode, className: string, delay: number }) => (
// //   <motion.div
// //     initial={{ y: 0, opacity: 0 }}
// //     animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
// //     transition={{ duration: 5, repeat: Infinity, delay }}
// //     className={`absolute text-white pointer-events-none ${className}`}
// //   >
// //     {icon}
// //   </motion.div>
// // );

// // const AuthInput = ({ icon, placeholder, type, name, value, onChange, error }: any) => (
// //   <div className="relative group w-full mb-4">
// //     <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${error ? 'text-red-500' : 'text-slate-500 group-focus-within:text-indigo-400'}`}>
// //       {icon}
// //     </div>
// //     <input 
// //       required
// //       name={name}
// //       type={type} 
// //       value={value}
// //       onChange={onChange}
// //       placeholder={placeholder}
// //       className={`w-full bg-[#0f172a] border rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 outline-none transition-all text-sm focus:ring-4 ${error ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/10'}`}
// //     />
// //     {error && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1 ml-2">{error}</p>}
// //   </div>
// // );

// // export default function AuthPage() {
// //   const router = useRouter();
// //   const [isLogin, setIsLogin] = useState(true);
// //   const [isLoading, setIsLoading] = useState(false);
  
// //   // States for verification
// //   const [isVerifying, setIsVerifying] = useState(false);
// //   const [otpInput, setOtpInput] = useState("");
// //   const [correctOtp, setCorrectOtp] = useState("");

// //   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
// //   const [errors, setErrors] = useState<any>({});

// //   const toggleAuth = () => {
// //     setIsLogin(!isLogin);
// //     setIsVerifying(false);
// //     setErrors({});
// //   };

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //     setErrors({});
// //   };

// //   const handleInitialSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setIsLoading(true);

// //     try {
// //       if (isLogin) {
// //         // Mock login - your actual login logic here
// //         localStorage.setItem("isLoggedIn", "true");
// //         router.push("/dashboard");
// //       } else {
// //         // --- CALL RESEND API ---
// //         const res = await fetch("/api/auth/register", {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify(formData),
// //         });
// //         const data = await res.json();
        
// //         if (res.ok) {
// //           setCorrectOtp(data.otp);
// //           setIsVerifying(true);
// //         } else {
// //           setErrors({ email: "OTP service error. Check Resend Key." });
// //         }
// //       }
// //     } catch (err) {
// //       setErrors({ email: "Connection failed" });
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const handleOtpVerify = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (otpInput === correctOtp) {
// //       localStorage.setItem("isLoggedIn", "true");
// //       router.push("/dashboard");
// //     } else {
// //       setErrors({ otp: "Incorrect code" });
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen w-full bg-[#020617] flex items-center justify-center p-4 overflow-hidden relative">
// //       {/* PRESERVED BACKGROUND */}
// //       <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/4 left-1/4 h-96 w-96 bg-indigo-600/10 rounded-full blur-[120px] -z-10" />
// //       <motion.div animate={{ scale: [1, 1.3, 1], x: [0, -70, 0] }} transition={{ duration: 12, repeat: Infinity }} className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] bg-purple-600/10 rounded-full blur-[150px] -z-10" />

// //       <div className="relative w-full max-w-[1050px] h-[650px] bg-slate-900/40 backdrop-blur-3xl rounded-[40px] border border-white/5 shadow-2xl overflow-hidden flex transition-all">
        
// //         <Link href="/" className="absolute top-8 left-10 z-50 flex items-center gap-2">
// //           <BrainCircuit className="text-indigo-500 w-6 h-6" />
// //           <span className="text-white font-black tracking-tighter text-2xl uppercase">Gyaan<span className="text-indigo-500">X</span></span>
// //         </Link>

// //         <div className="relative w-full flex">
          
// //           {/* LOGIN PANEL */}
// //           <section className={`w-full md:w-1/2 flex flex-col justify-center px-16 transition-all duration-700 ease-in-out ${!isLogin ? 'opacity-0 translate-x-12' : 'opacity-100'}`}>
// //             <h2 className="text-4xl font-extrabold text-white mb-2">Welcome!</h2>
// //             <p className="text-slate-400 mb-10 text-sm">Log in to your GyaanX account.</p>
// //             <form onSubmit={handleInitialSubmit}>
// //               <AuthInput icon={<Mail size={18}/>} name="email" type="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
// //               <AuthInput icon={<Lock size={18}/>} name="password" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
// //               <button disabled={isLoading} className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2">
// //                 Sign In <ArrowRight size={18} />
// //               </button>
// //             </form>
// //           </section>

// //           {/* SIGNUP PANEL (Handles OTP inside) */}
// //           <section className={`w-full md:w-1/2 absolute left-0 md:left-1/2 h-full flex flex-col justify-center px-16 transition-all duration-700 ${isLogin ? 'opacity-0 -translate-x-12' : 'opacity-100'}`}>
// //             <AnimatePresence mode="wait">
// //               {!isVerifying ? (
// //                 <motion.div key="signup-fields" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
// //                   <h2 className="text-4xl font-extrabold text-white mb-2">Join GyaanX</h2>
// //                   <p className="text-slate-400 mb-8 text-sm">India's first AI-powered board assistant.</p>
// //                   <form onSubmit={handleInitialSubmit}>
// //                     <AuthInput icon={<User size={18}/>} name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
// //                     <AuthInput icon={<Mail size={18}/>} name="email" type="email" placeholder="Email" value={formData.email} onChange={handleInputChange} error={errors.email}/>
// //                     <AuthInput icon={<Lock size={18}/>} name="password" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
// //                     <button disabled={isLoading} className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl transition-all">
// //                       {isLoading ? "Sending Code..." : "Create Account"}
// //                     </button>
// //                   </form>
// //                 </motion.div>
// //               ) : (
// //                 <motion.div key="otp-fields" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
// //                   <h2 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-3">Verify Email <ShieldCheck className="text-indigo-500" /></h2>
// //                   <p className="text-slate-400 mb-8 text-xs">Enter code sent to <span className="text-indigo-400">{formData.email}</span></p>
// //                   <form onSubmit={handleOtpVerify}>
// //                     <input 
// //                       type="text" maxLength={6} placeholder="      • • • • • •"
// //                       value={otpInput} onChange={(e) => setOtpInput(e.target.value)}
// //                       className="w-full bg-[#0f172a] border border-slate-800 rounded-2xl py-5 text-xl font-bold tracking-widest text-indigo-500 text-center outline-none mb-4 focus:border-indigo-500 transition-all"
// //                     />
// //                     <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl transition-all">Verify Now</button>
// //                     <p className="text-[10px] text-red-500 text-center mt-2 font-bold uppercase">{errors.otp}</p>
// //                     <button type="button" onClick={() => setIsVerifying(false)} className="w-full text-slate-500 text-[10px] font-black uppercase mt-6 tracking-tighter">Wrong Email?</button>
// //                   </form>
// //                 </motion.div>
// //               )}
// //             </AnimatePresence>
// //           </section>

// //           {/* PRESERVED SLIDING OVERLAY */}
// //           <motion.div 
// //             animate={{ x: isLogin ? "0%" : "-100%" }}
// //             transition={{ type: "spring", stiffness: 100, damping: 22 }}
// //             className="absolute top-0 right-0 w-1/2 h-full hidden md:block z-40 overflow-hidden"
// //           >
// //             <div className="relative w-full h-full bg-indigo-600 flex items-center px-14 shadow-2xl">
// //               <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800" />
// //               <FloatingIcon icon={<Brain size={30} />} className="top-16 left-12" delay={0} />
// //               <FloatingIcon icon={<Zap size={24} />} className="bottom-20 right-14" delay={2} />
// //               <div className="relative z-10 w-full text-center text-white">
// //                 <h3 className="text-4xl font-black mb-6 italic">{isLogin ? "New Here?" : "Welcome Back!"}</h3>
// //                 <button onClick={toggleAuth} className="bg-white text-indigo-700 font-black py-4 px-12 rounded-2xl uppercase tracking-widest text-xs">
// //                    {isLogin ? "Join GyaanX" : "Sign In"}
// //                 </button>
// //               </div>
// //             </div>
// //           </motion.div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, Lock, User, ArrowRight, BrainCircuit, Zap, Brain, ShieldCheck 
} from "lucide-react";
import Link from "next/link";

// --- PRESERVED ORIGINAL UI COMPONENTS ---
const FloatingIcon = ({ icon, className, delay }: { icon: React.ReactNode, className: string, delay: number }) => (
  <motion.div
    initial={{ y: 0, opacity: 0 }}
    animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
    transition={{ duration: 5, repeat: Infinity, delay }}
    className={`absolute text-white pointer-events-none ${className}`}
  >
    {icon}
  </motion.div>
);

const AuthInput = ({ icon, placeholder, type, name, value, onChange, error }: any) => (
  <div className="relative group w-full mb-4">
    <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${error ? 'text-red-500' : 'text-slate-500 group-focus-within:text-indigo-400'}`}>
      {icon}
    </div>
    <input 
      required
      name={name}
      type={type} 
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full bg-[#0f172a] border rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 outline-none transition-all text-sm focus:ring-4 ${error ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/10' : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/10'}`}
    />
    {error && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1 ml-2">{error}</p>}
  </div>
);

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false); // Controls content inside Signup Section
  
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [otpInput, setOtpInput] = useState("");
  const [serverOtp, setServerOtp] = useState("");
  const [errors, setErrors] = useState<any>({});

  const toggleAuth = () => {
    setIsLogin(!isLogin);
    setIsVerifying(false);
    setErrors({});
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({});
  };

  // --- LOGIC: INITIAL SUBMIT (Login or Request OTP) ---
  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLogin) {
        // --- CALL LOGIN API (MongoDB Validation) ---
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: formData.email, password: formData.password }),
        });
        const data = await res.json();

        if (res.ok) {
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("userEmail", data.email);
          localStorage.setItem("userName", data.name);
          
          // Check if onboarding is complete
          if (data.isProfileComplete) router.push("/dashboard");
          else router.push("/dashboard");
        } else {
          // Status 404 from route will trigger "User not registered" error here
          setErrors({ email: data.message });
        }
      } else {
        // --- CALL REGISTER OTP (Resend API) ---
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await res.json();

        if (res.ok) {
          setServerOtp(data.otp);
          setIsVerifying(true);
        } else {
          setErrors({ email: data.message });
        }
      }
    } catch (err) {
      setErrors({ email: "Network error. Please try later." });
    } finally {
      setIsLoading(false);
    }
  };

  // --- LOGIC: FINAL OTP VERIFICATION & DB ENTRY ---
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otpInput === serverOtp) {
      setIsLoading(true);
      const res = await fetch("/api/auth/verify-and-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", data.email);
        localStorage.setItem("userName", data.name);
        router.push("/onboarding");
      } else {
        alert("Registration Error.");
      }
      setIsLoading(false);
    } else {
      setErrors({ otp: "Wrong Verification Code" });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#020617] flex items-center justify-center p-4 overflow-hidden relative">
      <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/4 left-1/4 h-96 w-96 bg-indigo-600/10 rounded-full blur-[120px] -z-10" />
      <motion.div animate={{ scale: [1, 1.3, 1], x: [0, -70, 0] }} transition={{ duration: 12, repeat: Infinity }} className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] bg-purple-600/10 rounded-full blur-[150px] -z-10" />

      <div className="relative w-full max-w-[1050px] h-[650px] bg-slate-900/40 backdrop-blur-3xl rounded-[40px] border border-white/5 shadow-2xl overflow-hidden flex transition-all">
        
        <Link href="/" className="absolute top-8 left-10 z-50 flex items-center gap-2">
          <BrainCircuit className="text-indigo-500 w-6 h-6" />
          <span className="text-white font-black tracking-tighter text-2xl uppercase">Gyaan<span className="text-indigo-500">X</span></span>
        </Link>

        <div className="relative w-full flex">
          
          {/* LOGIN SIDE */}
          <section className={`w-full md:w-1/2 flex flex-col justify-center px-16 transition-all duration-700 ease-in-out ${!isLogin ? 'opacity-0 translate-x-12 pointer-events-none' : 'opacity-100 translate-x-0'}`}>
            <h2 className="text-4xl font-extrabold text-white mb-2 italic">Welcome back!</h2>
            <p className="text-slate-400 mb-8 text-sm font-medium uppercase tracking-widest italic opacity-60">Verified Users Only</p>
            <form onSubmit={handleAuthSubmit}>
              <AuthInput icon={<Mail size={18}/>} name="email" placeholder="Registered Email" value={formData.email} onChange={handleInputChange} error={errors.email} />
              <AuthInput icon={<Lock size={18}/>} name="password" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
              <button disabled={isLoading} className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 active:scale-95 shadow-xl transition-all disabled:opacity-50">
                {isLoading ? "Validating Account..." : "Login Portal"} <ArrowRight size={18} />
              </button>
            </form>
          </section>

          {/* SIGNUP SIDE (Contents toggle based on isVerifying state) */}
          <section className={`w-full md:w-1/2 absolute top-0 left-0 md:left-1/2 h-full flex flex-col justify-center px-16 transition-all duration-700 ease-in-out ${isLogin ? 'opacity-0 -translate-x-12 pointer-events-none' : 'opacity-100 translate-x-0'}`}>
            <AnimatePresence mode="wait">
              {!isVerifying ? (
                <motion.div key="signup-form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -20 }}>
                   <h2 className="text-4xl font-extrabold text-white mb-8 italic">Get Access</h2>
                   <form onSubmit={handleAuthSubmit}>
                     <AuthInput icon={<User size={18}/>} name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} />
                     <AuthInput icon={<Mail size={18}/>} name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} error={errors.email} />
                     <AuthInput icon={<Lock size={18}/>} name="password" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
                     <button disabled={isLoading} className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl shadow-xl hover:bg-indigo-500 transition-all">{isLoading ? "Requesting OTP..." : "Get OTP Verification"}</button>
                   </form>
                </motion.div>
              ) : (
                <motion.div key="otp-form" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
                   <h2 className="text-3xl font-black text-white mb-2 flex items-center gap-2 tracking-tight">Code Sent! <ShieldCheck className="text-emerald-500"/></h2>
                   <p className="text-slate-400 text-xs font-bold uppercase mb-8 opacity-60">Please check {formData.email}</p>
                   <form onSubmit={handleVerifyOtp}>
                      <input maxLength={6} placeholder="6 - digit code" value={otpInput} onChange={(e) => setOtpInput(e.target.value)} className="w-full bg-[#0f172a] border border-slate-800 rounded-2xl py-5 text-indigo-400 text-center text-xl font-black tracking-widest outline-none mb-6 focus:border-indigo-600 transition-all shadow-inner" />
                      <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl">Confirm Account</button>
                      <p className="text-red-500 text-[10px] text-center font-bold uppercase mt-4">{errors.otp}</p>
                   </form>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* SLIDING ANIMATED OVERLAY (Original Motion maintained) */}
          <motion.div 
            animate={{ x: isLogin ? "0%" : "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 22 }}
            className="absolute top-0 right-0 w-1/2 h-full hidden md:block z-40 overflow-hidden shadow-[-50px_0px_50px_-20px_rgba(0,0,0,0.5)]"
          >
            <div className="relative w-full h-full bg-indigo-600 flex items-center px-14 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800" />
              
              <div className="relative z-10 w-full text-center text-white">
                 <h3 className="text-4xl font-black mb-10 italic">{isLogin ? "Hello Learner!" : "Sign In Back!"}</h3>
                 <p className="opacity-60 mb-12 text-sm max-w-xs mx-auto">India's first AI faculty system built for high school & competitive brilliance.</p>
                 <button onClick={toggleAuth} className="bg-white text-indigo-800 font-bold py-4 px-12 rounded-2xl uppercase tracking-widest text-[10px] hover:scale-105 active:scale-95 shadow-2xl transition-all">
                   {isLogin ? "I want to Create Account" : "Go to Sign In Portal"}
                 </button>
              </div>

              <FloatingIcon icon={<Brain size={40}/>} className="top-10 left-10 opacity-30" delay={0}/>
              <FloatingIcon icon={<Zap size={25}/>} className="bottom-10 right-10 opacity-30" delay={2.5}/>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}