const express = require('express');
const router = express.Router();

router.use('/api',(req,res)=>{
  res.render("main");
});
router.use('/item',(req,res)=>{
  res.render("productDetail");
});
module.exports = router;


// 깃허브 - 내피시 폴더 - 작업폴더