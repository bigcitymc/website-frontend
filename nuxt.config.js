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

  // https://www.digitalocean.com/community/tutorials/implementing-authentication-in-nuxtjs-app
  // https://auth.nuxtjs.org/schemes/local
  // https://auth.nuxtjs.org/schemes/local/#token
  // https://auth.nuxtjs.org/schemes/local/#autofetch
  auth: {
    strategies: {
      oauth: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'oauth/token',
          token: 'oauth/token',
          userInfo: 'user/login?_format=json',
          logout: 'user/logout?_format=json',
        },
        token: {
          property: 'data.access_token',
          type: 'Bearer',
          maxAge: 300,
        },
        refreshToken: {
          property: 'data.refresh_token',
          maxAge: 1209600
        },
        clientId: 'cf7c04d0-b6dd-4d2e-ad5d-501d389c7b43',
        state: 'HBnsHFHdVbkEajGFGBchu94KHk8yMXvUMNP2tc4y3gcKgKdVVJf92zjWGFwsqe8F',
        scope: ['user']
      },
      cookie: {
        cookie: {
          name: 'X-CSRF-Token'
        },
        user: {
          property: 'data.current_user',
          autoFetch: false,
        },
        token: {
          property: 'data.csrf_token',
        },
        endpoints: {
          csrf: {
            url: 'session/token'
          },
          login: {
            url: 'user/login?_format=json',
            method: 'post'
          },
          logout: false,
          user: {
            url: 'user/login?_format=json',
            method: 'post',
            propertyName: 'data.current_user'
          }
        }
      },
      local: {
        user: {
          property: 'data.current_user',
          autoFetch: false,
        },
        endpoints: {
          login: {
            url: 'user/login?_format=json',
            method: 'post',
            propertyName: 'data.csrf_token'
          },
          logout: false
        }
      }
    }
  }
}
