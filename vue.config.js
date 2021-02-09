const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const package = require('./package.json')

const isProd = process.env.NODE_ENV === 'production'
function resolve(dir) {
  return path.join(__dirname, dir)
}

const proPlugins = []

if (isProd) {
  proPlugins.push(
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('public/index.html'),
      favicon: resolve('public/favicon.ico'),
      banner: `version: ${package.version}, update：${new Date().toLocaleString()}`,
      minify: isProd ? {
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      } : {}
    })
  )
}

module.exports = {
  publicPath: isProd
    ? './'//yourcdn.com
    : './',
  assetsDir: 'static',
  outputDir: 'dist',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: 5020,
    host: 'localhost',
    //proxy: 'https://api.example.com/api/'
  },
  pages: {
    index: "./src/main.js",
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')

    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@components', resolve('src/components'))
      .set('@utils', resolve('src/assets/utils'))
      .set('@images', resolve('src/assets/images'))
      .set('@css', resolve('src/assets/less'))
      .set('@store', resolve('src/store'))
      .set('@router', resolve('src/router'))
      .set('@view', resolve('src/view'))
      .set('@api', resolve('src/api'))

    config.plugin('banner').use(require.resolve('webpack/lib/BannerPlugin'), [
      {
        banner: `${package.author}, version: ${package.version
          }, update：${new Date().toLocaleString()}`,
      },
    ])

    config
      .plugin('define')
      .tap(args => {
        return [{
          'process.env.ENV': JSON.stringify(`${process.env.NODE_ENV}`),
          'process.env.version': JSON.stringify(`${package.version}`),
          'process.env.time': JSON.stringify(`${new Date().toLocaleString()}`),
        }]
      })
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: proPlugins,
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, "src/assets/less/vars.less")] // 引入全局样式变量
    }
  }
}