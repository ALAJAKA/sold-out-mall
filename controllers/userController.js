const UserService = require('../services/userService');

const { setAccessTokenCookie, setRefreshTokenCookie } = require('../auth/auth');

class UserController {
  userService = new UserService();

  //회원가입
  signup = async (req, res) => {
    const { email, password, confirmPw, name, phone, address } = req.body;
    if (!email || !password || !confirmPw || !name || !phone || !address) {
      return res.status(400).send({
        message: '모든 항목을 기입해주세요',
      });
    }

    try {
      const exitUser = await this.userService.findByEmail(email);

      if (exitUser) {
        return res.status(400).json({
          message: `${email}은 이미 등록된 이메일입니다.`,
        });
      }

      const { user, accessToken, refreshToken } = await this.userService.signup(
        email,
        password,
        confirmPw,
        name,
        phone,
        address
      );

      setAccessTokenCookie(res, accessToken);
      setRefreshTokenCookie(res, refreshToken);

      return res.status(201).json({
        user,
        accessToken,
        refreshToken,
        message: '회원가입이 완료되었습니다.',
      });
    } catch (error) {
      console.log(error);
      return res.status(401).json({ message: error.message });
    }
  };

  //로그인
  login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: '이메일 및 비밀번호를 기입해주세요.' });
    }

    try {
      const { user, accessToken, refreshToken } = await this.userService.login(
        email,
        password
      );

      setAccessTokenCookie(res, accessToken);
      setRefreshTokenCookie(res, refreshToken);

      return res.status(201).json({
        user,
        accessToken,
        refreshToken,
        message: '로그인에 성공했습니다.',
      });
    } catch (error) {
      console.log(error);
      return res.status(401).json({ message: error.message });
    }
  };

  //로그아웃
  logout = async (req, res) => {
    try {
      res.clearCookie('accessToken');
      res.clearCookie('refreshToken');
      return res.status(200).redirect('/');
    } catch (error) {
      return res.status(500).json({ message: '로그아웃에 실패했습니다.' });
    }
  };
}

module.exports = UserController;
