/**
 * Created by kingsoft on 2017/6/21.
 */
module.exports = (app, router) =>{
    router.get('/xxx', function (ctx, next) {
        // ctx.router available
        var nrr = path.resolve(__dirname, "export/page/newsReduxRouter.html");
        return ctx.body = nunjucks.render(nrr, {foo: 'bar'});
    })
}