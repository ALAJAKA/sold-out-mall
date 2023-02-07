const express = require('express');
const router = express.Router();
const isAuth = require('../middlewares/authMiddleware3');
// const isNotAuth = require('../middlewares/authMiddleware');
// const isAuth = require('../middlewares/authMiddleware');

const { isLoggedIn } = require('../middlewares/loginCheckMiddleware');
const { isNotLoggedIn } = require('../middlewares/loginCheckMiddleware');

const UserController = require('../controllers/userController');
const userController = new UserController();

const { setAccessTokenCookie, setRefreshTokenCookie } = require('../auth/auth');

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
  console.log('isAuth 미들웨어 타고 넘어오는 가?', isAuth);

  try {
    userId = req.userId;
    accessToken = req.accessToken;
    console.log('isAuth타고 넘어오는 사람(userId)을 찾아보자 ', userId); //1
    // accessToken = req.headers.authorization.split(' ')[1];

    console.log('header에서 accessToken을 뽑아보자', accessToken);

    return res.status(200).render('me.ejs', {
      token: accessToken,
      // data: user,
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
