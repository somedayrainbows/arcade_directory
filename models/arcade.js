'use strict';
module.exports = (sequelize, DataTypes) => {
  const Arcade = sequelize.define('Arcade', {
    name: DataTypes.STRING,
    phoneNumber: DataTypes.BIGINT,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.BIGINT
  }, {});
  Arcade.associate = function(models) {
    Arcade.hasMany(models.Game)
  };
  return Arcade;
};
