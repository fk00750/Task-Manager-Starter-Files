const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("mongoose").model("User");

const fs = require("fs");
const path = require("path");

const pathToKey = "";
const PUB_KEY = "";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  Key: PUB_KEY,
  algorithms: ["RS256"],
};

module.exports = (passport) => {};
