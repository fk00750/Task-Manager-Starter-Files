const express = require("express");
const Router = express.Router();

const Register = (req, res, next) => {
  res.send("Register User");
};

const Login = (req, res, next) => {
  res.send("Login User");
};

module.exports = { Register, Login };
