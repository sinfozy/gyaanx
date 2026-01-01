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
  const [isVerifying, setIsVerifying] = useState(false); 
  
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

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (isLogin) {
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
          router.push("/dashboard");
        } else {
          setErrors({ email: data.message });
        }
      } else {
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
    <div className="min-h-screen w-full bg-[#020617] flex items-center justify-center p-4 overflow-x-hidden relative">
      <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/4 left-1/4 h-96 w-96 bg-indigo-600/10 rounded-full blur-[120px] -z-10" />
      <motion.div animate={{ scale: [1, 1.3, 1], x: [0, -70, 0] }} transition={{ duration: 12, repeat: Infinity }} className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] bg-purple-600/10 rounded-full blur-[150px] -z-10" />

      {/* FIXED: Added pt-28 to give space for absolute logo on mobile */}
      <div className="relative w-full max-w-[1050px] min-h-[600px] md:h-[650px] bg-slate-900/40 backdrop-blur-3xl rounded-[30px] md:rounded-[40px] border border-white/5 shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all pt-28 pb-12 md:py-0">
        
        <Link href="/" className="absolute top-8 left-8 md:left-10 z-50 flex items-center gap-2">
          <BrainCircuit className="text-indigo-500 w-5 h-5 md:w-6 md:h-6" />
          <span className="text-white font-black tracking-tighter text-xl md:text-2xl uppercase">Gyaan<span className="text-indigo-500">X</span></span>
        </Link>

        <div className="relative w-full h-full flex items-center">
          
          {/* LOGIN SIDE - FIXED: Changed justify-center to justify-start on mobile */}
          <section className={`w-full md:w-1/2 flex flex-col justify-start md:justify-center px-8 md:px-16 transition-all duration-700 ease-in-out ${!isLogin ? 'opacity-0 translate-x-12 pointer-events-none hidden md:flex' : 'opacity-100 translate-x-0 flex'}`}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 italic">Welcome back!</h2>
            <p className="text-slate-400 mb-8 text-[10px] md:text-sm font-medium uppercase tracking-widest italic opacity-60">Verified Users Only</p>
            <form onSubmit={handleAuthSubmit}>
              <AuthInput icon={<Mail size={18}/>} name="email" placeholder="Registered Email" value={formData.email} onChange={handleInputChange} error={errors.email} />
              <AuthInput icon={<Lock size={18}/>} name="password" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
              <button disabled={isLoading} className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 active:scale-95 shadow-xl transition-all disabled:opacity-50">
                {isLoading ? "Validating Account..." : "Login Portal"} <ArrowRight size={18} />
              </button>
            </form>
            <p className="mt-8 text-slate-500 text-[10px] font-black uppercase tracking-widest text-center block md:hidden">
              New here? <button onClick={toggleAuth} className="text-indigo-400 underline">Create Account</button>
            </p>
          </section>

          {/* SIGNUP SIDE - FIXED: Changed justify-center to justify-start on mobile */}
          <section className={`w-full md:w-1/2 absolute md:static top-0 left-0 h-full flex flex-col justify-start md:justify-center px-8 md:px-16 transition-all duration-700 ease-in-out ${isLogin ? 'opacity-0 -translate-x-12 pointer-events-none hidden md:flex' : 'opacity-100 translate-x-0 flex'}`}>
            <AnimatePresence mode="wait">
              {!isVerifying ? (
                <motion.div key="signup-form" className="w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -20 }}>
                   <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 italic">Get Access</h2>
                   <form onSubmit={handleAuthSubmit}>
                     <AuthInput icon={<User size={18}/>} name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} />
                     <AuthInput icon={<Mail size={18}/>} name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} error={errors.email} />
                     <AuthInput icon={<Lock size={18}/>} name="password" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
                     <button disabled={isLoading} className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl shadow-xl hover:bg-indigo-500 transition-all">{isLoading ? "Requesting OTP..." : "Get OTP Verification"}</button>
                   </form>
                   <p className="mt-8 text-slate-500 text-[10px] font-black uppercase tracking-widest text-center block md:hidden">
                      Member? <button onClick={toggleAuth} className="text-indigo-400 underline">Login Portal</button>
                   </p>
                </motion.div>
              ) : (
                <motion.div key="otp-form" className="w-full" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
                   <h2 className="text-2xl md:text-3xl font-black text-white mb-2 flex items-center gap-2 tracking-tight">Code Sent! <ShieldCheck className="text-emerald-500"/></h2>
                   <p className="text-slate-400 text-[10px] font-bold uppercase mb-8 opacity-60">Please check {formData.email}</p>
                   <form onSubmit={handleVerifyOtp}>
                      <input maxLength={6} placeholder="6 - digit code" value={otpInput} onChange={(e) => setOtpInput(e.target.value)} className="w-full bg-[#0f172a] border border-slate-800 rounded-2xl py-4 md:py-5 text-indigo-400 text-center text-xl font-black tracking-widest outline-none mb-6 focus:border-indigo-600 transition-all shadow-inner" />
                      <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl">Confirm Account</button>
                      <p className="text-red-500 text-[10px] text-center font-bold uppercase mt-4">{errors.otp}</p>
                   </form>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* SLIDING ANIMATED OVERLAY (Desktop Only) */}
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