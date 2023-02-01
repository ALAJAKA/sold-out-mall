const express = require('express');
const cookieParser = require('cookie-parser');


const app = express();
app.use(cookieParser());

const router = require('./routes');


app.set('views', './templates');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('static'));

app.use('/', router);

require('dotenv').config();
app.listen(process.env.PORT, () => {
  console.log(process.env.PORT, '포트로 서버가 열렸어요!');
});

module.exports = app;
