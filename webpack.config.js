/**
 * Created by xuqh on 2016/7/18.
 */
var path = require("path");
var webpack = require("webpack");
module.exports = {
    entry: {
		//news:"./entry/News",
		// test:["./entry/test", "./entry/test2"],
		//demo_none_jsx:"./entry/demo-none-jsx",
		// testComponent: "./entry/testComponent",
		//testES6: "./entry/testES6",
		// task:"./entry/task",
		// taskRedux:"./entry/taskRedux",
		//taskReduxRouter:"./entry/taskReduxRouter",
		newsReduxRouter:"./entry/newsReduxRouter"
		// route:"./entry/route"
		//testReduxThunk:"./entry/testReduxThunk"
    },
    output: {
        path: path.join(__dirname, "./export/js/"),
        filename: "[name].min.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.coffee'] // 配置简写，配置过后，书写该文件路径的时候可以省略文件后缀
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
		    compress: {
		        warnings: false,
		    },
		    output: {
		        comments: false,
		    }
		}),
        //It looks like you're using a minified copy of the development build of React. When deploying React apps to production,
        // make sure to use the production build which skips development warnings and is faster
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
        //new webpack.optimize.CommonsChunkPlugin('common.js')
    ]
};
