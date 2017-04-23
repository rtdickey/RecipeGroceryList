var express = require('express')
var Sequelize = require('sequelize')

var app = express()
var sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/recipegrocerylistdb');

module.exports = {
	app: app,
	Sequelize: Sequelize,
	sequelize: sequelize
}