# Front-End Linters

## Rational

I think a uniform code style is important to easily switch between projects. It lowers the mental load for the programmer, and makes the programming experience faster and more readable. A good lint set of rules can also help everyone, and especially less experienced front-end programmers maintain uniform coding standards, and avoid bad practices.

JavaScript, being a dynamic and loosely-typed language, is especially prone to developer errors. Without the benefit of a compilation process, JavaScript code is typically executed in order to find syntax or other errors. Linting tools like ESLint allow developers to discover problems with their JavaScript code without executing it.

Here I have the basic coding standard for JavaScript, and SCSS, which should be implemented on every front-end project. Each linter should run and execute autofix on file save. If you break sweat while writing code, you're doing it wrong 😊

## Main Tools

[ESLint](https://eslint.org/) - The most common and customizable JavaScript and Typescript linting tool

[Prettier](https://prettier.io/) - Prettier is an opinionated code formatter for many languages that became almost an industry standard

[Stylelint](https://stylelint.io/) - A linter that helps us avoid errors and enforce conventions in our style files

## installation

```sh
yarn add @yakirgot/linters --dev --exact
```

Please visit the relevant directory to read about the specific implementation

NOTE: Those settings assume usage in evergreen browsers, so several rules might need to be overridden in specific projects

### More resources

[ESLint readme](./eslint/README.md)

[Prettier readme](./prettier/README.md)

[Stylelint readme](./stylelint/README.md)

## Notable decisions

### Double quotes vs. single quotes

While single quotes are more common in the JavaScript community, there are a few strong arguments towards double quotes.

- We already use double quotes in many other languages: HTML, JSON, various backend languages
- You can write contractions without needing to escape: `'It\'s mandatory to escape :-/'` vs. `"How y'all doing?"`
- In JavaScript, we have too many options for writing string literals. Now we are only left with two: double quotes and template literals
- You can (and probably should) still write single quotes, and just let prettier/eslint take care the formatting for you on save
- Advocated by Douglas Crockford

### Trailing commas

Trailing commas give us two benefits:

1. Avoiding the commit of another line when committing a multi-line object. e.g.

```js
const bad = [
	"a",
	"b",
	"c", // if this line is removed, the second line will loose its comma,
	// and will be added to the commit, even if it doesn't have anything to do with it
];

const good = [
	"a",
	"b",
	"c", // not proper punctuation, but removing or adding lines doesn't affect any other line
];
```

2. Easily move lines around without the need of adding or removing commas
