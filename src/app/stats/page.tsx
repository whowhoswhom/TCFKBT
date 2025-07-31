import { getBattingStats, getPitchingStats, getAllPlayers } from '@/utils/fetchMockData';

interface StatsTableProps {
  data: any[];
  columns: { key: string; label: string }[];
  title: string;
}

function StatsTable({ data, columns, title }: StatsTableProps) {
  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-700">
              {columns.map((column) => (
                <th key={column.key} className="py-3 px-4 text-left text-gray-300 font-semibold">
                  <span>{column.label}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-gray-700">
                {columns.map((column) => (
                  <td key={column.key} className="py-3 px-4 text-white">
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function StatsPage() {
  const battingStats = getBattingStats();
  const pitchingStats = getPitchingStats();
  const players = getAllPlayers();

  // Join stats with player names
  const battingWithNames = battingStats.map(stat => {
    const player = players.find(p => p.id === stat.player_id);
    return {
      ...stat,
      player_name: player ? `${player.first_name} ${player.last_name}` : 'Unknown Player'
    };
  });

  const pitchingWithNames = pitchingStats.map(stat => {
    const player = players.find(p => p.id === stat.player_id);
    return {
      ...stat,
      player_name: player ? `${player.first_name} ${player.last_name}` : 'Unknown Player'
    };
  });

  const battingColumns = [
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

  const pitchingColumns = [
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
        <StatsTable
          data={battingWithNames}
          columns={battingColumns}
          title="Batting Statistics"
        />
        
        <StatsTable
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