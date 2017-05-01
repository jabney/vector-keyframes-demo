let webpackMerge = require('webpack-merge')
let CleanObsoleteChunks = require('webpack-clean-obsolete-chunks')
let common = require('./webpack.common.js')

module.exports = webpackMerge(common.client, {

    devtool: 'cheap-module-eval-source-map',

    plugins: [
        new CleanObsoleteChunks(),
    ]
})
