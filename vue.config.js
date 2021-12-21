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
  },
  publicPath: "/lunch-mate-jongro5",
  outputDir: "docs",
};
