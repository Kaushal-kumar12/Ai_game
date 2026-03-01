import { FastifyPluginAsync } from 'fastify';

const routes: FastifyPluginAsync = async (app) => {
  app.get('/admin/health', async () => ({ module: 'admin', ok: true }));
};

export default routes;
