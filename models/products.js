'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
      db.Product.belongsTo(db.Cart,{
        foreignKey:{name:'cartId'},
        targetKey:'id'
      });
      db.Product.belongsTo(db.User,{
        foreignKey:{name:'userId'},
        targetKey:'id'
      });
      db.Product.belongsTo(db.Order,{
        foreignKey:{name:'orderId'},
        targetKey:'id'
      });

    }
  }
  Product.init({
    name: {
      type:DataTypes.STRING
    },
    img1: {
      type:DataTypes.STRING
    },
    img2: {
      type:DataTypes.STRING
    },
    img3: {
      type:DataTypes.STRING
    },
    price: {
      type:DataTypes.INTEGER
    },
    stock: {
      type:DataTypes.INTEGER
    },
    img4: {
      type:DataTypes.STRING
    },
    img5: {
      type:DataTypes.STRING
    },
    img6: {
      type:DataTypes.STRING
    },
    img7: {
      type:DataTypes.STRING
    },
    img8: {
      type:DataTypes.STRING
    },
    info: {
      type:DataTypes.STRING
    },
    userId: {
      type:DataTypes.INTEGER
    },
    orderId: {
      type:DataTypes.INTEGER
    },
  }, {
    sequelize,
    tableName:'products',
    modelName:'Product',
  });
  return Product;
};