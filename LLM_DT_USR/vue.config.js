const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  transpileDependencies: [], // 将这里改为空数组
  lintOnSave: false, // 禁用保存时的 lint
  configureWebpack: {
    plugins: [
      // 使用 ProvidePlugin 确保 Cesium 在全局可用
      new webpack.ProvidePlugin({
        Cesium: ["cesium/Source/Cesium"],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: "@open-wc/webpack-import-meta-loader",
          },
        },
      ],
    },
  },
});
