export interface Opportunity {
  id: string;
  source: string;
  title: string;
  description: string;
  url: string;
  demandScore: number; // 1-10
  competitionScore: number; // 1-10
  commissionPotential: number; // 1-10
  profitPotentialScore: number; // Calculated
  suggestedContent: string[];
}

export class ScannerAgent {
  private sources = [
    { name: "Reddit", url: "https://www.reddit.com/r/finance+crypto+automation.json" },
    { name: "Product Hunt", url: "https://api.producthunt.com/v2/api/graphql" },
    { name: "Google Trends", url: "https://trends.google.com/trends/api/dailytrends" },
    { name: "Twitter/X", url: "https://api.twitter.com/2/tweets/search/recent" },
  ];

  async scanSources(): Promise<Opportunity[]> {
    console.log("Scanner Agent: Scanning started...");
    
    // In a real implementation, we would fetch from the APIs above
    // For this engine, we'll return mock data that simulates real-time discoveries
    
    const discoveries: Omit<Opportunity, "profitPotentialScore">[] = [
      {
        id: "opp-1",
        source: "Reddit",
        title: "New AI Trading Strategy for SOL",
        description: "Significant discussion around a new automated grid strategy for Solana perpetuals.",
        url: "https://reddit.com/r/crypto/123",
        demandScore: 8,
        competitionScore: 4,
        commissionPotential: 9,
        suggestedContent: ["YouTube: Solana AI Trading Strategy", "Blog: Best SOL Grid Bots"],
      },
      {
        id: "opp-2",
        source: "Product Hunt",
        title: "InvestFlow AI",
        description: "A new fintech startup launching a neural-network based portfolio rebalancer.",
        url: "https://producthunt.com/posts/investflow",
        demandScore: 6,
        competitionScore: 2,
        commissionPotential: 7,
        suggestedContent: ["Article: InvestFlow Review", "Social: PH Launch Breakdowns"],
      },
      {
        id: "opp-3",
        source: "Google Trends",
        title: "Passive Income Crypto 2026",
        description: "Massive spike in search volume for 'passive income crypto' following market recovery.",
        url: "https://trends.google.com",
        demandScore: 10,
        competitionScore: 7,
        commissionPotential: 8,
        suggestedContent: ["Lead Magnet: The 2026 Passive Income Blueprint"],
      }
    ];

    return discoveries.map(opp => ({
      ...opp,
      profitPotentialScore: this.calculateProfitScore(opp.demandScore, opp.competitionScore, opp.commissionPotential)
    })).sort((a, b) => b.profitPotentialScore - a.profitPotentialScore);
  }

  private calculateProfitScore(demand: number, competition: number, commission: number): number {
    // Score = (Demand * 0.4) + (Commission * 0.4) + ((10 - Competition) * 0.2)
    const score = (demand * 0.4) + (commission * 0.4) + ((10 - competition) * 0.2);
    return Math.round(score * 10) / 10;
  }
}
