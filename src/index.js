export default {
  async fetch(request, env, ctx) {
    try {
      const requestId = crypto.randomUUID();
      const startTime = Date.now();
      
      // Fazendo GET para o webhook
      const response = await fetch('https://n8n-n8n-start.cgpwvx.easypanel.host/webhook/ca3541a3-bbaa-4575-be84-8773fa1cd513');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.text(); // Usando .text() ao invés de .json() para ser mais flexível
      const endTime = Date.now();
      const totalTime = endTime - startTime;
      
      return new Response(JSON.stringify({
        requestId,
        totalTime: `${totalTime}ms`,
        message: 'Chamada ao webhook realizada com sucesso!',
        responseData: data
      }, null, 2), {
        headers: { 
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({
        error: error.message,
        stack: error.stack
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
