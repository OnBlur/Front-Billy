import pkg from "./package";

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
  css: ["~/assets/css/index.scss"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
    src: "~/plugins/localStorage.js",
    ssr: false
  }],

  manifest: {
    name: "Front Billy",
    short_name: "Billy",
    description: "Applicatie voor usability testing met Billy",
    theme_color: "#424242",
    start_url: "/"
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",
    "nuxt-fontawesome",
    "@nuxtjs/pwa",
    "@nuxtjs/style-resources"
  ],

  styleResources: {
    scss: ["~assets/css/default/colors.scss"]
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  env: {
    baseUrl: process.env.BASE_URL || "https://hidden-taiga-86718.herokuapp.com/api"
  },

  render: {
    http2: {
      push: true
    },
    static: {
      maxAge: "1y",
      setHeaders(res, path) {
        if (path.includes("sw.js")) {
          res.setHeader("Cache-Control", `public, max-age=${15 * 60}`);
        }
      }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
