'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Arcades', [{
      name: 'Hyperspace Arcade',
      phoneNumber: 3039935583,
      address: '1601 Reed St #100',
      city: 'Lakewood',
      state: 'CO',
      zip: 80214,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Press Play Bar LP',
      phoneNumber: 7205084916,
      address: '1005 Pearl St',
      city: 'Boulder',
      state: 'CO',
      zip: 80302,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'The 1UP Arcade Bar - LoDo',
      phoneNumber: 3037362230,
      address: '1925 Blake St',
      city: 'Denver',
      state: 'CO',
      zip: 80202,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Arcades', null, {})
  }
};
