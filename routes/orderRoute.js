const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/orderController');
const orderController = new OrderController();

// 현재 URL /product

// 바로 주문하기
router.post('/addOne', orderController.addOne);
// 상품 조회 페이지
// router.get('/list',cartController.getList);
// 상품 상세 조회 페이지

// router.get("/:productId",productController.getOne);

module.exports = router;
