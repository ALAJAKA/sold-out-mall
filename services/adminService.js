const AdminRepository = require('../repositories/adminRepository');
const { products } = require('../models');
const { User } = require('../models');
const UserRepository = require('../repositories/userRepository');

class AdminService {
  adminRepository = new AdminRepository(User, products);
  userRepository = new UserRepository(User);

  getList = async () => {
    const list = await this.adminRepository.getList();
    return list;
  };
  getOne = async (id) => {
    const one = await this.adminRepository.getOne(id);
    return one;
  };

  updateUserInfo = async (id, name, address, phone) => {
    const updateUser = await this.userRepository.updateUserInfo(
      id,
      name,
      address,
      phone
    );
    return updateUser;
  };

  deleteUser = async (userId) => {
    try {
      const existUser = await this.userRepository.findUser(userId);
      if (existUser) {
        return { code: 409, errorMessage: '이미 삭제한 회원입니다.' };
      }

      const deleteUser = await this.userRepository.deleteUser(userId);
      return deleteUser;
    } catch (error) {
      return { errorMessage: error };
    }
  };
}

module.exports = AdminService;
