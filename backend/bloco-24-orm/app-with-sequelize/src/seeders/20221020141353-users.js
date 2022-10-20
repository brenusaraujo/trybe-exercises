'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users',
      [
        {
          fullName: 'Leonardo',
          email: 'leo@test.com',
        },
        {
          fullName: 'Breno',
          email: 'breno@test.com',
        }
      ], {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
