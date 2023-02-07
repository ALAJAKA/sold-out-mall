const express = require('express');
const router = express.Router();

const userRouter = require('./userRoute');
const productRouter = require('./productRoute');
const adminRouter = require('./adminRoute');
const cartRouter = require('./cartRoute');
const orderRouter = require('./orderRoute');

// 메인페이지
router.use('/api', (req, res) => {
  res.render('main', { all: '' });
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

router.get('/login', (req, res) => {
  res.render('login.ejs');
});

router.get('/signup', (req, res) => {
  res.render('signup.ejs');
});

router.get('/me', (req, res) => {
  res.render('me.ejs');
});

module.exports = router;

// 깃허브 - 내피시 폴더 - 작업폴더
