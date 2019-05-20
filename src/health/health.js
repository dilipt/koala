const Router = require('koa-router')

const HealthRouter = () => {
  const health = new Router({ prefix: '/health' })

  health.get('/', (ctx) => {
    ctx.body = 'HEALTHY'
  })

  health.get('/:status', (ctx) => {
    const { status } = ctx.params
    ctx.status = parseInt(status, 10)
    ctx.body = status === '200' ? 'OK' : 'NOT_OK'
  })

  return health
}

module.exports = {
  HealthRouter,
}
