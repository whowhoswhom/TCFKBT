import StatsTable, { Column } from '@/components/StatsTable';
import { getBattingStats, getPitchingStats, getAllPlayers } from '@/utils/fetchMockData';

interface BattingStat {
  player_id: string;
  stat_type: 'batting';
  season: string;
  GP: number;
  AB: number;
  H: number;
  HR: number;
  RBI: number;
  AVG: number;
  OBP: number;
  SLG: number;
  SB: number;
  player_name: string;
}

interface PitchingStat {
  player_id: string;
  stat_type: 'pitching';
  season: string;
  IP: number;
  ERA: number;
  W: number;
  L: number;
  SO: number;
  BB: number;
  WHIP: number;
  SV: number;
  player_name: string;
}

export default function StatsPage() {
  const battingStats = getBattingStats() as Omit<BattingStat, 'player_name'>[];
  const pitchingStats = getPitchingStats() as Omit<PitchingStat, 'player_name'>[];
  const players = getAllPlayers();

  // Join stats with player names
  const battingWithNames: BattingStat[] = battingStats.map(stat => {
    const player = players.find(p => p.id === stat.player_id);
    return {
      ...stat,
      player_name: player ? `${player.first_name} ${player.last_name}` : 'Unknown Player'
    };
  });

  const pitchingWithNames: PitchingStat[] = pitchingStats.map(stat => {
    const player = players.find(p => p.id === stat.player_id);
    return {
      ...stat,
      player_name: player ? `${player.first_name} ${player.last_name}` : 'Unknown Player'
    };
  });

  const battingColumns: Column<BattingStat>[] = [
    { key: 'player_name', label: 'Player' },
    { key: 'GP', label: 'GP' },
    { key: 'AB', label: 'AB' },
    { key: 'H', label: 'H' },
    { key: 'HR', label: 'HR' },
    { key: 'RBI', label: 'RBI' },
    { key: 'AVG', label: 'AVG' },
    { key: 'OBP', label: 'OBP' },
    { key: 'SLG', label: 'SLG' },
    { key: 'SB', label: 'SB' },
  ];

  const pitchingColumns: Column<PitchingStat>[] = [
    { key: 'player_name', label: 'Player' },
    { key: 'IP', label: 'IP' },
    { key: 'ERA', label: 'ERA' },
    { key: 'W', label: 'W' },
    { key: 'L', label: 'L' },
    { key: 'SO', label: 'SO' },
    { key: 'BB', label: 'BB' },
    { key: 'WHIP', label: 'WHIP' },
    { key: 'SV', label: 'SV' },
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-white p-8">
      <h1 className="text-4xl font-bold">Statistics</h1>
      <p className="text-xl mt-4">Team batting and pitching statistics</p>
      
      <div className="mt-8 space-y-8">
        <StatsTable<BattingStat>
          data={battingWithNames}
          columns={battingColumns}
          title="Batting Statistics"
        />

        <StatsTable<PitchingStat>
          data={pitchingWithNames}
          columns={pitchingColumns}
          title="Pitching Statistics"
        />
      </div>
      
      <div className="mt-8">
        <a href="/" className="text-ford-blue hover:underline">Back to Home</a>
      </div>
    </div>
  );
} 