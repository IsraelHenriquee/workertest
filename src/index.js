export default {
  async fetch(request, env, ctx) {
    return new Response('Hello World from Development!', {
      headers: { 'content-type': 'text/plain' },
    });
  },
};
