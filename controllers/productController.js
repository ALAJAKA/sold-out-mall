const ProductService = require('../services/productService');
class ProductController {
  productService = new ProductService();

  getList = async (req, res) => {
    const list = await this.productService.getList();
    res.send(list);
  };

  getOne = async (req, res) => {
    const accessToken = req.accessToken;
    const userId = req.userId;
    console.log(
      'accessToken이 프로적트디테일페이지에서 무엇으로 받아오는 것일까?',
      accessToken
    );
    console.log('userId가 무엇으로 받아오는 것일까?', userId);

    const { productId } = req.params;
    if (productId === undefined || null)
      return res.json({ msg: '해당 페이지는 존재 하지 않습니다.' });
    const one = await this.productService.getOne(productId);

    if (accessToken) {
      return res.status(200).render('productDetail.ejs', {
        token: accessToken,
      });
    }
  };
}

module.exports = ProductController;
// try {
//     userId = req.userId;
//     console.log('proudct detail page의 userId:::::::::', userId);
//     accessToken = req.accessToken;    res.render('productDetail', { token: '  ' });

//     if (accessToken) {
//       return res.status(200).render('productDetail.ejs', {
//         token: accessToken,
//       });
//     } else  {
//       return res.status(200).render('productDetail.ejs', {
//         token: ' ',
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       message: 'Server Error',
//     });
//   }
