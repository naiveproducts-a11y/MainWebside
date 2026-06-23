export default async function handler(req, res) {
  // Allow only POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { event_name, event_source_url, user_data, custom_data } = req.body;

  const pixelId = process.env.FB_PIXEL_ID;
  const accessToken = process.env.FB_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    return res.status(500).json({ error: 'Facebook configuration missing on server' });
  }

  // Get client IP and User Agent from Vercel headers
  const client_ip_address = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const client_user_agent = req.headers['user-agent'];

  try {
    const fbResponse = await fetch(`https://graph.facebook.com/v19.0/${pixelId}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [
          {
            event_name,
            event_time: Math.floor(Date.now() / 1000),
            action_source: 'website',
            event_source_url: event_source_url || req.headers.referer,
            user_data: {
              client_ip_address,
              client_user_agent,
              ...user_data,
            },
            custom_data,
          },
        ],
        access_token: accessToken,
      }),
    });

    const result = await fbResponse.json();

    if (fbResponse.ok) {
      return res.status(200).json({ success: true, result });
    } else {
      return res.status(fbResponse.status).json({ success: false, error: result.error });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
