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

app.get('/make-a-pledge', (_, res) => res.status(404).send('Not Found'))
app.get('/make-a-pledge/:locale/vote', (req, res) => {
  // Only allow available locales
  if (!AVAILABLE_LOCALES.some(locale => locale === req.params.locale)) {
    res.status(404).end()
  }

  res.sendFile(path.resolve(__dirname, 'pages', `vote-${req.params.locale}.html`))
})

app.get('/make-a-pledge/:locale/poll', (req, res) => {
  // Only allow available locales
  if (!AVAILABLE_LOCALES.some(locale => locale === req.params.locale)) {
    res.status(404).end()
  }

  res.sendFile(path.resolve(__dirname, 'pages', `poll-${req.params.locale}.html`))
})

app.listen(port, () => console.log(`App listening on port ${port}!`))