/**
 * Utility to securely send tracking events to Meta Conversions API (CAPI)
 * via our Vercel Serverless Function proxy (/api/track-event).
 */

interface UserData {
  em?: string; // Hashed Email
  ph?: string; // Hashed Phone
  fn?: string; // Hashed First Name
  ln?: string; // Hashed Last Name
  ge?: string; // Hashed Gender
  db?: string; // Hashed Date of Birth
  ct?: string; // Hashed City
  st?: string; // Hashed State
  zp?: string; // Hashed Zip
  country?: string; // Hashed Country
}

interface CustomData {
  value?: number;
  currency?: string;
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  content_type?: string;
  [key: string]: any;
}

export async function trackFacebookEvent(
  eventName: string,
  userData: UserData = {},
  customData: CustomData = {}
) {
  try {
    const response = await fetch('/api/track-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event_name: eventName,
        event_source_url: window.location.href,
        user_data: userData,
        custom_data: customData,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to send Facebook CAPI event:', error);
    return { success: false, error };
  }
}
