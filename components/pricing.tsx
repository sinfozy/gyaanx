"use client";

import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto relative">
          
          {/* Floating Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
            <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
              <Zap className="h-4 w-4 fill-current" /> Limited Time Offer
            </div>
          </div>

          <div className="rounded-[3rem] bg-slate-950 p-8 md:p-1
          0 text-center text-white relative overflow-hidden border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            
            {/* Animated Background Mesh */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15)_0%,transparent_50%)]" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15)_0%,transparent_50%)]" />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                Quality Education, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                    Affordable for Everyone
                </span>
              </h2>
              <p className="text-slate-400 mb-12 text-lg max-w-xl mx-auto">
                Unlock the power of AI learning for the price of a pizza. 
                Everything you need to excel in exams.
              </p>
              
              <div className="flex items-center justify-center gap-3 mb-10">
                <div className="flex flex-col items-end">
                    <span className="text-slate-500 line-through text-xl">₹999</span>
                    <div className="flex items-baseline gap-1">
                        <span className="text-7xl font-black text-white tracking-tighter">₹199</span>
                        <span className="text-xl text-slate-400 font-medium">/mo</span>
                    </div>
                </div>
              </div>

              {/* Feature Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-3xl mx-auto mb-12">
                {[
                  "Unlimited AI Doubts",
                  "Class 6-12 Coverage",
                  "Hinglish Interaction",
                  "PDF Notes & Guides",
                  "Practice Mock Tests",
                  "24/7 Availability"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 group">
                    <div className="bg-indigo-500/10 border border-indigo-500/20 p-1.5 rounded-lg group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* CUSTOM ANIMATED BUTTON */}
              <button className="group relative w-full sm:w-auto overflow-hidden bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-bold px-12 py-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl shadow-indigo-500/20">
                <span className="relative z-10 flex items-center justify-center gap-2">
                    Start Your Journey Today <Sparkles className="h-5 w-5" />
                </span>
                
                {/* The expanding border animation */}
                <span className="absolute bottom-0 left-1/2 w-0 h-[4px] bg-white transition-all duration-500 ease-out -translate-x-1/2 group-hover:w-full" />
                
                {/* Subtle Shine Effect */}
                <span className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[100%]" />
              </button>
              
              <div className="mt-8 flex items-center justify-center gap-4 opacity-60">
                <div className="flex -space-x-2">
                    {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-slate-700 border border-slate-800" />)}
                </div>
                <p className="text-sm text-slate-400">Join 10,000+ happy learners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}