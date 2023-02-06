const ProductRepository = require('../repositories/productRepository');
const {products} = require('../models');
class ProductService{

    productRepository = new ProductRepository(products);
    productCreate = async ()=>{

    }

    getList = async ()=>{

        const list = await this.productRepository.getList();
        return list;
    }
    getOne = async (id)=>{
        const one = await this.productRepository.getOne(id);
        return one;
    }

}

module.exports = ProductService;