const AdminRepository = require('../repositories/adminRepository');
const {products} = require('../models');
const { User } = require('../models');
class AdminService{

    adminRepository = new AdminRepository(User,products);
    getList = async ()=>{

        const list = await this.adminRepository.getList();
        return list;
    }
    getOne = async (id)=>{
        const one = await this.adminRepository.getOne(id);
        return one;
    }

}

module.exports = AdminService;