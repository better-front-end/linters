# Prettier implementation

Add a line in `packages.json` file:

```json
{
	"prettier": "./node_modules/@better-front-end/linters/prettier/prettier-defaults.json"
}
```

I add it to `package.json` because having no actual configurations might confuse code editors that take code style settings from the prettier configuration file
