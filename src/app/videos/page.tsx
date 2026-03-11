"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Youtube, Play, Eye } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const videoCategories = ["All", "Tool Reviews", "AI Passive Income", "Crypto Automation", "Fintech Explainers"];

const mockVideos = [
  {
    id: "vid-1",
    title: "Best AI Crypto Trading Bots 2026: The Ultimate Comparison",
    thumbnail: "/vids/crypto-bots.jpg",
    category: "Tool Reviews",
    views: "42.5k",
    date: "2 days ago",
    duration: "12:45",
  },
  {
    id: "vid-2",
    title: "How to Build a $1,000/Month Passive Income Stream with AI",
    thumbnail: "/vids/passive-income.jpg",
    category: "AI Passive Income",
    views: "18.2k",
    date: "5 days ago",
    duration: "15:20",
  },
  {
    id: "vid-3",
    title: "Pionex GPT-4 Bot Strategy: Full Tutorial & Result",
    thumbnail: "/vids/pionex.jpg",
    category: "Tool Reviews",
    views: "9.1k",
    date: "1 week ago",
    duration: "10:10",
  }
];

export default function VideoHub() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVideos = mockVideos.filter(v => selectedCategory === "All" || v.category === selectedCategory);

  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-950">
      <Navbar />

      <section className="pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              YouTube <span className="text-gradient">Traffic Module</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Our latest video insights, tutorials, and strategy breakdowns. Watch, learn, and automate.
            </p>
          </div>

          {/* Categories */}
          <div className="flex items-center justify-center space-x-2 mb-12 overflow-x-auto pb-4 no-scrollbar">
            {videoCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "primary-gradient text-white"
                    : "bg-white/5 text-slate-400 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredVideos.map((vid) => (
              <VideoCard key={vid.id} video={vid} />
            ))}
          </div>

          {/* Newsletter / Guide Promo */}
          <div className="glass-effect p-8 md:p-12 rounded-[40px] border border-blue-500/10 flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="flex items-center space-x-6">
               <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center shrink-0">
                 <Youtube className="text-blue-400" size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-bold text-white mb-2">Subscribe for Weekly Alpha</h3>
                 <p className="text-slate-400 text-sm">Join 15,000+ investors getting the latest automation secrets.</p>
               </div>
             </div>
             <Link
                href="/guides"
                className="w-full md:w-auto px-10 py-4 primary-gradient rounded-2xl font-bold text-white shadow-xl shadow-blue-500/20 hover:scale-105 transition-transform text-center"
             >
                Get The Guide
             </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function VideoCard({ video }: { video: any }) { // eslint-disable-line @typescript-eslint/no-explicit-any
  return (
    <Link href={`/videos/${video.id}`} className="group">
      <div className="relative aspect-video rounded-[32px] overflow-hidden mb-6 bg-slate-900 border border-white/5">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity">
           <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <Play className="text-[#030712] fill-[#030712] translate-x-1" size={24} />
           </div>
        </div>
        <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 rounded text-[10px] font-bold text-white z-20">
           {video.duration}
        </div>
        <div className="w-full h-full primary-gradient opacity-10" />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
           <span className="text-blue-400">{video.category}</span>
           <span className="text-slate-500">{video.date}</span>
        </div>
        <h3 className="text-lg font-bold text-white leading-tight group-hover:text-blue-400 transition-colors line-clamp-2">
          {video.title}
        </h3>
        <div className="flex items-center space-x-4 text-xs text-slate-500 font-medium">
           <div className="flex items-center space-x-1">
             <Eye size={12} />
             <span>{video.views}</span>
           </div>
        </div>
      </div>
    </Link>
  );
}
