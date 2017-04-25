//var User = require('./models/user.js');
var Recipes = require('./models/recipes.js');
var Ingredients = require('./models/ingredients.js');
var RecipeIngredients = require('./models/recipeingredients.js');

var createData = function() {
	/*User.sync({force: true}).then(function () {
	  // Table created
	  return User.create({
	    firstName: 'Ryan',
	    lastName: 'Dickey'
	  });
	});*/

	Recipes.sync({force: true}).then(function () {
		return Recipes.create(
			{
				name: 'Baked Chicken', 
				instructions: 'Place Instructions Here.'
			}
		);
	});

	Ingredients.sync({force: true}).then(function () {
		return Ingredients.bulkCreate([
			{ name: 'Chicken' },
			{ name: 'Garlic Powder' },
			{ name: 'Onion Powder' },
			{ name: 'Chili Powder' },
			{ name: 'Black Pepper' },
			{ name: 'Kosher Salt' },
			{ name: 'Extra Virgin Olive Oil' }
		]);
	});

	Recipes.belongsToMany(Ingredients, { through: RecipeIngredients , foreignKey: 'recipesId', targetKey: 'recipesId'});
	Ingredients.belongsToMany(Recipes, { through: RecipeIngredients, foreignKey: 'ingredientsId', targetKey: 'ingredientsId' });
	
	RecipeIngredients.sync({force: true}).then(function () {
		return RecipeIngredients.create({
			quantity: '1/4',
			measurement: 'tsp.',
			ingredientsId: 3,
			recipesId: 1
		});
	});
}

module.exports =  {
	createData: createData()
};