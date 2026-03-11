import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { addContactToList, sendNurtureEmail } from "@/lib/brevo";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // 1. Store in Supabase
    // Note: This requires a 'leads' table with an 'email' column
    const { error: supabaseError } = await supabase
      .from("leads")
      .insert([{ email, captured_at: new Date().toISOString() }]);

    // We don't block if supabase fails (e.g. if it's not set up yet)
    if (supabaseError) {
      console.warn("Supabase lead storage failed:", supabaseError.message);
    }

    // 2. Add to Brevo List
    try {
      await addContactToList(email);
    } catch (e) {
      console.warn("Brevo contact addition failed:", e);
    }

    // 3. Trigger Welcome Email (Day 1)
    try {
      await sendNurtureEmail(email, 1);
    } catch (e) {
      console.warn("Brevo welcome email failed:", e);
    }

    return NextResponse.json({ success: true, message: "Lead captured successfully" });
  } catch (error: Error | unknown) {
    console.error("Lead capture error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
