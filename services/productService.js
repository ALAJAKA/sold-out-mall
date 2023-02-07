const ProductRepository = require('../repositories/productRepository');
const {Product} = require('../models');
class ProductService{

    productRepository = new ProductRepository(Product);

    // 전체 상품 조회
    getList = async ()=>{
        const list = await this.productRepository.getList();
        return list;
    }
    // 상품 디테일 페이지
    getOne = async (id)=>{
        const one = await this.productRepository.getOne(id);
        return one;
    }

}

module.exports = ProductService;