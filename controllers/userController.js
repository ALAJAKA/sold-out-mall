const UserService = require('../services/userService');

class UserController {
  userService = new UserService();

  //ȸ������
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
      return res.status(201).send({ message: 'ȸ������ �Ϸ�!' });
    } catch (error) {
      if (error.message === 'id ���� Ʋ��') {
        return res
          .status(412)
          .send({ errorMessage: 'ID�� ������ ��ġ���� �ʽ��ϴ�.' });
      } else if (error.message === 'pw ���� Ʋ��') {
        return res
          .status(412)
          .send({ errorMessage: '�н������� ������ ��ġ���� �ʽ��ϴ�.' });
      } else if (error.message === 'pw ��ġ ����') {
        return res
          .status(412)
          .send({ errorMessage: '�н����尡 ��ġ���� �ʽ��ϴ�.' });
      } else if (error.message === '�г��� �ߺ���') {
        return res.status(412).send({ errorMessage: '�ߺ��� �г����Դϴ�.' });
      } else if (error.message === '�г��� ��� ����') {
        return res
          .status(412)
          .send({ errorMessage: '�н����忡 �г����� ���ԵǾ� �ֽ��ϴ�.' });
      } else {
        res
          .status(400)
          .send({ errorMessage: '��û�� ������ ������ �ùٸ��� �ʽ��ϴ�.' });
      }
    }
    //�α���
    login = async (req, res, next) => {
      try {
        const { loginId, loginPw } = req.body;

        const signin = await this.userService.login(loginId, loginPw);

        res.cookie('token', signin);

        if (typeof signin.message !== 'undefined') {
          throw new Error('id�� ��� Ȯ����');
          return;
        }

        return res.status(201).send({ message: '�α��� �Ϸ�!' });
      } catch (error) {
        if (error.message === 'id�� ��� Ȯ����') {
          return res
            .status(412)
            .send({ errorMessage: '�г��� �Ǵ� �н����带 Ȯ�����ּ���.' });
        } else {
          return res
            .status(400)
            .send({ errorMessage: '�α��ο� �����Ͽ����ϴ�.' });
        }
      }
    };

    logout = (req, res, next) => {
      res.clearCookie('token');
      // res.redirect('/'); <-- �α��������� �����̷�Ʈ. ������ �߰� �ʿ�.

      res.status(200).json({ message: '�α׾ƿ� �Ϸ�!' });
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
