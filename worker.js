export default {
  async fetch(request, env, ctx) {
    // Let Cloudflare serve static assets automatically
    return env.ASSETS.fetch(request);
  }
};
