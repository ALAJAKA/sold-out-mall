const express = require('express');
const router = express.Router();
const isAuth = require('../middlewares/authMiddleware');

const {
  isLoggedIn,
  isNotLoggedIn,
} = require('../middlewares/loginCheckMiddleware');

const UserController = require('../controllers/userController');
const userController = new UserController();

// const OrderController = require('../controllers/orderController');
// const orderController = new OrderController();

//회원가입 API
router.post('/signup', userController.signup);
//로그인 API
router.post('/login', userController.login);
//로그아웃 API
router.get('/logout', isLoggedIn, userController.logout);

//Front 마이페이지
router.get('/me', isLoggedIn, isAuth, (req, res) => {
  try {
    const userId = req.userId;
    const accessToken = req.accessToken;
    console.log(
      '미들웨어를 타고 어떤 accessToken을 받아오는 것일까?',
      accessToken
    );

    return res.status(200).render('me.ejs', {
      token: accessToken,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Server Error',
    });
  }
});
//Front
router.get('/login', isNotLoggedIn, (req, res) => {
  res.render('login.ejs');
});

router.get('/signup', isNotLoggedIn, (req, res) => {
  res.render('signup.ejs');
});
module.exports = router;
