import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />

      <section className="pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link 
            href="/blog" 
            className="inline-flex items-center space-x-2 text-slate-400 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Insights</span>
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center space-x-3 text-blue-400 text-sm font-bold uppercase tracking-wider mb-6">
              <span>{post.category}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-[1.1]">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-white/5">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                   <div className="w-10 h-10 primary-gradient rounded-full flex items-center justify-center text-white">
                     <User size={18} />
                   </div>
                   <div>
                     <p className="text-white font-bold text-sm">{post.author}</p>
                     <p className="text-slate-500 text-xs">Lead Analyst</p>
                   </div>
                </div>
                <div className="h-8 w-px bg-white/5 hidden sm:block" />
                <div className="flex items-center space-x-4 text-slate-400 text-sm">
                   <div className="flex items-center space-x-1.5">
                     <Calendar size={14} />
                     <span>{post.date}</span>
                   </div>
                   <div className="flex items-center space-x-1.5">
                     <Clock size={14} />
                     <span>{post.readTime}</span>
                   </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                 <button className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-slate-400 hover:text-white transition-all">
                   <Share2 size={18} />
                 </button>
              </div>
            </div>
          </header>

          {/* Content Placeholder */}
          <article className="prose prose-invert prose-blue max-w-none mb-20">
            <p className="text-xl text-slate-300 leading-relaxed mb-8 font-medium">
              {post.excerpt}
            </p>
            <div className="aspect-[21/9] bg-slate-900 rounded-[40px] mb-12 border border-white/5 overflow-hidden">
               <div className="w-full h-full primary-gradient opacity-10" />
            </div>
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                In the rapidly evolving landscape of 2026, artificial intelligence has moved beyond a buzzword into the core of how wealth is generated. For the individual investor, the barrier to entry has never been lower, yet the complexity of choosing the right tool has never been higher.
              </p>
              <h2 className="text-white font-display text-2xl font-bold mt-12 mb-6">Why Automation is No Longer Optional</h2>
              <p>
                Manual trading and portfolio management are becoming increasingly difficult in a market that operates at millisecond speeds. AI algorithms can analyze thousands of data points simultaneously, identifying patterns that are invisible to the human eye. This doesn&apos;t just increase potential returns; it significantly reduces the emotional stress of investing.
              </p>
              <div className="p-8 bg-blue-500/5 rounded-3xl border border-blue-500/20 my-12">
                <p className="text-blue-400 font-bold mb-2">Editor&apos;s Tip:</p>
                <p className="text-slate-300 italic">&quot;The key to successful automation is not finding a &apos;magic button,&apos; but selecting a framework that matches your risk tolerance and goals. Start small, test often, and scale what works.&quot;</p>
              </div>
              {/* More content would go here */}
              <p>
                As we continue to monitor the integration of AI within the fintech sector, one thing remains clear: those who embrace automation today are building the foundational assets of tomorrow.
              </p>
            </div>
          </article>

          {/* Inline CTA */}
          <div className="glass-effect p-10 rounded-[40px] border border-blue-500/10 text-center">
             <h3 className="text-2xl font-bold text-white mb-4">Master AI Automation</h3>
             <p className="text-slate-400 mb-8 max-w-lg mx-auto">
               Ready to go deeper? Download our master guide for a step-by-step walkthrough on setting up your first AI passive income stream.
             </p>
             <Link
                href="/guides"
                className="inline-flex items-center space-x-2 px-10 py-4 primary-gradient rounded-2xl font-bold text-white shadow-xl shadow-blue-500/20 hover:scale-105 transition-all"
             >
                <span>Free Guide Download</span>
                <ArrowRight size={20} />
             </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
