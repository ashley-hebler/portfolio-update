const path = require('path')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Ashley Hebler - Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ashley Hebler portfolio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather|Bowlby+One' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    '~/assets/scss/style.scss'
  ],
  postcss: [
    require('autoprefixer')({
      browsers: ['> 5%']
    })
  ],
  /*
  ** Build configuration
  */
  build: {
    extend (config, ctx) {
      // get and remove file loader
      const rule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg)$/')
      config.module.rules.splice(config.module.rules.indexOf(rule), 1)

      // add it again, but now without 'assets\/svg'
      config.module.rules.push({
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash:7].[ext]'
        }
      })
      config.module.rules.push({
        test: /\.svg$/,
        use: 'svg-sprite-loader'
      })
    },
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // },
  },
  plugins: [
    '~plugins/vue-clipboard2',
    { src: '~/plugins/vue-analytics', ssr: false }
  ],
  generate: {
    fallback: true
  }
}
