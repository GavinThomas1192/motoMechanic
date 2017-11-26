'use strict';

require('dotenv').config({ path: `${__dirname}/src/.dev.env` });
const production = process.env.NODE_ENV === 'production';

const { DefinePlugin, EnvironmentPlugin } = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

let plugins = [
    new EnvironmentPlugin(['NODE_ENV']),
    new ExtractPlugin('bundle-[hash].css'),
    new ExtractPlugin('./bundle.css'),
    new HtmlPlugin({ template: `${__dirname}/src/index.html` }),
    new DefinePlugin({
        __DEBUG__: JSON.stringify(!production),
        __API_URL__: JSON.stringify(process.env.API_URL),
        __FACEBOOK_APP_ID__: JSON.stringify(process.env.FACEBOOK_APP_ID),
        __API_KEY__: JSON.stringify(process.env.APIKEY),
        __AUTH_DOMAIN__: JSON.stringify(process.env.AUTHDOMAIN),
        __DATABASE_URL__: JSON.stringify(process.env.DATABASEURL),
        __PROJECT_ID__: JSON.stringify(process.env.PROJECTID),
        __MESSAGING_SENDER_ID__: JSON.stringify(process.env.MESSAGINGSENDERID),
        __STORAGE_BUCKET__: JSON.stringify(process.env.STORAGEBUCKET),

    }),
];

if (production) {
    plugins = plugins.concat([new CleanPlugin(), new UglifyPlugin()]);
}

module.exports = {
    plugins,
    entry: `${__dirname}/src/main.js`,
    devServer: {
        historyApiFallback: true,
    },
    devtool: production ? undefined : 'eval',
    output: {
        path: `${__dirname}/build`,
        filename: 'bundle-[hash].js',
        publicPath: process.env.CDN_URL,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },

            {
                test: /\.scss$/,
                loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
            },
            {
                test: /\.css$/,
                exclude: [/\.global\./, /node_modules/],
                loader: ExtractPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    importLoaders: 1,
                                    modules: true,
                                    autoprefixer: true,
                                    minimize: true,
                                    localIdentName: '[name]__[local]___[hash:base64:5]'
                                }
                            }
                        ]
                    })
            },
            {
                test: /\.css/,
                include: [/\.global\./, /node_modules/],
                loader: ExtractPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader']
                    })
            },
            {
                test: /\.(woff|woff2|ttf|eot|glyph|\.svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'font/[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(jpg|jpeg|gif|png|tiff|svg)$/,
                exclude: /\.glyph.svg/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 6000,
                            name: 'image/[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(mp3|aac|aiff|wav|flac|m4a|mp4|ogg)$/,
                exclude: /\.glyph.svg/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: 'audio/[name].[ext]' },
                    },
                ],
            },
        ],
    },
};