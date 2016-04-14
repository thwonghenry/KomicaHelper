const path = require('path');
const srcPath = path.resolve(__dirname, 'src');
const buildPath = path.resolve(__dirname, 'build');
const webpack = require('webpack');

module.exports = {

    entry: [
        // 'babel-polyfill',
        path.resolve(srcPath, 'main.ts')
    ],
    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
        extensions: ['', '.ts', '.webpack.js', '.web.js', '.js']
    },

    output: {
        path: buildPath,
        filename: 'build.js'
    },

    // Add the loader for .ts files.
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'ts-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ],
};
