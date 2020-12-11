const koa = require('koa')
const app = new koa()
const route = require('koa-route')

const main = (ctx, next) => {
  ctx.body = 'hello'
  // console.log(ctx);
}

app.use(route.get('/abc', main))

app.listen(3000)


