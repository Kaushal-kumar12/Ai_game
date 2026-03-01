import { FastifyPluginAsync } from 'fastify';

const routes: FastifyPluginAsync = async (app) => {
  app.get('/users/health', async () => ({ module: 'users', ok: true }));
};

export default routes;
