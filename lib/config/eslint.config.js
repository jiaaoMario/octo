/*
 * @Author: mario.ma
 * @Date: 2022-09-10 22:02:06
 */
module.exports = {
	root: true,
	extends: ['eslint:recommended', 'prettier'],
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		node: true,
		browser: true,
	},
	rules: {
		semi: ['error', 'always'],
		'no-await-in-loop': 'error',
		'no-console': [
			'warn',
			{
				allow: ['warn', 'error'],
			},
		],
		'default-case': 'error',
		'dot-notation': 'warn',
		'no-alert': 'error',
		'no-eval': 'error',
		'no-extend-native': [
			'error',
			{
				exceptions: ['Object'],
			},
		],
		'no-magic-numbers': [
			'error',
			{
				enforceConst: true,
				ignoreArrayIndexes: true,
			},
		],
		'no-param-reassign': 'warn',
		'no-script-url': 'error',
		'no-use-before-define': ['warn', { functions: true, classes: true }],
		// node env
		'handle-callback-err': 'warn',
		// code style
		'block-spacing': ['warn', 'always'],
		'comma-style': ['warn', 'last'],
		'new-cap': [
			'warn',
			{
				newIsCap: true,
			},
		],
		'no-multiple-empty-lines': [
			'warn',
			{
				max: 2,
			},
		],
		'spaced-comment': ['warn', 'always'],
		'arrow-parens': ['warn', 'as-needed'],
		'no-duplicate-imports': [
			'error',
			{
				includeExports: true,
			},
		],
		'prefer-const': [
			'warn',
			{
				ignoreReadBeforeAssign: true,
			},
		],
	},
};
