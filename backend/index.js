require("dotenv").config();
const { db } = require("./db");
const app = require("./server");
const PORT = process.env.PORT || 3000;

db.sync().then(() => {
  console.log("db synced");
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});
