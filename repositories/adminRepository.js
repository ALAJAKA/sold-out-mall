class AdminRepository {
  constructor(userModel, productModel) {
    this.userModel = userModel;
    this.productModel = productModel;
  }
  getList = async () => {
    const list = await this.productModel.findAll({});
    return list;
  };
  getOne = async (one) => {
    const product = await this.productModel.findOne({
      where: { id: one },
    });
    return product;
  };

  updateUserInfo = async (userId, name, address, phone) => {
    const UpdateUserInfo = await userModel.update(
      { name, address, phone },
      { where: { id: userId } }
    );
    return UpdateUserInfo;
  };
}

findUser = async (userId) => {
  try {
    const existUser = await this.userModel.findOne({
      where: { id: userId },
      paranoid: false,
    });
    return existUser;
  } catch (error) {
    return { errorMessage: error };
  }
};

deleteUser = async (userId) => {
  try {
    const deleteUser = await this.userModel.destroy({
      where: { id: userId },
    });
    return deleteUser;
  } catch (error) {
    return { errorMessage: error };
  }
};

module.exports = AdminRepository;
