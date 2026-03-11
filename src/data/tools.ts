export interface Tool {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  pros: string[];
  cons: string[];
  affiliateLink: string;
  rating: number;
  icon: string;
}

export const tools: Tool[] = [
  {
    id: "aurum",
    name: "Aurum AI Investing Platform",
    category: "AI Investing Apps",
    tagline: "Explore automated crypto portfolio management.",
    description: "Aurum is an AI-powered platform that allows investors to explore automated crypto portfolio strategies and algorithmic trading systems.",
    pros: ["AI trading automation", "Portfolio monitoring tools", "Crypto ecosystem integration", "Automation-driven strategies"],
    cons: ["Not a guaranteed profit system", "Requires monitoring and strategy selection"],
    affiliateLink: "https://backoffice.aurum.foundation/u/1W145K",
    rating: 4.8,
    icon: "Bot",
  },
  {
    id: "pionex",
    name: "Pionex",
    category: "AI Trading Bots",
    tagline: "16 Free In-built Trading Bots",
    description: "Pionex is the first exchange with 16 free trading bots built-in. It aggregates liquidity from Binance and Huobi and provides a secure and easy way to trade.",
    pros: ["16 Free Trading Bots", "Low Trading Fees (0.05%)", "Safe & Regulated"],
    cons: ["Limited Fiat Support", "Complex for beginners"],
    affiliateLink: "https://pionex.com",
    rating: 4.8,
    icon: "Bot",
  },
  {
    id: "rebalancing-bot",
    name: "Shrimpy",
    category: "Portfolio Automation",
    tagline: "Social Trading and Portfolio Management",
    description: "Automate your crypto portfolio rebalancing across multiple exchanges. Copy strategies from top traders automatically.",
    pros: ["Multi-exchange support", "Automatic Rebalancing", "Social Copy Trading"],
    cons: ["Monthly Subscription", "No mobile app"],
    affiliateLink: "https://shrimpy.io",
    rating: 4.5,
    icon: "TrendingUp",
  },
  {
    id: "ledger",
    name: "Ledger Nano X",
    category: "Crypto Wallets",
    tagline: "The gold standard for hardware wallets",
    description: "Keep your crypto assets secure with the most popular hardware wallet. Features Bluetooth and support for 1000+ assets.",
    pros: ["Maximum Security", "Large app capacity", "Bluetooth enabled"],
    cons: ["Higher price point", "Small screen"],
    affiliateLink: "https://ledger.com",
    rating: 4.9,
    icon: "Shield",
  },
  {
    id: "binance",
    name: "Binance",
    category: "Crypto Exchanges",
    tagline: "The world's largest crypto exchange",
    description: "Access hundreds of crypto pairings with high liquidity and advanced trading features including AI-powered insights.",
    pros: ["High Liquidity", "Huge range of assets", "Advanced Features"],
    cons: ["Regulatory hurdles in some areas", "Support can be slow"],
    affiliateLink: "https://binance.com",
    rating: 4.7,
    icon: "Coins",
  }
];
