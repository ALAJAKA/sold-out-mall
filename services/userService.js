const { User } = require('../models');
const UserRepository = require('../repositories/userRepository');

const {
  createAccessToken,
  // createRefreshToken,
  encryptPassword,
  comparePassword,
} = require('../auth/auth');

const dotenv = require('dotenv');
dotenv.config();

class UserService {
  userRepository = new UserRepository(User);

  //회원가입
  signup = async (email, password, name, phone, address) => {
    try {
      const existUser = await this.userRepository.findByEmail(email);
      if (existUser) {
        throw new Error(`${email}은 이미 사용중인 이메일입니다.`);
      }

      //비밀번호를 encryptPassword 함수로 암호화
      const encryptedPassword = await encryptPassword(password);

      //암호화된 비밀번호를 userRepository에 넘겨서 DB에 저장한다.
      const user = await this.userRepository.createUser(
        email,
        encryptedPassword,
        name,
        phone,
        address
      );
      //회원가입성공 후  액세스토큰 생성
      const accessToken = await createAccessToken(user.id.toString());
      // const refreshToken = await createRefreshToken();

      return { accessToken };
    } catch (error) {
      throw error;
    }
  };

  //로그인
  login = async (email, password) => {
    try {
      const user = await this.userRepository.findByEmail(email);
      if (!user) {
        throw new Error('등록된 email이 아닙니다. 회원가입해주세요');
      }
      const isMatch = await comparePassword(password, user.password);
      if (!isMatch) {
        throw new Error('이메일 또는 비밀번호가 올바르지 않습니다.');
      }
      const accessToken = await createAccessToken(user.id.toString());
      // const refreshToken = await createRefreshToken();

      return { accessToken };
    } catch (error) {
      throw error;
    }
  };

  findByEmail = async (email) => {
    return await this.userRepository.findByEmail(email);
  };
}

module.exports = UserService;
