var config = require('../config.js');
var app = config.app;
var RecipeIngredients = require('../models/recipeingredients.js');
var Recipes = require('../models/recipes.js');

app.get('/', function (req, res) {
  	RecipeIngredients.findOne({
	  	where: {
	  		id: 1
	  	}
	}).then(function(ri) {
		res.send('How much: ' + ri.quantity + ' ' + ri.measurement);
	})
})