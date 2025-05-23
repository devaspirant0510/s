const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode:'development',
    entry:{
        webview: "./webview.js",
        pc: "./pc.js",

    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].js"
    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                use:[MiniCssExtractPlugin.loader, "css-loader"]



            }
        ]

    }
    ,
    plugins:[
        new  HtmlWebpackPlugin({
            template:'./webview.html',
            filename: 'webview.html',
            chunks: ['webview'],
        }),
        new  HtmlWebpackPlugin({
            template:'./pc.html',
            filename: 'pc.html',
            chunks: ['pc'],
        }),
        new MiniCssExtractPlugin(),
    ]
}

