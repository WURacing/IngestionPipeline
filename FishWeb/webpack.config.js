const path = require('path');
const webpack = require('webpack');
// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Production Plugins
const plugins = [
    new HtmlWebpackPlugin({
        title: 'Telemetry Web'
    }),
    new webpack.HotModuleReplacementPlugin()
];

const config = {
    context: path.join(__dirname, 'src'),
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    entry: './index.tsx',
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            // Typescript
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
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
        host: '0.0.0.0',
        port: 1500,
        stats: 'normal',
        watchContentBase: true,
        watchOptions: {
            poll: 1000,
            aggregateTimeout: 1000
        },
        hot: true
    },
    
};

module.exports = config;