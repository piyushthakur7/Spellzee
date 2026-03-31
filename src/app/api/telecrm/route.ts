import { NextResponse } from 'next/server';

interface TelecrmLeadInput {
  name?: string;
  phone: string;
  email?: string;
}

/**
 * Reusable function to create a lead in TeleCRM
 */
export async function createTelecrmLead(lead: TelecrmLeadInput) {
  const TELECRM_API_KEY = process.env.TELECRM_API_KEY;
  const TELECRM_ENTERPRISE_ID = process.env.TELECRM_ENTERPRISE_ID;

  if (!TELECRM_API_KEY || !TELECRM_ENTERPRISE_ID) {
    throw new Error('TeleCRM credentials are not configured in environment variables.');
  }

  // Format phone to include +91 if missing
  let formattedPhone = lead.phone.trim();
  if (!formattedPhone.startsWith('+')) {
    if (formattedPhone.length === 10) {
      formattedPhone = `+91${formattedPhone}`;
    } else if (formattedPhone.startsWith('91') && formattedPhone.length === 12) {
      formattedPhone = `+${formattedPhone}`;
    }
  }

  const payload = {
    name: lead.name,
    phone: formattedPhone,
    email: lead.email,
  };

  const url = `https://api.telecrm.in/enterprise/${TELECRM_ENTERPRISE_ID}/lead`;

  console.log(`[TeleCRM] Attempting to create lead for phone: ${formattedPhone}`);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TELECRM_API_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let errorData = null;
    try {
      errorData = await response.json();
    } catch (e) {
      // Ignored if response isn't JSON
    }
    
    console.error(`[TeleCRM Error] Status: ${response.status}`, errorData);
    
    const error: any = new Error(errorData?.message || `Failed to create lead (Status: ${response.status})`);
    error.status = response.status;
    error.data = errorData;
    throw error;
  }

  return response.json();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email } = body;

    // Validate required fields
    if (!phone) {
      return NextResponse.json(
        { success: false, error: 'Phone number is mandatory' },
        { status: 400 }
      );
    }

    const data = await createTelecrmLead({ name, phone, email });

    console.log('[TeleCRM] Successfully created lead.');
    
    return NextResponse.json(
      { success: true, data },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('[TeleCRM Route Error]:', error.message || error);
    
    // Default to 500 if status wasn't attached
    const status = error.status || 500;
    
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Internal Server Error',
        details: error.data || null
      },
      { status }
    );
  }
}
