const path = require('path');

const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const NgcWebpackPlugin = require('ngc-webpack').NgcWebpackPlugin;
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const WebpackMd5Hash = require('webpack-md5-hash');

const SERVER_HOST = '0.0.0.0';
const SERVER_PORT = 8080;

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        main: './src/main.ts',
        polyfills: './src/polyfills.ts'
    },
    output: {
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    },
    plugins: [
        new CommonsChunkPlugin({
            name: ['main', 'polyfills'],
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            hash: false,
            inject: true,
            template: './src/index.html',
            chunks: []
        }),
        new ContextReplacementPlugin(
          /angular([\\/])core([\\/])@angular/,
          path.resolve('./src')
        )
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'raw-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['src'],
                            outputStyle: 'compressed',
                            precision: 10,
                            sourceComments: false
                        }
                    }
                ]
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: 'tsconfig.json'
                        }
                    },
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
              }
        ]
    },
    devServer: {
        contentBase: './src',
        historyApiFallback: true,
        host: SERVER_HOST,
        port: SERVER_PORT,
        stats: {
            cached: true,
            cachedAssets: true,
            chunks: false,
            chunkModules: false,
            colors: true,
            hash: false,
            maxModules: 300,
            modules: false,
            reasons: false,
            timings: true,
            version: false
        },
        watchOptions: {
            ignored: /node_modules/
        }
    }

}