/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var commonConfig = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {

        filename: 'bundle[hash].js',

        path: path.resolve(__dirname, 'dist')
    },


    plugins: [new HtmlWebpackPlugin({
            title: "Poker",
            template: "src/index.html",
            minify: {
                collapseWhitespace: true
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        })
    ],
    module: {

        rules: [{
                test: /\.js$/,
                use: "babel-loader",
                exclude: path.join(__dirname, 'node_modules')
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },

            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOrnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newe
                        },
                    },
                ],
            }
        ]
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src', 'components'),
            assets: path.resolve(__dirname, 'src', 'assets'),
            styles: path.resolve(__dirname, 'src', 'styles'),
            utils: path.resolve(__dirname, 'src', 'utils'),
            data: path.resolve(__dirname, 'src', 'data'),
            services: path.resolve(__dirname, 'src', 'services'),
            pages: path.resolve(__dirname, 'src', 'pages')
        }
    }
};


var devConfig = {
    devServer: {
        open: true,
        overlay: true,
        port: 3000,
        hot: true,
        contentBase: path.join(__dirname, 'src'),
        watchContentBase: true
    }
};

var prodConfig = {

};


module.exports = (env, argv) =>
    argv.mode === 'development' ?
    merge(commonConfig, devConfig) :
    merge(commonConfig, prodConfig);