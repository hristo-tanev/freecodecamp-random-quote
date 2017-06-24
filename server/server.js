import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import config from '../webpack.config'

let app = new express()
let compiler = webpack(config)

app.use(express.static('src'))
app.use(webpackDevMiddleware(compiler))
app.use(webpackHotMiddleware(compiler))

app.listen(3000)
