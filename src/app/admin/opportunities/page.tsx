"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScannerAgent, Opportunity } from "@/lib/agents/ScannerAgent";
import { ContentAgent, GeneratedContent } from "@/lib/agents/ContentAgent";
import { TrendingUp, Plus, RefreshCcw, Search, BarChart3, Mail, Youtube, Twitter } from "lucide-react";
import { useState, useEffect } from "react";

export default function OpportunitiesDashboard() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);
  const [generatingFor, setGeneratingFor] = useState<string | null>(null);
  const [generatedContent, setGeneratedContent] = useState<Record<string, GeneratedContent>>({});

  const scanner = new ScannerAgent();
  const creator = new ContentAgent();

  const fetchOpportunities = async () => {
    setLoading(true);
    const data = await scanner.scanSources();
    setOpportunities(data);
    setLoading(false);
  };

  const handleGenerate = async (opp: Opportunity) => {
    setGeneratingFor(opp.id);
    const content = await creator.generateForOpportunity(opp);
    setGeneratedContent(prev => ({ ...prev, [opp.id]: content }));
    setGeneratingFor(null);
  };

  useEffect(() => {
    fetchOpportunities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-950">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="text-3xl font-display font-bold text-white mb-2">Offer Discovery <span className="text-gradient">Engine</span></h1>
              <p className="text-slate-400">Autonomous identification of high-yield AI & Fintech opportunities.</p>
            </div>
            <button 
              onClick={fetchOpportunities}
              disabled={loading}
              className="flex items-center space-x-2 px-6 py-3 glass-effect rounded-xl text-white font-bold hover:bg-white/5 transition-all text-sm border border-white/10"
            >
              <RefreshCcw size={18} className={loading ? "animate-spin" : ""} />
              <span>Scan Now</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            <StatCard icon={<Search className="text-blue-400" />} label="Sources Scanned" value="24" />
            <StatCard icon={<TrendingUp className="text-purple-400" />} label="Trends Detected" value={opportunities.length.toString()} />
            <StatCard icon={<BarChart3 className="text-emerald-400" />} label="Avg. Profit Score" value="7.8" />
            <StatCard icon={<Plus className="text-amber-400" />} label="New Opportunities" value="3" />
          </div>

          <div className="space-y-6">
            {opportunities.map((opp) => (
              <OpportunityRow 
                key={opp.id} 
                opp={opp} 
                isGenerating={generatingFor === opp.id}
                generated={generatedContent[opp.id]}
                onGenerate={() => handleGenerate(opp)} 
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="glass-effect p-6 rounded-2xl border border-white/5">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">{icon}</div>
        <div>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{label}</p>
          <p className="text-2xl font-bold text-white leading-tight">{value}</p>
        </div>
      </div>
    </div>
  );
}

function OpportunityRow({ opp, onGenerate, isGenerating, generated }: { opp: Opportunity; onGenerate: () => void; isGenerating: boolean; generated?: GeneratedContent }) {
  return (
    <div className="glass-effect rounded-3xl border border-white/5 overflow-hidden transition-all hover:border-white/10 group">
      <div className="p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase rounded tracking-widest">{opp.source}</span>
              <h3 className="text-xl font-bold text-white">{opp.title}</h3>
            </div>
            <p className="text-slate-400 text-sm max-w-2xl">{opp.description}</p>
          </div>
          
          <div className="flex items-center space-x-6">
             <div className="text-center">
                <p className="text-slate-500 text-[10px] font-bold uppercase mb-1">Profit Score</p>
                <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg font-bold">
                  {opp.profitPotentialScore}/10
                </div>
             </div>
             <button 
                onClick={onGenerate}
                disabled={isGenerating || !!generated}
                className={`px-6 py-2.5 rounded-xl font-bold transition-all text-sm flex items-center space-x-2 ${
                  generated ? "bg-white/5 text-slate-500 cursor-default" : "primary-gradient text-white shadow-lg shadow-blue-500/20 hover:scale-105"
                }`}
             >
                {isGenerating ? (
                  <RefreshCcw size={16} className="animate-spin" />
                ) : generated ? (
                  <span>Content Ready</span>
                ) : (
                  <>
                    <Plus size={16} />
                    <span>Generate Assets</span>
                  </>
                )}
             </button>
          </div>
        </div>

        {/* Generated Assets Preview */}
        {generated && (
          <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
             <div className="p-4 bg-white/5 rounded-2xl space-y-3">
                <div className="flex items-center space-x-2 text-blue-400 text-xs font-bold uppercase">
                  <Mail size={14} />
                  <span>Blog Draft</span>
                </div>
                <p className="text-white text-sm font-bold truncate">{generated.blog.title}</p>
                <p className="text-slate-500 text-xs line-clamp-2">SEO: {generated.blog.seoKeywords.join(", ")}</p>
             </div>
             <div className="p-4 bg-white/5 rounded-2xl space-y-3">
                <div className="flex items-center space-x-2 text-red-400 text-xs font-bold uppercase">
                  <Youtube size={14} />
                  <span>Video Hook</span>
                </div>
                <p className="text-white text-sm italic line-clamp-2">&quot;{generated.youtube.scriptHook}&quot;</p>
             </div>
             <div className="p-4 bg-white/5 rounded-2xl space-y-3">
                <div className="flex items-center space-x-2 text-sky-400 text-xs font-bold uppercase">
                  <Twitter size={14} />
                  <span>Social Draft</span>
                </div>
                <p className="text-white text-xs line-clamp-3">{generated.social.twitter}</p>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
