'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books',
      [
        {
          title: 'Harry Potter e a Pedra Filosofal',
          author: 'J. K. Rowling',
          pageQuantity: 255,
          createdAt: '2022-10-21 20:13:31',
          updatedAt: '2022-10-21 20:13:31'
        },
        {
          title: 'A Guerra dos Tronos',
          author: 'George R. R. Martin',
          pageQuantity: 694,
          createdAt: '2022-10-21 20:13:31',
          updatedAt: '2022-10-21 20:13:31'
        },
        {
          title: 'Jogos Vorazes',
          author: 'Suzanne Collins',
          pageQuantity: 256,
          createdAt: '2022-10-21 20:13:31',
          updatedAt: '2022-10-21 20:13:31'
        },
        {
          title: '1822',
          author: 'Laurentino Gomes',
          pageQuantity: 352,
          createdAt: '2022-10-21 20:13:31',
          updatedAt: '2022-10-21 20:13:31'
        },
      ],
      {});

  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  }
};
