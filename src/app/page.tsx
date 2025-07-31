export default function HomePage() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '20px', minHeight: '100vh' }}>
      <h1>Home Page - Minimal Test</h1>
      <p>This should load instantly.</p>
      <p>Time: {new Date().toLocaleTimeString()}</p>
      
      <div style={{ marginTop: '20px' }}>
        <a href="/debug" style={{ color: 'blue' }}>Go to Debug Page</a>
      </div>
    </div>
  );
} 