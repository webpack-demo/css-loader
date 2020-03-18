const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          }
        ]
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      }
    ]
  },
  devServer: {
    stats: {
      assets: false,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: false,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m'
      }
    },
    host: '0.0.0.0'
  }
}