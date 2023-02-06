const CartService = require("../services/cartService");
class CartController{
    cartService = new CartService();

    // 카트에 상품 담
    addOne = async (req,res)=>{
        const {id,count} =req.body;
        console.log("count",count);
        console.log(id);
        const one = await this.cartService.addOne(id,count);
        res.json({msg:one});
    }
    getList = async (req,res)=>{
        const list = await this.cartService.getList();
        res.send(list);
    }


    // delOne = async (req,res)=>{
    //
    // }
}

module.exports = CartController;