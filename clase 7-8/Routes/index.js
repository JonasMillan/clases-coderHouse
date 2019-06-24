const express = require('express');
const api = express.Router();

const userController = require('../Controllers/userController.js')
const likesController = require('../Controllers/likesController.js')

api.get("/users/:id", userController.findUserById);
api.post("/register", userController.register)
api.post("/login", userController.login)

api.get("/likes/user/:id", likesController.getUserLikes);
api.post("/likes/user/:id", likesController.setUserLikes);

module.exports = api
