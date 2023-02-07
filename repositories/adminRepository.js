const {and} = require("sequelize");

class AdminRepository {
  constructor(userModel, productModel) {
    this.userModel = userModel;
    this.productModel = productModel;
  }
  // 상품 리스트 받기
  getList = async ()=>{
    const list = await this.productModel.findAll({});
    return list;
  }
  delOne = async (id)=>{
    await this.productModel.destroy({
      where: {id : id}
    });
  }

  //상품 등록
  create = async (uploadList)=>{
    const datas = uploadList;
    let productName = "";
    let img1 = "";
    let img2 = "";
    let img3 = "";
    let price = 0;
    let stock = 0;
    let img4 = "";
    let img5 = "";
    let img6 = "";
    let img7 = "";
    let img8 = "";
    let info = "";
    for(let i=0; i<datas.length; i++){
      if(datas[i][0]==="productName"){
        productName=datas[i][1];
      }else if(datas[i][0]==='img1'){
        img1=datas[i][1];
      }else if(datas[i][0]==='img2'){
        img2=datas[i][1];
      }else if(datas[i][0]==='img3'){
        img3=datas[i][1];
      }else if(datas[i][0]==='price'){
        price=parseInt(datas[i][1]);
      }else if(datas[i][0]==='stock'){
        stock=parseInt(datas[i][1]);
      }else if(datas[i][0]==='img4'){
        img4=datas[i][1];
      }else if(datas[i][0]==='img5'){
        img5=datas[i][1];
      }else if(datas[i][0]==='img6'){
        img6=datas[i][1];
      }else if(datas[i][0]==='img7'){
        img7=datas[i][1];
      }else if(datas[i][0]==='img8'){
        img8=datas[i][1];
      }else if(datas[i][0]==='info'){
        info=datas[i][1];
      }
    }
    await this.productModel.create({
      name:productName,
      img1:img1,
      img2:img2,
      img3:img3,
      price:price,
      stock:stock,
      img4:img4,
      img5:img5,
      img6:img6,
      img7:img7,
      img8:img8,
      info:info,
    });
  }

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
