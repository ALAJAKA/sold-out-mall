'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      img1: {
        type: Sequelize.STRING
      },
      img2: {
        type: Sequelize.STRING
      },
      img3: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      stock: {
        type: Sequelize.INTEGER
      },
      img4: {
        type: Sequelize.STRING
      },
      img5: {
        type: Sequelize.STRING
      },
      img6: {
        type: Sequelize.STRING
      },
      img7: {
        type: Sequelize.STRING
      },
      img8: {
        type: Sequelize.STRING
      },
      info: {
        type: Sequelize.STRING
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
    })
        // .then(async () => {
    //   await queryInterface.addConstraint('products', {
    //     fields: ['userId'],
    //     type: 'foreign key',
    //     name: 'users_products_fk',
    //     references: {
    //       table: 'users',
    //       field: 'id',
    //     },
    //     onDelete: 'cascade',
    //     onUpdate: 'cascade',
    //   });
    // });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};