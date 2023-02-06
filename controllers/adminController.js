const AdminService = require("../services/adminService");
class AdminController{
    adminService = new AdminService();

    getList = async (req,res)=>{
        const list = await this.adminService.getList();
        res.send(list);
    }
    getOne = async (req,res)=>{
        const {productId} =req.params;
        const one = await this.adminService.getOne(productId);
        console.log(one);
        res.render('productDetail');
    }
}

module.exports = AdminController;