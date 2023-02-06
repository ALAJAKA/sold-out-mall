const CartRepository = require('../repositories/cartRepository');
const {products} = require('../models');
const {carts} = require('../models');
class CartService{

    cartRepository = new CartRepository(products,carts);


    addOne = async (id,count)=>{
        const one = await this.cartRepository.addOne(id,count);
        return one;
    }
    getList = async ()=>{
        const list = await this.cartRepository.getList();
        return list;
    }
    // delOne = async (id)=>{
    //     await this.cartRepository.delOne(id);
    // }

}

module.exports = CartService;