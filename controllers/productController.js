const ProductService = require("../services/productService");
class ProductController{
    productService = new ProductService();

    getList = async (req,res)=>{
        const list = await this.productService.getList();
        res.send(list);
    }

    getOne = async (req,res)=>{
        const {productId} =req.params;
        const one = await this.productService.getOne(productId);
        console.log(one);
        res.render('productDetail');
    }
}

module.exports = ProductController;