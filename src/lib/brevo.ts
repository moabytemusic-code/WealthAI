const BREVO_API_URL = "https://api.brevo.com/v3";
const apiKey = process.env.BREVO_API_KEY || "";

export const sendNurtureEmail = async (email: string, step: number) => {
  if (!apiKey) {
    console.warn("BREVO_API_KEY not provided.");
    return null;
  }

  const emails = [
    { subject: "Welcome! Your 7 AI Tools Guide is Here", content: "Email 1 content..." },
    { subject: "How AI is Revolutionizing Portfolio Management", content: "Email 2 content..." },
    { subject: "The #1 Mistake Automated Traders Make", content: "Email 3 content..." },
    { subject: "Exclusive Tool Comparison: Bot A vs Bot B", content: "Email 4 content..." },
    { subject: "Setting up your first AI yield farm", content: "Email 5 content..." },
    { subject: "Case Study: 300% Returns with AI Trading", content: "Email 6 content..." },
    { subject: "Final Offer: Access our Premium Automation Suite", content: "Email 7 content..." },
  ];

  const currentEmail = emails[step - 1];

  try {
    const res = await fetch(`${BREVO_API_URL}/smtp/email`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey
      },
      body: JSON.stringify({
        sender: { name: "AI Wealth Automation", email: "hello@aiwealth.com" },
        to: [{ email }],
        subject: currentEmail.subject,
        htmlContent: `<html><body><h1>${currentEmail.subject}</h1><p>${currentEmail.content}</p></body></html>`
      })
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to send email: ${errorText}`);
    }

    const data = await res.json();
    console.log("Email sent successfully. Returned data: " + JSON.stringify(data));
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addContactToList = async (email: string) => {
  if (!apiKey) {
    console.warn("BREVO_API_KEY not provided.");
    return null;
  }

  try {
    const res = await fetch(`${BREVO_API_URL}/contacts`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey
      },
      body: JSON.stringify({
        email,
        listIds: [2] // Example list ID
      })
    });

    if (!res.ok) {
      if (res.status === 400) {
        // usually means contact already exists, which is fine
        return;
      }
      const errorText = await res.text();
      throw new Error(`Failed to add contact: ${errorText}`);
    }

    return await res.json();
  } catch (error) {
    console.error(error);
  }
};
