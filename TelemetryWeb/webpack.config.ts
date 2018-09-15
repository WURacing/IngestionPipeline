import * as path from 'path';
import * as webpack from 'webpack';

// Plugins
import * as WebpackBundleAnalyzer from 'webpack-bundle-analyzer';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';


// Utils
let isProduction: boolean = false;
if (process.argv.indexOf('-p') >= 0) { // If production flag is passed
    isProduction = true;
    process.env.NODE_ENV = 'production';
}

// Production Plugins
const plugins: webpack.Plugin[] = [
    new HtmlWebpackPlugin({
        title: 'Hammer'
    })
];

// Dev Plugins
if (!isProduction) {
    plugins.push(
        new WebpackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerPort: 8888 })
    );
}


// Config
const config: webpack.Configuration = {
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
        port: 3000,
        stats: 'normal',
        watchContentBase: true
    }
};

export default config;
