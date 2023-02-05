const { Op } = require('sequelize');

class UserRepository {
  constructor(UserModel) {
    this.UserModel = UserModel;
  }

  findByEmail = async (email) => {
    try {
      const user = await this.UserModel.findOne({
        where: { email },
      });
      return user;
    } catch (error) {
      return error;
    }
  };

  createUser = async (email, encryptedPassword, name, phone, address) => {
    try {
      const createUser = await this.UserModel.create({
        email,
        password: encryptedPassword,
        name,
        phone,
        address,
      });
      return createUser;
    } catch (error) {
      return error;
    }
  };

  findByPk = async (id) => {
    const user = await this.UserModel.findByPk(id);

    return user;
  };
}

module.exports = UserRepository;
