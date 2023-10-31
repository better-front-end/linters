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
npm install @better-front-end/linters --save-dev --save-exact
```

Please visit the relevant directory to read about the specific implementation

NOTE: Those settings assume usage in evergreen browsers, so several rules might need to be overridden in specific projects

### More resources

[ESLint readme](./eslint/README.md)

[Stylelint readme](./stylelint/README.md)

## Where Is The Prettier Config File?

We don't need it! It's defaults are good enough and many options were added [due to historical reasons](https://prettier.io/docs/en/option-philosophy). Just adopt it :-)

### Prettier and vscode

1. Make sure you have the prettier plugin installed.
2. In the settings make sure format on save is on.
3. Set Prettier as the default formatter.
