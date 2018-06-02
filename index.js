const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express()
const router = express.Router();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));


app.listen(process.env.PORT || 8080,function() {
    console.log('Keeping it 8080!')
})

// static file-serving middleware
app.use(express.static(path.join(__dirname, 'public')))

// sends game.html
// router.use('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/Main/game.html'))
// })

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

// sends game.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/Main/game.html'))
})

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

