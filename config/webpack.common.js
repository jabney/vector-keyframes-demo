let path = require('path')
let webpack = require('webpack')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    client: {
        entry: {
            app: './app/app.js',
            vendor: './app/vendor.js'
        },

        output: {
            filename: '[name].[chunkhash].js',
            path: path.resolve(__dirname, '../dist')
        },

        module: {
            rules: [{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }]
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-react', 'babel-preset-es2015'],
                    }
                }]
            },
            // {
            //     test: /\.component\.html$/,
            //     use: ['raw-loader']
            // }
            ]
        },

        plugins: [

            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor'
            }),

            new ExtractTextPlugin('styles.[contentHash].css'),

            new HTMLWebpackPlugin({
                template: './app/index.html',
                filename: 'index.html'
            })
        ]
    }
}
