"use strict";

module.exports = {
	indentation: "tabs",
	extends: [
		"stylelint-config-standard-scss",
		"stylelint-config-html/html",
		"stylelint-prettier/recommended",
	],
	plugins: ["stylelint-order", "stylelint-use-logical-spec"],
	customSyntax: "postcss-scss",
	rules: {
		"string-quotes": "double",
		"liberty/use-logical-spec": [true, { except: ["float"] }], // float logical properties are not yet supported
		"order/order": [
			{
				type: "at-rule",
				name: "forward",
			},
			{
				type: "at-rule",
				name: "use",
			},
			{
				type: "at-rule",
				name: "import",
			},
			{
				type: "at-rule",
				name: "include",
			},
			"custom-properties",
			"dollar-variables",
			"declarations",
			"rules",
			"at-rules",
		],
		"order/properties-alphabetical-order": true,
		"prettier/prettier": true,
		"at-rule-empty-line-before": [
			"always",
			{
				except: ["blockless-after-same-name-blockless", "first-nested"],
				ignore: ["after-comment"],
				ignoreAtRules: ["else"],
			},
		],
		"max-nesting-depth": [
			2,
			{
				ignore: ["blockless-at-rules", "pseudo-classes"],
			},
		],
		"at-rule-disallowed-list": ["import"],
		"selector-class-pattern": [
			/^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$/u,
			{ resolveNestedSelectors: true },
		],
		"declaration-block-no-redundant-longhand-properties": true,
		"color-function-notation": "legacy", // until sass will support modern notation - "rgb($variable %20)"
		"no-descending-specificity": true,
		"max-empty-lines": 1,
		"rule-empty-line-before": [
			"always-multi-line",
			{
				except: ["first-nested"],
				ignore: ["after-comment"],
			},
		],
		"alpha-value-notation": "number", // old Vue versions support only number in production build (HIVE-5047),
		"import-notation": "string",
		"selector-not-notation": "complex",
		"font-family-name-quotes": "always-where-required",
		"declaration-block-no-duplicate-properties": [
			true,
			{ ignore: ["consecutive-duplicates-with-same-prefixless-values"] },
		],
	},
};
