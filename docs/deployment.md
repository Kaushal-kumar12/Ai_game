# Deployment Instructions (2026)

## 1. Local development
- Start Postgres + Redis using Docker Compose.
- Run backend in watch mode.
- Run Expo app for iOS/Android.

## 2. CI pipeline (GitHub Actions)
Recommended jobs:
1. Lint + typecheck
2. Unit tests
3. Prisma migration check
4. Docker image build
5. Security scan (SAST + dependency scanning)

## 3. CD
- Build/push backend image to registry.
- Apply Prisma migrations.
- Deploy to Kubernetes (HPA enabled).
- Purge Cloudflare cache for app config endpoints.

## 4. Observability
- Sentry for frontend/backend errors
- OpenTelemetry traces for API and execution service
- Prometheus/Grafana for latency and sandbox usage

## 5. Scaling notes
- Redis-backed leaderboards + matchmaking queues
- Read replicas for analytics-heavy queries
- Isolated worker pool for execution jobs
