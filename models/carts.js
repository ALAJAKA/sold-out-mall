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
      db.Cart.hasMany(db.Product,{
        foreignKey:{name:'cartId',allowNull:false},
        sourceKey:'id'
      });
      db.Cart.belongsTo(db.User,{
        foreignKey:{name:'userId'},
        targetKey:'id'
      });
      db.Cart.hasOne(db.Order,{
        foreignKey:{name:'cartId',allowNull:false},
        sourceKey:'id'
      });
    }
  }
  Cart.init({
    count: {
      type:DataTypes.INTEGER
    },
    price: {
      type:DataTypes.INTEGER
    },
  }, {
    sequelize,
    tableName: 'carts',
    modelName: 'Cart',
  });
  return Cart;
};