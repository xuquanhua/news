/**
 * Created by kingsoft on 2017/6/21.
 */
const nunjucks = require('nunjucks')
const path = require('path');

module.exports = (app, router) =>{
    router.get('/newsReduxRouter', function (ctx, next) {
        // ctx.router available
        var nrr = path.resolve(__dirname, "../export/page/newsReduxRouter.html");
        return ctx.body = nunjucks.render(nrr, {foo: 'bar'});
    })
}
