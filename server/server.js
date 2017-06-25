import express from 'express'
import webpack from 'webpack'
import Twitter from 'twitter'
import bodyParser from 'body-parser'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import config from '../webpack.config'

let app = new express()
let compiler = webpack(config)

app.use(express.static('src'))
app.use(webpackDevMiddleware(compiler))
app.use(webpackHotMiddleware(compiler))

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.post('/tweet', (request, response) => {
  let client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  })
  const { message } = request.body

  client.post('statuses/update', { status: message }, (error, tweet, response) => {
    if (error) {
      throw error
    }
  })

  response.send({ status: 200 })
})

app.listen(3000)
