import { FastifyPluginAsync } from 'fastify';

const routes: FastifyPluginAsync = async (app) => {
  app.get('/achievements/health', async () => ({ module: 'achievements', ok: true }));
};

export default routes;
