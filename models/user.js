var config = require('../config.js');
var Sequelize = config.Sequelize;
var sequelize = config.sequelize;

var User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name'
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

module.exports = User;