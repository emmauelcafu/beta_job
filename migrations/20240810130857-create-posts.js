'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define aquí cómo crear la tabla
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      empresa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      vacantes: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      pago: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      foto: {
        type: Sequelize.STRING,
        allowNull: true
      },
      valoracion: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      observacion: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    // Define aquí cómo revertir la creación de la tabla
    await queryInterface.dropTable('Posts');
  }
};
