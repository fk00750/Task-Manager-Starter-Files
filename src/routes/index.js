const express = require("express");
const Router = express.Router();

const { Register, Login } = require("./auth");
const {
  Get_Task,
  Get_AllTask,
  Create_Task,
  Update_Task,
  Delete_Task,
} = require("./task");

Router.route("/register").post(Register);
Router.route("/login").post(Login);

Router.route("/:id").get(Get_Task).patch(Update_Task).delete(Delete_Task);

Router.route("/").get(Get_AllTask).post(Create_Task);

module.exports = Router;
