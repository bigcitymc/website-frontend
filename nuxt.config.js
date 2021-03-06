export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BigCity',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://api.bigcitymc.com'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Storybook
  storybook: {
    // Options
  },

  auth: {
    strategies: {
      refresh: {
        scheme: 'refresh',
        token: {
          property: 'data.access_token',
          maxAge: 300,
          global: true,
        },
        refreshToken: {
          property: 'data.refresh_token',
          data: 'refresh_token',
          maxAge: 1209600
        },
        user: {
          property: 'data',
        },
        endpoints: {
          login: {
            url: 'oauth/token',
            method: 'post',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          },
          user: {
            url: 'api/v1/user/current',
            method: 'get'
          },
          refresh: {
            url: 'oauth/token',
            method: 'post',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        }
      }
    }
  }
}
