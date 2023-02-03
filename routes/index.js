const express = require('express');
const router = express.Router();

router.use('/api', (req, res) => {
  res.render('main');
});
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

// const userRouter = require('./userRoute');

// router.use('/', userRouter);
module.exports = router;

// 깃허브 - 내피시 폴더 - 작업폴더
