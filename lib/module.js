const { resolve } = require('path')

module.exports = async function (moduleOptions) {
  const options = {
    ...this.options['nuxt-storybook-module'],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-storybook-module.js',
    options
  })
}

module.exports.meta = require('../package.json')
