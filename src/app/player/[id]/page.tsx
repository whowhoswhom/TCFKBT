export default function PlayerPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-dark-bg text-white p-8">
      <h1 className="text-4xl font-bold">Player Profile</h1>
      <p className="text-xl mt-4">Player ID: {params.id}</p>
      <p className="mt-4">This should load instantly</p>
      <div className="mt-8">
        <a href="/" className="text-ford-blue hover:underline">Back to Home</a>
      </div>
    </div>
  );
} 