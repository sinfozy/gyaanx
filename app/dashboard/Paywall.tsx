

"use client";
import React, { useState } from "react";
import Script from "next/script";
import { Lock, Sparkles, ArrowRight, Ticket, Loader2 } from "lucide-react";

interface PaywallProps {
  onSuccess: () => void;
}

export const Paywall = ({ onSuccess }: PaywallProps) => {
  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponLoading, setCouponLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    // Razorpay logic...
    alert("Payment logic calling...");
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
        onSuccess();
      } else {
        alert("Invalid Coupon");
      }
    } catch (e) {
      alert("Error");
    } finally {
      setCouponLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="max-w-2xl w-full bg-white rounded-[3.5rem] shadow-2xl p-10 text-center border border-slate-200">
        
        <h2 className="text-4xl font-black text-slate-950 mb-3 italic tracking-tighter uppercase">LEVEL UP</h2>
        
        {/* Price Card */}
        <div className="bg-[#020617] rounded-[2.5rem] p-10 text-white shadow-xl mb-10">
          <div className="text-6xl font-black mb-1 italic">₹199</div>
        </div>

        {/* Main Unlock Button */}
        <button
          onClick={handlePayment}
          disabled={loading || couponLoading}
          className="w-full bg-violet-600 text-white py-5 rounded-3xl font-black text-xl flex items-center justify-center gap-4 active:scale-95 mb-8"
        >
          {loading ? "Processing..." : <>Unlock All Features <ArrowRight /></>}
        </button>

        {/* --- COUPON SECTION (MUST BE VISIBLE) --- */}
        <div className="bg-slate-50 p-6 rounded-[2rem] border border-dashed border-slate-300">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
            <Ticket size={14} className="text-violet-600" /> Have a Batch Code?
          </p>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="ENTER CODE HERE"
              className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold uppercase outline-none focus:ring-2 focus:ring-violet-500"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button 
              onClick={handleCouponRedeem}
              disabled={couponLoading || !couponCode}
              className="bg-slate-900 text-white px-8 py-3 rounded-xl text-xs font-black uppercase hover:bg-violet-600 disabled:opacity-50"
            >
              {couponLoading ? "..." : "Apply"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};