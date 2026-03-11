import Link from "next/link";
import { Bot, Youtube, Twitter, Github, Linkedin, Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020617] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 group mb-8">
              <div className="w-10 h-10 primary-gradient rounded-xl flex items-center justify-center soft-shadow">
                <Bot className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">AI Wealth</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed font-medium mb-8">
              The premier platform for autonomous wealth management. We bridge the gap between advanced AI and personal financial growth.
            </p>
            <div className="flex items-center space-x-5">
              <SocialLink icon={<Twitter size={18} />} href="#" />
              <SocialLink icon={<Youtube size={18} />} href="#" />
              <SocialLink icon={<Github size={18} />} href="#" />
              <SocialLink icon={<Linkedin size={18} />} href="#" />
            </div>
          </div>

          {/* Links Columns */}
          <FooterColumn 
            title="Solutions" 
            links={[
              { label: "Trading Systems", href: "/tools" },
              { label: "Yield Optimization", href: "/tools" },
              { label: "Risk Management", href: "/tools" },
              { label: "Institutional Data", href: "/tools" }
            ]} 
          />
          <FooterColumn 
            title="Intelligence" 
            links={[
              { label: "Market Insights", href: "/blog" },
              { label: "AI Strategy", href: "/blog" },
              { label: "Case Studies", href: "/blog" },
              { label: "Master Blueprint", href: "/guides" }
            ]} 
          />
          <FooterColumn 
            title="Compliance" 
            links={[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Affiliate Disclosure", href: "/disclosure" }
            ]} 
          />
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
            © 2026 AI Wealth Automation Engine. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-slate-800">
             <Cpu size={14} />
             <span className="text-[10px] font-bold uppercase tracking-widest">Fully Automated Engine</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-8">{title}</h4>
      <ul className="space-y-4">
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link.href} className="text-slate-500 hover:text-indigo-400 text-sm font-medium transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a href={href} className="w-10 h-10 bg-white/[0.03] border border-white/5 rounded-xl flex items-center justify-center text-slate-500 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/20 transition-all">
      {icon}
    </a>
  );
}
