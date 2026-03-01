import { FastifyPluginAsync } from 'fastify';

const routes: FastifyPluginAsync = async (app) => {
  app.get('/multiplayer/health', async () => ({ module: 'multiplayer', ok: true }));
};

export default routes;
