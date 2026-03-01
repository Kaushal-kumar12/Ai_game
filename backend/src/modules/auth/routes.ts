import { FastifyPluginAsync } from 'fastify';

const routes: FastifyPluginAsync = async (app) => {
  app.get('/auth/health', async () => ({ module: 'auth', ok: true }));
};

export default routes;
