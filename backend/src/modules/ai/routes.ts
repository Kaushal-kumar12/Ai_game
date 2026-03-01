import { FastifyPluginAsync } from 'fastify';

const routes: FastifyPluginAsync = async (app) => {
  app.get('/ai/health', async () => ({ module: 'ai', ok: true }));
};

export default routes;
