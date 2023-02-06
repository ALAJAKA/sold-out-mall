const { verifyJwt } = require('./auth/jwt');
const UserRepository = require('../repositories/UserRepository');
const domain = require("domain");
const {development} = require("../config/config");
const {getVersion} = require("jest");
const userRepository = new UserRepository(UserModel);

const AUTH_ERROR = { message: 'Authentication Error' };

isAuth = async (req, res, next) => {
  //
  //authHeader = header의 Key의 Value
  const authHeader = req.get('Authorization');
  if (!(authHeader && authHeader.startsWith('Bearer '))) {
    return res.status(401).json(AUTH_ERROR);
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = await verifyJwt(token);
    const user = await userRepository.findByPk(decoded.id);
    if (!user) {
      return res.status(401).json(AUTH_ERROR);
    }
    req.userId = user.id; // req.customData
    req.token = token;
    next();
  } catch (error) {
    return res.status(401).json(AUTH_ERROR);
  }
};

module.exports = {
  isAuth,
};


