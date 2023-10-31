# ESLint implementation

Create `.eslintrc.json` file, or add to an existing file:

```json
{
	"extends": [
		"./node_modules/@better-front-end/linters/eslint/eslint-defaults.json"
	]
}
```

If you extend more plugins, this line should probably come at the end of the array, but always use judgment

### Visual Studio Code

1. Please install [vscode-eslint](https://github.com/microsoft/vscode-eslint/)
2. Add this two settings to `settings.json`:

```json
{
	"eslint.validate": ["javascript", "typescript"],
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	}
}
```

## Typescript Support

```sh
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

```json
{
	"overrides": [
		{
			"files": ["*.ts"],
			"extends": ["plugin:@typescript-eslint/recommended"],
			"parser": "@typescript-eslint/parser",
			"plugins": ["@typescript-eslint"]
		}
	]
}
```

For further reading [visit typescript-eslint](https://typescript-eslint.io/)
