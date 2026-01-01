"use client";

import React, { useState, useEffect } from "react";
import { Ticket, Plus, Copy, Check, Trash2, Clock } from "lucide-react";

export default function AdminCoupons() {
  const [days, setDays] = useState(90);
  const [customCode, setCustomCode] = useState("");
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState("");

  // 1. Fetch Existing Coupons
  const fetchCoupons = async () => {
  try {
    const res = await fetch("/api/admin/coupons");
    
    // Check karein ki response sahi hai ya nahi
    if (!res.ok) {
      console.error("Failed to fetch coupons: Status", res.status);
      return;
    }

    const data = await res.json();
    if (data.coupons) {
      setCoupons(data.coupons);
    }
  } catch (error) {
    console.error("Fetch Error:", error);
  }
};

  useEffect(() => {
    fetchCoupons();
  }, []);

  // 2. Generate New Coupon
  const handleGenerate = async () => {
    setLoading(true);
    const res = await fetch("/api/admin/coupons", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ days, customCode: customCode.toUpperCase() }),
    });

    if (res.ok) {
      setCustomCode("");
      fetchCoupons();
      alert("Coupon Generated Successfully!");
    }
    setLoading(false);
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-violet-600 rounded-2xl text-white shadow-lg">
            <Ticket size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter text-slate-900">Coupon Master</h1>
            <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">GyaanX Admin Control Panel</p>
          </div>
        </div>

        {/* --- GENERATOR SECTION --- */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 mb-8">
          <h2 className="text-xl font-black mb-6 flex items-center gap-2 italic"> <Plus size={20} className="text-violet-600"/> Create New Access Code</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-[10px] font-black uppercase text-slate-400 mb-2 ml-2 tracking-widest">Validity (Days)</label>
              <input 
                type="number" 
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 font-bold outline-none focus:border-violet-600"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase text-slate-400 mb-2 ml-2 tracking-widest">Custom Code (Optional)</label>
              <input 
                type="text" 
                placeholder="E.G. FREE90"
                value={customCode}
                onChange={(e) => setCustomCode(e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 font-bold outline-none focus:border-violet-600 uppercase"
              />
            </div>
            <div className="flex items-end">
              <button 
                onClick={handleGenerate}
                disabled={loading}
                className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black uppercase text-xs hover:bg-violet-600 transition-all active:scale-95"
              >
                {loading ? "Generating..." : "Generate Code"}
              </button>
            </div>
          </div>
        </div>

        {/* --- LIST SECTION --- */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
          <h2 className="text-xl font-black mb-6 flex items-center gap-2 italic"> <Clock size={20} className="text-violet-600"/> Active Coupons</h2>
          <div className="space-y-3">
            {coupons.length === 0 && <p className="text-slate-400 text-center py-10 font-bold italic">No active coupons found.</p>}
            {coupons.map((c: any) => (
              <div key={c._id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-violet-200 transition-all">
                <div className="flex items-center gap-4">
                  <div className="bg-white px-4 py-2 rounded-xl font-black text-slate-900 border border-slate-200 tracking-wider">
                    {c.code}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{c.expiryDays} Days Access</p>
                    <p className={`text-[9px] font-bold uppercase ${c.isUsed ? 'text-rose-500' : 'text-emerald-500'}`}>
                      {c.isUsed ? 'Already Used' : 'Available'}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => copyToClipboard(c.code)}
                  className="p-3 hover:bg-violet-50 rounded-xl transition-colors group"
                >
                  {copied === c.code ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} className="text-slate-400 group-hover:text-violet-600" />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}