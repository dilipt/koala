const Router = require('koa-router')

const hello = new Router({ prefix: '/hello' })

hello.get('/', (ctx) => {
  ctx.body = 'Hello, stranger!'
})

hello.get('/:name', (ctx) => {
  const { name } = ctx.params
  ctx.body = `Hello, ${name}!`
})

module.exports = hello
