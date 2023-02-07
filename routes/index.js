const express = require('express');
const router = express.Router();

const userRouter = require('./userRoute');
const productRouter = require('./productRoute');
const adminRouter = require('./adminRoute');
const cartRouter = require('./cartRoute');
const orderRouter = require('./orderRoute');
const isAuth = require('../middlewares/authMiddleware');
const {
  isLoggedIn,
  isNotLoggedIn,
} = require('../middlewares/loginCheckMiddleware');

// 메인페이지
router.use('/api', isAuth, (req, res) => {
  const token = req.accessToken;
  res.render('main', { all: '', token: token });
});

//회원 관련 컨트롤러로
router.use('/', userRouter);
//상품관련 컨트롤러로
router.use('/product', productRouter);
// 어드민 페이지관련 컨트롤러
router.use('/admin', adminRouter);
// 카트 관련 페이지
router.use('/cart', cartRouter);
router.use('/order', orderRouter);

router.use('/item', (req, res) => {
  res.render('productDetail');
});
router.use('/order', (req, res) => {
  res.render('orderSuccess');
});
router.use('/admin', (req, res) => {
  res.render('admin');
});

module.exports = router;

// 깃허브 - 내피시 폴더 - 작업폴더
