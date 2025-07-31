export default function DebugPage() {
  return (
    <html>
      <head>
        <title>Debug Test</title>
      </head>
      <body style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
        <h1>Debug Test Page</h1>
        <p>If you can see this, the basic Next.js is working.</p>
        <p>Time: {new Date().toLocaleTimeString()}</p>
        <p>This page has NO dependencies, NO CSS, NO data loading.</p>
      </body>
    </html>
  );
} 