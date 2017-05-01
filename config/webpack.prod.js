let webpack = require('webpack')
let webpackMerge = require('webpack-merge')
let common = require('./webpack.common.js')

module.exports = webpackMerge(common.client, {

    devtool: 'cheap-module-source-map',

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: true,
                drop_console: true
            }
        }),
    ]
});
