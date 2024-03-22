require("dotenv").config();
const PORT = process.env.PORT || 3000;
const app = require("./server");

// start listening (and create a 'server' object representing our server)
app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
