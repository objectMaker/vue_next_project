const config = require("./config.ts");
const autoImport = require("unplugin-auto-import/webpack");
module.exports = autoImport(config);
