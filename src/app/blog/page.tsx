"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";
import { Search, Calendar, User, ArrowUpRight, TrendingUp } from "lucide-react";
import { useState, useMemo } from "react";
import Link from "next/link";

const categories = ["All", "Trading Strategies", "Tool Updates", "Market Analysis", "Case Studies"];

export default function BlogHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <main className="min-h-screen relative selection:bg-indigo-500/30">
      <Navbar />

      <section className="pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
             <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-lg text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-8">
                <span>Intelligence & Analysis</span>
             </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
              Strategic <span className="text-gradient">Insights</span> Hub
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Expert analysis on AI trading frameworks, automation protocols, and the future of digital wealth.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mb-16 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:max-w-md group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
              <input
                type="text"
                placeholder="Search research papers..."
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

          {/* Featured Post Teaser */}
          <div className="mb-20">
            {filteredPosts.length > 0 && activeCategory === "All" && searchQuery === "" && (
               <div className="group relative overflow-hidden rounded-[40px] border border-white/5 bg-white/[0.02] p-1 shadow-2xl">
                  <div className="flex flex-col lg:flex-row items-center gap-10 p-8 md:p-12">
                     <div className="flex-1 space-y-6">
                        <div className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-widest text-indigo-400">
                           <TrendingUp size={14} />
                           <span>Featured Insight</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white group-hover:text-indigo-300 transition-colors leading-tight">
                           {filteredPosts[0].title}
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed font-medium line-clamp-3">
                           {filteredPosts[0].excerpt}
                        </p>
                        <div className="flex items-center space-x-6 text-slate-500 text-xs font-bold uppercase tracking-widest">
                           <span className="flex items-center space-x-2"><Calendar size={14} /> <span>{filteredPosts[0].date}</span></span>
                           <span className="flex items-center space-x-2"><User size={14} /> <span>{filteredPosts[0].author}</span></span>
                        </div>
                        <Link href={`/blog/${filteredPosts[0].id}`} className="inline-flex items-center space-x-3 px-8 py-4 primary-gradient rounded-2xl font-bold text-white soft-shadow hover:brightness-110 active:scale-95 transition-all">
                           <span>Read Full Brief</span>
                           <ArrowUpRight size={18} strokeWidth={2.5} />
                        </Link>
                     </div>
                     <div className="flex-1 aspect-video w-full bg-slate-900 rounded-3xl overflow-hidden relative border border-white/5 group-hover:border-indigo-500/20 transition-all duration-500">
                        <div className="absolute inset-0 primary-gradient opacity-10 group-hover:opacity-20 transition-opacity" />
                     </div>
                  </div>
               </div>
            )}
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.slice(activeCategory === "All" && searchQuery === "" ? 1 : 0).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Lead Magnet CTA */}
          <div className="mt-32 p-12 md:p-20 rounded-[48px] bg-[#020617] border border-indigo-500/10 relative overflow-hidden text-center soft-shadow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-indigo-500/10 blur-[100px] rounded-full -z-10" />
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
              Want the Full <span className="text-gradient">Strategic Framework?</span>
            </h3>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Access the Master Guide and join 15,000+ investors receiving weekly automation intelligence.
            </p>
            <Link href="/guides" className="inline-flex items-center space-x-3 px-10 py-5 primary-gradient rounded-2xl font-bold text-white soft-shadow hover:brightness-110 active:scale-95 transition-all">
              <span>Access Master Guide Now</span>
              <ArrowUpRight size={20} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function BlogCard({ post }: { post: any }) { // eslint-disable-line @typescript-eslint/no-explicit-any
  return (
    <Link href={`/blog/${post.id}`} className="group flex flex-col h-full">
      <div className="aspect-[16/10] rounded-[32px] overflow-hidden mb-8 bg-slate-950 border border-white/5 relative group-hover:border-indigo-500/20 transition-all duration-500">
        <div className="absolute inset-0 primary-gradient opacity-5 group-hover:opacity-10 transition-opacity" />
         <div className="absolute top-5 right-5 w-10 h-10 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center border border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight size={20} className="text-white" />
         </div>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 px-2 py-0.5 bg-indigo-500/5 rounded border border-indigo-500/10">{post.category}</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{post.date}</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors line-clamp-2 leading-[1.3]">{post.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-10 line-clamp-3 font-medium flex-grow">
          {post.excerpt}
        </p>
        <div className="pt-6 border-t border-white/5 flex items-center justify-between text-slate-500 text-[10px] font-bold uppercase tracking-widest">
           <span>By {post.author}</span>
           <span className="text-xs text-white group-hover:text-indigo-400 transition-colors">Read Brief</span>
        </div>
      </div>
    </Link>
  );
}
