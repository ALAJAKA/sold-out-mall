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
      Product.hasMany(db.Order,{foreignKey:'productId'});
      Product.hasMany(db.Cart,{foreignKey:'productId'});
    }
  }
  Product.init({
    name: {
      type:DataTypes.STRING
    },
    price: {
      type:DataTypes.INTEGER
    },
    info: {
      type:DataTypes.STRING
    },
    img: {
      type:DataTypes.STRING
    },
    stock: {
      type:DataTypes.INTEGER
    },
    userId: {
      type:DataTypes.INTEGER
    }
  }, {
    sequelize,
    tableName:'products',
    modelName:'Product',
  });
  return Product;
};