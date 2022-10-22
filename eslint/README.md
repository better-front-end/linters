# ESLint implementation

Create `.eslintrc.json` file, or add to an existing file:

```json
{
	"extends": ["./node_modules/@yakirgot/linters/eslint/eslint-defaults.js"]
}
```

If you extend more plugins, this line should probably come at the end of the array, but always use judgment

### Jest

Please install

```bash
 # look at the peer dependencies for the right version
yarn add --dev eslint-plugin-jest@x.x.x
```

You should add this setting to the project:

```json
{
	"extends": [
		"./node_modules/@yakirgot/linters/eslint/eslint-jest.js",
		"./node_modules/@yakirgot/linters/eslint/eslint-defaults.js"
	]
}
```

[eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)

### Vue applications

Please install

```bash
# look at the peer dependencies for the right version
yarn add --dev eslint-plugin-vue@x.x.x
```

You should add this setting to the project:

```js
module.exports = {
	extends: [
		"plugin:vue/vue3-recommended", // Use this if you are using Vue.js 3.x
		"plugin:vue/recommended", // Use this if you are using Vue.js 2.x
		"./node_modules/@yakirgot/linters/eslint/eslint-vue.js",
		"./node_modules/@yakirgot/linters/eslint/eslint-defaults.js",
	],
};
```

[eslint-plugin-vue](https://eslint.vuejs.org/rules/)

### Visual Studio Code

1. Please install [vscode-eslint](https://github.com/microsoft/vscode-eslint/)
2. Add this two settings to `settings.json`:

```json
{
	"eslint.validate": ["javascript", "typescript", "vue"],
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	}
}
```
