module.exports = {
	extends: ["plugin:jest/all"],
	plugins: ["jest"],
	settings: {
		jest: {
			version: ">=26",
		},
	},
	rules: {
		"jest/no-hooks": "off",
		"jest/prefer-expect-assertions": "off",
	},
};