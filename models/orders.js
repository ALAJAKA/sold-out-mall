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
      db.Order.hasMany(db.Product,{
        foreignKey:{name:'orderId'},
        sourceKey:'id'
      });
      db.Order.belongsTo(db.User,{
        foreignKey:{name:'userId'},
        targetKey:'id'
      });
      db.Order.belongsTo(db.Cart,{
        foreignKey:{name:'cartId'},
        targetKey:'id'
      });
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
    userId: {
      type:DataTypes.INTEGER
    },
    cartId: {
      type:DataTypes.INTEGER
    },
  }, {
    sequelize,
    tableName: 'orders',
    modelName: 'Order',
  });
  return Order;
};