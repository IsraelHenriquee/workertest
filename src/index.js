export default {
  async fetch(request, env, ctx) {
    // Log do método da requisição
    console.log('Método da requisição:', request.method);

    // Tratando requisição OPTIONS (preflight)
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    try {
      const requestId = crypto.randomUUID();
      const startTime = Date.now();
      
      // Fazendo GET para o webhook
      const response = await fetch('https://n8n-n8n-start.cgpwvx.easypanel.host/webhook/ca3541a3-bbaa-4575-be84-8773fa1cd513');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.text();
      const endTime = Date.now();
      const totalTime = endTime - startTime;
      
      return new Response(JSON.stringify({
        requestId,
        totalTime: `${totalTime}ms`,
        message: 'Chamada ao webhook realizada com sucesso 2!',
        responseData: data,
        requestMethod: request.method  // Adicionando o método da requisição na resposta
      }, null, 2), {
        headers: { 
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({
        error: error.message,
        stack: error.stack,
        requestMethod: request.method  // Adicionando o método da requisição no erro também
      }, null, 2), {
        status: 500,
        headers: { 
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });
    }
  },
};
