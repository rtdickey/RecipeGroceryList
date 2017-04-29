var config = require('../config.js');
var app = config.app;
var Ingredients = require('../models/ingredients.js');
var Recipes = require('../models/recipes.js');

app.get('/', function (req, res) {
  	Recipes.findAll().then(function(recipes) {
		var recipeList = [];
		var ingredientList = [];
		
		for (var i = 0; i < recipes.length; i++) {
			recipeList.push(recipes[i]);
			
			/*recipes[i].getIngredients().then(function (ingredients) {
				ingredientList.push(ingredients);
			});*/
		}

		res.render('../views/index.jade', { 'recipes': recipeList });
	});
})