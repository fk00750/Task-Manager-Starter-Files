const express = require('express')
const Router = require('./routes')
const app = express()

app.use('/api/v1', Router)

module.exports = app