const express = require('express');
const router = express.Router();

const AdminController = require('../controllers/adminController');
const adminController = new AdminController();
// const s3Uploader = require('../middlewares/s3Uploader');

// 현재 URL /product

// 상품 등록 페이지
router.post('/fileUpload', adminController.getList);
// 상품 조회 페이지
router.get('/list', adminController.getList);
// 상품 상세 조회 페이지
router.get('/:productId', adminController.getOne);

// router.get('/admin/userList', adminController.getUserList);

// router.put('/admin/userList/:userId/edit', adminController.updateUserInfo);

// router.delete('/admin/userList/:userId/remove', adminController.deleteUser);

module.exports = router;
