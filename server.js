const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const uuid = require('uuid/v4')

const app = express()

// Configurations
app.use(bodyParser.urlencoded({extended: true}))
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

const connectionString = 'postgres://postgres:@localhost/massive_quotes'
const db = massive.connectSync({connectionString})

// Handlers
const appHandler = () => {
  console.log('Magic happen at http://localhost:3000/')
}

const indexHandler = (req, res) => {
  const handleFind = (err, quotes) => {
    if (err) throw err
    res.render('index', {quotes})
  }
  db.quotes.findDoc({}, handleFind)
}

const postQuotesHandler = (req, res) => {
  const handleSave = (err, result) => {
    if (err) throw err
    console.log('saved.')
    res.redirect('/')
  }
  db.saveDoc('quotes', Object.assign({}, req.body, {_id: uuid()}), handleSave)
}

const editQuotesHandler = (req, res) => {
  const handleFind = (err, data) => {
    if (err) throw err
    res.render('update', {data: data})
  }
  db.quotes.findDoc({id: req.params.id}, handleFind)
}

const updateQuoteHandler = (req, res) => {
  const updateData = Object.assign({}, req.body, {id: req.params.id})
  console.log(updateData)
  db.quotes.saveDoc(updateData)
  res.redirect('/')
}

// Routes
app.get('/', indexHandler)

// quotes
app.post('/quotes', postQuotesHandler)
app.get('/quotes/:id/edit', editQuotesHandler)
app.post('/quotes/:id/edit', updateQuoteHandler)

app.listen(3000, appHandler)
