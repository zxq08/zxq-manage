const path = require('path')
const express = require('express')
const app = express()
var appData = require('./src/static/mock/login.json')
var apiRoutes = express.Router()
app.use('/api', apiRoutes)

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    before (app) {
      app.get('/api/login', (req, res) => {
        res.json({
          errno: 0,
          data: appData
        })
      })
    },
    port: 8080
  },

  chainWebpack: config => {
    config.resolve.alias
    .set('style', resolve('@/assets/style'))
  }
}
