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
      db.User.hasMany(db.Product, {
        foreignKey: { name: 'userId' },
        sourceKey: 'id',
      });
      db.Order.hasMany(db.Order, {
        foreignKey: { name: 'userId' },
        sourceKey: 'id',
      });
      db.Order.hasMany(db.Cart, {
        foreignKey: { name: 'userId' },
        sourceKey: 'id',
      });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      point: {
        type: DataTypes.INTEGER,
      },

      role: {
        type: DataTypes.INTEGER,
        default: 0,
      },
    },
    {
      sequelize,
      tableName: 'users',
      modelName: 'User',
    }
  );
  return User;
};
