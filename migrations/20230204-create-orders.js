'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      count: {
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.INTEGER
      },
      cartId: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(async () => {
      await queryInterface.addConstraint('orders', {
        fields: ['productId'],
        type: 'foreign key',
        name: 'products_orders_fk',
        references: {
          table: 'products',
          field: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
    await queryInterface.addConstraint('orders', {
      fields: ['cartId'],
      type: 'foreign key',
      name: 'carts_orders_fk',
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
    await queryInterface.dropTable('orders');
  }
};