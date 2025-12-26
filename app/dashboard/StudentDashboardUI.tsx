"use client";

import React, { useState, useRef } from "react";
import {
  LayoutGrid, Layers, Calendar, Database, BarChart2,
  Settings, Bell, FlaskConical, Calculator, Camera, X, Check
} from "lucide-react";
import AIChatBot from "@/components/AIchatBox";

export const StudentDashboardUI = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [displayName, setDisplayName] = useState("Student");
  const [profileImg, setProfileImg] = useState("https://api.dicebear.com/7.x/avataaars/svg?seed=Felix");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const navItems = [
    { id: "dashboard", name: "Dashboard", icon: <LayoutGrid size={20} /> },
    { id: "batches", name: "My Batches", icon: <Layers size={20} /> },
    { id: "schedule", name: "My Schedule", icon: <Calendar size={20} /> },
    { id: "library", name: "Study Library", icon: <Database size={20} /> },
    { id: "performance", name: "Performance", icon: <BarChart2 size={20} /> },
  ];

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden relative">
      <aside className="w-[260px] bg-white border-r border-slate-200 p-6 flex flex-col shrink-0">
        <div className="text-2xl font-extrabold text-violet-600 mb-10 tracking-tight">GyaanX</div>
        <nav className="flex-grow flex flex-col gap-1">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => setActiveTab(item.id)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${activeTab === item.id ? "bg-violet-50 text-violet-600 shadow-sm" : "text-slate-500 hover:bg-slate-50"}`}>
              {item.icon} {item.name}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-grow overflow-y-auto p-8 lg:p-12">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Welcome back, {displayName}! 👋</h1>
            <p className="text-slate-500 italic">• Pro Plan Active</p>
          </div>
          <div className="flex items-center gap-6">
            <Bell size={24} className="text-slate-400" />
            <div onClick={() => setIsProfileModalOpen(true)} className="w-12 h-12 rounded-full border-2 border-violet-600 p-0.5 overflow-hidden cursor-pointer">
              <img src={profileImg} alt="avatar" className="rounded-full w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Dashboard Content Here */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           <div className="lg:col-span-2 bg-violet-600 p-8 rounded-[2rem] text-white">
              <h2 className="text-2xl font-bold">Physics: Quantum Mechanics</h2>
              <button className="mt-4 bg-white text-violet-600 px-6 py-2 rounded-xl font-bold">Join Now</button>
           </div>
        </div>
      </main>
      <AIChatBot />
    </div>
  );
};