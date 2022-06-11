const express = require("express");
const routes = express.Router()
const CategoryController = require("../controllers/Category.controller");

routes.post('/', CategoryController.insert)
routes.get('/', CategoryController.findUserCategories)

module.exports = routes