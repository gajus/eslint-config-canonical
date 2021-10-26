# Canonical ESLint Config

[![Travis build status](http://img.shields.io/travis/gajus/eslint-config-canonical/master.svg?style=flat-square)](https://app.travis-ci.com/github/gajus/eslint-config-canonical)
[![NPM version](http://img.shields.io/npm/v/eslint-config-canonical.svg?style=flat-square)](https://www.npmjs.org/package/eslint-config-canonical)

Canonical is the most comprehensive code style guide. It consists of more than 800 rules, some of which are custom written for Canonical (e.g. [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc), [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype)).

The goal of the Canonical style guide is to reduce noise in code version control and promote use of the latest ES features.

## Usage

This package includes the following configurations:

* [`canonical`](./configurations/eslintrc.json) – The Canonical code style guide.
* [`canonical/ava`](./configurations/ava.json) – To be used in addition to "canonical" configuration by projects that use [AVA](https://ava.li/).
* [`canonical/cypress`](./configurations/cypress.json) – To be used in addition to "canonical" configuration by projects that use [Cypress](https://cypress.io/).
* [`canonical/flowtype`](./configurations/flowtype.json) – To be used in addition to "canonical" configuration by projects that use [Flowtype](https://flowtype.org/).
* [`canonical/jest`](./configurations/jest.json) – To be used in addition to "canonical" configuration by projects that use [jest](https://facebook.github.io/jest/).
* [`canonical/jsx-a11y`](./configurations/jsx-a11y.json) – To be used in addition to "canonical" configuration by projects that use [React](https://facebook.github.io/react/) and want to include [accessibility checks](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y).
* [`canonical/lodash`](./configurations/lodash.json) – To be used in addition to "canonical" configuration by projects that use [lodash](https://lodash.com/).
* [`canonical/mocha`](./configurations/mocha.json) – To be used in addition to "canonical" configuration by projects that use [Mocha](https://mochajs.org/).
* [`canonical/node`](./configurations/node.json) – To be used in addition to "canonical" configuration by projects that use Node.js.
* [`canonical/react`](./configurations/react.json) – To be used in addition to "canonical" configuration by projects that use [React](https://facebook.github.io/react/).
* [`canonical/typescript`](./configurations/typescript.json) – To be used in addition to "canonical" configuration by projects that use [TypeScript](http://typescriptlang.org/).

Example:

```json
{
  "extends": [
    "canonical",
    "canonical/ava",
    "canonical/cypress",
    "canonical/flowtype",
    "canonical/jest",
    "canonical/jsx-a11y",
    "canonical/lodash",
    "canonical/mocha",
    "canonical/node",
    "canonical/react",
    "canonical/typescript"
  ]
}
```

## Versioning Policy

All breaking changes will bump the major version as per the semver convention. Therefore, every new rule addition will increase the major version.

## Table of comparison

This is how Canonical ruleset compares to other popular configurations.

<!-- This comparison is created using `./compare` script. -->

🚨 – error
⚠️ - warning
❌ - disabled
👻 - not in use

|Rule|Canonical|[Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)|[Google](https://www.npmjs.com/package/eslint-config-google)|[Standard](https://www.npmjs.com/package/eslint-config-standard)|
|---|---|---|---|---|
|`@babel/new-cap`|🚨|👻|👻|👻|
|`@babel/no-invalid-this`|🚨|👻|👻|👻|
|`@babel/no-unused-expressions`|🚨|👻|👻|👻|
|`@babel/object-curly-spacing`|🚨|👻|👻|👻|
|`@babel/semi`|🚨|👻|👻|👻|
|[`@typescript-eslint/adjacent-overload-signatures`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/array-type`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/await-thenable`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/ban-ts-comment`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/ban-tslint-comment`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-tslint-comment.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/ban-types`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md)|❌|👻|👻|👻|
|[`@typescript-eslint/brace-style`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/class-literal-property-style`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md)|👻|👻|👻|👻|
|[`@typescript-eslint/comma-dangle`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/comma-spacing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/consistent-indexed-object-style`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md)|❌|👻|👻|👻|
|[`@typescript-eslint/consistent-type-assertions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/consistent-type-definitions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/consistent-type-exports`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-exports.md)|👻|👻|👻|👻|
|[`@typescript-eslint/consistent-type-imports`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/default-param-last`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md)|👻|👻|👻|👻|
|[`@typescript-eslint/dot-notation`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/explicit-function-return-type`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md)|❌|👻|👻|👻|
|[`@typescript-eslint/explicit-member-accessibility`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md)|❌|👻|👻|👻|
|[`@typescript-eslint/explicit-module-boundary-types`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md)|❌|👻|👻|👻|
|[`@typescript-eslint/func-call-spacing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/indent`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/init-declarations`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md)|❌|👻|👻|👻|
|[`@typescript-eslint/keyword-spacing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/lines-between-class-members`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/member-delimiter-style`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/member-ordering`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md)|❌|👻|👻|👻|
|[`@typescript-eslint/method-signature-style`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/naming-convention`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-array-constructor`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-base-to-string`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-confusing-non-null-assertion`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-confusing-void-expression`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-dupe-class-members`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-duplicate-imports`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-duplicate-imports.md)|❌|👻|👻|👻|
|[`@typescript-eslint/no-dynamic-delete`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-empty-function`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-empty-interface`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-explicit-any`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md)|⚠️|👻|👻|👻|
|[`@typescript-eslint/no-extra-non-null-assertion`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-extra-parens`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-extra-semi`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-extraneous-class`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-floating-promises`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md)|⚠️|👻|👻|👻|
|[`@typescript-eslint/no-for-in-array`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-implicit-any-catch`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md)|❌|👻|👻|👻|
|[`@typescript-eslint/no-implied-eval`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-inferrable-types`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-invalid-this`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md)|❌|👻|👻|👻|
|[`@typescript-eslint/no-invalid-void-type`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-loop-func`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-loss-of-precision`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-magic-numbers`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md)|❌|👻|👻|👻|
|[`@typescript-eslint/no-meaningless-void-operator`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-meaningless-void-operator.md)|👻|👻|👻|👻|
|[`@typescript-eslint/no-misused-new`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-misused-promises`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md)|⚠️|👻|👻|👻|
|[`@typescript-eslint/no-namespace`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-non-null-asserted-nullish-coalescing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-nullish-coalescing.md)|👻|👻|👻|👻|
|[`@typescript-eslint/no-non-null-asserted-optional-chain`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-non-null-assertion`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md)|⚠️|👻|👻|👻|
|[`@typescript-eslint/no-parameter-properties`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-redeclare`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-require-imports`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-restricted-imports`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-restricted-imports.md)|👻|👻|👻|👻|
|[`@typescript-eslint/no-shadow`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-this-alias`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-throw-literal`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-type-alias`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md)|❌|👻|👻|👻|
|[`@typescript-eslint/no-unnecessary-boolean-literal-compare`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md)|❌|👻|👻|👻|
|[`@typescript-eslint/no-unnecessary-condition`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md)|❌|👻|👻|👻|
|[`@typescript-eslint/no-unnecessary-qualifier`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-unnecessary-type-arguments`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md)|❌|👻|👻|👻|
|[`@typescript-eslint/no-unnecessary-type-assertion`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md)|❌|👻|👻|👻|
|[`@typescript-eslint/no-unnecessary-type-constraint`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-unsafe-argument`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-argument.md)|👻|👻|👻|👻|
|[`@typescript-eslint/no-unsafe-assignment`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md)|❌|👻|👻|👻|
|[`@typescript-eslint/no-unsafe-call`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md)|❌|👻|👻|👻|
|[`@typescript-eslint/no-unsafe-member-access`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md)|❌|👻|👻|👻|
|[`@typescript-eslint/no-unsafe-return`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md)|❌|👻|👻|👻|
|[`@typescript-eslint/no-unused-expressions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-unused-vars`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-use-before-define`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-useless-constructor`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/no-var-requires`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/non-nullable-type-assertion-style`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md)|❌|👻|👻|👻|
|[`@typescript-eslint/object-curly-spacing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/object-curly-spacing.md)|👻|👻|👻|👻|
|[`@typescript-eslint/padding-line-between-statements`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/padding-line-between-statements.md)|👻|👻|👻|👻|
|[`@typescript-eslint/prefer-as-const`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/prefer-enum-initializers`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/prefer-for-of`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/prefer-function-type`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/prefer-includes`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/prefer-literal-enum-member`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/prefer-namespace-keyword`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/prefer-nullish-coalescing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/prefer-optional-chain`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/prefer-readonly`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/prefer-readonly-parameter-types`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md)|❌|👻|👻|👻|
|[`@typescript-eslint/prefer-reduce-type-parameter`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/prefer-regexp-exec`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/prefer-return-this-type`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-return-this-type.md)|👻|👻|👻|👻|
|[`@typescript-eslint/prefer-string-starts-ends-with`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/prefer-ts-expect-error`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/promise-function-async`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md)|❌|👻|👻|👻|
|[`@typescript-eslint/quotes`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/require-array-sort-compare`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/require-await`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md)|❌|👻|👻|👻|
|[`@typescript-eslint/restrict-plus-operands`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md)|⚠️|👻|👻|👻|
|[`@typescript-eslint/restrict-template-expressions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md)|❌|👻|👻|👻|
|[`@typescript-eslint/return-await`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md)|👻|👻|👻|👻|
|[`@typescript-eslint/semi`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/sort-type-union-intersection-members`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/space-before-function-paren`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/space-infix-ops`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-infix-ops.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/strict-boolean-expressions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md)|❌|👻|👻|👻|
|[`@typescript-eslint/switch-exhaustiveness-check`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/triple-slash-reference`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/type-annotation-spacing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/typedef`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md)|❌|👻|👻|👻|
|[`@typescript-eslint/unbound-method`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md)|🚨|👻|👻|👻|
|[`@typescript-eslint/unified-signatures`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md)|🚨|👻|👻|👻|
|[`ava/assertion-arguments`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/assertion-arguments.md)|🚨|👻|👻|👻|
|[`ava/hooks-order`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/hooks-order.md)|🚨|👻|👻|👻|
|[`ava/max-asserts`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/max-asserts.md)|⚠️|👻|👻|👻|
|[`ava/no-async-fn-without-await`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-async-fn-without-await.md)|🚨|👻|👻|👻|
|[`ava/no-duplicate-modifiers`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-duplicate-modifiers.md)|🚨|👻|👻|👻|
|[`ava/no-identical-title`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-identical-title.md)|🚨|👻|👻|👻|
|[`ava/no-ignored-test-files`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-ignored-test-files.md)|🚨|👻|👻|👻|
|[`ava/no-import-test-files`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-import-test-files.md)|❌|👻|👻|👻|
|[`ava/no-incorrect-deep-equal`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-incorrect-deep-equal.md)|🚨|👻|👻|👻|
|[`ava/no-inline-assertions`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-inline-assertions.md)|🚨|👻|👻|👻|
|[`ava/no-nested-tests`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-nested-tests.md)|🚨|👻|👻|👻|
|[`ava/no-only-test`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-only-test.md)|🚨|👻|👻|👻|
|[`ava/no-skip-assert`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-skip-assert.md)|🚨|👻|👻|👻|
|[`ava/no-skip-test`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-skip-test.md)|🚨|👻|👻|👻|
|[`ava/no-todo-implementation`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-todo-implementation.md)|🚨|👻|👻|👻|
|[`ava/no-todo-test`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-todo-test.md)|⚠️|👻|👻|👻|
|[`ava/no-unknown-modifiers`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-unknown-modifiers.md)|🚨|👻|👻|👻|
|[`ava/prefer-async-await`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/prefer-async-await.md)|🚨|👻|👻|👻|
|[`ava/prefer-power-assert`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/prefer-power-assert.md)|❌|👻|👻|👻|
|[`ava/prefer-t-regex`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/prefer-t-regex.md)|🚨|👻|👻|👻|
|[`ava/test-title`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/test-title.md)|🚨|👻|👻|👻|
|[`ava/test-title-format`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/test-title-format.md)|👻|👻|👻|👻|
|[`ava/use-t`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/use-t.md)|🚨|👻|👻|👻|
|[`ava/use-t-throws-async-well`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/use-t-throws-async-well.md)|🚨|👻|👻|👻|
|[`ava/use-t-well`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/use-t-well.md)|🚨|👻|👻|👻|
|[`ava/use-test`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/use-test.md)|🚨|👻|👻|👻|
|[`ava/use-true-false`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/use-true-false.md)|🚨|👻|👻|👻|
|[`canonical/filename-match-exported`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-filename-match-exported)|🚨|👻|👻|👻|
|[`canonical/filename-match-regex`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-filename-match-regex)|⚠️|👻|👻|👻|
|[`canonical/filename-no-index`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-filename-no-index)|❌|👻|👻|👻|
|[`canonical/id-match`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-id-match)|🚨|👻|👻|👻|
|[`canonical/no-restricted-strings`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-no-restricted-strings)|👻|👻|👻|👻|
|[`canonical/no-use-extend-native`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-no-use-extend-native)|🚨|👻|👻|👻|
|[`canonical/sort-keys`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-sort-keys)|🚨|👻|👻|👻|
|[`eslint-comments/disable-enable-pair`](https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/disable-enable-pair.md)|🚨|👻|👻|👻|
|[`eslint-comments/no-aggregating-enable`](https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-aggregating-enable.md)|🚨|👻|👻|👻|
|[`eslint-comments/no-duplicate-disable`](https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-duplicate-disable.md)|🚨|👻|👻|👻|
|[`eslint-comments/no-restricted-disable`](https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-restricted-disable.md)|👻|👻|👻|👻|
|[`eslint-comments/no-unlimited-disable`](https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-unlimited-disable.md)|🚨|👻|👻|👻|
|[`eslint-comments/no-unused-disable`](https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-unused-disable.md)|🚨|👻|👻|👻|
|[`eslint-comments/no-unused-enable`](https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-unused-enable.md)|🚨|👻|👻|👻|
|[`eslint-comments/no-use`](https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-use.md)|❌|👻|👻|👻|
|[`eslint-comments/require-description`](https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/require-description.md)|❌|👻|👻|👻|
|[`flowtype/array-style-complex-type`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-array-style-complex-type)|👻|👻|👻|👻|
|[`flowtype/array-style-simple-type`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-array-style-simple-type)|👻|👻|👻|👻|
|[`flowtype/arrow-parens`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-arrow-parens)|🚨|👻|👻|👻|
|[`flowtype/boolean-style`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-boolean-style)|🚨|👻|👻|👻|
|[`flowtype/define-flow-type`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-define-flow-type)|⚠️|👻|👻|👻|
|[`flowtype/delimiter-dangle`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-delimiter-dangle)|🚨|👻|👻|👻|
|[`flowtype/enforce-line-break`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-enforce-line-break)|🚨|👻|👻|👻|
|[`flowtype/generic-spacing`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-generic-spacing)|🚨|👻|👻|👻|
|[`flowtype/interface-id-match`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-interface-id-match)|❌|👻|👻|👻|
|[`flowtype/newline-after-flow-annotation`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-newline-after-flow-annotation)|🚨|👻|👻|👻|
|[`flowtype/no-dupe-keys`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-no-dupe-keys)|👻|👻|👻|👻|
|[`flowtype/no-duplicate-type-union-intersection-members`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-no-duplicate-type-union-intersection-members)|🚨|👻|👻|👻|
|[`flowtype/no-existential-type`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-no-existential-type)|❌|👻|👻|👻|
|[`flowtype/no-flow-fix-me-comments`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-no-flow-fix-me-comments)|⚠️|👻|👻|👻|
|[`flowtype/no-internal-flow-type`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-no-internal-flow-type)|🚨|👻|👻|👻|
|[`flowtype/no-mixed`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-no-mixed)|🚨|👻|👻|👻|
|[`flowtype/no-mutable-array`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-no-mutable-array)|🚨|👻|👻|👻|
|[`flowtype/no-primitive-constructor-types`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-no-primitive-constructor-types)|🚨|👻|👻|👻|
|[`flowtype/no-types-missing-file-annotation`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-no-types-missing-file-annotation)|🚨|👻|👻|👻|
|[`flowtype/no-unused-expressions`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-no-unused-expressions)|❌|👻|👻|👻|
|[`flowtype/no-weak-types`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-no-weak-types)|🚨|👻|👻|👻|
|[`flowtype/object-type-curly-spacing`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-object-type-curly-spacing)|❌|👻|👻|👻|
|[`flowtype/object-type-delimiter`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-object-type-delimiter)|🚨|👻|👻|👻|
|[`flowtype/quotes`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-quotes)|🚨|👻|👻|👻|
|[`flowtype/require-compound-type-alias`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-require-compound-type-alias)|❌|👻|👻|👻|
|[`flowtype/require-exact-type`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-require-exact-type)|⚠️|👻|👻|👻|
|[`flowtype/require-indexer-name`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-require-indexer-name)|👻|👻|👻|👻|
|[`flowtype/require-inexact-type`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-require-inexact-type)|🚨|👻|👻|👻|
|[`flowtype/require-parameter-type`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-require-parameter-type)|❌|👻|👻|👻|
|[`flowtype/require-readonly-react-props`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-require-readonly-react-props)|🚨|👻|👻|👻|
|[`flowtype/require-return-type`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-require-return-type)|❌|👻|👻|👻|
|[`flowtype/require-types-at-top`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-require-types-at-top)|🚨|👻|👻|👻|
|[`flowtype/require-valid-file-annotation`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-require-valid-file-annotation)|🚨|👻|👻|👻|
|[`flowtype/require-variable-type`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-require-variable-type)|❌|👻|👻|👻|
|[`flowtype/semi`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-semi)|🚨|👻|👻|👻|
|[`flowtype/sort-keys`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-sort-keys)|❌|👻|👻|👻|
|[`flowtype/sort-type-union-intersection-members`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-sort-type-union-intersection-members)|🚨|👻|👻|👻|
|[`flowtype/space-after-type-colon`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-space-after-type-colon)|🚨|👻|👻|👻|
|[`flowtype/space-before-generic-bracket`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-space-before-generic-bracket)|🚨|👻|👻|👻|
|[`flowtype/space-before-type-colon`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-space-before-type-colon)|🚨|👻|👻|👻|
|[`flowtype/spread-exact-type`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-spread-exact-type)|❌|👻|👻|👻|
|[`flowtype/type-id-match`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-type-id-match)|🚨|👻|👻|👻|
|[`flowtype/type-import-style`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-type-import-style)|🚨|👻|👻|👻|
|[`flowtype/union-intersection-spacing`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-union-intersection-spacing)|🚨|👻|👻|👻|
|[`flowtype/use-flow-type`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-use-flow-type)|⚠️|👻|👻|👻|
|[`flowtype/use-read-only-spread`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-use-read-only-spread)|🚨|👻|👻|👻|
|[`flowtype/valid-syntax`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-valid-syntax)|👻|👻|👻|👻|
|[`fp/no-arguments`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-arguments.md)|🚨|👻|👻|👻|
|[`fp/no-class`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-class.md)|🚨|👻|👻|👻|
|[`fp/no-delete`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-delete.md)|🚨|👻|👻|👻|
|[`fp/no-events`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-events.md)|🚨|👻|👻|👻|
|[`fp/no-get-set`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-get-set.md)|🚨|👻|👻|👻|
|[`fp/no-let`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-let.md)|❌|👻|👻|👻|
|[`fp/no-loops`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-loops.md)|❌|👻|👻|👻|
|[`fp/no-mutating-assign`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-mutating-assign.md)|🚨|👻|👻|👻|
|[`fp/no-mutating-methods`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-mutating-methods.md)|❌|👻|👻|👻|
|[`fp/no-mutation`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-mutation.md)|❌|👻|👻|👻|
|[`fp/no-nil`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-nil.md)|❌|👻|👻|👻|
|[`fp/no-proxy`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-proxy.md)|🚨|👻|👻|👻|
|[`fp/no-rest-parameters`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-rest-parameters.md)|❌|👻|👻|👻|
|[`fp/no-this`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-this.md)|🚨|👻|👻|👻|
|[`fp/no-throw`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-throw.md)|❌|👻|👻|👻|
|[`fp/no-unused-expression`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-unused-expression.md)|❌|👻|👻|👻|
|[`fp/no-valueof-field`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/no-valueof-field.md)|🚨|👻|👻|👻|
|[`import/default`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md)|🚨|❌|👻|👻|
|[`import/dynamic-import-chunkname`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md)|👻|❌|👻|👻|
|[`import/export`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md)|🚨|🚨|👻|🚨|
|[`import/exports-last`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md)|❌|❌|👻|👻|
|[`import/extensions`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md)|🚨|🚨|👻|👻|
|[`import/first`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)|🚨|🚨|👻|🚨|
|[`import/group-exports`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md)|❌|❌|👻|👻|
|[`import/imports-first`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md)|👻|❌|👻|👻|
|[`import/max-dependencies`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md)|❌|❌|👻|👻|
|[`import/named`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md)|❌|🚨|👻|👻|
|[`import/namespace`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md)|❌|❌|👻|👻|
|[`import/newline-after-import`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md)|🚨|🚨|👻|👻|
|[`import/no-absolute-path`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md)|🚨|🚨|👻|🚨|
|[`import/no-amd`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md)|🚨|🚨|👻|👻|
|[`import/no-anonymous-default-export`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md)|❌|❌|👻|👻|
|[`import/no-commonjs`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md)|🚨|❌|👻|👻|
|[`import/no-cycle`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md)|🚨|🚨|👻|👻|
|[`import/no-default-export`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md)|❌|❌|👻|👻|
|[`import/no-deprecated`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md)|⚠️|❌|👻|👻|
|[`import/no-duplicates`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md)|🚨|🚨|👻|🚨|
|[`import/no-dynamic-require`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md)|❌|🚨|👻|👻|
|[`import/no-extraneous-dependencies`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md)|🚨|🚨|👻|👻|
|[`import/no-import-module-exports`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-import-module-exports.md)|👻|👻|👻|👻|
|[`import/no-internal-modules`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md)|❌|❌|👻|👻|
|[`import/no-mutable-exports`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md)|🚨|🚨|👻|👻|
|[`import/no-named-as-default`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md)|🚨|🚨|👻|👻|
|[`import/no-named-as-default-member`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md)|🚨|🚨|👻|👻|
|[`import/no-named-default`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md)|🚨|🚨|👻|🚨|
|[`import/no-named-export`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-export.md)|❌|❌|👻|👻|
|[`import/no-namespace`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md)|❌|❌|👻|👻|
|[`import/no-nodejs-modules`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md)|❌|❌|👻|👻|
|[`import/no-relative-packages`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-packages.md)|👻|👻|👻|👻|
|[`import/no-relative-parent-imports`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md)|❌|❌|👻|👻|
|[`import/no-restricted-paths`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md)|❌|❌|👻|👻|
|[`import/no-self-import`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md)|🚨|🚨|👻|👻|
|[`import/no-unassigned-import`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md)|🚨|❌|👻|👻|
|[`import/no-unresolved`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md)|❌|🚨|👻|👻|
|[`import/no-unused-modules`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md)|👻|❌|👻|👻|
|[`import/no-useless-path-segments`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md)|🚨|🚨|👻|👻|
|[`import/no-webpack-loader-syntax`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)|🚨|🚨|👻|🚨|
|[`import/order`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md)|🚨|🚨|👻|👻|
|[`import/prefer-default-export`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md)|❌|🚨|👻|👻|
|[`import/unambiguous`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md)|⚠️|❌|👻|👻|
|[`jest/consistent-test-it`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/consistent-test-it.md)|👻|👻|👻|👻|
|[`jest/expect-expect`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/expect-expect.md)|👻|👻|👻|👻|
|[`jest/max-nested-describe`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/max-nested-describe.md)|👻|👻|👻|👻|
|[`jest/no-alias-methods`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-alias-methods.md)|🚨|👻|👻|👻|
|[`jest/no-commented-out-tests`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-commented-out-tests.md)|👻|👻|👻|👻|
|[`jest/no-conditional-expect`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-conditional-expect.md)|🚨|👻|👻|👻|
|[`jest/no-deprecated-functions`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-deprecated-functions.md)|🚨|👻|👻|👻|
|[`jest/no-disabled-tests`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-disabled-tests.md)|🚨|👻|👻|👻|
|[`jest/no-done-callback`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-done-callback.md)|🚨|👻|👻|👻|
|[`jest/no-duplicate-hooks`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-duplicate-hooks.md)|👻|👻|👻|👻|
|[`jest/no-export`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-export.md)|👻|👻|👻|👻|
|[`jest/no-focused-tests`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-focused-tests.md)|🚨|👻|👻|👻|
|[`jest/no-hooks`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-hooks.md)|👻|👻|👻|👻|
|[`jest/no-identical-title`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-identical-title.md)|🚨|👻|👻|👻|
|[`jest/no-if`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-if.md)|👻|👻|👻|👻|
|[`jest/no-interpolation-in-snapshots`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-interpolation-in-snapshots.md)|🚨|👻|👻|👻|
|[`jest/no-jasmine-globals`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jasmine-globals.md)|🚨|👻|👻|👻|
|[`jest/no-jest-import`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jest-import.md)|👻|👻|👻|👻|
|[`jest/no-large-snapshots`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-large-snapshots.md)|👻|👻|👻|👻|
|[`jest/no-mocks-import`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-mocks-import.md)|👻|👻|👻|👻|
|[`jest/no-restricted-matchers`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-restricted-matchers.md)|👻|👻|👻|👻|
|[`jest/no-standalone-expect`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-standalone-expect.md)|👻|👻|👻|👻|
|[`jest/no-test-prefixes`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-prefixes.md)|👻|👻|👻|👻|
|[`jest/no-test-return-statement`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-return-statement.md)|👻|👻|👻|👻|
|[`jest/prefer-called-with`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-called-with.md)|👻|👻|👻|👻|
|[`jest/prefer-expect-assertions`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-expect-assertions.md)|🚨|👻|👻|👻|
|[`jest/prefer-expect-resolves`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-expect-resolves.md)|🚨|👻|👻|👻|
|[`jest/prefer-hooks-on-top`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-hooks-on-top.md)|👻|👻|👻|👻|
|[`jest/prefer-lowercase-title`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-lowercase-title.md)|❌|👻|👻|👻|
|[`jest/prefer-spy-on`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-spy-on.md)|🚨|👻|👻|👻|
|[`jest/prefer-strict-equal`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-strict-equal.md)|👻|👻|👻|👻|
|[`jest/prefer-to-be`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be.md)|🚨|👻|👻|👻|
|[`jest/prefer-to-contain`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-contain.md)|🚨|👻|👻|👻|
|[`jest/prefer-to-have-length`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-have-length.md)|👻|👻|👻|👻|
|[`jest/prefer-todo`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-todo.md)|👻|👻|👻|👻|
|[`jest/require-hook`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-hook.md)|❌|👻|👻|👻|
|[`jest/require-to-throw-message`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-to-throw-message.md)|👻|👻|👻|👻|
|[`jest/require-top-level-describe`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-top-level-describe.md)|👻|👻|👻|👻|
|[`jest/unbound-method`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/unbound-method.md)|👻|👻|👻|👻|
|[`jest/valid-describe-callback`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-describe-callback.md)|🚨|👻|👻|👻|
|[`jest/valid-expect`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect.md)|🚨|👻|👻|👻|
|[`jest/valid-expect-in-promise`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect-in-promise.md)|🚨|👻|👻|👻|
|[`jest/valid-title`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-title.md)|🚨|👻|👻|👻|
|[`jsdoc/check-access`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-access)|👻|👻|👻|👻|
|[`jsdoc/check-alignment`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-alignment)|👻|👻|👻|👻|
|[`jsdoc/check-examples`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)|❌|👻|👻|👻|
|[`jsdoc/check-indentation`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-indentation)|👻|👻|👻|👻|
|[`jsdoc/check-line-alignment`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-line-alignment)|👻|👻|👻|👻|
|[`jsdoc/check-param-names`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names)|⚠️|👻|👻|👻|
|[`jsdoc/check-property-names`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-property-names)|👻|👻|👻|👻|
|[`jsdoc/check-syntax`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-syntax)|👻|👻|👻|👻|
|[`jsdoc/check-tag-names`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-tag-names)|⚠️|👻|👻|👻|
|[`jsdoc/check-types`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-types)|⚠️|👻|👻|👻|
|[`jsdoc/check-values`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-values)|👻|👻|👻|👻|
|[`jsdoc/empty-tags`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-empty-tags)|👻|👻|👻|👻|
|[`jsdoc/implements-on-classes`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-implements-on-classes)|👻|👻|👻|👻|
|[`jsdoc/match-description`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-match-description)|👻|👻|👻|👻|
|[`jsdoc/match-name`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-match-name)|👻|👻|👻|👻|
|[`jsdoc/multiline-blocks`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-multiline-blocks)|👻|👻|👻|👻|
|[`jsdoc/newline-after-description`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-newline-after-description)|⚠️|👻|👻|👻|
|[`jsdoc/no-bad-blocks`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-bad-blocks)|🚨|👻|👻|👻|
|[`jsdoc/no-defaults`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-defaults)|👻|👻|👻|👻|
|[`jsdoc/no-missing-syntax`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-missing-syntax)|👻|👻|👻|👻|
|[`jsdoc/no-multi-asterisks`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-multi-asterisks)|👻|👻|👻|👻|
|[`jsdoc/no-restricted-syntax`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-restricted-syntax)|👻|👻|👻|👻|
|[`jsdoc/no-types`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-types)|👻|👻|👻|👻|
|[`jsdoc/no-undefined-types`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-undefined-types)|👻|👻|👻|👻|
|[`jsdoc/require-asterisk-prefix`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-asterisk-prefix)|🚨|👻|👻|👻|
|[`jsdoc/require-description`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description)|❌|👻|👻|👻|
|[`jsdoc/require-description-complete-sentence`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description-complete-sentence)|❌|👻|👻|👻|
|[`jsdoc/require-example`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-example)|👻|👻|👻|👻|
|[`jsdoc/require-file-overview`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-file-overview)|👻|👻|👻|👻|
|[`jsdoc/require-hyphen-before-param-description`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-hyphen-before-param-description)|❌|👻|👻|👻|
|[`jsdoc/require-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-jsdoc)|👻|👻|👻|👻|
|[`jsdoc/require-param`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)|❌|👻|👻|👻|
|[`jsdoc/require-param-description`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-description)|❌|👻|👻|👻|
|[`jsdoc/require-param-name`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-name)|🚨|👻|👻|👻|
|[`jsdoc/require-param-type`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-type)|❌|👻|👻|👻|
|[`jsdoc/require-property`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property)|👻|👻|👻|👻|
|[`jsdoc/require-property-description`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-description)|👻|👻|👻|👻|
|[`jsdoc/require-property-name`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-name)|👻|👻|👻|👻|
|[`jsdoc/require-property-type`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-type)|👻|👻|👻|👻|
|[`jsdoc/require-returns`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)|👻|👻|👻|👻|
|[`jsdoc/require-returns-check`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-check)|👻|👻|👻|👻|
|[`jsdoc/require-returns-description`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-description)|❌|👻|👻|👻|
|[`jsdoc/require-returns-type`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-type)|❌|👻|👻|👻|
|[`jsdoc/require-throws`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-throws)|👻|👻|👻|👻|
|[`jsdoc/require-yields`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields)|👻|👻|👻|👻|
|[`jsdoc/require-yields-check`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields-check)|👻|👻|👻|👻|
|[`jsdoc/tag-lines`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-tag-lines)|🚨|👻|👻|👻|
|[`jsdoc/valid-types`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-valid-types)|👻|👻|👻|👻|
|[`jsx-a11y/accessible-emoji`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md)|👻|❌|👻|👻|
|[`jsx-a11y/alt-text`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md)|👻|🚨|👻|👻|
|[`jsx-a11y/anchor-has-content`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md)|👻|🚨|👻|👻|
|[`jsx-a11y/anchor-is-valid`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md)|👻|🚨|👻|👻|
|[`jsx-a11y/aria-activedescendant-has-tabindex`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md)|👻|🚨|👻|👻|
|[`jsx-a11y/aria-props`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md)|👻|🚨|👻|👻|
|[`jsx-a11y/aria-proptypes`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md)|👻|🚨|👻|👻|
|[`jsx-a11y/aria-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md)|👻|🚨|👻|👻|
|[`jsx-a11y/aria-unsupported-elements`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md)|👻|🚨|👻|👻|
|[`jsx-a11y/autocomplete-valid`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/autocomplete-valid.md)|👻|❌|👻|👻|
|[`jsx-a11y/click-events-have-key-events`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md)|👻|🚨|👻|👻|
|[`jsx-a11y/control-has-associated-label`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md)|👻|🚨|👻|👻|
|[`jsx-a11y/heading-has-content`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md)|👻|🚨|👻|👻|
|[`jsx-a11y/html-has-lang`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md)|👻|🚨|👻|👻|
|[`jsx-a11y/iframe-has-title`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md)|👻|🚨|👻|👻|
|[`jsx-a11y/img-redundant-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md)|👻|🚨|👻|👻|
|[`jsx-a11y/interactive-supports-focus`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md)|👻|🚨|👻|👻|
|[`jsx-a11y/label-has-associated-control`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md)|👻|🚨|👻|👻|
|[`jsx-a11y/label-has-for`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md)|👻|❌|👻|👻|
|[`jsx-a11y/lang`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md)|👻|🚨|👻|👻|
|[`jsx-a11y/media-has-caption`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md)|👻|🚨|👻|👻|
|[`jsx-a11y/mouse-events-have-key-events`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md)|👻|🚨|👻|👻|
|[`jsx-a11y/no-access-key`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md)|👻|🚨|👻|👻|
|[`jsx-a11y/no-autofocus`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md)|👻|🚨|👻|👻|
|[`jsx-a11y/no-distracting-elements`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md)|👻|🚨|👻|👻|
|[`jsx-a11y/no-interactive-element-to-noninteractive-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md)|👻|🚨|👻|👻|
|[`jsx-a11y/no-noninteractive-element-interactions`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md)|👻|🚨|👻|👻|
|[`jsx-a11y/no-noninteractive-element-to-interactive-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md)|👻|🚨|👻|👻|
|[`jsx-a11y/no-noninteractive-tabindex`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md)|👻|🚨|👻|👻|
|[`jsx-a11y/no-onchange`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md)|👻|❌|👻|👻|
|[`jsx-a11y/no-redundant-roles`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md)|👻|🚨|👻|👻|
|[`jsx-a11y/no-static-element-interactions`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md)|👻|🚨|👻|👻|
|[`jsx-a11y/role-has-required-aria-props`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md)|👻|🚨|👻|👻|
|[`jsx-a11y/role-supports-aria-props`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md)|👻|🚨|👻|👻|
|[`jsx-a11y/scope`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md)|👻|🚨|👻|👻|
|[`jsx-a11y/tabindex-no-positive`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md)|👻|🚨|👻|👻|
|[`lodash/callback-binding`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/callback-binding.md)|⚠️|👻|👻|👻|
|[`lodash/chain-style`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/chain-style.md)|⚠️|👻|👻|👻|
|[`lodash/chaining`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/chaining.md)|⚠️|👻|👻|👻|
|[`lodash/collection-method-value`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/collection-method-value.md)|⚠️|👻|👻|👻|
|[`lodash/collection-ordering`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/collection-ordering.md)|🚨|👻|👻|👻|
|[`lodash/collection-return`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/collection-return.md)|⚠️|👻|👻|👻|
|[`lodash/consistent-compose`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/consistent-compose.md)|⚠️|👻|👻|👻|
|[`lodash/identity-shorthand`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/identity-shorthand.md)|⚠️|👻|👻|👻|
|[`lodash/import-scope`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/import-scope.md)|❌|👻|👻|👻|
|[`lodash/matches-prop-shorthand`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/matches-prop-shorthand.md)|⚠️|👻|👻|👻|
|[`lodash/matches-shorthand`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/matches-shorthand.md)|⚠️|👻|👻|👻|
|[`lodash/no-commit`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/no-commit.md)|⚠️|👻|👻|👻|
|[`lodash/no-double-unwrap`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/no-double-unwrap.md)|⚠️|👻|👻|👻|
|[`lodash/no-extra-args`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/no-extra-args.md)|⚠️|👻|👻|👻|
|[`lodash/no-unbound-this`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/no-unbound-this.md)|👻|👻|👻|👻|
|[`lodash/path-style`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/path-style.md)|❌|👻|👻|👻|
|[`lodash/prefer-compact`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-compact.md)|⚠️|👻|👻|👻|
|[`lodash/prefer-constant`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-constant.md)|❌|👻|👻|👻|
|[`lodash/prefer-filter`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-filter.md)|⚠️|👻|👻|👻|
|[`lodash/prefer-find`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-find.md)|🚨|👻|👻|👻|
|[`lodash/prefer-flat-map`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-flat-map.md)|👻|👻|👻|👻|
|[`lodash/prefer-get`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-get.md)|⚠️|👻|👻|👻|
|[`lodash/prefer-immutable-method`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-immutable-method.md)|🚨|👻|👻|👻|
|[`lodash/prefer-includes`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-includes.md)|⚠️|👻|👻|👻|
|[`lodash/prefer-invoke-map`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-invoke-map.md)|❌|👻|👻|👻|
|[`lodash/prefer-is-nil`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-is-nil.md)|⚠️|👻|👻|👻|
|[`lodash/prefer-lodash-chain`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-lodash-chain.md)|⚠️|👻|👻|👻|
|[`lodash/prefer-lodash-method`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-lodash-method.md)|❌|👻|👻|👻|
|[`lodash/prefer-lodash-typecheck`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-lodash-typecheck.md)|⚠️|👻|👻|👻|
|[`lodash/prefer-map`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-map.md)|⚠️|👻|👻|👻|
|[`lodash/prefer-matches`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-matches.md)|⚠️|👻|👻|👻|
|[`lodash/prefer-noop`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-noop.md)|❌|👻|👻|👻|
|[`lodash/prefer-over-quantifier`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-over-quantifier.md)|⚠️|👻|👻|👻|
|[`lodash/prefer-reject`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-reject.md)|⚠️|👻|👻|👻|
|[`lodash/prefer-some`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-some.md)|👻|👻|👻|👻|
|[`lodash/prefer-startswith`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-startswith.md)|❌|👻|👻|👻|
|[`lodash/prefer-thru`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-thru.md)|⚠️|👻|👻|👻|
|[`lodash/prefer-times`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-times.md)|⚠️|👻|👻|👻|
|[`lodash/prefer-wrapper-method`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-wrapper-method.md)|⚠️|👻|👻|👻|
|[`lodash/preferred-alias`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/preferred-alias.md)|⚠️|👻|👻|👻|
|[`lodash/prop-shorthand`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prop-shorthand.md)|⚠️|👻|👻|👻|
|[`lodash/unwrap`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/unwrap.md)|⚠️|👻|👻|👻|
|[`mocha/handle-done-callback`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/handle-done-callback.md)|👻|👻|👻|👻|
|[`mocha/max-top-level-suites`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/max-top-level-suites.md)|🚨|👻|👻|👻|
|[`mocha/no-async-describe`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-async-describe.md)|👻|👻|👻|👻|
|[`mocha/no-exclusive-tests`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-exclusive-tests.md)|🚨|👻|👻|👻|
|[`mocha/no-exports`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-exports.md)|🚨|👻|👻|👻|
|[`mocha/no-global-tests`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-global-tests.md)|👻|👻|👻|👻|
|[`mocha/no-hooks`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-hooks.md)|👻|👻|👻|👻|
|[`mocha/no-hooks-for-single-case`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-hooks-for-single-case.md)|⚠️|👻|👻|👻|
|[`mocha/no-identical-title`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-identical-title.md)|🚨|👻|👻|👻|
|[`mocha/no-mocha-arrows`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-mocha-arrows.md)|👻|👻|👻|👻|
|[`mocha/no-nested-tests`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-nested-tests.md)|🚨|👻|👻|👻|
|[`mocha/no-pending-tests`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-pending-tests.md)|👻|👻|👻|👻|
|[`mocha/no-return-and-callback`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-return-and-callback.md)|🚨|👻|👻|👻|
|[`mocha/no-return-from-async`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-return-from-async.md)|🚨|👻|👻|👻|
|[`mocha/no-setup-in-describe`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-setup-in-describe.md)|🚨|👻|👻|👻|
|[`mocha/no-sibling-hooks`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-sibling-hooks.md)|👻|👻|👻|👻|
|[`mocha/no-skipped-tests`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-skipped-tests.md)|👻|👻|👻|👻|
|[`mocha/no-synchronous-tests`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-synchronous-tests.md)|👻|👻|👻|👻|
|[`mocha/no-top-level-hooks`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-top-level-hooks.md)|🚨|👻|👻|👻|
|[`mocha/prefer-arrow-callback`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/prefer-arrow-callback.md)|👻|👻|👻|👻|
|[`mocha/valid-suite-description`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/valid-suite-description.md)|👻|👻|👻|👻|
|[`mocha/valid-test-description`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/valid-test-description.md)|👻|👻|👻|👻|
|[`node/callback-return`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/callback-return.md)|🚨|👻|👻|👻|
|[`node/exports-style`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/exports-style.md)|🚨|👻|👻|👻|
|[`node/file-extension-in-import`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/file-extension-in-import.md)|❌|👻|👻|👻|
|[`node/global-require`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/global-require.md)|❌|👻|👻|👻|
|[`node/handle-callback-err`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/handle-callback-err.md)|🚨|👻|👻|🚨|
|[`node/no-callback-literal`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-callback-literal.md)|🚨|👻|👻|🚨|
|[`node/no-deprecated-api`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md)|🚨|👻|👻|🚨|
|[`node/no-exports-assign`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-exports-assign.md)|🚨|👻|👻|🚨|
|[`node/no-extraneous-import`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md)|🚨|👻|👻|👻|
|[`node/no-extraneous-require`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md)|🚨|👻|👻|👻|
|[`node/no-hide-core-modules`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-hide-core-modules.md)|👻|👻|👻|👻|
|[`node/no-missing-import`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md)|❌|👻|👻|👻|
|[`node/no-missing-require`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md)|❌|👻|👻|👻|
|[`node/no-mixed-requires`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-mixed-requires.md)|❌|👻|👻|👻|
|[`node/no-new-require`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-new-require.md)|🚨|👻|👻|🚨|
|[`node/no-path-concat`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-path-concat.md)|🚨|👻|👻|🚨|
|[`node/no-process-env`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-env.md)|🚨|👻|👻|👻|
|[`node/no-process-exit`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-exit.md)|🚨|👻|👻|👻|
|[`node/no-restricted-import`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-restricted-import.md)|❌|👻|👻|👻|
|[`node/no-restricted-require`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-restricted-require.md)|❌|👻|👻|👻|
|[`node/no-sync`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-sync.md)|🚨|👻|👻|👻|
|[`node/no-unpublished-bin`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin.md)|🚨|👻|👻|👻|
|[`node/no-unpublished-import`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md)|🚨|👻|👻|👻|
|[`node/no-unpublished-require`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md)|🚨|👻|👻|👻|
|[`node/no-unsupported-features`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features.md)|👻|👻|👻|👻|
|[`node/no-unsupported-features/es-builtins`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-builtins.md)|❌|👻|👻|👻|
|[`node/no-unsupported-features/es-syntax`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md)|❌|👻|👻|👻|
|[`node/no-unsupported-features/node-builtins`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/node-builtins.md)|❌|👻|👻|👻|
|[`node/prefer-global/buffer`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/buffer.md)|🚨|👻|👻|👻|
|[`node/prefer-global/console`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/console.md)|🚨|👻|👻|👻|
|[`node/prefer-global/process`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/process.md)|🚨|👻|👻|👻|
|[`node/prefer-global/text-decoder`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-decoder.md)|🚨|👻|👻|👻|
|[`node/prefer-global/text-encoder`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-encoder.md)|🚨|👻|👻|👻|
|[`node/prefer-global/url`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url.md)|🚨|👻|👻|👻|
|[`node/prefer-global/url-search-params`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url-search-params.md)|🚨|👻|👻|👻|
|[`node/prefer-promises/dns`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/dns.md)|🚨|👻|👻|👻|
|[`node/prefer-promises/fs`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/fs.md)|🚨|👻|👻|👻|
|[`node/process-exit-as-throw`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md)|🚨|👻|👻|🚨|
|[`node/shebang`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md)|🚨|👻|👻|👻|
|[`promise/always-return`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/always-return.md)|⚠️|👻|👻|👻|
|[`promise/avoid-new`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/avoid-new.md)|❌|👻|👻|👻|
|[`promise/catch-or-return`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/catch-or-return.md)|🚨|👻|👻|👻|
|[`promise/no-callback-in-promise`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-callback-in-promise.md)|❌|👻|👻|👻|
|[`promise/no-native`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-native.md)|❌|👻|👻|👻|
|[`promise/no-nesting`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-nesting.md)|❌|👻|👻|👻|
|[`promise/no-new-statics`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-new-statics.md)|🚨|👻|👻|👻|
|[`promise/no-promise-in-callback`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-promise-in-callback.md)|❌|👻|👻|👻|
|[`promise/no-return-in-finally`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-in-finally.md)|🚨|👻|👻|👻|
|[`promise/no-return-wrap`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-wrap.md)|🚨|👻|👻|👻|
|[`promise/param-names`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/param-names.md)|🚨|👻|👻|🚨|
|[`promise/prefer-await-to-callbacks`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/prefer-await-to-callbacks.md)|⚠️|👻|👻|👻|
|[`promise/prefer-await-to-then`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/prefer-await-to-then.md)|⚠️|👻|👻|👻|
|[`promise/valid-params`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/valid-params.md)|🚨|👻|👻|👻|
|`react-hooks/exhaustive-deps`|🚨|👻|👻|👻|
|`react-hooks/rules-of-hooks`|🚨|👻|👻|👻|
|[`react/boolean-prop-naming`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md)|❌|❌|👻|👻|
|[`react/button-has-type`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md)|🚨|🚨|👻|👻|
|[`react/default-props-match-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md)|🚨|🚨|👻|👻|
|[`react/destructuring-assignment`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md)|❌|🚨|👻|👻|
|[`react/display-name`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md)|❌|❌|👻|👻|
|[`react/forbid-component-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md)|🚨|❌|👻|👻|
|[`react/forbid-dom-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md)|❌|❌|👻|👻|
|[`react/forbid-elements`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md)|❌|❌|👻|👻|
|[`react/forbid-foreign-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md)|❌|⚠️|👻|👻|
|[`react/forbid-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md)|❌|🚨|👻|👻|
|[`react/function-component-definition`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md)|👻|❌|👻|👻|
|[`react/jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)|🚨|🚨|👻|👻|
|[`react/jsx-child-element-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md)|❌|❌|👻|👻|
|[`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)|❌|🚨|👻|👻|
|[`react/jsx-closing-tag-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md)|❌|🚨|👻|👻|
|[`react/jsx-curly-brace-presence`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md)|❌|🚨|👻|👻|
|[`react/jsx-curly-newline`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md)|🚨|🚨|👻|👻|
|[`react/jsx-curly-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)|🚨|🚨|👻|👻|
|[`react/jsx-equals-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md)|🚨|🚨|👻|👻|
|[`react/jsx-filename-extension`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)|❌|🚨|👻|👻|
|[`react/jsx-first-prop-new-line`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md)|🚨|🚨|👻|👻|
|[`react/jsx-fragments`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md)|🚨|🚨|👻|👻|
|[`react/jsx-handler-names`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md)|🚨|❌|👻|👻|
|[`react/jsx-indent`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md)|🚨|🚨|👻|👻|
|[`react/jsx-indent-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md)|🚨|🚨|👻|👻|
|[`react/jsx-key`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md)|🚨|❌|👻|👻|
|[`react/jsx-max-depth`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md)|👻|❌|👻|👻|
|[`react/jsx-max-props-per-line`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md)|🚨|🚨|👻|👻|
|[`react/jsx-newline`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md)|👻|👻|👻|👻|
|[`react/jsx-no-bind`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)|🚨|🚨|👻|👻|
|[`react/jsx-no-comment-textnodes`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md)|🚨|🚨|👻|👻|
|[`react/jsx-no-constructed-context-values`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md)|👻|👻|👻|👻|
|[`react/jsx-no-duplicate-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md)|🚨|🚨|👻|👻|
|[`react/jsx-no-literals`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md)|❌|❌|👻|👻|
|[`react/jsx-no-script-url`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md)|👻|❌|👻|👻|
|[`react/jsx-no-target-blank`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md)|🚨|🚨|👻|👻|
|[`react/jsx-no-undef`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md)|🚨|🚨|👻|👻|
|[`react/jsx-no-useless-fragment`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md)|👻|❌|👻|👻|
|[`react/jsx-one-expression-per-line`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md)|❌|🚨|👻|👻|
|[`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)|🚨|🚨|👻|👻|
|[`react/jsx-props-no-multi-spaces`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md)|🚨|🚨|👻|👻|
|[`react/jsx-props-no-spreading`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md)|❌|🚨|👻|👻|
|[`react/jsx-sort-default-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md)|🚨|❌|👻|👻|
|[`react/jsx-sort-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md)|🚨|❌|👻|👻|
|[`react/jsx-space-before-closing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md)|👻|❌|👻|👻|
|[`react/jsx-tag-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md)|🚨|🚨|👻|👻|
|[`react/jsx-uses-react`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md)|⚠️|🚨|👻|👻|
|[`react/jsx-uses-vars`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md)|⚠️|🚨|👻|👻|
|[`react/jsx-wrap-multilines`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md)|❌|🚨|👻|👻|
|[`react/no-access-state-in-setstate`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md)|🚨|🚨|👻|👻|
|[`react/no-adjacent-inline-elements`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md)|👻|❌|👻|👻|
|[`react/no-array-index-key`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md)|🚨|🚨|👻|👻|
|[`react/no-children-prop`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md)|🚨|🚨|👻|👻|
|[`react/no-danger`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md)|🚨|⚠️|👻|👻|
|[`react/no-danger-with-children`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md)|🚨|🚨|👻|👻|
|[`react/no-deprecated`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md)|🚨|🚨|👻|👻|
|[`react/no-did-mount-set-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md)|🚨|❌|👻|👻|
|[`react/no-did-update-set-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md)|🚨|🚨|👻|👻|
|[`react/no-direct-mutation-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md)|🚨|❌|👻|👻|
|[`react/no-find-dom-node`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md)|🚨|🚨|👻|👻|
|[`react/no-is-mounted`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md)|🚨|🚨|👻|👻|
|[`react/no-multi-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md)|❌|❌|👻|👻|
|[`react/no-namespace`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-namespace.md)|🚨|👻|👻|👻|
|[`react/no-redundant-should-component-update`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md)|🚨|🚨|👻|👻|
|[`react/no-render-return-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md)|👻|🚨|👻|👻|
|[`react/no-set-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md)|🚨|❌|👻|👻|
|[`react/no-string-refs`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)|🚨|🚨|👻|👻|
|[`react/no-this-in-sfc`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md)|🚨|🚨|👻|👻|
|[`react/no-typos`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md)|🚨|🚨|👻|👻|
|[`react/no-unescaped-entities`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md)|🚨|🚨|👻|👻|
|[`react/no-unknown-property`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md)|🚨|🚨|👻|👻|
|[`react/no-unsafe`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md)|🚨|❌|👻|👻|
|[`react/no-unstable-nested-components`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md)|👻|👻|👻|👻|
|[`react/no-unused-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md)|🚨|🚨|👻|👻|
|[`react/no-unused-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md)|🚨|🚨|👻|👻|
|[`react/no-will-update-set-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md)|🚨|🚨|👻|👻|
|[`react/prefer-es6-class`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md)|🚨|🚨|👻|👻|
|[`react/prefer-exact-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md)|👻|👻|👻|👻|
|[`react/prefer-read-only-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md)|⚠️|❌|👻|👻|
|[`react/prefer-stateless-function`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)|🚨|🚨|👻|👻|
|[`react/prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md)|🚨|🚨|👻|👻|
|[`react/react-in-jsx-scope`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md)|❌|🚨|👻|👻|
|[`react/require-default-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md)|❌|🚨|👻|👻|
|[`react/require-optimization`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md)|👻|❌|👻|👻|
|[`react/require-render-return`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md)|🚨|🚨|👻|👻|
|[`react/self-closing-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)|🚨|🚨|👻|👻|
|[`react/sort-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)|🚨|🚨|👻|👻|
|[`react/sort-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md)|🚨|❌|👻|👻|
|[`react/state-in-constructor`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md)|🚨|🚨|👻|👻|
|[`react/static-property-placement`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md)|🚨|🚨|👻|👻|
|[`react/style-prop-object`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md)|🚨|🚨|👻|👻|
|[`react/void-dom-elements-no-children`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md)|🚨|🚨|👻|👻|
|`typescript-sort-keys/interface`|🚨|👻|👻|👻|
|`typescript-sort-keys/string-enum`|🚨|👻|👻|👻|
|[`unicorn/better-regex`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/better-regex.md)|🚨|👻|👻|👻|
|[`unicorn/catch-error-name`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/catch-error-name.md)|🚨|👻|👻|👻|
|[`unicorn/consistent-destructuring`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/consistent-destructuring.md)|👻|👻|👻|👻|
|[`unicorn/consistent-function-scoping`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/consistent-function-scoping.md)|❌|👻|👻|👻|
|[`unicorn/custom-error-definition`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/custom-error-definition.md)|❌|👻|👻|👻|
|[`unicorn/empty-brace-spaces`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/empty-brace-spaces.md)|🚨|👻|👻|👻|
|[`unicorn/error-message`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/error-message.md)|🚨|👻|👻|👻|
|[`unicorn/escape-case`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/escape-case.md)|👻|👻|👻|👻|
|[`unicorn/expiring-todo-comments`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/expiring-todo-comments.md)|🚨|👻|👻|👻|
|[`unicorn/explicit-length-check`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/explicit-length-check.md)|❌|👻|👻|👻|
|[`unicorn/filename-case`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/filename-case.md)|❌|👻|👻|👻|
|[`unicorn/import-index`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/import-index.md)|🚨|👻|👻|👻|
|[`unicorn/import-style`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/import-style.md)|👻|👻|👻|👻|
|[`unicorn/new-for-builtins`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/new-for-builtins.md)|🚨|👻|👻|👻|
|[`unicorn/no-abusive-eslint-disable`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-abusive-eslint-disable.md)|🚨|👻|👻|👻|
|[`unicorn/no-array-callback-reference`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-array-callback-reference.md)|👻|👻|👻|👻|
|[`unicorn/no-array-for-each`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-array-for-each.md)|👻|👻|👻|👻|
|[`unicorn/no-array-instanceof`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-array-instanceof.md)|🚨|👻|👻|👻|
|[`unicorn/no-array-method-this-argument`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-array-method-this-argument.md)|🚨|👻|👻|👻|
|[`unicorn/no-array-push-push`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-array-push-push.md)|👻|👻|👻|👻|
|[`unicorn/no-array-reduce`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-array-reduce.md)|👻|👻|👻|👻|
|[`unicorn/no-console-spaces`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-console-spaces.md)|❌|👻|👻|👻|
|[`unicorn/no-document-cookie`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-document-cookie.md)|🚨|👻|👻|👻|
|[`unicorn/no-fn-reference-in-iterator`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-fn-reference-in-iterator.md)|❌|👻|👻|👻|
|[`unicorn/no-for-loop`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-for-loop.md)|🚨|👻|👻|👻|
|[`unicorn/no-hex-escape`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-hex-escape.md)|🚨|👻|👻|👻|
|[`unicorn/no-instanceof-array`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-instanceof-array.md)|👻|👻|👻|👻|
|[`unicorn/no-invalid-remove-event-listener`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-invalid-remove-event-listener.md)|🚨|👻|👻|👻|
|[`unicorn/no-keyword-prefix`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-keyword-prefix.md)|👻|👻|👻|👻|
|[`unicorn/no-lonely-if`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-lonely-if.md)|🚨|👻|👻|👻|
|[`unicorn/no-nested-ternary`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-nested-ternary.md)|🚨|👻|👻|👻|
|[`unicorn/no-new-array`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-new-array.md)|👻|👻|👻|👻|
|[`unicorn/no-new-buffer`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-new-buffer.md)|🚨|👻|👻|👻|
|[`unicorn/no-null`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-null.md)|❌|👻|👻|👻|
|[`unicorn/no-object-as-default-parameter`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-object-as-default-parameter.md)|🚨|👻|👻|👻|
|[`unicorn/no-process-exit`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-process-exit.md)|❌|👻|👻|👻|
|[`unicorn/no-reduce`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-reduce.md)|🚨|👻|👻|👻|
|[`unicorn/no-static-only-class`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-static-only-class.md)|🚨|👻|👻|👻|
|[`unicorn/no-this-assignment`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-this-assignment.md)|👻|👻|👻|👻|
|[`unicorn/no-unreadable-array-destructuring`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unreadable-array-destructuring.md)|❌|👻|👻|👻|
|[`unicorn/no-unsafe-regex`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unsafe-regex.md)|👻|👻|👻|👻|
|[`unicorn/no-unused-properties`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unused-properties.md)|⚠️|👻|👻|👻|
|[`unicorn/no-useless-fallback-in-spread`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-useless-fallback-in-spread.md)|🚨|👻|👻|👻|
|[`unicorn/no-useless-length-check`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-useless-length-check.md)|🚨|👻|👻|👻|
|[`unicorn/no-useless-spread`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-useless-spread.md)|🚨|👻|👻|👻|
|[`unicorn/no-useless-undefined`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-useless-undefined.md)|❌|👻|👻|👻|
|[`unicorn/no-zero-fractions`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-zero-fractions.md)|🚨|👻|👻|👻|
|[`unicorn/number-literal-case`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/number-literal-case.md)|🚨|👻|👻|👻|
|[`unicorn/numeric-separators-style`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/numeric-separators-style.md)|🚨|👻|👻|👻|
|[`unicorn/prefer-add-event-listener`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-add-event-listener.md)|❌|👻|👻|👻|
|[`unicorn/prefer-array-find`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-array-find.md)|🚨|👻|👻|👻|
|[`unicorn/prefer-array-flat`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-array-flat.md)|🚨|👻|👻|👻|
|[`unicorn/prefer-array-flat-map`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-array-flat-map.md)|🚨|👻|👻|👻|
|[`unicorn/prefer-array-index-of`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-array-index-of.md)|👻|👻|👻|👻|
|[`unicorn/prefer-array-some`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-array-some.md)|👻|👻|👻|👻|
|[`unicorn/prefer-at`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-at.md)|❌|👻|👻|👻|
|[`unicorn/prefer-dataset`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-dataset.md)|🚨|👻|👻|👻|
|[`unicorn/prefer-date-now`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-date-now.md)|🚨|👻|👻|👻|
|[`unicorn/prefer-default-parameters`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-default-parameters.md)|👻|👻|👻|👻|
|[`unicorn/prefer-dom-node-append`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-dom-node-append.md)|👻|👻|👻|👻|
|[`unicorn/prefer-dom-node-dataset`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-dom-node-dataset.md)|👻|👻|👻|👻|
|[`unicorn/prefer-dom-node-remove`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-dom-node-remove.md)|👻|👻|👻|👻|
|[`unicorn/prefer-dom-node-text-content`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-dom-node-text-content.md)|👻|👻|👻|👻|
|[`unicorn/prefer-event-key`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-event-key.md)|🚨|👻|👻|👻|
|[`unicorn/prefer-exponentiation-operator`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-exponentiation-operator.md)|👻|👻|👻|👻|
|[`unicorn/prefer-flat-map`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-flat-map.md)|🚨|👻|👻|👻|
|[`unicorn/prefer-includes`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-includes.md)|🚨|👻|👻|👻|
|[`unicorn/prefer-keyboard-event-key`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-keyboard-event-key.md)|👻|👻|👻|👻|
|[`unicorn/prefer-math-trunc`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-math-trunc.md)|🚨|👻|👻|👻|
|[`unicorn/prefer-modern-dom-apis`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-modern-dom-apis.md)|🚨|👻|👻|👻|
|[`unicorn/prefer-module`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-module.md)|👻|👻|👻|👻|
|[`unicorn/prefer-negative-index`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-negative-index.md)|❌|👻|👻|👻|
|[`unicorn/prefer-node-append`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-node-append.md)|🚨|👻|👻|👻|
|[`unicorn/prefer-node-protocol`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-node-protocol.md)|🚨|👻|👻|👻|
|[`unicorn/prefer-node-remove`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-node-remove.md)|🚨|👻|👻|👻|
|[`unicorn/prefer-number-properties`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-number-properties.md)|🚨|👻|👻|👻|
|[`unicorn/prefer-object-from-entries`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-object-from-entries.md)|🚨|👻|👻|👻|
|[`unicorn/prefer-object-has-own`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-object-has-own.md)|❌|👻|👻|👻|
|[`unicorn/prefer-optional-catch-binding`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-optional-catch-binding.md)|🚨|👻|👻|👻|
|[`unicorn/prefer-prototype-methods`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-prototype-methods.md)|❌|👻|👻|👻|
|[`unicorn/prefer-query-selector`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-query-selector.md)|🚨|👻|👻|👻|
|[`unicorn/prefer-reflect-apply`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-reflect-apply.md)|🚨|👻|👻|👻|
|[`unicorn/prefer-regexp-test`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-regexp-test.md)|👻|👻|👻|👻|
|[`unicorn/prefer-replace-all`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-replace-all.md)|❌|👻|👻|👻|
|[`unicorn/prefer-set-has`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-set-has.md)|❌|👻|👻|👻|
|[`unicorn/prefer-spread`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-spread.md)|❌|👻|👻|👻|
|[`unicorn/prefer-starts-ends-with`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-starts-ends-with.md)|🚨|👻|👻|👻|
|[`unicorn/prefer-string-replace-all`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-string-replace-all.md)|👻|👻|👻|👻|
|[`unicorn/prefer-string-slice`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-string-slice.md)|🚨|👻|👻|👻|
|[`unicorn/prefer-string-starts-ends-with`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-string-starts-ends-with.md)|👻|👻|👻|👻|
|[`unicorn/prefer-string-trim-start-end`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-string-trim-start-end.md)|👻|👻|👻|👻|
|[`unicorn/prefer-switch`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-switch.md)|❌|👻|👻|👻|
|[`unicorn/prefer-ternary`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-ternary.md)|❌|👻|👻|👻|
|[`unicorn/prefer-text-content`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-text-content.md)|🚨|👻|👻|👻|
|[`unicorn/prefer-top-level-await`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-top-level-await.md)|❌|👻|👻|👻|
|[`unicorn/prefer-trim-start-end`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-trim-start-end.md)|🚨|👻|👻|👻|
|[`unicorn/prefer-type-error`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-type-error.md)|🚨|👻|👻|👻|
|[`unicorn/prevent-abbreviations`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prevent-abbreviations.md)|🚨|👻|👻|👻|
|[`unicorn/regex-shorthand`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/regex-shorthand.md)|👻|👻|👻|👻|
|[`unicorn/require-array-join-separator`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/require-array-join-separator.md)|🚨|👻|👻|👻|
|[`unicorn/require-number-to-fixed-digits-argument`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/require-number-to-fixed-digits-argument.md)|🚨|👻|👻|👻|
|[`unicorn/require-post-message-target-origin`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/require-post-message-target-origin.md)|🚨|👻|👻|👻|
|[`unicorn/string-content`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/string-content.md)|❌|👻|👻|👻|
|[`unicorn/template-indent`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/template-indent.md)|👻|👻|👻|👻|
|[`unicorn/throw-new-error`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/throw-new-error.md)|🚨|👻|👻|👻|
