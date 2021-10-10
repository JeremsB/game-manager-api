var DataTypes = require("sequelize").DataTypes;
var _category = require("./category");
var _console = require("./console");
var _game = require("./game");

function initModels(sequelize) {
  var category = _category(sequelize, DataTypes);
  var console = _console(sequelize, DataTypes);
  var game = _game(sequelize, DataTypes);

  game.belongsTo(category, { as: "category_category", foreignKey: "category"});
  category.hasMany(game, { as: "games", foreignKey: "category"});
  game.belongsTo(console, { as: "console_console", foreignKey: "console"});
  console.hasMany(game, { as: "games", foreignKey: "console"});

  return {
    category,
    console,
    game,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
