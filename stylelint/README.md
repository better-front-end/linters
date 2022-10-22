# Stylelint implementation

Create `.stylelintrc.json` file, or add to an existing file:

```json
{
	"extends": [
		"./node_modules/@yakirgot/linters/stylelint/stylelint-defaults.js"
	]
}
```

If you extend more plugins, this line should probably come at the end of the array, but always use judgment

## In Vue projects, please follow those instructions:

### Install

```bash
 # look at the peer dependencies for the right version

yarn add --save-dev stylelint-config-recommended-vue@x.x.x
```

### Extend in the project's stylelintrc file

```json
{
	"extends": "stylelint-config-html/vue"
}
```

### Visual Studio Code

1. Please install [vscode-stylelint](https://github.com/stylelint/vscode-stylelint)
2. Add this setting to `settings.json`:

```
{
  "stylelint.validate": [
    ...,
    // ↓ Add "vue" language.
    "vue"
  ]
}
```
