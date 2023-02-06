'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
      // define association here
      Cart.belongsTo(db.Product,{foreignKey:'productId'});
      Cart.hasMany(db.User,{foreignKey:'productId'});
    }
  }
  Cart.init({
    count: {
      type:DataTypes.INTEGER
    },
    price: {
      type:DataTypes.INTEGER
    },
    productId:{
      type:DataTypes.INTEGER
    }
  }, {
    sequelize,
    tableName: 'carts',
    modelName: 'Cart',
  });
  return Cart;
};