const express = require('express');
const router = express.Router();

router.use('/',(req,res)=>{
  res.send("hello World");
});

module.exports = router;
