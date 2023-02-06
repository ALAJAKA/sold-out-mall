const express = require('express');
const router = express.Router();
// const authMiddleware = require('../middlewares/authMiddleware');

const UserController = require('../controllers/userController');
const userController = new UserController();

//회원가입 API
router.post('/signup', userController.signup);

// // //로그인 API
router.post('/login', userController.login);

//로그아웃 API
router.get('/logout', userController.logout);

// router.get('/me', authMiddleware, userController.getUserPoint);

//Front
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
