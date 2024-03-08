const express = require('express');
const https = require('https');
const fs = require('fs');
const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/messages');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/messages', messageRoutes);

// HTTPS Configuration
const options = {
  key: fs.readFileSync('path/to/private/key.pem'),
  cert: fs.readFileSync('path/to/certificate/cert.pem')
};

// Start server
const port = process.env.PORT || 3000;
https.createServer(options, app).listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
