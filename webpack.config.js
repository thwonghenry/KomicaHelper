const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const entryPath = path.resolve(__dirname, 'entries');
const chromeBuildPath = path.resolve(buildPath, 'chrome_extension/komicahelper');
const userscriptsPath = path.resolve(buildPath, 'userscripts');
const webpack = require('webpack');

const metadata = require('./metadata.json');
const PrependMetadata = require('./webpack_plugins/prependmetadata');

module.exports = [{
    name: 'chrome-extension',
    entry: [
        path.resolve(entryPath, 'komicahelper.ts'),
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
        quotelinker: path.resolve(entryPath, 'quotelinker.ts'),
        thumbnailenlarger: path.resolve(entryPath, 'thumbnailenlarger.ts')
    },
    resolve: {
        extensions: ['', '.ts', '.webpack.js', '.web.js', '.js']
    },

    output: {
        path: userscriptsPath,
        filename: '[name].js'
    },

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
    },

    plugins: [
        // run the custom metadata prepender
        new PrependMetadata(metadata, [{
            path: path.resolve(userscriptsPath, 'quotelinker.js'),
            replace: {
                name: 'Komica Quotes Linker',
                description: 'A plugin that stick the quoted reply directly'
            }
        }, {
            path: path.resolve(userscriptsPath, 'thumbnailenlarger.js'),
            replace: {
                name: 'Komica Thumbnails Enlarger',
                description: 'A plugin that add enlarge button to all thumbnails'
            }
        }])
    ]
}];
