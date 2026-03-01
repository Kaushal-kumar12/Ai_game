# How to Verify the Project, Judge Quality, and Apply Changes

This guide answers: **"Which IDE should I use, how do I check if this build is good, and how do I apply changes safely?"**

## 1) Recommended IDEs

## Option A (recommended): Visual Studio Code
Use VS Code if you want the easiest setup for React Native + TypeScript + Node.

Install extensions:
- ESLint
- Prettier
- Prisma
- React Native Tools
- Thunder Client (or Postman externally)
- Docker

## Option B: WebStorm
Use WebStorm if you prefer integrated refactoring/navigation and built-in database tooling.

## 2) Open and inspect the scaffold

From the repository root:

```bash
code .
```

Start by reviewing:
- architecture summary: `README.md`
- backend entrypoint: `backend/src/server.ts`
- DB model: `backend/prisma/schema.prisma`
- API plan: `docs/backend-api.md`
- security model: `docs/secure-execution.md`

## 3) Run local dependencies (Postgres + Redis)

```bash
docker compose -f backend/docker-compose.yml up -d
```

Verify:

```bash
docker compose -f backend/docker-compose.yml ps
```

You should see `postgres` and `redis` healthy/running.

## 4) Install and validate backend

```bash
cd backend
npm install
npm run typecheck
npm run build
```

If all commands pass, your backend scaffold is technically valid.

## 5) Run backend server

Create `.env` in `backend/`:

```env
PORT=3000
DATABASE_URL=postgresql://pyquest:pyquest@localhost:5432/pyquest
REDIS_URL=redis://localhost:6379
JWT_SECRET=replace-with-very-long-random-secret
```

Then run:

```bash
npm run dev
```

Health check:

```bash
curl http://localhost:3000/health
curl http://localhost:3000/api/v1/auth/health
```

## 6) "Good or not good" checklist

Mark **Good** if:
- TypeScript compiles (`npm run typecheck` passes)
- Build succeeds (`npm run build` passes)
- Server starts without runtime errors
- `/health` and all module `/api/v1/*/health` routes return `{ ok: true }`
- Prisma schema covers your game entities correctly
- Security constraints in `docs/secure-execution.md` are implemented in code before production

Mark **Needs changes** if:
- Type errors exist
- Missing env variables cause startup failure
- Routes are inconsistent with `docs/backend-api.md`
- Data model misses required features (XP, achievements, leaderboard, submissions, etc.)

## 7) How to apply changes safely

1. Create a branch:
   ```bash
   git checkout -b feat/<short-name>
   ```
2. Edit code in IDE.
3. Re-run checks:
   ```bash
   npm run typecheck && npm run build
   ```
4. Validate endpoints with curl/Postman.
5. Commit with a focused message:
   ```bash
   git add .
   git commit -m "feat: <what changed>"
   ```
6. Open PR with:
   - what changed
   - why changed
   - how tested
   - any risks

## 8) Suggested first improvements

- Replace module health stubs with real CRUD/auth logic.
- Add request/response validation per route.
- Add tests (unit + API integration).
- Add migration files and seed scripts.
- Implement execution worker that enforces resource/time/network limits.
