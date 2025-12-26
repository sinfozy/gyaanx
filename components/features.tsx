"use client";

import React from 'react';
import { 
  Bot, 
  Video, 
  FileText, 
  Mic, 
  CheckCircle, 
  Trophy,
  LucideIcon 
} from 'lucide-react';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  Icon: LucideIcon;
  colorName: string; // Used for dynamic class building
}

const features: FeatureItem[] = [
  {
    id: 1,
    title: "AI Tutor",
    description: "Ask 10,000+ questions monthly with advanced AI reasoning and explanations.",
    Icon: Bot,
    colorName: "blue",
  },
  
  {
    id: 3,
    title: "Handwritten",
    description: "Premium PDF notes for Class 6-12 & SSC/Railways competitive exams.",
    Icon: FileText,
    colorName: "orange",
  },
  
  {
    id: 5,
    title: "Quizzes",
    description: "Chapter-wise tests and real-time analytics to track your exam readiness.",
    Icon: CheckCircle,
    colorName: "cyan",
  },

];

export default function Features() {
  // Mapping for dynamic tailwind classes since template literals aren't always purged correctly
  const themeColors: Record<string, any> = {
    blue: { border: "hover:border-blue-500", iconBg: "bg-blue-50", iconActive: "group-hover:bg-blue-600", text: "text-blue-500", bar: "bg-blue-500", shadow: "group-hover:shadow-blue-200" },
    purple: { border: "hover:border-purple-500", iconBg: "bg-purple-50", iconActive: "group-hover:bg-purple-600", text: "text-purple-500", bar: "bg-purple-500", shadow: "group-hover:shadow-purple-200" },
    orange: { border: "hover:border-orange-500", iconBg: "bg-orange-50", iconActive: "group-hover:bg-orange-600", text: "text-orange-500", bar: "bg-orange-500", shadow: "group-hover:shadow-orange-200" },
    green: { border: "hover:border-green-500", iconBg: "bg-green-50", iconActive: "group-hover:bg-green-600", text: "text-green-500", bar: "bg-green-500", shadow: "group-hover:shadow-green-200" },
    cyan: { border: "hover:border-cyan-500", iconBg: "bg-cyan-50", iconActive: "group-hover:bg-cyan-600", text: "text-cyan-500", bar: "bg-cyan-500", shadow: "group-hover:shadow-cyan-200" },
    yellow: { border: "hover:border-yellow-500", iconBg: "bg-yellow-50", iconActive: "group-hover:bg-yellow-600", text: "text-yellow-500", bar: "bg-yellow-500", shadow: "group-hover:shadow-yellow-200" },
  };

  return (
    <section className="bg-[#f9faff] py-20 flex items-center ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => {
          const colors = themeColors[feature.colorName];
          return (
            <div 
              key={feature.id}
              className={`group relative flex flex-col items-start p-10 bg-white border-[1px] border-slate-200 rounded-[2.5rem] transition-all duration-500 ease-out cursor-pointer overflow-hidden shadow-sm ${colors.border}`}
            >
              {/* Background Decorations */}
              <div className={`absolute -top-10 -right-10 w-40 h-40 blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${colors.bar}`} />
              <div className="absolute top-8 right-8 w-24 h-24 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity" 
                   style={{ backgroundImage: 'radial-gradient(currentColor 2px, transparent 2px)', backgroundSize: '15px 15px' }}></div>

              {/* Icon Container: Handles Solid Fill and Move-Up-Right animation */}
              <div className={`relative mb-8 p-6 rounded-2xl shadow-sm transition-all duration-500 
                ${colors.iconBg} ${colors.iconActive} ${colors.shadow}
                group-hover:translate-x-1 group-hover:-translate-y-2 group-hover:-rotate-2`}
              >
                <feature.Icon 
                  className={`w-9 h-9 transition-colors duration-500 ${colors.text} group-hover:text-white`} 
                  strokeWidth={2} 
                />
              </div>

              {/* Content */}
              <h3 className="text-[1.4rem] font-bold text-slate-800 mb-4 tracking-tight group-hover:text-black">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-[1.05rem] leading-relaxed font-medium">
                {feature.description}
              </p>

              {/* BORDER BOTTOM ANIMATION: Grows from center */}
              <div className={`absolute bottom-0 left-0 w-full h-[6px] transition-transform duration-500 ease-in-out scale-x-0 group-hover:scale-x-100 origin-center ${colors.bar}`} />
            </div>
          );
        })}
      </div>
    </section>
  );
}