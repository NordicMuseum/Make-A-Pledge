const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: path.resolve('../Poll/javascripts', 'entry.js'),
  mode: 'production',

  output: {
    path: path.resolve('./assets/js'),
    filename: 'poll.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react', '@babel/preset-env']
          }
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'file-loader?name=../poll/images/[name].[ext]' },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=../poll/fonts/[name].[ext]'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.IgnorePlugin(new RegExp('^(fs|ipc)$')),
  ],

  target: 'web'
}
