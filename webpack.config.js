var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {},
    module: {
        loaders: [
            { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.scss$/, loader: 'style!css!sass' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.woff/, loader: require.resolve("url-loader") + '?prefix=font/&limit=10000&mimetype=application/font-woff&name=assets/[hash].[ext]' },
            { test: /\.(woff|ttf|eot|svg)$/, loader: require.resolve("file-loader") + '?prefix=font/&name=assets/[hash].[ext]' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'source/index.html',
            inject: 'body',
            hash: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module, count) {
                return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
            }
        })
    ]
};
