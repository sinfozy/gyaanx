"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Rocket, Brain, Languages, ShieldCheck } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
// COMPONENTS
import { GlowCard } from './GlowCard';

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#fcfaff] text-slate-900 selection:bg-violet-100 selection:text-violet-600">
      
      {/* HEADER COMPONENT CALL */}
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative px-[8%] pt-48 pb-20 text-center">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-[10%] left-[10%] h-96 w-96 rounded-full bg-violet-200/20 blur-[120px]" />
            <div className="absolute bottom-[10%] right-[10%] h-96 w-96 rounded-full bg-purple-200/20 blur-[120px]" />
          </div>

          <motion.div {...fadeInUp}>
            <span className="inline-block rounded-full bg-violet-100 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-violet-600 mb-6">
              AI Powering India
            </span>
            <h1 className="mx-auto max-w-4xl text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-8">
              Democratizing Elite Education <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent italic">
                Using Reasoning AI
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-slate-500 mb-12">
              Every student deserves a world-class teacher. We built GyaanX to be that teacher—available 24/7, speaking your language, and priced for everyone.
            </p>
          </motion.div>

          {/* STATS */}
          <div className="flex flex-wrap justify-center gap-6 mt-16">
            {[
              { label: "DAILY QUERIES", val: "50K+" },
              { label: "STUDENT RATING", val: "98%" },
              { label: "NATIVE INTERFACE", val: "Hinglish" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                className="bg-white border border-slate-100 px-10 py-8 rounded-[2rem] shadow-sm flex flex-col items-center"
              >
                <h2 className="text-4xl font-black text-violet-600 mb-2">{stat.val}</h2>
                <p className="text-xs font-bold text-slate-400 tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* STORY SECTION */}
        <section className="px-[8%] py-24 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative group"
          >
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
              className="rounded-[40px] shadow-2xl transition duration-500 group-hover:scale-[1.02]" 
              alt="Students" 
            />
            <div className="absolute -bottom-8 -right-8 bg-white/70 backdrop-blur-xl border border-white p-6 rounded-3xl shadow-xl hidden sm:block">
              <p className="text-slate-900 font-bold flex items-center gap-2 italic">
                <span className="text-red-500 text-xl">♥</span> Built for India, By India
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-6">
            <h2 className="text-4xl font-extrabold text-slate-950">The Why Behind <span className="text-violet-600">GyaanX</span></h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              In traditional classrooms, a teacher can't attend to 60 students at once. After school, coaching centers are expensive. GyaanX bridges this gap by providing an <b>AI Virtual Teacher</b> that knows every subject and explains it like a friend.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our goal is to make premium personalized coaching as common as a mobile recharge. High-quality class 6-12 learning shouldn't be a privilege; it should be a right.
            </p>
          </motion.div>
        </section>

        {/* TECH FEATURES */}
        <section className="px-[8%] py-24 bg-slate-50">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-4">How we're changing the game</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <GlowCard 
              icon={<Brain size={28}/>}
              title="Active Reasoning"
              description="Unlike simple search engines, GyaanX 'thinks'. It breaks down complex JEE/NEET concepts into logical, easy pieces."
            />
            <GlowCard 
              icon={<Languages size={28}/>}
              title="Hinglish Fluidity"
              description="Talk in English, Hindi, or a mix! Our AI adapts to how Indian students actually communicate in 2025."
            />
            <GlowCard 
              icon={<ShieldCheck size={28}/>}
              title="99.9% Accuracy"
              description="Safety and reliability come first. Our fine-tuned models ensure curriculum-safe, exam-accurate answers only."
            />
          </div>
        </section>

        {/* PROMO BOX */}
        <section className="px-[8%] py-24">
          <motion.div 
            whileInView={{ scale: [0.95, 1] }}
            className="rounded-[3rem] bg-slate-950 py-20 px-10 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 to-transparent pointer-events-none" />
            
            <h2 className="text-white text-3xl font-bold mb-4 relative z-10">Start your AI Journey Today</h2>
            <div className="flex justify-center items-end text-white gap-2 my-8 relative z-10">
              <span className="text-7xl font-black">₹199</span>
              <span className="text-slate-400 pb-2 text-lg">/month</span>
            </div>
            
            <div className="grid md:grid-cols-2 max-w-2xl mx-auto gap-4 text-left mb-12 relative z-10">
              {[
                "24/7 Unlimited Doubt Support",
                "Recorded Topic Lectures",
                "Daily Quizzes & Analysis",
                "Class 6 to Railway Exams"
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-slate-300">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400">
                    <Check size={14}/>
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <button className="bg-violet-600 text-white font-black px-12 py-5 rounded-2xl shadow-2xl shadow-violet-500/30 flex items-center gap-3 mx-auto transition hover:scale-105 active:scale-95 relative z-10">
              Start Learning Now <Rocket size={20}/>
            </button>
          </motion.div>
        </section>
      </main>

      {/* FOOTER COMPONENT CALL */}
      <Footer />
    </div>
  );
};

export default AboutPage;