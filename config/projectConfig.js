const modelName = require("./project").name;
const newConfig = {
  pages: {
    index: {
      entry: "models/" + modelName + "/main.js",
      outputDir: "dist/" + modelName + "/",
      template: "template/" + modelName + "/index.html",
      filename: "index.html",
    },
  },
};

const configObj = newConfig;
console.log(configObj);
module.exports = configObj;
