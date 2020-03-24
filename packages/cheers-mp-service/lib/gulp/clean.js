const fs = require("fs-extra");
const cleaner = path => {
  function clean() {
    return fs.remove(path);
  }
  clean.displayName = "清空输出目录";
  return clean;
};

module.exports = cleaner;