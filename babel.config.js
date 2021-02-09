module.exports = {
  presets: [
    '@vue/app',
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      modules: false,
      corejs: 3,
      targets: {
        node: 'current'
      }
    }],
  ]
}
