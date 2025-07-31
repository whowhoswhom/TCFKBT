# TASK: Populate Site with Mock Data & UI

## Overview
You have already scaffolded all pages and components. This task is focused on populating the UI using mock data, preparing the frontend before Supabase integration.

---

## Objectives

### 1. Load Mock Data
- Import `players.json` (32 players) and `player_stats.json` into `/data/` directory.
- Use this mock data instead of any hardcoded placeholder.

### 2. Implement Logic Per Page

#### `/roster`
- Load and map over `players.json`
- Render `PlayerCard` for each player:
  - Full name
  - Jersey number
  - Position (leave blank if missing)
  - Profile photo (use placeholder if `profile_picture_url` is missing)
- Make each card clickable → `/player/:id`

#### `/player/:id`
- Match ID from URL to `players.json` entry
- Show player’s profile: full name, jersey number, bats/throws, height, weight, hometown, birthdate, debut year
- Display associated stats from `player_stats.json` (both batting and pitching tables)

#### `/stats`
- Load data from `player_stats.json`
- Render two tab views:
  - Batting: columns like GP, AB, H, HR, RBI, AVG
  - Pitching: IP, ERA, SO, BB, W, L
- Allow sorting by column
- Group by player name (from `players.json`)

---

## Guidelines
- No calls to Supabase yet
- Maintain all Tailwind styling and dark theme
- Responsive layout required
- Abstract fetching into utility functions if needed
- Ensure all pages gracefully handle missing fields

---

## Deliverables
- Fully functional `/roster`, `/player/:id`, and `/stats` pages using mock data
- Reuse existing components where possible
- Do not change existing file structure unless necessary

---

Let me know when ready to proceed with Supabase integration.