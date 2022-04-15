const HtmlWebpackPlugin = require('html-webpack-plugin')
const EslintWebpackPlugin = require('eslint-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {DefinePlugin} = require('webpack')
const path = require('path')

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    target: 'web',
    optimization: {
        runtimeChunk: 'single'
    },
    cache: {
        type: 'filesystem'
    },
    devServer: {
        hot: true,
        open: true,
        port: 3011,
    },
    resolve: {
        extensions: [".ts", ".vue", ".js"],
        alias: {
            "@": path.resolve(__dirname, './src/')
        },
        fallback: {
            "html-entities": require.resolve('html-entities')
        }
    },
    module: {
        rules: [
            {
                test: /\.(t|j)s$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: 'vue-loader',
            },

            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            }
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'dome',
            template: './public/index.html'
        }),
        new VueLoaderPlugin(),
        new EslintWebpackPlugin({extensions: ['.ts', '.vue']}),

        new DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
        })

    ]
}