import { FastifyPluginAsync } from 'fastify';

const routes: FastifyPluginAsync = async (app) => {
  app.get('/leaderboard/health', async () => ({ module: 'leaderboard', ok: true }));
};

export default routes;
