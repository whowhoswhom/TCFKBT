export default function TestPage() {
  return (
    <div className="min-h-screen bg-dark-bg text-white p-8">
      <h1 className="text-4xl font-bold">Test Page</h1>
      <p className="text-xl mt-4">If you can see this, the app is working!</p>
      <p className="mt-2">Time: {new Date().toLocaleTimeString()}</p>
    </div>
  );
} 