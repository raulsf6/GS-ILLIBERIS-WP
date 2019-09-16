const express =  require('express');
const router = require('./routes/index');
const path = require("path")

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use('/', router);

module.exports = app;