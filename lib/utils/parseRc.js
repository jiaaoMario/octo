/*
 * @Author: mario.ma
 * @Date: 2022-09-12 01:33:17
 */
const fs = require("fs");
const path = require("path");
module.exports = parseRc;

function parseRc(rcPath) {
  let dependencies = [];
  const rcExt = path.extname(rcPath) || ".rc";
  switch (rcExt) {
    case ".js":
    case ".json":
      dependencies = require(rcPath).usage;
      break;
    case ".rc":
      const context = fs.readFileSync(rcPath, {
        encoding: "utf-8",
      });
      dependencies = context.split("\n");
      break;
  }
  return dependencies;
}
