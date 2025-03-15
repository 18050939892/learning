import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'

export default tseslint.config(
    { ignores: ['dist'] },
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            parser: tseslint.parser,  // 添加这行
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                project: './tsconfig.json',  // 添加这行，指向你的 tsconfig.json
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.commonjs,
                ...globals.es2021,
            },
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            'react': reactPlugin,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'jsx-a11y': jsxA11y,
            'import': importPlugin,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...tseslint.configs.recommended.rules,
            ...reactPlugin.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,

            // JSX Runtime
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
            'padding-line-between-statements': [
                'error', {
                    'blankLine': 'never',
                    'prev': '*',
                    'next': 'return',
                }],
            'no-multiple-empty-lines': ['error', { 'max': 1 }],

            'padded-blocks': ['error', 'never'], // 禁止块内填充空行

            // A11y rules
            'jsx-a11y/anchor-has-content': 'off',
            'jsx-a11y/anchor-is-valid': 'off',
            'jsx-a11y/no-static-element-interactions': 'off',
            'jsx-a11y/click-events-have-key-events': 'off',

            // TypeScript rules
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-empty-function': [
                'error',
                { allow: ['arrowFunctions'] }],
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-var-requires': 'off',
            // 移除有问题的规则
            // '@typescript-eslint/type-annotation-spacing': 'error',

            // Spacing and formatting
            'comma-spacing': [
                'error', {
                    before: false,
                    after: true,
                }],
            'space-infix-ops': 'error',
            'indent': ['error', 4],

            // React rules
            'react/jsx-newline': 'off',
            'react/jsx-indent': ['error', 4],
            'react/jsx-indent-props': ['error', 4],
            'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
            'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
            'react/jsx-max-props-per-line': [
                'error',
                {
                    maximum: {
                        single: 3,
                        multi: 1,
                    },
                },
            ],
            'react/require-default-props': 'off',
            'react/jsx-props-no-spreading': 'off',
            'react/no-unstable-nested-components': 'off',
            'react/button-has-type': 'off',
            'react/function-component-definition': 'off',
            'react/jsx-filename-extension': 'off',
            'react/no-unescaped-entities': 'off',
            'react/jsx-one-expression-per-line': 'off',
            'react/jsx-closing-tag-location': 'off',
            'react/no-unknown-property': 'off',

            // Object formatting
            'object-curly-newline': [
                'error', {
                    ObjectExpression: {
                        minProperties: 4,
                        multiline: true,
                        consistent: true,
                    },
                    ObjectPattern: {
                        minProperties: 4,
                        multiline: true,
                        consistent: true,
                    },
                    ImportDeclaration: {
                        minProperties: 7,
                        multiline: true,
                        consistent: true,
                    },
                    ExportDeclaration: 'always',
                }],
            'object-property-newline': [
                'error',
                { allowMultiplePropertiesPerLine: false }],

            // Import rules
            'import/prefer-default-export': 'off',
            'import/no-extraneous-dependencies': 'off',
            'import/extensions': 'off',
            'import/no-unresolved': 'off',
            'import/no-relative-packages': 'off',

            // General rules
            'no-plusplus': 'off',
            'quotes': 'off',
            'no-bitwise': 'off',
            'no-restricted-syntax': 'off',
            'no-await-in-loop': 'off',
            'no-use-before-define': 'off',
            'no-underscore-dangle': 'off',
            'no-restricted-globals': 'off',
            'no-shadow': 'off',
            'no-trailing-spaces': 'error',
            'arrow-body-style': 'off',
            'arrow-parens': 'off',
            'max-len': 'off',
            'jsx-quotes': 'off',
            'semi': 'off',
            'comma-dangle': 'off',
            'no-promise-executor-return': 'off',
            'no-param-reassign': 'off',
            'no-continue': 'off',
            'no-tabs': 'off',
            'no-mixed-spaces-and-tabs': 'off',

            // React Refresh
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true }],
        },
    },
    {
        files: ['**/*.js'],
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'off',
        },
    },
)
