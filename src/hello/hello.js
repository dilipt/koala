const Router = require('koa-router')

const HelloRouter = () => {
  const greetings = new Router({ prefix: '/greetings' })

  greetings.get('/', (ctx) => {
    ctx.body = 'Hello, stranger!'
  })

  greetings.get('/:name', (ctx) => {
    const { name } = ctx.params
    ctx.body = `Hello, ${name}!`
  })

  return greetings
}

module.exports = {
  HelloRouter,
}
