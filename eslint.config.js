import pumpnEslintConfig from "@pumpn/eslint-config";

const eslintConfig = [
	...pumpnEslintConfig,
	{
		languageOptions: {
			globals: {
				Temporal: "readonly"
			}
		},
		rules: {
			"id-length": [
				"error",
				{
					min: 2,
					max: 40
				}
			],
			"import-x/no-namespace": "off",
			"perfectionist/sort-classes": [
				"error",
				{
					groups: [
						"index-signature",
						["private-static-property", "private-static-accessor-property"],
						["private-static-get-method", "private-static-set-method"],
						["static-property", "static-accessor-property"],
						["static-get-method", "static-set-method"],
						["protected-static-property", "protected-static-accessor-property"],
						["protected-static-get-method", "protected-static-set-method"],
						"static-block",
						["property", "accessor-property"],
						["get-method", "set-method"],
						["protected-property", "protected-accessor-property"],
						["protected-get-method", "protected-set-method"],
						["private-property", "private-accessor-property"],
						["private-get-method", "private-set-method"],
						"constructor",
						["static-method", "static-function-property"],
						["protected-static-method", "protected-static-function-property"],
						["private-static-method", "private-static-function-property"],
						["method", "function-property"],
						["protected-method", "protected-function-property"],
						["private-method", "private-function-property"],
						"unknown"
					],
					partitionByComment: String.raw`\/\/`,
					partitionByNewLine: false
				}
			]
		}
	},
	{
		ignores: [
			"**/*.md/*.js",
			"**/*.jsdoc-defaults",
			"**/*.jsdoc-params",
			"**/*.jsdoc-properties"
		]
	}
];

export default eslintConfig;
