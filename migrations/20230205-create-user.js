'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      point: {
        type: Sequelize.INTEGER,
      },
      orderId: {
        type: Sequelize.INTEGER,
      },
      cartId: {
        type: Sequelize.INTEGER,
      },
      role:{
        type:Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }).then(async () => {
      await queryInterface.addConstraint('users', {
        fields: ['orderId'],
        type: 'foreign key',
        name: 'orders_users_fk',
        references: {
          table: 'orders',
          field: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
      await queryInterface.addConstraint('users', {
        fields: ['cartId'],
        type: 'foreign key',
        name: 'carts_users_fk',
        references: {
          table: 'carts',
          field: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  },
};
