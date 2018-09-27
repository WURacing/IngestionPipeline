const path = require('path');
const webpack = require('webpack');

// Plugins
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');


// Utils
let isProduction = false;
if (process.argv.indexOf('-p') >= 0) { // If production flag is passed
    isProduction = true;
    process.env.NODE_ENV = 'production';
}

// Production Plugins
const plugins = [
    new HtmlWebpackPlugin({
        title: 'Telemetry Web'
    })
];

// Dev Plugins
if (!isProduction) {
    plugins.push(
        new WebpackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerPort: 8888 })
    );
}


// Config
//const config: webpack.Configuration = {
const config = {
    mode: isProduction ? 'production' : 'development',
    context: path.join(__dirname, 'src'),
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    entry: './index.tsx',
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
            // CSS
            { test: /\.css$/, loader: 'css-loader' },
            // Static assets
            { test: /\.html$/, loader: 'html-loader' },
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
        open: true,
        host: 'localhost',
        port: 3000,
        //public: '127.0.0.1:3000',
        stats: 'normal',
        watchContentBase: true
    }
};

module.exports = config;