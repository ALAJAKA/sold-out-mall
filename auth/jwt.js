const jwt = require('jsonwebtoken');

const config = require('../config/config');
const dotenv = require('dotenv');
dotenv.config();

signJwt = async (id) => {
  try {
    const accessToken = jwt.sign({ id }, config.jwt.secretKey, {
      expiresIn: config.jwt.expiresInSec,
    });
    return accessToken;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

async function verifyJwt(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.jwt.secretKey, (err, value) => {
      if (err) {
        reject(err);
      } else {
        resolve(value);
      }
    });
  });
}

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
