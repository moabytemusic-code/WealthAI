"use client";

import { LayoutDashboard, TrendingUp, Search, Zap, ExternalLink, Activity, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

const opportunities = [
  {
    id: 1,
    name: "DefiLlama Automation Suite",
    category: "Monitoring Tools",
    whyItMatters: "Trending significantly on Twitter, providing institution-level token tracking for retail.",
    beginnerAppeal: "Moderate - clean UI but advanced data.",
    monetization: "High (New Affiliate Program 40% RevShare)",
    contentScore: 92,
    score: 8.8,
    action: "Write Blog Post"
  },
  {
    id: 2,
    name: "TradeSanta AI",
    category: "AI Investing Apps",
    whyItMatters: "Major update to entirely beginner-friendly cloud trading bots.",
    beginnerAppeal: "High - Drag and drop logic.",
    monetization: "Medium (Standard CPA)",
    contentScore: 95,
    score: 9.1,
    action: "Add to Explorer"
  },
  {
    id: 3,
    name: "Zignaly Crypto Social Trading",
    category: "Portfolio Automation",
    whyItMatters: "Exploding search volume around 'Zignaly copy trading'.",
    beginnerAppeal: "High - copy trading is an easy entry point.",
    monetization: "High",
    contentScore: 88,
    score: 8.5,
    action: "Test as Affiliate Offer"
  }
];

export default function OpportunityScanner() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-300">
      <div className="flex items-center justify-between px-10 py-6 border-b border-white/5 bg-[#0f172a]/50">
        <div className="flex items-center space-x-3 text-white">
          <div className="w-10 h-10 primary-gradient rounded-xl flex items-center justify-center soft-shadow">
            <Activity className="text-white" size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight">AI Wealth Engine</span>
        </div>
        <Link href="/admin/analytics" className="text-indigo-400 text-sm font-bold uppercase tracking-widest hover:text-indigo-300">
          Back to Admin
        </Link>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 border-r border-white/5 p-6 h-[calc(100vh-89px)]">
          <nav className="space-y-2 text-sm font-bold uppercase tracking-widest">
            <Link href="/admin/analytics" className="flex items-center space-x-3 p-3 rounded-xl text-slate-500 hover:bg-white/5">
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </Link>
            <Link href="/admin/opportunities" className="flex items-center space-x-3 p-3 rounded-xl text-slate-500 hover:bg-white/5">
              <TrendingUp size={18} />
              <span>Pipelines</span>
            </Link>
            <Link href="/admin/scanner" className="flex items-center space-x-3 p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
              <Search size={18} />
              <span>AI Scanner</span>
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10 overflow-y-auto h-[calc(100vh-89px)]">
          
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">AI Opportunity Scanner</h1>
              <p className="text-slate-400">Real-time signals identifying emerging AI investing tools and affiliate programs.</p>
            </div>
            <button className="px-6 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white font-bold hover:bg-white/5 transition-colors flex items-center space-x-2">
              <Zap size={16} className="text-indigo-400" />
              <span>Force Rescan</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
               <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Signals Found Today</h3>
               <p className="text-4xl font-bold text-white">42</p>
            </div>
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
               <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Avg Content Score</h3>
               <p className="text-4xl font-bold text-emerald-400">85<span className="text-xl text-slate-500">/100</span></p>
            </div>
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
               <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">High Value Affiliates</h3>
               <p className="text-4xl font-bold text-white">3</p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
            <ShieldCheck size={20} className="text-indigo-400" />
            <span>High Priority Opportunities</span>
          </h2>

          <div className="space-y-6">
            {opportunities.map(opp => (
              <div key={opp.id} className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex flex-col xl:flex-row gap-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[50px] rounded-full group-hover:bg-indigo-500/10 transition-colors" />
                
                <div className="flex-1 relative z-10">
                   <div className="flex items-center space-x-3 mb-4">
                     <span className="px-3 py-1 bg-white/[0.04] border border-white/10 rounded-md text-[10px] font-bold uppercase tracking-widest text-slate-400">
                       {opp.category}
                     </span>
                     <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                       Score: {opp.score}
                     </span>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-3 flex items-center space-x-2">
                     <span>{opp.name}</span>
                     <ExternalLink size={16} className="text-slate-600 hover:text-indigo-400 cursor-pointer" />
                   </h3>
                   <div className="space-y-3 mb-6">
                     <p className="text-slate-400 text-sm"><strong className="text-slate-300">Why It Matters:</strong> {opp.whyItMatters}</p>
                     <p className="text-slate-400 text-sm"><strong className="text-slate-300">Beginner Appeal:</strong> {opp.beginnerAppeal}</p>
                     <p className="text-slate-400 text-sm"><strong className="text-slate-300">Monetization:</strong> <span className="text-emerald-400">{opp.monetization}</span></p>
                   </div>
                   
                   <div className="flex items-center space-x-4">
                      <div className="px-5 py-2.5 bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center space-x-2 hover:bg-indigo-500/30 transition-colors cursor-pointer">
                        <span>{opp.action}</span>
                        <ArrowRight size={14} />
                      </div>
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                        Content Score: {opp.contentScore}
                      </span>
                   </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
