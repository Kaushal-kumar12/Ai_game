# Backend APIs (Fastify)

Base URL: `/api/v1`

## Auth
- `POST /auth/login-email`
- `POST /auth/login-google`
- `POST /auth/refresh`
- `POST /auth/logout`

## Users
- `GET /users/me`
- `PATCH /users/me`
- `GET /users/:id/profile`

## Levels & Curriculum
- `GET /levels`
- `GET /levels/:id`
- `POST /levels/:id/start`
- `POST /levels/:id/complete`

## Submissions & Execution
- `POST /execution/run` (sandbox run)
- `POST /submissions`
- `GET /submissions/:id`

## Progress & XP
- `GET /progress/me`
- `POST /progress/xp`
- `POST /progress/skill-tree/unlock`

## Leaderboard
- `GET /leaderboard/global`
- `GET /leaderboard/weekly`
- `GET /leaderboard/friends`

## Achievements / Badges
- `GET /achievements`
- `POST /achievements/claim`

## AI Tutor
- `POST /ai/hint`
- `POST /ai/explain-error`
- `POST /ai/generate-challenge`

## Cybersecurity Mode
- `GET /cyber/missions`
- `POST /cyber/missions/:id/submit`

## Multiplayer
- `POST /multiplayer/rooms`
- `POST /multiplayer/rooms/:id/join`
- `POST /multiplayer/rooms/:id/submit`

## Admin
- `GET /admin/analytics`
- `POST /admin/levels`
- `PATCH /admin/levels/:id`
- `POST /admin/users/:id/ban`
