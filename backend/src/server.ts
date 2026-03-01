import Fastify from 'fastify';
import cors from '@fastify/cors';
import sensible from '@fastify/sensible';
import jwt from '@fastify/jwt';
import { env } from './lib/env.js';
import prismaPlugin from './plugins/prisma.js';
import redisPlugin from './plugins/redis.js';

import authRoutes from './modules/auth/routes.js';
import usersRoutes from './modules/users/routes.js';
import levelsRoutes from './modules/levels/routes.js';
import progressRoutes from './modules/progress/routes.js';
import submissionsRoutes from './modules/submissions/routes.js';
import leaderboardRoutes from './modules/leaderboard/routes.js';
import achievementsRoutes from './modules/achievements/routes.js';
import adminRoutes from './modules/admin/routes.js';
import aiRoutes from './modules/ai/routes.js';
import executionRoutes from './modules/execution/routes.js';
import multiplayerRoutes from './modules/multiplayer/routes.js';
import cyberRoutes from './modules/cyber/routes.js';

const app = Fastify({ logger: true });

await app.register(cors, { origin: true });
await app.register(sensible);
await app.register(jwt, { secret: env.JWT_SECRET });
await app.register(prismaPlugin);
await app.register(redisPlugin);

await app.register(authRoutes, { prefix: '/api/v1' });
await app.register(usersRoutes, { prefix: '/api/v1' });
await app.register(levelsRoutes, { prefix: '/api/v1' });
await app.register(progressRoutes, { prefix: '/api/v1' });
await app.register(submissionsRoutes, { prefix: '/api/v1' });
await app.register(leaderboardRoutes, { prefix: '/api/v1' });
await app.register(achievementsRoutes, { prefix: '/api/v1' });
await app.register(adminRoutes, { prefix: '/api/v1' });
await app.register(aiRoutes, { prefix: '/api/v1' });
await app.register(executionRoutes, { prefix: '/api/v1' });
await app.register(multiplayerRoutes, { prefix: '/api/v1' });
await app.register(cyberRoutes, { prefix: '/api/v1' });

app.get('/health', async () => ({ ok: true }));

await app.listen({ port: env.PORT, host: '0.0.0.0' });
