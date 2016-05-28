const path = require('path');
const buildPath = __dirname;
const entryPath = path.resolve(__dirname, '../../src/helper/entries');
const chromeBuildPath = path.resolve(buildPath, 'chrome_extension/komicaHelper');
const userscriptsPath = path.resolve(buildPath, 'userscripts');
const webpack = require('webpack');

// webpack plugin to prepend userscripts metadata
const PrependMetadata = require('../../webpack_plugins/MetadataPrepender');
const WriteChromeManifest = require('../../webpack_plugins/ManifestWriter');
const metadata = require('./metadata.json');

// entries
const entries = require('../../src/helper/entries/index.json');

let userscriptEntries = {};
entries.entries.forEach((entry) => {
    userscriptEntries[entry.name] = path.resolve(entryPath, entry.name + '.ts');
});

let entriesMetadata = entries.entries.map((entry) => ({
    path: path.resolve(userscriptsPath, entry.name + '.js'),
    replace: entry.replace
}));

module.exports = [{
    name: 'chrome-extension',
    entry: {
        komicaHelper: path.resolve(entryPath, 'komicaHelper.ts')
    },
    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
        extensions: ['', '.ts', '.js']
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
    },
    plugins: [
        new WriteChromeManifest(metadata, path.resolve(chromeBuildPath, 'manifest.json'))
    ]
}, {
    name: 'userscripts',
    entry: userscriptEntries,
    resolve: {
        extensions: ['', '.ts', '.js']
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
        new PrependMetadata(metadata, entriesMetadata)
    ]
}];
