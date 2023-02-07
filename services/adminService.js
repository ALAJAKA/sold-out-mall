const AdminRepository = require('../repositories/adminRepository');
const {Product} = require('../models');
const { User } = require('../models');
const UserRepository = require('../repositories/userRepository');

class AdminService {
  adminRepository = new AdminRepository(User,Product);
  userRepository = new UserRepository(User);

  getList = async ()=>{
    const list = await this.adminRepository.getList();
    return list;
  }
  // 어드민 상품 1개 삭제
  delOne = async (id)=>{
    await this.adminRepository.delOne(id);
  }
  록
  create = async (list,files)=>{
    const photos = files['photos'];
    const photos2 = files['photos2'];
    const uploadList = [];
    console.log(photos);
    uploadList.push(['productName',list[0]]);
    for(let i =0; i<photos.length; i++){
      let s = "img"+(i+1);
      uploadList.push([s,"img/"+photos[i].originalname]);
    }
    uploadList.push(['price',list[1]]);
    uploadList.push(['stock',list[2]]);
    for(let i =3; i<photos2.length+3; i++){
      let s = "img"+(i+1);
      uploadList.push([s,"img/"+photos2[i-3].originalname]);
    }
    await this.adminRepository.create(uploadList);
    return "글 등록 성공";
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
  updateUserInfo = async (id, name, address, phone) => {
    const updateUser = await this.userRepository.updateUserInfo(
        id,
        name,
        address,
        phone
    );
    return updateUser;
  };
}

module.exports = AdminService;
