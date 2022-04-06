const express = require('express')
const app = express()
const db = require('./helpers/db')
const indexRouter = require('./routes/')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Require & Import API routes
//const users = require('./routes/index')
// Use API Routes
app.use('/', indexRouter)
// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}

//module.exports = app