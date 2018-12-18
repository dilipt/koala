const Koa = require('koa');
const Router = require('koa-router');
const hello = require('./hello');
const health = require('./health');

const base = new Router({ prefix: '/koala' })
base.use(health.routes())
base.use(hello.routes())

base.get('/', (ctx) => {
  ctx.body = 'try /health or /hello...'
})

const app = new Koa()
app.use(base.routes())

app.listen(3000)
console.log('Koala started on port 3000.')
