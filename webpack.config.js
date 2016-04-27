const path = require('path');
const entryPath = path.resolve(__dirname, 'entries');
const chromeBuildPath = path.resolve(__dirname, 'chrome');
const scriptPath = path.resolve(__dirname, 'userscripts');
const webpack = require('webpack');

module.exports = [{
    name: 'chrome',
    entry: [
        path.resolve(entryPath, 'main.ts'),
    ],
    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
        extensions: ['', '.ts', '.webpack.js', '.web.js', '.js']
    },

    output: {
        path: chromeBuildPath,
        filename: 'main.js'
    },

    // Add the loader for .ts files.
    module: {
        preLoaders: [{
            test: /\.ts$/,
            loader: "tslint"
        }],
        loaders: [{
            test: /\.ts$/,
            loader: 'ts'
        }, {
            test: /\.jade$/,
            loader: 'jade'
        }, {
            test: /\.sass$/,
            loader: 'css/locals!sass'
        }]
    }
}, {
    name: 'userscripts',
    entry: {
        // 'babel-polyfill',
        quotelinker: path.resolve(entryPath, 'quotelinker.ts'),
        thumbnailenlarget: path.resolve(entryPath, 'thumbnailenlarger.ts')
    },
    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
        extensions: ['', '.ts', '.webpack.js', '.web.js', '.js']
    },

    output: {
        path: scriptPath,
        filename: '[name].js'
    },

    // Add the loader for .ts files.
    module: {
        preLoaders: [{
            test: /\.ts$/,
            loader: "tslint"
        }],
        loaders: [{
            test: /\.ts$/,
            loader: 'ts'
        }, {
            test: /\.jade$/,
            loader: 'jade'
        }, {
            test: /\.sass$/,
            loader: 'css/locals!sass'
        }]
    }
}];
