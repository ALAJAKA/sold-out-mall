const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/productController');
const productController = new ProductController();
// const s3Uploader = require('../middlewares/s3Uploader');

// 현재 URL /product

// 상품 등록 페이지
router.post('/fileUpload', productController.productCreate);
// 상품 조회 페이지
router.get('/list',productController.getList);
// 상품 상세 조회 페이지

router.get("/:productId",productController.getOne);

module.exports = router;