const Router = require('koa-router')

const KoalaApp = ({ prefix, helloRouter, healthRouter }) => {
  const base = new Router({ prefix: `/${prefix}` })

  base.get('/', (ctx) => {
    ctx.body = 'try /koala/health or /koala/greetings...'
  })

  base.use(helloRouter.routes())

  base.use(healthRouter.routes())

  return base
}

module.exports = {
  KoalaApp,
}
