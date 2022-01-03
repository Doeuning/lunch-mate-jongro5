module.exports = {
  devServer: {
    overlay: false,
    proxy: {
      "/": {
        target: "https://www.juso.go.kr/addrlink/addrLinkApi.do",
        pathRewrite: { "^/": "" },
        changeOrigin: true,
        secure: false,
      },
      // "/async": {
      //   target: "https://openapi.naver.com/v1/papago/n2mt",
      //   pathRewrite: { "^/": "" },
      //   changeOrigin: true,
      //   secure: false,
      // },
      // "/address": {
      //   target: "https://doeuning.github.io/lunch-mate/",
      // },
    },
    devServer: {
      port: 8080,
      overlay: false,
      disableHostCheck: true,
      // host: 'localhost',
      proxy: {
        "/address/api": {
          target: process.env.VUE_APP_API_URL,
          changeOrigin: true,
        },

        // todo : test proxy 삭제 필요
        "/b2b": {
          target: process.env.VUE_APP_API_URL,
          changeOrigin: true,
        },
      },
    },
  },
  publicPath: "/lunch-mate-jongro5",
  outputDir: "docs",
};
