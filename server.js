const path = require('path')
const express = require('express')

const app = express()

// Configurations
app.set('views', path.join('./views'))
app.set('view engine', 'jsx')
const options = {
  beautify: true,
  transformViews: true,
  babel: {
    presets: ['react', 'es2015']
  }
}
app.engine('jsx', require('express-react-views').createEngine(options))

// Handlers
const appHandler = () => {
  console.log('Magic happen at http://localhost:3000/')
}

const helloHandler = (req, res) => {
  res.render('index', {name: 'Obi Wan'})
}

// Routes
app.get('/', helloHandler)

app.listen(3000, appHandler)
