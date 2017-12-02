const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./public/index.js')


let app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/', router);

app.listen(process.env.PORT || 3001,function() {
    console.log('Keeping it 3001!')
})