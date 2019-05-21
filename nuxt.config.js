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
    color: "#fff"
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
    "nuxt-sass-resources-loader",
    'nuxt-vue-material'
  ],

  // Definieer het pad naar je bestand met je globale mixins/ variables
  sassResources: ["~/assets/css/index.scss"],

  /*
   ** Build configuration
   */
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost.local/api"
  },

  /*
   ** Build configuration
   */
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
    extend(config, ctx) {}
  }
};
