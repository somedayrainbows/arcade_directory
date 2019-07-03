'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Games',
      'ArcadeId',
      {
       type: Sequelize.INTEGER,
       references: {
         model: 'Arcades',
         key: 'id',
       },
       onUpdate: 'CASCADE',
       onDelete: 'SET NULL'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Games',
      'ArcadeId'
    )
  }
};
