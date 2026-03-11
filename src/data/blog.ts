export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "how-ai-investing-apps-are-changing-crypto",
    title: "How AI Investing Apps Are Changing Crypto",
    category: "AI Investing Apps",
    excerpt: "Instead of watching charts all day, investors are using automation platforms to monitor markets and execute strategies. Look at how platforms like Aurum are transforming the ecosystem.",
    date: "March 11, 2026",
    author: "AI Wealth Team",
    readTime: "7 min read",
    image: "/blog/apps.jpg",
  },
  {
    id: "best-ai-crypto-trading-bots",
    title: "Best AI Crypto Trading Bots for 2026",
    category: "Trading Bots",
    excerpt: "Discover the top-performing AI crypto trading bots that are dominating the markets this year. We compare Pionex, Shrimpy, and more.",
    date: "March 11, 2026",
    author: "AI Wealth Team",
    readTime: "8 min read",
    image: "/blog/bots.jpg",
  },
  {
    id: "how-ai-is-transforming-investing",
    title: "How AI Is Transforming Passive Investing",
    category: "AI Investing",
    excerpt: "Artificial Intelligence is no longer just for Wall Street. Learn how retail investors are leveraging neural networks for passive yield.",
    date: "March 08, 2026",
    author: "Sarah Chen",
    readTime: "12 min read",
    image: "/blog/transform.jpg",
  },
  {
    id: "automated-crypto-trading-explained",
    title: "Automated Crypto Trading: A Beginner's Guide",
    category: "Crypto Automation",
    excerpt: "New to automation? This comprehensive guide explains everything from API keys to grid trading strategies in plain English.",
    date: "March 05, 2026",
    author: "Marcus Thorne",
    readTime: "15 min read",
    image: "/blog/crypto-guide.jpg",
  },
  {
    id: "top-passive-crypto-income-platforms",
    title: "Top 5 Passive Crypto Income Platforms",
    category: "Passive Income Technology",
    excerpt: "Stop working for your money. These 5 platforms allow your crypto to work for you using advanced AI rebalancing magic.",
    date: "March 01, 2026",
    author: "AI Wealth Team",
    readTime: "10 min read",
    image: "/blog/passive.jpg",
  },
  {
    id: "ai-portfolio-automation-tools",
    title: "The Rise of AI Portfolio Automation Tools",
    category: "Fintech Platforms",
    excerpt: "Why manual rebalancing is a thing of the past. Explore the new era of intelligent, adaptive portfolio management.",
    date: "Feb 25, 2026",
    author: "Elite Investor",
    readTime: "9 min read",
    image: "/blog/portfolio.jpg",
  },
];
