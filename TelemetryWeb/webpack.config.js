const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
    new HtmlWebpackPlugin({
        title: 'Telemetry Web'
    }),
    new webpack.HotModuleReplacementPlugin()
];

const config = {
    mode: 'development',
    context: path.join(__dirname, './src'),
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    entry: './src/index.tsx',
    target: 'web',
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            // Typescript
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            { test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader' }
        ],
    },
    plugins: plugins,
    devServer: {
        compress: true,
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        overlay: {
            warnings: false,
            errors: true
        },
        port: process.env.PORT,
        stats: 'normal',
        watchContentBase: true,
        watchOptions: {
            poll: 1000,
            aggregateTimeout: 1000
        },
        hot: true
    }
};

module.exports = config;