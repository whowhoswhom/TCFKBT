'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Player,
  BattingStats,
  PitchingStats,
  FieldingStats,
} from '@/utils/fetchMockData';

interface PlayerProfileProps {
  player: Player;
  stats: {
    batting?: BattingStats;
    pitching?: PitchingStats;
    fielding?: FieldingStats;
  };
}

export default function PlayerProfile({ player, stats }: PlayerProfileProps) {
  const placeholderImage = 'https://via.placeholder.com/300';
  const imageUrl = player.profile_picture_url || placeholderImage;

  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/roster" className="inline-flex items-center text-ford-blue hover:text-blue-400 mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Roster
        </Link>

        {/* Player Header */}
        <div className="card mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-600 flex-shrink-0">
              <Image
                src={imageUrl}
                alt={`${player.first_name} ${player.last_name}`}
                width={192}
                height={192}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = placeholderImage;
                }}
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {player.first_name} {player.last_name}
              </h1>
              
              <div className="inline-block bg-ford-blue text-white px-4 py-2 rounded-full text-lg font-bold mb-4">
                #{player.jersey_number}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                {player.position && (
                  <div>
                    <span className="font-semibold">Position:</span> {player.position}
                  </div>
                )}
                {player.bats && (
                  <div>
                    <span className="font-semibold">Bats:</span> {player.bats}
                  </div>
                )}
                {player.throws && (
                  <div>
                    <span className="font-semibold">Throws:</span> {player.throws}
                  </div>
                )}
                {player.height && (
                  <div>
                    <span className="font-semibold">Height:</span> {player.height}
                  </div>
                )}
                {player.weight && (
                  <div>
                    <span className="font-semibold">Weight:</span> {player.weight}
                  </div>
                )}
                {player.hometown && (
                  <div>
                    <span className="font-semibold">Hometown:</span> {player.hometown}
                  </div>
                )}
                {player.birthdate && (
                  <div>
                    <span className="font-semibold">Birthdate:</span> {player.birthdate}
                  </div>
                )}
                {player.debut_year && (
                  <div>
                    <span className="font-semibold">Debut Year:</span> {player.debut_year}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Batting Stats */}
          {stats.batting && (
            <div className="card">
              <h2 className="text-2xl font-bold text-white mb-6">Batting Statistics</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody className="space-y-2">
                    {Object.entries(stats.batting).map(([key, value]) => {
                      if (key === 'player_id' || key === 'stat_type' || key === 'season') return null;
                      return (
                        <tr key={key} className="border-b border-gray-700">
                          <td className="py-2 text-gray-300 font-medium">{key}</td>
                          <td className="py-2 text-white text-right">{value}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Pitching Stats */}
          {stats.pitching && (
            <div className="card">
              <h2 className="text-2xl font-bold text-white mb-6">Pitching Statistics</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody className="space-y-2">
                    {Object.entries(stats.pitching).map(([key, value]) => {
                      if (key === 'player_id' || key === 'stat_type' || key === 'season') return null;
                      return (
                        <tr key={key} className="border-b border-gray-700">
                          <td className="py-2 text-gray-300 font-medium">{key}</td>
                          <td className="py-2 text-white text-right">{value}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 