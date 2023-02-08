class ProductRepository{

    constructor(productModel) {
        this.productModel = productModel;
    }
    // 전체 리스트 가져오기
    getList = async ()=>{
        const list = await this.productModel.findAll({});
        return list;
    }
    //상세 조회 가져오기
    getOne =async (one)=>{
        const product = await this.productModel.findOne({
            where:{id:one}
        });
        return product;
    }
}

module.exports = ProductRepository;