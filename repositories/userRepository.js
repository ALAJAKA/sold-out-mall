const { Op } = require('sequelize');

class UserRepository {
  constructor(userModel) {
    this.userModel = userModel;
  }

  findByPk = async (userId) => {
    const user = await this.userModel.findByPk(userId);

    return user;
  };

  findByEmail = async (email) => {
    try {
      const user = await this.userModel.findOne({
        where: { email },
      });
      return user;
    } catch (error) {
      return error;
    }
  };

  createUser = async (name, encryptedPassword, email) => {
    try {
      const userData = await this.userModel.create({
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
