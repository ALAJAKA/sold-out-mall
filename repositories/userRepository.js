const { Op } = require('sequelize');

class UserRepository {
  constructor(UserModel) {
    this.UserModel = UserModel;
  }

  //에러해결완료
  findByEmail = async (email) => {
    try {
      const user = await this.UserModel.findOne({
        where: { email },
      });
      console.log('레포지토리 user', user);
      return user;
    } catch (error) {
      console.log('error나와라', error);
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
