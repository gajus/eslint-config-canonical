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
|[`accessor-pairs`](https://eslint.org/docs/rules/accessor-pairs)|error 🚨|"off"|
|[`array-bracket-newline`](https://eslint.org/docs/rules/array-bracket-newline)|0|["off","consistent"]|
|[`array-bracket-spacing`](https://eslint.org/docs/rules/array-bracket-spacing)|[2,"never"]|["error","never"]|
|[`array-callback-return`](https://eslint.org/docs/rules/array-callback-return)|error 🚨|["error",{"allowImplicit":true}]|
|[`array-element-newline`](https://eslint.org/docs/rules/array-element-newline)|0|["off",{"multiline":true,"minItems":3}]|
|[`arrow-body-style`](https://eslint.org/docs/rules/arrow-body-style)|[2,"always"]|["error","as-needed",{"requireReturnForObjectLiteral":false}]|
|[`arrow-parens`](https://eslint.org/docs/rules/arrow-parens)|[2,"always"]|["error","as-needed",{"requireForBlockBody":true}]|
|[`arrow-spacing`](https://eslint.org/docs/rules/arrow-spacing)|[2,{"after":true,"before":true}]|["error",{"before":true,"after":true}]|
|[`ava/assertion-arguments`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/assertion-arguments.md)|error 🚨|N/A 👻|
|[`ava/max-asserts`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/max-asserts.md)|[1,5]|N/A 👻|
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
|[`ava/test-title`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/test-title.md)|[2,"if-multiple"]|N/A 👻|
|[`ava/use-t`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/use-t.md)|error 🚨|N/A 👻|
|[`ava/use-t-well`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/use-t-well.md)|error 🚨|N/A 👻|
|[`ava/use-test`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/use-test.md)|error 🚨|N/A 👻|
|[`ava/use-true-false`](https://github.com/avajs/eslint-plugin-ava/blob/v5.1.1/docs/rules/use-true-false.md)|error 🚨|N/A 👻|
|[`babel/new-cap`](https://eslint.org/docs/rules/new-cap)|0|N/A 👻|
|[`babel/no-invalid-this`](https://eslint.org/docs/rules/no-invalid-this)|error 🚨|N/A 👻|
|[`babel/object-curly-spacing`](https://eslint.org/docs/rules/object-curly-spacing)|[2,"never"]|N/A 👻|
|[`babel/valid-typeof`](https://eslint.org/docs/rules/valid-typeof)|error 🚨|N/A 👻|
|[`block-scoped-var`](https://eslint.org/docs/rules/block-scoped-var)|error 🚨|"error"|
|[`block-spacing`](https://eslint.org/docs/rules/block-spacing)|[2,"always"]|["error","always"]|
|[`brace-style`](https://eslint.org/docs/rules/brace-style)|[2,"1tbs",{"allowSingleLine":false}]|["error","1tbs",{"allowSingleLine":true}]|
|[`callback-return`](https://eslint.org/docs/rules/callback-return)|error 🚨|"off"|
|[`camelcase`](https://eslint.org/docs/rules/camelcase)|0|["error",{"properties":"never"}]|
|[`capitalized-comments`](https://eslint.org/docs/rules/capitalized-comments)|0|["off","never",{"line":{"ignorePattern":".*","ignoreInlineComments":true,"ignoreConsecutiveComments":true},"block":{"ignorePattern":".*","ignoreInlineComments":true,"ignoreConsecutiveComments":true}}]|
|[`class-methods-use-this`](https://eslint.org/docs/rules/class-methods-use-this)|error 🚨|["error",{"exceptMethods":["render","getInitialState","getDefaultProps","getChildContext","componentWillMount","UNSAFE_componentWillMount","componentDidMount","componentWillReceiveProps","UNSAFE_componentWillReceiveProps","shouldComponentUpdate","componentWillUpdate","UNSAFE_componentWillUpdate","componentDidUpdate","componentWillUnmount","componentDidCatch","getSnapshotBeforeUpdate"]}]|
|[`comma-dangle`](https://eslint.org/docs/rules/comma-dangle)|[2,"never"]|["error",{"arrays":"always-multiline","objects":"always-multiline","imports":"always-multiline","exports":"always-multiline","functions":"always-multiline"}]|
|[`comma-spacing`](https://eslint.org/docs/rules/comma-spacing)|[2,{"after":true,"before":false}]|["error",{"before":false,"after":true}]|
|[`comma-style`](https://eslint.org/docs/rules/comma-style)|[2,"last"]|["error","last",{"exceptions":{"ArrayExpression":false,"ArrayPattern":false,"ArrowFunctionExpression":false,"CallExpression":false,"FunctionDeclaration":false,"FunctionExpression":false,"ImportDeclaration":false,"ObjectExpression":false,"ObjectPattern":false,"VariableDeclaration":false,"NewExpression":false}}]|
|[`complexity`](https://eslint.org/docs/rules/complexity)|[1,10]|["off",11]|
|[`computed-property-spacing`](https://eslint.org/docs/rules/computed-property-spacing)|[2,"never"]|["error","never"]|
|[`consistent-return`](https://eslint.org/docs/rules/consistent-return)|error 🚨|"error"|
|[`consistent-this`](https://eslint.org/docs/rules/consistent-this)|[2,"self"]|"off"|
|[`constructor-super`](https://eslint.org/docs/rules/constructor-super)|error 🚨|"error"|
|[`curly`](https://eslint.org/docs/rules/curly)|error 🚨|["error","multi-line"]|
|[`default-case`](https://eslint.org/docs/rules/default-case)|0|["error",{"commentPattern":"^no default$"}]|
|[`dot-location`](https://eslint.org/docs/rules/dot-location)|[2,"property"]|["error","property"]|
|[`dot-notation`](https://eslint.org/docs/rules/dot-notation)|error 🚨|["error",{"allowKeywords":true}]|
|[`eol-last`](https://eslint.org/docs/rules/eol-last)|error 🚨|["error","always"]|
|[`eqeqeq`](https://eslint.org/docs/rules/eqeqeq)|error 🚨|["error","always",{"null":"ignore"}]|
|`filenames/match-exported`|error 🚨|N/A 👻|
|`filenames/match-regex`|[2,"^[A-Z]?[a-z]+(?:[A-Z][a-z]+)*$",false]|N/A 👻|
|`filenames/no-index`|0|N/A 👻|
|`flowtype/boolean-style`|[2,"boolean"]|N/A 👻|
|`flowtype/define-flow-type`|warn ⚠️|N/A 👻|
|`flowtype/delimiter-dangle`|[2,"never"]|N/A 👻|
|`flowtype/generic-spacing`|[2,"never"]|N/A 👻|
|`flowtype/newline-after-flow-annotation`|error 🚨|N/A 👻|
|`flowtype/no-existential-type`|0|N/A 👻|
|`flowtype/no-flow-fix-me-comments`|warn ⚠️|N/A 👻|
|`flowtype/no-mutable-array`|error 🚨|N/A 👻|
|`flowtype/no-primitive-constructor-types`|error 🚨|N/A 👻|
|`flowtype/no-types-missing-file-annotation`|error 🚨|N/A 👻|
|[`flowtype/no-unused-expressions`](https://eslint.org/docs/rules/no-unused-expressions)|0|N/A 👻|
|`flowtype/no-weak-types`|error 🚨|N/A 👻|
|`flowtype/object-type-delimiter`|[2,"comma"]|N/A 👻|
|`flowtype/require-exact-type`|warn ⚠️|N/A 👻|
|`flowtype/require-parameter-type`|0|N/A 👻|
|`flowtype/require-return-type`|0|N/A 👻|
|`flowtype/require-types-at-top`|error 🚨|N/A 👻|
|`flowtype/require-valid-file-annotation`|error 🚨|N/A 👻|
|`flowtype/require-variable-type`|0|N/A 👻|
|`flowtype/semi`|[2,"always"]|N/A 👻|
|`flowtype/sort-keys`|[0,"asc",{"caseSensitive":true,"natural":true}]|N/A 👻|
|`flowtype/space-after-type-colon`|[2,"always"]|N/A 👻|
|`flowtype/space-before-generic-bracket`|[2,"never"]|N/A 👻|
|`flowtype/space-before-type-colon`|[2,"never"]|N/A 👻|
|`flowtype/type-id-match`|[2,"^([A-Z][a-z0-9]+)+Type$"]|N/A 👻|
|`flowtype/type-import-style`|[2,"declaration"]|N/A 👻|
|`flowtype/union-intersection-spacing`|[2,"always"]|N/A 👻|
|`flowtype/use-flow-type`|warn ⚠️|N/A 👻|
|[`for-direction`](https://eslint.org/docs/rules/for-direction)|error 🚨|"error"|
|[`func-call-spacing`](https://eslint.org/docs/rules/func-call-spacing)|[2,"never"]|["error","never"]|
|[`func-name-matching`](https://eslint.org/docs/rules/func-name-matching)|error 🚨|["off","always",{"includeCommonJSModuleExports":false}]|
|[`func-names`](https://eslint.org/docs/rules/func-names)|0|"warn"|
|[`func-style`](https://eslint.org/docs/rules/func-style)|[2,"expression"]|["off","expression"]|
|[`function-paren-newline`](https://eslint.org/docs/rules/function-paren-newline)|[2,"consistent"]|["error","consistent"]|
|[`generator-star-spacing`](https://eslint.org/docs/rules/generator-star-spacing)|[2,{"after":false,"before":true}]|["error",{"before":false,"after":true}]|
|[`getter-return`](https://eslint.org/docs/rules/getter-return)|N/A 👻|["error",{"allowImplicit":true}]|
|[`global-require`](https://eslint.org/docs/rules/global-require)|error 🚨|"error"|
|[`guard-for-in`](https://eslint.org/docs/rules/guard-for-in)|error 🚨|"error"|
|[`handle-callback-err`](https://eslint.org/docs/rules/handle-callback-err)|error 🚨|"off"|
|[`id-blacklist`](https://eslint.org/docs/rules/id-blacklist)|N/A 👻|"off"|
|[`id-length`](https://eslint.org/docs/rules/id-length)|[1,{"exceptions":["a","b","x","P","R","$","_"],"max":50,"min":2}]|"off"|
|[`id-match`](https://eslint.org/docs/rules/id-match)|[2,"(^[A-Za-z]+(?:[A-Z][a-z]*)*\\d*$)|(^[A-Z]+(_[A-Z]+)*(_\\d$)*$)|(^(_|\\$)$)",{"onlyDeclarations":true,"properties":true}]|"off"|
|[`implicit-arrow-linebreak`](https://eslint.org/docs/rules/implicit-arrow-linebreak)|[2,"beside"]|["error","beside"]|
|[`import/default`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/default.md)|error 🚨|"off"|
|[`import/dynamic-import-chunkname`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/dynamic-import-chunkname.md)|N/A 👻|["off",{"importFunctions":[],"webpackChunknameFormat":"[0-9a-zA-Z-_/.]+"}]|
|[`import/export`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/export.md)|error 🚨|"error"|
|[`import/exports-last`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/exports-last.md)|error 🚨|"off"|
|[`import/extensions`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/extensions.md)|[2,"never",{"json":"always"}]|["error","ignorePackages",{"js":"never","mjs":"never","jsx":"never"}]|
|[`import/first`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/first.md)|[2,{"absolute-first":true}]|"error"|
|[`import/group-exports`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/group-exports.md)|0|"off"|
|[`import/imports-first`](https://github.com/benmosher/eslint-plugin-import/blob/7b25c1cb95ee18acc1531002fd343e1e6031f9ed/docs/rules/imports-first.md)|N/A 👻|"off"|
|[`import/max-dependencies`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/max-dependencies.md)|[1,{"max":10}]|["off",{"max":10}]|
|[`import/named`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/named.md)|error 🚨|"error"|
|[`import/namespace`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/namespace.md)|error 🚨|"off"|
|[`import/newline-after-import`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/newline-after-import.md)|error 🚨|"error"|
|[`import/no-absolute-path`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-absolute-path.md)|error 🚨|"error"|
|[`import/no-amd`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-amd.md)|error 🚨|"error"|
|[`import/no-anonymous-default-export`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-anonymous-default-export.md)|0|["off",{"allowArray":false,"allowArrowFunction":false,"allowAnonymousClass":false,"allowAnonymousFunction":false,"allowLiteral":false,"allowObject":false}]|
|[`import/no-commonjs`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-commonjs.md)|error 🚨|"off"|
|[`import/no-cycle`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-cycle.md)|error 🚨|["error",{"maxDepth":null}]|
|`import/no-default-export`|0|"off"|
|[`import/no-deprecated`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-deprecated.md)|warn ⚠️|"off"|
|[`import/no-duplicates`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-duplicates.md)|0|"error"|
|[`import/no-dynamic-require`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-dynamic-require.md)|error 🚨|"error"|
|[`import/no-extraneous-dependencies`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-extraneous-dependencies.md)|[2,{"devDependencies":true,"optionalDependencies":true,"peerDependencies":true}]|["error",{"devDependencies":["test/**","tests/**","spec/**","**/__tests__/**","**/__mocks__/**","test.{js,jsx}","test-*.{js,jsx}","**/*{.,_}{test,spec}.{js,jsx}","**/jest.config.js","**/vue.config.js","**/webpack.config.js","**/webpack.config.*.js","**/rollup.config.js","**/rollup.config.*.js","**/gulpfile.js","**/gulpfile.*.js","**/Gruntfile{,.js}","**/protractor.conf.js","**/protractor.conf.*.js"],"optionalDependencies":false}]|
|[`import/no-internal-modules`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-internal-modules.md)|0|["off",{"allow":[]}]|
|[`import/no-mutable-exports`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-mutable-exports.md)|error 🚨|"error"|
|[`import/no-named-as-default`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-named-as-default.md)|error 🚨|"error"|
|[`import/no-named-as-default-member`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-named-as-default-member.md)|error 🚨|"error"|
|[`import/no-named-default`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-named-default.md)|error 🚨|"error"|
|[`import/no-namespace`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-namespace.md)|error 🚨|"off"|
|[`import/no-nodejs-modules`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-nodejs-modules.md)|0|"off"|
|[`import/no-relative-parent-imports`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-relative-parent-imports.md)|0|"off"|
|[`import/no-restricted-paths`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-restricted-paths.md)|0|"off"|
|[`import/no-self-import`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-self-import.md)|error 🚨|"error"|
|[`import/no-unassigned-import`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-unassigned-import.md)|error 🚨|"off"|
|[`import/no-unresolved`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-unresolved.md)|error 🚨|["error",{"commonjs":true,"caseSensitive":true}]|
|[`import/no-useless-path-segments`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-useless-path-segments.md)|error 🚨|"error"|
|[`import/no-webpack-loader-syntax`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/no-webpack-loader-syntax.md)|error 🚨|"error"|
|[`import/order`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/order.md)|[2,{"groups":["builtin","external","internal","parent","sibling","index"],"newlines-between":"never"}]|["error",{"groups":[["builtin","external","internal"]]}]|
|[`import/prefer-default-export`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/prefer-default-export.md)|warn ⚠️|"error"|
|[`import/unambiguous`](https://github.com/benmosher/eslint-plugin-import/blob/v2.14.0/docs/rules/unambiguous.md)|warn ⚠️|"off"|
|[`indent`](https://eslint.org/docs/rules/indent)|[2,2]|["error",2,{"SwitchCase":1,"VariableDeclarator":1,"outerIIFEBody":1,"FunctionDeclaration":{"parameters":1,"body":1},"FunctionExpression":{"parameters":1,"body":1},"CallExpression":{"arguments":1},"ArrayExpression":1,"ObjectExpression":1,"ImportDeclaration":1,"flatTernaryExpressions":false,"ignoredNodes":["JSXElement","JSXElement > *","JSXAttribute","JSXIdentifier","JSXNamespacedName","JSXMemberExpression","JSXSpreadAttribute","JSXExpressionContainer","JSXOpeningElement","JSXClosingElement","JSXText","JSXEmptyExpression","JSXSpreadChild"],"ignoreComments":false}]|
|[`init-declarations`](https://eslint.org/docs/rules/init-declarations)|0|"off"|
|[`jest/no-disabled-tests`](https://github.com/jest-community/eslint-plugin-jest/blob/v21.23.0/docs/rules/no-disabled-tests.md)|"error"|N/A 👻|
|[`jest/no-focused-tests`](https://github.com/jest-community/eslint-plugin-jest/blob/v21.23.0/docs/rules/no-focused-tests.md)|"error"|N/A 👻|
|[`jest/no-identical-title`](https://github.com/jest-community/eslint-plugin-jest/blob/v21.23.0/docs/rules/no-identical-title.md)|"error"|N/A 👻|
|[`jest/valid-expect`](https://github.com/jest-community/eslint-plugin-jest/blob/v21.23.0/docs/rules/valid-expect.md)|"error"|N/A 👻|
|`jsdoc/check-param-names`|warn ⚠️|N/A 👻|
|`jsdoc/check-tag-names`|warn ⚠️|N/A 👻|
|`jsdoc/check-types`|warn ⚠️|N/A 👻|
|`jsdoc/newline-after-description`|[1,"always"]|N/A 👻|
|`jsdoc/require-description-complete-sentence`|0|N/A 👻|
|`jsdoc/require-hyphen-before-param-description`|0|N/A 👻|
|`jsdoc/require-param`|0|N/A 👻|
|`jsdoc/require-param-description`|0|N/A 👻|
|`jsdoc/require-param-name`|error 🚨|N/A 👻|
|`jsdoc/require-param-type`|0|N/A 👻|
|`jsdoc/require-returns-description`|0|N/A 👻|
|`jsdoc/require-returns-type`|0|N/A 👻|
|[`jsx-a11y/accessible-emoji`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/accessible-emoji.md)|N/A 👻|"error"|
|[`jsx-a11y/alt-text`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/alt-text.md)|N/A 👻|["error",{"elements":["img","object","area","input[type=\"image\"]"],"img":[],"object":[],"area":[],"input[type=\"image\"]":[]}]|
|[`jsx-a11y/anchor-has-content`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/anchor-has-content.md)|N/A 👻|["error",{"components":[]}]|
|[`jsx-a11y/anchor-is-valid`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/anchor-is-valid.md)|N/A 👻|["error",{"components":["Link"],"specialLink":["to"],"aspects":["noHref","invalidHref","preferButton"]}]|
|[`jsx-a11y/aria-activedescendant-has-tabindex`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/aria-activedescendant-has-tabindex.md)|N/A 👻|"error"|
|[`jsx-a11y/aria-props`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/aria-props.md)|N/A 👻|"error"|
|[`jsx-a11y/aria-proptypes`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/aria-proptypes.md)|N/A 👻|"error"|
|[`jsx-a11y/aria-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/aria-role.md)|N/A 👻|["error",{"ignoreNonDom":false}]|
|[`jsx-a11y/aria-unsupported-elements`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/aria-unsupported-elements.md)|N/A 👻|"error"|
|[`jsx-a11y/click-events-have-key-events`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/click-events-have-key-events.md)|N/A 👻|"error"|
|[`jsx-a11y/heading-has-content`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/heading-has-content.md)|N/A 👻|["error",{"components":[""]}]|
|[`jsx-a11y/html-has-lang`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/html-has-lang.md)|N/A 👻|"error"|
|[`jsx-a11y/iframe-has-title`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/iframe-has-title.md)|N/A 👻|"error"|
|[`jsx-a11y/img-redundant-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/img-redundant-alt.md)|N/A 👻|"error"|
|[`jsx-a11y/interactive-supports-focus`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/interactive-supports-focus.md)|N/A 👻|"error"|
|`jsx-a11y/label-has-associated-control`|N/A 👻|["error",{"labelComponents":[],"labelAttributes":[],"controlComponents":[],"assert":"both","depth":25}]|
|[`jsx-a11y/label-has-for`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/label-has-for.md)|N/A 👻|["error",{"components":[],"required":{"every":["nesting","id"]},"allowChildren":false}]|
|[`jsx-a11y/lang`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/lang.md)|N/A 👻|"error"|
|[`jsx-a11y/media-has-caption`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/media-has-caption.md)|N/A 👻|["error",{"audio":[],"video":[],"track":[]}]|
|[`jsx-a11y/mouse-events-have-key-events`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/mouse-events-have-key-events.md)|N/A 👻|"error"|
|[`jsx-a11y/no-access-key`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-access-key.md)|N/A 👻|"error"|
|[`jsx-a11y/no-autofocus`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-autofocus.md)|N/A 👻|["error",{"ignoreNonDOM":true}]|
|[`jsx-a11y/no-distracting-elements`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-distracting-elements.md)|N/A 👻|["error",{"elements":["marquee","blink"]}]|
|[`jsx-a11y/no-interactive-element-to-noninteractive-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-interactive-element-to-noninteractive-role.md)|N/A 👻|["error",{"tr":["none","presentation"]}]|
|[`jsx-a11y/no-noninteractive-element-interactions`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-noninteractive-element-interactions.md)|N/A 👻|["error",{"handlers":["onClick","onMouseDown","onMouseUp","onKeyPress","onKeyDown","onKeyUp"]}]|
|[`jsx-a11y/no-noninteractive-element-to-interactive-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-noninteractive-element-to-interactive-role.md)|N/A 👻|["error",{"ul":["listbox","menu","menubar","radiogroup","tablist","tree","treegrid"],"ol":["listbox","menu","menubar","radiogroup","tablist","tree","treegrid"],"li":["menuitem","option","row","tab","treeitem"],"table":["grid"],"td":["gridcell"]}]|
|[`jsx-a11y/no-noninteractive-tabindex`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-noninteractive-tabindex.md)|N/A 👻|["error",{"tags":[],"roles":["tabpanel"]}]|
|[`jsx-a11y/no-onchange`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-onchange.md)|N/A 👻|"off"|
|[`jsx-a11y/no-redundant-roles`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-redundant-roles.md)|N/A 👻|"error"|
|[`jsx-a11y/no-static-element-interactions`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-static-element-interactions.md)|N/A 👻|["error",{"handlers":["onClick","onMouseDown","onMouseUp","onKeyPress","onKeyDown","onKeyUp"]}]|
|[`jsx-a11y/role-has-required-aria-props`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/role-has-required-aria-props.md)|N/A 👻|"error"|
|[`jsx-a11y/role-supports-aria-props`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/role-supports-aria-props.md)|N/A 👻|"error"|
|[`jsx-a11y/scope`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/scope.md)|N/A 👻|"error"|
|[`jsx-a11y/tabindex-no-positive`](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/tabindex-no-positive.md)|N/A 👻|"error"|
|[`jsx-quotes`](https://eslint.org/docs/rules/jsx-quotes)|[2,"prefer-single"]|["error","prefer-double"]|
|[`key-spacing`](https://eslint.org/docs/rules/key-spacing)|[2,{"afterColon":true,"beforeColon":false}]|["error",{"beforeColon":false,"afterColon":true}]|
|[`keyword-spacing`](https://eslint.org/docs/rules/keyword-spacing)|[2,{"after":true,"before":true}]|["error",{"before":true,"after":true,"overrides":{"return":{"after":true},"throw":{"after":true},"case":{"after":true}}}]|
|[`line-comment-position`](https://eslint.org/docs/rules/line-comment-position)|[2,{"position":"above"}]|["off",{"position":"above","ignorePattern":"","applyDefaultPatterns":true}]|
|[`linebreak-style`](https://eslint.org/docs/rules/linebreak-style)|[2,"unix"]|["error","unix"]|
|[`lines-around-comment`](https://eslint.org/docs/rules/lines-around-comment)|[2,{"allowArrayEnd":true,"allowArrayStart":true,"allowBlockEnd":true,"allowBlockStart":true,"allowObjectEnd":true,"allowObjectStart":true,"beforeBlockComment":true,"beforeLineComment":true}]|"off"|
|[`lines-around-directive`](https://eslint.org/docs/rules/lines-around-directive)|[2,"always"]|["error",{"before":"always","after":"always"}]|
|[`lines-between-class-members`](https://eslint.org/docs/rules/lines-between-class-members)|[2,"always"]|["error","always",{"exceptAfterSingleLine":false}]|
|[`lodash/callback-binding`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/callback-binding.md)|warn ⚠️|N/A 👻|
|[`lodash/chain-style`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/chain-style.md)|[1,"explicit"]|N/A 👻|
|[`lodash/chaining`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/chaining.md)|[1,"always"]|N/A 👻|
|[`lodash/collection-method-value`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/collection-method-value.md)|warn ⚠️|N/A 👻|
|[`lodash/collection-return`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/collection-return.md)|warn ⚠️|N/A 👻|
|[`lodash/consistent-compose`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/consistent-compose.md)|[1,"flow"]|N/A 👻|
|[`lodash/identity-shorthand`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/identity-shorthand.md)|[1,"always"]|N/A 👻|
|[`lodash/import-scope`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/import-scope.md)|0|N/A 👻|
|[`lodash/matches-prop-shorthand`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/matches-prop-shorthand.md)|warn ⚠️|N/A 👻|
|[`lodash/matches-shorthand`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/matches-shorthand.md)|[1,"always",3]|N/A 👻|
|[`lodash/no-commit`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/no-commit.md)|warn ⚠️|N/A 👻|
|[`lodash/no-double-unwrap`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/no-double-unwrap.md)|warn ⚠️|N/A 👻|
|[`lodash/no-extra-args`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/no-extra-args.md)|warn ⚠️|N/A 👻|
|[`lodash/path-style`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/path-style.md)|0|N/A 👻|
|[`lodash/prefer-compact`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-compact.md)|warn ⚠️|N/A 👻|
|[`lodash/prefer-constant`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-constant.md)|0|N/A 👻|
|[`lodash/prefer-filter`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-filter.md)|[1,3]|N/A 👻|
|[`lodash/prefer-find`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-find.md)|error 🚨|N/A 👻|
|[`lodash/prefer-get`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-get.md)|[1,3]|N/A 👻|
|[`lodash/prefer-immutable-method`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-immutable-method.md)|error 🚨|N/A 👻|
|[`lodash/prefer-includes`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-includes.md)|warn ⚠️|N/A 👻|
|[`lodash/prefer-invoke-map`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-invoke-map.md)|0|N/A 👻|
|[`lodash/prefer-is-nil`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-is-nil.md)|warn ⚠️|N/A 👻|
|[`lodash/prefer-lodash-chain`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-lodash-chain.md)|warn ⚠️|N/A 👻|
|[`lodash/prefer-lodash-method`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-lodash-method.md)|0|N/A 👻|
|[`lodash/prefer-lodash-typecheck`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-lodash-typecheck.md)|warn ⚠️|N/A 👻|
|[`lodash/prefer-map`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-map.md)|warn ⚠️|N/A 👻|
|[`lodash/prefer-matches`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-matches.md)|warn ⚠️|N/A 👻|
|[`lodash/prefer-noop`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-noop.md)|0|N/A 👻|
|[`lodash/prefer-over-quantifier`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-over-quantifier.md)|warn ⚠️|N/A 👻|
|[`lodash/prefer-reject`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-reject.md)|[1,3]|N/A 👻|
|[`lodash/prefer-startswith`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-startswith.md)|0|N/A 👻|
|[`lodash/prefer-thru`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-thru.md)|warn ⚠️|N/A 👻|
|[`lodash/prefer-times`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-times.md)|warn ⚠️|N/A 👻|
|[`lodash/prefer-wrapper-method`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prefer-wrapper-method.md)|warn ⚠️|N/A 👻|
|[`lodash/preferred-alias`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/preferred-alias.md)|warn ⚠️|N/A 👻|
|[`lodash/prop-shorthand`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/prop-shorthand.md)|warn ⚠️|N/A 👻|
|[`lodash/unwrap`](https://github.com/wix/eslint-plugin-lodash/blob/v3.1.0/docs/rules/unwrap.md)|warn ⚠️|N/A 👻|
|[`max-classes-per-file`](https://eslint.org/docs/rules/max-classes-per-file)|N/A 👻|["off",1]|
|[`max-depth`](https://eslint.org/docs/rules/max-depth)|N/A 👻|["off",4]|
|[`max-len`](https://eslint.org/docs/rules/max-len)|[1,{"code":160}]|["error",100,2,{"ignoreUrls":true,"ignoreComments":false,"ignoreRegExpLiterals":true,"ignoreStrings":true,"ignoreTemplateLiterals":true}]|
|[`max-lines`](https://eslint.org/docs/rules/max-lines)|N/A 👻|["off",{"max":300,"skipBlankLines":true,"skipComments":true}]|
|[`max-lines-per-function`](https://eslint.org/docs/rules/max-lines-per-function)|N/A 👻|["off",{"max":50,"skipBlankLines":true,"skipComments":true,"IIFEs":true}]|
|[`max-nested-callbacks`](https://eslint.org/docs/rules/max-nested-callbacks)|[1,3]|"off"|
|[`max-params`](https://eslint.org/docs/rules/max-params)|N/A 👻|["off",3]|
|[`max-statements`](https://eslint.org/docs/rules/max-statements)|N/A 👻|["off",10]|
|[`max-statements-per-line`](https://eslint.org/docs/rules/max-statements-per-line)|[2,{"max":1}]|["off",{"max":1}]|
|`mocha/max-top-level-suites`|[2,{"limit":1}]|N/A 👻|
|`mocha/no-exclusive-tests`|error 🚨|N/A 👻|
|`mocha/no-hooks-for-single-case`|warn ⚠️|N/A 👻|
|`mocha/no-identical-title`|error 🚨|N/A 👻|
|`mocha/no-nested-tests`|error 🚨|N/A 👻|
|`mocha/no-return-and-callback`|error 🚨|N/A 👻|
|`mocha/no-setup-in-describe`|error 🚨|N/A 👻|
|`mocha/no-top-level-hooks`|error 🚨|N/A 👻|
|[`multiline-comment-style`](https://eslint.org/docs/rules/multiline-comment-style)|0|["off","starred-block"]|
|[`multiline-ternary`](https://eslint.org/docs/rules/multiline-ternary)|0|["off","never"]|
|[`new-cap`](https://eslint.org/docs/rules/new-cap)|[0,{"capIsNew":false,"newIsCap":true}]|["error",{"newIsCap":true,"newIsCapExceptions":[],"capIsNew":false,"capIsNewExceptions":["Immutable.Map","Immutable.Set","Immutable.List"]}]|
|[`new-parens`](https://eslint.org/docs/rules/new-parens)|error 🚨|"error"|
|[`newline-after-var`](https://eslint.org/docs/rules/newline-after-var)|[2,"always"]|"off"|
|[`newline-before-return`](https://eslint.org/docs/rules/newline-before-return)|error 🚨|"off"|
|[`newline-per-chained-call`](https://eslint.org/docs/rules/newline-per-chained-call)|0|["error",{"ignoreChainWithDepth":4}]|
|[`no-alert`](https://eslint.org/docs/rules/no-alert)|error 🚨|"warn"|
|[`no-array-constructor`](https://eslint.org/docs/rules/no-array-constructor)|error 🚨|"error"|
|[`no-async-promise-executor`](https://eslint.org/docs/rules/no-async-promise-executor)|error 🚨|"off"|
|[`no-await-in-loop`](https://eslint.org/docs/rules/no-await-in-loop)|0|"error"|
|[`no-bitwise`](https://eslint.org/docs/rules/no-bitwise)|N/A 👻|"error"|
|[`no-buffer-constructor`](https://eslint.org/docs/rules/no-buffer-constructor)|error 🚨|"error"|
|[`no-caller`](https://eslint.org/docs/rules/no-caller)|error 🚨|"error"|
|[`no-case-declarations`](https://eslint.org/docs/rules/no-case-declarations)|error 🚨|"error"|
|[`no-catch-shadow`](https://eslint.org/docs/rules/no-catch-shadow)|error 🚨|"off"|
|[`no-class-assign`](https://eslint.org/docs/rules/no-class-assign)|error 🚨|"error"|
|[`no-compare-neg-zero`](https://eslint.org/docs/rules/no-compare-neg-zero)|error 🚨|"error"|
|[`no-cond-assign`](https://eslint.org/docs/rules/no-cond-assign)|error 🚨|["error","always"]|
|[`no-confusing-arrow`](https://eslint.org/docs/rules/no-confusing-arrow)|error 🚨|["error",{"allowParens":true}]|
|[`no-console`](https://eslint.org/docs/rules/no-console)|error 🚨|"warn"|
|[`no-const-assign`](https://eslint.org/docs/rules/no-const-assign)|error 🚨|"error"|
|[`no-constant-condition`](https://eslint.org/docs/rules/no-constant-condition)|warn ⚠️|"warn"|
|[`no-continue`](https://eslint.org/docs/rules/no-continue)|error 🚨|"error"|
|[`no-control-regex`](https://eslint.org/docs/rules/no-control-regex)|error 🚨|"error"|
|[`no-debugger`](https://eslint.org/docs/rules/no-debugger)|warn ⚠️|"error"|
|[`no-delete-var`](https://eslint.org/docs/rules/no-delete-var)|error 🚨|"error"|
|[`no-div-regex`](https://eslint.org/docs/rules/no-div-regex)|error 🚨|"off"|
|[`no-dupe-args`](https://eslint.org/docs/rules/no-dupe-args)|error 🚨|"error"|
|[`no-dupe-class-members`](https://eslint.org/docs/rules/no-dupe-class-members)|error 🚨|"error"|
|[`no-dupe-keys`](https://eslint.org/docs/rules/no-dupe-keys)|error 🚨|"error"|
|[`no-duplicate-case`](https://eslint.org/docs/rules/no-duplicate-case)|error 🚨|"error"|
|[`no-duplicate-imports`](https://eslint.org/docs/rules/no-duplicate-imports)|error 🚨|"off"|
|[`no-else-return`](https://eslint.org/docs/rules/no-else-return)|0|["error",{"allowElseIf":false}]|
|[`no-empty`](https://eslint.org/docs/rules/no-empty)|error 🚨|"error"|
|[`no-empty-character-class`](https://eslint.org/docs/rules/no-empty-character-class)|error 🚨|"error"|
|[`no-empty-function`](https://eslint.org/docs/rules/no-empty-function)|N/A 👻|["error",{"allow":["arrowFunctions","functions","methods"]}]|
|[`no-empty-pattern`](https://eslint.org/docs/rules/no-empty-pattern)|error 🚨|"error"|
|[`no-eq-null`](https://eslint.org/docs/rules/no-eq-null)|error 🚨|"off"|
|[`no-eval`](https://eslint.org/docs/rules/no-eval)|error 🚨|"error"|
|[`no-ex-assign`](https://eslint.org/docs/rules/no-ex-assign)|error 🚨|"error"|
|[`no-extend-native`](https://eslint.org/docs/rules/no-extend-native)|error 🚨|"error"|
|[`no-extra-bind`](https://eslint.org/docs/rules/no-extra-bind)|error 🚨|"error"|
|[`no-extra-boolean-cast`](https://eslint.org/docs/rules/no-extra-boolean-cast)|0|"error"|
|[`no-extra-label`](https://eslint.org/docs/rules/no-extra-label)|N/A 👻|"error"|
|[`no-extra-parens`](https://eslint.org/docs/rules/no-extra-parens)|error 🚨|["off","all",{"conditionalAssign":true,"nestedBinaryExpressions":false,"returnAssign":false,"ignoreJSX":"all","enforceForArrowConditionals":false}]|
|[`no-extra-semi`](https://eslint.org/docs/rules/no-extra-semi)|error 🚨|"error"|
|[`no-fallthrough`](https://eslint.org/docs/rules/no-fallthrough)|error 🚨|"error"|
|[`no-floating-decimal`](https://eslint.org/docs/rules/no-floating-decimal)|error 🚨|"error"|
|[`no-func-assign`](https://eslint.org/docs/rules/no-func-assign)|error 🚨|"error"|
|[`no-global-assign`](https://eslint.org/docs/rules/no-global-assign)|error 🚨|["error",{"exceptions":[]}]|
|[`no-implicit-coercion`](https://eslint.org/docs/rules/no-implicit-coercion)|error 🚨|["off",{"boolean":false,"number":true,"string":true,"allow":[]}]|
|[`no-implicit-globals`](https://eslint.org/docs/rules/no-implicit-globals)|0|"off"|
|[`no-implied-eval`](https://eslint.org/docs/rules/no-implied-eval)|error 🚨|"error"|
|[`no-inline-comments`](https://eslint.org/docs/rules/no-inline-comments)|error 🚨|"off"|
|[`no-inner-declarations`](https://eslint.org/docs/rules/no-inner-declarations)|error 🚨|"error"|
|[`no-invalid-regexp`](https://eslint.org/docs/rules/no-invalid-regexp)|error 🚨|"error"|
|[`no-invalid-this`](https://eslint.org/docs/rules/no-invalid-this)|0|"off"|
|[`no-irregular-whitespace`](https://eslint.org/docs/rules/no-irregular-whitespace)|error 🚨|"error"|
|[`no-iterator`](https://eslint.org/docs/rules/no-iterator)|error 🚨|"error"|
|[`no-label-var`](https://eslint.org/docs/rules/no-label-var)|error 🚨|"error"|
|[`no-labels`](https://eslint.org/docs/rules/no-labels)|error 🚨|["error",{"allowLoop":false,"allowSwitch":false}]|
|[`no-lone-blocks`](https://eslint.org/docs/rules/no-lone-blocks)|error 🚨|"error"|
|[`no-lonely-if`](https://eslint.org/docs/rules/no-lonely-if)|error 🚨|"error"|
|[`no-loop-func`](https://eslint.org/docs/rules/no-loop-func)|error 🚨|"error"|
|[`no-magic-numbers`](https://eslint.org/docs/rules/no-magic-numbers)|0|["off",{"ignore":[],"ignoreArrayIndexes":true,"enforceConst":true,"detectObjects":false}]|
|[`no-misleading-character-class`](https://eslint.org/docs/rules/no-misleading-character-class)|error 🚨|"off"|
|[`no-mixed-operators`](https://eslint.org/docs/rules/no-mixed-operators)|N/A 👻|["error",{"groups":[["%","**"],["%","+"],["%","-"],["%","*"],["%","/"],["**","+"],["**","-"],["**","*"],["**","/"],["&","|","^","~","<<",">>",">>>"],["==","!=","===","!==",">",">=","<","<="],["&&","||"],["in","instanceof"]],"allowSamePrecedence":false}]|
|[`no-mixed-requires`](https://eslint.org/docs/rules/no-mixed-requires)|0|["off",false]|
|[`no-mixed-spaces-and-tabs`](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs)|error 🚨|"error"|
|[`no-multi-assign`](https://eslint.org/docs/rules/no-multi-assign)|N/A 👻|["error"]|
|[`no-multi-spaces`](https://eslint.org/docs/rules/no-multi-spaces)|error 🚨|["error",{"ignoreEOLComments":false}]|
|[`no-multi-str`](https://eslint.org/docs/rules/no-multi-str)|error 🚨|"error"|
|[`no-multiple-empty-lines`](https://eslint.org/docs/rules/no-multiple-empty-lines)|[2,{"max":1,"maxBOF":0,"maxEOF":1}]|["error",{"max":2,"maxEOF":0}]|
|[`no-native-reassign`](https://eslint.org/docs/rules/no-native-reassign)|error 🚨|"off"|
|[`no-negated-condition`](https://eslint.org/docs/rules/no-negated-condition)|error 🚨|"off"|
|[`no-negated-in-lhs`](https://eslint.org/docs/rules/no-negated-in-lhs)|error 🚨|"off"|
|[`no-nested-ternary`](https://eslint.org/docs/rules/no-nested-ternary)|error 🚨|"error"|
|[`no-new`](https://eslint.org/docs/rules/no-new)|error 🚨|"error"|
|[`no-new-func`](https://eslint.org/docs/rules/no-new-func)|error 🚨|"error"|
|[`no-new-object`](https://eslint.org/docs/rules/no-new-object)|error 🚨|"error"|
|[`no-new-require`](https://eslint.org/docs/rules/no-new-require)|error 🚨|"error"|
|[`no-new-symbol`](https://eslint.org/docs/rules/no-new-symbol)|error 🚨|"error"|
|[`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)|error 🚨|"error"|
|[`no-obj-calls`](https://eslint.org/docs/rules/no-obj-calls)|error 🚨|"error"|
|[`no-octal`](https://eslint.org/docs/rules/no-octal)|error 🚨|"error"|
|[`no-octal-escape`](https://eslint.org/docs/rules/no-octal-escape)|error 🚨|"error"|
|[`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign)|[2,{"props":false}]|["error",{"props":true,"ignorePropertyModificationsFor":["acc","accumulator","e","ctx","req","request","res","response","$scope"]}]|
|[`no-path-concat`](https://eslint.org/docs/rules/no-path-concat)|error 🚨|"error"|
|[`no-plusplus`](https://eslint.org/docs/rules/no-plusplus)|N/A 👻|"error"|
|[`no-process-env`](https://eslint.org/docs/rules/no-process-env)|error 🚨|"off"|
|[`no-process-exit`](https://eslint.org/docs/rules/no-process-exit)|error 🚨|"off"|
|[`no-proto`](https://eslint.org/docs/rules/no-proto)|error 🚨|"error"|
|[`no-prototype-builtins`](https://eslint.org/docs/rules/no-prototype-builtins)|N/A 👻|"error"|
|[`no-redeclare`](https://eslint.org/docs/rules/no-redeclare)|[2,{"builtinGlobals":true}]|"error"|
|[`no-regex-spaces`](https://eslint.org/docs/rules/no-regex-spaces)|error 🚨|"error"|
|[`no-restricted-globals`](https://eslint.org/docs/rules/no-restricted-globals)|0|["error","isFinite","isNaN","addEventListener","blur","close","closed","confirm","defaultStatus","event","external","defaultstatus","find","focus","frameElement","frames","history","innerHeight","innerWidth","length","location","locationbar","menubar","moveBy","moveTo","name","onblur","onerror","onfocus","onload","onresize","onunload","open","opener","opera","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","print","removeEventListener","resizeBy","resizeTo","screen","screenLeft","screenTop","screenX","screenY","scroll","scrollbars","scrollBy","scrollTo","scrollX","scrollY","self","status","statusbar","stop","toolbar","top"]|
|[`no-restricted-imports`](https://eslint.org/docs/rules/no-restricted-imports)|N/A 👻|["off",{"paths":[],"patterns":[]}]|
|[`no-restricted-modules`](https://eslint.org/docs/rules/no-restricted-modules)|0|"off"|
|[`no-restricted-properties`](https://eslint.org/docs/rules/no-restricted-properties)|0|["error",{"object":"arguments","property":"callee","message":"arguments.callee is deprecated"},{"object":"global","property":"isFinite","message":"Please use Number.isFinite instead"},{"object":"self","property":"isFinite","message":"Please use Number.isFinite instead"},{"object":"window","property":"isFinite","message":"Please use Number.isFinite instead"},{"object":"global","property":"isNaN","message":"Please use Number.isNaN instead"},{"object":"self","property":"isNaN","message":"Please use Number.isNaN instead"},{"object":"window","property":"isNaN","message":"Please use Number.isNaN instead"},{"property":"__defineGetter__","message":"Please use Object.defineProperty instead."},{"property":"__defineSetter__","message":"Please use Object.defineProperty instead."},{"object":"Math","property":"pow","message":"Use the exponentiation operator (**) instead."}]|
|[`no-restricted-syntax`](https://eslint.org/docs/rules/no-restricted-syntax)|[2,"TemplateLiteral"]|["error",{"selector":"ForInStatement","message":"for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."},{"selector":"ForOfStatement","message":"iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."},{"selector":"LabeledStatement","message":"Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."},{"selector":"WithStatement","message":"`with` is disallowed in strict mode because it makes code impossible to predict and optimize."}]|
|[`no-return-assign`](https://eslint.org/docs/rules/no-return-assign)|error 🚨|["error","always"]|
|[`no-return-await`](https://eslint.org/docs/rules/no-return-await)|error 🚨|"error"|
|[`no-script-url`](https://eslint.org/docs/rules/no-script-url)|error 🚨|"error"|
|[`no-self-assign`](https://eslint.org/docs/rules/no-self-assign)|error 🚨|["error",{"props":false}]|
|[`no-self-compare`](https://eslint.org/docs/rules/no-self-compare)|error 🚨|"error"|
|[`no-sequences`](https://eslint.org/docs/rules/no-sequences)|error 🚨|"error"|
|[`no-shadow`](https://eslint.org/docs/rules/no-shadow)|[2,{"builtinGlobals":false,"hoist":"all"}]|"error"|
|[`no-shadow-restricted-names`](https://eslint.org/docs/rules/no-shadow-restricted-names)|error 🚨|"error"|
|[`no-spaced-func`](https://eslint.org/docs/rules/no-spaced-func)|error 🚨|"error"|
|[`no-sparse-arrays`](https://eslint.org/docs/rules/no-sparse-arrays)|error 🚨|"error"|
|[`no-sync`](https://eslint.org/docs/rules/no-sync)|0|"off"|
|[`no-tabs`](https://eslint.org/docs/rules/no-tabs)|error 🚨|"error"|
|[`no-template-curly-in-string`](https://eslint.org/docs/rules/no-template-curly-in-string)|error 🚨|"error"|
|[`no-ternary`](https://eslint.org/docs/rules/no-ternary)|0|"off"|
|[`no-this-before-super`](https://eslint.org/docs/rules/no-this-before-super)|error 🚨|"error"|
|[`no-throw-literal`](https://eslint.org/docs/rules/no-throw-literal)|error 🚨|"error"|
|[`no-trailing-spaces`](https://eslint.org/docs/rules/no-trailing-spaces)|error 🚨|["error",{"skipBlankLines":false,"ignoreComments":false}]|
|[`no-undef`](https://eslint.org/docs/rules/no-undef)|error 🚨|"error"|
|[`no-undef-init`](https://eslint.org/docs/rules/no-undef-init)|error 🚨|"error"|
|[`no-undefined`](https://eslint.org/docs/rules/no-undefined)|0|"off"|
|[`no-underscore-dangle`](https://eslint.org/docs/rules/no-underscore-dangle)|0|["error",{"allow":[],"allowAfterThis":false,"allowAfterSuper":false,"enforceInMethodNames":false}]|
|[`no-unexpected-multiline`](https://eslint.org/docs/rules/no-unexpected-multiline)|error 🚨|"error"|
|[`no-unmodified-loop-condition`](https://eslint.org/docs/rules/no-unmodified-loop-condition)|error 🚨|"off"|
|[`no-unneeded-ternary`](https://eslint.org/docs/rules/no-unneeded-ternary)|error 🚨|["error",{"defaultAssignment":false}]|
|[`no-unreachable`](https://eslint.org/docs/rules/no-unreachable)|warn ⚠️|"error"|
|[`no-unsafe-finally`](https://eslint.org/docs/rules/no-unsafe-finally)|error 🚨|"error"|
|[`no-unsafe-negation`](https://eslint.org/docs/rules/no-unsafe-negation)|error 🚨|"error"|
|[`no-unused-expressions`](https://eslint.org/docs/rules/no-unused-expressions)|error 🚨|["error",{"allowShortCircuit":false,"allowTernary":false,"allowTaggedTemplates":false}]|
|[`no-unused-labels`](https://eslint.org/docs/rules/no-unused-labels)|N/A 👻|"error"|
|[`no-unused-vars`](https://eslint.org/docs/rules/no-unused-vars)|error 🚨|["error",{"vars":"all","args":"after-used","ignoreRestSiblings":true}]|
|[`no-use-before-define`](https://eslint.org/docs/rules/no-use-before-define)|error 🚨|["error",{"functions":true,"classes":true,"variables":true}]|
|`no-use-extend-native/no-use-extend-native`|error 🚨|N/A 👻|
|[`no-useless-call`](https://eslint.org/docs/rules/no-useless-call)|error 🚨|"off"|
|[`no-useless-computed-key`](https://eslint.org/docs/rules/no-useless-computed-key)|error 🚨|"error"|
|[`no-useless-concat`](https://eslint.org/docs/rules/no-useless-concat)|error 🚨|"error"|
|[`no-useless-constructor`](https://eslint.org/docs/rules/no-useless-constructor)|error 🚨|"error"|
|[`no-useless-escape`](https://eslint.org/docs/rules/no-useless-escape)|error 🚨|"error"|
|[`no-useless-rename`](https://eslint.org/docs/rules/no-useless-rename)|[2,{"ignoreDestructuring":false,"ignoreExport":false,"ignoreImport":false}]|["error",{"ignoreDestructuring":false,"ignoreImport":false,"ignoreExport":false}]|
|[`no-useless-return`](https://eslint.org/docs/rules/no-useless-return)|error 🚨|"error"|
|[`no-var`](https://eslint.org/docs/rules/no-var)|error 🚨|"error"|
|[`no-void`](https://eslint.org/docs/rules/no-void)|error 🚨|"error"|
|[`no-warning-comments`](https://eslint.org/docs/rules/no-warning-comments)|[1,{"location":"start","terms":["todo","@toto"]}]|["off",{"terms":["todo","fixme","xxx"],"location":"start"}]|
|[`no-whitespace-before-property`](https://eslint.org/docs/rules/no-whitespace-before-property)|error 🚨|"error"|
|[`no-with`](https://eslint.org/docs/rules/no-with)|error 🚨|"error"|
|[`nonblock-statement-body-position`](https://eslint.org/docs/rules/nonblock-statement-body-position)|[2,"below"]|["error","beside",{"overrides":{}}]|
|[`object-curly-newline`](https://eslint.org/docs/rules/object-curly-newline)|N/A 👻|["error",{"ObjectExpression":{"minProperties":4,"multiline":true,"consistent":true},"ObjectPattern":{"minProperties":4,"multiline":true,"consistent":true},"ImportDeclaration":{"minProperties":4,"multiline":true,"consistent":true},"ExportDeclaration":{"minProperties":4,"multiline":true,"consistent":true}}]|
|[`object-curly-spacing`](https://eslint.org/docs/rules/object-curly-spacing)|[0,"never"]|["error","always"]|
|[`object-property-newline`](https://eslint.org/docs/rules/object-property-newline)|[2,{"allowMultiplePropertiesPerLine":false}]|["error",{"allowAllPropertiesOnSameLine":true}]|
|[`object-shorthand`](https://eslint.org/docs/rules/object-shorthand)|[2,"always"]|["error","always",{"ignoreConstructors":false,"avoidQuotes":true}]|
|[`one-var`](https://eslint.org/docs/rules/one-var)|[2,"never"]|["error","never"]|
|[`one-var-declaration-per-line`](https://eslint.org/docs/rules/one-var-declaration-per-line)|error 🚨|["error","always"]|
|[`operator-assignment`](https://eslint.org/docs/rules/operator-assignment)|[2,"always"]|["error","always"]|
|[`operator-linebreak`](https://eslint.org/docs/rules/operator-linebreak)|[2,"after"]|["error","before",{"overrides":{"=":"none"}}]|
|[`padded-blocks`](https://eslint.org/docs/rules/padded-blocks)|[2,"never"]|["error",{"blocks":"never","classes":"never","switches":"never"}]|
|[`padding-line-between-statements`](https://eslint.org/docs/rules/padding-line-between-statements)|0|"off"|
|[`prefer-arrow-callback`](https://eslint.org/docs/rules/prefer-arrow-callback)|error 🚨|["error",{"allowNamedFunctions":false,"allowUnboundThis":true}]|
|[`prefer-const`](https://eslint.org/docs/rules/prefer-const)|error 🚨|["error",{"destructuring":"any","ignoreReadBeforeAssign":true}]|
|[`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring)|0|["error",{"VariableDeclarator":{"array":false,"object":true},"AssignmentExpression":{"array":true,"object":true}},{"enforceForRenamedProperties":false}]|
|[`prefer-numeric-literals`](https://eslint.org/docs/rules/prefer-numeric-literals)|error 🚨|"error"|
|[`prefer-object-spread`](https://eslint.org/docs/rules/prefer-object-spread)|N/A 👻|"off"|
|[`prefer-promise-reject-errors`](https://eslint.org/docs/rules/prefer-promise-reject-errors)|error 🚨|["error",{"allowEmptyReject":true}]|
|[`prefer-reflect`](https://eslint.org/docs/rules/prefer-reflect)|0|"off"|
|[`prefer-rest-params`](https://eslint.org/docs/rules/prefer-rest-params)|error 🚨|"error"|
|[`prefer-spread`](https://eslint.org/docs/rules/prefer-spread)|error 🚨|"error"|
|[`prefer-template`](https://eslint.org/docs/rules/prefer-template)|0|"error"|
|[`promise/always-return`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/always-return.md)|error 🚨|N/A 👻|
|[`promise/avoid-new`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/avoid-new.md)|0|N/A 👻|
|[`promise/catch-or-return`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/catch-or-return.md)|error 🚨|N/A 👻|
|[`promise/no-callback-in-promise`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/no-callback-in-promise.md)|0|N/A 👻|
|[`promise/no-native`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/no-native.md)|0|N/A 👻|
|[`promise/no-nesting`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/no-nesting.md)|0|N/A 👻|
|[`promise/no-new-statics`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/no-new-statics.md)|error 🚨|N/A 👻|
|[`promise/no-promise-in-callback`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/no-promise-in-callback.md)|0|N/A 👻|
|[`promise/no-return-in-finally`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/no-return-in-finally.md)|error 🚨|N/A 👻|
|[`promise/no-return-wrap`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/no-return-wrap.md)|error 🚨|N/A 👻|
|[`promise/param-names`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/param-names.md)|error 🚨|N/A 👻|
|[`promise/prefer-await-to-callbacks`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/prefer-await-to-callbacks.md)|warn ⚠️|N/A 👻|
|[`promise/prefer-await-to-then`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/prefer-await-to-then.md)|warn ⚠️|N/A 👻|
|[`promise/valid-params`](https://github.com/xjamundx/eslint-plugin-promise/tree/v4.0.1/docs/rules/valid-params.md)|error 🚨|N/A 👻|
|[`quote-props`](https://eslint.org/docs/rules/quote-props)|[2,"as-needed"]|["error","as-needed",{"keywords":false,"unnecessary":true,"numbers":false}]|
|[`quotes`](https://eslint.org/docs/rules/quotes)|[2,"single"]|["error","single",{"avoidEscape":true}]|
|[`radix`](https://eslint.org/docs/rules/radix)|error 🚨|"error"|
|[`react/boolean-prop-naming`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/boolean-prop-naming.md)|0|["off",{"propTypeNames":["bool","mutuallyExclusiveTrueProps"],"rule":"^(is|has)[A-Z]([A-Za-z0-9]?)+","message":""}]|
|[`react/button-has-type`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/button-has-type.md)|error 🚨|["error",{"button":true,"submit":true,"reset":false}]|
|[`react/default-props-match-prop-types`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/default-props-match-prop-types.md)|error 🚨|["error",{"allowRequiredDefaults":false}]|
|[`react/destructuring-assignment`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/destructuring-assignment.md)|0|["error","always"]|
|[`react/display-name`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/display-name.md)|0|["off",{"ignoreTranspilerName":false}]|
|[`react/forbid-component-props`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-component-props.md)|error 🚨|["off",{"forbid":[]}]|
|[`react/forbid-dom-props`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-dom-props.md)|0|["off",{"forbid":[]}]|
|[`react/forbid-elements`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-elements.md)|0|["off",{"forbid":[]}]|
|[`react/forbid-foreign-prop-types`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-foreign-prop-types.md)|0|["warn",{"allowInPropTypes":true}]|
|[`react/forbid-prop-types`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-prop-types.md)|0|["error",{"forbid":["any","array","object"],"checkContextTypes":true,"checkChildContextTypes":true}]|
|[`react/jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-boolean-value.md)|[2,"always"]|["error","never",{"always":[]}]|
|[`react/jsx-child-element-spacing`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-child-element-spacing.md)|0|"off"|
|[`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-closing-bracket-location.md)|0|["error","line-aligned"]|
|[`react/jsx-closing-tag-location`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-closing-tag-location.md)|0|"error"|
|[`react/jsx-curly-brace-presence`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-curly-brace-presence.md)|0|["error",{"props":"never","children":"never"}]|
|[`react/jsx-curly-spacing`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-curly-spacing.md)|[2,"never",{"allowMultiline":true}]|["error","never",{"allowMultiline":true}]|
|[`react/jsx-equals-spacing`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-equals-spacing.md)|[2,"never"]|["error","never"]|
|[`react/jsx-filename-extension`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-filename-extension.md)|N/A 👻|["error",{"extensions":[".jsx"]}]|
|[`react/jsx-first-prop-new-line`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-first-prop-new-line.md)|[2,"multiline-multiprop"]|["error","multiline-multiprop"]|
|[`react/jsx-handler-names`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-handler-names.md)|[2,{"eventHandlerPrefix":"handle","eventHandlerPropPrefix":"on"}]|["off",{"eventHandlerPrefix":"handle","eventHandlerPropPrefix":"on"}]|
|[`react/jsx-indent`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-indent.md)|[2,2]|["error",2]|
|[`react/jsx-indent-props`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-indent-props.md)|[2,2]|["error",2]|
|[`react/jsx-key`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-key.md)|error 🚨|"off"|
|[`react/jsx-max-depth`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-max-depth.md)|N/A 👻|"off"|
|[`react/jsx-max-props-per-line`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-max-props-per-line.md)|[2,{"maximum":3,"when":"multiline"}]|["error",{"maximum":1,"when":"multiline"}]|
|[`react/jsx-no-bind`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-bind.md)|[2,{"allowArrowFunctions":false,"allowBind":false,"ignoreRefs":true}]|["error",{"ignoreRefs":true,"allowArrowFunctions":true,"allowFunctions":false,"allowBind":false,"ignoreDOMComponents":true}]|
|[`react/jsx-no-comment-textnodes`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-comment-textnodes.md)|error 🚨|"error"|
|[`react/jsx-no-duplicate-props`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-duplicate-props.md)|error 🚨|["error",{"ignoreCase":true}]|
|[`react/jsx-no-literals`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-literals.md)|0|["off",{"noStrings":true}]|
|[`react/jsx-no-target-blank`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-target-blank.md)|error 🚨|["error",{"enforceDynamicLinks":"always"}]|
|[`react/jsx-no-undef`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-undef.md)|error 🚨|"error"|
|[`react/jsx-one-expression-per-line`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-one-expression-per-line.md)|error 🚨|["error",{"allow":"single-child"}]|
|[`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-pascal-case.md)|error 🚨|["error",{"allowAllCaps":true,"ignore":[]}]|
|[`react/jsx-props-no-multi-spaces`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-multi-spaces.md)|error 🚨|"error"|
|[`react/jsx-sort-default-props`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-sort-default-props.md)|error 🚨|["off",{"ignoreCase":true}]|
|`react/jsx-sort-prop-types`|N/A 👻|"off"|
|[`react/jsx-sort-props`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-sort-props.md)|error 🚨|["off",{"ignoreCase":true,"callbacksLast":false,"shorthandFirst":false,"shorthandLast":false,"noSortAlphabetically":false,"reservedFirst":true}]|
|[`react/jsx-space-before-closing`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-space-before-closing.md)|N/A 👻|["off","always"]|
|[`react/jsx-tag-spacing`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-tag-spacing.md)|[2,{"afterOpening":"never","beforeSelfClosing":"always","closingSlash":"never"}]|["error",{"closingSlash":"never","beforeSelfClosing":"always","afterOpening":"never","beforeClosing":"never"}]|
|[`react/jsx-uses-react`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-uses-react.md)|warn ⚠️|["error"]|
|[`react/jsx-uses-vars`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-uses-vars.md)|warn ⚠️|"error"|
|[`react/jsx-wrap-multilines`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-wrap-multilines.md)|0|["error",{"declaration":"parens-new-line","assignment":"parens-new-line","return":"parens-new-line","arrow":"parens-new-line","condition":"parens-new-line","logical":"parens-new-line","prop":"parens-new-line"}]|
|[`react/no-access-state-in-setstate`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-access-state-in-setstate.md)|error 🚨|"error"|
|[`react/no-array-index-key`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-array-index-key.md)|error 🚨|"error"|
|[`react/no-children-prop`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-children-prop.md)|error 🚨|"error"|
|[`react/no-danger`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-danger.md)|error 🚨|"warn"|
|[`react/no-danger-with-children`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-danger-with-children.md)|error 🚨|"error"|
|[`react/no-deprecated`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-deprecated.md)|error 🚨|["error"]|
|[`react/no-did-mount-set-state`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/componentDidMount.md)|error 🚨|"off"|
|[`react/no-did-update-set-state`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/componentDidUpdate.md)|error 🚨|"error"|
|[`react/no-direct-mutation-state`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-direct-mutation-state.md)|error 🚨|"off"|
|[`react/no-find-dom-node`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-find-dom-node.md)|error 🚨|"error"|
|[`react/no-is-mounted`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-is-mounted.md)|error 🚨|"error"|
|[`react/no-multi-comp`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-multi-comp.md)|error 🚨|["error",{"ignoreStateless":true}]|
|[`react/no-redundant-should-component-update`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-redundant-should-component-update.md)|error 🚨|"error"|
|[`react/no-render-return-value`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-render-return-value.md)|N/A 👻|"error"|
|[`react/no-set-state`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-set-state.md)|error 🚨|"off"|
|[`react/no-string-refs`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-string-refs.md)|error 🚨|"error"|
|[`react/no-this-in-sfc`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-this-in-sfc.md)|error 🚨|"error"|
|[`react/no-typos`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-typos.md)|error 🚨|"error"|
|[`react/no-unescaped-entities`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unescaped-entities.md)|error 🚨|"error"|
|[`react/no-unknown-property`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unknown-property.md)|error 🚨|"error"|
|[`react/no-unsafe`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unsafe.md)|error 🚨|"off"|
|[`react/no-unused-prop-types`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unused-prop-types.md)|error 🚨|["error",{"customValidators":[],"skipShapeProps":true}]|
|[`react/no-unused-state`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unused-state.md)|error 🚨|"error"|
|[`react/no-will-update-set-state`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/componentWillUpdate.md)|error 🚨|"error"|
|[`react/prefer-es6-class`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/prefer-es6-class.md)|error 🚨|["error","always"]|
|[`react/prefer-stateless-function`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/prefer-stateless-function.md)|[2,{"ignorePureComponents":true}]|["error",{"ignorePureComponents":true}]|
|[`react/prop-types`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/prop-types.md)|error 🚨|["error",{"ignore":[],"customValidators":[],"skipUndeclared":false}]|
|[`react/react-in-jsx-scope`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/react-in-jsx-scope.md)|error 🚨|"error"|
|[`react/require-default-props`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/require-default-props.md)|error 🚨|["error",{"forbidDefaultForRequired":true}]|
|[`react/require-optimization`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/require-optimization.md)|N/A 👻|["off",{"allowDecorators":[]}]|
|[`react/require-render-return`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/require-render-return.md)|error 🚨|"error"|
|[`react/self-closing-comp`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/self-closing-comp.md)|error 🚨|"error"|
|[`react/sort-comp`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/sort-comp.md)|error 🚨|["error",{"order":["static-methods","instance-variables","lifecycle","/^on.+$/","getters","setters","/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/","instance-methods","everything-else","rendering"],"groups":{"lifecycle":["displayName","propTypes","contextTypes","childContextTypes","mixins","statics","defaultProps","constructor","getDefaultProps","getInitialState","state","getChildContext","componentWillMount","componentDidMount","componentWillReceiveProps","shouldComponentUpdate","componentWillUpdate","componentDidUpdate","componentWillUnmount"],"rendering":["/^render.+$/","render"]}}]|
|[`react/sort-prop-types`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/sort-prop-types.md)|error 🚨|["off",{"ignoreCase":true,"callbacksLast":false,"requiredFirst":false,"sortShapeProp":true}]|
|[`react/style-prop-object`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/style-prop-object.md)|error 🚨|"error"|
|[`react/void-dom-elements-no-children`](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/void-dom-elements-no-children.md)|error 🚨|"error"|
|[`require-atomic-updates`](https://eslint.org/docs/rules/require-atomic-updates)|N/A 👻|"off"|
|[`require-await`](https://eslint.org/docs/rules/require-await)|warn ⚠️|"off"|
|[`require-jsdoc`](https://eslint.org/docs/rules/require-jsdoc)|0|"off"|
|[`require-unicode-regexp`](https://eslint.org/docs/rules/require-unicode-regexp)|N/A 👻|"off"|
|[`require-yield`](https://eslint.org/docs/rules/require-yield)|error 🚨|"error"|
|[`rest-spread-spacing`](https://eslint.org/docs/rules/rest-spread-spacing)|N/A 👻|["error","never"]|
|[`semi`](https://eslint.org/docs/rules/semi)|[2,"always"]|["error","always"]|
|[`semi-spacing`](https://eslint.org/docs/rules/semi-spacing)|[2,{"after":true,"before":false}]|["error",{"before":false,"after":true}]|
|[`semi-style`](https://eslint.org/docs/rules/semi-style)|[2,"last"]|["error","last"]|
|[`sort-imports`](https://eslint.org/docs/rules/sort-imports)|N/A 👻|["off",{"ignoreCase":false,"ignoreMemberSort":false,"memberSyntaxSortOrder":["none","all","multiple","single"]}]|
|[`sort-keys`](https://eslint.org/docs/rules/sort-keys)|[2,"asc",{"caseSensitive":false,"natural":true}]|["off","asc",{"caseSensitive":false,"natural":true}]|
|[`sort-vars`](https://eslint.org/docs/rules/sort-vars)|error 🚨|"off"|
|[`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks)|[2,"always"]|"error"|
|[`space-before-function-paren`](https://eslint.org/docs/rules/space-before-function-paren)|[2,"always"]|["error",{"anonymous":"always","named":"never","asyncArrow":"always"}]|
|[`space-in-parens`](https://eslint.org/docs/rules/space-in-parens)|[2,"never"]|["error","never"]|
|[`space-infix-ops`](https://eslint.org/docs/rules/space-infix-ops)|error 🚨|"error"|
|[`space-unary-ops`](https://eslint.org/docs/rules/space-unary-ops)|[2,{"nonwords":false,"words":true}]|["error",{"words":true,"nonwords":false,"overrides":{}}]|
|[`spaced-comment`](https://eslint.org/docs/rules/spaced-comment)|[2,"always"]|["error","always",{"line":{"exceptions":["-","+"],"markers":["=","!"]},"block":{"exceptions":["-","+"],"markers":["=","!"],"balanced":true}}]|
|[`strict`](https://eslint.org/docs/rules/strict)|[2,"never"]|["error","never"]|
|[`switch-colon-spacing`](https://eslint.org/docs/rules/switch-colon-spacing)|[2,{"after":true,"before":false}]|["error",{"after":true,"before":false}]|
|[`symbol-description`](https://eslint.org/docs/rules/symbol-description)|error 🚨|"error"|
|[`template-curly-spacing`](https://eslint.org/docs/rules/template-curly-spacing)|N/A 👻|"error"|
|[`template-tag-spacing`](https://eslint.org/docs/rules/template-tag-spacing)|[2,"never"]|["error","never"]|
|[`unicode-bom`](https://eslint.org/docs/rules/unicode-bom)|[2,"never"]|["error","never"]|
|[`unicorn/catch-error-name`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/catch-error-name.md)|["error",{"name":"error"}]|N/A 👻|
|[`unicorn/custom-error-definition`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/custom-error-definition.md)|0|N/A 👻|
|[`unicorn/error-message`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/error-message.md)|error 🚨|N/A 👻|
|[`unicorn/explicit-length-check`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/explicit-length-check.md)|0|N/A 👻|
|[`unicorn/filename-case`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/filename-case.md)|0|N/A 👻|
|[`unicorn/import-index`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/import-index.md)|error 🚨|N/A 👻|
|[`unicorn/new-for-builtins`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/new-for-builtins.md)|error 🚨|N/A 👻|
|[`unicorn/no-abusive-eslint-disable`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/no-abusive-eslint-disable.md)|error 🚨|N/A 👻|
|[`unicorn/no-array-instanceof`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/no-array-instanceof.md)|error 🚨|N/A 👻|
|[`unicorn/no-fn-reference-in-iterator`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/no-fn-reference-in-iterator.md)|0|N/A 👻|
|[`unicorn/no-hex-escape`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/no-hex-escape.md)|error 🚨|N/A 👻|
|[`unicorn/no-new-buffer`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/no-new-buffer.md)|error 🚨|N/A 👻|
|[`unicorn/no-process-exit`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/no-process-exit.md)|0|N/A 👻|
|[`unicorn/number-literal-case`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/number-literal-case.md)|error 🚨|N/A 👻|
|[`unicorn/prefer-add-event-listener`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/prefer-add-event-listener.md)|0|N/A 👻|
|[`unicorn/prefer-exponentiation-operator`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/prefer-exponentiation-operator.md)|error 🚨|N/A 👻|
|[`unicorn/prefer-spread`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/prefer-spread.md)|0|N/A 👻|
|[`unicorn/prefer-starts-ends-with`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/prefer-starts-ends-with.md)|error 🚨|N/A 👻|
|[`unicorn/prefer-type-error`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/prefer-type-error.md)|error 🚨|N/A 👻|
|[`unicorn/regex-shorthand`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/regex-shorthand.md)|error 🚨|N/A 👻|
|[`unicorn/throw-new-error`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v6.0.1/docs/rules/throw-new-error.md)|error 🚨|N/A 👻|
|[`use-isnan`](https://eslint.org/docs/rules/use-isnan)|error 🚨|"error"|
|[`valid-jsdoc`](https://eslint.org/docs/rules/valid-jsdoc)|0|"off"|
|[`valid-typeof`](https://eslint.org/docs/rules/valid-typeof)|N/A 👻|["error",{"requireStringLiterals":true}]|
|[`vars-on-top`](https://eslint.org/docs/rules/vars-on-top)|error 🚨|"error"|
|[`wrap-iife`](https://eslint.org/docs/rules/wrap-iife)|[2,"inside"]|["error","outside",{"functionPrototypeMethods":false}]|
|[`wrap-regex`](https://eslint.org/docs/rules/wrap-regex)|0|"off"|
|[`yield-star-spacing`](https://eslint.org/docs/rules/yield-star-spacing)|N/A 👻|["error","after"]|
|[`yoda`](https://eslint.org/docs/rules/yoda)|0|"error"|
