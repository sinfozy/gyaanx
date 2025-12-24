import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, PlayCircle, Star, Users } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-20 lg:pt-16 lg:pb-32">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-1/2 -z-10 h-[800px] w-full -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)]" />
      <div className="absolute -top-24 -left-24 h-96 w-96 bg-indigo-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side: Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <Badge className="mb-6 bg-emerald-50 text-emerald-700 border-emerald-200 px-4 py-1.5 text-sm font-medium hover:bg-emerald-100 transition-all flex w-fit mx-auto lg:mx-0 gap-2">
            <Sparkles className="h-4 w-4" /> 24/7 AI-Powered Learning
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6">
            Meet Your New <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600">
              AI Virtual Teacher
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
           कक्षा 6-12 और प्रतियोगी परीक्षाओं की तैयारी अब होगी इंटरैक्टिव। केवल <span className="text-indigo-600 font-bold underline decoration-indigo-200 underline-offset-4">₹199/</span>माह पर हिंग्लिश में असीमित संदेह पूछें। <span className="text-indigo-600 font-bold underline decoration-indigo-200 underline-offset-4">Hinglish.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
           <Link href="/auth">
               <Button  size="lg" className="h-16 px-10 bg-indigo-600 hover:bg-indigo-700 text-lg font-bold rounded-2xl shadow-xl shadow-indigo-200 transition-all hover:scale-105 active:scale-95">
              Get Started for ₹199
            </Button>
           </Link>
            
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                   <Users className="h-5 w-5 text-slate-400" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex text-yellow-400 mb-0.5">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-slate-500 font-medium">Trusted by 10k+ Students in India</p>
            </div>
          </div>
        </div>

        {/* Right Side: Visuals */}
        <div className="flex-1 relative w-full max-w-[550px]">
          <div className="relative z-10 rounded-[2.5rem] border-[12px] border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] overflow-hidden bg-slate-100 aspect-[4/5] sm:aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop" 
              alt="AI Teacher" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            
            {/* AI Assistant Chat Bubble */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md border border-indigo-100 p-5 rounded-3xl shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-1000">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 mb-1">AI Teacher GyaanX</p>
                  <p className="text-sm text-slate-600 leading-snug">"Namaste! Aapka koi bhi doubt ho, mujhse poochiye. Main Hindi aur English dono samajhta hoon."</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative floating badge - ADJUSTED POSITION */}
          <div className="absolute top-16 -right-10 bg-white p-5 rounded-2xl shadow-2xl z-20 hidden md:block border border-slate-100 animate-bounce-slow">
             <div className="text-indigo-600 font-black text-2xl leading-none">99.9%</div>
             <div className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Accuracy</div>
          </div>
        </div>
      </div>
    </section>
  );
}