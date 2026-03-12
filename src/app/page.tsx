"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Bot, TrendingUp, Shield, ChevronRight, Zap, 
  Search, Link2, Settings, Compass, BookOpen, Layers, Mail, ArrowRight
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        router.push("/thanks");
      } else {
        router.push("/thanks");
      }
    } catch {
      router.push("/thanks");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen relative selection:bg-indigo-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Hook */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-xs font-bold uppercase tracking-widest mb-10 animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
              <Zap size={14} className="text-indigo-400" />
              <span>Free Guide — 7 AI Apps Automating Crypto Investing</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.05] animate-fade-in opacity-0 tracking-tight" style={{ animationDelay: '200ms' }}>
              AI Apps That Are Changing <br />
              <span className="text-gradient">How People Invest</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
              Discover the AI investing apps investors are exploring to automate trading, monitor markets, and simplify portfolio management.
            </p>

            <div className="animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border-2 border-[#020617] bg-slate-800 flex items-center justify-center">
                       <Bot size={14} className="text-slate-400" />
                     </div>
                   ))}
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-4">
                  Trusted by 15,000+ automated investors
                </span>
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <Link
                  href="/guides"
                  className="w-full sm:w-auto px-10 py-5 primary-gradient rounded-full font-bold text-white soft-shadow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center space-x-3 group"
                >
                  <span>Get the Free AI Investing Guide</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-sm text-slate-500 font-medium mt-4">
                  Most investors still trade manually.<br/>
                  <span className="text-slate-400">These apps automate the process.</span>
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-[#020617]/50 border-y border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Bot className="text-indigo-400" size={28} />}
              title="Autonomous Trading"
              description="AI systems monitor markets and execute strategies automatically."
            />
            <FeatureCard 
              icon={<TrendingUp className="text-purple-400" size={28} />}
              title="Yield Optimization"
              description="Automation tools rebalance assets across platforms."
            />
            <FeatureCard 
              icon={<Shield className="text-emerald-400" size={28} />}
              title="Risk Mitigation"
              description="Monitoring systems help protect portfolios during volatility."
            />
          </div>
        </div>
      </section>

      {/* How AI Investing Works SECTION */}
      <section className="py-24">
         <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Is AI Investing Complicated?</h2>
               <p className="text-slate-400 text-lg">Modern AI investing apps are designed for beginners. Most platforms follow a simple process:</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
               <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
               
               <StepCard step="1" icon={<Link2 size={24} className="text-indigo-400"/>} title="Connect your exchange." />
               <StepCard step="2" icon={<Settings size={24} className="text-purple-400"/>} title="Choose an automated strategy." />
               <StepCard step="3" icon={<Search size={24} className="text-emerald-400"/>} title="Let the platform monitor markets and execute trades." />
            </div>
         </div>
      </section>

      {/* Discover AI Tools SECTION */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Explore AI Investing Apps</h2>
                <p className="text-slate-400 text-lg">Browse automation platforms investors are exploring to simplify crypto investing and portfolio management.</p>
              </div>
              <Link href="/tools" className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 font-bold tracking-widest uppercase text-xs transition-colors">
                <span>View Full Directory</span>
                <ChevronRight size={14} />
              </Link>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <CategoryCard title="AI Investing Apps" href="/tools" />
              <CategoryCard title="Crypto Exchanges" href="/tools" />
              <CategoryCard title="Portfolio Monitoring Tools" href="/tools" />
              <CategoryCard title="Risk Protection Platforms" href="/tools" />
           </div>
        </div>
      </section>

      {/* Platform Trust Zone */}
      <section className="py-16 overflow-hidden bg-black/40 border-b border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-10">
            Supported connections by top automated tools
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-duration-700">
            <span className="text-lg md:text-xl font-bold tracking-widest text-white uppercase">BINANCE</span>
            <span className="text-lg md:text-xl font-bold tracking-widest text-white uppercase">KRAKEN</span>
            <span className="text-lg md:text-xl font-bold tracking-widest text-white uppercase">BYBIT</span>
            <span className="text-lg md:text-xl font-bold tracking-widest text-white uppercase">COINBASE</span>
            <span className="text-lg md:text-xl font-bold tracking-widest text-white uppercase">UNISWAP</span>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-24 bg-[#020617]/50 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Top AI Investing Apps <span className="text-gradient">Compared</span></h2>
             <p className="text-slate-400 text-lg text-balance mx-auto max-w-2xl">
               Evaluate leading automation apps to find the best platform for your risk tolerance and goals.
             </p>
          </div>
          
          <div className="overflow-x-auto pb-6">
             <div className="min-w-[800px] w-full rounded-3xl border border-white/5 bg-white/[0.02] soft-shadow">
                {/* Table Header */}
                <div className="grid grid-cols-6 p-6 border-b border-white/5 bg-black/20 text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                   <div className="col-span-1">Platform</div>
                   <div className="col-span-1">Best For</div>
                   <div className="col-span-1">Automation Type</div>
                   <div className="col-span-1">Beginner Friendly</div>
                   <div className="col-span-1">Things to Consider</div>
                   <div className="col-span-1 text-center">Action</div>
                </div>
                
                {/* Table Rows */}
                <div className="divide-y divide-white/5">
                   <TableRow 
                     name="Aurum" 
                     bestFor="Exploring AI Portfolio Automation"
                     automationType="AI Monitoring"
                     beginnerFriendly="Yes"
                     consider="Requires strategy setup."
                     link="https://backoffice.aurum.foundation/u/1W145K"
                   />
                   <TableRow 
                     name="Pionex" 
                     bestFor="Free Built-in Strategies"
                     automationType="Grid Trading Bots"
                     beginnerFriendly="Yes"
                     consider="More complex UI elements."
                     link="/tools/pionex"
                   />
                   <TableRow 
                     name="Shrimpy" 
                     bestFor="Social Copy Trading"
                     automationType="Portfolio Rebalancing"
                     beginnerFriendly="Yes"
                     consider="Monthly subscription cost."
                     link="/tools/rebalancing-bot"
                   />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Investor Discovery Hub */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Explore the AI Investing Ecosystem</h2>
             <p className="text-slate-400 text-lg">Where are you on your automation journey?</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HubCard 
              icon={<Compass size={32} className="text-indigo-400" />}
              title="Beginner Guide"
              desc="Learn how AI automation works."
              href="/guides"
              linkText="Start Here"
            />
            <HubCard 
              icon={<Layers size={32} className="text-purple-400" />}
              title="Tool Directory"
              desc="Browse AI investing platforms."
              href="/tools"
              linkText="Explore Tools"
            />
            <HubCard 
              icon={<BookOpen size={32} className="text-emerald-400" />}
              title="Strategy Insights"
              desc="Discover how investors automate portfolios."
              href="/blog"
              linkText="Read Insights"
            />
          </div>
        </div>
      </section>

      {/* Recommended AI Investing Platforms (Scalable Offer Block) */}
      <section className="py-24 bg-white/[0.02] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Recommended AI <span className="text-gradient">Investing Platforms</span></h2>
             <p className="text-slate-400 text-lg">
               A curated selection of the premier tools we recommend exploring right now across the AI investing ecosystem.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/tools/aurum" className="bg-[#0f172a] border border-white/5 rounded-3xl p-8 hover:border-indigo-500/30 transition-all group">
              <div className="w-12 h-12 bg-white/[0.03] border border-white/5 rounded-xl flex items-center justify-center mb-6">
                <Bot className="text-indigo-400" size={24} />
              </div>
              <h3 className="font-bold text-white text-xl mb-2">Automate Portfolio</h3>
              <p className="text-slate-400 text-sm mb-6">AI apps for strategy creation.</p>
              <span className="text-indigo-400 font-bold uppercase tracking-widest text-[10px] flex items-center space-x-2 group-hover:text-indigo-300">
                <span>Explore Top Pick</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link href="/tools/binance" className="bg-[#0f172a] border border-white/5 rounded-3xl p-8 hover:border-indigo-500/30 transition-all group">
              <div className="w-12 h-12 bg-white/[0.03] border border-white/5 rounded-xl flex items-center justify-center mb-6">
                <Search className="text-purple-400" size={24} />
              </div>
              <h3 className="font-bold text-white text-xl mb-2">Trade & Exchange</h3>
              <p className="text-slate-400 text-sm mb-6">Top liquidity platforms.</p>
              <span className="text-purple-400 font-bold uppercase tracking-widest text-[10px] flex items-center space-x-2 group-hover:text-purple-300">
                <span>Explore Exchanges</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link href="/tools/ledger" className="bg-[#0f172a] border border-white/5 rounded-3xl p-8 hover:border-indigo-500/30 transition-all group">
              <div className="w-12 h-12 bg-white/[0.03] border border-white/5 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-emerald-400" size={24} />
              </div>
              <h3 className="font-bold text-white text-xl mb-2">Wallet Security</h3>
              <p className="text-slate-400 text-sm mb-6">Protect your digital assets.</p>
              <span className="text-emerald-400 font-bold uppercase tracking-widest text-[10px] flex items-center space-x-2 group-hover:text-emerald-300">
                <span>Explore Wallets</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link href="/tools/rebalancing-bot" className="bg-[#0f172a] border border-white/5 rounded-3xl p-8 hover:border-indigo-500/30 transition-all group">
              <div className="w-12 h-12 bg-white/[0.03] border border-white/5 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="text-blue-400" size={24} />
              </div>
              <h3 className="font-bold text-white text-xl mb-2">Risk Monitoring</h3>
              <p className="text-slate-400 text-sm mb-6">Monitor global metrics 24/7.</p>
              <span className="text-blue-400 font-bold uppercase tracking-widest text-[10px] flex items-center space-x-2 group-hover:text-blue-300">
                <span>Explore Dashboards</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust + Education Section */}
      <section className="py-24 border-t border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 mb-8">
            <Shield className="text-indigo-400" size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Why Investors Are Exploring AI Automation</h2>
          <p className="text-xl text-slate-400 leading-relaxed font-medium mb-8">
            Markets move 24 hours a day. AI automation tools allow investors to monitor opportunities, execute strategies, and manage portfolios without constantly watching charts.
          </p>
          <div className="p-6 border border-white/5 rounded-2xl bg-[#0f172a] inline-block">
             <p className="text-slate-400 font-bold italic text-sm">
               &quot;Automation does not eliminate risk but helps remove emotional decision-making from investing.&quot;
             </p>
          </div>
        </div>
      </section>

      {/* Secondary Email Capture */}
      <section className="py-24 bg-gradient-to-b from-[#020617] to-[#0f172a] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-white/[0.02] border border-white/5 rounded-[40px] p-10 md:p-14 text-center soft-shadow relative">
             <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-indigo-500/20">
                <Mail size={28} className="text-indigo-400" />
             </div>
             
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Ahead of AI Investing Trends</h2>
             <p className="text-slate-400 mb-10 text-lg">
               Get new AI investing apps and automation strategies delivered weekly.
             </p>

             <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
               <input 
                 type="email" 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 placeholder="Your email address..." 
                 required
                 className="flex-1 bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500/50"
               />
               <button 
                 type="submit"
                 disabled={loading}
                 className="px-8 py-4 primary-gradient rounded-2xl font-bold text-white hover:brightness-110 active:scale-95 transition-all flex items-center justify-center whitespace-nowrap"
               >
                 {loading ? "Joining..." : "Subscribe"}
               </button>
             </form>
             <p className="mt-6 text-[10px] text-slate-500 uppercase tracking-widest font-bold">This content is educational and not financial advice.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-10 rounded-[40px] bg-white/[0.02] border border-white/[0.04] hover:border-indigo-500/20 hover:bg-white/[0.04] transition-all duration-300 group soft-shadow text-center md:text-left flex flex-col items-center md:items-start">
      <div className="w-14 h-14 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
}

function StepCard({ step, icon, title }: { step: string; icon: React.ReactNode; title: string }) {
  return (
    <div className="flex flex-col items-center text-center relative z-10">
      <div className="w-20 h-20 bg-[#0f172a] border border-white/10 rounded-full flex items-center justify-center mb-6 soft-shadow relative group">
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {icon}
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full primary-gradient flex items-center justify-center text-white font-bold text-sm border-4 border-[#020617]">
          {step}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
  );
}

function CategoryCard({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href} className="group p-8 rounded-3xl bg-black/20 border border-white/5 hover:border-indigo-500/30 transition-all soft-shadow flex flex-col items-center text-center space-y-4">
      <div className="w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center group-hover:bg-indigo-500/10 transition-colors">
         <Bot size={20} className="text-slate-400 group-hover:text-indigo-400" />
      </div>
      <h4 className="font-bold text-white group-hover:text-indigo-300 transition-colors">{title}</h4>
    </Link>
  );
}

function HubCard({ icon, title, desc, href, linkText }: { icon: React.ReactNode; title: string; desc: string; href: string; linkText: string }) {
  return (
    <div className="p-10 rounded-[32px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all soft-shadow flex flex-col h-full">
       <div className="mb-6">{icon}</div>
       <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
       <p className="text-slate-400 mb-8 flex-grow">{desc}</p>
       <Link href={href} className="inline-flex items-center space-x-2 text-indigo-400 font-bold hover:text-indigo-300 uppercase tracking-widest text-xs group">
          <span>{linkText}</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
       </Link>
    </div>
  );
}

function TableRow({ name, bestFor, automationType, beginnerFriendly, consider, link }: { name: string; bestFor: string; automationType: string; beginnerFriendly: string; consider: string; link: string }) {
  return (
    <div className="grid grid-cols-6 p-6 hover:bg-white/[0.03] transition-colors items-center">
       <div className="col-span-1">
         <div className="flex items-center space-x-3">
           <div className="w-8 h-8 rounded bg-white/[0.05] border border-white/10 flex items-center justify-center flex-shrink-0">
             <Bot size={14} className="text-indigo-400" />
           </div>
           <span className="text-white font-bold">{name}</span>
         </div>
       </div>
       <div className="col-span-1 text-slate-400 text-sm">{bestFor}</div>
       <div className="col-span-1 text-slate-400 text-sm">{automationType}</div>
       <div className="col-span-1 text-slate-400 text-sm">
         <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase">{beginnerFriendly}</span>
       </div>
       <div className="col-span-1 text-slate-400 text-xs italic">
         {consider}
       </div>
       <div className="col-span-1 text-center">
         <Link href={link} className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors text-xs font-bold uppercase tracking-widest group">
            <span>Explore</span>
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
         </Link>
       </div>
    </div>
  );
}
