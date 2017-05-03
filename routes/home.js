var config = require('../config.js');
var app = config.app;
var Ingredients = require('../models/ingredients.js');
var Recipes = require('../models/recipes.js');

app.get('/', function (req, res) {
  	Recipes.findAll().then(function(recipes) {
		var numOfRecipes = recipes.length;
		var recipeList = new Array(numOfRecipes);
		var ingredientList = new Array(numOfRecipes);
		var count = 0;

		var finalCallback = function() {
			res.render('../views/index.jade', { 'recipes': recipeList, 'ingredients': ingredientList });
		}

		var onSuccess = function(index, ingredients) {
			count++;
			ingredientList[index] = ingredients;
			if(count === recipes.length) {
				finalCallback();
			}
		}

		for (var i = 0; i < numOfRecipes; i++) {
			recipeList[i] = recipes[i];
			recipes[i].getIngredients().then(onSuccess.bind(null, i));
		}
		
	});
})