import { FastifyPluginAsync } from 'fastify';

const routes: FastifyPluginAsync = async (app) => {
  app.get('/submissions/health', async () => ({ module: 'submissions', ok: true }));
};

export default routes;
