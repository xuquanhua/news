const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();
const router = new Router();

// 此处开始堆叠各种中间件 begain

//静态资源
app.use(serve(__dirname + '/export'));

// log
app.use((ctx, next) => {
    const start = new Date();
    return next().then(() => {
        const ms = new Date() - start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    });
});

//路由 begain
app
    .use(router.routes())
    .use(router.allowedMethods());

routerArray = [
    'main.js',
    'api.js'
]
routerArray.forEach((element)=>{
    require(path.resolve('router/'+ element))(app, router)
})
//路由 end
//console.log(process.env.NODE_ENV);

//此处开始堆叠各种中间件 end

// app.use(ctx => {
//     ctx.body = 'Hello Koa';
// });

app.listen(8080);