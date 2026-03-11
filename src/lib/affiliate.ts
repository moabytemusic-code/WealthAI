import { supabase } from "./supabase";

export const trackAffiliateClick = async (toolId: string, affiliateLink: string) => {
  try {
    // 1. Log the click in Supabase
    // Note: Requires an 'affiliate_clicks' table
    const { error } = await supabase
      .from("affiliate_clicks")
      .insert([{ 
        tool_id: toolId, 
        clicked_at: new Date().toISOString(),
        source: typeof window !== 'undefined' ? window.location.pathname : 'server'
      }]);

    if (error) {
      console.error("Failed to track click:", error.message);
    }

    // 2. Redirect to the link
    if (typeof window !== 'undefined') {
      window.open(affiliateLink, '_blank', 'noopener,noreferrer');
    }
    
    return true;
  } catch (error) {
    console.error("Affiliate tracking error:", error);
    // Fallback redirect even if tracking fails partially
    if (typeof window !== 'undefined') {
      window.open(affiliateLink, '_blank', 'noopener,noreferrer');
    }
  }
};

export const getAffiliateRevenueStats = async () => {
  // Mock function to simulate fetching revenue data from hidden APIs or partner postbacks
  return {
    totalRevenue: 4250.00,
    conversions: 156,
    avgCommission: 27.24
  };
};
