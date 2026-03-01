# Mobile UI Structure (Expo Router)

## Navigation
- `(auth)` stack: login, signup, guest onboarding
- `(tabs)` stack: home, map, challenges, profile
- Dynamic lesson route: `lesson/[lessonId].tsx`
- Cyber route: `cyber/[missionId].tsx`
- Multiplayer route: `multiplayer/[roomId].tsx`

## Core screens
- Home dashboard (XP, streak, daily quests)
- World map (level progression + boss nodes)
- Lesson screen (animated tutor + code editor)
- Challenge arena (ranked multiplayer)
- Cyber mission lab (hashing/encryption/log analysis)
- Profile & achievements

## State
- Global app state: Zustand
- Server cache: React Query
- Animation orchestration: Reanimated 3 + Skia + Lottie

## Performance targets
- 60 FPS animation
- initial route render < 2s on mid-range devices
- lazy-load assets and level bundles
