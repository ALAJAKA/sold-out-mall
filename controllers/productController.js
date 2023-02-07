const ProductService = require("../services/productService");
class ProductController{
    productService = new ProductService();

    getList = async (req,res)=>{
        const list = await this.productService.getList();
        res.send(list);
    }

    getOne = async (req,res)=>{
        const {productId} =req.params;
        if(productId === undefined || null)
            return res.json({msg:'해당 페이지는 존재 하지 않습니다.'});
        const one = await this.productService.getOne(productId);
        res.render('productDetail');
    }
}

module.exports = ProductController;