"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Shield, Mail, Download, ArrowRight, Lock, Zap } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GuidesPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        router.push("/thanks");
      } else {
        const errorData = await res.json();
        console.error("Subscription failed:", errorData);
        // Fallback to thanks page anyway to prevent blocking the user
        router.push("/thanks");
      }
    } catch (error) {
      console.error("Network error during submission:", error);
      router.push("/thanks");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen relative selection:bg-indigo-500/30">
      <Navbar />

      <section className="pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Left Content */}
            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-lg text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8">
                <Zap size={14} className="text-indigo-400" />
                <span>Beginner-Friendly Strategy Guide</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-[1.1]">
                7 AI Tools Automating <br />
                <span className="text-gradient">Crypto Investing in 2026</span>
              </h1>
              
              <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
                Most investors still trade manually. Discover the specific tools investors are using to automate trading, manage risk, and build smarter portfolios effortlessly.
              </p>

              <div className="space-y-6 mb-12">
                <BenefitItem text="How AI is transforming modern investing." />
                <BenefitItem text="What AI trading tools actually do behind the scenes." />
                <BenefitItem text="The simple 3-step process for beginners to start animating." />
                <BenefitItem text="Exclusive showcase of 7 featured automation platforms." />
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-10 pt-10 border-t border-white/5">
                <div className="flex items-center space-x-3 text-slate-500">
                  <Lock size={16} />
                  <span className="text-xs font-bold uppercase tracking-tighter">SECURE & COMPLIANT</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-500">
                  <Shield size={16} />
                  <span className="text-xs font-bold uppercase tracking-tighter">GDPR ADHERENT</span>
                </div>
              </div>
            </div>

            {/* Right Form / Preview */}
            <div className="flex-1 w-full max-w-md">
              <div className="relative">
                {/* Subtle background glow */}
                <div className="absolute -inset-10 bg-indigo-500/10 blur-[100px] rounded-full -z-10" />
                
                <div className="bg-[#0f172a]/80 backdrop-blur-xl rounded-[40px] p-8 md:p-12 border border-white/5 soft-shadow">
                  <div className="aspect-[4/5] bg-slate-900 rounded-3xl mb-10 overflow-hidden relative group border border-white/5">
                    <div className="absolute inset-0 primary-gradient opacity-5 group-hover:opacity-10 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                        <Download size={40} className="text-indigo-400 mb-4 opacity-50" />
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-relaxed">
                          Guide Preview<br />
                          <span className="text-[10px] opacity-70">Confidential Framework</span>
                        </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="relative">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                      <input
                        type="email"
                        required
                        placeholder="Professional Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-black/40 border border-white/10 rounded-2xl py-4.5 pl-14 pr-5 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4.5 primary-gradient rounded-2xl font-bold text-white soft-shadow hover:brightness-110 active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-3"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send Confidential Access</span>
                          <ArrowRight size={18} strokeWidth={2.5} />
                        </>
                      )}
                    </button>
                    
                    <p className="text-center text-slate-600 text-[10px] font-medium leading-relaxed px-4 mt-6">
                      By accessing the blueprint, you agree to our terms. We protect your data with bank-grade encryption.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-start space-x-4 group">
      <div className="mt-1 w-6 h-6 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-indigo-500/20">
        <CheckCircle2 size={14} className="text-indigo-400" />
      </div>
      <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{text}</span>
    </div>
  );
}
