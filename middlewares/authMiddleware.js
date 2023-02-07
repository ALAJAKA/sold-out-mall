const dotenv = require('dotenv');
dotenv.config();
const { verifyJwt } = require('../auth/jwt');
const { User } = require('../models');

const AUTH_ERROR = { message: 'Authentication Error' };

const isAuth = async (req, res, next) => {
  // const authHeader = req.get('Authorization');

  // console.log('authHeader', authHeader);
  // if (!(authHeader && authHeader.startsWith('Bearer '))) {
  //   return res.status(401).json(AUTH_ERROR);
  // }
  // const token = authHeader.split(' ')[1];
  // console.log('header에서 Bearer를 제거해서 accessToken을 얻었다.', token);

  // const token = req.headers.cookie.split('=')[1];
  const extractedStringFromCookie = req.headers.cookie;

  const [accessTokenPart] = extractedStringFromCookie
    .split(';')
    .filter((part) => part.trim().startsWith('accessToken='));
  const accessToken = accessTokenPart.split('=')[1];

  const [refreshTokenPart] = extractedStringFromCookie
    .split(';')
    .filter((part) => part.trim().startsWith('refreshToken='));
  const refreshToken = refreshTokenPart.split('=')[1];

  console.log('쿠키로부터 accessToken을 뽑아보자', accessToken);
  console.log('쿠키로부터 refreshToken을 뽑아보자', refreshToken);

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

module.exports = isAuth;

// try {
//   const decoded = await verifyJwt(token);

//   console.log('얻은 accessToken을 복호화해보자. decoded:::::::::::', decoded);
//   const user = await User.findByPk(decoded.id);
//   console.log('accessToken의 주인이 누굴까? user = decoded.id: ', user.id);

//   if (!user) {
//     console.log(user);
//     return res.status(401).json(AUTH_ERROR);
//   }
//   req.userId = user.id; //custom data
//   req.token = token; //custom data
//   console.log(req.userId);
//   console.log(req.token);

//   next();
// } catch (error) {
//   console.log(error);
//   return res.status(401).json(AUTH_ERROR);
// }
