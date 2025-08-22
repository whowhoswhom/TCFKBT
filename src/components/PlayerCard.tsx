import Image from 'next/image';
import Link from 'next/link';
import { Player } from '@/utils/fetchMockData';

interface PlayerCardProps {
  player: Player;
}

export default function PlayerCard({ player }: PlayerCardProps) {
  const placeholderImage = 'https://via.placeholder.com/150';
  const imageUrl = player.profile_picture_url || placeholderImage;

  return (
    <Link href={`/player/${player.id}`} className="block">
      <div className="card hover:bg-gray-700 transition-colors cursor-pointer group">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-600">
            <Image
              src={imageUrl}
              alt={`${player.first_name} ${player.last_name}`}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
          
          <h3 className="text-lg font-semibold text-white group-hover:text-ford-blue transition-colors">
            {player.first_name} {player.last_name}
          </h3>
          
          <div className="text-sm text-gray-400 mt-2">
            <div className="flex justify-center items-center space-x-2">
              <span className="bg-ford-blue text-white px-2 py-1 rounded text-xs font-bold">
                #{player.jersey_number}
              </span>
              {player.position && (
                <span className="text-gray-300">{player.position}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
} 