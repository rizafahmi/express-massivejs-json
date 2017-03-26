const express = require('express')

const app = express()

// Handlers
const appHandler = () => {
  console.log('Magic happen at http://localhost:3000/')
}

const helloHandler = (req, res) => {
  res.send('May Node be with you!')
}

// Routes
app.get('/', helloHandler)

app.listen(3000, appHandler)
