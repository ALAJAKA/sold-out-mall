const express = require('express');
const router = express.Router();
const isAuth = require('../middlewares/authMiddleware');

const CartController = require('../controllers/cartController');
const cartController = new CartController();

// 현재 URL /product

// 카드에 담기
router.post('/add',isAuth, cartController.addOne);
// 상품 조회 페이지
router.get('/list',isAuth,cartController.getList);
// 상품 상세 조회 페이지

// router.get("/:productId",productController.getOne);

module.exports = router;