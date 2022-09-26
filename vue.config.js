// const config = require("./src/Plugins/unPluginsAutoImport/config.ts");
// import config from "@/Plugins/unPluginsAutoImport/config.ts";
const autoImport = require("./src/Plugins/unPluginsAutoImport/index.ts");
module.exports = {
  configureWebpack: {
    plugins: [autoImport],
  },
};
