const bcrypt = require('bcrypt');
const { signJwt } = require('./jwt');

const config = require('../config/config');
const dotenv = require('dotenv');
dotenv.config();

//회원가입 또는 로그인시 액세스 토큰 생성
const createAccessToken = async (id) => {
  const accessToken = signJwt(id.toString());
  return accessToken;
};

//회원가입 또는 로그인시 리프레시토큰 생성
const createRefreshToken = async () => {
  const refreshExpiresInSec = config.jwt.refreshExpiresInSec;
  const refreshToken = jwt.sign({}, config.jwt.secretKey, {
    refreshExpiresInSec,
  });

  return refreshToken;
};

//액세스토큰을 쿠키로 구워주자.
const setAccessTokenCookie = async (res, token) => {
  res.cookie('accessToken', token, {
    httpOnly: true,
    secure: true,
  });
};

// Access Token 검증 => 미들웨어

// Refresh Token 검증

//패스워드 암호화
const encryptPassword = async (password) => {
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
const comparePassword = async (plainPassword, encryptedPassword) => {
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
  createRefreshToken,
  setAccessTokenCookie,
  encryptPassword,
  comparePassword,
};
