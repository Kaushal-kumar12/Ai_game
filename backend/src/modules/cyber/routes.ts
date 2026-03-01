import { FastifyPluginAsync } from 'fastify';

const routes: FastifyPluginAsync = async (app) => {
  app.get('/cyber/health', async () => ({ module: 'cyber', ok: true }));
};

export default routes;
