const dotenv = require('dotenv');
dotenv.config();
const { verifyJwt } = require('../auth/jwt');
const { User } = require('../models');

const AUTH_ERROR = {
  message: 'Authentication 필요합니다. 로그인이 필요합니다.',
};

const isNotAuth = async (req, res, next) => {
  const extractedStringFromCookie = req.headers.cookie;
  if (!extractedStringFromCookie) {
    next();
  } else {
    return res.redirect('/api').json({ message: '이미 로그인하셨습니다.' });
  }
};

const isAuth = async (req, res, next) => {
  const extractedStringFromCookie = req.headers.cookie;

  if (!extractedStringFromCookie) {
    return res.status(401).json(AUTH_ERROR);
  }

  try {
    const decodedAccessToken = await verifyJwt(accessToken);
    const decodedRefreshToken = await verifyJwt(refreshToken);

    console.log('Decoded Access Token:', decodedAccessToken);
    console.log('Decoded Refresh Token:', decodedRefreshToken);

    const user = await User.findByPk(decodedAccessToken.id);

    if (!user) {
      console.log(user);
      return res.status(401).json(AUTH_ERROR);
    }
    req.userId = user.id; //custom data
    req.accessToken = accessToken; //custom data
    req.refreshToken = refreshToken; //custom data

    console.log('req.userId:::::::::::');
    console.log('req.accessToken::::::::::::', req.accessToken);
    console.log('req.refreshToken:::::::::::::', req.refreshToken);

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json(AUTH_ERROR);
  }
};

module.exports = {
  isNotAuth,
  isAuth,
};
