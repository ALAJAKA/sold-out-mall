const dotenv = require('dotenv');
dotenv.config();
const { verifyJwt } = require('../auth/jwt');
const { User } = require('../models');

const AUTH_ERROR = {
  message: 'Authentication이 필요합니다. 로그인을 해주세요.',
};

const isAuth = async (req, res, next) => {
  const extractedStringFromCookie = req.headers.cookie;

  if (!extractedStringFromCookie) {
    const token = '';
    return res.render('main', { all: '', token: token });
  }

  const [accessTokenPart] = extractedStringFromCookie
    .split(';')
    .filter((part) => part.trim().startsWith('accessToken='));
  const accessToken = accessTokenPart.split('=')[1];

  // const [refreshTokenPart] = extractedStringFromCookie
  //   .split(';')
  //   .filter((part) => part.trim().startsWith('refreshToken='));
  // const refreshToken = refreshTokenPart.split('=')[1];

  try {
    const decodedAccessToken = await verifyJwt(accessToken);
    // const decodedRefreshToken = await verifyJwt(refreshToken);

    const user = await User.findByPk(decodedAccessToken.id);

    if (!user) {
      console.log(user);
      return res.status(401).json(AUTH_ERROR);
    }

    req.userId = user.id; //custom data
    req.accessToken = accessToken; //custom data
    // req.refreshToken = refreshToken; //custom data

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json(AUTH_ERROR);
  }
};

module.exports = isAuth;
