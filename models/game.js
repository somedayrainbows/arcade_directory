'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    title: DataTypes.STRING,
    creator: DataTypes.STRING,
    releaseYear: DataTypes.INTEGER,
    category: DataTypes.STRING
  }, {});
  Game.associate = function(models) {
    Game.belongsTo(models.Arcade)
  };
  return Game;
};
