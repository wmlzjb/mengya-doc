module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.module
      .rule('compile')
      .test(/\.md$/)
      .use('markdown')
      .loader('vue-markdown-loader')
  }
}