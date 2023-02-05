const bcrypt = require('bcrypt');
const { signJwt } = require('./jwt');

const config = require('../config/config');
const dotenv = require('dotenv');
const { Config } = require('aws-sdk');
dotenv.config();

//회원가입 또는 로그인시 액세스 토큰 생성
createAccessToken = async (id) => {
  console.log('id값은 string되어야해:', id);
  console.log(id.toString());
  const accessToken = signJwt(id.toString());
  console.log('auth.js에서 accessToken나와라', accessToken);
  return accessToken;
};

//회원가입 또는 로그인시 리프레시토큰 생성
createRefreshToken = async () => {
  return jwt.sign({}, config.jwt.secretKey, { expiresIn: '7d' });
};

//액세스토큰을 쿠키로 구워주자.
setAccessTokenCookie = async (res, token) => {
  res.cookie('accessToken', token, {
    httpOnly: true,
    secure: true,
  });
};

// Access Token 검증 => 미들웨어

// Refresh Token 검증

//패스워드 암호화
encryptPassword = async (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, config.bcrypt.saltRounds, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

//로그인시 패스워드 비교
comparePassword = async (plainPassword, encryptedPassword) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(plainPassword, encryptedPassword, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

module.exports = {
  createAccessToken,
  setAccessTokenCookie,
  encryptPassword,
  comparePassword,
};
