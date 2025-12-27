

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Star, Users, MessageCircle, Phone, ArrowRight } from "lucide-react"; 
import Link from "next/link";
import Script from "next/script";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-20 lg:pt-16 lg:pb-32">
      
      {/* --- Tawk.to Script --- */}
      <Script id="tawk-to-script" strategy="lazyOnload">
        {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/694286f0f5aaa6197ee50315/1jcltu75e';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        `}
      </Script>

      <div className="absolute top-0 left-1/2 -z-10 h-[800px] w-full -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <Badge className="mb-6 bg-emerald-50 text-emerald-700 border-emerald-200 px-4 py-1.5 text-sm font-medium hover:bg-emerald-100 transition-all flex w-fit mx-auto lg:mx-0 gap-2">
            <Sparkles className="h-4 w-4" /> AI-Driven Growth batch
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6 italic">
            Meet Your New <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600">
              AI Virtual Teacher
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed font-medium italic">
           कक्षा 6-12 और प्रतियोगी परीक्षाओं की तैयारी अब होगी आसान। हिंग्लिश में डाउट पूछें, कभी भी - कहीं भी।
          </p>
          
          <div className="flex flex-col gap-6 items-center lg:items-start">
            {/* Primary Action */}
            <Link href="/auth">
               <Button size="lg" className="h-16 px-12 bg-indigo-600 hover:bg-slate-950 text-white text-lg font-black rounded-2xl shadow-xl shadow-indigo-100 transition-all hover:scale-105 active:scale-95 uppercase tracking-widest flex items-center gap-3 italic">
                Enroll Now ₹199 <ArrowRight size={20}/>
               </Button>
            </Link>

            {/* Support Buttons Row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {/* --- Phone Button (To the Left) --- */}
                
                   

                {/* --- WhatsApp Button (To the Right) --- */}
               
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                   <Users className="h-5 w-5 text-slate-400" />
                </div>
              ))}
            </div>
            <div className="text-sm font-medium">
              <div className="flex text-yellow-400 mb-0.5">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-slate-400">12,000+ Students improved scores via GyaanX</p>
            </div>
          </div>
        </div>

        {/* Right Side: Visuals */}
        <div className="flex-1 relative w-full max-w-[550px]">
          <div className="relative z-10 rounded-[3rem] border-[12px] border-white shadow-3xl overflow-hidden bg-slate-100 aspect-square group">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop" 
              alt="AI Teacher" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            
            {/* AI Assistant Chat Bubble */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md border border-indigo-100 p-6 rounded-3xl shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                   <span className="text-white text-xs font-black italic">GX</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 mb-1">AI Teacher GyaanX</p>
                  <p className="text-sm text-slate-600 font-medium italic">"Solving doubts 24/7. Ask me anything in Hinglish!"</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute top-16 -right-10 bg-white p-5 rounded-2xl shadow-2xl z-20 hidden md:block border border-slate-100">
             <div className="text-indigo-600 font-black text-2xl tracking-tighter italic">99.2%</div>
             <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">AI Accuracy</div>
          </div>
        </div>

      </div>
    </section>
  );
}