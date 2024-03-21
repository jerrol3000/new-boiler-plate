const express = require("express");
// const https = require('https');
// const fs = require('fs');
const authRoutes = require("./backend/routines/auth");
const messageRoutes = require("./backend/routines/messages");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());

// Static file-serving middleware
app.use(express.static(path.join(__dirname, "public")));

// Route handling for the root path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Routes
app.use("/auth", authRoutes);
app.use("/messages", messageRoutes);

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not found");
    err.status = 404;

    next(err);
  } else {
    next();
  }
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

// HTTPS Configuration
// const options = {
//   key: fs.readFileSync('path/to/private/key.pem'),
//   cert: fs.readFileSync('path/to/certificate/cert.pem')
// };

// Start server
const PORT = process.env.PORT || 3000;
// https.createServer(options, app).listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

app.get("/hello", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
