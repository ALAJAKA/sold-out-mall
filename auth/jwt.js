const jwt = require('jsonwebtoken');

const config = require('../config/config');
const dotenv = require('dotenv');
dotenv.config();

const signJwt = async (id) => {
  try {
    const accessToken = jwt.sign({ id }, config.jwt.secretKey, {
      expiresIn: config.jwt.accessExpiresInSec,
    });
    return accessToken;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const verifyJwt = async (token) => {
  try {
    const decoded = await jwt.verify(token, config.jwt.secretKey);
    return decoded;
  } catch (error) {
    throw error;
  }
};
// const verifyJwt = async (token) => {
//   return new Promise((resolve, reject) => {
//     jwt.verify(token, config.jwt.secretKey, (err, value) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(value);
//       }
//     });
//   });
// };

module.exports = {
  signJwt,
  verifyJwt,
};

// async function signJwt(value) {
//   return new Promise((resolve, reject) => {
//     jwt.sign(value, config.jwt.secretKey, (err, encoded) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(encoded);
//       }
//     });
//   });
// }

// const verifyJwt = async (token) => {
//   return new Promise((resolve, reject) => {
//     jwt.verify(token, config.jwt.secretKey, (err, value) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(value);
//       }
//     });
//   });
// };
