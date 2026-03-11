import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // 1. Add lead to Supabase
    // We assume there's a 'leads' table with columns: 'email', 'source', 'status'
    // If table doesn't exist, this will fail gracefully and just log the error.
    const { error: supabaseError } = await supabaseAdmin
      .from('leads')
      .upsert(
        { 
          email: email.toLowerCase(), 
          source: 'master_guide_optin', 
          status: 'active' 
        }, 
        { onConflict: 'email' }
      );

    if (supabaseError) {
      console.error('Supabase Error:', supabaseError);
    }

    // 2. Add lead to Brevo Automation List
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const BREVO_LIST_ID = process.env.BREVO_LIST_ID;

    if (BREVO_API_KEY) {
      const targetListIds = BREVO_LIST_ID ? [parseInt(BREVO_LIST_ID)] : [];

      const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': BREVO_API_KEY,
        },
        body: JSON.stringify({
          email: email.toLowerCase(),
          updateEnabled: true,
          listIds: targetListIds.length > 0 ? targetListIds : undefined,
          attributes: {
            OPT_IN: true,
            // Tagging leads according to marketing workflow conventions
            TAGS: 'LEAD',
          },
        }),
      });

      if (!brevoResponse.ok) {
        const errorData = await brevoResponse.json();
        console.error('Brevo Error:', errorData);
        return NextResponse.json({ success: false, error: 'Brevo Error', details: errorData }, { status: 500 });
      }
    } else {
      console.warn('BREVO_API_KEY is not defined. Skipping email automation integration.');
      return NextResponse.json({ success: false, error: 'BREVO_API_KEY is missing' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Subscribed successfully' });
  } catch (error: Error | unknown) {
    console.error('Subscription Endpoint Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: 'Internal server error', details: errorMessage }, { status: 500 });
  }
}
