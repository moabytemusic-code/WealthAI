"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import Link from "next/link";
import { ChevronRight, CheckCircle2, Bot, ArrowUpRight } from "lucide-react";
import { tools } from "@/data/tools";

const questions = [
  {
    id: "experience",
    title: "Are you a beginner or more experienced?",
    options: [
      { label: "Beginner - Keep it simple", value: "beginner" },
      { label: "Experienced - I want advanced control", value: "experienced" }
    ]
  },
  {
    id: "goal",
    title: "Do you want full automation or just monitoring?",
    options: [
      { label: "Full Automation - Trade for me", value: "automation" },
      { label: "Monitoring - Alert me so I can decide", value: "monitoring" }
    ]
  },
  {
    id: "focus",
    title: "Are you focused on crypto only or broader investing tools?",
    options: [
      { label: "Crypto Only", value: "crypto" },
      { label: "Broader Markets", value: "broad" }
    ]
  },
  {
    id: "setup",
    title: "Do you want a simple 3-step setup or more customization?",
    options: [
      { label: "Simple Setup", value: "simple" },
      { label: "High Customization", value: "custom" }
    ]
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        setShowResults(true);
      }
    }, 400);
  };

  const getRecommendations = () => {
    // Basic logic mapping answers to tools from our directory
    // If beginner = true, filter beginnerFriendly = true
    return tools.filter(t => {
      if (answers.experience === "beginner" && !t.beginnerFriendly) return false;
      return true;
    }).slice(0, 3);
  };

  return (
    <main className="min-h-screen relative selection:bg-indigo-500/30">
      <Navbar />

      <section className="pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="container mx-auto px-6 max-w-3xl">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Find the Right <span className="text-gradient">AI Investing App</span>
            </h1>
            <p className="text-lg text-slate-400 font-medium">
              Answer 4 quick questions to discover the best automation platform for your exact needs and risk tolerance.
            </p>
          </div>

          {!showResults ? (
            <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-8 md:p-12 soft-shadow">
              <div className="flex items-center justify-between mb-8">
                <span className="text-indigo-400 text-sm font-bold uppercase tracking-widest">Question {currentQuestion + 1} of {questions.length}</span>
                <div className="flex space-x-1">
                  {questions.map((_, idx) => (
                    <div key={idx} className={`h-1.5 w-8 rounded-full ${idx <= currentQuestion ? "bg-indigo-500" : "bg-white/10"}`} />
                  ))}
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
                {questions[currentQuestion].title}
              </h2>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(questions[currentQuestion].id, option.value)}
                    className="w-full text-left p-6 rounded-2xl bg-black/20 border border-white/5 hover:border-indigo-500/50 hover:bg-white/[0.04] transition-all flex items-center justify-between group"
                  >
                    <span className="text-white font-medium text-lg">{option.label}</span>
                    <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-indigo-400">
                       <div className="w-2.5 h-2.5 rounded-full bg-transparent group-hover:bg-indigo-400 transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                   <CheckCircle2 size={32} className="text-emerald-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Your AI Profile is Ready</h2>
                <p className="text-slate-400">Based on your answers, we recommend exploring these platforms.</p>
              </div>

              <div className="space-y-6">
                {getRecommendations().map(tool => (
                  <div key={tool.id} className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-indigo-500/30 transition-colors">
                     <div className="flex items-center space-x-6">
                        <div className="w-16 h-16 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-center shrink-0">
                          <Bot className="text-indigo-400" size={28} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                          <p className="text-slate-400 text-sm mb-3">{tool.tagline}</p>
                          <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-widest rounded-full">Best Match</span>
                        </div>
                     </div>
                     <Link href={`/tools/${tool.id}`} className="w-full md:w-auto px-6 py-3 primary-gradient rounded-xl font-bold text-white whitespace-nowrap flex items-center justify-center space-x-2 soft-shadow hover:brightness-110 transition-all">
                       <span>Explore Platform</span>
                       <ArrowUpRight size={16} />
                     </Link>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <button onClick={() => {setShowResults(false); setCurrentQuestion(0); setAnswers({});}} className="text-slate-500 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">
                  Retake Quiz
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}
