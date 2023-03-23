const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: config => {
    config.externals = {
      'vue': 'Vue',
      'element-ui': 'ELEMENT'
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://smms.app/api/v2/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
