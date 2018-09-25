/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');

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
    })],
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
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
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