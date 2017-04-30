module.exports = {
  test: /\.js(\.erb)?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    presets: [
      ['env', { modules: false }],
      'react', 'es2015', 'stage-0', 'stage-1'
    ]
  }
}
