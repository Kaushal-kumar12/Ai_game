import { FastifyPluginAsync } from 'fastify';

const routes: FastifyPluginAsync = async (app) => {
  app.get('/levels/health', async () => ({ module: 'levels', ok: true }));
};

export default routes;
