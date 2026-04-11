const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const MODELS = [
  'gemini-2.0-flash',
  'gemini-2.5-flash',
  'gemini-2.0-flash-lite',
];

// Round-robin counter (resets per Worker instance)
let keyIndex = 0;

async function callGemini(model, payload, apiKey) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
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
      const requestedModel = body.model || 'gemini-2.0-flash';
      const payload = body.payload;

      // Get both API keys
      const apiKeys = [env.GEMINI_API_KEY, env.GEMINI_API_KEY_2].filter(Boolean);
      const modelsToTry = [requestedModel, ...MODELS.filter(m => m !== requestedModel)];

      // Try each combination of key + model on rate limit
      for (const model of modelsToTry) {
        for (let i = 0; i < apiKeys.length; i++) {
          // Rotate keys round-robin
          const key = apiKeys[(keyIndex + i) % apiKeys.length];
          const { status, data } = await callGemini(model, payload, key);

          if (status === 200) {
            keyIndex = (keyIndex + 1) % apiKeys.length; // advance for next request
            return new Response(JSON.stringify(data), {
              status: 200,
              headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
            });
          }

          // Rate limit — try next key
          if (status === 429 || status === 503) continue;

          // Other error — return immediately
          return new Response(JSON.stringify(data), {
            status,
            headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
          });
        }
      }

      return new Response(JSON.stringify({ error: { message: 'Rate limit reached on all keys. Please wait a moment and try again.' } }), {
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
