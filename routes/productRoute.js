const express = require('express');
const router = express.Router();
const isAuth = require('../middlewares/authMiddleware');

const ProductController = require('../controllers/productController');
const productController = new ProductController();

// 현재 URL /product

// 상품 조회 페이지
router.get('/list', productController.getList);

// 상품 상세 조회 페이지
router.get('/:productId', isAuth, productController.getOne);

module.exports = router;
