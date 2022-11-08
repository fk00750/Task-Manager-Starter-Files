const mongoose = require("mongoose");

require("dotenv").config({ path: "./.env" });

let dbString = "mongodb://localhost:27017/TaskManager";

if (process.env.NODE_ENV === "PRODUCTION")
  dbString = `mongodb+srv://TaskManager:${process.env.DB_PASSWORD}@cluster0.6jdice5.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(dbString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});