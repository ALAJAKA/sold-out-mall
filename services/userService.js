const bcrypt = require('bcrypt');
const saltRounds = 12;
const jwt = require('jsonwebtoken');
const { User } = require('../models'); //생성자입장
const UserRepository = require('../repositories/userRepository');

class UserService {
  userRepository = new UserRepository(User);

  findByPk = async (userId) => {
    const findUser = await this.userRepository.findByPk(userId);

    return {
      userId: findUser.userId,
      email: findUser.email,
      password: findUser.password,
      name: findUser.name,
      point: findUser.point,
      createdAt: findUser.createdAt,
      updatedAt: findUser.updatedAt,
    };
  };

  signup = async (email, password, confirmPw, name) => {
    const idReg = /^[a-zA-Z0-9]{3,}$/;
    try {
      if (!idReg.test(email)) {
        throw new Error('id 형식 틀림');
        return;
      }
      if (password.length < 4) {
        throw new Error('pw 형식 틀림');
        return;
      }
      if (password !== confirmPw) {
        throw new Error('pw 일치 안함');
        return;
      }

      if (password.includes(email)) {
        throw new Error('닉네임 비번 같음');
        return;
      }
      const duplicateId = await this.userRepository.findByEmail(email);
      if (duplicateId) {
        throw new Error('닉네임 중복됨');
        return;
      }
      const encryptedPassword = await bcrypt.hash(password, saltRounds);
      await this.userRepository.createUser(email, encryptedPassword, name);
      return true;
    } catch (error) {
      return error;
    }
  };

  //로그인
  login = async (email, password) => {
    try {
      const user = await this.userRepository.findByEmail(email);

      const check = await bcrypt.compare(password, user.password);

      if (user !== null) {
        if (check) {
          const token = jwt.sign(
            { email: email, userId: user.userId, member: 'user' },
            process.env.JWT_SECRET,
            {
              expiresIn: '1h',
            }
          );
          console.log(token);
          return token;
        } else if (check === false) {
          throw new Error('비번 확인해');
        }
      } else {
        throw new Error('id 확인해');
      }
      return;
    } catch (error) {
      return error;
    }
  };

  // getUserPoint = async (userId) => {
  //   try {
  //     const user = await this.userRepository.findByPk(userId);
  //     if (!user) throw new Error('등록된 고객 정보가 없습니다.');

  //     return user.point;
  //   } catch (error) {
  //     return error;
  //   }
  // };
}

module.exports = UserService;
