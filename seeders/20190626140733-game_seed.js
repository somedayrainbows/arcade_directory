'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Games', [{
      title: 'Ms. Pac Man',
      price: 100,
      releaseYear: 1981,
      active: true,
      arcade:
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Diner Dash',
      price: 50,
      releaseYear: 2002,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Space Invaders',
      price: 75,
      releaseYear: 1988,
      active: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, {})
  }
};
