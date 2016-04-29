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
    entry: {
        komicahelper: path.resolve(entryPath, 'komicahelper.ts'),
        komicahelper_menu: path.resolve(entryPath, 'komicahelper_menu.ts')
    },
    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
        extensions: ['', '.ts', '.webpack.js', '.web.js', '.js']
    },

    output: {
        path: chromeBuildPath,
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
}, {
    name: 'userscripts',
    entry: {
        quotelinker: path.resolve(entryPath, 'quotelinker.ts'),
        thumbnailenlarger: path.resolve(entryPath, 'thumbnailenlarger.ts'),
        ajaxupdate: path.resolve(entryPath, 'ajaxupdate.ts'),
        nightmodetoggle: path.resolve(entryPath, 'nightmodetoggle.ts'),
        postformtoggle: path.resolve(entryPath, 'postformtoggle.ts')
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
        }, {
            path: path.resolve(userscriptsPath, 'ajaxupdate.js'),
            replace: {
                name: 'Komica AJAX Updater',
                description: 'A plugin that update the list of replies or threads without refresh'
            }
        }, {
            path: path.resolve(userscriptsPath, 'nightmodetoggle.js'),
            replace: {
                name: 'Komica Night Mode Toggle',
                description: 'A plugin that add night mode style toggle'
            }
        }, {
            path: path.resolve(userscriptsPath, 'postformtoggle.js'),
            replace: {
                name: 'Komica Post Form Togle',
                description: 'A plugin that add post form toggle'
            }
        }])
    ]
}];
