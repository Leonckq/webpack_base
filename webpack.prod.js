const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]_[chunkhash:8].js',
    publicPath: 'auto'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.less/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'imgages/[name]_[hash:8].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name]_[contenthash:8].css'
    }),
    new OptimizeCssAssetsPlugin()
  ]
}