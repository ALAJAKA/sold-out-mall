const UserService = require('../services/userService');
const UserRepository = require('../repositories/userRepository');
const { comparePassword } = require('../auth/auth');
class UserController {
  userService = new UserService();
  userRepository = new UserRepository();

  //회원가입
  signup = async (req, res) => {
    const { email, password, confirmPw, name, phone, address } = req.body;
    if (!email || !password || !confirmPw || !name || !phone || !address) {
      return res.status(400).send({
        message: '모든 항목을 기입해주세요',
      });
    }

    try {
      const exitUser = await this.userRepository.findByEmail(email);

      if (exitUser) {
        return res.status(400).json({
          message: `${email}은 이미 등록된 이메일입니다.`,
        });
      }

      const { accessToken, user } = await this.userService.signup(
        email,
        password,
        confirmPw,
        name,
        phone,
        address
      );

      return res
        .status(201)
        .json({ accessToken, user, message: '회원가입이 완료되었습니다.' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: '회원가입에 실패했습니다.' });
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
      const { accessToken, user } = await this.userService.login(
        email,
        password
      );
      return res
        .status(200)
        .json({ accessToken, user, message: '로그인에 성공했습니다.' });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  };
}

module.exports = UserController;

//로그아웃
// logout = (req, res, next) => {
//   res.clearCookie('token');
//   // res.redirect('/'); <-- 로그인페이지 리다이렉트. 페이지 추가 필요.

//   res.status(200).json({ message: '로그아웃 완료!' });
// };

// getUerPoint = async (req, res, next) => {
//   try {
//     const { userId } = req.user;
//     const point = await this.userService.getUserPoint(userId);
//     res.status(200).json({ point });
//   } catch (error) {
//     res.status(400).json({ errorMessage: error.message });
//   }
// };
