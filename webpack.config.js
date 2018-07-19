const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

let plugins = []
let mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

const config = {
  entry: `${__dirname}/src/index.js`,
  mode,
  devtool: 'source-map',
  output: {
    path: `${__dirname}/dist`,
    filename: 'library.min.js',
    library: 'library',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this'
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true,
          ecma: 6,
          mangle: true
        },
        sourceMap: false
      })
    ]
  },

  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },

  plugins: plugins
}

module.exports = config
