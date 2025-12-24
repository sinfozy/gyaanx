"use client";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const GlowCard = ({ icon, title, description }: GlowCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative group overflow-hidden rounded-[32px] border border-slate-200 bg-white p-10 transition-all duration-500 hover:bg-slate-950 hover:border-transparent"
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(124, 58, 237, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition-colors duration-500 group-hover:bg-white group-hover:text-slate-900">
          {icon}
        </div>
        <h3 className="mb-4 text-xl font-bold transition-colors group-hover:text-white">
          {title}
        </h3>
        <p className="text-slate-500 leading-relaxed transition-colors group-hover:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
};