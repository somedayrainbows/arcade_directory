'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Games', [{
      title: 'Ms. Pac Man',
      creator: 'Midway Games',
      releaseYear: 1981,
      category: 'Maze',
      ArcadeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Galaga',
      creator: 'Namco',
      releaseYear: 1981,
      category: 'Shooter',
      ArcadeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Galaga',
      creator: 'Namco',
      releaseYear: 1981,
      category: 'Shooter',
      ArcadeId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Burger Time',
      creator: 'Data East',
      releaseYear: 1983,
      category: 'Platform',
      ArcadeId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Mortal Kombat',
      creator: 'Midway Games',
      releaseYear: 1992,
      category: 'Fighting',
      ArcadeId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Space Invaders',
      creator: 'Taito',
      releaseYear: 1978,
      category: 'Shooter',
      ArcadeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, {})
  }
};
