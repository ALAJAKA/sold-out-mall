const ProductRepository = require('../repositories/productRepository');
const {Product} = require('../models');
class ProductService{

    productRepository = new ProductRepository(Product);
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