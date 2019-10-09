const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

const AVAILABLE_LOCALES = [
  'se',
  'en'
]

app.use(express.static(path.resolve(__dirname, 'assets')))
app.use(express.static(path.resolve(__dirname, 'assets/poll')))

app.get('/make-a-pledge/:locale/*', (req, res) => {
  if (req.params.locale !== 'se' && req.params.locale !== 'en') {
    res.redirect('/' + req.params.locale + '/' + req.params[0])
  }
})

app.get('/', (_, res) => res.status(404).send('Not Found'))
app.get('//:locale/vote', (req, res) => {
  // Only allow available locales
  if (!AVAILABLE_LOCALES.some(locale => locale === req.params.locale)) {
    res.status(404).end()
  }

  res.sendFile(path.resolve(__dirname, 'pages', `vote-${req.params.locale}.html`))
})

app.get('//:locale/poll', (req, res) => {
  // Only allow available locales
  if (!AVAILABLE_LOCALES.some(locale => locale === req.params.locale)) {
    res.status(404).end()
  }

  res.sendFile(path.resolve(__dirname, 'pages', `poll-${req.params.locale}.html`))
})

app.listen(port, () => console.log(`App listening on port ${port}!`))