"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, Lock, User, ArrowRight, BrainCircuit, Zap, Brain, ShieldCheck, Loader2
} from "lucide-react";
import Link from "next/link";

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
    setErrors({});

    try {
      const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        if (isLogin) {
          // Case 1: Direct Dashboard (Already Verified)
          if (!data.needsVerification) {
            localStorage.setItem("userEmail", data.email);
            localStorage.setItem("userName", data.name);
            router.push("/dashboard");
          } else {
            // Case 2: Login but needs OTP (Ghost User)
            setIsVerifying(true);
            setIsLogin(false);
          }
        } else {
          // Case 3: Signup Success -> Show OTP Screen
          setIsVerifying(true);
        }
      } else {
        setErrors({ email: data.message });
      }
    } catch (err) {
      setErrors({ email: "Error connecting to server." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/verify-and-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, otpInput: otpInput }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("userEmail", data.email);
        localStorage.setItem("userName", data.name);
        router.push("/onboarding");
      } else {
        setErrors({ otp: data.message || "Invalid OTP" });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#020617] flex items-center justify-center p-4 overflow-x-hidden relative font-sans">
      <div className="relative w-full max-w-[1050px] min-h-[600px] md:h-[650px] bg-slate-900/40 backdrop-blur-3xl rounded-[30px] md:rounded-[40px] border border-white/5 shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all pt-28 pb-12 md:py-0">
        
        <Link href="/" className="absolute top-8 left-8 md:left-10 z-50 flex items-center gap-2">
          <BrainCircuit className="text-indigo-500 w-6 h-6" />
          <span className="text-white font-black text-2xl uppercase">Gyaan<span className="text-indigo-500">X</span></span>
        </Link>

        <div className="relative w-full h-full flex items-center">
          
          {/* LOGIN SIDE */}
          <section className={`w-full md:w-1/2 flex flex-col justify-start md:justify-center px-8 md:px-16 transition-all duration-700 ${!isLogin ? 'opacity-0 translate-x-12 pointer-events-none hidden md:flex' : 'opacity-100 translate-x-0 flex'}`}>
            <h2 className="text-4xl font-extrabold text-white mb-2 italic">Welcome back!</h2>
            <p className="text-slate-400 mb-8 text-sm uppercase tracking-widest italic opacity-60">Verified Users Only</p>
            <form onSubmit={handleAuthSubmit}>
              <AuthInput icon={<Mail size={18}/>} name="email" placeholder="Registered Email" value={formData.email} onChange={handleInputChange} error={errors.email} />
              <AuthInput icon={<Lock size={18}/>} name="password" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
              <button disabled={isLoading} className="w-full h-14 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-all disabled:opacity-50">
                {isLoading ? <Loader2 className="animate-spin" /> : <>Login Portal <ArrowRight size={18} /></>}
              </button>
            </form>
            <p className="mt-8 text-slate-500 text-[10px] font-black uppercase text-center block md:hidden tracking-widest">
              New here? <button onClick={toggleAuth} className="text-indigo-400 underline">Create Account</button>
            </p>
          </section>

          {/* SIGNUP / OTP SIDE */}
          <section className={`w-full md:w-1/2 absolute md:static top-0 left-0 h-full flex flex-col justify-start md:justify-center px-8 md:px-16 transition-all duration-700 ${isLogin ? 'opacity-0 -translate-x-12 pointer-events-none hidden md:flex' : 'opacity-100 translate-x-0 flex'}`}>
            <AnimatePresence mode="wait">
              {!isVerifying ? (
                <motion.div key="signup" className="w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                   <h2 className="text-4xl font-extrabold text-white mb-8 italic">Get Access</h2>
                   <form onSubmit={handleAuthSubmit}>
                     <AuthInput icon={<User size={18}/>} name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} />
                     <AuthInput icon={<Mail size={18}/>} name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} error={errors.email} />
                     <AuthInput icon={<Lock size={18}/>} name="password" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
                     <button disabled={isLoading} className="w-full h-14 bg-indigo-600 text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-indigo-500 transition-all disabled:opacity-50 shadow-xl">
                        {isLoading ? <Loader2 className="animate-spin" /> : "Get OTP Verification"}
                     </button>
                   </form>
                   <p className="mt-8 text-slate-500 text-[10px] font-black uppercase text-center block md:hidden tracking-widest">
                      Member? <button onClick={toggleAuth} className="text-indigo-400 underline">Login Portal</button>
                   </p>
                </motion.div>
              ) : (
                <motion.div key="otp" className="w-full" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                   <h2 className="text-3xl font-black text-white mb-2 flex items-center gap-2 tracking-tight uppercase italic">Code Sent! <ShieldCheck className="text-emerald-500"/></h2>
                   <p className="text-slate-400 text-xs font-bold uppercase mb-8 opacity-60 tracking-widest">Check {formData.email}</p>
                   <form onSubmit={handleVerifyOtp}>
                      <input maxLength={6} placeholder="6 - digit code" value={otpInput} onChange={(e) => setOtpInput(e.target.value)} className="w-full bg-[#0f172a] border border-slate-800 rounded-2xl py-5 text-indigo-400 text-center text-xl font-black tracking-[10px] outline-none mb-6 focus:border-indigo-600 transition-all" />
                      <button disabled={isLoading} className="w-full h-14 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl flex items-center justify-center disabled:opacity-50">
                        {isLoading ? <Loader2 className="animate-spin" /> : "Confirm Account"}
                      </button>
                      <p className="text-red-500 text-[10px] text-center font-bold uppercase mt-4 tracking-widest">{errors.otp}</p>
                   </form>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* DESKTOP OVERLAY */}
          <motion.div animate={{ x: isLogin ? "0%" : "-100%" }} transition={{ type: "spring", stiffness: 100, damping: 20 }} className="absolute top-0 right-0 w-1/2 h-full hidden md:block z-40 overflow-hidden shadow-2xl">
            <div className="relative w-full h-full bg-indigo-600 flex items-center px-14">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800" />
              <div className="relative z-10 w-full text-center text-white">
                 <h3 className="text-4xl font-black mb-10 italic uppercase tracking-tighter">{isLogin ? "Hello Learner!" : "Sign In Back!"}</h3>
                 <p className="opacity-60 mb-12 text-sm max-w-xs mx-auto font-medium leading-relaxed">India's first AI faculty system built for high school & competitive brilliance.</p>
                 <button onClick={toggleAuth} className="bg-white text-indigo-800 font-bold py-4 px-12 rounded-2xl uppercase text-[10px] tracking-widest hover:scale-105 active:scale-95 shadow-2xl transition-all">
                   {isLogin ? "I want to Create Account" : "Go to Login Portal"}
                 </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}