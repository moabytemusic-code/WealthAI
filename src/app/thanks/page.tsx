import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, ExternalLink, Bot, Coins, BarChart3, DownloadCloud, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen relative selection:bg-indigo-500/30">
      <Navbar />

      <section className="pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-10">
            <div className="w-20 h-20 bg-emerald-500/5 border border-emerald-500/10 rounded-full flex items-center justify-center animate-fade-in">
              <CheckCircle size={40} className="text-emerald-500" strokeWidth={1.5} />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
            Strategic Access <span className="text-gradient">Granted</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Your blueprint is being delivered to your inbox. You may also access the digital copy directly below to begin your implementation.
          </p>

          <div className="max-w-md mx-auto mb-24 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <a
              href="#"
              className="w-full py-5 primary-gradient rounded-2xl font-bold text-white soft-shadow hover:brightness-110 active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-3 group"
            >
              <DownloadCloud size={20} strokeWidth={2.5} />
              <span>Download Digital Blueprint</span>
            </a>
          </div>

          <div className="pt-24 border-t border-white/5">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-16">
              Verified <span className="text-indigo-400">Institutional Toolsets</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <RecommendationCard
                icon={<Bot className="text-indigo-400" />}
                title="Pionex GPT-4"
                description="The industry standard for GPT-4 integrated strategies with proprietary liquidity aggregation."
                link="/tools/pionex"
              />
              <RecommendationCard
                icon={<Coins className="text-purple-400" />}
                title="Yield Protocol"
                description="Institutional-grade vault rebalancing for high-exposure BTC and ETH yield farming."
                link="/tools/yield-app"
              />
              <RecommendationCard
                icon={<BarChart3 className="text-emerald-400" />}
                title="TrendSpider AI"
                description="Neural network analysis used for identifying high-probability breakout patterns across all assets."
                link="/tools/trendspider"
              />
            </div>

            <div className="mt-20">
              <Link
                href="/tools"
                className="inline-flex items-center space-x-3 text-slate-400 hover:text-white transition-all font-bold uppercase tracking-widest text-xs border-b border-white/10 pb-2 hover:border-indigo-500"
              >
                <span>Full Strategic Directory</span>
                <ArrowUpRight size={14} strokeWidth={3} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function RecommendationCard({ icon, title, description, link }: { icon: React.ReactNode; title: string; description: string; link: string }) {
  return (
    <div className="group p-8 md:p-10 rounded-[40px] bg-white/[0.02] border border-white/[0.04] hover:border-indigo-500/20 hover:bg-white/[0.04] transition-all duration-500 text-left">
      <div className="w-14 h-14 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors duration-300">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed font-medium mb-8 line-clamp-2">{description}</p>
      <Link
        href={link}
        className="text-white text-xs font-bold uppercase tracking-widest flex items-center space-x-2 hover:text-indigo-400 transition-colors"
      >
        <span>Examine Tool</span>
        <ExternalLink size={12} strokeWidth={2.5} />
      </Link>
    </div>
  );
}
