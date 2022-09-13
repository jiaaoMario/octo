<p align="center">
  <img width="100" src="https://github.com/jiaaoMario/octo/blob/HEAD/public/assets/palm_tree.png" />
</p>
<div align="center">
<h2>octo 📦</h2>
<p>一个为前端项目开发集成的配置集成工具箱</p>
</div>

<a href="/README.md">
<img src="https://img.shields.io/badge/English-README-blue" />
</a>

---

如果你已经厌倦了每创建一个前端项目时，重新配置一套代码规范，你可以尝试使用一下 Octo。

## 安装

```sh
npm install octo-minions -D
```

## 使用

### Husky

在你初次执行 `octo-init` 命令后，Husky 便会自动在你的项目中配置，并且帮助你注册一些 git-hooks，如：pre-commit、commit-msg 等。

### commitlint

commitlint.config.js

```javascript
module.exports = require("octo/commitlint");
```

### lint-staged

.lintstagedrc.js

```javascript
module.exports = require("octo/lintstagedrc");
```

### prettier

.prettierrc.js

```javascript
module.exports = require("octo/prettier");
```

### eslint

.eslintrc.js

```javascript
module.exports = {
  extends: ["./node_modules/octo/eslint.js"],
};
```

### tsconfig

```json
{
  "extends": "./node_modules/octo/shared-tsconfig.json"
}
```

## 在 Octo 中集成了什么功能

1. Git 钩子 - Husky
2. Git Commit-Msg Hooks - commitlint
3. Git Pre-commit Hooks - lint-staged
4. 代码风格格式化工具 - prettier
5. 在 ECMAScript/JavaScript 代码中识别和报告模式匹配的工具 - eslint
6. 强类型语言 - TypeScript

## License

MIT
