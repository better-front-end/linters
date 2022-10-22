# Prettier implementation

Add a line in `packages.json` file:

```json
{
	"prettier": "./node_modules/@yakirgot/linters/prettier/prettier-defaults.js"
}
```

We add it to `package.json` because having no actual configurations might confuse code editors that take code style settings from the prettier configuration file
