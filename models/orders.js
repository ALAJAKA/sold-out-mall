'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
      Order.belongsTo(db.Product,{foreignKey:'productId'});
      Order.belongsTo(db.Cart,{foreignKey:'cartId'});
      Order.hasMany(db.User,{foreignKey:'orderId'});
    }
  }
  Order.init({
    name: {
      type:DataTypes.STRING
    },
    phone:{
      type:DataTypes.STRING
    },
    address: {
      type:DataTypes.STRING
    },
    price: {
      type:DataTypes.INTEGER
    },
    count: {
      type:DataTypes.INTEGER
    },
    cartId: {
      type:DataTypes.INTEGER
    },
    productId:{
      type:DataTypes.INTEGER
    },
  }, {
    sequelize,
    tableName: 'orders',
    modelName: 'Order',
  });
  return Order;
};