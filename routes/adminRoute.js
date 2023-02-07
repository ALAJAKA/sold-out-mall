const express = require('express');
const router = express.Router();
const multer = require('multer');
const AdminController = require('../controllers/adminController');
const adminController = new AdminController();

const isAuth = require('../middlewares/authMiddleware');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'static/img/'); // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // cb 콜백함수를 통해 전송된 파일 이름 설정
    },
});
let upload = multer({ storage: storage });

// 현재 URL /product

// 상품 조회 페이지
router.get('/products',isAuth,adminController.getList);
// 상품 상세 조회 페이지
router.delete("/:product/productErase",isAuth,adminController.delOne);
// 상품 등록하기
router.post("/product",isAuth,upload.fields([{ name: 'photos' }, { name: 'photos2' }]),adminController.create)

module.exports = router;
