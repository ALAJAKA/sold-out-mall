const UserService = require('../services/userService');

class UserController {
  userService = new UserService();

  //회원가입
  signup = async (req, res) => {
    const { email, password, confirmPw, name, phone, address } = req.body;

    try {
      const signup = await this.userService.Signup(
        email,
        password,
        confirmPw,
        name,
        phone,
        address
      );

      if (typeof signup.message !== 'undefined') {
        throw signup;
      }
      return res.status(201).send({ message: '회원가입 완료!' });
    } catch (error) {
      if (error.message === 'id 형식 틀림') {
        return res
          .status(412)
          .send({ errorMessage: 'ID의 형식이 일치하지 않습니다.' });
      } else if (error.message === 'pw 형식 틀림') {
        return res
          .status(412)
          .send({ errorMessage: '패스워드의 형식이 일치하지 않습니다.' });
      } else if (error.message === 'pw 일치 안함') {
        return res
          .status(412)
          .send({ errorMessage: '패스워드가 일치하지 않습니다.' });
      } else if (error.message === '닉네임 중복됨') {
        return res.status(412).send({ errorMessage: '중복된 닉네임입니다.' });
      } else if (error.message === '닉네임 비번 같음') {
        return res
          .status(412)
          .send({ errorMessage: '패스워드에 닉네임이 포함되어 있습니다.' });
      } else {
        res
          .status(400)
          .send({ errorMessage: '요청한 데이터 형식이 올바르지 않습니다.' });
      }
    }
    //로그인
    login = async (req, res, next) => {
      try {
        const { loginId, loginPw } = req.body;

        const signin = await this.userService.login(loginId, loginPw);

        res.cookie('token', signin);

        if (typeof signin.message !== 'undefined') {
          throw new Error('id나 비번 확인해');
          return;
        }

        return res.status(201).send({ message: '로그인 완료!' });
      } catch (error) {
        if (error.message === 'id나 비번 확인해') {
          return res
            .status(412)
            .send({ errorMessage: '닉네임 또는 패스워드를 확인해주세요.' });
        } else {
          return res
            .status(400)
            .send({ errorMessage: '로그인에 실패하였습니다.' });
        }
      }
    };

    logout = (req, res, next) => {
      res.clearCookie('token');
      // res.redirect('/'); <-- 로그인페이지 리다이렉트. 페이지 추가 필요.

      res.status(200).json({ message: '로그아웃 완료!' });
    };

    // getUerPoint = async (req, res, next) => {
    //   try {
    //     const { userId } = req.user;
    //     const point = await this.userService.getUserPoint(userId);
    //     res.status(200).json({ point });
    //   } catch (error) {
    //     res.status(400).json({ errorMessage: error.message });
    //   }
    // };
  };
}

module.exports = UserController;
