const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/productController');
const productController = new ProductController();
const isAuth = require('../middlewares/authMiddleware');
const {isLoggedIn} = require("../middlewares/loginCheckMiddleware");

// 현재 URL /product

// 상품 조회 페이지
router.get('/list',isAuth,isLoggedIn,productController.getList);

// 상품 상세 조회 페이지
router.get("/:productId",isAuth,isLoggedIn,productController.getOne);

module.exports = router;