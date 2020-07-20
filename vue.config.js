module.exports = {
  devServer: {
    proxy: {
      '/app': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/app': ''
        }
      }
    }
  },
}
