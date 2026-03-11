"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { tools } from "@/data/tools";
import { Search, ArrowUpRight, Bot, Star } from "lucide-react";
import { useState, useMemo } from "react";
import Link from "next/link";

const categories = ["All", "Trading Bots", "Yield Aggregators", "Portfolio Tools", "Security"];

export default function ToolDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            tool.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || tool.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <main className="min-h-screen relative selection:bg-indigo-500/30">
      <Navbar />

      <section className="pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
              Strategic <span className="text-gradient">Tool Directory</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Vetted automation platforms and institutional-grade tools to scale your digital asset portfolio.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mb-16 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:max-w-md group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
              <input
                type="text"
                placeholder="Search institutional tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0f172a]/80 backdrop-blur-xl border border-white/5 rounded-2xl py-4.5 pl-14 pr-6 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-all soft-shadow"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-4 no-scrollbar w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap border ${
                    activeCategory === cat
                      ? "primary-gradient border-transparent text-white soft-shadow"
                      : "bg-white/[0.03] border-white/5 text-slate-500 hover:text-slate-300 hover:bg-white/[0.06]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results Grid */}
          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-white/[0.02] rounded-[40px] border border-dashed border-white/5">
              <Search className="mx-auto text-slate-700 mb-6" size={48} />
              <p className="text-slate-400 text-lg font-medium">No tools found matching your criteria.</p>
              <button onClick={() => {setSearchQuery(""); setActiveCategory("All");}} className="mt-4 text-indigo-400 font-bold uppercase tracking-widest text-xs hover:underline">Clear all filters</button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ToolCard({ tool }: { tool: any }) { // eslint-disable-line @typescript-eslint/no-explicit-any
  return (
    <Link href={`/tools/${tool.id}`} className="group relative h-full">
      <div className="h-full p-8 md:p-10 rounded-[40px] bg-white/[0.02] border border-white/[0.04] group-hover:border-indigo-500/20 group-hover:bg-white/[0.04] transition-all duration-500 soft-shadow flex flex-col">
        <div className="flex items-start justify-between mb-8">
          <div className="w-16 h-16 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-500">
             <Bot className="text-indigo-400" size={28} />
          </div>
          <div className="flex items-center space-x-1.5 px-3 py-1 bg-emerald-500/5 rounded-full text-emerald-400 text-[10px] font-bold uppercase tracking-widest border border-emerald-500/10">
            <Star size={10} className="fill-emerald-400" />
            <span>{tool.rating} Rating</span>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors duration-300">{tool.name}</h3>
        <p className="text-slate-500 text-sm leading-relaxed font-medium mb-10 line-clamp-2">
          {tool.tagline}
        </p>

        <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">{tool.category}</span>
          <div className="flex items-center space-x-2 text-white text-xs font-bold uppercase tracking-widest group-hover:text-indigo-400 transition-colors">
            <span>Examine Asset</span>
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </Link>
  );
}
