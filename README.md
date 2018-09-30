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

This how Canonical ruleset compares to other popular configurations.

<!-- This comparison is created using `./compare` script. -->

|Rule|Canonical|[Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)|
|---|---|---|
|[`accessor-pairs`](https://eslint.org/docs/rules/accessor-pairs)|error 🚨|"accessor-pairs"|
|[`array-bracket-newline`](https://eslint.org/docs/rules/array-bracket-newline)|"array-bracket-newline"|"array-bracket-newline"|
|[`array-bracket-spacing`](https://eslint.org/docs/rules/array-bracket-spacing)|"array-bracket-spacing"|"array-bracket-spacing"|
|[`array-callback-return`](https://eslint.org/docs/rules/array-callback-return)|error 🚨|"array-callback-return"|
|[`array-element-newline`](https://eslint.org/docs/rules/array-element-newline)|"array-element-newline"|"array-element-newline"|
|[`arrow-body-style`](https://eslint.org/docs/rules/arrow-body-style)|"arrow-body-style"|"arrow-body-style"|
|[`arrow-parens`](https://eslint.org/docs/rules/arrow-parens)|"arrow-parens"|"arrow-parens"|
|[`arrow-spacing`](https://eslint.org/docs/rules/arrow-spacing)|"arrow-spacing"|"arrow-spacing"|
|[`ava/assertion-arguments`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/assertion-arguments.md)|error 🚨|N/A 👻|
|[`ava/max-asserts`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/max-asserts.md)|"ava/max-asserts"|N/A 👻|
|[`ava/no-async-fn-without-await`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-async-fn-without-await.md)|error 🚨|N/A 👻|
|[`ava/no-cb-test`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-cb-test.md)|error 🚨|N/A 👻|
|[`ava/no-duplicate-modifiers`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-duplicate-modifiers.md)|error 🚨|N/A 👻|
|[`ava/no-identical-title`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-identical-title.md)|error 🚨|N/A 👻|
|[`ava/no-ignored-test-files`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-ignored-test-files.md)|error 🚨|N/A 👻|
|[`ava/no-import-test-files`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-import-test-files.md)|error 🚨|N/A 👻|
|[`ava/no-invalid-end`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-invalid-end.md)|error 🚨|N/A 👻|
|[`ava/no-nested-tests`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-nested-tests.md)|error 🚨|N/A 👻|
|[`ava/no-only-test`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-only-test.md)|error 🚨|N/A 👻|
|[`ava/no-skip-assert`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-skip-assert.md)|error 🚨|N/A 👻|
|[`ava/no-skip-test`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-skip-test.md)|error 🚨|N/A 👻|
|[`ava/no-statement-after-end`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-statement-after-end.md)|error 🚨|N/A 👻|
|[`ava/no-todo-implementation`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-todo-implementation.md)|error 🚨|N/A 👻|
|[`ava/no-todo-test`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-todo-test.md)|warn ⚠️|N/A 👻|
|[`ava/no-unknown-modifiers`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/no-unknown-modifiers.md)|error 🚨|N/A 👻|
|[`ava/prefer-async-await`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/prefer-async-await.md)|error 🚨|N/A 👻|
|[`ava/prefer-power-assert`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/prefer-power-assert.md)|error 🚨|N/A 👻|
|[`ava/test-ended`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/test-ended.md)|error 🚨|N/A 👻|
|[`ava/test-title`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/test-title.md)|"ava/test-title"|N/A 👻|
|[`ava/use-t`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/use-t.md)|error 🚨|N/A 👻|
|[`ava/use-t-well`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/use-t-well.md)|error 🚨|N/A 👻|
|[`ava/use-test`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/use-test.md)|error 🚨|N/A 👻|
|[`ava/use-true-false`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/use-true-false.md)|error 🚨|N/A 👻|
|[`babel/new-cap`](https://eslint.org/docs/rules/new-cap)|"babel/new-cap"|N/A 👻|
|[`babel/no-invalid-this`](https://eslint.org/docs/rules/no-invalid-this)|error 🚨|N/A 👻|
|[`babel/object-curly-spacing`](https://eslint.org/docs/rules/object-curly-spacing)|"babel/object-curly-spacing"|N/A 👻|
|[`babel/valid-typeof`](https://eslint.org/docs/rules/valid-typeof)|error 🚨|N/A 👻|
|[`block-scoped-var`](https://eslint.org/docs/rules/block-scoped-var)|error 🚨|"block-scoped-var"|
|[`block-spacing`](https://eslint.org/docs/rules/block-spacing)|"block-spacing"|"block-spacing"|
|[`brace-style`](https://eslint.org/docs/rules/brace-style)|"brace-style"|"brace-style"|
|[`callback-return`](https://eslint.org/docs/rules/callback-return)|error 🚨|"callback-return"|
|[`camelcase`](https://eslint.org/docs/rules/camelcase)|"camelcase"|"camelcase"|
|[`capitalized-comments`](https://eslint.org/docs/rules/capitalized-comments)|"capitalized-comments"|"capitalized-comments"|
|[`class-methods-use-this`](https://eslint.org/docs/rules/class-methods-use-this)|error 🚨|"class-methods-use-this"|
|[`comma-dangle`](https://eslint.org/docs/rules/comma-dangle)|"comma-dangle"|"comma-dangle"|
|[`comma-spacing`](https://eslint.org/docs/rules/comma-spacing)|"comma-spacing"|"comma-spacing"|
|[`comma-style`](https://eslint.org/docs/rules/comma-style)|"comma-style"|"comma-style"|
|[`complexity`](https://eslint.org/docs/rules/complexity)|"complexity"|"complexity"|
|[`computed-property-spacing`](https://eslint.org/docs/rules/computed-property-spacing)|"computed-property-spacing"|"computed-property-spacing"|
|[`consistent-return`](https://eslint.org/docs/rules/consistent-return)|error 🚨|"consistent-return"|
|[`consistent-this`](https://eslint.org/docs/rules/consistent-this)|"consistent-this"|"consistent-this"|
|[`constructor-super`](https://eslint.org/docs/rules/constructor-super)|error 🚨|"constructor-super"|
|[`curly`](https://eslint.org/docs/rules/curly)|error 🚨|"curly"|
|[`default-case`](https://eslint.org/docs/rules/default-case)|"default-case"|"default-case"|
|[`dot-location`](https://eslint.org/docs/rules/dot-location)|"dot-location"|"dot-location"|
|[`dot-notation`](https://eslint.org/docs/rules/dot-notation)|error 🚨|"dot-notation"|
|[`eol-last`](https://eslint.org/docs/rules/eol-last)|error 🚨|"eol-last"|
|[`eqeqeq`](https://eslint.org/docs/rules/eqeqeq)|error 🚨|"eqeqeq"|
|`filenames/match-exported`|error 🚨|N/A 👻|
|`filenames/match-regex`|"filenames/match-regex"|N/A 👻|
|`filenames/no-index`|"filenames/no-index"|N/A 👻|
|`flowtype/boolean-style`|"flowtype/boolean-style"|N/A 👻|
|`flowtype/define-flow-type`|warn ⚠️|N/A 👻|
|`flowtype/delimiter-dangle`|"flowtype/delimiter-dangle"|N/A 👻|
|`flowtype/generic-spacing`|"flowtype/generic-spacing"|N/A 👻|
|`flowtype/newline-after-flow-annotation`|error 🚨|N/A 👻|
|`flowtype/no-existential-type`|"flowtype/no-existential-type"|N/A 👻|
|`flowtype/no-flow-fix-me-comments`|warn ⚠️|N/A 👻|
|`flowtype/no-mutable-array`|error 🚨|N/A 👻|
|`flowtype/no-primitive-constructor-types`|error 🚨|N/A 👻|
|`flowtype/no-types-missing-file-annotation`|error 🚨|N/A 👻|
|[`flowtype/no-unused-expressions`](https://eslint.org/docs/rules/no-unused-expressions)|"flowtype/no-unused-expressions"|N/A 👻|
|`flowtype/no-weak-types`|error 🚨|N/A 👻|
|`flowtype/object-type-delimiter`|"flowtype/object-type-delimiter"|N/A 👻|
|`flowtype/require-exact-type`|warn ⚠️|N/A 👻|
|`flowtype/require-parameter-type`|"flowtype/require-parameter-type"|N/A 👻|
|`flowtype/require-return-type`|"flowtype/require-return-type"|N/A 👻|
|`flowtype/require-types-at-top`|error 🚨|N/A 👻|
|`flowtype/require-valid-file-annotation`|error 🚨|N/A 👻|
|`flowtype/require-variable-type`|"flowtype/require-variable-type"|N/A 👻|
|`flowtype/semi`|"flowtype/semi"|N/A 👻|
|`flowtype/sort-keys`|"flowtype/sort-keys"|N/A 👻|
|`flowtype/space-after-type-colon`|"flowtype/space-after-type-colon"|N/A 👻|
|`flowtype/space-before-generic-bracket`|"flowtype/space-before-generic-bracket"|N/A 👻|
|`flowtype/space-before-type-colon`|"flowtype/space-before-type-colon"|N/A 👻|
|`flowtype/type-id-match`|"flowtype/type-id-match"|N/A 👻|
|`flowtype/type-import-style`|"flowtype/type-import-style"|N/A 👻|
|`flowtype/union-intersection-spacing`|"flowtype/union-intersection-spacing"|N/A 👻|
|`flowtype/use-flow-type`|warn ⚠️|N/A 👻|
|[`for-direction`](https://eslint.org/docs/rules/for-direction)|error 🚨|"for-direction"|
|[`func-call-spacing`](https://eslint.org/docs/rules/func-call-spacing)|"func-call-spacing"|"func-call-spacing"|
|[`func-name-matching`](https://eslint.org/docs/rules/func-name-matching)|error 🚨|"func-name-matching"|
|[`func-names`](https://eslint.org/docs/rules/func-names)|"func-names"|"func-names"|
|[`func-style`](https://eslint.org/docs/rules/func-style)|"func-style"|"func-style"|
|[`function-paren-newline`](https://eslint.org/docs/rules/function-paren-newline)|"function-paren-newline"|"function-paren-newline"|
|[`generator-star-spacing`](https://eslint.org/docs/rules/generator-star-spacing)|"generator-star-spacing"|"generator-star-spacing"|
|[`getter-return`](https://eslint.org/docs/rules/getter-return)|N/A 👻|"getter-return"|
|[`global-require`](https://eslint.org/docs/rules/global-require)|error 🚨|"global-require"|
|[`guard-for-in`](https://eslint.org/docs/rules/guard-for-in)|error 🚨|"guard-for-in"|
|[`handle-callback-err`](https://eslint.org/docs/rules/handle-callback-err)|error 🚨|"handle-callback-err"|
|[`id-blacklist`](https://eslint.org/docs/rules/id-blacklist)|N/A 👻|"id-blacklist"|
|[`id-length`](https://eslint.org/docs/rules/id-length)|"id-length"|"id-length"|
|[`id-match`](https://eslint.org/docs/rules/id-match)|"id-match"|"id-match"|
|[`implicit-arrow-linebreak`](https://eslint.org/docs/rules/implicit-arrow-linebreak)|"implicit-arrow-linebreak"|"implicit-arrow-linebreak"|
|[`import/default`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/default.md)|error 🚨|"import/default"|
|[`import/dynamic-import-chunkname`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/dynamic-import-chunkname.md)|N/A 👻|"import/dynamic-import-chunkname"|
|[`import/export`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/export.md)|error 🚨|"import/export"|
|[`import/exports-last`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/exports-last.md)|error 🚨|"import/exports-last"|
|[`import/extensions`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/extensions.md)|"import/extensions"|"import/extensions"|
|[`import/first`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/first.md)|"import/first"|"import/first"|
|[`import/group-exports`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/group-exports.md)|"import/group-exports"|"import/group-exports"|
|[`import/imports-first`](https://github.com/benmosher/eslint-plugin-import/blob/7b25c1cb95ee18acc1531002fd343e1e6031f9ed/docs/rules/imports-first.md)|N/A 👻|"import/imports-first"|
|[`import/max-dependencies`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/max-dependencies.md)|"import/max-dependencies"|"import/max-dependencies"|
|[`import/named`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/named.md)|error 🚨|"import/named"|
|[`import/namespace`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/namespace.md)|error 🚨|"import/namespace"|
|[`import/newline-after-import`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/newline-after-import.md)|error 🚨|"import/newline-after-import"|
|[`import/no-absolute-path`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-absolute-path.md)|error 🚨|"import/no-absolute-path"|
|[`import/no-amd`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-amd.md)|error 🚨|"import/no-amd"|
|[`import/no-anonymous-default-export`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-anonymous-default-export.md)|"import/no-anonymous-default-export"|"import/no-anonymous-default-export"|
|[`import/no-commonjs`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-commonjs.md)|error 🚨|"import/no-commonjs"|
|[`import/no-cycle`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-cycle.md)|error 🚨|"import/no-cycle"|
|`import/no-default-export`|"import/no-default-export"|"import/no-default-export"|
|[`import/no-deprecated`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-deprecated.md)|warn ⚠️|"import/no-deprecated"|
|[`import/no-duplicates`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-duplicates.md)|"import/no-duplicates"|"import/no-duplicates"|
|[`import/no-dynamic-require`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-dynamic-require.md)|error 🚨|"import/no-dynamic-require"|
|[`import/no-extraneous-dependencies`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-extraneous-dependencies.md)|"import/no-extraneous-dependencies"|"import/no-extraneous-dependencies"|
|[`import/no-internal-modules`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-internal-modules.md)|"import/no-internal-modules"|"import/no-internal-modules"|
|[`import/no-mutable-exports`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-mutable-exports.md)|error 🚨|"import/no-mutable-exports"|
|[`import/no-named-as-default`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-named-as-default.md)|error 🚨|"import/no-named-as-default"|
|[`import/no-named-as-default-member`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-named-as-default-member.md)|error 🚨|"import/no-named-as-default-member"|
|[`import/no-named-default`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-named-default.md)|error 🚨|"import/no-named-default"|
|[`import/no-namespace`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-namespace.md)|error 🚨|"import/no-namespace"|
|[`import/no-nodejs-modules`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-nodejs-modules.md)|"import/no-nodejs-modules"|"import/no-nodejs-modules"|
|[`import/no-relative-parent-imports`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-relative-parent-imports.md)|"import/no-relative-parent-imports"|"import/no-relative-parent-imports"|
|[`import/no-restricted-paths`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-restricted-paths.md)|"import/no-restricted-paths"|"import/no-restricted-paths"|
|[`import/no-self-import`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-self-import.md)|error 🚨|"import/no-self-import"|
|[`import/no-unassigned-import`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-unassigned-import.md)|error 🚨|"import/no-unassigned-import"|
|[`import/no-unresolved`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-unresolved.md)|error 🚨|"import/no-unresolved"|
|[`import/no-useless-path-segments`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-useless-path-segments.md)|error 🚨|"import/no-useless-path-segments"|
|[`import/no-webpack-loader-syntax`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-webpack-loader-syntax.md)|error 🚨|"import/no-webpack-loader-syntax"|
|[`import/order`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/order.md)|"import/order"|"import/order"|
|[`import/prefer-default-export`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/prefer-default-export.md)|warn ⚠️|"import/prefer-default-export"|
|[`import/unambiguous`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/unambiguous.md)|warn ⚠️|"import/unambiguous"|
|[`indent`](https://eslint.org/docs/rules/indent)|"indent"|"indent"|
|[`init-declarations`](https://eslint.org/docs/rules/init-declarations)|"init-declarations"|"init-declarations"|
|[`jest/no-disabled-tests`](https://github.com/jest-community/eslint-plugin-jest/blob/v21.23.0/docs/rules/no-disabled-tests.md)|"jest/no-disabled-tests"|N/A 👻|
|[`jest/no-focused-tests`](https://github.com/jest-community/eslint-plugin-jest/blob/v21.23.0/docs/rules/no-focused-tests.md)|"jest/no-focused-tests"|N/A 👻|
|[`jest/no-identical-title`](https://github.com/jest-community/eslint-plugin-jest/blob/v21.23.0/docs/rules/no-identical-title.md)|"jest/no-identical-title"|N/A 👻|
|[`jest/valid-expect`](https://github.com/jest-community/eslint-plugin-jest/blob/v21.23.0/docs/rules/valid-expect.md)|"jest/valid-expect"|N/A 👻|
|`jsdoc/check-param-names`|warn ⚠️|N/A 👻|
|`jsdoc/check-tag-names`|warn ⚠️|N/A 👻|
|`jsdoc/check-types`|warn ⚠️|N/A 👻|
|`jsdoc/newline-after-description`|"jsdoc/newline-after-description"|N/A 👻|
|`jsdoc/require-description-complete-sentence`|"jsdoc/require-description-complete-sentence"|N/A 👻|
|`jsdoc/require-hyphen-before-param-description`|"jsdoc/require-hyphen-before-param-description"|N/A 👻|
|`jsdoc/require-param`|"jsdoc/require-param"|N/A 👻|
|`jsdoc/require-param-description`|"jsdoc/require-param-description"|N/A 👻|
|`jsdoc/require-param-name`|error 🚨|N/A 👻|
|`jsdoc/require-param-type`|"jsdoc/require-param-type"|N/A 👻|
|`jsdoc/require-returns-description`|"jsdoc/require-returns-description"|N/A 👻|
|`jsdoc/require-returns-type`|"jsdoc/require-returns-type"|N/A 👻|
|[`jsx-a11y/accessible-emoji`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/accessible-emoji.md)|N/A 👻|"jsx-a11y/accessible-emoji"|
|[`jsx-a11y/alt-text`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/alt-text.md)|N/A 👻|"jsx-a11y/alt-text"|
|[`jsx-a11y/anchor-has-content`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/anchor-has-content.md)|N/A 👻|"jsx-a11y/anchor-has-content"|
|[`jsx-a11y/anchor-is-valid`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/anchor-is-valid.md)|N/A 👻|"jsx-a11y/anchor-is-valid"|
|[`jsx-a11y/aria-activedescendant-has-tabindex`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/aria-activedescendant-has-tabindex.md)|N/A 👻|"jsx-a11y/aria-activedescendant-has-tabindex"|
|[`jsx-a11y/aria-props`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/aria-props.md)|N/A 👻|"jsx-a11y/aria-props"|
|[`jsx-a11y/aria-proptypes`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/aria-proptypes.md)|N/A 👻|"jsx-a11y/aria-proptypes"|
|[`jsx-a11y/aria-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/aria-role.md)|N/A 👻|"jsx-a11y/aria-role"|
|[`jsx-a11y/aria-unsupported-elements`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/aria-unsupported-elements.md)|N/A 👻|"jsx-a11y/aria-unsupported-elements"|
|[`jsx-a11y/click-events-have-key-events`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/click-events-have-key-events.md)|N/A 👻|"jsx-a11y/click-events-have-key-events"|
|[`jsx-a11y/heading-has-content`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/heading-has-content.md)|N/A 👻|"jsx-a11y/heading-has-content"|
|[`jsx-a11y/html-has-lang`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/html-has-lang.md)|N/A 👻|"jsx-a11y/html-has-lang"|
|[`jsx-a11y/iframe-has-title`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/iframe-has-title.md)|N/A 👻|"jsx-a11y/iframe-has-title"|
|[`jsx-a11y/img-redundant-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/img-redundant-alt.md)|N/A 👻|"jsx-a11y/img-redundant-alt"|
|[`jsx-a11y/interactive-supports-focus`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/interactive-supports-focus.md)|N/A 👻|"jsx-a11y/interactive-supports-focus"|
|`jsx-a11y/label-has-associated-control`|N/A 👻|"jsx-a11y/label-has-associated-control"|
|[`jsx-a11y/label-has-for`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/label-has-for.md)|N/A 👻|"jsx-a11y/label-has-for"|
|[`jsx-a11y/lang`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/lang.md)|N/A 👻|"jsx-a11y/lang"|
|[`jsx-a11y/media-has-caption`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/media-has-caption.md)|N/A 👻|"jsx-a11y/media-has-caption"|
|[`jsx-a11y/mouse-events-have-key-events`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/mouse-events-have-key-events.md)|N/A 👻|"jsx-a11y/mouse-events-have-key-events"|
|[`jsx-a11y/no-access-key`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-access-key.md)|N/A 👻|"jsx-a11y/no-access-key"|
|[`jsx-a11y/no-autofocus`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-autofocus.md)|N/A 👻|"jsx-a11y/no-autofocus"|
|[`jsx-a11y/no-distracting-elements`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-distracting-elements.md)|N/A 👻|"jsx-a11y/no-distracting-elements"|
|[`jsx-a11y/no-interactive-element-to-noninteractive-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-interactive-element-to-noninteractive-role.md)|N/A 👻|"jsx-a11y/no-interactive-element-to-noninteractive-role"|
|[`jsx-a11y/no-noninteractive-element-interactions`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-noninteractive-element-interactions.md)|N/A 👻|"jsx-a11y/no-noninteractive-element-interactions"|
|[`jsx-a11y/no-noninteractive-element-to-interactive-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-noninteractive-element-to-interactive-role.md)|N/A 👻|"jsx-a11y/no-noninteractive-element-to-interactive-role"|
|[`jsx-a11y/no-noninteractive-tabindex`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-noninteractive-tabindex.md)|N/A 👻|"jsx-a11y/no-noninteractive-tabindex"|
|[`jsx-a11y/no-onchange`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-onchange.md)|N/A 👻|"jsx-a11y/no-onchange"|
|[`jsx-a11y/no-redundant-roles`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-redundant-roles.md)|N/A 👻|"jsx-a11y/no-redundant-roles"|
|[`jsx-a11y/no-static-element-interactions`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-static-element-interactions.md)|N/A 👻|"jsx-a11y/no-static-element-interactions"|
|[`jsx-a11y/role-has-required-aria-props`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/role-has-required-aria-props.md)|N/A 👻|"jsx-a11y/role-has-required-aria-props"|
|[`jsx-a11y/role-supports-aria-props`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/role-supports-aria-props.md)|N/A 👻|"jsx-a11y/role-supports-aria-props"|
|[`jsx-a11y/scope`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/scope.md)|N/A 👻|"jsx-a11y/scope"|
|[`jsx-a11y/tabindex-no-positive`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/tabindex-no-positive.md)|N/A 👻|"jsx-a11y/tabindex-no-positive"|
|[`jsx-quotes`](https://eslint.org/docs/rules/jsx-quotes)|"jsx-quotes"|"jsx-quotes"|
|[`key-spacing`](https://eslint.org/docs/rules/key-spacing)|"key-spacing"|"key-spacing"|
|[`keyword-spacing`](https://eslint.org/docs/rules/keyword-spacing)|"keyword-spacing"|"keyword-spacing"|
|[`line-comment-position`](https://eslint.org/docs/rules/line-comment-position)|"line-comment-position"|"line-comment-position"|
|[`linebreak-style`](https://eslint.org/docs/rules/linebreak-style)|"linebreak-style"|"linebreak-style"|
|[`lines-around-comment`](https://eslint.org/docs/rules/lines-around-comment)|"lines-around-comment"|"lines-around-comment"|
|[`lines-around-directive`](https://eslint.org/docs/rules/lines-around-directive)|"lines-around-directive"|"lines-around-directive"|
|[`lines-between-class-members`](https://eslint.org/docs/rules/lines-between-class-members)|"lines-between-class-members"|"lines-between-class-members"|
|[`lodash/callback-binding`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/callback-binding.md)|warn ⚠️|N/A 👻|
|[`lodash/chain-style`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/chain-style.md)|"lodash/chain-style"|N/A 👻|
|[`lodash/chaining`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/chaining.md)|"lodash/chaining"|N/A 👻|
|[`lodash/collection-method-value`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/collection-method-value.md)|warn ⚠️|N/A 👻|
|[`lodash/collection-return`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/collection-return.md)|warn ⚠️|N/A 👻|
|[`lodash/consistent-compose`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/consistent-compose.md)|"lodash/consistent-compose"|N/A 👻|
|[`lodash/identity-shorthand`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/identity-shorthand.md)|"lodash/identity-shorthand"|N/A 👻|
|[`lodash/import-scope`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/import-scope.md)|"lodash/import-scope"|N/A 👻|
|[`lodash/matches-prop-shorthand`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/matches-prop-shorthand.md)|warn ⚠️|N/A 👻|
|[`lodash/matches-shorthand`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/matches-shorthand.md)|"lodash/matches-shorthand"|N/A 👻|
|[`lodash/no-commit`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/no-commit.md)|warn ⚠️|N/A 👻|
|[`lodash/no-double-unwrap`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/no-double-unwrap.md)|warn ⚠️|N/A 👻|
|[`lodash/no-extra-args`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/no-extra-args.md)|warn ⚠️|N/A 👻|
|[`lodash/path-style`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/path-style.md)|"lodash/path-style"|N/A 👻|
|[`lodash/prefer-compact`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-compact.md)|warn ⚠️|N/A 👻|
|[`lodash/prefer-constant`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-constant.md)|"lodash/prefer-constant"|N/A 👻|
|[`lodash/prefer-filter`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-filter.md)|"lodash/prefer-filter"|N/A 👻|
|[`lodash/prefer-find`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-find.md)|error 🚨|N/A 👻|
|[`lodash/prefer-get`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-get.md)|"lodash/prefer-get"|N/A 👻|
|[`lodash/prefer-immutable-method`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-immutable-method.md)|error 🚨|N/A 👻|
|[`lodash/prefer-includes`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-includes.md)|warn ⚠️|N/A 👻|
|[`lodash/prefer-invoke-map`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-invoke-map.md)|"lodash/prefer-invoke-map"|N/A 👻|
|[`lodash/prefer-is-nil`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-is-nil.md)|warn ⚠️|N/A 👻|
|[`lodash/prefer-lodash-chain`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-lodash-chain.md)|warn ⚠️|N/A 👻|
|[`lodash/prefer-lodash-method`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-lodash-method.md)|"lodash/prefer-lodash-method"|N/A 👻|
|[`lodash/prefer-lodash-typecheck`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-lodash-typecheck.md)|warn ⚠️|N/A 👻|
|[`lodash/prefer-map`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-map.md)|warn ⚠️|N/A 👻|
|[`lodash/prefer-matches`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-matches.md)|warn ⚠️|N/A 👻|
|[`lodash/prefer-noop`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-noop.md)|"lodash/prefer-noop"|N/A 👻|
|[`lodash/prefer-over-quantifier`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-over-quantifier.md)|warn ⚠️|N/A 👻|
|[`lodash/prefer-reject`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-reject.md)|"lodash/prefer-reject"|N/A 👻|
|[`lodash/prefer-startswith`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-startswith.md)|"lodash/prefer-startswith"|N/A 👻|
|[`lodash/prefer-thru`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-thru.md)|warn ⚠️|N/A 👻|
|[`lodash/prefer-times`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-times.md)|warn ⚠️|N/A 👻|
|[`lodash/prefer-wrapper-method`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-wrapper-method.md)|warn ⚠️|N/A 👻|
|[`lodash/preferred-alias`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/preferred-alias.md)|warn ⚠️|N/A 👻|
|[`lodash/prop-shorthand`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prop-shorthand.md)|warn ⚠️|N/A 👻|
|[`lodash/unwrap`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/unwrap.md)|warn ⚠️|N/A 👻|
|[`max-classes-per-file`](https://eslint.org/docs/rules/max-classes-per-file)|N/A 👻|"max-classes-per-file"|
|[`max-depth`](https://eslint.org/docs/rules/max-depth)|N/A 👻|"max-depth"|
|[`max-len`](https://eslint.org/docs/rules/max-len)|"max-len"|"max-len"|
|[`max-lines`](https://eslint.org/docs/rules/max-lines)|N/A 👻|"max-lines"|
|[`max-lines-per-function`](https://eslint.org/docs/rules/max-lines-per-function)|N/A 👻|"max-lines-per-function"|
|[`max-nested-callbacks`](https://eslint.org/docs/rules/max-nested-callbacks)|"max-nested-callbacks"|"max-nested-callbacks"|
|[`max-params`](https://eslint.org/docs/rules/max-params)|N/A 👻|"max-params"|
|[`max-statements`](https://eslint.org/docs/rules/max-statements)|N/A 👻|"max-statements"|
|[`max-statements-per-line`](https://eslint.org/docs/rules/max-statements-per-line)|"max-statements-per-line"|"max-statements-per-line"|
|`mocha/max-top-level-suites`|"mocha/max-top-level-suites"|N/A 👻|
|`mocha/no-exclusive-tests`|error 🚨|N/A 👻|
|`mocha/no-hooks-for-single-case`|warn ⚠️|N/A 👻|
|`mocha/no-identical-title`|error 🚨|N/A 👻|
|`mocha/no-nested-tests`|error 🚨|N/A 👻|
|`mocha/no-return-and-callback`|error 🚨|N/A 👻|
|`mocha/no-setup-in-describe`|error 🚨|N/A 👻|
|`mocha/no-top-level-hooks`|error 🚨|N/A 👻|
|[`multiline-comment-style`](https://eslint.org/docs/rules/multiline-comment-style)|"multiline-comment-style"|"multiline-comment-style"|
|[`multiline-ternary`](https://eslint.org/docs/rules/multiline-ternary)|"multiline-ternary"|"multiline-ternary"|
|[`new-cap`](https://eslint.org/docs/rules/new-cap)|"new-cap"|"new-cap"|
|[`new-parens`](https://eslint.org/docs/rules/new-parens)|error 🚨|"new-parens"|
|[`newline-after-var`](https://eslint.org/docs/rules/newline-after-var)|"newline-after-var"|"newline-after-var"|
|[`newline-before-return`](https://eslint.org/docs/rules/newline-before-return)|error 🚨|"newline-before-return"|
|[`newline-per-chained-call`](https://eslint.org/docs/rules/newline-per-chained-call)|"newline-per-chained-call"|"newline-per-chained-call"|
|[`no-alert`](https://eslint.org/docs/rules/no-alert)|error 🚨|"no-alert"|
|[`no-array-constructor`](https://eslint.org/docs/rules/no-array-constructor)|error 🚨|"no-array-constructor"|
|[`no-async-promise-executor`](https://eslint.org/docs/rules/no-async-promise-executor)|error 🚨|"no-async-promise-executor"|
|[`no-await-in-loop`](https://eslint.org/docs/rules/no-await-in-loop)|"no-await-in-loop"|"no-await-in-loop"|
|[`no-bitwise`](https://eslint.org/docs/rules/no-bitwise)|N/A 👻|"no-bitwise"|
|[`no-buffer-constructor`](https://eslint.org/docs/rules/no-buffer-constructor)|error 🚨|"no-buffer-constructor"|
|[`no-caller`](https://eslint.org/docs/rules/no-caller)|error 🚨|"no-caller"|
|[`no-case-declarations`](https://eslint.org/docs/rules/no-case-declarations)|error 🚨|"no-case-declarations"|
|[`no-catch-shadow`](https://eslint.org/docs/rules/no-catch-shadow)|error 🚨|"no-catch-shadow"|
|[`no-class-assign`](https://eslint.org/docs/rules/no-class-assign)|error 🚨|"no-class-assign"|
|[`no-compare-neg-zero`](https://eslint.org/docs/rules/no-compare-neg-zero)|error 🚨|"no-compare-neg-zero"|
|[`no-cond-assign`](https://eslint.org/docs/rules/no-cond-assign)|error 🚨|"no-cond-assign"|
|[`no-confusing-arrow`](https://eslint.org/docs/rules/no-confusing-arrow)|error 🚨|"no-confusing-arrow"|
|[`no-console`](https://eslint.org/docs/rules/no-console)|error 🚨|"no-console"|
|[`no-const-assign`](https://eslint.org/docs/rules/no-const-assign)|error 🚨|"no-const-assign"|
|[`no-constant-condition`](https://eslint.org/docs/rules/no-constant-condition)|warn ⚠️|"no-constant-condition"|
|[`no-continue`](https://eslint.org/docs/rules/no-continue)|error 🚨|"no-continue"|
|[`no-control-regex`](https://eslint.org/docs/rules/no-control-regex)|error 🚨|"no-control-regex"|
|[`no-debugger`](https://eslint.org/docs/rules/no-debugger)|warn ⚠️|"no-debugger"|
|[`no-delete-var`](https://eslint.org/docs/rules/no-delete-var)|error 🚨|"no-delete-var"|
|[`no-div-regex`](https://eslint.org/docs/rules/no-div-regex)|error 🚨|"no-div-regex"|
|[`no-dupe-args`](https://eslint.org/docs/rules/no-dupe-args)|error 🚨|"no-dupe-args"|
|[`no-dupe-class-members`](https://eslint.org/docs/rules/no-dupe-class-members)|error 🚨|"no-dupe-class-members"|
|[`no-dupe-keys`](https://eslint.org/docs/rules/no-dupe-keys)|error 🚨|"no-dupe-keys"|
|[`no-duplicate-case`](https://eslint.org/docs/rules/no-duplicate-case)|error 🚨|"no-duplicate-case"|
|[`no-duplicate-imports`](https://eslint.org/docs/rules/no-duplicate-imports)|error 🚨|"no-duplicate-imports"|
|[`no-else-return`](https://eslint.org/docs/rules/no-else-return)|"no-else-return"|"no-else-return"|
|[`no-empty`](https://eslint.org/docs/rules/no-empty)|error 🚨|"no-empty"|
|[`no-empty-character-class`](https://eslint.org/docs/rules/no-empty-character-class)|error 🚨|"no-empty-character-class"|
|[`no-empty-function`](https://eslint.org/docs/rules/no-empty-function)|N/A 👻|"no-empty-function"|
|[`no-empty-pattern`](https://eslint.org/docs/rules/no-empty-pattern)|error 🚨|"no-empty-pattern"|
|[`no-eq-null`](https://eslint.org/docs/rules/no-eq-null)|error 🚨|"no-eq-null"|
|[`no-eval`](https://eslint.org/docs/rules/no-eval)|error 🚨|"no-eval"|
|[`no-ex-assign`](https://eslint.org/docs/rules/no-ex-assign)|error 🚨|"no-ex-assign"|
|[`no-extend-native`](https://eslint.org/docs/rules/no-extend-native)|error 🚨|"no-extend-native"|
|[`no-extra-bind`](https://eslint.org/docs/rules/no-extra-bind)|error 🚨|"no-extra-bind"|
|[`no-extra-boolean-cast`](https://eslint.org/docs/rules/no-extra-boolean-cast)|"no-extra-boolean-cast"|"no-extra-boolean-cast"|
|[`no-extra-label`](https://eslint.org/docs/rules/no-extra-label)|N/A 👻|"no-extra-label"|
|[`no-extra-parens`](https://eslint.org/docs/rules/no-extra-parens)|error 🚨|"no-extra-parens"|
|[`no-extra-semi`](https://eslint.org/docs/rules/no-extra-semi)|error 🚨|"no-extra-semi"|
|[`no-fallthrough`](https://eslint.org/docs/rules/no-fallthrough)|error 🚨|"no-fallthrough"|
|[`no-floating-decimal`](https://eslint.org/docs/rules/no-floating-decimal)|error 🚨|"no-floating-decimal"|
|[`no-func-assign`](https://eslint.org/docs/rules/no-func-assign)|error 🚨|"no-func-assign"|
|[`no-global-assign`](https://eslint.org/docs/rules/no-global-assign)|error 🚨|"no-global-assign"|
|[`no-implicit-coercion`](https://eslint.org/docs/rules/no-implicit-coercion)|error 🚨|"no-implicit-coercion"|
|[`no-implicit-globals`](https://eslint.org/docs/rules/no-implicit-globals)|"no-implicit-globals"|"no-implicit-globals"|
|[`no-implied-eval`](https://eslint.org/docs/rules/no-implied-eval)|error 🚨|"no-implied-eval"|
|[`no-inline-comments`](https://eslint.org/docs/rules/no-inline-comments)|error 🚨|"no-inline-comments"|
|[`no-inner-declarations`](https://eslint.org/docs/rules/no-inner-declarations)|error 🚨|"no-inner-declarations"|
|[`no-invalid-regexp`](https://eslint.org/docs/rules/no-invalid-regexp)|error 🚨|"no-invalid-regexp"|
|[`no-invalid-this`](https://eslint.org/docs/rules/no-invalid-this)|"no-invalid-this"|"no-invalid-this"|
|[`no-irregular-whitespace`](https://eslint.org/docs/rules/no-irregular-whitespace)|error 🚨|"no-irregular-whitespace"|
|[`no-iterator`](https://eslint.org/docs/rules/no-iterator)|error 🚨|"no-iterator"|
|[`no-label-var`](https://eslint.org/docs/rules/no-label-var)|error 🚨|"no-label-var"|
|[`no-labels`](https://eslint.org/docs/rules/no-labels)|error 🚨|"no-labels"|
|[`no-lone-blocks`](https://eslint.org/docs/rules/no-lone-blocks)|error 🚨|"no-lone-blocks"|
|[`no-lonely-if`](https://eslint.org/docs/rules/no-lonely-if)|error 🚨|"no-lonely-if"|
|[`no-loop-func`](https://eslint.org/docs/rules/no-loop-func)|error 🚨|"no-loop-func"|
|[`no-magic-numbers`](https://eslint.org/docs/rules/no-magic-numbers)|"no-magic-numbers"|"no-magic-numbers"|
|[`no-misleading-character-class`](https://eslint.org/docs/rules/no-misleading-character-class)|error 🚨|"no-misleading-character-class"|
|[`no-mixed-operators`](https://eslint.org/docs/rules/no-mixed-operators)|N/A 👻|"no-mixed-operators"|
|[`no-mixed-requires`](https://eslint.org/docs/rules/no-mixed-requires)|"no-mixed-requires"|"no-mixed-requires"|
|[`no-mixed-spaces-and-tabs`](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs)|error 🚨|"no-mixed-spaces-and-tabs"|
|[`no-multi-assign`](https://eslint.org/docs/rules/no-multi-assign)|N/A 👻|"no-multi-assign"|
|[`no-multi-spaces`](https://eslint.org/docs/rules/no-multi-spaces)|error 🚨|"no-multi-spaces"|
|[`no-multi-str`](https://eslint.org/docs/rules/no-multi-str)|error 🚨|"no-multi-str"|
|[`no-multiple-empty-lines`](https://eslint.org/docs/rules/no-multiple-empty-lines)|"no-multiple-empty-lines"|"no-multiple-empty-lines"|
|[`no-native-reassign`](https://eslint.org/docs/rules/no-native-reassign)|error 🚨|"no-native-reassign"|
|[`no-negated-condition`](https://eslint.org/docs/rules/no-negated-condition)|error 🚨|"no-negated-condition"|
|[`no-negated-in-lhs`](https://eslint.org/docs/rules/no-negated-in-lhs)|error 🚨|"no-negated-in-lhs"|
|[`no-nested-ternary`](https://eslint.org/docs/rules/no-nested-ternary)|error 🚨|"no-nested-ternary"|
|[`no-new`](https://eslint.org/docs/rules/no-new)|error 🚨|"no-new"|
|[`no-new-func`](https://eslint.org/docs/rules/no-new-func)|error 🚨|"no-new-func"|
|[`no-new-object`](https://eslint.org/docs/rules/no-new-object)|error 🚨|"no-new-object"|
|[`no-new-require`](https://eslint.org/docs/rules/no-new-require)|error 🚨|"no-new-require"|
|[`no-new-symbol`](https://eslint.org/docs/rules/no-new-symbol)|error 🚨|"no-new-symbol"|
|[`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)|error 🚨|"no-new-wrappers"|
|[`no-obj-calls`](https://eslint.org/docs/rules/no-obj-calls)|error 🚨|"no-obj-calls"|
|[`no-octal`](https://eslint.org/docs/rules/no-octal)|error 🚨|"no-octal"|
|[`no-octal-escape`](https://eslint.org/docs/rules/no-octal-escape)|error 🚨|"no-octal-escape"|
|[`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign)|"no-param-reassign"|"no-param-reassign"|
|[`no-path-concat`](https://eslint.org/docs/rules/no-path-concat)|error 🚨|"no-path-concat"|
|[`no-plusplus`](https://eslint.org/docs/rules/no-plusplus)|N/A 👻|"no-plusplus"|
|[`no-process-env`](https://eslint.org/docs/rules/no-process-env)|error 🚨|"no-process-env"|
|[`no-process-exit`](https://eslint.org/docs/rules/no-process-exit)|error 🚨|"no-process-exit"|
|[`no-proto`](https://eslint.org/docs/rules/no-proto)|error 🚨|"no-proto"|
|[`no-prototype-builtins`](https://eslint.org/docs/rules/no-prototype-builtins)|N/A 👻|"no-prototype-builtins"|
|[`no-redeclare`](https://eslint.org/docs/rules/no-redeclare)|"no-redeclare"|"no-redeclare"|
|[`no-regex-spaces`](https://eslint.org/docs/rules/no-regex-spaces)|error 🚨|"no-regex-spaces"|
|[`no-restricted-globals`](https://eslint.org/docs/rules/no-restricted-globals)|"no-restricted-globals"|"no-restricted-globals"|
|[`no-restricted-imports`](https://eslint.org/docs/rules/no-restricted-imports)|N/A 👻|"no-restricted-imports"|
|[`no-restricted-modules`](https://eslint.org/docs/rules/no-restricted-modules)|"no-restricted-modules"|"no-restricted-modules"|
|[`no-restricted-properties`](https://eslint.org/docs/rules/no-restricted-properties)|"no-restricted-properties"|"no-restricted-properties"|
|[`no-restricted-syntax`](https://eslint.org/docs/rules/no-restricted-syntax)|"no-restricted-syntax"|"no-restricted-syntax"|
|[`no-return-assign`](https://eslint.org/docs/rules/no-return-assign)|error 🚨|"no-return-assign"|
|[`no-return-await`](https://eslint.org/docs/rules/no-return-await)|error 🚨|"no-return-await"|
|[`no-script-url`](https://eslint.org/docs/rules/no-script-url)|error 🚨|"no-script-url"|
|[`no-self-assign`](https://eslint.org/docs/rules/no-self-assign)|error 🚨|"no-self-assign"|
|[`no-self-compare`](https://eslint.org/docs/rules/no-self-compare)|error 🚨|"no-self-compare"|
|[`no-sequences`](https://eslint.org/docs/rules/no-sequences)|error 🚨|"no-sequences"|
|[`no-shadow`](https://eslint.org/docs/rules/no-shadow)|"no-shadow"|"no-shadow"|
|[`no-shadow-restricted-names`](https://eslint.org/docs/rules/no-shadow-restricted-names)|error 🚨|"no-shadow-restricted-names"|
|[`no-spaced-func`](https://eslint.org/docs/rules/no-spaced-func)|error 🚨|"no-spaced-func"|
|[`no-sparse-arrays`](https://eslint.org/docs/rules/no-sparse-arrays)|error 🚨|"no-sparse-arrays"|
|[`no-sync`](https://eslint.org/docs/rules/no-sync)|"no-sync"|"no-sync"|
|[`no-tabs`](https://eslint.org/docs/rules/no-tabs)|error 🚨|"no-tabs"|
|[`no-template-curly-in-string`](https://eslint.org/docs/rules/no-template-curly-in-string)|error 🚨|"no-template-curly-in-string"|
|[`no-ternary`](https://eslint.org/docs/rules/no-ternary)|"no-ternary"|"no-ternary"|
|[`no-this-before-super`](https://eslint.org/docs/rules/no-this-before-super)|error 🚨|"no-this-before-super"|
|[`no-throw-literal`](https://eslint.org/docs/rules/no-throw-literal)|error 🚨|"no-throw-literal"|
|[`no-trailing-spaces`](https://eslint.org/docs/rules/no-trailing-spaces)|error 🚨|"no-trailing-spaces"|
|[`no-undef`](https://eslint.org/docs/rules/no-undef)|error 🚨|"no-undef"|
|[`no-undef-init`](https://eslint.org/docs/rules/no-undef-init)|error 🚨|"no-undef-init"|
|[`no-undefined`](https://eslint.org/docs/rules/no-undefined)|"no-undefined"|"no-undefined"|
|[`no-underscore-dangle`](https://eslint.org/docs/rules/no-underscore-dangle)|"no-underscore-dangle"|"no-underscore-dangle"|
|[`no-unexpected-multiline`](https://eslint.org/docs/rules/no-unexpected-multiline)|error 🚨|"no-unexpected-multiline"|
|[`no-unmodified-loop-condition`](https://eslint.org/docs/rules/no-unmodified-loop-condition)|error 🚨|"no-unmodified-loop-condition"|
|[`no-unneeded-ternary`](https://eslint.org/docs/rules/no-unneeded-ternary)|error 🚨|"no-unneeded-ternary"|
|[`no-unreachable`](https://eslint.org/docs/rules/no-unreachable)|warn ⚠️|"no-unreachable"|
|[`no-unsafe-finally`](https://eslint.org/docs/rules/no-unsafe-finally)|error 🚨|"no-unsafe-finally"|
|[`no-unsafe-negation`](https://eslint.org/docs/rules/no-unsafe-negation)|error 🚨|"no-unsafe-negation"|
|[`no-unused-expressions`](https://eslint.org/docs/rules/no-unused-expressions)|error 🚨|"no-unused-expressions"|
|[`no-unused-labels`](https://eslint.org/docs/rules/no-unused-labels)|N/A 👻|"no-unused-labels"|
|[`no-unused-vars`](https://eslint.org/docs/rules/no-unused-vars)|error 🚨|"no-unused-vars"|
|[`no-use-before-define`](https://eslint.org/docs/rules/no-use-before-define)|error 🚨|"no-use-before-define"|
|`no-use-extend-native/no-use-extend-native`|error 🚨|N/A 👻|
|[`no-useless-call`](https://eslint.org/docs/rules/no-useless-call)|error 🚨|"no-useless-call"|
|[`no-useless-computed-key`](https://eslint.org/docs/rules/no-useless-computed-key)|error 🚨|"no-useless-computed-key"|
|[`no-useless-concat`](https://eslint.org/docs/rules/no-useless-concat)|error 🚨|"no-useless-concat"|
|[`no-useless-constructor`](https://eslint.org/docs/rules/no-useless-constructor)|error 🚨|"no-useless-constructor"|
|[`no-useless-escape`](https://eslint.org/docs/rules/no-useless-escape)|error 🚨|"no-useless-escape"|
|[`no-useless-rename`](https://eslint.org/docs/rules/no-useless-rename)|"no-useless-rename"|"no-useless-rename"|
|[`no-useless-return`](https://eslint.org/docs/rules/no-useless-return)|error 🚨|"no-useless-return"|
|[`no-var`](https://eslint.org/docs/rules/no-var)|error 🚨|"no-var"|
|[`no-void`](https://eslint.org/docs/rules/no-void)|error 🚨|"no-void"|
|[`no-warning-comments`](https://eslint.org/docs/rules/no-warning-comments)|"no-warning-comments"|"no-warning-comments"|
|[`no-whitespace-before-property`](https://eslint.org/docs/rules/no-whitespace-before-property)|error 🚨|"no-whitespace-before-property"|
|[`no-with`](https://eslint.org/docs/rules/no-with)|error 🚨|"no-with"|
|[`nonblock-statement-body-position`](https://eslint.org/docs/rules/nonblock-statement-body-position)|"nonblock-statement-body-position"|"nonblock-statement-body-position"|
|[`object-curly-newline`](https://eslint.org/docs/rules/object-curly-newline)|N/A 👻|"object-curly-newline"|
|[`object-curly-spacing`](https://eslint.org/docs/rules/object-curly-spacing)|"object-curly-spacing"|"object-curly-spacing"|
|[`object-property-newline`](https://eslint.org/docs/rules/object-property-newline)|"object-property-newline"|"object-property-newline"|
|[`object-shorthand`](https://eslint.org/docs/rules/object-shorthand)|"object-shorthand"|"object-shorthand"|
|[`one-var`](https://eslint.org/docs/rules/one-var)|"one-var"|"one-var"|
|[`one-var-declaration-per-line`](https://eslint.org/docs/rules/one-var-declaration-per-line)|error 🚨|"one-var-declaration-per-line"|
|[`operator-assignment`](https://eslint.org/docs/rules/operator-assignment)|"operator-assignment"|"operator-assignment"|
|[`operator-linebreak`](https://eslint.org/docs/rules/operator-linebreak)|"operator-linebreak"|"operator-linebreak"|
|[`padded-blocks`](https://eslint.org/docs/rules/padded-blocks)|"padded-blocks"|"padded-blocks"|
|[`padding-line-between-statements`](https://eslint.org/docs/rules/padding-line-between-statements)|"padding-line-between-statements"|"padding-line-between-statements"|
|[`prefer-arrow-callback`](https://eslint.org/docs/rules/prefer-arrow-callback)|error 🚨|"prefer-arrow-callback"|
|[`prefer-const`](https://eslint.org/docs/rules/prefer-const)|error 🚨|"prefer-const"|
|[`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring)|"prefer-destructuring"|"prefer-destructuring"|
|[`prefer-numeric-literals`](https://eslint.org/docs/rules/prefer-numeric-literals)|error 🚨|"prefer-numeric-literals"|
|[`prefer-object-spread`](https://eslint.org/docs/rules/prefer-object-spread)|N/A 👻|"prefer-object-spread"|
|[`prefer-promise-reject-errors`](https://eslint.org/docs/rules/prefer-promise-reject-errors)|error 🚨|"prefer-promise-reject-errors"|
|[`prefer-reflect`](https://eslint.org/docs/rules/prefer-reflect)|"prefer-reflect"|"prefer-reflect"|
|[`prefer-rest-params`](https://eslint.org/docs/rules/prefer-rest-params)|error 🚨|"prefer-rest-params"|
|[`prefer-spread`](https://eslint.org/docs/rules/prefer-spread)|error 🚨|"prefer-spread"|
|[`prefer-template`](https://eslint.org/docs/rules/prefer-template)|"prefer-template"|"prefer-template"|
|[`promise/always-return`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/always-return.md)|error 🚨|N/A 👻|
|[`promise/avoid-new`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/avoid-new.md)|"promise/avoid-new"|N/A 👻|
|[`promise/catch-or-return`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/catch-or-return.md)|error 🚨|N/A 👻|
|[`promise/no-callback-in-promise`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/no-callback-in-promise.md)|"promise/no-callback-in-promise"|N/A 👻|
|[`promise/no-native`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/no-native.md)|"promise/no-native"|N/A 👻|
|[`promise/no-nesting`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/no-nesting.md)|"promise/no-nesting"|N/A 👻|
|[`promise/no-new-statics`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/no-new-statics.md)|error 🚨|N/A 👻|
|[`promise/no-promise-in-callback`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/no-promise-in-callback.md)|"promise/no-promise-in-callback"|N/A 👻|
|[`promise/no-return-in-finally`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/no-return-in-finally.md)|error 🚨|N/A 👻|
|[`promise/no-return-wrap`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/no-return-wrap.md)|error 🚨|N/A 👻|
|[`promise/param-names`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/param-names.md)|error 🚨|N/A 👻|
|[`promise/prefer-await-to-callbacks`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/prefer-await-to-callbacks.md)|warn ⚠️|N/A 👻|
|[`promise/prefer-await-to-then`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/prefer-await-to-then.md)|warn ⚠️|N/A 👻|
|[`promise/valid-params`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/valid-params.md)|error 🚨|N/A 👻|
|[`quote-props`](https://eslint.org/docs/rules/quote-props)|"quote-props"|"quote-props"|
|[`quotes`](https://eslint.org/docs/rules/quotes)|"quotes"|"quotes"|
|[`radix`](https://eslint.org/docs/rules/radix)|error 🚨|"radix"|
|[`react/boolean-prop-naming`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/boolean-prop-naming.md)|"react/boolean-prop-naming"|"react/boolean-prop-naming"|
|[`react/button-has-type`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/button-has-type.md)|error 🚨|"react/button-has-type"|
|[`react/default-props-match-prop-types`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/default-props-match-prop-types.md)|error 🚨|"react/default-props-match-prop-types"|
|[`react/destructuring-assignment`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/destructuring-assignment.md)|"react/destructuring-assignment"|"react/destructuring-assignment"|
|[`react/display-name`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/display-name.md)|"react/display-name"|"react/display-name"|
|[`react/forbid-component-props`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-component-props.md)|error 🚨|"react/forbid-component-props"|
|[`react/forbid-dom-props`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-dom-props.md)|"react/forbid-dom-props"|"react/forbid-dom-props"|
|[`react/forbid-elements`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-elements.md)|"react/forbid-elements"|"react/forbid-elements"|
|[`react/forbid-foreign-prop-types`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-foreign-prop-types.md)|"react/forbid-foreign-prop-types"|"react/forbid-foreign-prop-types"|
|[`react/forbid-prop-types`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-prop-types.md)|"react/forbid-prop-types"|"react/forbid-prop-types"|
|[`react/jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-boolean-value.md)|"react/jsx-boolean-value"|"react/jsx-boolean-value"|
|[`react/jsx-child-element-spacing`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-child-element-spacing.md)|"react/jsx-child-element-spacing"|"react/jsx-child-element-spacing"|
|[`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-closing-bracket-location.md)|"react/jsx-closing-bracket-location"|"react/jsx-closing-bracket-location"|
|[`react/jsx-closing-tag-location`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-closing-tag-location.md)|"react/jsx-closing-tag-location"|"react/jsx-closing-tag-location"|
|[`react/jsx-curly-brace-presence`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-curly-brace-presence.md)|"react/jsx-curly-brace-presence"|"react/jsx-curly-brace-presence"|
|[`react/jsx-curly-spacing`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-curly-spacing.md)|"react/jsx-curly-spacing"|"react/jsx-curly-spacing"|
|[`react/jsx-equals-spacing`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-equals-spacing.md)|"react/jsx-equals-spacing"|"react/jsx-equals-spacing"|
|[`react/jsx-filename-extension`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-filename-extension.md)|N/A 👻|"react/jsx-filename-extension"|
|[`react/jsx-first-prop-new-line`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-first-prop-new-line.md)|"react/jsx-first-prop-new-line"|"react/jsx-first-prop-new-line"|
|[`react/jsx-handler-names`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-handler-names.md)|"react/jsx-handler-names"|"react/jsx-handler-names"|
|[`react/jsx-indent`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-indent.md)|"react/jsx-indent"|"react/jsx-indent"|
|[`react/jsx-indent-props`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-indent-props.md)|"react/jsx-indent-props"|"react/jsx-indent-props"|
|[`react/jsx-key`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-key.md)|error 🚨|"react/jsx-key"|
|[`react/jsx-max-depth`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-max-depth.md)|N/A 👻|"react/jsx-max-depth"|
|[`react/jsx-max-props-per-line`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-max-props-per-line.md)|"react/jsx-max-props-per-line"|"react/jsx-max-props-per-line"|
|[`react/jsx-no-bind`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-bind.md)|"react/jsx-no-bind"|"react/jsx-no-bind"|
|[`react/jsx-no-comment-textnodes`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-comment-textnodes.md)|error 🚨|"react/jsx-no-comment-textnodes"|
|[`react/jsx-no-duplicate-props`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-duplicate-props.md)|error 🚨|"react/jsx-no-duplicate-props"|
|[`react/jsx-no-literals`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-literals.md)|"react/jsx-no-literals"|"react/jsx-no-literals"|
|[`react/jsx-no-target-blank`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-target-blank.md)|error 🚨|"react/jsx-no-target-blank"|
|[`react/jsx-no-undef`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-undef.md)|error 🚨|"react/jsx-no-undef"|
|[`react/jsx-one-expression-per-line`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-one-expression-per-line.md)|error 🚨|"react/jsx-one-expression-per-line"|
|[`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-pascal-case.md)|error 🚨|"react/jsx-pascal-case"|
|[`react/jsx-props-no-multi-spaces`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-multi-spaces.md)|error 🚨|"react/jsx-props-no-multi-spaces"|
|[`react/jsx-sort-default-props`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-sort-default-props.md)|error 🚨|"react/jsx-sort-default-props"|
|`react/jsx-sort-prop-types`|N/A 👻|"react/jsx-sort-prop-types"|
|[`react/jsx-sort-props`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-sort-props.md)|error 🚨|"react/jsx-sort-props"|
|[`react/jsx-space-before-closing`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-space-before-closing.md)|N/A 👻|"react/jsx-space-before-closing"|
|[`react/jsx-tag-spacing`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-tag-spacing.md)|"react/jsx-tag-spacing"|"react/jsx-tag-spacing"|
|[`react/jsx-uses-react`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-uses-react.md)|warn ⚠️|"react/jsx-uses-react"|
|[`react/jsx-uses-vars`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-uses-vars.md)|warn ⚠️|"react/jsx-uses-vars"|
|[`react/jsx-wrap-multilines`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-wrap-multilines.md)|"react/jsx-wrap-multilines"|"react/jsx-wrap-multilines"|
|[`react/no-access-state-in-setstate`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-access-state-in-setstate.md)|error 🚨|"react/no-access-state-in-setstate"|
|[`react/no-array-index-key`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-array-index-key.md)|error 🚨|"react/no-array-index-key"|
|[`react/no-children-prop`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-children-prop.md)|error 🚨|"react/no-children-prop"|
|[`react/no-danger`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-danger.md)|error 🚨|"react/no-danger"|
|[`react/no-danger-with-children`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-danger-with-children.md)|error 🚨|"react/no-danger-with-children"|
|[`react/no-deprecated`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-deprecated.md)|error 🚨|"react/no-deprecated"|
|[`react/no-did-mount-set-state`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/componentDidMount.md)|error 🚨|"react/no-did-mount-set-state"|
|[`react/no-did-update-set-state`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/componentDidUpdate.md)|error 🚨|"react/no-did-update-set-state"|
|[`react/no-direct-mutation-state`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-direct-mutation-state.md)|error 🚨|"react/no-direct-mutation-state"|
|[`react/no-find-dom-node`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-find-dom-node.md)|error 🚨|"react/no-find-dom-node"|
|[`react/no-is-mounted`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-is-mounted.md)|error 🚨|"react/no-is-mounted"|
|[`react/no-multi-comp`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-multi-comp.md)|error 🚨|"react/no-multi-comp"|
|[`react/no-redundant-should-component-update`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-redundant-should-component-update.md)|error 🚨|"react/no-redundant-should-component-update"|
|[`react/no-render-return-value`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-render-return-value.md)|N/A 👻|"react/no-render-return-value"|
|[`react/no-set-state`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-set-state.md)|error 🚨|"react/no-set-state"|
|[`react/no-string-refs`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-string-refs.md)|error 🚨|"react/no-string-refs"|
|[`react/no-this-in-sfc`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-this-in-sfc.md)|error 🚨|"react/no-this-in-sfc"|
|[`react/no-typos`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-typos.md)|error 🚨|"react/no-typos"|
|[`react/no-unescaped-entities`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unescaped-entities.md)|error 🚨|"react/no-unescaped-entities"|
|[`react/no-unknown-property`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unknown-property.md)|error 🚨|"react/no-unknown-property"|
|[`react/no-unsafe`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unsafe.md)|error 🚨|"react/no-unsafe"|
|[`react/no-unused-prop-types`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unused-prop-types.md)|error 🚨|"react/no-unused-prop-types"|
|[`react/no-unused-state`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unused-state.md)|error 🚨|"react/no-unused-state"|
|[`react/no-will-update-set-state`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/componentWillUpdate.md)|error 🚨|"react/no-will-update-set-state"|
|[`react/prefer-es6-class`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/prefer-es6-class.md)|error 🚨|"react/prefer-es6-class"|
|[`react/prefer-stateless-function`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/prefer-stateless-function.md)|"react/prefer-stateless-function"|"react/prefer-stateless-function"|
|[`react/prop-types`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/prop-types.md)|error 🚨|"react/prop-types"|
|[`react/react-in-jsx-scope`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/react-in-jsx-scope.md)|error 🚨|"react/react-in-jsx-scope"|
|[`react/require-default-props`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/require-default-props.md)|error 🚨|"react/require-default-props"|
|[`react/require-optimization`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/require-optimization.md)|N/A 👻|"react/require-optimization"|
|[`react/require-render-return`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/require-render-return.md)|error 🚨|"react/require-render-return"|
|[`react/self-closing-comp`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/self-closing-comp.md)|error 🚨|"react/self-closing-comp"|
|[`react/sort-comp`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/sort-comp.md)|error 🚨|"react/sort-comp"|
|[`react/sort-prop-types`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/sort-prop-types.md)|error 🚨|"react/sort-prop-types"|
|[`react/style-prop-object`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/style-prop-object.md)|error 🚨|"react/style-prop-object"|
|[`react/void-dom-elements-no-children`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/void-dom-elements-no-children.md)|error 🚨|"react/void-dom-elements-no-children"|
|[`require-atomic-updates`](https://eslint.org/docs/rules/require-atomic-updates)|N/A 👻|"require-atomic-updates"|
|[`require-await`](https://eslint.org/docs/rules/require-await)|warn ⚠️|"require-await"|
|[`require-jsdoc`](https://eslint.org/docs/rules/require-jsdoc)|"require-jsdoc"|"require-jsdoc"|
|[`require-unicode-regexp`](https://eslint.org/docs/rules/require-unicode-regexp)|N/A 👻|"require-unicode-regexp"|
|[`require-yield`](https://eslint.org/docs/rules/require-yield)|error 🚨|"require-yield"|
|[`rest-spread-spacing`](https://eslint.org/docs/rules/rest-spread-spacing)|N/A 👻|"rest-spread-spacing"|
|[`semi`](https://eslint.org/docs/rules/semi)|"semi"|"semi"|
|[`semi-spacing`](https://eslint.org/docs/rules/semi-spacing)|"semi-spacing"|"semi-spacing"|
|[`semi-style`](https://eslint.org/docs/rules/semi-style)|"semi-style"|"semi-style"|
|[`sort-imports`](https://eslint.org/docs/rules/sort-imports)|N/A 👻|"sort-imports"|
|[`sort-keys`](https://eslint.org/docs/rules/sort-keys)|"sort-keys"|"sort-keys"|
|[`sort-vars`](https://eslint.org/docs/rules/sort-vars)|error 🚨|"sort-vars"|
|[`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks)|"space-before-blocks"|"space-before-blocks"|
|[`space-before-function-paren`](https://eslint.org/docs/rules/space-before-function-paren)|"space-before-function-paren"|"space-before-function-paren"|
|[`space-in-parens`](https://eslint.org/docs/rules/space-in-parens)|"space-in-parens"|"space-in-parens"|
|[`space-infix-ops`](https://eslint.org/docs/rules/space-infix-ops)|error 🚨|"space-infix-ops"|
|[`space-unary-ops`](https://eslint.org/docs/rules/space-unary-ops)|"space-unary-ops"|"space-unary-ops"|
|[`spaced-comment`](https://eslint.org/docs/rules/spaced-comment)|"spaced-comment"|"spaced-comment"|
|[`strict`](https://eslint.org/docs/rules/strict)|"strict"|"strict"|
|[`switch-colon-spacing`](https://eslint.org/docs/rules/switch-colon-spacing)|"switch-colon-spacing"|"switch-colon-spacing"|
|[`symbol-description`](https://eslint.org/docs/rules/symbol-description)|error 🚨|"symbol-description"|
|[`template-curly-spacing`](https://eslint.org/docs/rules/template-curly-spacing)|N/A 👻|"template-curly-spacing"|
|[`template-tag-spacing`](https://eslint.org/docs/rules/template-tag-spacing)|"template-tag-spacing"|"template-tag-spacing"|
|[`unicode-bom`](https://eslint.org/docs/rules/unicode-bom)|"unicode-bom"|"unicode-bom"|
|[`unicorn/catch-error-name`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/catch-error-name.md)|"unicorn/catch-error-name"|N/A 👻|
|[`unicorn/custom-error-definition`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/custom-error-definition.md)|"unicorn/custom-error-definition"|N/A 👻|
|[`unicorn/error-message`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/error-message.md)|error 🚨|N/A 👻|
|[`unicorn/explicit-length-check`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/explicit-length-check.md)|"unicorn/explicit-length-check"|N/A 👻|
|[`unicorn/filename-case`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/filename-case.md)|"unicorn/filename-case"|N/A 👻|
|[`unicorn/import-index`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/import-index.md)|error 🚨|N/A 👻|
|[`unicorn/new-for-builtins`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/new-for-builtins.md)|error 🚨|N/A 👻|
|[`unicorn/no-abusive-eslint-disable`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/no-abusive-eslint-disable.md)|error 🚨|N/A 👻|
|[`unicorn/no-array-instanceof`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/no-array-instanceof.md)|error 🚨|N/A 👻|
|[`unicorn/no-fn-reference-in-iterator`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/no-fn-reference-in-iterator.md)|"unicorn/no-fn-reference-in-iterator"|N/A 👻|
|[`unicorn/no-hex-escape`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/no-hex-escape.md)|error 🚨|N/A 👻|
|[`unicorn/no-new-buffer`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/no-new-buffer.md)|error 🚨|N/A 👻|
|[`unicorn/no-process-exit`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/no-process-exit.md)|"unicorn/no-process-exit"|N/A 👻|
|[`unicorn/number-literal-case`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/number-literal-case.md)|error 🚨|N/A 👻|
|[`unicorn/prefer-add-event-listener`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/prefer-add-event-listener.md)|"unicorn/prefer-add-event-listener"|N/A 👻|
|[`unicorn/prefer-exponentiation-operator`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/prefer-exponentiation-operator.md)|error 🚨|N/A 👻|
|[`unicorn/prefer-spread`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/prefer-spread.md)|"unicorn/prefer-spread"|N/A 👻|
|[`unicorn/prefer-starts-ends-with`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/prefer-starts-ends-with.md)|error 🚨|N/A 👻|
|[`unicorn/prefer-type-error`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/prefer-type-error.md)|error 🚨|N/A 👻|
|[`unicorn/regex-shorthand`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/regex-shorthand.md)|error 🚨|N/A 👻|
|[`unicorn/throw-new-error`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/throw-new-error.md)|error 🚨|N/A 👻|
|[`use-isnan`](https://eslint.org/docs/rules/use-isnan)|error 🚨|"use-isnan"|
|[`valid-jsdoc`](https://eslint.org/docs/rules/valid-jsdoc)|"valid-jsdoc"|"valid-jsdoc"|
|[`valid-typeof`](https://eslint.org/docs/rules/valid-typeof)|N/A 👻|"valid-typeof"|
|[`vars-on-top`](https://eslint.org/docs/rules/vars-on-top)|error 🚨|"vars-on-top"|
|[`wrap-iife`](https://eslint.org/docs/rules/wrap-iife)|"wrap-iife"|"wrap-iife"|
|[`wrap-regex`](https://eslint.org/docs/rules/wrap-regex)|"wrap-regex"|"wrap-regex"|
|[`yield-star-spacing`](https://eslint.org/docs/rules/yield-star-spacing)|N/A 👻|"yield-star-spacing"|
|[`yoda`](https://eslint.org/docs/rules/yoda)|"yoda"|"yoda"|
