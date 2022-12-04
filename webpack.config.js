const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

module.exports = {

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle[chunkhash].js'
    },

    devServer: {
        port: 3000
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),

        new HtmlWebpackInlineSVGPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },

              {
                test: /\.svg$/,
                // loader: 'svg-inline-loader'
                loader: 'file-loader'
            },

            // {
            //     test: /\.(svg|png|jpe?g|gif)$/i,
            //     loader: 'file-loader',
            //     options: {
            //       outputPath: 'images',
            //     }
            // }

        ],
        
    },

}