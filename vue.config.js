module.exports = {
  publicPath: "/rest-countries/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                @import "@/assets/styles/_variables.scss";
                `,
      },
    },
  },
};
