var config = require('../config');
var Sequelize = config.Sequelize;
var sequelize = config.sequelize;
var Ingredients = require('./ingredients.js');
var Recipes = require('./recipes.js');

var RecipeIngredients = sequelize.define('recipeingredients', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	quantity: {
		type: Sequelize.STRING
	},
	measurement: {
		type: Sequelize.STRING
	}
}, {
	freezeTableName: true
});

module.exports = RecipeIngredients;