const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const FALLBACK_MODELS = [
  'gemini-2.0-flash',
  'gemini-2.5-flash',
  'gemini-2.0-flash-lite',
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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

      const modelsToTry = [requestedModel, ...FALLBACK_MODELS.filter(m => m !== requestedModel)];

      for (const model of modelsToTry) {
        for (let attempt = 0; attempt < 3; attempt++) {
          const { status, data } = await callGemini(model, payload, env.GEMINI_API_KEY);

          if (status === 200) {
            return new Response(JSON.stringify(data), {
              status: 200,
              headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
            });
          }

          if (status === 429 || status === 503) {
            const delay = Math.pow(2, attempt + 1) * 1000;
            await sleep(delay);
            continue;
          }

          return new Response(JSON.stringify(data), {
            status,
            headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
          });
        }
      }

      return new Response(JSON.stringify({ error: { message: 'All models rate limited. Please wait a moment and try again.' } }), {
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
