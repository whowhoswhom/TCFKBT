# Town & Country Ford Baseball Website

A modern, responsive website for the Town & Country Ford baseball team built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Home Page**: Hero section with navigation cards to key sections
- **Roster Page**: Grid display of all players with clickable cards
- **Player Profiles**: Individual player pages with bio and statistics
- **Statistics Page**: Tabbed batting and pitching stats with sortable tables
- **Schedule Page**: Placeholder for GameChanger widget integration
- **Responsive Design**: Mobile-first design that works on all screen sizes
- **Dark Theme**: Consistent dark theme with Ford Blue branding

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom Ford Blue theme
- **Data**: Mock JSON files (ready for Supabase integration)
- **Deployment**: Vercel-ready

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── roster/            # Roster page
│   ├── player/[id]/       # Dynamic player pages
│   ├── stats/             # Statistics page
│   └── schedule/          # Schedule page
├── components/            # Reusable components
│   ├── Navbar.tsx        # Navigation component
│   └── PlayerCard.tsx    # Player card component
├── data/                 # Mock data files
│   ├── players.json      # Player roster data
│   └── player_stats.json # Player statistics
└── utils/                # Utility functions
    └── fetchMockData.ts  # Data fetching utilities
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tcford-baseball
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Data Structure

### Players JSON
```json
{
  "id": "player_id",
  "first_name": "First",
  "last_name": "Last", 
  "jersey_number": 1,
  "position": "Position",
  "bats": "L/R/S",
  "throws": "L/R/S",
  "height": "Height",
  "weight": "Weight",
  "birthdate": "Birthdate",
  "hometown": "Hometown",
  "debut_year": "Year",
  "profile_picture_url": "URL"
}
```

### Player Stats JSON
```json
{
  "player_id": "player_id",
  "stat_type": "batting|pitching|fielding",
  "season": "2024",
  "GP": 10,
  "AB": 100,
  "H": 30,
  // ... other stat fields
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `python update_stats.py` - Update stats from CSV files

## Deployment

The project is configured for deployment on Vercel:

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## Updating Stats

To update player statistics:

1. **Replace the consolidated Excel file** in the project root:
   - `T&CF12games.csv.xlsx`

2. **Run the update script**:
   ```bash
   python update_stats.py
   ```

3. **Restart the development server** to see changes:
   ```bash
   npm run dev
   ```

## Future Enhancements

- [ ] Supabase integration for real-time data
- [ ] GameChanger widget integration
- [ ] Admin dashboard for stat management
- [ ] Search functionality
- [ ] Player photo uploads
- [ ] Game highlights and videos

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is private and proprietary to Town & Country Ford Baseball Team. 