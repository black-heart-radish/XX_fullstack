const Koa = require('koa')

const app = new Koa()

const main = (ctx) => {
    if (ctx.request.accepts('xml')) {
        ctx.response.type = 'xml'
        ctx.response.body = '<data>Hello world</data>'
    }else if (ctx.request.accepts('html')) {
        ctx.response.type = 'html'
        ctx.response.body = '<p>Hello world</p>'
    }else if (ctx.request.accepts('json')) {
        ctx.response.type = 'json'
        ctx.response.body = '{data: Hello world}'
    }else {
        ctx.response.type = 'text'
        ctx.response.body = 'Hello world'
    }
}

app.use(main)

app.listen(3000, () => {
    console.log('项目启动成功');
})