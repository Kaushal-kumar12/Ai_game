import fp from 'fastify-plugin';
import Redis from 'ioredis';
import { env } from '../lib/env.js';

export default fp(async (app) => {
  const redis = new Redis(env.REDIS_URL);
  app.decorate('redis', redis);

  app.addHook('onClose', async () => {
    await redis.quit();
  });
});

declare module 'fastify' {
  interface FastifyInstance {
    redis: Redis;
  }
}
