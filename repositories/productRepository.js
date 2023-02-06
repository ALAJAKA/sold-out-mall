class ProductRepository{

    constructor(productModel) {
        this.productModel = productModel;
    }
    getList = async ()=>{
        const list = await this.productModel.findAll({});
        return list;
    }
    getOne =async (one)=>{
        const product = await this.productModel.findOne({
            where:{id:one}
        });
        return product;
    }
}

module.exports = ProductRepository;