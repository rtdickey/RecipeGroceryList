var config = require('../config.js');
var app = config.app;
var Ingredients = require('../models/ingredients.js');
var Recipes = require('../models/recipes.js');

app.get('/', function (req, res) {
  	Recipes.findOne({
	  	where: {
	  		id: 1
	  	}
	}).then(function(recipe) {
		recipe.getIngredients().then(function (ingredients) {
			var ingredient = ingredients;
			console.log(ingredients);
			res.render('../views/index.jade', { 'recipe': recipe, 'ingredient': ingredient });
		});
	});
})