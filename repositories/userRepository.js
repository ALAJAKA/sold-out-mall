const { Op } = require('sequelize');

// const { User } = require('../models');

// console.log(User);
class UserRepository {
  constructor(UserModel) {
    this.UserModel = UserModel;
  }

  findByPk = async (userId) => {
    const user = await this.UserModel.findByPk(userId);

    return user;
  };

  findByEmail = async (email) => {
    console.log('findByEmail', email);
    console.log(this.UserModel);
    try {
      const user = await this.UserModel.findOne({
        where: { email },
      });
      console.log('파인드바이이메일user', user);
      return user;
    } catch (error) {
      console.log('error나와라', error);
      return error;
    }
  };

  createUser = async (name, encryptedPassword, email) => {
    console.log('createUser 인자로 email', email);
    try {
      const userData = await this.UserModel.create({
        email,
        password: encryptedPassword,
        name,
        phone,
        address,
      });
      return userData;
    } catch (error) {
      return error;
    }
  };
}

module.exports = UserRepository;
