import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { tools } from "@/data/tools";
import { notFound } from "next/navigation";
import { CheckCircle2, XCircle, Star, ArrowLeft, PlayCircle, ShieldCheck, Zap, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return tools.map((tool) => ({
    id: tool.id,
  }));
}

export default async function ToolDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tool = tools.find((t) => t.id === id);

  if (!tool) {
    notFound();
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />

      <section className="pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="container mx-auto px-6">
          <Link 
            href="/tools" 
            className="inline-flex items-center space-x-2 text-slate-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Directory</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/5">
                <div>
                  <div className="flex items-center space-x-3 text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
                    <Zap size={14} />
                    <span>{tool.category}</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{tool.name}</h1>
                  <p className="text-xl text-slate-400 font-medium">{tool.tagline}</p>
                </div>
                <div className="flex items-center space-x-4">
                   <div className="bg-slate-900 glass-effect p-4 px-6 rounded-2xl flex items-center space-x-3 border border-white/5">
                      <Star className="text-emerald-400 fill-emerald-400" size={24} />
                      <span className="text-2xl font-bold text-white">{tool.rating}</span>
                      <span className="text-slate-500 text-sm">/ 5.0</span>
                   </div>
                </div>
              </div>
              <div className="mb-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-white/[0.03] border border-white/5 rounded-3xl flex items-center justify-center soft-shadow">
                      <Zap className="text-indigo-400" size={36} />
                    </div>
                    <div>
                      <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{tool.name}</h1>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1 px-3 py-1 bg-emerald-500/5 rounded-full text-emerald-400 text-[10px] font-bold uppercase tracking-widest border border-emerald-500/10">
                          <Star size={10} className="fill-emerald-400" />
                          <span>{tool.rating} Rating</span>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{tool.category}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xl text-slate-400 leading-relaxed font-medium mb-16">
                  {tool.tagline}
                </p>

                {/* Video / Image Placeholder */}
                <div className="aspect-video bg-slate-900/50 rounded-[40px] border border-white/5 flex flex-col items-center justify-center group cursor-pointer overflow-hidden relative mb-16 soft-shadow">
                  <div className="absolute inset-0 primary-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                  <PlayCircle size={64} className="text-slate-800 group-hover:text-indigo-500 transition-colors duration-500" strokeWidth={1} />
                  <p className="mt-4 text-slate-600 text-xs font-bold uppercase tracking-widest">Tutorial & Analysis Brief</p>
                </div>

                <div className="prose prose-invert prose-indigo max-w-none">
                  <h2 className="text-2xl font-bold text-white mb-8 italic">Strategic Overview</h2>
                  <p className="text-slate-400 leading-relaxed font-medium mb-12">
                    {tool.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                    <div className="bg-white/[0.02] border border-white/5 p-10 rounded-[32px]">
                      <h3 className="flex items-center space-x-3 text-emerald-400 font-bold mb-8 uppercase tracking-widest text-xs">
                         <div className="w-2 h-2 rounded-full bg-emerald-500" />
                         <span>Key Advantages</span>
                      </h3>
                      <ul className="space-y-6">
                        {tool.pros.map((pro, i) => (
                          <li key={i} className="flex items-start space-x-4 text-slate-300 font-medium text-sm">
                            <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white/[0.02] border border-white/5 p-10 rounded-[32px]">
                      <h3 className="flex items-center space-x-3 text-red-400 font-bold mb-8 uppercase tracking-widest text-xs">
                         <div className="w-2 h-2 rounded-full bg-red-500" />
                         <span>Risk Factors</span>
                      </h3>
                      <ul className="space-y-6">
                        {tool.cons.map((con, i) => (
                          <li key={i} className="flex items-start space-x-4 text-slate-400 font-medium text-sm">
                            <XCircle size={18} className="text-red-500/50 shrink-0" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:w-96">
              <div className="sticky top-32">
                <div className="bg-white/[0.03] border border-white/5 p-10 rounded-[40px] soft-shadow">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-lg text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-8">
                    <span>Limited Engagement</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-6">Access Asset</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium mb-10">
                    Deploy {tool.name} with our exclusive partner rates and priority API access.
                  </p>

                  <div className="space-y-4 mb-10">
                    <SidebarDetail label="Type" value={tool.category} />
                    <SidebarDetail label="Security" value="Vetted" />
                    <SidebarDetail label="Commission" value="N/A" />
                  </div>

                  <div className="mb-8 p-5 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl relative">
                    <h4 className="text-white font-bold text-sm mb-2">What Does This Platform Actually Do?</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      AI platforms monitor markets, execute strategies, and rebalance portfolios automatically. They allow investors to experiment with automation instead of manually trading markets.
                    </p>
                  </div>

                  <a
                    href={tool.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-5 primary-gradient rounded-2xl font-bold text-white soft-shadow hover:brightness-110 active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-3 group"
                  >
                    <span>{tool.name === "Aurum AI Investing Platform" ? "Explore Aurum Platform" : "Explore Platform"}</span>
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </a>

                  <p className="mt-8 text-center text-slate-600 text-[10px] font-medium leading-relaxed uppercase tracking-tighter">
                    Independent Analysis • Institutional Grade
                  </p>
                </div>

                {/* Security Badge */}
                <div className="mt-8 flex items-center justify-center space-x-3 text-slate-500">
                   <ShieldCheck size={16} />
                   <span className="text-[10px] font-bold uppercase tracking-widest">Verified by AI Wealth Engine</span>
                </div>
              </div>
            </div>
          </div>

          {/* Affiliate Disclosure */}
          <div className="mt-24 pt-12 border-t border-white/5 text-center px-6">
            <p className="text-slate-600 text-[10px] leading-relaxed max-w-2xl mx-auto uppercase tracking-tighter font-medium">
              Disclosure: This page contains affiliate links. If you utilize these tools, we may earn a commission. This enables the continuation of our independent, AI-driven research. See our complete <Link href="/disclosure" className="underline hover:text-white">Affiliate Disclosure</Link> here.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function SidebarDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
      <span className="text-slate-500 font-bold uppercase tracking-widest">{label}</span>
      <span className="text-white font-medium">{value}</span>
    </div>
  );
}
