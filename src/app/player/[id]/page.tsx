import PlayerProfile from '@/components/PlayerProfile';
import { getPlayerWithStats } from '@/utils/fetchMockData';
import { notFound } from 'next/navigation';

export default function PlayerPage({ params }: { params: { id: string } }) {
  try {
    const data = getPlayerWithStats(params.id);

    if (!data.player) {
      notFound();
    }

    return <PlayerProfile player={data.player} stats={data.stats} />;
  } catch (error: any) {
    if (error?.digest === 'NEXT_NOT_FOUND') throw error;

    return (
      <div className="min-h-screen bg-dark-bg text-white p-8">
        <h1 className="text-4xl font-bold">Error</h1>
        <p className="text-xl mt-4">Failed to load player data.</p>
      </div>
    );
  }
}
