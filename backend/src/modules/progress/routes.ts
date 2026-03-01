import { FastifyPluginAsync } from 'fastify';

const routes: FastifyPluginAsync = async (app) => {
  app.get('/progress/health', async () => ({ module: 'progress', ok: true }));
};

export default routes;
