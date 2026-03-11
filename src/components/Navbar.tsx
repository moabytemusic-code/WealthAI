"use client";

import Link from "next/link";
import { Bot, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-4" : "py-8"}`}>
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${scrolled ? "bg-black/40 backdrop-blur-xl border border-white/5 shadow-2xl" : "bg-transparent border border-transparent"}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 primary-gradient rounded-xl flex items-center justify-center soft-shadow group-hover:scale-110 transition-transform">
              <Bot className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">AI Wealth</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/tools">Tools</NavLink>
            <NavLink href="/blog">Insights</NavLink>
            <NavLink href="/guides">Guides</NavLink>
            
            <div className="flex items-center space-x-4 pl-4 border-l border-white/10">
              <Link 
                href="/guides" 
                className="px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-slate-200 transition-all active:scale-95"
              >
                Get Master Guide
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white p-2">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-white ${isActive ? "text-white" : "text-slate-500"}`}
    >
      {children}
    </Link>
  );
}
