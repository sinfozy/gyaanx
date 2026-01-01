"use client";
import React, { useEffect, useState } from "react";
import { 
  Users, UserCheck, ShieldAlert, Mail, Calendar, 
  TrendingUp, IndianRupee, Award, Activity 
} from "lucide-react";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/admin/users");
        const data = await res.json();
        if (res.ok) setUsers(data.users);
      } catch (err) {
        console.error("Error fetching admin stats:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // --- Calculations for Overview ---
  const totalUsers = users.length;
  const paidUsers = users.filter((u: any) => u.isPaid || u.isSubscribed).length;
  const freeUsers = totalUsers - paidUsers;
  const totalRevenue = paidUsers * 199;
  const conversionRate = totalUsers > 0 ? ((paidUsers / totalUsers) * 100).toFixed(1) : 0;

  return (
    <div className="space-y-10">
      {/* 1. TOP SECTION: TITLE */}
      <div>
        <h1 className="text-4xl font-black italic tracking-tighter uppercase text-slate-900">Neural Overview</h1>
        <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Business Intelligence & User Analytics</p>
      </div>

      {/* 2. STATS CARDS (Overview Section) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Registrations */}
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex items-center gap-5">
           <div className="bg-blue-50 p-4 rounded-2xl text-blue-600"><Users size={28}/></div>
           <div>
              <p className="text-2xl font-black italic tracking-tighter">{totalUsers}</p>
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Total Students</p>
           </div>
        </div>

        {/* Total Paid (199/-) */}
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-emerald-100 flex items-center gap-5">
           <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-600"><Award size={28}/></div>
           <div>
              <p className="text-2xl font-black italic tracking-tighter text-emerald-600">{paidUsers}</p>
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Pro Members</p>
           </div>
        </div>

        {/* Total Revenue */}
        <div className="bg-[#020617] p-6 rounded-[2rem] shadow-xl flex items-center gap-5 text-white">
           <div className="bg-violet-600 p-4 rounded-2xl text-white shadow-lg shadow-violet-500/20"><IndianRupee size={28}/></div>
           <div>
              <p className="text-2xl font-black italic tracking-tighter">₹{totalRevenue.toLocaleString()}</p>
              <p className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Total Revenue</p>
           </div>
        </div>

        {/* Conversion Stats */}
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex items-center gap-5">
           <div className="bg-orange-50 p-4 rounded-2xl text-orange-600"><TrendingUp size={28}/></div>
           <div>
              <p className="text-2xl font-black italic tracking-tighter">{conversionRate}%</p>
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Conversion</p>
           </div>
        </div>
      </div>

      {/* 3. DETAILED ANALYTICS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Table List (Left side - Large) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Activity size={18} className="text-violet-600" />
            <h2 className="text-xl font-black italic uppercase text-slate-900 tracking-tighter">Registered Database</h2>
          </div>
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                  <th className="px-8 py-5">Student</th>
                  <th className="px-8 py-5">Email</th>
                  <th className="px-8 py-5">Access Tier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {users.map((user: any) => (
                  <tr key={user._id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-6 font-bold text-slate-900 italic uppercase tracking-tight">{user.name}</td>
                    <td className="px-8 py-6 text-slate-500 font-medium text-xs">{user.email}</td>
                    <td className="px-8 py-6">
                      {user.isPaid || user.isSubscribed ? (
                        <span className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full w-fit">
                          <UserCheck size={10}/> Paid Pro
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-full w-fit">
                          <ShieldAlert size={10}/> Unpaid
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {loading && <div className="p-20 text-center font-black italic text-violet-600 animate-pulse uppercase">Syncing Neural Data...</div>}
          </div>
        </div>

        {/* Summary Breakdown (Right side - Small) */}
        <div className="space-y-6">
          <h2 className="text-xl font-black italic uppercase text-slate-900 tracking-tighter">Live Breakdown</h2>
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 space-y-8">
            {/* Pro Progress */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <p className="text-[10px] font-black uppercase text-slate-400 italic">Paid Users</p>
                <p className="text-lg font-black italic text-emerald-600">{paidUsers}</p>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 transition-all duration-1000" 
                  style={{ width: `${conversionRate}%` }}
                ></div>
              </div>
            </div>

            {/* Free Progress */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <p className="text-[10px] font-black uppercase text-slate-400 italic">Free Users</p>
                <p className="text-lg font-black italic text-slate-900">{freeUsers}</p>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-slate-300 transition-all duration-1000" 
                  style={{ width: `${100 - Number(conversionRate)}%` }}
                ></div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-50">
               <div className="bg-violet-50 p-6 rounded-3xl text-center">
                  <p className="text-violet-600 font-black italic text-2xl uppercase tracking-tighter">Prime Tier</p>
                  <p className="text-[10px] font-bold uppercase text-violet-400">Exclusive AI Access Active</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}