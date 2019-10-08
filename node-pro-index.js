var express = require('express')
var app = express()
var port = 8080
var login = require('./src/static/mock/login.json')

var router = express.Router()
router.get('/', function (req, res, next) {
  req.url = './public/index.html'
  console.log(req.url)
  next()
})
app.use('/', router)

var apiRouter = express.Router()
apiRouter.get('/login', function (req, res) {
  res.json({
    errno: 0,
    data: login
  })
})
app.use('/api',apiRouter)

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
