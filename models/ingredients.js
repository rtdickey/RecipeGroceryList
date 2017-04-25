var config = require('../config.js');
var Sequelize = config.Sequelize;
var sequelize = config.sequelize;

var Ingredients = sequelize.define('ingredients', {
	name: {
		type: Sequelize.STRING
	}
}, {
	freezeTableName: true
});

module.exports = Ingredients;