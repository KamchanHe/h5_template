const autoprefixer = require("autoprefixer");
const pxtoviewport = require("postcss-px-to-viewport");
const path = require("path");
// 是否为生产环境
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  publicPath: isProduction ? "" : "",
  // eslint-loader 是否在保存的时候检验?
  lintOnSave: false,
  devServer: {
    port: 8080,
    open: true,
    disableHostCheck: true,
    proxy: {
      "/": {
        target: `http://192.168.0.3:9999`,
      },
    },
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      scss: {
        // @/ 是 src/ 的别名
        // 注意：在 sass-loader v7 中，这个选项名是 "data"
        prependData: `@import "@/assets/css/reset.scss";`,
      },
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        modifyVars: {
          // 直接覆盖变量
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "${path.resolve(
            __dirname,
            "./src/assets/css/custom_theme.less"
          )}";`,
        },
      },
      postcss: {
        plugins: [
          // 配置使用 autoprefixer
          autoprefixer({ overrideBrowserslist: ["last 20 versions"] }), // 记得这里要把 browsers 改为 overrideBrowserslist，autoprefixer 新版本的写法有变}),
          pxtoviewport({
            viewportWidth: 375,
          }),
        ],
      },
    },
  },
};
