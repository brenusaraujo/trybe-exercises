/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users',
     { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
     });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('users');
  },
};
