const Koa = require('koa')
const { KoalaApp } = require('./app')
const { HelloRouter } = require('./hello')
const { HealthRouter } = require('./health')

const koala = KoalaApp({
  prefix: 'koala',
  helloRouter: HelloRouter(),
  healthRouter: HealthRouter(),
})

const app = new Koa()
app.use(koala.routes())
app.listen(3000)

// eslint-disable-next-line no-console
console.log('Koala started on port 3000.')
