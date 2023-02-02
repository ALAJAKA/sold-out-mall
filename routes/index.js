const express = require('express');
const router = express.Router();

router.use('/',(req,res)=>{
  res.render("main");
});

module.exports = router;


// 깃허브 - 내피시 폴더 - 작업폴더