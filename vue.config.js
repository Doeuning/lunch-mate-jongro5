module.exports = {
  devServer: {
    port: 8080,
    overlay: false,
    disableHostCheck: true,
    proxy: {
      "/address/api": {
        target: process.env.VUE_ADDRESS_API_URL,
        changeOrigin: true,
      },
      "/api": {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
      },
    },
  },
  publicPath: "/lunch-mate-jongro5",
  outputDir: "docs",
};
