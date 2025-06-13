const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Simple test route
app.get('/test', (req, res) => {
  res.json({ message: ' Test API is working!  ' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
