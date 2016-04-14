const path = require('path');
const srcPath = path.resolve(__dirname, '../src');
const webpack = require('webpack');

module.exports = {
    entry: [
        // 'babel-polyfill',
        path.resolve(srcPath, 'main.ts')
    ],
    output: {
        path: __dirname,
        filename: 'build.js'
    },
    resolve: {
        root: srcPath,
        extensions: ['', '.ts', '.js']
    },
    modules: {
        loaders: [{
            test: /\.ts$/,
            loader: ['ts-loader'],
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
        // new webpack.optimize.OccurenceOrderPlugin()
    ],
    babel: {
        presets: ['es2015']
    }
}
