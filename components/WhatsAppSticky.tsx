"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhatsAppSticky() {
  const whatsappUrl = "https://wa.me/916262232329?text=Hello%20GyaanX%20Team!%20I%20have%20a%20doubt%20regarding%20the%20Prime%20Batch.";

  return (
    // 'right-8' moves it to the correct side. 'z-[999]' keeps it on top.
    <div className="fixed bottom-8 left-3 z-[999] flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Speech Bubble (Added white background and border back) */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="bg-white px-4 py-2 rounded-2xl shadow-2xl border border-slate-100 text-slate-900 font-bold text-[11px] italic pointer-events-auto"
      >
        Doubt? Chat with us! 👋
      </motion.div>

      {/* WhatsApp Link Container */}
      <Link 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="pointer-events-auto"
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-16 w-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg cursor-pointer overflow-hidden border-2 border-white/20"
        >
          {/* Logo - Removed brightness-0 invert so it shows the official color */}
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp Chat" 
            className="h-10 w-10" 
          />
          
          {/* Active Online Status indicator */}
          <span className="absolute top-1 right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
          </span>
        </motion.div>
      </Link>
    </div>
  );
}