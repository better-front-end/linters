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

You should add this setting to the project:

```json
{
	"extends": [
		"./node_modules/@better-front-end/linters/eslint/eslint-jest.json",
		"./node_modules/@better-front-end/linters/eslint/eslint-defaults.json"
	]
}
```

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
