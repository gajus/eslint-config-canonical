# Canonical ESLint Config

[![Travis build status](http://img.shields.io/travis/gajus/eslint-config-canonical/master.svg?style=flat-square)](https://travis-ci.org/gajus/eslint-config-canonical)
[![NPM version](http://img.shields.io/npm/v/eslint-config-canonical.svg?style=flat-square)](https://www.npmjs.org/package/eslint-config-canonical)

Canonical is the most comprehensive code style guide. It consists of more than 800 rules, some of which are custom written for Canonical (e.g. [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc), [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype)).

The goal of the Canonical style guide is to reduce noise in code version control and promote use of the latest ES features.

## Usage

This package includes the following configurations:

* [`canonical`](./configurations/eslintrc.json) – The Canonical code style guide.
* [`canonical/ava`](./configurations/ava.json) – To be used in addition to "canonical" configuration by projects that use [AVA](https://ava.li/).
* [`canonical/flowtype`](./configurations/flowtype.json) – To be used in addition to "canonical" configuration by projects that use [Flowtype](https://flowtype.org/).
* [`canonical/jest`](./configurations/jest.json) – To be used in addition to "canonical" configuration by projects that use [jest](https://facebook.github.io/jest/).
* [`canonical/lodash`](./configurations/lodash.json) – To be used in addition to "canonical" configuration by projects that use [lodash](https://lodash.com/).
* [`canonical/mocha`](./configurations/mocha.json) – To be used in addition to "canonical" configuration by projects that use [Mocha](https://mochajs.org/).
* [`canonical/react`](./configurations/react.json) – To be used in addition to "canonical" configuration by projects that use [React](https://facebook.github.io/react/).

Example:

```json
{
  "extends": [
    "canonical",
    "canonical/ava",
    "canonical/flowtype",
    "canonical/jest",
    "canonical/lodash",
    "canonical/mocha",
    "canonical/react"
  ]
}
```

## Versioning Policy

All breaking changes will bump the major version as per the semver convention. Therefore, every new rule addition will increase the major version.

## Table of comparison

This is how Canonical ruleset compares to other popular configurations.

<!-- This comparison is created using `./compare` script. -->

|Rule|Canonical|[Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)|[Google](https://www.npmjs.com/package/eslint-config-google)|[Standard](https://www.npmjs.com/package/eslint-config-standard)|
|---|---|---|---|---|
|[`accessor-pairs`](https://eslint.org/docs/rules/accessor-pairs)|error 🚨|off|N/A 👻|error 🚨|
|[`array-bracket-newline`](https://eslint.org/docs/rules/array-bracket-newline)|off|off|off|N/A 👻|
|[`array-bracket-spacing`](https://eslint.org/docs/rules/array-bracket-spacing)|error 🚨|error 🚨|error 🚨|N/A 👻|
|[`array-callback-return`](https://eslint.org/docs/rules/array-callback-return)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`array-element-newline`](https://eslint.org/docs/rules/array-element-newline)|off|off|off|N/A 👻|
|[`arrow-body-style`](https://eslint.org/docs/rules/arrow-body-style)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`arrow-parens`](https://eslint.org/docs/rules/arrow-parens)|error 🚨|error 🚨|error 🚨|N/A 👻|
|[`arrow-spacing`](https://eslint.org/docs/rules/arrow-spacing)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`ava/assertion-arguments`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/assertion-arguments.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`ava/max-asserts`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/max-asserts.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`ava/no-async-fn-without-await`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-async-fn-without-await.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`ava/no-cb-test`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-cb-test.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`ava/no-duplicate-modifiers`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-duplicate-modifiers.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`ava/no-identical-title`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-identical-title.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`ava/no-ignored-test-files`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-ignored-test-files.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`ava/no-import-test-files`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-import-test-files.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`ava/no-invalid-end`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-invalid-end.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`ava/no-nested-tests`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-nested-tests.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`ava/no-only-test`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-only-test.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`ava/no-skip-assert`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-skip-assert.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`ava/no-skip-test`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-skip-test.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`ava/no-statement-after-end`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-statement-after-end.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`ava/no-todo-implementation`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-todo-implementation.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`ava/no-todo-test`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-todo-test.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`ava/no-unknown-modifiers`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-unknown-modifiers.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`ava/prefer-async-await`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/prefer-async-await.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`ava/prefer-power-assert`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/prefer-power-assert.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`ava/test-ended`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/test-ended.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`ava/test-title`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/test-title.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`ava/use-t`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/use-t.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`ava/use-t-well`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/use-t-well.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`ava/use-test`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/use-test.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`ava/use-true-false`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/use-true-false.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`babel/new-cap`](https://eslint.org/docs/rules/new-cap)|off|N/A 👻|N/A 👻|N/A 👻|
|[`babel/no-invalid-this`](https://eslint.org/docs/rules/no-invalid-this)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`babel/object-curly-spacing`](https://eslint.org/docs/rules/object-curly-spacing)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`babel/valid-typeof`](https://eslint.org/docs/rules/valid-typeof)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`block-scoped-var`](https://eslint.org/docs/rules/block-scoped-var)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`block-spacing`](https://eslint.org/docs/rules/block-spacing)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`brace-style`](https://eslint.org/docs/rules/brace-style)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`callback-return`](https://eslint.org/docs/rules/callback-return)|error 🚨|off|N/A 👻|N/A 👻|
|[`camelcase`](https://eslint.org/docs/rules/camelcase)|off|error 🚨|error 🚨|error 🚨|
|[`capitalized-comments`](https://eslint.org/docs/rules/capitalized-comments)|off|off|N/A 👻|N/A 👻|
|[`class-methods-use-this`](https://eslint.org/docs/rules/class-methods-use-this)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`comma-dangle`](https://eslint.org/docs/rules/comma-dangle)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`comma-spacing`](https://eslint.org/docs/rules/comma-spacing)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`comma-style`](https://eslint.org/docs/rules/comma-style)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`complexity`](https://eslint.org/docs/rules/complexity)|warn ⚠️|off|N/A 👻|N/A 👻|
|[`computed-property-spacing`](https://eslint.org/docs/rules/computed-property-spacing)|error 🚨|error 🚨|error 🚨|N/A 👻|
|[`consistent-return`](https://eslint.org/docs/rules/consistent-return)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`consistent-this`](https://eslint.org/docs/rules/consistent-this)|error 🚨|off|N/A 👻|N/A 👻|
|[`constructor-super`](https://eslint.org/docs/rules/constructor-super)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`curly`](https://eslint.org/docs/rules/curly)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`default-case`](https://eslint.org/docs/rules/default-case)|off|error 🚨|N/A 👻|N/A 👻|
|[`dot-location`](https://eslint.org/docs/rules/dot-location)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`dot-notation`](https://eslint.org/docs/rules/dot-notation)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`eol-last`](https://eslint.org/docs/rules/eol-last)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`eqeqeq`](https://eslint.org/docs/rules/eqeqeq)|error 🚨|error 🚨|N/A 👻|error 🚨|
|`filenames/match-exported`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`filenames/match-regex`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`filenames/no-index`|off|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/boolean-style`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/define-flow-type`|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/delimiter-dangle`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/generic-spacing`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/newline-after-flow-annotation`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/no-existential-type`|off|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/no-flow-fix-me-comments`|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/no-mutable-array`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/no-primitive-constructor-types`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/no-types-missing-file-annotation`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`flowtype/no-unused-expressions`](https://eslint.org/docs/rules/no-unused-expressions)|off|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/no-weak-types`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/object-type-delimiter`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/require-exact-type`|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/require-parameter-type`|off|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/require-return-type`|off|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/require-types-at-top`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/require-valid-file-annotation`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/require-variable-type`|off|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/semi`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/sort-keys`|off|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/space-after-type-colon`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/space-before-generic-bracket`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/space-before-type-colon`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/type-id-match`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/type-import-style`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/union-intersection-spacing`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`flowtype/use-flow-type`|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`for-direction`](https://eslint.org/docs/rules/for-direction)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`func-call-spacing`](https://eslint.org/docs/rules/func-call-spacing)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`func-name-matching`](https://eslint.org/docs/rules/func-name-matching)|error 🚨|off|N/A 👻|N/A 👻|
|[`func-names`](https://eslint.org/docs/rules/func-names)|off|warn ⚠️|N/A 👻|N/A 👻|
|[`func-style`](https://eslint.org/docs/rules/func-style)|error 🚨|off|N/A 👻|N/A 👻|
|[`function-paren-newline`](https://eslint.org/docs/rules/function-paren-newline)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`generator-star-spacing`](https://eslint.org/docs/rules/generator-star-spacing)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`getter-return`](https://eslint.org/docs/rules/getter-return)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`global-require`](https://eslint.org/docs/rules/global-require)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`guard-for-in`](https://eslint.org/docs/rules/guard-for-in)|error 🚨|error 🚨|error 🚨|N/A 👻|
|[`handle-callback-err`](https://eslint.org/docs/rules/handle-callback-err)|error 🚨|off|N/A 👻|error 🚨|
|[`id-blacklist`](https://eslint.org/docs/rules/id-blacklist)|N/A 👻|off|N/A 👻|N/A 👻|
|[`id-length`](https://eslint.org/docs/rules/id-length)|warn ⚠️|off|N/A 👻|N/A 👻|
|[`id-match`](https://eslint.org/docs/rules/id-match)|error 🚨|off|N/A 👻|N/A 👻|
|[`implicit-arrow-linebreak`](https://eslint.org/docs/rules/implicit-arrow-linebreak)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`import/default`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/default.md)|error 🚨|off|N/A 👻|N/A 👻|
|[`import/dynamic-import-chunkname`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/dynamic-import-chunkname.md)|N/A 👻|off|N/A 👻|N/A 👻|
|[`import/export`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/export.md)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`import/exports-last`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/exports-last.md)|error 🚨|off|N/A 👻|N/A 👻|
|[`import/extensions`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/extensions.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`import/first`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/first.md)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`import/group-exports`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/group-exports.md)|off|off|N/A 👻|N/A 👻|
|[`import/imports-first`](https://github.com/benmosher/eslint-plugin-import/blob/7b25c1cb95ee18acc1531002fd343e1e6031f9ed/docs/rules/imports-first.md)|N/A 👻|off|N/A 👻|N/A 👻|
|[`import/max-dependencies`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/max-dependencies.md)|warn ⚠️|off|N/A 👻|N/A 👻|
|[`import/named`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/named.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`import/namespace`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/namespace.md)|error 🚨|off|N/A 👻|N/A 👻|
|[`import/newline-after-import`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/newline-after-import.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`import/no-absolute-path`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-absolute-path.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`import/no-amd`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-amd.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`import/no-anonymous-default-export`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-anonymous-default-export.md)|off|off|N/A 👻|N/A 👻|
|[`import/no-commonjs`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-commonjs.md)|error 🚨|off|N/A 👻|N/A 👻|
|[`import/no-cycle`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-cycle.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|`import/no-default-export`|off|off|N/A 👻|N/A 👻|
|[`import/no-deprecated`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-deprecated.md)|warn ⚠️|off|N/A 👻|N/A 👻|
|[`import/no-duplicates`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-duplicates.md)|off|error 🚨|N/A 👻|error 🚨|
|[`import/no-dynamic-require`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-dynamic-require.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`import/no-extraneous-dependencies`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-extraneous-dependencies.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`import/no-internal-modules`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-internal-modules.md)|off|off|N/A 👻|N/A 👻|
|[`import/no-mutable-exports`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-mutable-exports.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`import/no-named-as-default`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-named-as-default.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`import/no-named-as-default-member`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-named-as-default-member.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`import/no-named-default`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-named-default.md)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`import/no-namespace`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-namespace.md)|error 🚨|off|N/A 👻|N/A 👻|
|[`import/no-nodejs-modules`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-nodejs-modules.md)|off|off|N/A 👻|N/A 👻|
|[`import/no-relative-parent-imports`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-relative-parent-imports.md)|off|off|N/A 👻|N/A 👻|
|[`import/no-restricted-paths`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-restricted-paths.md)|off|off|N/A 👻|N/A 👻|
|[`import/no-self-import`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-self-import.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`import/no-unassigned-import`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-unassigned-import.md)|error 🚨|off|N/A 👻|N/A 👻|
|[`import/no-unresolved`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-unresolved.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`import/no-useless-path-segments`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-useless-path-segments.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`import/no-webpack-loader-syntax`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-webpack-loader-syntax.md)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`import/order`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/order.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`import/prefer-default-export`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/prefer-default-export.md)|warn ⚠️|error 🚨|N/A 👻|N/A 👻|
|[`import/unambiguous`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/unambiguous.md)|warn ⚠️|off|N/A 👻|N/A 👻|
|[`indent`](https://eslint.org/docs/rules/indent)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`init-declarations`](https://eslint.org/docs/rules/init-declarations)|off|off|N/A 👻|N/A 👻|
|[`jest/no-disabled-tests`](https://github.com/jest-community/eslint-plugin-jest/blob/v21.23.0/docs/rules/no-disabled-tests.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`jest/no-focused-tests`](https://github.com/jest-community/eslint-plugin-jest/blob/v21.23.0/docs/rules/no-focused-tests.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`jest/no-identical-title`](https://github.com/jest-community/eslint-plugin-jest/blob/v21.23.0/docs/rules/no-identical-title.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`jest/valid-expect`](https://github.com/jest-community/eslint-plugin-jest/blob/v21.23.0/docs/rules/valid-expect.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`jsdoc/check-param-names`|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|`jsdoc/check-tag-names`|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|`jsdoc/check-types`|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|`jsdoc/newline-after-description`|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|`jsdoc/require-description-complete-sentence`|off|N/A 👻|N/A 👻|N/A 👻|
|`jsdoc/require-hyphen-before-param-description`|off|N/A 👻|N/A 👻|N/A 👻|
|`jsdoc/require-param`|off|N/A 👻|N/A 👻|N/A 👻|
|`jsdoc/require-param-description`|off|N/A 👻|N/A 👻|N/A 👻|
|`jsdoc/require-param-name`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`jsdoc/require-param-type`|off|N/A 👻|N/A 👻|N/A 👻|
|`jsdoc/require-returns-description`|off|N/A 👻|N/A 👻|N/A 👻|
|`jsdoc/require-returns-type`|off|N/A 👻|N/A 👻|N/A 👻|
|[`jsx-a11y/accessible-emoji`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/accessible-emoji.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/alt-text`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/alt-text.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/anchor-has-content`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/anchor-has-content.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/anchor-is-valid`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/anchor-is-valid.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/aria-activedescendant-has-tabindex`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/aria-activedescendant-has-tabindex.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/aria-props`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/aria-props.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/aria-proptypes`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/aria-proptypes.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/aria-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/aria-role.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/aria-unsupported-elements`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/aria-unsupported-elements.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/click-events-have-key-events`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/click-events-have-key-events.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/heading-has-content`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/heading-has-content.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/html-has-lang`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/html-has-lang.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/iframe-has-title`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/iframe-has-title.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/img-redundant-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/img-redundant-alt.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/interactive-supports-focus`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/interactive-supports-focus.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|`jsx-a11y/label-has-associated-control`|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/label-has-for`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/label-has-for.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/lang`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/lang.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/media-has-caption`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/media-has-caption.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/mouse-events-have-key-events`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/mouse-events-have-key-events.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/no-access-key`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-access-key.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/no-autofocus`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-autofocus.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/no-distracting-elements`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-distracting-elements.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/no-interactive-element-to-noninteractive-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-interactive-element-to-noninteractive-role.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/no-noninteractive-element-interactions`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-noninteractive-element-interactions.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/no-noninteractive-element-to-interactive-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-noninteractive-element-to-interactive-role.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/no-noninteractive-tabindex`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-noninteractive-tabindex.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/no-onchange`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-onchange.md)|N/A 👻|off|N/A 👻|N/A 👻|
|[`jsx-a11y/no-redundant-roles`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-redundant-roles.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/no-static-element-interactions`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-static-element-interactions.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/role-has-required-aria-props`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/role-has-required-aria-props.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/role-supports-aria-props`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/role-supports-aria-props.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/scope`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/scope.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-a11y/tabindex-no-positive`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/tabindex-no-positive.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`jsx-quotes`](https://eslint.org/docs/rules/jsx-quotes)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`key-spacing`](https://eslint.org/docs/rules/key-spacing)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`keyword-spacing`](https://eslint.org/docs/rules/keyword-spacing)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`line-comment-position`](https://eslint.org/docs/rules/line-comment-position)|error 🚨|off|N/A 👻|N/A 👻|
|[`linebreak-style`](https://eslint.org/docs/rules/linebreak-style)|error 🚨|error 🚨|error 🚨|N/A 👻|
|[`lines-around-comment`](https://eslint.org/docs/rules/lines-around-comment)|error 🚨|off|N/A 👻|N/A 👻|
|[`lines-around-directive`](https://eslint.org/docs/rules/lines-around-directive)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`lines-between-class-members`](https://eslint.org/docs/rules/lines-between-class-members)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`lodash/callback-binding`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/callback-binding.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/chain-style`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/chain-style.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/chaining`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/chaining.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/collection-method-value`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/collection-method-value.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/collection-return`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/collection-return.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/consistent-compose`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/consistent-compose.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/identity-shorthand`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/identity-shorthand.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/import-scope`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/import-scope.md)|off|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/matches-prop-shorthand`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/matches-prop-shorthand.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/matches-shorthand`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/matches-shorthand.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/no-commit`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/no-commit.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/no-double-unwrap`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/no-double-unwrap.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/no-extra-args`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/no-extra-args.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/path-style`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/path-style.md)|off|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/prefer-compact`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-compact.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/prefer-constant`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-constant.md)|off|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/prefer-filter`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-filter.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/prefer-find`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-find.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/prefer-get`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-get.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/prefer-immutable-method`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-immutable-method.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/prefer-includes`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-includes.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/prefer-invoke-map`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-invoke-map.md)|off|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/prefer-is-nil`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-is-nil.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/prefer-lodash-chain`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-lodash-chain.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/prefer-lodash-method`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-lodash-method.md)|off|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/prefer-lodash-typecheck`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-lodash-typecheck.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/prefer-map`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-map.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/prefer-matches`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-matches.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/prefer-noop`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-noop.md)|off|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/prefer-over-quantifier`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-over-quantifier.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/prefer-reject`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-reject.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/prefer-startswith`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-startswith.md)|off|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/prefer-thru`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-thru.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/prefer-times`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-times.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/prefer-wrapper-method`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-wrapper-method.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/preferred-alias`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/preferred-alias.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/prop-shorthand`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prop-shorthand.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`lodash/unwrap`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/unwrap.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`max-classes-per-file`](https://eslint.org/docs/rules/max-classes-per-file)|N/A 👻|off|N/A 👻|N/A 👻|
|[`max-depth`](https://eslint.org/docs/rules/max-depth)|N/A 👻|off|N/A 👻|N/A 👻|
|[`max-len`](https://eslint.org/docs/rules/max-len)|warn ⚠️|error 🚨|error 🚨|N/A 👻|
|[`max-lines`](https://eslint.org/docs/rules/max-lines)|N/A 👻|off|N/A 👻|N/A 👻|
|[`max-lines-per-function`](https://eslint.org/docs/rules/max-lines-per-function)|N/A 👻|off|N/A 👻|N/A 👻|
|[`max-nested-callbacks`](https://eslint.org/docs/rules/max-nested-callbacks)|warn ⚠️|off|N/A 👻|N/A 👻|
|[`max-params`](https://eslint.org/docs/rules/max-params)|N/A 👻|off|N/A 👻|N/A 👻|
|[`max-statements`](https://eslint.org/docs/rules/max-statements)|N/A 👻|off|N/A 👻|N/A 👻|
|[`max-statements-per-line`](https://eslint.org/docs/rules/max-statements-per-line)|error 🚨|off|N/A 👻|N/A 👻|
|`mocha/max-top-level-suites`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`mocha/no-exclusive-tests`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`mocha/no-hooks-for-single-case`|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|`mocha/no-identical-title`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`mocha/no-nested-tests`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`mocha/no-return-and-callback`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`mocha/no-setup-in-describe`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|`mocha/no-top-level-hooks`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`multiline-comment-style`](https://eslint.org/docs/rules/multiline-comment-style)|off|off|N/A 👻|N/A 👻|
|[`multiline-ternary`](https://eslint.org/docs/rules/multiline-ternary)|off|off|N/A 👻|N/A 👻|
|[`new-cap`](https://eslint.org/docs/rules/new-cap)|off|error 🚨|error 🚨|error 🚨|
|[`new-parens`](https://eslint.org/docs/rules/new-parens)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`newline-after-var`](https://eslint.org/docs/rules/newline-after-var)|error 🚨|off|N/A 👻|N/A 👻|
|[`newline-before-return`](https://eslint.org/docs/rules/newline-before-return)|error 🚨|off|N/A 👻|N/A 👻|
|[`newline-per-chained-call`](https://eslint.org/docs/rules/newline-per-chained-call)|off|error 🚨|N/A 👻|N/A 👻|
|[`no-alert`](https://eslint.org/docs/rules/no-alert)|error 🚨|warn ⚠️|N/A 👻|N/A 👻|
|[`no-array-constructor`](https://eslint.org/docs/rules/no-array-constructor)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`no-async-promise-executor`](https://eslint.org/docs/rules/no-async-promise-executor)|error 🚨|off|N/A 👻|N/A 👻|
|[`no-await-in-loop`](https://eslint.org/docs/rules/no-await-in-loop)|off|error 🚨|N/A 👻|N/A 👻|
|[`no-bitwise`](https://eslint.org/docs/rules/no-bitwise)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`no-buffer-constructor`](https://eslint.org/docs/rules/no-buffer-constructor)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`no-caller`](https://eslint.org/docs/rules/no-caller)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`no-case-declarations`](https://eslint.org/docs/rules/no-case-declarations)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`no-catch-shadow`](https://eslint.org/docs/rules/no-catch-shadow)|error 🚨|off|N/A 👻|N/A 👻|
|[`no-class-assign`](https://eslint.org/docs/rules/no-class-assign)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-compare-neg-zero`](https://eslint.org/docs/rules/no-compare-neg-zero)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-cond-assign`](https://eslint.org/docs/rules/no-cond-assign)|error 🚨|error 🚨|off|error 🚨|
|[`no-confusing-arrow`](https://eslint.org/docs/rules/no-confusing-arrow)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`no-console`](https://eslint.org/docs/rules/no-console)|error 🚨|warn ⚠️|N/A 👻|N/A 👻|
|[`no-const-assign`](https://eslint.org/docs/rules/no-const-assign)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-constant-condition`](https://eslint.org/docs/rules/no-constant-condition)|warn ⚠️|warn ⚠️|N/A 👻|error 🚨|
|[`no-continue`](https://eslint.org/docs/rules/no-continue)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`no-control-regex`](https://eslint.org/docs/rules/no-control-regex)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-debugger`](https://eslint.org/docs/rules/no-debugger)|warn ⚠️|error 🚨|N/A 👻|error 🚨|
|[`no-delete-var`](https://eslint.org/docs/rules/no-delete-var)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-div-regex`](https://eslint.org/docs/rules/no-div-regex)|error 🚨|off|N/A 👻|N/A 👻|
|[`no-dupe-args`](https://eslint.org/docs/rules/no-dupe-args)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-dupe-class-members`](https://eslint.org/docs/rules/no-dupe-class-members)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-dupe-keys`](https://eslint.org/docs/rules/no-dupe-keys)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-duplicate-case`](https://eslint.org/docs/rules/no-duplicate-case)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-duplicate-imports`](https://eslint.org/docs/rules/no-duplicate-imports)|error 🚨|off|N/A 👻|N/A 👻|
|[`no-else-return`](https://eslint.org/docs/rules/no-else-return)|off|error 🚨|N/A 👻|N/A 👻|
|[`no-empty`](https://eslint.org/docs/rules/no-empty)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`no-empty-character-class`](https://eslint.org/docs/rules/no-empty-character-class)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-empty-function`](https://eslint.org/docs/rules/no-empty-function)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`no-empty-pattern`](https://eslint.org/docs/rules/no-empty-pattern)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-eq-null`](https://eslint.org/docs/rules/no-eq-null)|error 🚨|off|N/A 👻|N/A 👻|
|[`no-eval`](https://eslint.org/docs/rules/no-eval)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-ex-assign`](https://eslint.org/docs/rules/no-ex-assign)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-extend-native`](https://eslint.org/docs/rules/no-extend-native)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`no-extra-bind`](https://eslint.org/docs/rules/no-extra-bind)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`no-extra-boolean-cast`](https://eslint.org/docs/rules/no-extra-boolean-cast)|off|error 🚨|N/A 👻|error 🚨|
|[`no-extra-label`](https://eslint.org/docs/rules/no-extra-label)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`no-extra-parens`](https://eslint.org/docs/rules/no-extra-parens)|error 🚨|off|N/A 👻|error 🚨|
|[`no-extra-semi`](https://eslint.org/docs/rules/no-extra-semi)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`no-fallthrough`](https://eslint.org/docs/rules/no-fallthrough)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-floating-decimal`](https://eslint.org/docs/rules/no-floating-decimal)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-func-assign`](https://eslint.org/docs/rules/no-func-assign)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-global-assign`](https://eslint.org/docs/rules/no-global-assign)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-implicit-coercion`](https://eslint.org/docs/rules/no-implicit-coercion)|error 🚨|off|N/A 👻|N/A 👻|
|[`no-implicit-globals`](https://eslint.org/docs/rules/no-implicit-globals)|off|off|N/A 👻|N/A 👻|
|[`no-implied-eval`](https://eslint.org/docs/rules/no-implied-eval)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-inline-comments`](https://eslint.org/docs/rules/no-inline-comments)|error 🚨|off|N/A 👻|N/A 👻|
|[`no-inner-declarations`](https://eslint.org/docs/rules/no-inner-declarations)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-invalid-regexp`](https://eslint.org/docs/rules/no-invalid-regexp)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-invalid-this`](https://eslint.org/docs/rules/no-invalid-this)|off|off|error 🚨|N/A 👻|
|[`no-irregular-whitespace`](https://eslint.org/docs/rules/no-irregular-whitespace)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`no-iterator`](https://eslint.org/docs/rules/no-iterator)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-label-var`](https://eslint.org/docs/rules/no-label-var)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-labels`](https://eslint.org/docs/rules/no-labels)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-lone-blocks`](https://eslint.org/docs/rules/no-lone-blocks)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-lonely-if`](https://eslint.org/docs/rules/no-lonely-if)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`no-loop-func`](https://eslint.org/docs/rules/no-loop-func)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`no-magic-numbers`](https://eslint.org/docs/rules/no-magic-numbers)|off|off|N/A 👻|N/A 👻|
|[`no-misleading-character-class`](https://eslint.org/docs/rules/no-misleading-character-class)|error 🚨|off|N/A 👻|N/A 👻|
|[`no-mixed-operators`](https://eslint.org/docs/rules/no-mixed-operators)|N/A 👻|error 🚨|N/A 👻|error 🚨|
|[`no-mixed-requires`](https://eslint.org/docs/rules/no-mixed-requires)|off|off|N/A 👻|N/A 👻|
|[`no-mixed-spaces-and-tabs`](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`no-multi-assign`](https://eslint.org/docs/rules/no-multi-assign)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`no-multi-spaces`](https://eslint.org/docs/rules/no-multi-spaces)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`no-multi-str`](https://eslint.org/docs/rules/no-multi-str)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`no-multiple-empty-lines`](https://eslint.org/docs/rules/no-multiple-empty-lines)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`no-native-reassign`](https://eslint.org/docs/rules/no-native-reassign)|error 🚨|off|N/A 👻|N/A 👻|
|[`no-negated-condition`](https://eslint.org/docs/rules/no-negated-condition)|error 🚨|off|N/A 👻|N/A 👻|
|[`no-negated-in-lhs`](https://eslint.org/docs/rules/no-negated-in-lhs)|error 🚨|off|N/A 👻|error 🚨|
|[`no-nested-ternary`](https://eslint.org/docs/rules/no-nested-ternary)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`no-new`](https://eslint.org/docs/rules/no-new)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-new-func`](https://eslint.org/docs/rules/no-new-func)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-new-object`](https://eslint.org/docs/rules/no-new-object)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`no-new-require`](https://eslint.org/docs/rules/no-new-require)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-new-symbol`](https://eslint.org/docs/rules/no-new-symbol)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`no-obj-calls`](https://eslint.org/docs/rules/no-obj-calls)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-octal`](https://eslint.org/docs/rules/no-octal)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-octal-escape`](https://eslint.org/docs/rules/no-octal-escape)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`no-path-concat`](https://eslint.org/docs/rules/no-path-concat)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-plusplus`](https://eslint.org/docs/rules/no-plusplus)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`no-process-env`](https://eslint.org/docs/rules/no-process-env)|error 🚨|off|N/A 👻|N/A 👻|
|[`no-process-exit`](https://eslint.org/docs/rules/no-process-exit)|error 🚨|off|N/A 👻|N/A 👻|
|[`no-proto`](https://eslint.org/docs/rules/no-proto)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-prototype-builtins`](https://eslint.org/docs/rules/no-prototype-builtins)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`no-redeclare`](https://eslint.org/docs/rules/no-redeclare)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-regex-spaces`](https://eslint.org/docs/rules/no-regex-spaces)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-restricted-globals`](https://eslint.org/docs/rules/no-restricted-globals)|off|error 🚨|N/A 👻|N/A 👻|
|[`no-restricted-imports`](https://eslint.org/docs/rules/no-restricted-imports)|N/A 👻|off|N/A 👻|N/A 👻|
|[`no-restricted-modules`](https://eslint.org/docs/rules/no-restricted-modules)|off|off|N/A 👻|N/A 👻|
|[`no-restricted-properties`](https://eslint.org/docs/rules/no-restricted-properties)|off|error 🚨|N/A 👻|N/A 👻|
|[`no-restricted-syntax`](https://eslint.org/docs/rules/no-restricted-syntax)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`no-return-assign`](https://eslint.org/docs/rules/no-return-assign)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-return-await`](https://eslint.org/docs/rules/no-return-await)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-script-url`](https://eslint.org/docs/rules/no-script-url)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`no-self-assign`](https://eslint.org/docs/rules/no-self-assign)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-self-compare`](https://eslint.org/docs/rules/no-self-compare)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-sequences`](https://eslint.org/docs/rules/no-sequences)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-shadow`](https://eslint.org/docs/rules/no-shadow)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`no-shadow-restricted-names`](https://eslint.org/docs/rules/no-shadow-restricted-names)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-spaced-func`](https://eslint.org/docs/rules/no-spaced-func)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`no-sparse-arrays`](https://eslint.org/docs/rules/no-sparse-arrays)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-sync`](https://eslint.org/docs/rules/no-sync)|off|off|N/A 👻|N/A 👻|
|[`no-tabs`](https://eslint.org/docs/rules/no-tabs)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`no-template-curly-in-string`](https://eslint.org/docs/rules/no-template-curly-in-string)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-ternary`](https://eslint.org/docs/rules/no-ternary)|off|off|N/A 👻|N/A 👻|
|[`no-this-before-super`](https://eslint.org/docs/rules/no-this-before-super)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`no-throw-literal`](https://eslint.org/docs/rules/no-throw-literal)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`no-trailing-spaces`](https://eslint.org/docs/rules/no-trailing-spaces)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`no-undef`](https://eslint.org/docs/rules/no-undef)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-undef-init`](https://eslint.org/docs/rules/no-undef-init)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-undefined`](https://eslint.org/docs/rules/no-undefined)|off|off|N/A 👻|N/A 👻|
|[`no-underscore-dangle`](https://eslint.org/docs/rules/no-underscore-dangle)|off|error 🚨|N/A 👻|N/A 👻|
|[`no-unexpected-multiline`](https://eslint.org/docs/rules/no-unexpected-multiline)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`no-unmodified-loop-condition`](https://eslint.org/docs/rules/no-unmodified-loop-condition)|error 🚨|off|N/A 👻|error 🚨|
|[`no-unneeded-ternary`](https://eslint.org/docs/rules/no-unneeded-ternary)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-unreachable`](https://eslint.org/docs/rules/no-unreachable)|warn ⚠️|error 🚨|N/A 👻|error 🚨|
|[`no-unsafe-finally`](https://eslint.org/docs/rules/no-unsafe-finally)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-unsafe-negation`](https://eslint.org/docs/rules/no-unsafe-negation)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-unused-expressions`](https://eslint.org/docs/rules/no-unused-expressions)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-unused-labels`](https://eslint.org/docs/rules/no-unused-labels)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`no-unused-vars`](https://eslint.org/docs/rules/no-unused-vars)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`no-use-before-define`](https://eslint.org/docs/rules/no-use-before-define)|error 🚨|error 🚨|N/A 👻|error 🚨|
|`no-use-extend-native/no-use-extend-native`|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`no-useless-call`](https://eslint.org/docs/rules/no-useless-call)|error 🚨|off|N/A 👻|error 🚨|
|[`no-useless-computed-key`](https://eslint.org/docs/rules/no-useless-computed-key)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-useless-concat`](https://eslint.org/docs/rules/no-useless-concat)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`no-useless-constructor`](https://eslint.org/docs/rules/no-useless-constructor)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-useless-escape`](https://eslint.org/docs/rules/no-useless-escape)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-useless-rename`](https://eslint.org/docs/rules/no-useless-rename)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-useless-return`](https://eslint.org/docs/rules/no-useless-return)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-var`](https://eslint.org/docs/rules/no-var)|error 🚨|error 🚨|error 🚨|N/A 👻|
|[`no-void`](https://eslint.org/docs/rules/no-void)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`no-warning-comments`](https://eslint.org/docs/rules/no-warning-comments)|warn ⚠️|off|N/A 👻|N/A 👻|
|[`no-whitespace-before-property`](https://eslint.org/docs/rules/no-whitespace-before-property)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`no-with`](https://eslint.org/docs/rules/no-with)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`node/no-deprecated-api`](https://github.com/mysticatea/eslint-plugin-node/blob/v7.0.1/docs/rules/no-deprecated-api.md)|N/A 👻|N/A 👻|N/A 👻|error 🚨|
|[`node/process-exit-as-throw`](https://github.com/mysticatea/eslint-plugin-node/blob/v7.0.1/docs/rules/process-exit-as-throw.md)|N/A 👻|N/A 👻|N/A 👻|error 🚨|
|[`nonblock-statement-body-position`](https://eslint.org/docs/rules/nonblock-statement-body-position)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`object-curly-newline`](https://eslint.org/docs/rules/object-curly-newline)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`object-curly-spacing`](https://eslint.org/docs/rules/object-curly-spacing)|off|error 🚨|error 🚨|error 🚨|
|[`object-property-newline`](https://eslint.org/docs/rules/object-property-newline)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`object-shorthand`](https://eslint.org/docs/rules/object-shorthand)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`one-var`](https://eslint.org/docs/rules/one-var)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`one-var-declaration-per-line`](https://eslint.org/docs/rules/one-var-declaration-per-line)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`operator-assignment`](https://eslint.org/docs/rules/operator-assignment)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`operator-linebreak`](https://eslint.org/docs/rules/operator-linebreak)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`padded-blocks`](https://eslint.org/docs/rules/padded-blocks)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`padding-line-between-statements`](https://eslint.org/docs/rules/padding-line-between-statements)|off|off|N/A 👻|N/A 👻|
|[`prefer-arrow-callback`](https://eslint.org/docs/rules/prefer-arrow-callback)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`prefer-const`](https://eslint.org/docs/rules/prefer-const)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring)|off|error 🚨|N/A 👻|N/A 👻|
|[`prefer-numeric-literals`](https://eslint.org/docs/rules/prefer-numeric-literals)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`prefer-object-spread`](https://eslint.org/docs/rules/prefer-object-spread)|N/A 👻|off|N/A 👻|N/A 👻|
|[`prefer-promise-reject-errors`](https://eslint.org/docs/rules/prefer-promise-reject-errors)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`prefer-reflect`](https://eslint.org/docs/rules/prefer-reflect)|off|off|N/A 👻|N/A 👻|
|[`prefer-rest-params`](https://eslint.org/docs/rules/prefer-rest-params)|error 🚨|error 🚨|error 🚨|N/A 👻|
|[`prefer-spread`](https://eslint.org/docs/rules/prefer-spread)|error 🚨|error 🚨|error 🚨|N/A 👻|
|[`prefer-template`](https://eslint.org/docs/rules/prefer-template)|off|error 🚨|N/A 👻|N/A 👻|
|[`promise/always-return`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/always-return.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`promise/avoid-new`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/avoid-new.md)|off|N/A 👻|N/A 👻|N/A 👻|
|[`promise/catch-or-return`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/catch-or-return.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`promise/no-callback-in-promise`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/no-callback-in-promise.md)|off|N/A 👻|N/A 👻|N/A 👻|
|[`promise/no-native`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/no-native.md)|off|N/A 👻|N/A 👻|N/A 👻|
|[`promise/no-nesting`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/no-nesting.md)|off|N/A 👻|N/A 👻|N/A 👻|
|[`promise/no-new-statics`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/no-new-statics.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`promise/no-promise-in-callback`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/no-promise-in-callback.md)|off|N/A 👻|N/A 👻|N/A 👻|
|[`promise/no-return-in-finally`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/no-return-in-finally.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`promise/no-return-wrap`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/no-return-wrap.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`promise/param-names`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/param-names.md)|error 🚨|N/A 👻|N/A 👻|error 🚨|
|[`promise/prefer-await-to-callbacks`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/prefer-await-to-callbacks.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`promise/prefer-await-to-then`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/prefer-await-to-then.md)|warn ⚠️|N/A 👻|N/A 👻|N/A 👻|
|[`promise/valid-params`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/valid-params.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`quote-props`](https://eslint.org/docs/rules/quote-props)|error 🚨|error 🚨|error 🚨|N/A 👻|
|[`quotes`](https://eslint.org/docs/rules/quotes)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`radix`](https://eslint.org/docs/rules/radix)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/boolean-prop-naming`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/boolean-prop-naming.md)|off|off|N/A 👻|N/A 👻|
|[`react/button-has-type`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/button-has-type.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/default-props-match-prop-types`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/default-props-match-prop-types.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/destructuring-assignment`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/destructuring-assignment.md)|off|error 🚨|N/A 👻|N/A 👻|
|[`react/display-name`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/display-name.md)|off|off|N/A 👻|N/A 👻|
|[`react/forbid-component-props`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-component-props.md)|error 🚨|off|N/A 👻|N/A 👻|
|[`react/forbid-dom-props`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-dom-props.md)|off|off|N/A 👻|N/A 👻|
|[`react/forbid-elements`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-elements.md)|off|off|N/A 👻|N/A 👻|
|[`react/forbid-foreign-prop-types`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-foreign-prop-types.md)|off|warn ⚠️|N/A 👻|N/A 👻|
|[`react/forbid-prop-types`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-prop-types.md)|off|error 🚨|N/A 👻|N/A 👻|
|[`react/jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-boolean-value.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/jsx-child-element-spacing`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-child-element-spacing.md)|off|off|N/A 👻|N/A 👻|
|[`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-closing-bracket-location.md)|off|error 🚨|N/A 👻|N/A 👻|
|[`react/jsx-closing-tag-location`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-closing-tag-location.md)|off|error 🚨|N/A 👻|N/A 👻|
|[`react/jsx-curly-brace-presence`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-curly-brace-presence.md)|off|error 🚨|N/A 👻|N/A 👻|
|[`react/jsx-curly-spacing`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-curly-spacing.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/jsx-equals-spacing`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-equals-spacing.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/jsx-filename-extension`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-filename-extension.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`react/jsx-first-prop-new-line`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-first-prop-new-line.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/jsx-handler-names`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-handler-names.md)|error 🚨|off|N/A 👻|N/A 👻|
|[`react/jsx-indent`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-indent.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/jsx-indent-props`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-indent-props.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/jsx-key`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-key.md)|error 🚨|off|N/A 👻|N/A 👻|
|[`react/jsx-max-depth`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-max-depth.md)|N/A 👻|off|N/A 👻|N/A 👻|
|[`react/jsx-max-props-per-line`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-max-props-per-line.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/jsx-no-bind`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-bind.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/jsx-no-comment-textnodes`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-comment-textnodes.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/jsx-no-duplicate-props`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-duplicate-props.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/jsx-no-literals`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-literals.md)|off|off|N/A 👻|N/A 👻|
|[`react/jsx-no-target-blank`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-target-blank.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/jsx-no-undef`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-undef.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/jsx-one-expression-per-line`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-one-expression-per-line.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-pascal-case.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/jsx-props-no-multi-spaces`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-multi-spaces.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/jsx-sort-default-props`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-sort-default-props.md)|error 🚨|off|N/A 👻|N/A 👻|
|`react/jsx-sort-prop-types`|N/A 👻|off|N/A 👻|N/A 👻|
|[`react/jsx-sort-props`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-sort-props.md)|error 🚨|off|N/A 👻|N/A 👻|
|[`react/jsx-space-before-closing`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-space-before-closing.md)|N/A 👻|off|N/A 👻|N/A 👻|
|[`react/jsx-tag-spacing`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-tag-spacing.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/jsx-uses-react`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-uses-react.md)|warn ⚠️|error 🚨|N/A 👻|N/A 👻|
|[`react/jsx-uses-vars`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-uses-vars.md)|warn ⚠️|error 🚨|N/A 👻|N/A 👻|
|[`react/jsx-wrap-multilines`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-wrap-multilines.md)|off|error 🚨|N/A 👻|N/A 👻|
|[`react/no-access-state-in-setstate`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-access-state-in-setstate.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/no-array-index-key`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-array-index-key.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/no-children-prop`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-children-prop.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/no-danger`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-danger.md)|error 🚨|warn ⚠️|N/A 👻|N/A 👻|
|[`react/no-danger-with-children`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-danger-with-children.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/no-deprecated`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-deprecated.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/no-did-mount-set-state`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/componentDidMount.md)|error 🚨|off|N/A 👻|N/A 👻|
|[`react/no-did-update-set-state`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/componentDidUpdate.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/no-direct-mutation-state`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-direct-mutation-state.md)|error 🚨|off|N/A 👻|N/A 👻|
|[`react/no-find-dom-node`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-find-dom-node.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/no-is-mounted`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-is-mounted.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/no-multi-comp`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-multi-comp.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/no-redundant-should-component-update`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-redundant-should-component-update.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/no-render-return-value`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-render-return-value.md)|N/A 👻|error 🚨|N/A 👻|N/A 👻|
|[`react/no-set-state`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-set-state.md)|error 🚨|off|N/A 👻|N/A 👻|
|[`react/no-string-refs`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-string-refs.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/no-this-in-sfc`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-this-in-sfc.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/no-typos`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-typos.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/no-unescaped-entities`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unescaped-entities.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/no-unknown-property`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unknown-property.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/no-unsafe`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unsafe.md)|error 🚨|off|N/A 👻|N/A 👻|
|[`react/no-unused-prop-types`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unused-prop-types.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/no-unused-state`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unused-state.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/no-will-update-set-state`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/componentWillUpdate.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/prefer-es6-class`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/prefer-es6-class.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/prefer-stateless-function`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/prefer-stateless-function.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/prop-types`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/prop-types.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/react-in-jsx-scope`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/react-in-jsx-scope.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/require-default-props`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/require-default-props.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/require-optimization`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/require-optimization.md)|N/A 👻|off|N/A 👻|N/A 👻|
|[`react/require-render-return`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/require-render-return.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/self-closing-comp`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/self-closing-comp.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/sort-comp`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/sort-comp.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/sort-prop-types`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/sort-prop-types.md)|error 🚨|off|N/A 👻|N/A 👻|
|[`react/style-prop-object`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/style-prop-object.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`react/void-dom-elements-no-children`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/void-dom-elements-no-children.md)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`require-atomic-updates`](https://eslint.org/docs/rules/require-atomic-updates)|N/A 👻|off|N/A 👻|N/A 👻|
|[`require-await`](https://eslint.org/docs/rules/require-await)|warn ⚠️|off|N/A 👻|N/A 👻|
|[`require-jsdoc`](https://eslint.org/docs/rules/require-jsdoc)|off|off|error 🚨|N/A 👻|
|[`require-unicode-regexp`](https://eslint.org/docs/rules/require-unicode-regexp)|N/A 👻|off|N/A 👻|N/A 👻|
|[`require-yield`](https://eslint.org/docs/rules/require-yield)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`rest-spread-spacing`](https://eslint.org/docs/rules/rest-spread-spacing)|N/A 👻|error 🚨|error 🚨|error 🚨|
|[`semi`](https://eslint.org/docs/rules/semi)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`semi-spacing`](https://eslint.org/docs/rules/semi-spacing)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`semi-style`](https://eslint.org/docs/rules/semi-style)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`sort-imports`](https://eslint.org/docs/rules/sort-imports)|N/A 👻|off|N/A 👻|N/A 👻|
|[`sort-keys`](https://eslint.org/docs/rules/sort-keys)|error 🚨|off|N/A 👻|N/A 👻|
|[`sort-vars`](https://eslint.org/docs/rules/sort-vars)|error 🚨|off|N/A 👻|N/A 👻|
|[`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`space-before-function-paren`](https://eslint.org/docs/rules/space-before-function-paren)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`space-in-parens`](https://eslint.org/docs/rules/space-in-parens)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`space-infix-ops`](https://eslint.org/docs/rules/space-infix-ops)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`space-unary-ops`](https://eslint.org/docs/rules/space-unary-ops)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`spaced-comment`](https://eslint.org/docs/rules/spaced-comment)|error 🚨|error 🚨|error 🚨|error 🚨|
|[`standard/array-bracket-even-spacing`](https://github.com/standard/eslint-plugin-standard#rules-explanations)|N/A 👻|N/A 👻|N/A 👻|error 🚨|
|[`standard/computed-property-even-spacing`](https://github.com/standard/eslint-plugin-standard#rules-explanations)|N/A 👻|N/A 👻|N/A 👻|error 🚨|
|[`standard/no-callback-literal`](https://github.com/standard/eslint-plugin-standard#rules-explanations)|N/A 👻|N/A 👻|N/A 👻|error 🚨|
|[`standard/object-curly-even-spacing`](https://github.com/standard/eslint-plugin-standard#rules-explanations)|N/A 👻|N/A 👻|N/A 👻|error 🚨|
|[`strict`](https://eslint.org/docs/rules/strict)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`switch-colon-spacing`](https://eslint.org/docs/rules/switch-colon-spacing)|error 🚨|error 🚨|error 🚨|N/A 👻|
|[`symbol-description`](https://eslint.org/docs/rules/symbol-description)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`template-curly-spacing`](https://eslint.org/docs/rules/template-curly-spacing)|N/A 👻|error 🚨|N/A 👻|error 🚨|
|[`template-tag-spacing`](https://eslint.org/docs/rules/template-tag-spacing)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`unicode-bom`](https://eslint.org/docs/rules/unicode-bom)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`unicorn/catch-error-name`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/catch-error-name.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`unicorn/custom-error-definition`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/custom-error-definition.md)|off|N/A 👻|N/A 👻|N/A 👻|
|[`unicorn/error-message`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/error-message.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`unicorn/explicit-length-check`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/explicit-length-check.md)|off|N/A 👻|N/A 👻|N/A 👻|
|[`unicorn/filename-case`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/filename-case.md)|off|N/A 👻|N/A 👻|N/A 👻|
|[`unicorn/import-index`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/import-index.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`unicorn/new-for-builtins`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/new-for-builtins.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`unicorn/no-abusive-eslint-disable`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/no-abusive-eslint-disable.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`unicorn/no-array-instanceof`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/no-array-instanceof.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`unicorn/no-fn-reference-in-iterator`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/no-fn-reference-in-iterator.md)|off|N/A 👻|N/A 👻|N/A 👻|
|[`unicorn/no-hex-escape`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/no-hex-escape.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`unicorn/no-new-buffer`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/no-new-buffer.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`unicorn/no-process-exit`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/no-process-exit.md)|off|N/A 👻|N/A 👻|N/A 👻|
|[`unicorn/number-literal-case`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/number-literal-case.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`unicorn/prefer-add-event-listener`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/prefer-add-event-listener.md)|off|N/A 👻|N/A 👻|N/A 👻|
|[`unicorn/prefer-exponentiation-operator`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/prefer-exponentiation-operator.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`unicorn/prefer-spread`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/prefer-spread.md)|off|N/A 👻|N/A 👻|N/A 👻|
|[`unicorn/prefer-starts-ends-with`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/prefer-starts-ends-with.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`unicorn/prefer-type-error`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/prefer-type-error.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`unicorn/regex-shorthand`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/regex-shorthand.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`unicorn/throw-new-error`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/throw-new-error.md)|error 🚨|N/A 👻|N/A 👻|N/A 👻|
|[`use-isnan`](https://eslint.org/docs/rules/use-isnan)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`valid-jsdoc`](https://eslint.org/docs/rules/valid-jsdoc)|off|off|error 🚨|N/A 👻|
|[`valid-typeof`](https://eslint.org/docs/rules/valid-typeof)|N/A 👻|error 🚨|N/A 👻|error 🚨|
|[`vars-on-top`](https://eslint.org/docs/rules/vars-on-top)|error 🚨|error 🚨|N/A 👻|N/A 👻|
|[`wrap-iife`](https://eslint.org/docs/rules/wrap-iife)|error 🚨|error 🚨|N/A 👻|error 🚨|
|[`wrap-regex`](https://eslint.org/docs/rules/wrap-regex)|off|off|N/A 👻|N/A 👻|
|[`yield-star-spacing`](https://eslint.org/docs/rules/yield-star-spacing)|N/A 👻|error 🚨|error 🚨|error 🚨|
|[`yoda`](https://eslint.org/docs/rules/yoda)|off|error 🚨|N/A 👻|error 🚨|
