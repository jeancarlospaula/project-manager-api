const express = require("express");
const routes = express.Router()
const CategoryController = require("../controllers/Category.controller");
const verifyUserToken = require("../middlewares/verifyUserToken.js")

routes.post('/', verifyUserToken, CategoryController.insert)
routes.get('/', verifyUserToken, CategoryController.findByUserId)

module.exports = routes