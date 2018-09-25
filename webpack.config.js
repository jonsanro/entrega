const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {

        filename: 'bundle[hash].js',

        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        open: true,
        overlay: true,
        port: 3000
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Poker",
        template: "src/index.html",
        minify: {
            collapseWhitespace: true
        }
    })]
};