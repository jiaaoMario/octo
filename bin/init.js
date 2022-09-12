#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const husky = require("husky");
const semver = require("semver");
const minimist = require("minimist");
const whichPMRuns = require("which-pm-runs");
const childProcess = require("child_process");
const parseRc = require("../lib/utils/parseRc");
const pkg = require("../package.json");

const { execSync } = childProcess;
const commandCallPath = process.env.INIT_CWD;
const huskyRootPath = path.join(commandCallPath, ".husky");
const preCommitPath = path.join(huskyRootPath, "pre-commit");
const commitMsgPath = path.join(huskyRootPath, "commit-msg");
let expectDependencies = [];

try {
  execSync("git rev-parse --git-dir >/dev/null 2>&1");
  husky.install();
  husky.add(preCommitPath, "npx lint-staged");
  husky.add(commitMsgPath, "npx --no -- commitlint --edit ${1}");
} catch (error) {
  console.log("🆘 oops~ it seems that your project didn't initialization git.");
  console.log("suggest: you can execute git init first");
}

try {
  const args = minimist(process.argv.slice(2));
  const { usage } = args;
  if (usage) {
    expectDependencies = usage;
  } else {
    const rcFileName = ".octorc";
    const ext = [".js", "", ".json"];
    let rcFilePath = "";
    for (let i = 0; i < ext.length; i++) {
      const fileName = path.join(commandCallPath, `/${rcFileName}${ext[i]}`);
      if (fs.existsSync(fileName)) {
        i = ext.length;
        rcFilePath = fileName;
      }
    }
    if (!rcFilePath) {
      expectDependencies = [
        "lint-staged",
        "prettier",
        "eslint",
        "eslint-config-prettier",
        "@commitlint/cli",
        "@commitlint/config-conventional",
      ];
    } else {
      expectDependencies = parseRc(rcFilePath);
    }
  }
} catch (error) {
  console.log(error);
}

const pmRunner = whichPMRuns();
const pm = pmRunner.name;
const expectMinNodeVersion = semver.minVersion(pkg.engines.node);
try {
  function _checkPMVersion() {
    return semver.lt(process.version, expectMinNodeVersion);
  }

  if (_checkPMVersion()) {
    throw Error("nodeVersion");
  }

  const dependencies = expectDependencies;
  function _splitDependencies() {
    return dependencies.join(" ");
  }
  switch (pm) {
    case "npm":
      execSync(`npm install ${_splitDependencies()} --save-dev`);
      break;
    case "yarn":
    case "pnpm":
      execSync(`${pm} add ${_splitDependencies()} --save-dev`);
      break;
  }
} catch (error) {
  if (
    new Error(error).message &&
    new Error(error).message === "Error: nodeVersion"
  ) {
    console.log(
      `🆘 oops~ your current node version: ${process.version} is lower than you expect min node version: ${expectMinNodeVersion}`
    );
  }
}
