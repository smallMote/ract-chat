const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: './src/index.js',
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ],
            plugins: [
              // 处理ES7中的类转换
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              // 处理生成器等一些高级内置语法
              '@babel/plugin-transform-runtime'
            ]
          }
        },
        exclude: /node_modules/,
        include: path.resolve('src')
      },
      // css
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      // scss
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'style-resources-loader',
            options: {
              patterns: [
                path.resolve('src/common/style/variable.scss')
              ]
            }
          }
        ]
      }
    ]
  }
}
