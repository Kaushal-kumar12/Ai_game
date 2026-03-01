# Folder Structure

```text
.
├── README.md
├── docs/
│   ├── backend-api.md
│   ├── deployment.md
│   ├── folder-structure.md
│   ├── mobile-ui-structure.md
│   └── secure-execution.md
├── backend/
│   ├── package.json
│   ├── tsconfig.json
│   ├── prisma/
│   │   └── schema.prisma
│   └── src/
│       ├── server.ts
│       ├── lib/
│       │   └── env.ts
│       ├── plugins/
│       │   ├── prisma.ts
│       │   └── redis.ts
│       └── modules/
│           ├── achievements/
│           │   └── routes.ts
│           ├── admin/
│           │   └── routes.ts
│           ├── ai/
│           │   └── routes.ts
│           ├── auth/
│           │   └── routes.ts
│           ├── cyber/
│           │   └── routes.ts
│           ├── execution/
│           │   └── routes.ts
│           ├── leaderboard/
│           │   └── routes.ts
│           ├── levels/
│           │   └── routes.ts
│           ├── multiplayer/
│           │   └── routes.ts
│           ├── progress/
│           │   └── routes.ts
│           ├── submissions/
│           │   └── routes.ts
│           └── users/
│               └── routes.ts
└── mobile/
    ├── README.md
    └── app/
        ├── (auth)/
        ├── (tabs)/
        ├── lesson/[lessonId].tsx
        ├── challenge/[challengeId].tsx
        ├── cyber/[missionId].tsx
        └── multiplayer/[roomId].tsx
```
