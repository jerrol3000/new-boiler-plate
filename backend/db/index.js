const db = require("./database");
const User = require("./models/Users");

// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).

module.exports = {
  db,
  User,
};
