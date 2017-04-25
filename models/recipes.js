var config = require('../config.js');
var Sequelize = config.Sequelize;
var sequelize = config.sequelize;

var Recipes = sequelize.define('recipes', {
	name: {
		type: Sequelize.STRING
	},
	instructions: {
		type: Sequelize.STRING
	}
}, {
	freezeTableName: true
});

module.exports = Recipes;