# Stylelint implementation

Create `.stylelintrc.json` file, or add to an existing file:

```json
{
	"extends": ["@better-front-end/linters/stylelint/stylelint-defaults.json"]
}
```

If you extend more plugins, this line should probably come at the end of the array, but always use judgment

### Visual Studio Code

1. Please install [vscode-stylelint](https://github.com/stylelint/vscode-stylelint)
2. Add this setting to `settings.json`:
