const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Simple Test</title></head>
      <body style="background-color: black; color: white; padding: 20px;">
        <h1>Simple Express Server Test</h1>
        <p>If you can see this, the server is working.</p>
        <p>Time: ${new Date().toLocaleTimeString()}</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Simple server running at http://localhost:${port}`);
}); 