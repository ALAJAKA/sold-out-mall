const AdminService = require('../services/adminService');
const UserService = require('../services/userService.js');

class AdminController {
  adminService = new AdminService();
  userService = new UserService();

  getList = async (req, res) => {
    const list = await this.adminService.getList();
    res.send(list);
  };
  getOne = async (req, res) => {
    const { productId } = req.params;
    const one = await this.adminService.getOne(productId);
    console.log(one);
    res.render('productDetail');
  };

  getUserList;

  updateUserInfo = async (req, res) => {
    try {
      const { id, name, address, phone } = req.body;
      await this.usersService.updateUserInfo(id, name, address, phone);
      res.status(201).json({ message: '회원 정보 수정이 완료되었습니다.' });
    } catch {
      return res.status(401).json({ message: error.message });
    }
  };

  deleteUser = async (req, res) => {
    try {
      const { userId } = req.params;

      const user = await this.adminService.deleteUser(userId);
      if (user.errorMessage) {
        return res.status(user.code).json({ errorMessage: user.errorMessage });
      }
      return res.json({ message: '회원 삭제 완료' });
    } catch (error) {
      return res.status(500).json({
        errorMessage: error.errorMessage,
      });
    }
  };

  deleteUser;
}

module.exports = AdminController;
