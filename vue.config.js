"use strict";
const path = require("path");
let modelName = require("./config/project").name;
let outputDir = modelName ? `dist/${modelName}/` : "dist/";
// const CopyWebpackPlugin = require("copy-webpack-plugin");
function resolve(dir) {
  return path.join(__dirname, dir);
}

const newConfig = {
  pages: {
    index: {
      title: modelName,
      filename: "index.html",
      entry: "src/projects/" + modelName + "/main.js",
      // template: "template/" + modelName + "/index.html",
      template: "template/" + modelName + "/index.html",
    },
  },
  devServer: {},
};

module.exports = {
  ...newConfig,

  outputDir: outputDir, // 项目输出目录
  assetsDir: "static", // 静态资源目录
  publicPath: "./", // vue-cli3.3以上版本
  // baseUrl: './',           // vue-cli3.3以下版本
  filenameHashing: false, // 生产环境关闭hash
  productionSourceMap: false, // 生产环境关闭jsmap

  // 外部扩展
  configureWebpack: {
    // externals: {
    //   vue: "Vue",
    //   vuex: "Vuex",
    // },
    plugins: [],
  },

  // 设置别名
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@img", resolve("public/static/img"));
  },

  devServer: {},
};
