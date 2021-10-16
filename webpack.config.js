const fs = require('fs')
const path = require('path')
const IntermediateEntryPlugin = require('webpack-intermediate-entry')

const components = path.join(__dirname, 'src/components')
console.log('config loaded')
module.exports = {
  entry: fs
    .readdirSync(components)
    .filter(file => /\.jsx?/.test(file))
    .reduce(
      (dict, file) => ({
        ...dict,
        [file.replace(/\.jsx?$/, '')]: './' + path.relative(__dirname, path.join(components, file))
      }),
      {}
    ),
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build')
  },
  plugins: [new IntermediateEntryPlugin({ insert: './src/hydrate.js' })],
  mode: 'development'
}
