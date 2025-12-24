import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GyaanX - AI-Powered Learning Platform for Students",
  description:
    "GyaanX is an AI-driven learning platform designed to help students excel in their studies with personalized tutoring, interactive content, and real-time doubt solving.",
    keywords: [
      "GyaanX",
      "AI Learning Platform",
      "Personalized Tutoring",
      "Interactive Learning",
      "Doubt Solving",
      "Student Education",
      "Online Learning",
      "AI Tutors",
      "Educational Technology",
      "Learning App"
    ],
    openGraph: {
      title: 'GyaanX - AI-Powered Learning Platform for Students',
      description: 'GyaanX is an AI-driven learning platform designed to help students excel in their studies with personalized tutoring, interactive content, and real-time doubt solving.',
      siteName: 'GyaanX',
     
}   }
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      {/* Quick Stats Section */}
      <section className="bg-white py-12 border-y border-slate-100">
        <div className="container mx-auto px-4 flex flex-wrap justify-around gap-8">
            <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">50,000+</div>
                <div className="text-slate-500 text-sm">Doubts Solved Daily</div>
            </div>
            <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">98%</div>
                <div className="text-slate-500 text-sm">Satisfaction Rate</div>
            </div>
            <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">Hinglish</div>
                <div className="text-slate-500 text-sm">Native Language Support</div>
            </div>
        </div>
      </section>
      <Pricing />
     <Footer/>
    </main>
  );
}