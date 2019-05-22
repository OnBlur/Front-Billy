import pkg from "./package";
const webpack = require("webpack");

export default {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: pkg.description
      }
    ],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#FFFFFF"
  },
  loadingIndicator: {
    name: "circle",
    color: "#fa92f"
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/axios",
    "bootstrap-vue/nuxt",
    "nuxt-sass-resources-loader"
  ],

  // Definieer het pad naar je bestand met je globale mixins/ variables
  sassResources: ["~/assets/css/transition.scss", "~/assets/css/index.scss"],

  /*
   ** Build configuration
   */
  env: {
    baseUrl: process.env.BASE_URL || "https://1b1553e6.ngrok.io/api"
  },

  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        _: "lodash"
      })
    ],

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    transition: {
      name: "page",
      mode: "out-in"
    }
  }
};
