class CartRepository{

    constructor(productModel,cartModel) {
        this.productModel = productModel;
        this.cartModel= cartModel;
    }

    addOne =async (one,count)=>{
        const product = await this.productModel.findOne({
            where:{id:one}
        });
        await this.cartModel.create({
            productId :product.id,
            price : product.price,
            count:count
        })
        return "장바구니 추가 완료";
    }
    getList = async ()=>{
        const list = await this.cartModel.findAll({});

        return list;
    }
    // delOne =async (id)=>{
    //     return "완료";
    // }
}

module.exports = CartRepository;