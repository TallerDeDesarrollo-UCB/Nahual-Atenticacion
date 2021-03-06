'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuarios', {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
        },
        permisoEgresades:{
          type: Sequelize.BOOLEAN,
          defaultValue: false
        },
        permisoEmpresas:{
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        permisoAdmin:{
          type: Sequelize.BOOLEAN,
          defaultValue: false
        },
        permisoCursosPeriodos:{
          type: Sequelize.BOOLEAN,
          defaultValue: false
        }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Usuarios');
  }
};