const express = require("express");
const route = express.Router();
const createUserController = require("../Controller/CreateUser");

// console.log("Something");
// console.log(createUserController);
route.post("/", createUserController);

module.exports = route;
