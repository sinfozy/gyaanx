"use client";

import React, { useState } from "react";
import Script from "next/script";
import { Lock, Sparkles, ShieldCheck, Check, ArrowRight } from "lucide-react";

interface PaywallProps {
  onSuccess: () => void;
}

export const Paywall = ({ onSuccess }: PaywallProps) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    const email = localStorage.getItem("userEmail") || "student@gyaanx.ai";
    const name = localStorage.getItem("userName") || "Student";

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: 1 * 100, // ₹199.00
      currency: "INR",
      name: "GyaanX Prime",
      description: "Unlock AI Powered Learning Batch",
      handler: async function (response: any) {
        const res = await fetch("/api/subscription/save", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, paymentId: response.razorpay_payment_id }),
        });

        if (res.ok) {
          onSuccess();
        }
      },
      prefill: { name, email },
      theme: { color: "#7c3aed" },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6 relative">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="max-w-2xl w-full bg-white rounded-[3.5rem] shadow-2xl border border-slate-100 p-10 lg:p-16 text-center animate-in zoom-in duration-300">
        <div className="flex justify-center mb-8">
          <div className="p-5 bg-violet-50 rounded-full">
            <Sparkles className="w-12 h-12 text-violet-600" />
          </div>
        </div>
        <h2 className="text-4xl font-black text-slate-950 mb-3 italic tracking-tighter">Level Up Your Journey</h2>
        <p className="text-slate-500 mb-10 text-lg leading-relaxed font-medium">Unlock full access to 24/7 AI Tutors, Recorded Batches, and Premium PDF notes.</p>

        <div className="bg-[#020617] rounded-[2.5rem] p-10 text-white text-center shadow-xl mb-10">
          <span className="bg-violet-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest italic flex items-center gap-2 mx-auto w-fit mb-4">
            <Lock size={12} /> Pro Access Only
          </span>
          <div className="text-6xl font-black mb-1 italic">₹199</div>
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-tighter">One-time Lifetime Upgrade Fee</p>
        </div>

        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-violet-600 hover:bg-violet-500 text-white py-5 rounded-3xl font-black text-xl flex items-center justify-center gap-4 transition-all shadow-xl shadow-violet-100 hover:-translate-y-1 active:scale-95 disabled:opacity-50"
        >
          {loading ? "Initializing Secure Bridge..." : <>Pay & Start Learning <ArrowRight /></>}
        </button>

        <div className="mt-8 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase italic">
            <ShieldCheck className="text-emerald-500" size={14} /> Encrypted
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase italic">
            <Check className="text-violet-600" size={14} /> Unlimited Access
          </div>
        </div>
      </div>
    </div>
  );
};