import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DisclosurePage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-950">
      <Navbar />
      <section className="pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl font-display font-bold text-white mb-12">Affiliate <span className="text-gradient">Disclosure</span></h1>
          <div className="prose prose-invert prose-blue text-slate-400 leading-relaxed space-y-8">
            <p>
              In compliance with the FTC guidelines, please assume that any links on this website leading to external tools, platforms, or exchanges are affiliate links.
            </p>
            <p>
              If you click on these links and make a purchase or sign up for a service, AI Wealth Automation Engine may receive a small commission. This comes at no additional cost to you and helps us maintain the platform as a free resource for the community.
            </p>
            <p className="p-6 glass-effect rounded-2xl border border-blue-500/20 text-blue-400 italic font-medium">
              &quot;We only recommend tools and platforms that we have thoroughly vetted, and we always prioritize the security and profit potential of our audience.&quot;
            </p>
            <p>
              Our reviews and rankings are based on independent research and data-driven analysis from our AI agents. Affiliate relationships do not influence our expert ratings.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
