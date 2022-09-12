<p align="center">
  <img width="100" src="https://github.com/jiaaoMario/octo/blob/HEAD/public/assets/palm_tree.png" />
</p>
<div align="center">
<h2>octo 📦</h2>
<p>A toolbox of common scripts for your Front-end projects</p>
</div>

<a href="/README-zh_CN.md">
<img src="https://img.shields.io/badge/README-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-brightgreen"/>
</a>

---

If you're fed up with configuring a set of specs every time you create a front-end project, e.g: eslint,prettier or commitlint. Maybe you can try to use Octo.

## Install

```sh
npm install octo-minions -D
```

## Usage

### Husky

Husky will auto deploy when you run `octo-init`, and octo will help you auto register some git-hooks, e.g pre-commit, commit-msg.

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

## What features are integrated into Octo

1. Git Hooks - Husky
2. Commit-Msg Hooks - commitlint
3. Pre-commit Hooks - lint-staged
4. code formatter - prettier
5. Tool for identifying and reporting on patterns found in ECMAScript/JavaScript code - eslint

## License

MIT
