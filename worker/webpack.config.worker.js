const path = require('path')

module.exports = {
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'live.worker.js'
  }
}
