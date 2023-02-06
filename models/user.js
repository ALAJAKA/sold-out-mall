'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
        User.belongsTo(db.Cart,{foreignKey:'cartId'});
        User.belongsTo(db.Order,{foreignKey:'orderId'});
    }
  }
  User.init(
    {
      email: {
          type:DataTypes.STRING
      },
      name: {
          type:DataTypes.STRING
      },
      password:{
          type:DataTypes.STRING
      },
      address:{
          type:DataTypes.STRING
      },
      phone: {
          type:DataTypes.STRING
      },
      point: {
          type:DataTypes.INTEGER
      },
      cartId: {
          type:DataTypes.INTEGER
      },
      orderId: {
          type:DataTypes.INTEGER
      },
      role:{
          type:DataTypes.INTEGER
      },
    },
    {
      sequelize,
        tableName:'users',
      modelName: 'User',
    }
  );
  return User;
};
