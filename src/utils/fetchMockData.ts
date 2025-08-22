// Static data that works reliably
const playersData = [
  {
    "id": "bmedina",
    "first_name": "Bolivar",
    "last_name": "Medina",
    "jersey_number": 1,
    "position": "",
    "bats": "",
    "throws": "",
    "height": "",
    "weight": "",
    "birthdate": "",
    "hometown": "",
    "debut_year": "",
    "profile_picture_url": ""
  },
  {
    "id": "mgomez",
    "first_name": "Magdiel",
    "last_name": "Gomez",
    "jersey_number": 2,
    "position": "",
    "bats": "",
    "throws": "",
    "height": "",
    "weight": "",
    "birthdate": "",
    "hometown": "",
    "debut_year": "",
    "profile_picture_url": ""
  },
  {
    "id": "mliens",
    "first_name": "Marcos",
    "last_name": "Liens",
    "jersey_number": 4,
    "position": "",
    "bats": "",
    "throws": "",
    "height": "",
    "weight": "",
    "birthdate": "",
    "hometown": "",
    "debut_year": "",
    "profile_picture_url": ""
  },
  {
    "id": "rbalboa",
    "first_name": "Raiko",
    "last_name": "Balboa",
    "jersey_number": 5,
    "position": "",
    "bats": "",
    "throws": "",
    "height": "",
    "weight": "",
    "birthdate": "",
    "hometown": "",
    "debut_year": "",
    "profile_picture_url": ""
  },
  {
    "id": "gangulo",
    "first_name": "Gianni",
    "last_name": "Angulo",
    "jersey_number": 7,
    "position": "",
    "bats": "",
    "throws": "",
    "height": "",
    "weight": "",
    "birthdate": "",
    "hometown": "",
    "debut_year": "",
    "profile_picture_url": ""
  }
];

const playerStatsData: PlayerStats[] = [
  {
    "player_id": "bmedina",
    "stat_type": "batting",
    "season": "2024",
    "GP": 0,
    "AB": 0,
    "H": 0,
    "HR": 0,
    "RBI": 0,
    "AVG": 0,
    "OBP": 0,
    "SLG": 0,
    "SB": 0
  },
  {
    "player_id": "mgomez",
    "stat_type": "batting",
    "season": "2024",
    "GP": 1,
    "AB": 3,
    "H": 2,
    "HR": 0,
    "RBI": 1,
    "AVG": 0.667,
    "OBP": 0.667,
    "SLG": 0.667,
    "SB": 0
  },
  {
    "player_id": "mliens",
    "stat_type": "batting",
    "season": "2024",
    "GP": 2,
    "AB": 6,
    "H": 3,
    "HR": 1,
    "RBI": 2,
    "AVG": 0.500,
    "OBP": 0.500,
    "SLG": 0.833,
    "SB": 0
  },
  {
    "player_id": "rbalboa",
    "stat_type": "batting",
    "season": "2024",
    "GP": 1,
    "AB": 4,
    "H": 1,
    "HR": 0,
    "RBI": 0,
    "AVG": 0.250,
    "OBP": 0.250,
    "SLG": 0.250,
    "SB": 0
  },
  {
    "player_id": "gangulo",
    "stat_type": "batting",
    "season": "2024",
    "GP": 3,
    "AB": 9,
    "H": 4,
    "HR": 0,
    "RBI": 3,
    "AVG": 0.444,
    "OBP": 0.444,
    "SLG": 0.556,
    "SB": 1
  }
];

// TypeScript interfaces
export interface Player {
  id: string;
  first_name: string;
  last_name: string;
  jersey_number: number;
  position: string;
  bats: string;
  throws: string;
  height: string;
  weight: string;
  birthdate: string;
  hometown: string;
  debut_year: string;
  profile_picture_url: string;
}

interface BasePlayerStats {
  player_id: string;
  stat_type: 'batting' | 'pitching' | 'fielding';
  season: string;
}

export interface BattingStats extends BasePlayerStats {
  stat_type: 'batting';
  GP: number;
  AB: number;
  H: number;
  HR: number;
  RBI: number;
  AVG: number;
  OBP: number;
  SLG: number;
  SB: number;
}

export interface PitchingStats extends BasePlayerStats {
  stat_type: 'pitching';
  IP: number;
  ERA: number;
  W: number;
  L: number;
  SO: number;
  BB: number;
  WHIP: number;
  SV: number;
}

export interface FieldingStats extends BasePlayerStats {
  stat_type: 'fielding';
  GP: number;
  TC: number;
  PO: number;
  A: number;
  E: number;
  FPCT: number;
}

export type PlayerStats = BattingStats | PitchingStats | FieldingStats;

// Utility functions
export const getAllPlayers = (): Player[] => {
  return playersData as Player[];
};

export const getPlayerById = (id: string): Player | undefined => {
  return playersData.find(player => player.id === id) as Player | undefined;
};

export function getPlayerStats(playerId?: string): PlayerStats[];
export function getPlayerStats<T extends PlayerStats['stat_type']>(playerId: string | undefined, statType: T): Extract<PlayerStats, { stat_type: T }>[];
export function getPlayerStats(playerId?: string, statType?: PlayerStats['stat_type']): PlayerStats[] {
  let stats = playerStatsData;

  if (playerId) {
    stats = stats.filter(stat => stat.player_id === playerId);
  }

  if (statType) {
    stats = stats.filter(stat => stat.stat_type === statType);
  }

  return stats;
}

export const getBattingStats = (): BattingStats[] => {
  return getPlayerStats(undefined, 'batting');
};

export const getPitchingStats = (): PitchingStats[] => {
  return getPlayerStats(undefined, 'pitching');
};

export const getFieldingStats = (): FieldingStats[] => {
  return getPlayerStats(undefined, 'fielding');
};

export const getPlayerWithStats = (playerId: string): {
  player: Player | undefined;
  stats: {
    batting?: BattingStats;
    pitching?: PitchingStats;
    fielding?: FieldingStats;
  };
} => {
  const player = getPlayerById(playerId);
  const stats = getPlayerStats(playerId);

  return {
    player,
    stats: {
      batting: stats.find(s => s.stat_type === 'batting') as BattingStats | undefined,
      pitching: stats.find(s => s.stat_type === 'pitching') as PitchingStats | undefined,
      fielding: stats.find(s => s.stat_type === 'fielding') as FieldingStats | undefined,
    },
  };
};