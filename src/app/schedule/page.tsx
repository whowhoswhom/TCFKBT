import Navbar from '@/components/Navbar';

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Schedule</h1>
          <p className="text-xl text-gray-300">
            View upcoming games and results
          </p>
        </div>

        <div className="card">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Game Schedule</h2>
            <p className="text-gray-400">Powered by GameChanger</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 min-h-[400px] flex items-center justify-center">
            <div className="text-center text-gray-600">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-lg font-semibold mb-2">GameChanger Widget</p>
              <p className="text-sm">Schedule widget will be embedded here</p>
              <p className="text-xs text-gray-500 mt-2">
                Widget ID: 65757a6d-892e-404b-967b-8a8ce768c76c
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 