// app logic goes here
const mongoose = require("mongoose");
const app = require("./app");

require("dotenv").config({ path: "./.env" });
require("./config/database");

const PORT = process.env.PORT || 5000;

mongoose.connection.on("connected", () => {
  app.listen(
    PORT,
    console.log(`Server is connected to database and running on port ${PORT}`)
  );
});