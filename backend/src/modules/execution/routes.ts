import { FastifyPluginAsync } from 'fastify';

const routes: FastifyPluginAsync = async (app) => {
  app.get('/execution/health', async () => ({ module: 'execution', ok: true }));
};

export default routes;
