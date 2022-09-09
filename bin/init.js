#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const husky = require("husky");
const childProcess = require("child_process");

const { execSync } = childProcess;
const commandCallPath = process.env.INIT_CWD;
const huskyRootPath = path.join(commandCallPath, ".husky");
const preCommitPath = path.join(huskyRootPath, ".pre-commit");
const commitMsgPath = path.join(huskyRootPath, ".commit-msg");
try {
  execSync("git rev-parse --git-dir >/dev/null 2>&1");
  husky.install();
  husky.add(preCommitPath, "npx lint-staged");
  husky.add(commitMsgPath, "npx --no -- commitlint --edit ${1}");
} catch (error) {
  console.log("🆘 oops~ it seems that your project didn't initialization git.");
  console.log("suggest: you can execute git init first");
}
