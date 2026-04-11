const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function callClaude(payload, apiKey) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return { status: response.status, data };
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const body = await request.json();
      const payload = body.payload;

      // Retry up to 4 times with exponential backoff on rate limit
      for (let attempt = 0; attempt < 4; attempt++) {
        const { status, data } = await callClaude(payload, env.ANTHROPIC_API_KEY);

        if (status === 200) {
          return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
          });
        }

        if (status === 429 || status === 529) {
          const delay = Math.pow(2, attempt + 1) * 1000; // 2s, 4s, 8s, 16s
          await sleep(delay);
          continue;
        }

        // Other errors — return immediately
        return new Response(JSON.stringify(data), {
          status,
          headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
        });
      }

      return new Response(JSON.stringify({ error: { message: 'Rate limit reached. Please wait a moment and try again.' } }), {
        status: 429,
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
      });

    } catch (err) {
      return new Response(JSON.stringify({ error: { message: err.message } }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
      });
    }
  },
};
