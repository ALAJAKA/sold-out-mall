// const OrderService = require('../services/orderService');
// const UserService = require('../services/customerService');

class OrderController {
  //   orderService = new OrderService();
  //   userService = new UserService();

  // 카트에 상품 담
  addOne = async (req, res) => {
    console.log('req', req);
    console.log('res', res);
    // const one = await this.orderService.addOne(id,count);
    // res.json({msg:one});
  };
  // getList = async (req,res)=>{
  //     const list = await this.orderService.getList();
  //     res.send(list);
  // }

  // delOne = async (req,res)=>{
  //
  // }
}

module.exports = OrderController;
