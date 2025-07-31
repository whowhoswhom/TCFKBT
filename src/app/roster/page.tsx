import { getAllPlayers } from '@/utils/fetchMockData';

export default function RosterPage() {
  const players = getAllPlayers();

  return (
    <div className="min-h-screen bg-dark-bg text-white p-8">
      <h1 className="text-4xl font-bold">Team Roster</h1>
      <p className="text-xl mt-4">Found {players.length} players</p>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {players.map((player) => (
          <div key={player.id} className="bg-dark-card p-4 rounded-lg hover:bg-gray-700 transition-colors">
            <h3 className="text-lg font-semibold">
              {player.first_name} {player.last_name}
            </h3>
            <p className="text-gray-400">#{player.jersey_number}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <a href="/" className="text-ford-blue hover:underline">Back to Home</a>
      </div>
    </div>
  );
} 