module.exports = {
  publicPath: './',
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://www.liulongbin.top:3005/'
          // pathRewrite: { '^/api' : '' }
        }
      }
    }
  }
}
