const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const Game = sequelize.define('game', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    picture: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'category',
        key: 'id'
      }
    },
    console: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'console',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'game',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "game_category_id_fk",
        using: "BTREE",
        fields: [
          { name: "category" },
        ]
      },
      {
        name: "game_console_id_fk",
        using: "BTREE",
        fields: [
          { name: "console" },
        ]
      },
    ]
  });

  return Game;
};
