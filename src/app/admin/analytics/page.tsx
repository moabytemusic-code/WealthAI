"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, PieChart, ArrowUpRight, ArrowDownRight, MousePointer2, DollarSign } from "lucide-react";

export default function AnalyticsDashboard() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-950">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="text-3xl font-display font-bold text-white mb-2">Performance <span className="text-gradient">Analytics</span></h1>
              <p className="text-slate-400">Tracking traffic, leads, and affiliate revenue conversion.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <MetricCard title="Total Traffic" value="48.2k" change="+12.4%" positive={true} icon={<Users className="text-blue-400" />} />
            <MetricCard title="Daily Leads" value="42" change="+8.2%" positive={true} icon={<MousePointer2 className="text-purple-400" />} />
            <MetricCard title="Conv. Rate" value="3.4%" change="-0.5%" positive={false} icon={<PieChart className="text-amber-400" />} />
            <MetricCard title="Estimated Revenue" value="$4,250" change="+24.1%" positive={true} icon={<DollarSign className="text-emerald-400" />} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Traffic Sources */}
            <div className="lg:col-span-2 glass-effect p-8 rounded-[40px] border border-white/5">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-white">Traffic Sources</h3>
                <Link href="#" className="text-blue-400 text-xs font-bold uppercase hover:underline">View Detailed Report</Link>
              </div>
              <div className="space-y-6">
                <SourceBar label="YouTube Search" percentage={45} color="bg-red-500" />
                <SourceBar label="SEO Articles" percentage={32} color="bg-blue-500" />
                <SourceBar label="Reddit Interactions" percentage={18} color="bg-orange-500" />
                <SourceBar label="X / Twitter" percentage={5} color="bg-slate-500" />
              </div>
            </div>

            {/* Top Performing Content */}
            <div className="lg:col-span-1 glass-effect p-8 rounded-[40px] border border-white/5">
              <h3 className="text-xl font-bold text-white mb-8">Top Content</h3>
              <div className="space-y-6">
                 <ContentItem title="Best AI Crypto Bots 2026" views="12.4k" leads="142" />
                 <ContentItem title="7 AI Tools for Passive Income" views="8.2k" leads="318" />
                 <ContentItem title="Pionex GPT-4 Strategy" views="4.1k" leads="86" />
                 <ContentItem title="Crypto Automation Basics" views="3.8k" leads="24" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function MetricCard({ title, value, change, positive, icon }: { title: string, value: string, change: string, positive: boolean, icon: React.ReactNode }) {
  return (
    <div className="glass-effect p-8 rounded-[32px] border border-white/5">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">{icon}</div>
        <div className={`flex items-center space-x-1 text-xs font-bold ${positive ? 'text-emerald-400' : 'text-red-400'}`}>
          {positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          <span>{change}</span>
        </div>
      </div>
      <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">{title}</p>
      <p className="text-3xl font-bold text-white leading-tight">{value}</p>
    </div>
  );
}

function SourceBar({ label, percentage, color }: { label: string, percentage: number, color: string }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-sm font-medium">
        <span className="text-slate-300">{label}</span>
        <span className="text-white">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full`} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

function ContentItem({ title, views, leads }: { title: string, views: string, leads: string }) {
  return (
    <div className="flex items-center justify-between group cursor-pointer">
      <div className="space-y-1">
        <p className="text-white text-sm font-bold group-hover:text-blue-400 transition-colors line-clamp-1">{title}</p>
        <p className="text-slate-500 text-xs">{views} views</p>
      </div>
      <div className="text-right">
        <p className="text-emerald-400 text-sm font-bold">+{leads}</p>
        <p className="text-slate-600 text-[10px] uppercase font-bold tracking-tighter">Leads</p>
      </div>
    </div>
  );
}

import Link from "next/link";
