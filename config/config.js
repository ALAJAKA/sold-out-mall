const dotenv = require('dotenv');
dotenv.config();

function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue;
  if (value == null) {
    throw new Error(`Key ${key} is undefined`);
  }
  return value;
}

module.exports = {
  jwt: {
    secretKey: required('JWT_SECRET'),
    refreshExpiresInSec: parseInt(required('JWT_REFRESH_EXPIRES_SEC')),
    accessExpiresInSec: parseInt(required('JWT_ACCESS_EXPIRES_SEC')),
  },
  bcrypt: {
    saltRounds: parseInt(required('BCRYPT_SALT_ROUNDS')),
  },

  port: parseInt(required('PORT')),

  development: {
    username: 'root', //lee
    password: process.env.MYSQL_AWS_PASSWORD,
    database: 'sold_out_mall',
    host: process.env.MYSQL_AWS_HOST,
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: process.env.MYSQL_AWS_PASSWORD,
    database: 'sold_out_mall_test_db',
    host: process.env.MYSQL_AWS_HOST,
    dialect: 'mysql',
    logging: false,
  },
  production: {
    username: 'root',
    password: null,
    database: 'sold_out_mall_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
