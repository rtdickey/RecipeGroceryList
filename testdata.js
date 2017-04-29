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
		return Recipes.bulkCreate([
			{
				name: 'Baked Chicken Breasts', 
				instructions: '1. Preheat oven to 450 degrees. Pound chicken breasts lightly so they are of even thickness.<br />' +
				'2. Pour olive oil in a 13\" x 9\" baking dish. Lightly dredge the chicken through to coat it, then place chicken breasts side by side in the dish.<br />' +
				'3. In a small bowl, whisk together salt, pepper, garlic powder, onion powder and chili powder. Sprinkle the seasoning mixture over both sides of the chicken and rub it in with your hands. Place chicken breasts side by side, making sure there is no overlap.<br />' +
				'4. Bake in a preheated oven for 15-20 minutes, until juices are clear or a meat thermometer reads 160-170 degrees. *Note - depending on the size of your chicken breasts, it could take longer. Mine were pounded to less than an inch thick.<br />' +
				'5. Cover with foil and allow to rest for 5-10 minutes while the juices settle before slicing.<br />' + 
				'6. Serve hot.'
			},
			{
				name: 'Sweet Tea', 
				instructions: '1. Put water in tea maker.<br />' +
				'2. Add 4 tea bags (or 2 family size tea bags).<br />' +
				'3. Add sugar to drink container.<br />' +
				'4. Brew.<br />' +
				'5. Stir and add water to fill up container.<br />' + 
				'6. Enjoy over ice!'
			}
		]);
	});

	Ingredients.sync({force: true}).then(function () {
		return Ingredients.bulkCreate([
			{ name: 'Chicken Breasts' },
			{ name: 'Garlic Powder' },
			{ name: 'Onion Powder' },
			{ name: 'Chili Powder' },
			{ name: 'Black Pepper' },
			{ name: 'Kosher Salt' },
			{ name: 'Extra Virgin Olive Oil' },
			{ name: 'Lipton Tea' },
			{ name: 'Sugar' }
		]);
	});

	Recipes.belongsToMany(Ingredients, { through: RecipeIngredients , foreignKey: 'recipesId', targetKey: 'recipesId'});
	Ingredients.belongsToMany(Recipes, { through: RecipeIngredients, foreignKey: 'ingredientsId', targetKey: 'ingredientsId' });

	RecipeIngredients.sync({force: true}).then(function () {
		return RecipeIngredients.bulkCreate([
			{
				quantity: '4',
				measurement: '',
				ingredientsId: 1,
				recipesId: 1
			},
			{
				quantity: '1/2',
				measurement: 'tsp.',
				ingredientsId: 2,
				recipesId: 1
			},
			{
				quantity: '1/2',
				measurement: 'tsp.',
				ingredientsId: 3,
				recipesId: 1
			},
			{
				quantity: '1/2',
				measurement: 'tsp.',
				ingredientsId: 4,
				recipesId: 1
			},
			{
				quantity: '1/2',
				measurement: 'tsp.',
				ingredientsId: 5,
				recipesId: 1
			},
			{
				quantity: '1',
				measurement: 'tsp.',
				ingredientsId: 6,
				recipesId: 1
			},
			{
				quantity: '2',
				measurement: 'tbsp.',
				ingredientsId: 7,
				recipesId: 1
			},
			{
				quantity: '4',
				measurement: 'bags',
				ingredientsId: 8,
				recipesId: 2
			},
			{
				quantity: '3/4',
				measurement: 'cups',
				ingredientsId: 9,
				recipesId: 2
			}
		]);

		/*return RecipeIngredients.create({
			quantity: '1/4',
			measurement: 'tsp.',
			ingredientsId: 3,
			recipesId: 1
		});*/
	});
}

module.exports =  {
	createData: createData()
};