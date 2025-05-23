const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")

module.exports = {
    mode: "development",
    entry: {
        main: "./index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"

    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin(
            {
                template: "./index.html",
                filename: "index.html",
                chunks: ['index'],
            }
        )
    ]

}
