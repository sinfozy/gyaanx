"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ShieldCheck, Loader2 } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/admin/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      alert("Invalid Admin Credentials");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-[#0B1221] border border-white/10 rounded-[2.5rem] p-10 shadow-2xl text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-violet-600 rounded-2xl text-white shadow-lg shadow-violet-500/20">
            <ShieldCheck size={32} />
          </div>
        </div>
        <h1 className="text-3xl font-black italic text-white uppercase tracking-tighter mb-2">Admin Access</h1>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-8">Secure Neural Terminal</p>

        <form onSubmit={handleLogin} className="space-y-4 text-left">
          <div>
            <label className="text-[10px] font-black uppercase text-slate-500 ml-4 mb-2 block tracking-widest">Admin Email</label>
            <input 
              type="email" required 
              className="w-full bg-slate-900 border border-white/5 rounded-2xl px-6 py-4 text-white font-bold outline-none focus:border-violet-600"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-[10px] font-black uppercase text-slate-500 ml-4 mb-2 block tracking-widest">Master Password</label>
            <input 
              type="password" required 
              className="w-full bg-slate-900 border border-white/5 rounded-2xl px-6 py-4 text-white font-bold outline-none focus:border-violet-600"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button 
            type="submit" disabled={loading}
            className="w-full bg-violet-600 hover:bg-white text-white hover:text-black py-5 rounded-2xl font-black uppercase text-sm tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2 shadow-xl shadow-violet-500/10"
          >
            {loading ? <Loader2 className="animate-spin" size={20}/> : "Authorize Access"}
          </button>
        </form>
      </div>
    </div>
  );
}