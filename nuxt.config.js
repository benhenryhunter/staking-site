export default {

  telemetry: false,
  mode: 'universal',
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ethereals Origins | Are you gonna make it?',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'og:description', content: 'Live Ethereals staking stats for you to stake with confidence - brought to you by @philosowrapter' },
      { name: 'format-detection', content: 'telephone=no' },
      {property: 'og:title', content: 'Will you get an Ethereals Origins?'},
      {property: 'og:image', content: '/originsBanner.png'},
      {property: 'twitter:card', content: 'summary_large_image'},
      {property: 'twitter:site', content: '@philosowrapter'},
      {property: 'twitter:creator', content: '@philosowrapter'},
      {property: 'twitter:image', content: 'https://guanaco.dev/originsBanner.png'},
      { hid: 'description', name: 'twitter:description', content: 'Live Ethereals staking stats for you to stake with confidence - brought to you by @philosowrapter' },


    ],
    link: [
      { rel: 'icon', type: 'image/jpeg', href: '/phils-ghost.jpg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~static/scss/globals.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    icons:{
      brands: true,
      solid: true,
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/gtm',
    
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  styleResources: {
    scss: ['./static/scss/*.scss']
  },
  gtm: {
    id: 'GTM-WFG5F2G'
  }

  // scss: ['./static/scss/*.scss']
}
