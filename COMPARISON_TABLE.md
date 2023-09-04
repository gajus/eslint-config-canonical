# Table of Comparison

This is how Canonical ruleset compares to other popular configurations.

Emojis:

* 🚨 – error
* ⚠️ - warning
* ❌ - disabled
* 👻 - not in use
* 🛠 - fixable
* ⛔️ – deprecated rule

Configurations:

* CN – Canonical (1020 rules)
* [AB](https://www.npmjs.com/package/eslint-config-airbnb) – Airbnb (446 rules)
* [GG](https://www.npmjs.com/package/eslint-config-google) – Google (65 rules)
* [SD](https://www.npmjs.com/package/eslint-config-standard) – Standard (160 rules)
* [XO](https://github.com/xojs/eslint-config-xo) – XO (204 rules)


<!-- This comparison is created using `npm run compare` script. -->

<!-- START compare -->
|Rule|CN|[AB](https://www.npmjs.com/package/eslint-config-airbnb)|[GG](https://www.npmjs.com/package/eslint-config-google)|[SD](https://www.npmjs.com/package/eslint-config-standard)|[XO](https://github.com/xojs/eslint-config-xo)|
|---|---|---|---|---|---|
|`@babel/new-cap`<a id="rule-canonical-@babel/new-cap" />|❌|👻|👻|👻|👻|
|`@babel/no-invalid-this`<a id="rule-canonical-@babel/no-invalid-this" />|🚨|👻|👻|👻|👻|
|`@babel/no-unused-expressions`<a id="rule-canonical-@babel/no-unused-expressions" />|🚨|👻|👻|👻|👻|
|`@babel/object-curly-spacing`<a id="rule-canonical-@babel/object-curly-spacing" /> 🛠|🚨|👻|👻|👻|👻|
|`@babel/semi`<a id="rule-canonical-@babel/semi" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/adjacent-overload-signatures`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md)<a id="rule-canonical-@typescript-eslint/adjacent-overload-signatures" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/array-type`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md)<a id="rule-canonical-@typescript-eslint/array-type" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/await-thenable`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md)<a id="rule-canonical-@typescript-eslint/await-thenable" />|👻|👻|👻|👻|👻|
|[`@typescript-eslint/ban-ts-comment`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md)<a id="rule-canonical-@typescript-eslint/ban-ts-comment" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/ban-tslint-comment`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-tslint-comment.md)<a id="rule-canonical-@typescript-eslint/ban-tslint-comment" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/ban-types`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md)<a id="rule-canonical-@typescript-eslint/ban-types" /> 🛠|❌|👻|👻|👻|👻|
|[`@typescript-eslint/block-spacing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/block-spacing.md)<a id="rule-canonical-@typescript-eslint/block-spacing" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/brace-style`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md)<a id="rule-canonical-@typescript-eslint/brace-style" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/class-literal-property-style`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md)<a id="rule-canonical-@typescript-eslint/class-literal-property-style" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/class-methods-use-this`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-methods-use-this.md)<a id="rule-canonical-@typescript-eslint/class-methods-use-this" /> 🛠|❌|👻|👻|👻|👻|
|[`@typescript-eslint/comma-dangle`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md)<a id="rule-canonical-@typescript-eslint/comma-dangle" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/comma-spacing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md)<a id="rule-canonical-@typescript-eslint/comma-spacing" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/consistent-generic-constructors`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-generic-constructors.md)<a id="rule-canonical-@typescript-eslint/consistent-generic-constructors" /> 🛠|👻|👻|👻|👻|👻|
|[`@typescript-eslint/consistent-indexed-object-style`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md)<a id="rule-canonical-@typescript-eslint/consistent-indexed-object-style" /> 🛠|❌|👻|👻|👻|👻|
|[`@typescript-eslint/consistent-type-assertions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md)<a id="rule-canonical-@typescript-eslint/consistent-type-assertions" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/consistent-type-definitions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md)<a id="rule-canonical-@typescript-eslint/consistent-type-definitions" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/consistent-type-exports`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-exports.md)<a id="rule-canonical-@typescript-eslint/consistent-type-exports" /> 🛠|👻|👻|👻|👻|👻|
|[`@typescript-eslint/consistent-type-imports`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md)<a id="rule-canonical-@typescript-eslint/consistent-type-imports" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/default-param-last`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md)<a id="rule-canonical-@typescript-eslint/default-param-last" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/dot-notation`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md)<a id="rule-canonical-@typescript-eslint/dot-notation" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/explicit-function-return-type`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md)<a id="rule-canonical-@typescript-eslint/explicit-function-return-type" />|❌|👻|👻|👻|👻|
|[`@typescript-eslint/explicit-member-accessibility`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md)<a id="rule-canonical-@typescript-eslint/explicit-member-accessibility" /> 🛠|❌|👻|👻|👻|👻|
|[`@typescript-eslint/explicit-module-boundary-types`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md)<a id="rule-canonical-@typescript-eslint/explicit-module-boundary-types" />|❌|👻|👻|👻|👻|
|[`@typescript-eslint/func-call-spacing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md)<a id="rule-canonical-@typescript-eslint/func-call-spacing" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/indent`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md)<a id="rule-canonical-@typescript-eslint/indent" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/init-declarations`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md)<a id="rule-canonical-@typescript-eslint/init-declarations" />|❌|👻|👻|👻|👻|
|[`@typescript-eslint/key-spacing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/key-spacing.md)<a id="rule-canonical-@typescript-eslint/key-spacing" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/keyword-spacing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md)<a id="rule-canonical-@typescript-eslint/keyword-spacing" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/lines-around-comment`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-around-comment.md)<a id="rule-canonical-@typescript-eslint/lines-around-comment" /> 🛠|❌|👻|👻|👻|👻|
|[`@typescript-eslint/lines-between-class-members`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md)<a id="rule-canonical-@typescript-eslint/lines-between-class-members" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/member-delimiter-style`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md)<a id="rule-canonical-@typescript-eslint/member-delimiter-style" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/member-ordering`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md)<a id="rule-canonical-@typescript-eslint/member-ordering" />|❌|👻|👻|👻|👻|
|[`@typescript-eslint/method-signature-style`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md)<a id="rule-canonical-@typescript-eslint/method-signature-style" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/naming-convention`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md)<a id="rule-canonical-@typescript-eslint/naming-convention" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-array-constructor`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md)<a id="rule-canonical-@typescript-eslint/no-array-constructor" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-base-to-string`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md)<a id="rule-canonical-@typescript-eslint/no-base-to-string" />|👻|👻|👻|👻|👻|
|[`@typescript-eslint/no-confusing-non-null-assertion`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md)<a id="rule-canonical-@typescript-eslint/no-confusing-non-null-assertion" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-confusing-void-expression`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md)<a id="rule-canonical-@typescript-eslint/no-confusing-void-expression" /> 🛠|👻|👻|👻|👻|👻|
|[`@typescript-eslint/no-dupe-class-members`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md)<a id="rule-canonical-@typescript-eslint/no-dupe-class-members" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-duplicate-enum-values`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-duplicate-enum-values.md)<a id="rule-canonical-@typescript-eslint/no-duplicate-enum-values" />|👻|👻|👻|👻|👻|
|[`@typescript-eslint/no-duplicate-type-constituents`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-duplicate-type-constituents.md)<a id="rule-canonical-@typescript-eslint/no-duplicate-type-constituents" /> 🛠|👻|👻|👻|👻|👻|
|[`@typescript-eslint/no-dynamic-delete`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md)<a id="rule-canonical-@typescript-eslint/no-dynamic-delete" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-empty-function`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md)<a id="rule-canonical-@typescript-eslint/no-empty-function" />|❌|👻|👻|👻|👻|
|[`@typescript-eslint/no-empty-interface`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md)<a id="rule-canonical-@typescript-eslint/no-empty-interface" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-explicit-any`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md)<a id="rule-canonical-@typescript-eslint/no-explicit-any" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-extra-non-null-assertion`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md)<a id="rule-canonical-@typescript-eslint/no-extra-non-null-assertion" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-extra-parens`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md)<a id="rule-canonical-@typescript-eslint/no-extra-parens" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-extra-semi`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md)<a id="rule-canonical-@typescript-eslint/no-extra-semi" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-extraneous-class`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md)<a id="rule-canonical-@typescript-eslint/no-extraneous-class" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-floating-promises`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md)<a id="rule-canonical-@typescript-eslint/no-floating-promises" />|👻|👻|👻|👻|👻|
|[`@typescript-eslint/no-for-in-array`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md)<a id="rule-canonical-@typescript-eslint/no-for-in-array" />|👻|👻|👻|👻|👻|
|[`@typescript-eslint/no-implied-eval`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md)<a id="rule-canonical-@typescript-eslint/no-implied-eval" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-import-type-side-effects`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-import-type-side-effects.md)<a id="rule-canonical-@typescript-eslint/no-import-type-side-effects" /> 🛠|👻|👻|👻|👻|👻|
|[`@typescript-eslint/no-inferrable-types`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md)<a id="rule-canonical-@typescript-eslint/no-inferrable-types" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-invalid-this`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md)<a id="rule-canonical-@typescript-eslint/no-invalid-this" />|❌|👻|👻|👻|👻|
|[`@typescript-eslint/no-invalid-void-type`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md)<a id="rule-canonical-@typescript-eslint/no-invalid-void-type" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-loop-func`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md)<a id="rule-canonical-@typescript-eslint/no-loop-func" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-loss-of-precision`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md)<a id="rule-canonical-@typescript-eslint/no-loss-of-precision" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-magic-numbers`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md)<a id="rule-canonical-@typescript-eslint/no-magic-numbers" />|❌|👻|👻|👻|👻|
|[`@typescript-eslint/no-meaningless-void-operator`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-meaningless-void-operator.md)<a id="rule-canonical-@typescript-eslint/no-meaningless-void-operator" /> 🛠|👻|👻|👻|👻|👻|
|[`@typescript-eslint/no-misused-new`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md)<a id="rule-canonical-@typescript-eslint/no-misused-new" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-misused-promises`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md)<a id="rule-canonical-@typescript-eslint/no-misused-promises" />|👻|👻|👻|👻|👻|
|[`@typescript-eslint/no-mixed-enums`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-mixed-enums.md)<a id="rule-canonical-@typescript-eslint/no-mixed-enums" />|👻|👻|👻|👻|👻|
|[`@typescript-eslint/no-namespace`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md)<a id="rule-canonical-@typescript-eslint/no-namespace" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-non-null-asserted-nullish-coalescing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-nullish-coalescing.md)<a id="rule-canonical-@typescript-eslint/no-non-null-asserted-nullish-coalescing" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-non-null-asserted-optional-chain`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md)<a id="rule-canonical-@typescript-eslint/no-non-null-asserted-optional-chain" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-non-null-assertion`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md)<a id="rule-canonical-@typescript-eslint/no-non-null-assertion" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-redeclare`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md)<a id="rule-canonical-@typescript-eslint/no-redeclare" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-redundant-type-constituents`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redundant-type-constituents.md)<a id="rule-canonical-@typescript-eslint/no-redundant-type-constituents" />|👻|👻|👻|👻|👻|
|[`@typescript-eslint/no-require-imports`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md)<a id="rule-canonical-@typescript-eslint/no-require-imports" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-restricted-imports`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-restricted-imports.md)<a id="rule-canonical-@typescript-eslint/no-restricted-imports" />|❌|👻|👻|👻|👻|
|[`@typescript-eslint/no-shadow`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md)<a id="rule-canonical-@typescript-eslint/no-shadow" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-this-alias`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md)<a id="rule-canonical-@typescript-eslint/no-this-alias" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-throw-literal`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md)<a id="rule-canonical-@typescript-eslint/no-throw-literal" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-type-alias`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md)<a id="rule-canonical-@typescript-eslint/no-type-alias" /> ⛔️|❌|👻|👻|👻|👻|
|[`@typescript-eslint/no-unnecessary-boolean-literal-compare`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md)<a id="rule-canonical-@typescript-eslint/no-unnecessary-boolean-literal-compare" /> 🛠|❌|👻|👻|👻|👻|
|[`@typescript-eslint/no-unnecessary-condition`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md)<a id="rule-canonical-@typescript-eslint/no-unnecessary-condition" /> 🛠|❌|👻|👻|👻|👻|
|[`@typescript-eslint/no-unnecessary-qualifier`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md)<a id="rule-canonical-@typescript-eslint/no-unnecessary-qualifier" /> 🛠|👻|👻|👻|👻|👻|
|[`@typescript-eslint/no-unnecessary-type-arguments`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md)<a id="rule-canonical-@typescript-eslint/no-unnecessary-type-arguments" /> 🛠|❌|👻|👻|👻|👻|
|[`@typescript-eslint/no-unnecessary-type-assertion`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md)<a id="rule-canonical-@typescript-eslint/no-unnecessary-type-assertion" /> 🛠|❌|👻|👻|👻|👻|
|[`@typescript-eslint/no-unnecessary-type-constraint`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md)<a id="rule-canonical-@typescript-eslint/no-unnecessary-type-constraint" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-unsafe-argument`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-argument.md)<a id="rule-canonical-@typescript-eslint/no-unsafe-argument" />|❌|👻|👻|👻|👻|
|[`@typescript-eslint/no-unsafe-assignment`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md)<a id="rule-canonical-@typescript-eslint/no-unsafe-assignment" />|❌|👻|👻|👻|👻|
|[`@typescript-eslint/no-unsafe-call`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md)<a id="rule-canonical-@typescript-eslint/no-unsafe-call" />|❌|👻|👻|👻|👻|
|[`@typescript-eslint/no-unsafe-declaration-merging`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-declaration-merging.md)<a id="rule-canonical-@typescript-eslint/no-unsafe-declaration-merging" />|👻|👻|👻|👻|👻|
|[`@typescript-eslint/no-unsafe-enum-comparison`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-enum-comparison.md)<a id="rule-canonical-@typescript-eslint/no-unsafe-enum-comparison" />|👻|👻|👻|👻|👻|
|[`@typescript-eslint/no-unsafe-member-access`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md)<a id="rule-canonical-@typescript-eslint/no-unsafe-member-access" />|❌|👻|👻|👻|👻|
|[`@typescript-eslint/no-unsafe-return`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md)<a id="rule-canonical-@typescript-eslint/no-unsafe-return" />|❌|👻|👻|👻|👻|
|[`@typescript-eslint/no-unused-expressions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md)<a id="rule-canonical-@typescript-eslint/no-unused-expressions" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-unused-vars`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md)<a id="rule-canonical-@typescript-eslint/no-unused-vars" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-use-before-define`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md)<a id="rule-canonical-@typescript-eslint/no-use-before-define" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-useless-constructor`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md)<a id="rule-canonical-@typescript-eslint/no-useless-constructor" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/no-useless-empty-export`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-empty-export.md)<a id="rule-canonical-@typescript-eslint/no-useless-empty-export" /> 🛠|👻|👻|👻|👻|👻|
|[`@typescript-eslint/no-var-requires`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md)<a id="rule-canonical-@typescript-eslint/no-var-requires" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/non-nullable-type-assertion-style`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md)<a id="rule-canonical-@typescript-eslint/non-nullable-type-assertion-style" /> 🛠|❌|👻|👻|👻|👻|
|[`@typescript-eslint/object-curly-spacing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/object-curly-spacing.md)<a id="rule-canonical-@typescript-eslint/object-curly-spacing" /> 🛠|❌|👻|👻|👻|👻|
|[`@typescript-eslint/padding-line-between-statements`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/padding-line-between-statements.md)<a id="rule-canonical-@typescript-eslint/padding-line-between-statements" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/parameter-properties`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/parameter-properties.md)<a id="rule-canonical-@typescript-eslint/parameter-properties" />|👻|👻|👻|👻|👻|
|[`@typescript-eslint/prefer-as-const`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md)<a id="rule-canonical-@typescript-eslint/prefer-as-const" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/prefer-enum-initializers`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md)<a id="rule-canonical-@typescript-eslint/prefer-enum-initializers" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/prefer-for-of`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md)<a id="rule-canonical-@typescript-eslint/prefer-for-of" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/prefer-function-type`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md)<a id="rule-canonical-@typescript-eslint/prefer-function-type" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/prefer-includes`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md)<a id="rule-canonical-@typescript-eslint/prefer-includes" /> 🛠|👻|👻|👻|👻|👻|
|[`@typescript-eslint/prefer-literal-enum-member`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md)<a id="rule-canonical-@typescript-eslint/prefer-literal-enum-member" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/prefer-namespace-keyword`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md)<a id="rule-canonical-@typescript-eslint/prefer-namespace-keyword" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/prefer-nullish-coalescing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md)<a id="rule-canonical-@typescript-eslint/prefer-nullish-coalescing" />|👻|👻|👻|👻|👻|
|[`@typescript-eslint/prefer-optional-chain`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md)<a id="rule-canonical-@typescript-eslint/prefer-optional-chain" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/prefer-readonly`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md)<a id="rule-canonical-@typescript-eslint/prefer-readonly" /> 🛠|👻|👻|👻|👻|👻|
|[`@typescript-eslint/prefer-readonly-parameter-types`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md)<a id="rule-canonical-@typescript-eslint/prefer-readonly-parameter-types" />|❌|👻|👻|👻|👻|
|[`@typescript-eslint/prefer-reduce-type-parameter`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md)<a id="rule-canonical-@typescript-eslint/prefer-reduce-type-parameter" /> 🛠|👻|👻|👻|👻|👻|
|[`@typescript-eslint/prefer-regexp-exec`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md)<a id="rule-canonical-@typescript-eslint/prefer-regexp-exec" /> 🛠|👻|👻|👻|👻|👻|
|[`@typescript-eslint/prefer-return-this-type`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-return-this-type.md)<a id="rule-canonical-@typescript-eslint/prefer-return-this-type" /> 🛠|👻|👻|👻|👻|👻|
|[`@typescript-eslint/prefer-string-starts-ends-with`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md)<a id="rule-canonical-@typescript-eslint/prefer-string-starts-ends-with" /> 🛠|👻|👻|👻|👻|👻|
|[`@typescript-eslint/prefer-ts-expect-error`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md)<a id="rule-canonical-@typescript-eslint/prefer-ts-expect-error" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/promise-function-async`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md)<a id="rule-canonical-@typescript-eslint/promise-function-async" /> 🛠|👻|👻|👻|👻|👻|
|[`@typescript-eslint/quotes`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md)<a id="rule-canonical-@typescript-eslint/quotes" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/require-array-sort-compare`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md)<a id="rule-canonical-@typescript-eslint/require-array-sort-compare" />|👻|👻|👻|👻|👻|
|[`@typescript-eslint/require-await`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md)<a id="rule-canonical-@typescript-eslint/require-await" />|❌|👻|👻|👻|👻|
|[`@typescript-eslint/restrict-plus-operands`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md)<a id="rule-canonical-@typescript-eslint/restrict-plus-operands" />|❌|👻|👻|👻|👻|
|[`@typescript-eslint/restrict-template-expressions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md)<a id="rule-canonical-@typescript-eslint/restrict-template-expressions" />|❌|👻|👻|👻|👻|
|[`@typescript-eslint/return-await`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md)<a id="rule-canonical-@typescript-eslint/return-await" /> 🛠|👻|👻|👻|👻|👻|
|[`@typescript-eslint/semi`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md)<a id="rule-canonical-@typescript-eslint/semi" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/sort-type-constituents`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/sort-type-constituents.md)<a id="rule-canonical-@typescript-eslint/sort-type-constituents" /> 🛠|👻|👻|👻|👻|👻|
|[`@typescript-eslint/space-before-blocks`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-blocks.md)<a id="rule-canonical-@typescript-eslint/space-before-blocks" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/space-before-function-paren`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md)<a id="rule-canonical-@typescript-eslint/space-before-function-paren" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/space-infix-ops`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-infix-ops.md)<a id="rule-canonical-@typescript-eslint/space-infix-ops" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/strict-boolean-expressions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md)<a id="rule-canonical-@typescript-eslint/strict-boolean-expressions" /> 🛠|❌|👻|👻|👻|👻|
|[`@typescript-eslint/switch-exhaustiveness-check`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md)<a id="rule-canonical-@typescript-eslint/switch-exhaustiveness-check" />|👻|👻|👻|👻|👻|
|[`@typescript-eslint/triple-slash-reference`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md)<a id="rule-canonical-@typescript-eslint/triple-slash-reference" />|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/type-annotation-spacing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md)<a id="rule-canonical-@typescript-eslint/type-annotation-spacing" /> 🛠|🚨|👻|👻|👻|👻|
|[`@typescript-eslint/typedef`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md)<a id="rule-canonical-@typescript-eslint/typedef" />|❌|👻|👻|👻|👻|
|[`@typescript-eslint/unbound-method`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md)<a id="rule-canonical-@typescript-eslint/unbound-method" />|👻|👻|👻|👻|👻|
|[`@typescript-eslint/unified-signatures`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md)<a id="rule-canonical-@typescript-eslint/unified-signatures" />|🚨|👻|👻|👻|👻|
|[`accessor-pairs`](https://eslint.org/docs/rules/accessor-pairs)<a id="rule-canonical-accessor-pairs" />|🚨|❌|👻|🚨<a href="#rule-standard-accessor-pairs">?</a>|🚨<a href="#rule-xo-accessor-pairs">?</a>|
|[`array-bracket-newline`](https://eslint.org/docs/rules/array-bracket-newline)<a id="rule-canonical-array-bracket-newline" /> 🛠|🚨|❌|❌|👻|🚨<a href="#rule-xo-array-bracket-newline">?</a>|
|[`array-bracket-spacing`](https://eslint.org/docs/rules/array-bracket-spacing)<a id="rule-canonical-array-bracket-spacing" /> 🛠|🚨|🚨|🚨|🚨|🚨|
|[`array-callback-return`](https://eslint.org/docs/rules/array-callback-return)<a id="rule-canonical-array-callback-return" />|🚨|🚨<a href="#rule-airbnb-array-callback-return">?</a>|👻|🚨<a href="#rule-standard-array-callback-return">?</a>|🚨<a href="#rule-xo-array-callback-return">?</a>|
|[`array-element-newline`](https://eslint.org/docs/rules/array-element-newline)<a id="rule-canonical-array-element-newline" /> 🛠|🚨|❌|❌|👻|🚨<a href="#rule-xo-array-element-newline">?</a>|
|[`arrow-body-style`](https://eslint.org/docs/rules/arrow-body-style)<a id="rule-canonical-arrow-body-style" /> 🛠|🚨|🚨<a href="#rule-airbnb-arrow-body-style">?</a>|👻|👻|🚨<a href="#rule-xo-arrow-body-style">?</a>|
|[`arrow-parens`](https://eslint.org/docs/rules/arrow-parens)<a id="rule-canonical-arrow-parens" /> 🛠|🚨|🚨|🚨|👻|🚨<a href="#rule-xo-arrow-parens">?</a>|
|[`arrow-spacing`](https://eslint.org/docs/rules/arrow-spacing)<a id="rule-canonical-arrow-spacing" /> 🛠|🚨|🚨|👻|🚨|🚨|
|[`ava/assertion-arguments`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/assertion-arguments.md)<a id="rule-canonical-ava/assertion-arguments" /> 🛠|🚨|👻|👻|👻|👻|
|[`ava/hooks-order`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/hooks-order.md)<a id="rule-canonical-ava/hooks-order" /> 🛠|🚨|👻|👻|👻|👻|
|[`ava/max-asserts`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/max-asserts.md)<a id="rule-canonical-ava/max-asserts" />|🚨|👻|👻|👻|👻|
|[`ava/no-async-fn-without-await`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-async-fn-without-await.md)<a id="rule-canonical-ava/no-async-fn-without-await" />|🚨|👻|👻|👻|👻|
|[`ava/no-duplicate-modifiers`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-duplicate-modifiers.md)<a id="rule-canonical-ava/no-duplicate-modifiers" />|🚨|👻|👻|👻|👻|
|[`ava/no-identical-title`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-identical-title.md)<a id="rule-canonical-ava/no-identical-title" />|🚨|👻|👻|👻|👻|
|[`ava/no-ignored-test-files`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-ignored-test-files.md)<a id="rule-canonical-ava/no-ignored-test-files" />|🚨|👻|👻|👻|👻|
|[`ava/no-import-test-files`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-import-test-files.md)<a id="rule-canonical-ava/no-import-test-files" />|❌|👻|👻|👻|👻|
|[`ava/no-incorrect-deep-equal`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-incorrect-deep-equal.md)<a id="rule-canonical-ava/no-incorrect-deep-equal" /> 🛠|🚨|👻|👻|👻|👻|
|[`ava/no-inline-assertions`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-inline-assertions.md)<a id="rule-canonical-ava/no-inline-assertions" /> 🛠|🚨|👻|👻|👻|👻|
|[`ava/no-nested-tests`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-nested-tests.md)<a id="rule-canonical-ava/no-nested-tests" />|🚨|👻|👻|👻|👻|
|[`ava/no-only-test`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-only-test.md)<a id="rule-canonical-ava/no-only-test" /> 🛠|🚨|👻|👻|👻|👻|
|[`ava/no-skip-assert`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-skip-assert.md)<a id="rule-canonical-ava/no-skip-assert" />|🚨|👻|👻|👻|👻|
|[`ava/no-skip-test`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-skip-test.md)<a id="rule-canonical-ava/no-skip-test" /> 🛠|🚨|👻|👻|👻|👻|
|[`ava/no-todo-implementation`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-todo-implementation.md)<a id="rule-canonical-ava/no-todo-implementation" />|🚨|👻|👻|👻|👻|
|[`ava/no-todo-test`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-todo-test.md)<a id="rule-canonical-ava/no-todo-test" />|🚨|👻|👻|👻|👻|
|[`ava/no-unknown-modifiers`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-unknown-modifiers.md)<a id="rule-canonical-ava/no-unknown-modifiers" />|🚨|👻|👻|👻|👻|
|[`ava/prefer-async-await`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/prefer-async-await.md)<a id="rule-canonical-ava/prefer-async-await" />|🚨|👻|👻|👻|👻|
|[`ava/prefer-power-assert`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/prefer-power-assert.md)<a id="rule-canonical-ava/prefer-power-assert" />|❌|👻|👻|👻|👻|
|[`ava/prefer-t-regex`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/prefer-t-regex.md)<a id="rule-canonical-ava/prefer-t-regex" /> 🛠|🚨|👻|👻|👻|👻|
|[`ava/test-title`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/test-title.md)<a id="rule-canonical-ava/test-title" />|🚨|👻|👻|👻|👻|
|[`ava/test-title-format`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/test-title-format.md)<a id="rule-canonical-ava/test-title-format" />|❌|👻|👻|👻|👻|
|[`ava/use-t`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/use-t.md)<a id="rule-canonical-ava/use-t" />|🚨|👻|👻|👻|👻|
|[`ava/use-t-throws-async-well`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/use-t-throws-async-well.md)<a id="rule-canonical-ava/use-t-throws-async-well" /> 🛠|🚨|👻|👻|👻|👻|
|[`ava/use-t-well`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/use-t-well.md)<a id="rule-canonical-ava/use-t-well" /> 🛠|🚨|👻|👻|👻|👻|
|[`ava/use-test`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/use-test.md)<a id="rule-canonical-ava/use-test" />|🚨|👻|👻|👻|👻|
|[`ava/use-true-false`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/use-true-false.md)<a id="rule-canonical-ava/use-true-false" />|🚨|👻|👻|👻|👻|
|[`block-scoped-var`](https://eslint.org/docs/rules/block-scoped-var)<a id="rule-canonical-block-scoped-var" />|🚨|🚨|👻|👻|🚨|
|[`block-spacing`](https://eslint.org/docs/rules/block-spacing)<a id="rule-canonical-block-spacing" /> 🛠|🚨|🚨|🚨<a href="#rule-google-block-spacing">?</a>|🚨|👻|
|[`brace-style`](https://eslint.org/docs/rules/brace-style)<a id="rule-canonical-brace-style" /> 🛠|🚨|🚨<a href="#rule-airbnb-brace-style">?</a>|🚨<a href="#rule-google-brace-style">?</a>|🚨<a href="#rule-standard-brace-style">?</a>|🚨|
|[`callback-return`](https://eslint.org/docs/rules/callback-return)<a id="rule-canonical-callback-return" /> ⛔️|👻|❌|👻|👻|👻|
|[`camelcase`](https://eslint.org/docs/rules/camelcase)<a id="rule-canonical-camelcase" />|❌|🚨<a href="#rule-airbnb-camelcase">?</a>|🚨<a href="#rule-google-camelcase">?</a>|🚨<a href="#rule-standard-camelcase">?</a>|🚨<a href="#rule-xo-camelcase">?</a>|
|[`canonical/destructuring-property-newline`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-destructuring-property-newline)<a id="rule-canonical-canonical/destructuring-property-newline" /> 🛠|🚨|👻|👻|👻|👻|
|[`canonical/export-specifier-newline`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-export-specifier-newline)<a id="rule-canonical-canonical/export-specifier-newline" /> 🛠|🚨|👻|👻|👻|👻|
|[`canonical/filename-match-exported`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-filename-match-exported)<a id="rule-canonical-canonical/filename-match-exported" />|🚨|👻|👻|👻|👻|
|[`canonical/filename-match-regex`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-filename-match-regex)<a id="rule-canonical-canonical/filename-match-regex" />|⚠️|👻|👻|👻|👻|
|[`canonical/filename-no-index`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-filename-no-index)<a id="rule-canonical-canonical/filename-no-index" />|❌|👻|👻|👻|👻|
|[`canonical/id-match`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-id-match)<a id="rule-canonical-canonical/id-match" />|🚨|👻|👻|👻|👻|
|[`canonical/import-specifier-newline`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-import-specifier-newline)<a id="rule-canonical-canonical/import-specifier-newline" /> 🛠|🚨|👻|👻|👻|👻|
|[`canonical/no-barrel-import`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-no-barrel-import)<a id="rule-canonical-canonical/no-barrel-import" /> 🛠|👻|👻|👻|👻|👻|
|[`canonical/no-export-all`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-no-export-all)<a id="rule-canonical-canonical/no-export-all" /> 🛠|👻|👻|👻|👻|👻|
|[`canonical/no-reassign-imports`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-no-reassign-imports)<a id="rule-canonical-canonical/no-reassign-imports" />|👻|👻|👻|👻|👻|
|[`canonical/no-restricted-strings`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-no-restricted-strings)<a id="rule-canonical-canonical/no-restricted-strings" />|❌|👻|👻|👻|👻|
|[`canonical/no-unused-exports`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-no-unused-exports)<a id="rule-canonical-canonical/no-unused-exports" />|👻|👻|👻|👻|👻|
|[`canonical/no-use-extend-native`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-no-use-extend-native)<a id="rule-canonical-canonical/no-use-extend-native" />|🚨|👻|👻|👻|👻|
|[`canonical/prefer-import-alias`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-prefer-import-alias)<a id="rule-canonical-canonical/prefer-import-alias" /> 🛠|👻|👻|👻|👻|👻|
|[`canonical/prefer-inline-type-import`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-prefer-inline-type-import)<a id="rule-canonical-canonical/prefer-inline-type-import" /> 🛠|🚨|👻|👻|👻|👻|
|[`canonical/prefer-react-lazy`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-prefer-react-lazy)<a id="rule-canonical-canonical/prefer-react-lazy" />|👻|👻|👻|👻|👻|
|[`canonical/prefer-use-mount`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-prefer-use-mount)<a id="rule-canonical-canonical/prefer-use-mount" />|👻|👻|👻|👻|👻|
|[`canonical/require-extension`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-require-extension)<a id="rule-canonical-canonical/require-extension" /> 🛠|👻|👻|👻|👻|👻|
|[`canonical/sort-keys`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-sort-keys)<a id="rule-canonical-canonical/sort-keys" /> 🛠|🚨|👻|👻|👻|👻|
|[`canonical/virtual-module`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-virtual-module)<a id="rule-canonical-canonical/virtual-module" /> 🛠|👻|👻|👻|👻|👻|
|[`capitalized-comments`](https://eslint.org/docs/rules/capitalized-comments)<a id="rule-canonical-capitalized-comments" /> 🛠|❌|❌|👻|👻|🚨<a href="#rule-xo-capitalized-comments">?</a>|
|[`class-methods-use-this`](https://eslint.org/docs/rules/class-methods-use-this)<a id="rule-canonical-class-methods-use-this" />|❌|🚨<a href="#rule-airbnb-class-methods-use-this">?</a>|👻|👻|👻|
|[`comma-dangle`](https://eslint.org/docs/rules/comma-dangle)<a id="rule-canonical-comma-dangle" /> 🛠|🚨|🚨|🚨<a href="#rule-google-comma-dangle">?</a>|🚨<a href="#rule-standard-comma-dangle">?</a>|🚨<a href="#rule-xo-comma-dangle">?</a>|
|[`comma-spacing`](https://eslint.org/docs/rules/comma-spacing)<a id="rule-canonical-comma-spacing" /> 🛠|🚨|🚨|🚨<a href="#rule-google-comma-spacing">?</a>|🚨|🚨|
|[`comma-style`](https://eslint.org/docs/rules/comma-style)<a id="rule-canonical-comma-style" /> 🛠|🚨|🚨<a href="#rule-airbnb-comma-style">?</a>|🚨<a href="#rule-google-comma-style">?</a>|🚨|🚨|
|[`complexity`](https://eslint.org/docs/rules/complexity)<a id="rule-canonical-complexity" />|🚨|❌|👻|👻|⚠️<a href="#rule-xo-complexity">?</a>|
|[`computed-property-spacing`](https://eslint.org/docs/rules/computed-property-spacing)<a id="rule-canonical-computed-property-spacing" /> 🛠|🚨|🚨|🚨<a href="#rule-google-computed-property-spacing">?</a>|🚨<a href="#rule-standard-computed-property-spacing">?</a>|🚨<a href="#rule-xo-computed-property-spacing">?</a>|
|[`consistent-return`](https://eslint.org/docs/rules/consistent-return)<a id="rule-canonical-consistent-return" />|🚨|🚨|👻|👻|👻|
|[`consistent-this`](https://eslint.org/docs/rules/consistent-this)<a id="rule-canonical-consistent-this" />|🚨|❌|👻|👻|👻|
|[`constructor-super`](https://eslint.org/docs/rules/constructor-super)<a id="rule-canonical-constructor-super" />|🚨|🚨|🚨|🚨|🚨|
|[`curly`](https://eslint.org/docs/rules/curly)<a id="rule-canonical-curly" /> 🛠|🚨|🚨<a href="#rule-airbnb-curly">?</a>|🚨<a href="#rule-google-curly">?</a>|🚨<a href="#rule-standard-curly">?</a>|🚨|
|[`default-case`](https://eslint.org/docs/rules/default-case)<a id="rule-canonical-default-case" />|🚨|🚨<a href="#rule-airbnb-default-case">?</a>|👻|👻|🚨|
|[`default-case-last`](https://eslint.org/docs/rules/default-case-last)<a id="rule-canonical-default-case-last" />|🚨|🚨|👻|🚨|🚨|
|[`default-param-last`](https://eslint.org/docs/rules/default-param-last)<a id="rule-canonical-default-param-last" />|🚨|🚨|👻|👻|👻|
|[`dot-location`](https://eslint.org/docs/rules/dot-location)<a id="rule-canonical-dot-location" /> 🛠|🚨|🚨|👻|🚨|🚨|
|[`dot-notation`](https://eslint.org/docs/rules/dot-notation)<a id="rule-canonical-dot-notation" /> 🛠|🚨|🚨<a href="#rule-airbnb-dot-notation">?</a>|👻|🚨<a href="#rule-standard-dot-notation">?</a>|🚨|
|[`eol-last`](https://eslint.org/docs/rules/eol-last)<a id="rule-canonical-eol-last" /> 🛠|🚨|🚨<a href="#rule-airbnb-eol-last">?</a>|🚨|🚨|🚨|
|[`eqeqeq`](https://eslint.org/docs/rules/eqeqeq)<a id="rule-canonical-eqeqeq" /> 🛠|🚨|🚨<a href="#rule-airbnb-eqeqeq">?</a>|👻|🚨<a href="#rule-standard-eqeqeq">?</a>|🚨|
|[`eslint-comments/disable-enable-pair`](https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/disable-enable-pair.md)<a id="rule-canonical-eslint-comments/disable-enable-pair" />|🚨|👻|👻|👻|👻|
|[`eslint-comments/no-aggregating-enable`](https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-aggregating-enable.md)<a id="rule-canonical-eslint-comments/no-aggregating-enable" />|🚨|👻|👻|👻|👻|
|[`eslint-comments/no-duplicate-disable`](https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-duplicate-disable.md)<a id="rule-canonical-eslint-comments/no-duplicate-disable" />|🚨|👻|👻|👻|👻|
|[`eslint-comments/no-restricted-disable`](https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-restricted-disable.md)<a id="rule-canonical-eslint-comments/no-restricted-disable" />|❌|👻|👻|👻|👻|
|[`eslint-comments/no-unlimited-disable`](https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-unlimited-disable.md)<a id="rule-canonical-eslint-comments/no-unlimited-disable" />|🚨|👻|👻|👻|👻|
|[`eslint-comments/no-unused-disable`](https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-unused-disable.md)<a id="rule-canonical-eslint-comments/no-unused-disable" />|❌|👻|👻|👻|👻|
|[`eslint-comments/no-unused-enable`](https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-unused-enable.md)<a id="rule-canonical-eslint-comments/no-unused-enable" />|❌|👻|👻|👻|👻|
|[`eslint-comments/no-use`](https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-use.md)<a id="rule-canonical-eslint-comments/no-use" />|❌|👻|👻|👻|👻|
|[`eslint-comments/require-description`](https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/require-description.md)<a id="rule-canonical-eslint-comments/require-description" />|❌|👻|👻|👻|👻|
|[`flowtype/array-style-complex-type`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-array-style-complex-type)<a id="rule-canonical-flowtype/array-style-complex-type" /> 🛠|🚨|👻|👻|👻|👻|
|[`flowtype/array-style-simple-type`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-array-style-simple-type)<a id="rule-canonical-flowtype/array-style-simple-type" /> 🛠|🚨|👻|👻|👻|👻|
|[`flowtype/arrow-parens`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-arrow-parens)<a id="rule-canonical-flowtype/arrow-parens" /> 🛠|🚨|👻|👻|👻|👻|
|[`flowtype/boolean-style`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-boolean-style)<a id="rule-canonical-flowtype/boolean-style" /> 🛠|🚨|👻|👻|👻|👻|
|[`flowtype/define-flow-type`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-define-flow-type)<a id="rule-canonical-flowtype/define-flow-type" />|🚨|👻|👻|👻|👻|
|[`flowtype/delimiter-dangle`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-delimiter-dangle)<a id="rule-canonical-flowtype/delimiter-dangle" /> 🛠|🚨|👻|👻|👻|👻|
|[`flowtype/enforce-line-break`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-enforce-line-break)<a id="rule-canonical-flowtype/enforce-line-break" /> 🛠|🚨|👻|👻|👻|👻|
|[`flowtype/generic-spacing`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-generic-spacing)<a id="rule-canonical-flowtype/generic-spacing" /> 🛠|🚨|👻|👻|👻|👻|
|[`flowtype/interface-id-match`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-interface-id-match)<a id="rule-canonical-flowtype/interface-id-match" />|❌|👻|👻|👻|👻|
|[`flowtype/newline-after-flow-annotation`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-newline-after-flow-annotation)<a id="rule-canonical-flowtype/newline-after-flow-annotation" /> 🛠|🚨|👻|👻|👻|👻|
|[`flowtype/no-dupe-keys`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-no-dupe-keys)<a id="rule-canonical-flowtype/no-dupe-keys" />|🚨|👻|👻|👻|👻|
|[`flowtype/no-duplicate-type-union-intersection-members`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-no-duplicate-type-union-intersection-members)<a id="rule-canonical-flowtype/no-duplicate-type-union-intersection-members" /> 🛠|🚨|👻|👻|👻|👻|
|[`flowtype/no-existential-type`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-no-existential-type)<a id="rule-canonical-flowtype/no-existential-type" />|❌|👻|👻|👻|👻|
|[`flowtype/no-flow-fix-me-comments`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-no-flow-fix-me-comments)<a id="rule-canonical-flowtype/no-flow-fix-me-comments" />|🚨|👻|👻|👻|👻|
|[`flowtype/no-internal-flow-type`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-no-internal-flow-type)<a id="rule-canonical-flowtype/no-internal-flow-type" />|🚨|👻|👻|👻|👻|
|[`flowtype/no-mixed`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-no-mixed)<a id="rule-canonical-flowtype/no-mixed" />|🚨|👻|👻|👻|👻|
|[`flowtype/no-mutable-array`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-no-mutable-array)<a id="rule-canonical-flowtype/no-mutable-array" /> 🛠|🚨|👻|👻|👻|👻|
|[`flowtype/no-primitive-constructor-types`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-no-primitive-constructor-types)<a id="rule-canonical-flowtype/no-primitive-constructor-types" />|🚨|👻|👻|👻|👻|
|[`flowtype/no-types-missing-file-annotation`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-no-types-missing-file-annotation)<a id="rule-canonical-flowtype/no-types-missing-file-annotation" />|🚨|👻|👻|👻|👻|
|[`flowtype/no-unused-expressions`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-no-unused-expressions)<a id="rule-canonical-flowtype/no-unused-expressions" />|❌|👻|👻|👻|👻|
|[`flowtype/no-weak-types`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-no-weak-types)<a id="rule-canonical-flowtype/no-weak-types" />|🚨|👻|👻|👻|👻|
|[`flowtype/object-type-curly-spacing`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-object-type-curly-spacing)<a id="rule-canonical-flowtype/object-type-curly-spacing" /> 🛠|❌|👻|👻|👻|👻|
|[`flowtype/object-type-delimiter`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-object-type-delimiter)<a id="rule-canonical-flowtype/object-type-delimiter" /> 🛠|🚨|👻|👻|👻|👻|
|[`flowtype/quotes`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-quotes)<a id="rule-canonical-flowtype/quotes" /> 🛠|🚨|👻|👻|👻|👻|
|[`flowtype/require-compound-type-alias`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-require-compound-type-alias)<a id="rule-canonical-flowtype/require-compound-type-alias" />|❌|👻|👻|👻|👻|
|[`flowtype/require-exact-type`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-require-exact-type)<a id="rule-canonical-flowtype/require-exact-type" /> 🛠|🚨|👻|👻|👻|👻|
|[`flowtype/require-indexer-name`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-require-indexer-name)<a id="rule-canonical-flowtype/require-indexer-name" /> 🛠|🚨|👻|👻|👻|👻|
|[`flowtype/require-inexact-type`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-require-inexact-type)<a id="rule-canonical-flowtype/require-inexact-type" />|🚨|👻|👻|👻|👻|
|[`flowtype/require-parameter-type`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-require-parameter-type)<a id="rule-canonical-flowtype/require-parameter-type" />|❌|👻|👻|👻|👻|
|[`flowtype/require-readonly-react-props`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-require-readonly-react-props)<a id="rule-canonical-flowtype/require-readonly-react-props" />|🚨|👻|👻|👻|👻|
|[`flowtype/require-return-type`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-require-return-type)<a id="rule-canonical-flowtype/require-return-type" />|❌|👻|👻|👻|👻|
|[`flowtype/require-types-at-top`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-require-types-at-top)<a id="rule-canonical-flowtype/require-types-at-top" />|🚨|👻|👻|👻|👻|
|[`flowtype/require-valid-file-annotation`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-require-valid-file-annotation)<a id="rule-canonical-flowtype/require-valid-file-annotation" /> 🛠|🚨|👻|👻|👻|👻|
|[`flowtype/require-variable-type`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-require-variable-type)<a id="rule-canonical-flowtype/require-variable-type" />|❌|👻|👻|👻|👻|
|[`flowtype/semi`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-semi)<a id="rule-canonical-flowtype/semi" /> 🛠|🚨|👻|👻|👻|👻|
|[`flowtype/sort-keys`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-sort-keys)<a id="rule-canonical-flowtype/sort-keys" /> 🛠|❌|👻|👻|👻|👻|
|[`flowtype/sort-type-union-intersection-members`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-sort-type-union-intersection-members)<a id="rule-canonical-flowtype/sort-type-union-intersection-members" /> 🛠|🚨|👻|👻|👻|👻|
|[`flowtype/space-after-type-colon`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-space-after-type-colon)<a id="rule-canonical-flowtype/space-after-type-colon" /> 🛠|🚨|👻|👻|👻|👻|
|[`flowtype/space-before-generic-bracket`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-space-before-generic-bracket)<a id="rule-canonical-flowtype/space-before-generic-bracket" /> 🛠|🚨|👻|👻|👻|👻|
|[`flowtype/space-before-type-colon`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-space-before-type-colon)<a id="rule-canonical-flowtype/space-before-type-colon" /> 🛠|🚨|👻|👻|👻|👻|
|[`flowtype/spread-exact-type`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-spread-exact-type)<a id="rule-canonical-flowtype/spread-exact-type" />|❌|👻|👻|👻|👻|
|[`flowtype/type-id-match`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-type-id-match)<a id="rule-canonical-flowtype/type-id-match" />|🚨|👻|👻|👻|👻|
|[`flowtype/type-import-style`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-type-import-style)<a id="rule-canonical-flowtype/type-import-style" /> 🛠|🚨|👻|👻|👻|👻|
|[`flowtype/union-intersection-spacing`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-union-intersection-spacing)<a id="rule-canonical-flowtype/union-intersection-spacing" /> 🛠|🚨|👻|👻|👻|👻|
|[`flowtype/use-flow-type`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-use-flow-type)<a id="rule-canonical-flowtype/use-flow-type" />|🚨|👻|👻|👻|👻|
|[`flowtype/use-read-only-spread`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-use-read-only-spread)<a id="rule-canonical-flowtype/use-read-only-spread" />|🚨|👻|👻|👻|👻|
|[`flowtype/valid-syntax`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-valid-syntax)<a id="rule-canonical-flowtype/valid-syntax" /> ⛔️|👻|👻|👻|👻|👻|
|[`for-direction`](https://eslint.org/docs/rules/for-direction)<a id="rule-canonical-for-direction" />|🚨|🚨|👻|👻|🚨|
|[`func-call-spacing`](https://eslint.org/docs/rules/func-call-spacing)<a id="rule-canonical-func-call-spacing" /> 🛠|🚨|🚨|🚨<a href="#rule-google-func-call-spacing">?</a>|🚨|🚨|
|[`func-name-matching`](https://eslint.org/docs/rules/func-name-matching)<a id="rule-canonical-func-name-matching" />|🚨|❌|👻|👻|🚨<a href="#rule-xo-func-name-matching">?</a>|
|[`func-names`](https://eslint.org/docs/rules/func-names)<a id="rule-canonical-func-names" />|🚨|⚠️<a href="#rule-airbnb-func-names">?</a>|👻|👻|🚨|
|[`func-style`](https://eslint.org/docs/rules/func-style)<a id="rule-canonical-func-style" />|🚨|❌|👻|👻|👻|
|[`function-call-argument-newline`](https://eslint.org/docs/rules/function-call-argument-newline)<a id="rule-canonical-function-call-argument-newline" /> 🛠|🚨|🚨|👻|👻|🚨|
|[`function-paren-newline`](https://eslint.org/docs/rules/function-paren-newline)<a id="rule-canonical-function-paren-newline" /> 🛠|🚨|🚨<a href="#rule-airbnb-function-paren-newline">?</a>|👻|👻|👻|
|[`generator-star-spacing`](https://eslint.org/docs/rules/generator-star-spacing)<a id="rule-canonical-generator-star-spacing" /> 🛠|🚨|🚨<a href="#rule-airbnb-generator-star-spacing">?</a>|🚨<a href="#rule-google-generator-star-spacing">?</a>|🚨<a href="#rule-standard-generator-star-spacing">?</a>|🚨<a href="#rule-xo-generator-star-spacing">?</a>|
|[`getter-return`](https://eslint.org/docs/rules/getter-return)<a id="rule-canonical-getter-return" />|🚨|🚨<a href="#rule-airbnb-getter-return">?</a>|👻|👻|🚨|
|[`global-require`](https://eslint.org/docs/rules/global-require)<a id="rule-canonical-global-require" /> ⛔️|👻|🚨<a href="#rule-airbnb-global-require">?</a>|👻|👻|👻|
|[`grouped-accessor-pairs`](https://eslint.org/docs/rules/grouped-accessor-pairs)<a id="rule-canonical-grouped-accessor-pairs" />|🚨|🚨<a href="#rule-airbnb-grouped-accessor-pairs">?</a>|👻|👻|🚨|
|[`guard-for-in`](https://eslint.org/docs/rules/guard-for-in)<a id="rule-canonical-guard-for-in" />|🚨|🚨|🚨|👻|🚨|
|[`handle-callback-err`](https://eslint.org/docs/rules/handle-callback-err)<a id="rule-canonical-handle-callback-err" /> ⛔️|👻|❌|👻|👻|👻|
|[`id-blacklist`](https://eslint.org/docs/rules/id-blacklist)<a id="rule-canonical-id-blacklist" /> ⛔️|👻|👻|👻|👻|👻|
|[`id-denylist`](https://eslint.org/docs/rules/id-denylist)<a id="rule-canonical-id-denylist" />|❌|❌|👻|👻|👻|
|[`id-length`](https://eslint.org/docs/rules/id-length)<a id="rule-canonical-id-length" />|🚨|❌|👻|👻|👻|
|[`id-match`](https://eslint.org/docs/rules/id-match)<a id="rule-canonical-id-match" />|❌|❌|👻|👻|👻|
|[`implicit-arrow-linebreak`](https://eslint.org/docs/rules/implicit-arrow-linebreak)<a id="rule-canonical-implicit-arrow-linebreak" /> 🛠|🚨|🚨|👻|👻|👻|
|[`import/consistent-type-specifier-style`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/consistent-type-specifier-style.md)<a id="rule-canonical-import/consistent-type-specifier-style" /> 🛠|👻|👻|👻|👻|👻|
|[`import/default`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md)<a id="rule-canonical-import/default" />|🚨|❌|👻|👻|👻|
|[`import/dynamic-import-chunkname`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md)<a id="rule-canonical-import/dynamic-import-chunkname" />|❌|❌|👻|👻|👻|
|[`import/export`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md)<a id="rule-canonical-import/export" />|🚨|🚨|👻|🚨|👻|
|[`import/exports-last`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md)<a id="rule-canonical-import/exports-last" />|❌|❌|👻|👻|👻|
|[`import/extensions`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md)<a id="rule-canonical-import/extensions" />|🚨|🚨<a href="#rule-airbnb-import/extensions">?</a>|👻|👻|👻|
|[`import/first`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)<a id="rule-canonical-import/first" /> 🛠|🚨|🚨|👻|🚨|👻|
|[`import/group-exports`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md)<a id="rule-canonical-import/group-exports" />|❌|❌|👻|👻|👻|
|[`import/imports-first`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md)<a id="rule-canonical-import/imports-first" /> 🛠 ⛔️|👻|❌|👻|👻|👻|
|[`import/max-dependencies`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md)<a id="rule-canonical-import/max-dependencies" />|❌|❌|👻|👻|👻|
|[`import/named`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md)<a id="rule-canonical-import/named" />|❌|🚨<a href="#rule-airbnb-import/named">?</a>|👻|👻|👻|
|[`import/namespace`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md)<a id="rule-canonical-import/namespace" />|❌|❌|👻|👻|👻|
|[`import/newline-after-import`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md)<a id="rule-canonical-import/newline-after-import" /> 🛠|🚨|🚨|👻|👻|👻|
|[`import/no-absolute-path`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md)<a id="rule-canonical-import/no-absolute-path" /> 🛠|🚨|🚨|👻|🚨<a href="#rule-standard-import/no-absolute-path">?</a>|👻|
|[`import/no-amd`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md)<a id="rule-canonical-import/no-amd" />|🚨|🚨|👻|👻|👻|
|[`import/no-anonymous-default-export`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md)<a id="rule-canonical-import/no-anonymous-default-export" />|❌|❌|👻|👻|👻|
|[`import/no-commonjs`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md)<a id="rule-canonical-import/no-commonjs" />|❌|❌|👻|👻|👻|
|[`import/no-cycle`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md)<a id="rule-canonical-import/no-cycle" />|🚨|🚨<a href="#rule-airbnb-import/no-cycle">?</a>|👻|👻|👻|
|[`import/no-default-export`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md)<a id="rule-canonical-import/no-default-export" />|❌|❌|👻|👻|👻|
|[`import/no-deprecated`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md)<a id="rule-canonical-import/no-deprecated" />|⚠️|❌|👻|👻|👻|
|[`import/no-duplicates`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md)<a id="rule-canonical-import/no-duplicates" /> 🛠|🚨|🚨|👻|🚨|👻|
|[`import/no-dynamic-require`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md)<a id="rule-canonical-import/no-dynamic-require" />|🚨|🚨|👻|👻|👻|
|[`import/no-empty-named-blocks`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-empty-named-blocks.md)<a id="rule-canonical-import/no-empty-named-blocks" /> 🛠|👻|👻|👻|👻|👻|
|[`import/no-extraneous-dependencies`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md)<a id="rule-canonical-import/no-extraneous-dependencies" />|🚨|🚨<a href="#rule-airbnb-import/no-extraneous-dependencies">?</a>|👻|👻|👻|
|[`import/no-import-module-exports`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-import-module-exports.md)<a id="rule-canonical-import/no-import-module-exports" /> 🛠|❌|🚨<a href="#rule-airbnb-import/no-import-module-exports">?</a>|👻|👻|👻|
|[`import/no-internal-modules`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md)<a id="rule-canonical-import/no-internal-modules" />|❌|❌|👻|👻|👻|
|[`import/no-mutable-exports`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md)<a id="rule-canonical-import/no-mutable-exports" />|🚨|🚨|👻|👻|👻|
|[`import/no-named-as-default`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md)<a id="rule-canonical-import/no-named-as-default" />|🚨|🚨|👻|👻|👻|
|[`import/no-named-as-default-member`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md)<a id="rule-canonical-import/no-named-as-default-member" />|🚨|🚨|👻|👻|👻|
|[`import/no-named-default`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md)<a id="rule-canonical-import/no-named-default" />|🚨|🚨|👻|🚨|👻|
|[`import/no-named-export`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-export.md)<a id="rule-canonical-import/no-named-export" />|❌|❌|👻|👻|👻|
|[`import/no-namespace`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md)<a id="rule-canonical-import/no-namespace" /> 🛠|❌|❌|👻|👻|👻|
|[`import/no-nodejs-modules`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md)<a id="rule-canonical-import/no-nodejs-modules" />|❌|❌|👻|👻|👻|
|[`import/no-relative-packages`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-packages.md)<a id="rule-canonical-import/no-relative-packages" /> 🛠|❌|🚨<a href="#rule-airbnb-import/no-relative-packages">?</a>|👻|👻|👻|
|[`import/no-relative-parent-imports`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md)<a id="rule-canonical-import/no-relative-parent-imports" />|❌|❌|👻|👻|👻|
|[`import/no-restricted-paths`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md)<a id="rule-canonical-import/no-restricted-paths" />|❌|❌|👻|👻|👻|
|[`import/no-self-import`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md)<a id="rule-canonical-import/no-self-import" />|🚨|🚨|👻|👻|👻|
|[`import/no-unassigned-import`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md)<a id="rule-canonical-import/no-unassigned-import" />|🚨|❌|👻|👻|👻|
|[`import/no-unresolved`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md)<a id="rule-canonical-import/no-unresolved" />|❌|🚨<a href="#rule-airbnb-import/no-unresolved">?</a>|👻|👻|👻|
|[`import/no-unused-modules`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md)<a id="rule-canonical-import/no-unused-modules" />|❌|❌|👻|👻|👻|
|[`import/no-useless-path-segments`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md)<a id="rule-canonical-import/no-useless-path-segments" /> 🛠|🚨|🚨<a href="#rule-airbnb-import/no-useless-path-segments">?</a>|👻|👻|👻|
|[`import/no-webpack-loader-syntax`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)<a id="rule-canonical-import/no-webpack-loader-syntax" />|🚨|🚨|👻|🚨|👻|
|[`import/order`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md)<a id="rule-canonical-import/order" /> 🛠|❌|🚨<a href="#rule-airbnb-import/order">?</a>|👻|👻|👻|
|[`import/prefer-default-export`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md)<a id="rule-canonical-import/prefer-default-export" />|❌|🚨<a href="#rule-airbnb-import/prefer-default-export">?</a>|👻|👻|👻|
|[`import/unambiguous`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md)<a id="rule-canonical-import/unambiguous" />|❌|❌|👻|👻|👻|
|[`indent`](https://eslint.org/docs/rules/indent)<a id="rule-canonical-indent" /> 🛠|🚨|🚨<a href="#rule-airbnb-indent">?</a>|🚨<a href="#rule-google-indent">?</a>|🚨<a href="#rule-standard-indent">?</a>|🚨<a href="#rule-xo-indent">?</a>|
|[`indent-legacy`](https://eslint.org/docs/rules/indent-legacy)<a id="rule-canonical-indent-legacy" /> 🛠 ⛔️|👻|👻|👻|👻|👻|
|[`init-declarations`](https://eslint.org/docs/rules/init-declarations)<a id="rule-canonical-init-declarations" />|❌|❌|👻|👻|👻|
|[`jest/consistent-test-it`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/consistent-test-it.md)<a id="rule-canonical-jest/consistent-test-it" /> 🛠|🚨|👻|👻|👻|👻|
|[`jest/expect-expect`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/expect-expect.md)<a id="rule-canonical-jest/expect-expect" />|🚨|👻|👻|👻|👻|
|[`jest/max-expects`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/max-expects.md)<a id="rule-canonical-jest/max-expects" />|👻|👻|👻|👻|👻|
|[`jest/max-nested-describe`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/max-nested-describe.md)<a id="rule-canonical-jest/max-nested-describe" />|🚨|👻|👻|👻|👻|
|[`jest/no-alias-methods`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-alias-methods.md)<a id="rule-canonical-jest/no-alias-methods" /> 🛠|🚨|👻|👻|👻|👻|
|[`jest/no-commented-out-tests`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-commented-out-tests.md)<a id="rule-canonical-jest/no-commented-out-tests" />|🚨|👻|👻|👻|👻|
|[`jest/no-conditional-expect`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-conditional-expect.md)<a id="rule-canonical-jest/no-conditional-expect" />|🚨|👻|👻|👻|👻|
|[`jest/no-conditional-in-test`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-conditional-in-test.md)<a id="rule-canonical-jest/no-conditional-in-test" />|🚨|👻|👻|👻|👻|
|[`jest/no-deprecated-functions`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-deprecated-functions.md)<a id="rule-canonical-jest/no-deprecated-functions" /> 🛠|🚨|👻|👻|👻|👻|
|[`jest/no-disabled-tests`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-disabled-tests.md)<a id="rule-canonical-jest/no-disabled-tests" />|⚠️|👻|👻|👻|👻|
|[`jest/no-done-callback`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-done-callback.md)<a id="rule-canonical-jest/no-done-callback" />|🚨|👻|👻|👻|👻|
|[`jest/no-duplicate-hooks`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-duplicate-hooks.md)<a id="rule-canonical-jest/no-duplicate-hooks" />|🚨|👻|👻|👻|👻|
|[`jest/no-export`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-export.md)<a id="rule-canonical-jest/no-export" />|🚨|👻|👻|👻|👻|
|[`jest/no-focused-tests`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-focused-tests.md)<a id="rule-canonical-jest/no-focused-tests" />|🚨|👻|👻|👻|👻|
|[`jest/no-hooks`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-hooks.md)<a id="rule-canonical-jest/no-hooks" />|❌|👻|👻|👻|👻|
|[`jest/no-identical-title`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-identical-title.md)<a id="rule-canonical-jest/no-identical-title" />|🚨|👻|👻|👻|👻|
|[`jest/no-if`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-if.md)<a id="rule-canonical-jest/no-if" /> ⛔️|👻|👻|👻|👻|👻|
|[`jest/no-interpolation-in-snapshots`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-interpolation-in-snapshots.md)<a id="rule-canonical-jest/no-interpolation-in-snapshots" />|🚨|👻|👻|👻|👻|
|[`jest/no-jasmine-globals`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jasmine-globals.md)<a id="rule-canonical-jest/no-jasmine-globals" /> 🛠|🚨|👻|👻|👻|👻|
|[`jest/no-large-snapshots`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-large-snapshots.md)<a id="rule-canonical-jest/no-large-snapshots" />|❌|👻|👻|👻|👻|
|[`jest/no-mocks-import`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-mocks-import.md)<a id="rule-canonical-jest/no-mocks-import" />|🚨|👻|👻|👻|👻|
|[`jest/no-restricted-jest-methods`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-restricted-jest-methods.md)<a id="rule-canonical-jest/no-restricted-jest-methods" />|👻|👻|👻|👻|👻|
|[`jest/no-restricted-matchers`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-restricted-matchers.md)<a id="rule-canonical-jest/no-restricted-matchers" />|❌|👻|👻|👻|👻|
|[`jest/no-standalone-expect`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-standalone-expect.md)<a id="rule-canonical-jest/no-standalone-expect" />|🚨|👻|👻|👻|👻|
|[`jest/no-test-prefixes`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-prefixes.md)<a id="rule-canonical-jest/no-test-prefixes" /> 🛠|🚨|👻|👻|👻|👻|
|[`jest/no-test-return-statement`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-return-statement.md)<a id="rule-canonical-jest/no-test-return-statement" />|🚨|👻|👻|👻|👻|
|[`jest/no-untyped-mock-factory`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-untyped-mock-factory.md)<a id="rule-canonical-jest/no-untyped-mock-factory" /> 🛠|👻|👻|👻|👻|👻|
|[`jest/prefer-called-with`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-called-with.md)<a id="rule-canonical-jest/prefer-called-with" />|🚨|👻|👻|👻|👻|
|[`jest/prefer-comparison-matcher`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-comparison-matcher.md)<a id="rule-canonical-jest/prefer-comparison-matcher" /> 🛠|🚨|👻|👻|👻|👻|
|[`jest/prefer-each`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-each.md)<a id="rule-canonical-jest/prefer-each" />|👻|👻|👻|👻|👻|
|[`jest/prefer-equality-matcher`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-equality-matcher.md)<a id="rule-canonical-jest/prefer-equality-matcher" />|👻|👻|👻|👻|👻|
|[`jest/prefer-expect-assertions`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-expect-assertions.md)<a id="rule-canonical-jest/prefer-expect-assertions" />|🚨|👻|👻|👻|👻|
|[`jest/prefer-expect-resolves`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-expect-resolves.md)<a id="rule-canonical-jest/prefer-expect-resolves" /> 🛠|🚨|👻|👻|👻|👻|
|[`jest/prefer-hooks-in-order`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-hooks-in-order.md)<a id="rule-canonical-jest/prefer-hooks-in-order" />|👻|👻|👻|👻|👻|
|[`jest/prefer-hooks-on-top`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-hooks-on-top.md)<a id="rule-canonical-jest/prefer-hooks-on-top" />|🚨|👻|👻|👻|👻|
|[`jest/prefer-lowercase-title`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-lowercase-title.md)<a id="rule-canonical-jest/prefer-lowercase-title" /> 🛠|❌|👻|👻|👻|👻|
|[`jest/prefer-mock-promise-shorthand`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-mock-promise-shorthand.md)<a id="rule-canonical-jest/prefer-mock-promise-shorthand" /> 🛠|👻|👻|👻|👻|👻|
|[`jest/prefer-snapshot-hint`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-snapshot-hint.md)<a id="rule-canonical-jest/prefer-snapshot-hint" />|🚨|👻|👻|👻|👻|
|[`jest/prefer-spy-on`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-spy-on.md)<a id="rule-canonical-jest/prefer-spy-on" /> 🛠|🚨|👻|👻|👻|👻|
|[`jest/prefer-strict-equal`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-strict-equal.md)<a id="rule-canonical-jest/prefer-strict-equal" />|❌|👻|👻|👻|👻|
|[`jest/prefer-to-be`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be.md)<a id="rule-canonical-jest/prefer-to-be" /> 🛠|🚨|👻|👻|👻|👻|
|[`jest/prefer-to-contain`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-contain.md)<a id="rule-canonical-jest/prefer-to-contain" /> 🛠|🚨|👻|👻|👻|👻|
|[`jest/prefer-to-have-length`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-have-length.md)<a id="rule-canonical-jest/prefer-to-have-length" /> 🛠|🚨|👻|👻|👻|👻|
|[`jest/prefer-todo`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-todo.md)<a id="rule-canonical-jest/prefer-todo" /> 🛠|🚨|👻|👻|👻|👻|
|[`jest/require-hook`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-hook.md)<a id="rule-canonical-jest/require-hook" />|❌|👻|👻|👻|👻|
|[`jest/require-to-throw-message`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-to-throw-message.md)<a id="rule-canonical-jest/require-to-throw-message" />|🚨|👻|👻|👻|👻|
|[`jest/require-top-level-describe`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-top-level-describe.md)<a id="rule-canonical-jest/require-top-level-describe" />|🚨|👻|👻|👻|👻|
|[`jest/unbound-method`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/unbound-method.md)<a id="rule-canonical-jest/unbound-method" />|❌|👻|👻|👻|👻|
|[`jest/valid-describe-callback`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-describe-callback.md)<a id="rule-canonical-jest/valid-describe-callback" />|🚨|👻|👻|👻|👻|
|[`jest/valid-expect`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect.md)<a id="rule-canonical-jest/valid-expect" />|🚨|👻|👻|👻|👻|
|[`jest/valid-expect-in-promise`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect-in-promise.md)<a id="rule-canonical-jest/valid-expect-in-promise" />|🚨|👻|👻|👻|👻|
|[`jest/valid-title`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-title.md)<a id="rule-canonical-jest/valid-title" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/array-bracket-newline`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-newline.html)<a id="rule-canonical-jsonc/array-bracket-newline" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/array-bracket-spacing`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-spacing.html)<a id="rule-canonical-jsonc/array-bracket-spacing" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/array-element-newline`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-element-newline.html)<a id="rule-canonical-jsonc/array-element-newline" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/auto`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/auto.html)<a id="rule-canonical-jsonc/auto" /> 🛠|❌|👻|👻|👻|👻|
|[`jsonc/comma-dangle`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-dangle.html)<a id="rule-canonical-jsonc/comma-dangle" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/comma-style`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-style.html)<a id="rule-canonical-jsonc/comma-style" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/indent`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/indent.html)<a id="rule-canonical-jsonc/indent" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/key-name-casing`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-name-casing.html)<a id="rule-canonical-jsonc/key-name-casing" />|❌|👻|👻|👻|👻|
|[`jsonc/key-spacing`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-spacing.html)<a id="rule-canonical-jsonc/key-spacing" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/no-bigint-literals`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-bigint-literals.html)<a id="rule-canonical-jsonc/no-bigint-literals" />|🚨|👻|👻|👻|👻|
|[`jsonc/no-binary-expression`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-expression.html)<a id="rule-canonical-jsonc/no-binary-expression" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/no-binary-numeric-literals`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-numeric-literals.html)<a id="rule-canonical-jsonc/no-binary-numeric-literals" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/no-comments`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-comments.html)<a id="rule-canonical-jsonc/no-comments" />|🚨|👻|👻|👻|👻|
|[`jsonc/no-dupe-keys`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-dupe-keys.html)<a id="rule-canonical-jsonc/no-dupe-keys" />|🚨|👻|👻|👻|👻|
|[`jsonc/no-escape-sequence-in-identifier`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-escape-sequence-in-identifier.html)<a id="rule-canonical-jsonc/no-escape-sequence-in-identifier" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/no-floating-decimal`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-floating-decimal.html)<a id="rule-canonical-jsonc/no-floating-decimal" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/no-hexadecimal-numeric-literals`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-hexadecimal-numeric-literals.html)<a id="rule-canonical-jsonc/no-hexadecimal-numeric-literals" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/no-infinity`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-infinity.html)<a id="rule-canonical-jsonc/no-infinity" />|🚨|👻|👻|👻|👻|
|[`jsonc/no-irregular-whitespace`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-irregular-whitespace.html)<a id="rule-canonical-jsonc/no-irregular-whitespace" />|👻|👻|👻|👻|👻|
|[`jsonc/no-multi-str`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-multi-str.html)<a id="rule-canonical-jsonc/no-multi-str" />|🚨|👻|👻|👻|👻|
|[`jsonc/no-nan`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-nan.html)<a id="rule-canonical-jsonc/no-nan" />|🚨|👻|👻|👻|👻|
|[`jsonc/no-number-props`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-number-props.html)<a id="rule-canonical-jsonc/no-number-props" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/no-numeric-separators`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-numeric-separators.html)<a id="rule-canonical-jsonc/no-numeric-separators" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/no-octal`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal.html)<a id="rule-canonical-jsonc/no-octal" />|🚨|👻|👻|👻|👻|
|[`jsonc/no-octal-escape`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-escape.html)<a id="rule-canonical-jsonc/no-octal-escape" />|🚨|👻|👻|👻|👻|
|[`jsonc/no-octal-numeric-literals`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-numeric-literals.html)<a id="rule-canonical-jsonc/no-octal-numeric-literals" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/no-parenthesized`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-parenthesized.html)<a id="rule-canonical-jsonc/no-parenthesized" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/no-plus-sign`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-plus-sign.html)<a id="rule-canonical-jsonc/no-plus-sign" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/no-regexp-literals`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-regexp-literals.html)<a id="rule-canonical-jsonc/no-regexp-literals" />|🚨|👻|👻|👻|👻|
|[`jsonc/no-sparse-arrays`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-sparse-arrays.html)<a id="rule-canonical-jsonc/no-sparse-arrays" />|🚨|👻|👻|👻|👻|
|[`jsonc/no-template-literals`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-template-literals.html)<a id="rule-canonical-jsonc/no-template-literals" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/no-undefined-value`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-undefined-value.html)<a id="rule-canonical-jsonc/no-undefined-value" />|🚨|👻|👻|👻|👻|
|[`jsonc/no-unicode-codepoint-escapes`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-unicode-codepoint-escapes.html)<a id="rule-canonical-jsonc/no-unicode-codepoint-escapes" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/no-useless-escape`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-useless-escape.html)<a id="rule-canonical-jsonc/no-useless-escape" />|🚨|👻|👻|👻|👻|
|[`jsonc/object-curly-newline`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-newline.html)<a id="rule-canonical-jsonc/object-curly-newline" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/object-curly-spacing`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-spacing.html)<a id="rule-canonical-jsonc/object-curly-spacing" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/object-property-newline`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-property-newline.html)<a id="rule-canonical-jsonc/object-property-newline" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/quote-props`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quote-props.html)<a id="rule-canonical-jsonc/quote-props" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/quotes`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quotes.html)<a id="rule-canonical-jsonc/quotes" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/sort-array-values`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-array-values.html)<a id="rule-canonical-jsonc/sort-array-values" /> 🛠|❌|👻|👻|👻|👻|
|[`jsonc/sort-keys`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-keys.html)<a id="rule-canonical-jsonc/sort-keys" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/space-unary-ops`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/space-unary-ops.html)<a id="rule-canonical-jsonc/space-unary-ops" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/valid-json-number`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/valid-json-number.html)<a id="rule-canonical-jsonc/valid-json-number" /> 🛠|🚨|👻|👻|👻|👻|
|[`jsonc/vue-custom-block/no-parsing-error`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/vue-custom-block/no-parsing-error.html)<a id="rule-canonical-jsonc/vue-custom-block/no-parsing-error" />|🚨|👻|👻|👻|👻|
|[`jsx-a11y/accessible-emoji`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md)<a id="rule-canonical-jsx-a11y/accessible-emoji" /> ⛔️|👻|❌|👻|👻|👻|
|[`jsx-a11y/alt-text`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md)<a id="rule-canonical-jsx-a11y/alt-text" />|🚨|🚨<a href="#rule-airbnb-jsx-a11y/alt-text">?</a>|👻|👻|👻|
|[`jsx-a11y/anchor-ambiguous-text`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-ambiguous-text.md)<a id="rule-canonical-jsx-a11y/anchor-ambiguous-text" />|👻|👻|👻|👻|👻|
|[`jsx-a11y/anchor-has-content`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md)<a id="rule-canonical-jsx-a11y/anchor-has-content" />|🚨|🚨<a href="#rule-airbnb-jsx-a11y/anchor-has-content">?</a>|👻|👻|👻|
|[`jsx-a11y/anchor-is-valid`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md)<a id="rule-canonical-jsx-a11y/anchor-is-valid" />|🚨|🚨<a href="#rule-airbnb-jsx-a11y/anchor-is-valid">?</a>|👻|👻|👻|
|[`jsx-a11y/aria-activedescendant-has-tabindex`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md)<a id="rule-canonical-jsx-a11y/aria-activedescendant-has-tabindex" />|🚨|🚨|👻|👻|👻|
|[`jsx-a11y/aria-props`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md)<a id="rule-canonical-jsx-a11y/aria-props" />|🚨|🚨|👻|👻|👻|
|[`jsx-a11y/aria-proptypes`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md)<a id="rule-canonical-jsx-a11y/aria-proptypes" />|🚨|🚨|👻|👻|👻|
|[`jsx-a11y/aria-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md)<a id="rule-canonical-jsx-a11y/aria-role" />|🚨|🚨<a href="#rule-airbnb-jsx-a11y/aria-role">?</a>|👻|👻|👻|
|[`jsx-a11y/aria-unsupported-elements`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md)<a id="rule-canonical-jsx-a11y/aria-unsupported-elements" />|🚨|🚨|👻|👻|👻|
|[`jsx-a11y/autocomplete-valid`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/autocomplete-valid.md)<a id="rule-canonical-jsx-a11y/autocomplete-valid" />|🚨|❌|👻|👻|👻|
|[`jsx-a11y/click-events-have-key-events`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md)<a id="rule-canonical-jsx-a11y/click-events-have-key-events" />|🚨|🚨|👻|👻|👻|
|[`jsx-a11y/control-has-associated-label`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md)<a id="rule-canonical-jsx-a11y/control-has-associated-label" />|❌|🚨<a href="#rule-airbnb-jsx-a11y/control-has-associated-label">?</a>|👻|👻|👻|
|[`jsx-a11y/heading-has-content`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md)<a id="rule-canonical-jsx-a11y/heading-has-content" />|🚨|🚨<a href="#rule-airbnb-jsx-a11y/heading-has-content">?</a>|👻|👻|👻|
|[`jsx-a11y/html-has-lang`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md)<a id="rule-canonical-jsx-a11y/html-has-lang" />|🚨|🚨|👻|👻|👻|
|[`jsx-a11y/iframe-has-title`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md)<a id="rule-canonical-jsx-a11y/iframe-has-title" />|🚨|🚨|👻|👻|👻|
|[`jsx-a11y/img-redundant-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md)<a id="rule-canonical-jsx-a11y/img-redundant-alt" />|🚨|🚨|👻|👻|👻|
|[`jsx-a11y/interactive-supports-focus`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md)<a id="rule-canonical-jsx-a11y/interactive-supports-focus" />|🚨|🚨<a href="#rule-airbnb-jsx-a11y/interactive-supports-focus">?</a>|👻|👻|👻|
|[`jsx-a11y/label-has-associated-control`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md)<a id="rule-canonical-jsx-a11y/label-has-associated-control" />|🚨|🚨<a href="#rule-airbnb-jsx-a11y/label-has-associated-control">?</a>|👻|👻|👻|
|[`jsx-a11y/label-has-for`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md)<a id="rule-canonical-jsx-a11y/label-has-for" /> ⛔️|👻|❌|👻|👻|👻|
|[`jsx-a11y/lang`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md)<a id="rule-canonical-jsx-a11y/lang" />|❌|🚨<a href="#rule-airbnb-jsx-a11y/lang">?</a>|👻|👻|👻|
|[`jsx-a11y/media-has-caption`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md)<a id="rule-canonical-jsx-a11y/media-has-caption" />|🚨|🚨<a href="#rule-airbnb-jsx-a11y/media-has-caption">?</a>|👻|👻|👻|
|[`jsx-a11y/mouse-events-have-key-events`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md)<a id="rule-canonical-jsx-a11y/mouse-events-have-key-events" />|🚨|🚨|👻|👻|👻|
|[`jsx-a11y/no-access-key`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md)<a id="rule-canonical-jsx-a11y/no-access-key" />|🚨|🚨|👻|👻|👻|
|[`jsx-a11y/no-aria-hidden-on-focusable`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-aria-hidden-on-focusable.md)<a id="rule-canonical-jsx-a11y/no-aria-hidden-on-focusable" />|👻|👻|👻|👻|👻|
|[`jsx-a11y/no-autofocus`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md)<a id="rule-canonical-jsx-a11y/no-autofocus" />|❌|🚨<a href="#rule-airbnb-jsx-a11y/no-autofocus">?</a>|👻|👻|👻|
|[`jsx-a11y/no-distracting-elements`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md)<a id="rule-canonical-jsx-a11y/no-distracting-elements" />|🚨|🚨<a href="#rule-airbnb-jsx-a11y/no-distracting-elements">?</a>|👻|👻|👻|
|[`jsx-a11y/no-interactive-element-to-noninteractive-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md)<a id="rule-canonical-jsx-a11y/no-interactive-element-to-noninteractive-role" />|🚨|🚨<a href="#rule-airbnb-jsx-a11y/no-interactive-element-to-noninteractive-role">?</a>|👻|👻|👻|
|[`jsx-a11y/no-noninteractive-element-interactions`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md)<a id="rule-canonical-jsx-a11y/no-noninteractive-element-interactions" />|🚨|🚨<a href="#rule-airbnb-jsx-a11y/no-noninteractive-element-interactions">?</a>|👻|👻|👻|
|[`jsx-a11y/no-noninteractive-element-to-interactive-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md)<a id="rule-canonical-jsx-a11y/no-noninteractive-element-to-interactive-role" />|🚨|🚨<a href="#rule-airbnb-jsx-a11y/no-noninteractive-element-to-interactive-role">?</a>|👻|👻|👻|
|[`jsx-a11y/no-noninteractive-tabindex`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md)<a id="rule-canonical-jsx-a11y/no-noninteractive-tabindex" />|🚨|🚨<a href="#rule-airbnb-jsx-a11y/no-noninteractive-tabindex">?</a>|👻|👻|👻|
|[`jsx-a11y/no-onchange`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md)<a id="rule-canonical-jsx-a11y/no-onchange" /> ⛔️|👻|❌|👻|👻|👻|
|[`jsx-a11y/no-redundant-roles`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md)<a id="rule-canonical-jsx-a11y/no-redundant-roles" />|🚨|🚨|👻|👻|👻|
|[`jsx-a11y/no-static-element-interactions`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md)<a id="rule-canonical-jsx-a11y/no-static-element-interactions" />|🚨|🚨<a href="#rule-airbnb-jsx-a11y/no-static-element-interactions">?</a>|👻|👻|👻|
|[`jsx-a11y/prefer-tag-over-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/prefer-tag-over-role.md)<a id="rule-canonical-jsx-a11y/prefer-tag-over-role" />|👻|👻|👻|👻|👻|
|[`jsx-a11y/role-has-required-aria-props`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md)<a id="rule-canonical-jsx-a11y/role-has-required-aria-props" />|🚨|🚨|👻|👻|👻|
|[`jsx-a11y/role-supports-aria-props`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md)<a id="rule-canonical-jsx-a11y/role-supports-aria-props" />|🚨|🚨|👻|👻|👻|
|[`jsx-a11y/scope`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md)<a id="rule-canonical-jsx-a11y/scope" />|🚨|🚨|👻|👻|👻|
|[`jsx-a11y/tabindex-no-positive`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md)<a id="rule-canonical-jsx-a11y/tabindex-no-positive" />|🚨|🚨|👻|👻|👻|
|[`jsx-quotes`](https://eslint.org/docs/rules/jsx-quotes)<a id="rule-canonical-jsx-quotes" /> 🛠|🚨|🚨<a href="#rule-airbnb-jsx-quotes">?</a>|👻|👻|🚨|
|[`key-spacing`](https://eslint.org/docs/rules/key-spacing)<a id="rule-canonical-key-spacing" /> 🛠|🚨|🚨|🚨<a href="#rule-google-key-spacing">?</a>|🚨|🚨|
|[`keyword-spacing`](https://eslint.org/docs/rules/keyword-spacing)<a id="rule-canonical-keyword-spacing" /> 🛠|🚨|🚨<a href="#rule-airbnb-keyword-spacing">?</a>|🚨<a href="#rule-google-keyword-spacing">?</a>|🚨|🚨<a href="#rule-xo-keyword-spacing">?</a>|
|[`line-comment-position`](https://eslint.org/docs/rules/line-comment-position)<a id="rule-canonical-line-comment-position" />|🚨|❌|👻|👻|👻|
|[`linebreak-style`](https://eslint.org/docs/rules/linebreak-style)<a id="rule-canonical-linebreak-style" /> 🛠|🚨|🚨|🚨<a href="#rule-google-linebreak-style">?</a>|👻|🚨|
|[`lines-around-comment`](https://eslint.org/docs/rules/lines-around-comment)<a id="rule-canonical-lines-around-comment" /> 🛠|❌|❌|👻|👻|👻|
|[`lines-around-directive`](https://eslint.org/docs/rules/lines-around-directive)<a id="rule-canonical-lines-around-directive" /> 🛠 ⛔️|👻|🚨<a href="#rule-airbnb-lines-around-directive">?</a>|👻|👻|👻|
|[`lines-between-class-members`](https://eslint.org/docs/rules/lines-between-class-members)<a id="rule-canonical-lines-between-class-members" /> 🛠|🚨|🚨<a href="#rule-airbnb-lines-between-class-members">?</a>|👻|🚨<a href="#rule-standard-lines-between-class-members">?</a>|🚨<a href="#rule-xo-lines-between-class-members">?</a>|
|[`lodash/callback-binding`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/callback-binding.md)<a id="rule-canonical-lodash/callback-binding" />|🚨|👻|👻|👻|👻|
|[`lodash/chain-style`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/chain-style.md)<a id="rule-canonical-lodash/chain-style" />|🚨|👻|👻|👻|👻|
|[`lodash/chaining`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/chaining.md)<a id="rule-canonical-lodash/chaining" />|🚨|👻|👻|👻|👻|
|[`lodash/collection-method-value`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/collection-method-value.md)<a id="rule-canonical-lodash/collection-method-value" />|🚨|👻|👻|👻|👻|
|[`lodash/collection-ordering`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/collection-ordering.md)<a id="rule-canonical-lodash/collection-ordering" />|🚨|👻|👻|👻|👻|
|[`lodash/collection-return`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/collection-return.md)<a id="rule-canonical-lodash/collection-return" />|🚨|👻|👻|👻|👻|
|[`lodash/consistent-compose`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/consistent-compose.md)<a id="rule-canonical-lodash/consistent-compose" />|🚨|👻|👻|👻|👻|
|[`lodash/identity-shorthand`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/identity-shorthand.md)<a id="rule-canonical-lodash/identity-shorthand" />|🚨|👻|👻|👻|👻|
|[`lodash/import-scope`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/import-scope.md)<a id="rule-canonical-lodash/import-scope" />|❌|👻|👻|👻|👻|
|[`lodash/matches-prop-shorthand`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/matches-prop-shorthand.md)<a id="rule-canonical-lodash/matches-prop-shorthand" />|🚨|👻|👻|👻|👻|
|[`lodash/matches-shorthand`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/matches-shorthand.md)<a id="rule-canonical-lodash/matches-shorthand" />|🚨|👻|👻|👻|👻|
|[`lodash/no-commit`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/no-commit.md)<a id="rule-canonical-lodash/no-commit" />|🚨|👻|👻|👻|👻|
|[`lodash/no-double-unwrap`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/no-double-unwrap.md)<a id="rule-canonical-lodash/no-double-unwrap" /> 🛠|🚨|👻|👻|👻|👻|
|[`lodash/no-extra-args`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/no-extra-args.md)<a id="rule-canonical-lodash/no-extra-args" />|🚨|👻|👻|👻|👻|
|[`lodash/no-unbound-this`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/no-unbound-this.md)<a id="rule-canonical-lodash/no-unbound-this" />|🚨|👻|👻|👻|👻|
|[`lodash/path-style`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/path-style.md)<a id="rule-canonical-lodash/path-style" /> 🛠|❌|👻|👻|👻|👻|
|[`lodash/prefer-compact`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-compact.md)<a id="rule-canonical-lodash/prefer-compact" />|🚨|👻|👻|👻|👻|
|[`lodash/prefer-constant`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-constant.md)<a id="rule-canonical-lodash/prefer-constant" />|❌|👻|👻|👻|👻|
|[`lodash/prefer-filter`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-filter.md)<a id="rule-canonical-lodash/prefer-filter" />|🚨|👻|👻|👻|👻|
|[`lodash/prefer-find`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-find.md)<a id="rule-canonical-lodash/prefer-find" />|🚨|👻|👻|👻|👻|
|[`lodash/prefer-flat-map`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-flat-map.md)<a id="rule-canonical-lodash/prefer-flat-map" />|🚨|👻|👻|👻|👻|
|[`lodash/prefer-get`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-get.md)<a id="rule-canonical-lodash/prefer-get" />|🚨|👻|👻|👻|👻|
|[`lodash/prefer-immutable-method`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-immutable-method.md)<a id="rule-canonical-lodash/prefer-immutable-method" />|🚨|👻|👻|👻|👻|
|[`lodash/prefer-includes`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-includes.md)<a id="rule-canonical-lodash/prefer-includes" />|🚨|👻|👻|👻|👻|
|[`lodash/prefer-invoke-map`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-invoke-map.md)<a id="rule-canonical-lodash/prefer-invoke-map" />|❌|👻|👻|👻|👻|
|[`lodash/prefer-is-nil`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-is-nil.md)<a id="rule-canonical-lodash/prefer-is-nil" />|🚨|👻|👻|👻|👻|
|[`lodash/prefer-lodash-chain`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-lodash-chain.md)<a id="rule-canonical-lodash/prefer-lodash-chain" />|🚨|👻|👻|👻|👻|
|[`lodash/prefer-lodash-method`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-lodash-method.md)<a id="rule-canonical-lodash/prefer-lodash-method" />|❌|👻|👻|👻|👻|
|[`lodash/prefer-lodash-typecheck`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-lodash-typecheck.md)<a id="rule-canonical-lodash/prefer-lodash-typecheck" />|🚨|👻|👻|👻|👻|
|[`lodash/prefer-map`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-map.md)<a id="rule-canonical-lodash/prefer-map" />|🚨|👻|👻|👻|👻|
|[`lodash/prefer-matches`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-matches.md)<a id="rule-canonical-lodash/prefer-matches" />|🚨|👻|👻|👻|👻|
|[`lodash/prefer-noop`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-noop.md)<a id="rule-canonical-lodash/prefer-noop" />|❌|👻|👻|👻|👻|
|[`lodash/prefer-over-quantifier`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-over-quantifier.md)<a id="rule-canonical-lodash/prefer-over-quantifier" />|🚨|👻|👻|👻|👻|
|[`lodash/prefer-reject`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-reject.md)<a id="rule-canonical-lodash/prefer-reject" />|⚠️|👻|👻|👻|👻|
|[`lodash/prefer-some`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-some.md)<a id="rule-canonical-lodash/prefer-some" />|🚨|👻|👻|👻|👻|
|[`lodash/prefer-startswith`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-startswith.md)<a id="rule-canonical-lodash/prefer-startswith" />|❌|👻|👻|👻|👻|
|[`lodash/prefer-thru`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-thru.md)<a id="rule-canonical-lodash/prefer-thru" />|🚨|👻|👻|👻|👻|
|[`lodash/prefer-times`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-times.md)<a id="rule-canonical-lodash/prefer-times" />|🚨|👻|👻|👻|👻|
|[`lodash/prefer-wrapper-method`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-wrapper-method.md)<a id="rule-canonical-lodash/prefer-wrapper-method" />|🚨|👻|👻|👻|👻|
|[`lodash/preferred-alias`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/preferred-alias.md)<a id="rule-canonical-lodash/preferred-alias" />|🚨|👻|👻|👻|👻|
|[`lodash/prop-shorthand`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prop-shorthand.md)<a id="rule-canonical-lodash/prop-shorthand" />|🚨|👻|👻|👻|👻|
|[`lodash/unwrap`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/unwrap.md)<a id="rule-canonical-lodash/unwrap" />|🚨|👻|👻|👻|👻|
|[`logical-assignment-operators`](https://eslint.org/docs/rules/logical-assignment-operators)<a id="rule-canonical-logical-assignment-operators" /> 🛠|👻|👻|👻|👻|👻|
|[`max-classes-per-file`](https://eslint.org/docs/rules/max-classes-per-file)<a id="rule-canonical-max-classes-per-file" />|❌|🚨<a href="#rule-airbnb-max-classes-per-file">?</a>|👻|👻|👻|
|[`max-depth`](https://eslint.org/docs/rules/max-depth)<a id="rule-canonical-max-depth" />|❌|❌|👻|👻|⚠️<a href="#rule-xo-max-depth">?</a>|
|[`max-len`](https://eslint.org/docs/rules/max-len)<a id="rule-canonical-max-len" />|❌|🚨<a href="#rule-airbnb-max-len">?</a>|🚨<a href="#rule-google-max-len">?</a>|👻|👻|
|[`max-lines`](https://eslint.org/docs/rules/max-lines)<a id="rule-canonical-max-lines" />|❌|❌|👻|👻|👻|
|[`max-lines-per-function`](https://eslint.org/docs/rules/max-lines-per-function)<a id="rule-canonical-max-lines-per-function" />|❌|❌|👻|👻|👻|
|[`max-nested-callbacks`](https://eslint.org/docs/rules/max-nested-callbacks)<a id="rule-canonical-max-nested-callbacks" />|❌|❌|👻|👻|⚠️<a href="#rule-xo-max-nested-callbacks">?</a>|
|[`max-params`](https://eslint.org/docs/rules/max-params)<a id="rule-canonical-max-params" />|❌|❌|👻|👻|⚠️<a href="#rule-xo-max-params">?</a>|
|[`max-statements`](https://eslint.org/docs/rules/max-statements)<a id="rule-canonical-max-statements" />|❌|❌|👻|👻|👻|
|[`max-statements-per-line`](https://eslint.org/docs/rules/max-statements-per-line)<a id="rule-canonical-max-statements-per-line" />|🚨|❌|👻|👻|🚨<a href="#rule-xo-max-statements-per-line">?</a>|
|[`mocha/handle-done-callback`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/handle-done-callback.md)<a id="rule-canonical-mocha/handle-done-callback" />|🚨|👻|👻|👻|👻|
|[`mocha/max-top-level-suites`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/max-top-level-suites.md)<a id="rule-canonical-mocha/max-top-level-suites" />|🚨|👻|👻|👻|👻|
|[`mocha/no-async-describe`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-async-describe.md)<a id="rule-canonical-mocha/no-async-describe" /> 🛠|🚨|👻|👻|👻|👻|
|[`mocha/no-empty-description`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-empty-description.md)<a id="rule-canonical-mocha/no-empty-description" />|🚨|👻|👻|👻|👻|
|[`mocha/no-exclusive-tests`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-exclusive-tests.md)<a id="rule-canonical-mocha/no-exclusive-tests" />|🚨|👻|👻|👻|👻|
|[`mocha/no-exports`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-exports.md)<a id="rule-canonical-mocha/no-exports" />|🚨|👻|👻|👻|👻|
|[`mocha/no-global-tests`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-global-tests.md)<a id="rule-canonical-mocha/no-global-tests" />|🚨|👻|👻|👻|👻|
|[`mocha/no-hooks`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-hooks.md)<a id="rule-canonical-mocha/no-hooks" />|❌|👻|👻|👻|👻|
|[`mocha/no-hooks-for-single-case`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-hooks-for-single-case.md)<a id="rule-canonical-mocha/no-hooks-for-single-case" />|🚨|👻|👻|👻|👻|
|[`mocha/no-identical-title`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-identical-title.md)<a id="rule-canonical-mocha/no-identical-title" />|🚨|👻|👻|👻|👻|
|[`mocha/no-mocha-arrows`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-mocha-arrows.md)<a id="rule-canonical-mocha/no-mocha-arrows" /> 🛠|❌|👻|👻|👻|👻|
|[`mocha/no-nested-tests`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-nested-tests.md)<a id="rule-canonical-mocha/no-nested-tests" />|🚨|👻|👻|👻|👻|
|[`mocha/no-pending-tests`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-pending-tests.md)<a id="rule-canonical-mocha/no-pending-tests" />|🚨|👻|👻|👻|👻|
|[`mocha/no-return-and-callback`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-return-and-callback.md)<a id="rule-canonical-mocha/no-return-and-callback" />|🚨|👻|👻|👻|👻|
|[`mocha/no-return-from-async`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-return-from-async.md)<a id="rule-canonical-mocha/no-return-from-async" />|🚨|👻|👻|👻|👻|
|[`mocha/no-setup-in-describe`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-setup-in-describe.md)<a id="rule-canonical-mocha/no-setup-in-describe" />|🚨|👻|👻|👻|👻|
|[`mocha/no-sibling-hooks`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-sibling-hooks.md)<a id="rule-canonical-mocha/no-sibling-hooks" />|🚨|👻|👻|👻|👻|
|[`mocha/no-skipped-tests`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-skipped-tests.md)<a id="rule-canonical-mocha/no-skipped-tests" />|🚨|👻|👻|👻|👻|
|[`mocha/no-synchronous-tests`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-synchronous-tests.md)<a id="rule-canonical-mocha/no-synchronous-tests" />|❌|👻|👻|👻|👻|
|[`mocha/no-top-level-hooks`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-top-level-hooks.md)<a id="rule-canonical-mocha/no-top-level-hooks" />|🚨|👻|👻|👻|👻|
|[`mocha/prefer-arrow-callback`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/prefer-arrow-callback.md)<a id="rule-canonical-mocha/prefer-arrow-callback" /> 🛠|❌|👻|👻|👻|👻|
|[`mocha/valid-suite-description`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/valid-suite-description.md)<a id="rule-canonical-mocha/valid-suite-description" />|❌|👻|👻|👻|👻|
|[`mocha/valid-test-description`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/valid-test-description.md)<a id="rule-canonical-mocha/valid-test-description" />|❌|👻|👻|👻|👻|
|[`multiline-comment-style`](https://eslint.org/docs/rules/multiline-comment-style)<a id="rule-canonical-multiline-comment-style" /> 🛠|❌|❌|👻|👻|👻|
|[`multiline-ternary`](https://eslint.org/docs/rules/multiline-ternary)<a id="rule-canonical-multiline-ternary" /> 🛠|❌|❌|👻|🚨<a href="#rule-standard-multiline-ternary">?</a>|👻|
|`n/callback-return`<a id="rule-canonical-n/callback-return" />|👻|👻|👻|👻|👻|
|`n/exports-style`<a id="rule-canonical-n/exports-style" /> 🛠|👻|👻|👻|👻|👻|
|`n/file-extension-in-import`<a id="rule-canonical-n/file-extension-in-import" /> 🛠|👻|👻|👻|👻|👻|
|`n/global-require`<a id="rule-canonical-n/global-require" />|👻|👻|👻|👻|👻|
|`n/handle-callback-err`<a id="rule-canonical-n/handle-callback-err" />|👻|👻|👻|🚨<a href="#rule-standard-n/handle-callback-err">?</a>|👻|
|`n/no-callback-literal`<a id="rule-canonical-n/no-callback-literal" />|👻|👻|👻|🚨<a href="#rule-standard-n/no-callback-literal">?</a>|👻|
|`n/no-deprecated-api`<a id="rule-canonical-n/no-deprecated-api" />|👻|👻|👻|🚨<a href="#rule-standard-n/no-deprecated-api">?</a>|👻|
|`n/no-exports-assign`<a id="rule-canonical-n/no-exports-assign" />|👻|👻|👻|🚨<a href="#rule-standard-n/no-exports-assign">?</a>|👻|
|`n/no-extraneous-import`<a id="rule-canonical-n/no-extraneous-import" />|👻|👻|👻|👻|👻|
|`n/no-extraneous-require`<a id="rule-canonical-n/no-extraneous-require" />|👻|👻|👻|👻|👻|
|`n/no-hide-core-modules`<a id="rule-canonical-n/no-hide-core-modules" /> ⛔️|👻|👻|👻|👻|👻|
|`n/no-missing-import`<a id="rule-canonical-n/no-missing-import" />|👻|👻|👻|👻|👻|
|`n/no-missing-require`<a id="rule-canonical-n/no-missing-require" />|👻|👻|👻|👻|👻|
|`n/no-mixed-requires`<a id="rule-canonical-n/no-mixed-requires" />|👻|👻|👻|👻|👻|
|`n/no-new-require`<a id="rule-canonical-n/no-new-require" />|👻|👻|👻|🚨<a href="#rule-standard-n/no-new-require">?</a>|👻|
|`n/no-path-concat`<a id="rule-canonical-n/no-path-concat" />|👻|👻|👻|🚨<a href="#rule-standard-n/no-path-concat">?</a>|👻|
|`n/no-process-env`<a id="rule-canonical-n/no-process-env" />|👻|👻|👻|👻|👻|
|`n/no-process-exit`<a id="rule-canonical-n/no-process-exit" />|👻|👻|👻|👻|👻|
|`n/no-restricted-import`<a id="rule-canonical-n/no-restricted-import" />|👻|👻|👻|👻|👻|
|`n/no-restricted-require`<a id="rule-canonical-n/no-restricted-require" />|👻|👻|👻|👻|👻|
|`n/no-sync`<a id="rule-canonical-n/no-sync" />|👻|👻|👻|👻|👻|
|`n/no-unpublished-bin`<a id="rule-canonical-n/no-unpublished-bin" />|👻|👻|👻|👻|👻|
|`n/no-unpublished-import`<a id="rule-canonical-n/no-unpublished-import" />|👻|👻|👻|👻|👻|
|`n/no-unpublished-require`<a id="rule-canonical-n/no-unpublished-require" />|👻|👻|👻|👻|👻|
|`n/no-unsupported-features`<a id="rule-canonical-n/no-unsupported-features" /> ⛔️|👻|👻|👻|👻|👻|
|`n/no-unsupported-features/es-builtins`<a id="rule-canonical-n/no-unsupported-features/es-builtins" />|👻|👻|👻|👻|👻|
|`n/no-unsupported-features/es-syntax`<a id="rule-canonical-n/no-unsupported-features/es-syntax" />|👻|👻|👻|👻|👻|
|`n/no-unsupported-features/node-builtins`<a id="rule-canonical-n/no-unsupported-features/node-builtins" />|👻|👻|👻|👻|👻|
|`n/prefer-global/buffer`<a id="rule-canonical-n/prefer-global/buffer" />|👻|👻|👻|👻|👻|
|`n/prefer-global/console`<a id="rule-canonical-n/prefer-global/console" />|👻|👻|👻|👻|👻|
|`n/prefer-global/process`<a id="rule-canonical-n/prefer-global/process" />|👻|👻|👻|👻|👻|
|`n/prefer-global/text-decoder`<a id="rule-canonical-n/prefer-global/text-decoder" />|👻|👻|👻|👻|👻|
|`n/prefer-global/text-encoder`<a id="rule-canonical-n/prefer-global/text-encoder" />|👻|👻|👻|👻|👻|
|`n/prefer-global/url`<a id="rule-canonical-n/prefer-global/url" />|👻|👻|👻|👻|👻|
|`n/prefer-global/url-search-params`<a id="rule-canonical-n/prefer-global/url-search-params" />|👻|👻|👻|👻|👻|
|`n/prefer-promises/dns`<a id="rule-canonical-n/prefer-promises/dns" />|👻|👻|👻|👻|👻|
|`n/prefer-promises/fs`<a id="rule-canonical-n/prefer-promises/fs" />|👻|👻|👻|👻|👻|
|`n/process-exit-as-throw`<a id="rule-canonical-n/process-exit-as-throw" />|👻|👻|👻|🚨<a href="#rule-standard-n/process-exit-as-throw">?</a>|👻|
|`n/shebang`<a id="rule-canonical-n/shebang" /> 🛠|👻|👻|👻|👻|👻|
|[`new-cap`](https://eslint.org/docs/rules/new-cap)<a id="rule-canonical-new-cap" />|❌|🚨<a href="#rule-airbnb-new-cap">?</a>|🚨<a href="#rule-google-new-cap">?</a>|🚨<a href="#rule-standard-new-cap">?</a>|🚨<a href="#rule-xo-new-cap">?</a>|
|[`new-parens`](https://eslint.org/docs/rules/new-parens)<a id="rule-canonical-new-parens" /> 🛠|🚨|🚨|👻|🚨|🚨|
|[`newline-after-var`](https://eslint.org/docs/rules/newline-after-var)<a id="rule-canonical-newline-after-var" /> 🛠 ⛔️|👻|❌|👻|👻|👻|
|[`newline-before-return`](https://eslint.org/docs/rules/newline-before-return)<a id="rule-canonical-newline-before-return" /> 🛠 ⛔️|👻|❌|👻|👻|👻|
|[`newline-per-chained-call`](https://eslint.org/docs/rules/newline-per-chained-call)<a id="rule-canonical-newline-per-chained-call" /> 🛠|❌|🚨<a href="#rule-airbnb-newline-per-chained-call">?</a>|👻|👻|👻|
|[`no-alert`](https://eslint.org/docs/rules/no-alert)<a id="rule-canonical-no-alert" />|🚨|⚠️<a href="#rule-airbnb-no-alert">?</a>|👻|👻|🚨|
|[`no-array-constructor`](https://eslint.org/docs/rules/no-array-constructor)<a id="rule-canonical-no-array-constructor" />|🚨|🚨|🚨|🚨|🚨|
|[`no-async-promise-executor`](https://eslint.org/docs/rules/no-async-promise-executor)<a id="rule-canonical-no-async-promise-executor" />|🚨|🚨|👻|🚨|🚨|
|[`no-await-in-loop`](https://eslint.org/docs/rules/no-await-in-loop)<a id="rule-canonical-no-await-in-loop" />|❌|🚨<a href="#rule-airbnb-no-await-in-loop">?</a>|👻|👻|🚨<a href="#rule-xo-no-await-in-loop">?</a>|
|[`no-bitwise`](https://eslint.org/docs/rules/no-bitwise)<a id="rule-canonical-no-bitwise" />|🚨|🚨|👻|👻|🚨|
|[`no-buffer-constructor`](https://eslint.org/docs/rules/no-buffer-constructor)<a id="rule-canonical-no-buffer-constructor" /> ⛔️|👻|🚨<a href="#rule-airbnb-no-buffer-constructor">?</a>|👻|👻|🚨<a href="#rule-xo-no-buffer-constructor">?</a>|
|[`no-caller`](https://eslint.org/docs/rules/no-caller)<a id="rule-canonical-no-caller" />|🚨|🚨|🚨|🚨|🚨|
|[`no-case-declarations`](https://eslint.org/docs/rules/no-case-declarations)<a id="rule-canonical-no-case-declarations" />|🚨|🚨|👻|🚨|🚨|
|[`no-catch-shadow`](https://eslint.org/docs/rules/no-catch-shadow)<a id="rule-canonical-no-catch-shadow" /> ⛔️|👻|❌|👻|👻|👻|
|[`no-class-assign`](https://eslint.org/docs/rules/no-class-assign)<a id="rule-canonical-no-class-assign" />|🚨|🚨|👻|🚨|🚨|
|[`no-compare-neg-zero`](https://eslint.org/docs/rules/no-compare-neg-zero)<a id="rule-canonical-no-compare-neg-zero" />|🚨|🚨|👻|🚨|🚨|
|[`no-cond-assign`](https://eslint.org/docs/rules/no-cond-assign)<a id="rule-canonical-no-cond-assign" />|🚨|🚨<a href="#rule-airbnb-no-cond-assign">?</a>|❌|🚨|🚨|
|[`no-confusing-arrow`](https://eslint.org/docs/rules/no-confusing-arrow)<a id="rule-canonical-no-confusing-arrow" /> 🛠|🚨|🚨<a href="#rule-airbnb-no-confusing-arrow">?</a>|👻|👻|👻|
|[`no-console`](https://eslint.org/docs/rules/no-console)<a id="rule-canonical-no-console" />|🚨|⚠️<a href="#rule-airbnb-no-console">?</a>|👻|👻|👻|
|[`no-const-assign`](https://eslint.org/docs/rules/no-const-assign)<a id="rule-canonical-no-const-assign" />|🚨|🚨|👻|🚨|🚨|
|[`no-constant-binary-expression`](https://eslint.org/docs/rules/no-constant-binary-expression)<a id="rule-canonical-no-constant-binary-expression" />|👻|👻|👻|👻|🚨<a href="#rule-xo-no-constant-binary-expression">?</a>|
|[`no-constant-condition`](https://eslint.org/docs/rules/no-constant-condition)<a id="rule-canonical-no-constant-condition" />|❌|⚠️<a href="#rule-airbnb-no-constant-condition">?</a>|👻|🚨<a href="#rule-standard-no-constant-condition">?</a>|🚨<a href="#rule-xo-no-constant-condition">?</a>|
|[`no-constructor-return`](https://eslint.org/docs/rules/no-constructor-return)<a id="rule-canonical-no-constructor-return" />|🚨|🚨|👻|👻|🚨|
|[`no-continue`](https://eslint.org/docs/rules/no-continue)<a id="rule-canonical-no-continue" />|❌|🚨<a href="#rule-airbnb-no-continue">?</a>|👻|👻|👻|
|[`no-control-regex`](https://eslint.org/docs/rules/no-control-regex)<a id="rule-canonical-no-control-regex" />|🚨|🚨|👻|🚨|🚨|
|[`no-debugger`](https://eslint.org/docs/rules/no-debugger)<a id="rule-canonical-no-debugger" />|🚨|🚨|👻|🚨|🚨|
|[`no-delete-var`](https://eslint.org/docs/rules/no-delete-var)<a id="rule-canonical-no-delete-var" />|🚨|🚨|👻|🚨|🚨|
|[`no-div-regex`](https://eslint.org/docs/rules/no-div-regex)<a id="rule-canonical-no-div-regex" /> 🛠|🚨|❌|👻|👻|👻|
|[`no-dupe-args`](https://eslint.org/docs/rules/no-dupe-args)<a id="rule-canonical-no-dupe-args" />|🚨|🚨|👻|🚨|🚨|
|[`no-dupe-class-members`](https://eslint.org/docs/rules/no-dupe-class-members)<a id="rule-canonical-no-dupe-class-members" />|🚨|🚨|👻|🚨|🚨|
|[`no-dupe-else-if`](https://eslint.org/docs/rules/no-dupe-else-if)<a id="rule-canonical-no-dupe-else-if" />|🚨|🚨|👻|👻|🚨|
|[`no-dupe-keys`](https://eslint.org/docs/rules/no-dupe-keys)<a id="rule-canonical-no-dupe-keys" />|🚨|🚨|👻|🚨|🚨|
|[`no-duplicate-case`](https://eslint.org/docs/rules/no-duplicate-case)<a id="rule-canonical-no-duplicate-case" />|🚨|🚨|👻|🚨|🚨|
|[`no-duplicate-imports`](https://eslint.org/docs/rules/no-duplicate-imports)<a id="rule-canonical-no-duplicate-imports" />|❌|❌|👻|👻|👻|
|[`no-else-return`](https://eslint.org/docs/rules/no-else-return)<a id="rule-canonical-no-else-return" /> 🛠|❌|🚨<a href="#rule-airbnb-no-else-return">?</a>|👻|👻|🚨<a href="#rule-xo-no-else-return">?</a>|
|[`no-empty`](https://eslint.org/docs/rules/no-empty)<a id="rule-canonical-no-empty" />|🚨|🚨|👻|🚨<a href="#rule-standard-no-empty">?</a>|🚨<a href="#rule-xo-no-empty">?</a>|
|[`no-empty-character-class`](https://eslint.org/docs/rules/no-empty-character-class)<a id="rule-canonical-no-empty-character-class" />|🚨|🚨|👻|🚨|🚨|
|[`no-empty-function`](https://eslint.org/docs/rules/no-empty-function)<a id="rule-canonical-no-empty-function" />|❌|🚨<a href="#rule-airbnb-no-empty-function">?</a>|👻|👻|👻|
|[`no-empty-pattern`](https://eslint.org/docs/rules/no-empty-pattern)<a id="rule-canonical-no-empty-pattern" />|🚨|🚨|👻|🚨|🚨|
|[`no-empty-static-block`](https://eslint.org/docs/rules/no-empty-static-block)<a id="rule-canonical-no-empty-static-block" />|👻|👻|👻|👻|🚨<a href="#rule-xo-no-empty-static-block">?</a>|
|[`no-eq-null`](https://eslint.org/docs/rules/no-eq-null)<a id="rule-canonical-no-eq-null" />|🚨|❌|👻|👻|🚨|
|[`no-eval`](https://eslint.org/docs/rules/no-eval)<a id="rule-canonical-no-eval" />|🚨|🚨|👻|🚨|🚨|
|[`no-ex-assign`](https://eslint.org/docs/rules/no-ex-assign)<a id="rule-canonical-no-ex-assign" />|🚨|🚨|👻|🚨|🚨|
|[`no-extend-native`](https://eslint.org/docs/rules/no-extend-native)<a id="rule-canonical-no-extend-native" />|🚨|🚨|🚨|🚨|🚨|
|[`no-extra-bind`](https://eslint.org/docs/rules/no-extra-bind)<a id="rule-canonical-no-extra-bind" /> 🛠|🚨|🚨|🚨|🚨|🚨|
|[`no-extra-boolean-cast`](https://eslint.org/docs/rules/no-extra-boolean-cast)<a id="rule-canonical-no-extra-boolean-cast" /> 🛠|🚨|🚨|👻|🚨|🚨|
|[`no-extra-label`](https://eslint.org/docs/rules/no-extra-label)<a id="rule-canonical-no-extra-label" /> 🛠|🚨|🚨|👻|👻|🚨|
|[`no-extra-parens`](https://eslint.org/docs/rules/no-extra-parens)<a id="rule-canonical-no-extra-parens" /> 🛠|🚨|❌|👻|🚨<a href="#rule-standard-no-extra-parens">?</a>|👻|
|[`no-extra-semi`](https://eslint.org/docs/rules/no-extra-semi)<a id="rule-canonical-no-extra-semi" /> 🛠|🚨|🚨|👻|👻|🚨|
|[`no-fallthrough`](https://eslint.org/docs/rules/no-fallthrough)<a id="rule-canonical-no-fallthrough" />|🚨|🚨|👻|🚨|🚨|
|[`no-floating-decimal`](https://eslint.org/docs/rules/no-floating-decimal)<a id="rule-canonical-no-floating-decimal" /> 🛠|🚨|🚨|👻|🚨|🚨|
|[`no-func-assign`](https://eslint.org/docs/rules/no-func-assign)<a id="rule-canonical-no-func-assign" />|🚨|🚨|👻|🚨|🚨|
|[`no-global-assign`](https://eslint.org/docs/rules/no-global-assign)<a id="rule-canonical-no-global-assign" />|🚨|🚨<a href="#rule-airbnb-no-global-assign">?</a>|👻|🚨|🚨|
|[`no-implicit-coercion`](https://eslint.org/docs/rules/no-implicit-coercion)<a id="rule-canonical-no-implicit-coercion" /> 🛠|🚨|❌|👻|👻|🚨|
|[`no-implicit-globals`](https://eslint.org/docs/rules/no-implicit-globals)<a id="rule-canonical-no-implicit-globals" />|🚨|❌|👻|👻|🚨|
|[`no-implied-eval`](https://eslint.org/docs/rules/no-implied-eval)<a id="rule-canonical-no-implied-eval" />|🚨|🚨|👻|🚨|🚨|
|[`no-import-assign`](https://eslint.org/docs/rules/no-import-assign)<a id="rule-canonical-no-import-assign" />|🚨|🚨|👻|🚨|🚨|
|[`no-inline-comments`](https://eslint.org/docs/rules/no-inline-comments)<a id="rule-canonical-no-inline-comments" />|🚨|❌|👻|👻|👻|
|[`no-inner-declarations`](https://eslint.org/docs/rules/no-inner-declarations)<a id="rule-canonical-no-inner-declarations" />|🚨|🚨|👻|👻|🚨|
|[`no-invalid-regexp`](https://eslint.org/docs/rules/no-invalid-regexp)<a id="rule-canonical-no-invalid-regexp" />|🚨|🚨|👻|🚨|🚨|
|[`no-invalid-this`](https://eslint.org/docs/rules/no-invalid-this)<a id="rule-canonical-no-invalid-this" />|❌|❌|🚨<a href="#rule-google-no-invalid-this">?</a>|👻|👻|
|[`no-irregular-whitespace`](https://eslint.org/docs/rules/no-irregular-whitespace)<a id="rule-canonical-no-irregular-whitespace" />|🚨|🚨|🚨|🚨|🚨|
|[`no-iterator`](https://eslint.org/docs/rules/no-iterator)<a id="rule-canonical-no-iterator" />|🚨|🚨|👻|🚨|🚨|
|[`no-label-var`](https://eslint.org/docs/rules/no-label-var)<a id="rule-canonical-no-label-var" />|🚨|🚨|👻|👻|🚨|
|[`no-labels`](https://eslint.org/docs/rules/no-labels)<a id="rule-canonical-no-labels" />|🚨|🚨<a href="#rule-airbnb-no-labels">?</a>|👻|🚨<a href="#rule-standard-no-labels">?</a>|🚨|
|[`no-lone-blocks`](https://eslint.org/docs/rules/no-lone-blocks)<a id="rule-canonical-no-lone-blocks" />|🚨|🚨|👻|🚨|🚨|
|[`no-lonely-if`](https://eslint.org/docs/rules/no-lonely-if)<a id="rule-canonical-no-lonely-if" /> 🛠|🚨|🚨|👻|👻|🚨|
|[`no-loop-func`](https://eslint.org/docs/rules/no-loop-func)<a id="rule-canonical-no-loop-func" />|🚨|🚨|👻|👻|👻|
|[`no-loss-of-precision`](https://eslint.org/docs/rules/no-loss-of-precision)<a id="rule-canonical-no-loss-of-precision" />|🚨|🚨|👻|🚨|🚨|
|[`no-magic-numbers`](https://eslint.org/docs/rules/no-magic-numbers)<a id="rule-canonical-no-magic-numbers" />|❌|❌|👻|👻|👻|
|[`no-misleading-character-class`](https://eslint.org/docs/rules/no-misleading-character-class)<a id="rule-canonical-no-misleading-character-class" />|🚨|🚨|👻|🚨|🚨|
|[`no-mixed-operators`](https://eslint.org/docs/rules/no-mixed-operators)<a id="rule-canonical-no-mixed-operators" />|❌|🚨<a href="#rule-airbnb-no-mixed-operators">?</a>|👻|🚨<a href="#rule-standard-no-mixed-operators">?</a>|🚨<a href="#rule-xo-no-mixed-operators">?</a>|
|[`no-mixed-requires`](https://eslint.org/docs/rules/no-mixed-requires)<a id="rule-canonical-no-mixed-requires" /> ⛔️|👻|❌|👻|👻|👻|
|[`no-mixed-spaces-and-tabs`](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs)<a id="rule-canonical-no-mixed-spaces-and-tabs" />|🚨|🚨|🚨|🚨|🚨|
|[`no-multi-assign`](https://eslint.org/docs/rules/no-multi-assign)<a id="rule-canonical-no-multi-assign" />|🚨|🚨|👻|👻|🚨|
|[`no-multi-spaces`](https://eslint.org/docs/rules/no-multi-spaces)<a id="rule-canonical-no-multi-spaces" /> 🛠|🚨|🚨<a href="#rule-airbnb-no-multi-spaces">?</a>|🚨|🚨|🚨|
|[`no-multi-str`](https://eslint.org/docs/rules/no-multi-str)<a id="rule-canonical-no-multi-str" />|🚨|🚨|🚨|🚨|🚨|
|[`no-multiple-empty-lines`](https://eslint.org/docs/rules/no-multiple-empty-lines)<a id="rule-canonical-no-multiple-empty-lines" /> 🛠|🚨|🚨<a href="#rule-airbnb-no-multiple-empty-lines">?</a>|🚨<a href="#rule-google-no-multiple-empty-lines">?</a>|🚨<a href="#rule-standard-no-multiple-empty-lines">?</a>|🚨<a href="#rule-xo-no-multiple-empty-lines">?</a>|
|[`no-native-reassign`](https://eslint.org/docs/rules/no-native-reassign)<a id="rule-canonical-no-native-reassign" /> ⛔️|👻|❌|👻|👻|👻|
|[`no-negated-condition`](https://eslint.org/docs/rules/no-negated-condition)<a id="rule-canonical-no-negated-condition" />|🚨|❌|👻|👻|🚨|
|[`no-negated-in-lhs`](https://eslint.org/docs/rules/no-negated-in-lhs)<a id="rule-canonical-no-negated-in-lhs" /> ⛔️|👻|❌|👻|👻|👻|
|[`no-nested-ternary`](https://eslint.org/docs/rules/no-nested-ternary)<a id="rule-canonical-no-nested-ternary" />|❌|🚨<a href="#rule-airbnb-no-nested-ternary">?</a>|👻|👻|👻|
|[`no-new`](https://eslint.org/docs/rules/no-new)<a id="rule-canonical-no-new" />|🚨|🚨|👻|🚨|🚨|
|[`no-new-func`](https://eslint.org/docs/rules/no-new-func)<a id="rule-canonical-no-new-func" />|🚨|🚨|👻|🚨|🚨|
|[`no-new-native-nonconstructor`](https://eslint.org/docs/rules/no-new-native-nonconstructor)<a id="rule-canonical-no-new-native-nonconstructor" />|👻|👻|👻|👻|🚨<a href="#rule-xo-no-new-native-nonconstructor">?</a>|
|[`no-new-object`](https://eslint.org/docs/rules/no-new-object)<a id="rule-canonical-no-new-object" />|🚨|🚨|🚨|🚨|🚨|
|[`no-new-require`](https://eslint.org/docs/rules/no-new-require)<a id="rule-canonical-no-new-require" /> ⛔️|👻|🚨<a href="#rule-airbnb-no-new-require">?</a>|👻|👻|👻|
|[`no-new-symbol`](https://eslint.org/docs/rules/no-new-symbol)<a id="rule-canonical-no-new-symbol" />|🚨|🚨|🚨|🚨|👻|
|[`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)<a id="rule-canonical-no-new-wrappers" />|🚨|🚨|🚨|🚨|🚨|
|[`no-nonoctal-decimal-escape`](https://eslint.org/docs/rules/no-nonoctal-decimal-escape)<a id="rule-canonical-no-nonoctal-decimal-escape" />|🚨|🚨|👻|👻|🚨|
|[`no-obj-calls`](https://eslint.org/docs/rules/no-obj-calls)<a id="rule-canonical-no-obj-calls" />|🚨|🚨|👻|🚨|🚨|
|[`no-octal`](https://eslint.org/docs/rules/no-octal)<a id="rule-canonical-no-octal" />|🚨|🚨|👻|🚨|🚨|
|[`no-octal-escape`](https://eslint.org/docs/rules/no-octal-escape)<a id="rule-canonical-no-octal-escape" />|🚨|🚨|👻|🚨|🚨|
|[`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign)<a id="rule-canonical-no-param-reassign" />|🚨|🚨<a href="#rule-airbnb-no-param-reassign">?</a>|👻|👻|👻|
|[`no-path-concat`](https://eslint.org/docs/rules/no-path-concat)<a id="rule-canonical-no-path-concat" /> ⛔️|👻|🚨<a href="#rule-airbnb-no-path-concat">?</a>|👻|👻|👻|
|[`no-plusplus`](https://eslint.org/docs/rules/no-plusplus)<a id="rule-canonical-no-plusplus" />|❌|🚨<a href="#rule-airbnb-no-plusplus">?</a>|👻|👻|👻|
|[`no-process-env`](https://eslint.org/docs/rules/no-process-env)<a id="rule-canonical-no-process-env" /> ⛔️|👻|❌|👻|👻|👻|
|[`no-process-exit`](https://eslint.org/docs/rules/no-process-exit)<a id="rule-canonical-no-process-exit" /> ⛔️|👻|❌|👻|👻|👻|
|[`no-promise-executor-return`](https://eslint.org/docs/rules/no-promise-executor-return)<a id="rule-canonical-no-promise-executor-return" />|🚨|🚨|👻|👻|🚨|
|[`no-proto`](https://eslint.org/docs/rules/no-proto)<a id="rule-canonical-no-proto" />|🚨|🚨|👻|🚨|🚨|
|[`no-prototype-builtins`](https://eslint.org/docs/rules/no-prototype-builtins)<a id="rule-canonical-no-prototype-builtins" />|🚨|🚨|👻|🚨|🚨|
|[`no-redeclare`](https://eslint.org/docs/rules/no-redeclare)<a id="rule-canonical-no-redeclare" />|🚨|🚨<a href="#rule-airbnb-no-redeclare">?</a>|👻|🚨<a href="#rule-standard-no-redeclare">?</a>|🚨<a href="#rule-xo-no-redeclare">?</a>|
|[`no-regex-spaces`](https://eslint.org/docs/rules/no-regex-spaces)<a id="rule-canonical-no-regex-spaces" /> 🛠|🚨|🚨|👻|🚨|🚨|
|[`no-restricted-exports`](https://eslint.org/docs/rules/no-restricted-exports)<a id="rule-canonical-no-restricted-exports" />|❌|🚨<a href="#rule-airbnb-no-restricted-exports">?</a>|👻|👻|👻|
|[`no-restricted-globals`](https://eslint.org/docs/rules/no-restricted-globals)<a id="rule-canonical-no-restricted-globals" />|❌|🚨<a href="#rule-airbnb-no-restricted-globals">?</a>|👻|👻|🚨<a href="#rule-xo-no-restricted-globals">?</a>|
|[`no-restricted-imports`](https://eslint.org/docs/rules/no-restricted-imports)<a id="rule-canonical-no-restricted-imports" />|❌|❌|👻|👻|🚨<a href="#rule-xo-no-restricted-imports">?</a>|
|[`no-restricted-modules`](https://eslint.org/docs/rules/no-restricted-modules)<a id="rule-canonical-no-restricted-modules" /> ⛔️|👻|❌|👻|👻|👻|
|[`no-restricted-properties`](https://eslint.org/docs/rules/no-restricted-properties)<a id="rule-canonical-no-restricted-properties" />|❌|🚨<a href="#rule-airbnb-no-restricted-properties">?</a>|👻|👻|👻|
|[`no-restricted-syntax`](https://eslint.org/docs/rules/no-restricted-syntax)<a id="rule-canonical-no-restricted-syntax" />|❌|🚨<a href="#rule-airbnb-no-restricted-syntax">?</a>|👻|👻|👻|
|[`no-return-assign`](https://eslint.org/docs/rules/no-return-assign)<a id="rule-canonical-no-return-assign" />|🚨|🚨<a href="#rule-airbnb-no-return-assign">?</a>|👻|🚨<a href="#rule-standard-no-return-assign">?</a>|🚨<a href="#rule-xo-no-return-assign">?</a>|
|[`no-return-await`](https://eslint.org/docs/rules/no-return-await)<a id="rule-canonical-no-return-await" />|❌|🚨<a href="#rule-airbnb-no-return-await">?</a>|👻|👻|🚨<a href="#rule-xo-no-return-await">?</a>|
|[`no-script-url`](https://eslint.org/docs/rules/no-script-url)<a id="rule-canonical-no-script-url" />|🚨|🚨|👻|👻|🚨|
|[`no-self-assign`](https://eslint.org/docs/rules/no-self-assign)<a id="rule-canonical-no-self-assign" />|🚨|🚨<a href="#rule-airbnb-no-self-assign">?</a>|👻|🚨<a href="#rule-standard-no-self-assign">?</a>|🚨<a href="#rule-xo-no-self-assign">?</a>|
|[`no-self-compare`](https://eslint.org/docs/rules/no-self-compare)<a id="rule-canonical-no-self-compare" />|🚨|🚨|👻|🚨|🚨|
|[`no-sequences`](https://eslint.org/docs/rules/no-sequences)<a id="rule-canonical-no-sequences" />|🚨|🚨|👻|🚨|🚨|
|[`no-setter-return`](https://eslint.org/docs/rules/no-setter-return)<a id="rule-canonical-no-setter-return" />|🚨|🚨|👻|👻|🚨|
|[`no-shadow`](https://eslint.org/docs/rules/no-shadow)<a id="rule-canonical-no-shadow" />|🚨|🚨<a href="#rule-airbnb-no-shadow">?</a>|👻|👻|👻|
|[`no-shadow-restricted-names`](https://eslint.org/docs/rules/no-shadow-restricted-names)<a id="rule-canonical-no-shadow-restricted-names" />|🚨|🚨|👻|🚨|🚨|
|[`no-spaced-func`](https://eslint.org/docs/rules/no-spaced-func)<a id="rule-canonical-no-spaced-func" /> 🛠 ⛔️|👻|🚨<a href="#rule-airbnb-no-spaced-func">?</a>|👻|👻|👻|
|[`no-sparse-arrays`](https://eslint.org/docs/rules/no-sparse-arrays)<a id="rule-canonical-no-sparse-arrays" />|🚨|🚨|👻|🚨|🚨|
|[`no-sync`](https://eslint.org/docs/rules/no-sync)<a id="rule-canonical-no-sync" /> ⛔️|👻|❌|👻|👻|👻|
|[`no-tabs`](https://eslint.org/docs/rules/no-tabs)<a id="rule-canonical-no-tabs" />|🚨|🚨|🚨|🚨|👻|
|[`no-template-curly-in-string`](https://eslint.org/docs/rules/no-template-curly-in-string)<a id="rule-canonical-no-template-curly-in-string" />|🚨|🚨|👻|🚨|🚨|
|[`no-ternary`](https://eslint.org/docs/rules/no-ternary)<a id="rule-canonical-no-ternary" />|❌|❌|👻|👻|👻|
|[`no-this-before-super`](https://eslint.org/docs/rules/no-this-before-super)<a id="rule-canonical-no-this-before-super" />|🚨|🚨|🚨|🚨|🚨|
|[`no-throw-literal`](https://eslint.org/docs/rules/no-throw-literal)<a id="rule-canonical-no-throw-literal" />|🚨|🚨|🚨|🚨|🚨|
|[`no-trailing-spaces`](https://eslint.org/docs/rules/no-trailing-spaces)<a id="rule-canonical-no-trailing-spaces" /> 🛠|🚨|🚨<a href="#rule-airbnb-no-trailing-spaces">?</a>|🚨|🚨|🚨|
|[`no-undef`](https://eslint.org/docs/rules/no-undef)<a id="rule-canonical-no-undef" />|🚨|🚨|👻|🚨|🚨<a href="#rule-xo-no-undef">?</a>|
|[`no-undef-init`](https://eslint.org/docs/rules/no-undef-init)<a id="rule-canonical-no-undef-init" /> 🛠|🚨|🚨|👻|🚨|🚨|
|[`no-undefined`](https://eslint.org/docs/rules/no-undefined)<a id="rule-canonical-no-undefined" />|❌|❌|👻|👻|👻|
|[`no-underscore-dangle`](https://eslint.org/docs/rules/no-underscore-dangle)<a id="rule-canonical-no-underscore-dangle" />|❌|🚨<a href="#rule-airbnb-no-underscore-dangle">?</a>|👻|👻|👻|
|[`no-unexpected-multiline`](https://eslint.org/docs/rules/no-unexpected-multiline)<a id="rule-canonical-no-unexpected-multiline" />|🚨|🚨|🚨|🚨|🚨|
|[`no-unmodified-loop-condition`](https://eslint.org/docs/rules/no-unmodified-loop-condition)<a id="rule-canonical-no-unmodified-loop-condition" />|🚨|❌|👻|🚨|🚨|
|[`no-unneeded-ternary`](https://eslint.org/docs/rules/no-unneeded-ternary)<a id="rule-canonical-no-unneeded-ternary" /> 🛠|🚨|🚨<a href="#rule-airbnb-no-unneeded-ternary">?</a>|👻|🚨<a href="#rule-standard-no-unneeded-ternary">?</a>|🚨|
|[`no-unreachable`](https://eslint.org/docs/rules/no-unreachable)<a id="rule-canonical-no-unreachable" />|❌|🚨<a href="#rule-airbnb-no-unreachable">?</a>|👻|🚨<a href="#rule-standard-no-unreachable">?</a>|🚨<a href="#rule-xo-no-unreachable">?</a>|
|[`no-unreachable-loop`](https://eslint.org/docs/rules/no-unreachable-loop)<a id="rule-canonical-no-unreachable-loop" />|🚨|🚨<a href="#rule-airbnb-no-unreachable-loop">?</a>|👻|🚨|🚨|
|[`no-unsafe-finally`](https://eslint.org/docs/rules/no-unsafe-finally)<a id="rule-canonical-no-unsafe-finally" />|🚨|🚨|👻|🚨|🚨|
|[`no-unsafe-negation`](https://eslint.org/docs/rules/no-unsafe-negation)<a id="rule-canonical-no-unsafe-negation" />|🚨|🚨|👻|🚨|🚨<a href="#rule-xo-no-unsafe-negation">?</a>|
|[`no-unsafe-optional-chaining`](https://eslint.org/docs/rules/no-unsafe-optional-chaining)<a id="rule-canonical-no-unsafe-optional-chaining" />|🚨|🚨<a href="#rule-airbnb-no-unsafe-optional-chaining">?</a>|👻|👻|🚨<a href="#rule-xo-no-unsafe-optional-chaining">?</a>|
|[`no-unused-expressions`](https://eslint.org/docs/rules/no-unused-expressions)<a id="rule-canonical-no-unused-expressions" />|🚨|🚨<a href="#rule-airbnb-no-unused-expressions">?</a>|👻|🚨<a href="#rule-standard-no-unused-expressions">?</a>|🚨<a href="#rule-xo-no-unused-expressions">?</a>|
|[`no-unused-labels`](https://eslint.org/docs/rules/no-unused-labels)<a id="rule-canonical-no-unused-labels" /> 🛠|🚨|🚨|👻|👻|🚨|
|[`no-unused-private-class-members`](https://eslint.org/docs/rules/no-unused-private-class-members)<a id="rule-canonical-no-unused-private-class-members" />|❌|❌|👻|👻|👻|
|[`no-unused-vars`](https://eslint.org/docs/rules/no-unused-vars)<a id="rule-canonical-no-unused-vars" />|🚨|🚨<a href="#rule-airbnb-no-unused-vars">?</a>|🚨<a href="#rule-google-no-unused-vars">?</a>|🚨<a href="#rule-standard-no-unused-vars">?</a>|🚨<a href="#rule-xo-no-unused-vars">?</a>|
|[`no-use-before-define`](https://eslint.org/docs/rules/no-use-before-define)<a id="rule-canonical-no-use-before-define" />|🚨|🚨<a href="#rule-airbnb-no-use-before-define">?</a>|👻|🚨<a href="#rule-standard-no-use-before-define">?</a>|👻|
|[`no-useless-backreference`](https://eslint.org/docs/rules/no-useless-backreference)<a id="rule-canonical-no-useless-backreference" />|🚨|🚨|👻|🚨|🚨|
|[`no-useless-call`](https://eslint.org/docs/rules/no-useless-call)<a id="rule-canonical-no-useless-call" />|🚨|❌|👻|🚨|🚨|
|[`no-useless-catch`](https://eslint.org/docs/rules/no-useless-catch)<a id="rule-canonical-no-useless-catch" />|🚨|🚨|👻|🚨|🚨|
|[`no-useless-computed-key`](https://eslint.org/docs/rules/no-useless-computed-key)<a id="rule-canonical-no-useless-computed-key" /> 🛠|🚨|🚨|👻|🚨|🚨<a href="#rule-xo-no-useless-computed-key">?</a>|
|[`no-useless-concat`](https://eslint.org/docs/rules/no-useless-concat)<a id="rule-canonical-no-useless-concat" />|🚨|🚨|👻|👻|🚨|
|[`no-useless-constructor`](https://eslint.org/docs/rules/no-useless-constructor)<a id="rule-canonical-no-useless-constructor" />|🚨|🚨|👻|🚨|🚨|
|[`no-useless-escape`](https://eslint.org/docs/rules/no-useless-escape)<a id="rule-canonical-no-useless-escape" />|🚨|🚨|👻|🚨|🚨|
|[`no-useless-rename`](https://eslint.org/docs/rules/no-useless-rename)<a id="rule-canonical-no-useless-rename" /> 🛠|🚨|🚨|👻|🚨<a href="#rule-standard-no-useless-rename">?</a>|🚨<a href="#rule-xo-no-useless-rename">?</a>|
|[`no-useless-return`](https://eslint.org/docs/rules/no-useless-return)<a id="rule-canonical-no-useless-return" /> 🛠|🚨|🚨|👻|🚨|🚨|
|[`no-var`](https://eslint.org/docs/rules/no-var)<a id="rule-canonical-no-var" /> 🛠|🚨|🚨|🚨|⚠️<a href="#rule-standard-no-var">?</a>|🚨|
|[`no-void`](https://eslint.org/docs/rules/no-void)<a id="rule-canonical-no-void" />|🚨|🚨<a href="#rule-airbnb-no-void">?</a>|👻|🚨<a href="#rule-standard-no-void">?</a>|🚨<a href="#rule-xo-no-void">?</a>|
|[`no-warning-comments`](https://eslint.org/docs/rules/no-warning-comments)<a id="rule-canonical-no-warning-comments" />|⚠️|❌|👻|👻|⚠️<a href="#rule-xo-no-warning-comments">?</a>|
|[`no-whitespace-before-property`](https://eslint.org/docs/rules/no-whitespace-before-property)<a id="rule-canonical-no-whitespace-before-property" /> 🛠|🚨|🚨|👻|🚨|🚨|
|[`no-with`](https://eslint.org/docs/rules/no-with)<a id="rule-canonical-no-with" />|🚨|🚨|🚨|🚨|🚨|
|[`node/callback-return`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/callback-return.md)<a id="rule-canonical-node/callback-return" />|🚨|👻|👻|👻|👻|
|[`node/exports-style`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/exports-style.md)<a id="rule-canonical-node/exports-style" />|🚨|👻|👻|👻|👻|
|[`node/file-extension-in-import`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/file-extension-in-import.md)<a id="rule-canonical-node/file-extension-in-import" /> 🛠|❌|👻|👻|👻|👻|
|[`node/global-require`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/global-require.md)<a id="rule-canonical-node/global-require" />|❌|👻|👻|👻|👻|
|[`node/handle-callback-err`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/handle-callback-err.md)<a id="rule-canonical-node/handle-callback-err" />|🚨|👻|👻|👻|👻|
|[`node/no-callback-literal`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-callback-literal.md)<a id="rule-canonical-node/no-callback-literal" />|🚨|👻|👻|👻|👻|
|[`node/no-deprecated-api`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md)<a id="rule-canonical-node/no-deprecated-api" />|🚨|👻|👻|👻|👻|
|[`node/no-exports-assign`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-exports-assign.md)<a id="rule-canonical-node/no-exports-assign" />|🚨|👻|👻|👻|👻|
|[`node/no-extraneous-import`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md)<a id="rule-canonical-node/no-extraneous-import" />|🚨|👻|👻|👻|👻|
|[`node/no-extraneous-require`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md)<a id="rule-canonical-node/no-extraneous-require" />|🚨|👻|👻|👻|👻|
|[`node/no-hide-core-modules`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-hide-core-modules.md)<a id="rule-canonical-node/no-hide-core-modules" /> ⛔️|👻|👻|👻|👻|👻|
|[`node/no-missing-import`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md)<a id="rule-canonical-node/no-missing-import" />|❌|👻|👻|👻|👻|
|[`node/no-missing-require`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md)<a id="rule-canonical-node/no-missing-require" />|❌|👻|👻|👻|👻|
|[`node/no-mixed-requires`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-mixed-requires.md)<a id="rule-canonical-node/no-mixed-requires" />|❌|👻|👻|👻|👻|
|[`node/no-new-require`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-new-require.md)<a id="rule-canonical-node/no-new-require" />|🚨|👻|👻|👻|👻|
|[`node/no-path-concat`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-path-concat.md)<a id="rule-canonical-node/no-path-concat" />|🚨|👻|👻|👻|👻|
|[`node/no-process-env`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-env.md)<a id="rule-canonical-node/no-process-env" />|🚨|👻|👻|👻|👻|
|[`node/no-process-exit`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-exit.md)<a id="rule-canonical-node/no-process-exit" />|🚨|👻|👻|👻|👻|
|[`node/no-restricted-import`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-restricted-import.md)<a id="rule-canonical-node/no-restricted-import" />|❌|👻|👻|👻|👻|
|[`node/no-restricted-require`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-restricted-require.md)<a id="rule-canonical-node/no-restricted-require" />|❌|👻|👻|👻|👻|
|[`node/no-sync`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-sync.md)<a id="rule-canonical-node/no-sync" />|🚨|👻|👻|👻|👻|
|[`node/no-unpublished-bin`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin.md)<a id="rule-canonical-node/no-unpublished-bin" />|🚨|👻|👻|👻|👻|
|[`node/no-unpublished-import`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md)<a id="rule-canonical-node/no-unpublished-import" />|❌|👻|👻|👻|👻|
|[`node/no-unpublished-require`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md)<a id="rule-canonical-node/no-unpublished-require" />|❌|👻|👻|👻|👻|
|[`node/no-unsupported-features`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features.md)<a id="rule-canonical-node/no-unsupported-features" /> ⛔️|👻|👻|👻|👻|👻|
|[`node/no-unsupported-features/es-builtins`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-builtins.md)<a id="rule-canonical-node/no-unsupported-features/es-builtins" />|❌|👻|👻|👻|👻|
|[`node/no-unsupported-features/es-syntax`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md)<a id="rule-canonical-node/no-unsupported-features/es-syntax" />|❌|👻|👻|👻|👻|
|[`node/no-unsupported-features/node-builtins`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/node-builtins.md)<a id="rule-canonical-node/no-unsupported-features/node-builtins" />|❌|👻|👻|👻|👻|
|[`node/prefer-global/buffer`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/buffer.md)<a id="rule-canonical-node/prefer-global/buffer" />|🚨|👻|👻|👻|👻|
|[`node/prefer-global/console`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/console.md)<a id="rule-canonical-node/prefer-global/console" />|🚨|👻|👻|👻|👻|
|[`node/prefer-global/process`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/process.md)<a id="rule-canonical-node/prefer-global/process" />|🚨|👻|👻|👻|👻|
|[`node/prefer-global/text-decoder`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-decoder.md)<a id="rule-canonical-node/prefer-global/text-decoder" />|🚨|👻|👻|👻|👻|
|[`node/prefer-global/text-encoder`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-encoder.md)<a id="rule-canonical-node/prefer-global/text-encoder" />|🚨|👻|👻|👻|👻|
|[`node/prefer-global/url`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url.md)<a id="rule-canonical-node/prefer-global/url" />|🚨|👻|👻|👻|👻|
|[`node/prefer-global/url-search-params`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url-search-params.md)<a id="rule-canonical-node/prefer-global/url-search-params" />|🚨|👻|👻|👻|👻|
|[`node/prefer-promises/dns`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/dns.md)<a id="rule-canonical-node/prefer-promises/dns" />|🚨|👻|👻|👻|👻|
|[`node/prefer-promises/fs`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/fs.md)<a id="rule-canonical-node/prefer-promises/fs" />|🚨|👻|👻|👻|👻|
|[`node/process-exit-as-throw`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md)<a id="rule-canonical-node/process-exit-as-throw" />|🚨|👻|👻|👻|👻|
|[`node/shebang`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md)<a id="rule-canonical-node/shebang" /> 🛠|🚨|👻|👻|👻|👻|
|[`nonblock-statement-body-position`](https://eslint.org/docs/rules/nonblock-statement-body-position)<a id="rule-canonical-nonblock-statement-body-position" /> 🛠|🚨|🚨<a href="#rule-airbnb-nonblock-statement-body-position">?</a>|👻|👻|👻|
|[`object-curly-newline`](https://eslint.org/docs/rules/object-curly-newline)<a id="rule-canonical-object-curly-newline" /> 🛠|🚨|🚨<a href="#rule-airbnb-object-curly-newline">?</a>|👻|🚨<a href="#rule-standard-object-curly-newline">?</a>|👻|
|[`object-curly-spacing`](https://eslint.org/docs/rules/object-curly-spacing)<a id="rule-canonical-object-curly-spacing" /> 🛠|❌|🚨<a href="#rule-airbnb-object-curly-spacing">?</a>|🚨<a href="#rule-google-object-curly-spacing">?</a>|🚨<a href="#rule-standard-object-curly-spacing">?</a>|🚨<a href="#rule-xo-object-curly-spacing">?</a>|
|[`object-property-newline`](https://eslint.org/docs/rules/object-property-newline)<a id="rule-canonical-object-property-newline" /> 🛠|🚨|🚨<a href="#rule-airbnb-object-property-newline">?</a>|👻|🚨<a href="#rule-standard-object-property-newline">?</a>|👻|
|[`object-shorthand`](https://eslint.org/docs/rules/object-shorthand)<a id="rule-canonical-object-shorthand" /> 🛠|🚨|🚨<a href="#rule-airbnb-object-shorthand">?</a>|👻|⚠️<a href="#rule-standard-object-shorthand">?</a>|🚨<a href="#rule-xo-object-shorthand">?</a>|
|[`one-var`](https://eslint.org/docs/rules/one-var)<a id="rule-canonical-one-var" /> 🛠|🚨|🚨|🚨<a href="#rule-google-one-var">?</a>|🚨<a href="#rule-standard-one-var">?</a>|🚨|
|[`one-var-declaration-per-line`](https://eslint.org/docs/rules/one-var-declaration-per-line)<a id="rule-canonical-one-var-declaration-per-line" /> 🛠|🚨|🚨<a href="#rule-airbnb-one-var-declaration-per-line">?</a>|👻|👻|🚨|
|[`operator-assignment`](https://eslint.org/docs/rules/operator-assignment)<a id="rule-canonical-operator-assignment" /> 🛠|🚨|🚨|👻|👻|🚨|
|[`operator-linebreak`](https://eslint.org/docs/rules/operator-linebreak)<a id="rule-canonical-operator-linebreak" /> 🛠|🚨|🚨<a href="#rule-airbnb-operator-linebreak">?</a>|🚨|🚨<a href="#rule-standard-operator-linebreak">?</a>|🚨<a href="#rule-xo-operator-linebreak">?</a>|
|[`padded-blocks`](https://eslint.org/docs/rules/padded-blocks)<a id="rule-canonical-padded-blocks" /> 🛠|🚨|🚨<a href="#rule-airbnb-padded-blocks">?</a>|🚨|🚨<a href="#rule-standard-padded-blocks">?</a>|🚨<a href="#rule-xo-padded-blocks">?</a>|
|[`padding-line-between-statements`](https://eslint.org/docs/rules/padding-line-between-statements)<a id="rule-canonical-padding-line-between-statements" /> 🛠|🚨|❌|👻|👻|🚨|
|[`prefer-arrow-callback`](https://eslint.org/docs/rules/prefer-arrow-callback)<a id="rule-canonical-prefer-arrow-callback" /> 🛠|🚨|🚨<a href="#rule-airbnb-prefer-arrow-callback">?</a>|👻|👻|🚨<a href="#rule-xo-prefer-arrow-callback">?</a>|
|[`prefer-const`](https://eslint.org/docs/rules/prefer-const)<a id="rule-canonical-prefer-const" /> 🛠|🚨|🚨<a href="#rule-airbnb-prefer-const">?</a>|🚨<a href="#rule-google-prefer-const">?</a>|🚨<a href="#rule-standard-prefer-const">?</a>|🚨<a href="#rule-xo-prefer-const">?</a>|
|[`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring)<a id="rule-canonical-prefer-destructuring" /> 🛠|❌|🚨<a href="#rule-airbnb-prefer-destructuring">?</a>|👻|👻|🚨<a href="#rule-xo-prefer-destructuring">?</a>|
|[`prefer-exponentiation-operator`](https://eslint.org/docs/rules/prefer-exponentiation-operator)<a id="rule-canonical-prefer-exponentiation-operator" /> 🛠|🚨|🚨|👻|👻|🚨|
|[`prefer-named-capture-group`](https://eslint.org/docs/rules/prefer-named-capture-group)<a id="rule-canonical-prefer-named-capture-group" />|❌|❌|👻|👻|👻|
|[`prefer-numeric-literals`](https://eslint.org/docs/rules/prefer-numeric-literals)<a id="rule-canonical-prefer-numeric-literals" /> 🛠|🚨|🚨|👻|👻|🚨|
|[`prefer-object-has-own`](https://eslint.org/docs/rules/prefer-object-has-own)<a id="rule-canonical-prefer-object-has-own" /> 🛠|👻|👻|👻|👻|👻|
|[`prefer-object-spread`](https://eslint.org/docs/rules/prefer-object-spread)<a id="rule-canonical-prefer-object-spread" /> 🛠|🚨|🚨|👻|👻|🚨|
|[`prefer-promise-reject-errors`](https://eslint.org/docs/rules/prefer-promise-reject-errors)<a id="rule-canonical-prefer-promise-reject-errors" />|🚨|🚨<a href="#rule-airbnb-prefer-promise-reject-errors">?</a>|🚨|🚨|🚨<a href="#rule-xo-prefer-promise-reject-errors">?</a>|
|[`prefer-reflect`](https://eslint.org/docs/rules/prefer-reflect)<a id="rule-canonical-prefer-reflect" /> ⛔️|👻|❌|👻|👻|👻|
|[`prefer-regex-literals`](https://eslint.org/docs/rules/prefer-regex-literals)<a id="rule-canonical-prefer-regex-literals" />|🚨|🚨|👻|🚨|🚨|
|[`prefer-rest-params`](https://eslint.org/docs/rules/prefer-rest-params)<a id="rule-canonical-prefer-rest-params" />|🚨|🚨|🚨|👻|🚨|
|[`prefer-spread`](https://eslint.org/docs/rules/prefer-spread)<a id="rule-canonical-prefer-spread" />|🚨|🚨|🚨|👻|🚨|
|[`prefer-template`](https://eslint.org/docs/rules/prefer-template)<a id="rule-canonical-prefer-template" /> 🛠|❌|🚨<a href="#rule-airbnb-prefer-template">?</a>|👻|👻|👻|
|[`promise/always-return`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/always-return.md)<a id="rule-canonical-promise/always-return" />|👻|👻|👻|👻|👻|
|[`promise/avoid-new`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/avoid-new.md)<a id="rule-canonical-promise/avoid-new" />|👻|👻|👻|👻|👻|
|[`promise/catch-or-return`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/catch-or-return.md)<a id="rule-canonical-promise/catch-or-return" />|👻|👻|👻|👻|👻|
|[`promise/no-callback-in-promise`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-callback-in-promise.md)<a id="rule-canonical-promise/no-callback-in-promise" />|👻|👻|👻|👻|👻|
|[`promise/no-multiple-resolved`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-multiple-resolved.md)<a id="rule-canonical-promise/no-multiple-resolved" />|👻|👻|👻|👻|👻|
|[`promise/no-native`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-native.md)<a id="rule-canonical-promise/no-native" />|👻|👻|👻|👻|👻|
|[`promise/no-nesting`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-nesting.md)<a id="rule-canonical-promise/no-nesting" />|👻|👻|👻|👻|👻|
|[`promise/no-new-statics`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-new-statics.md)<a id="rule-canonical-promise/no-new-statics" /> 🛠|👻|👻|👻|👻|👻|
|[`promise/no-promise-in-callback`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-promise-in-callback.md)<a id="rule-canonical-promise/no-promise-in-callback" />|👻|👻|👻|👻|👻|
|[`promise/no-return-in-finally`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-in-finally.md)<a id="rule-canonical-promise/no-return-in-finally" />|👻|👻|👻|👻|👻|
|[`promise/no-return-wrap`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-wrap.md)<a id="rule-canonical-promise/no-return-wrap" />|👻|👻|👻|👻|👻|
|[`promise/param-names`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/param-names.md)<a id="rule-canonical-promise/param-names" />|🚨|👻|👻|🚨|👻|
|[`promise/prefer-await-to-callbacks`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/prefer-await-to-callbacks.md)<a id="rule-canonical-promise/prefer-await-to-callbacks" />|❌|👻|👻|👻|👻|
|[`promise/prefer-await-to-then`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/prefer-await-to-then.md)<a id="rule-canonical-promise/prefer-await-to-then" />|🚨|👻|👻|👻|👻|
|[`promise/valid-params`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/valid-params.md)<a id="rule-canonical-promise/valid-params" />|🚨|👻|👻|👻|👻|
|[`quote-props`](https://eslint.org/docs/rules/quote-props)<a id="rule-canonical-quote-props" /> 🛠|🚨|🚨<a href="#rule-airbnb-quote-props">?</a>|🚨<a href="#rule-google-quote-props">?</a>|🚨<a href="#rule-standard-quote-props">?</a>|🚨<a href="#rule-xo-quote-props">?</a>|
|[`quotes`](https://eslint.org/docs/rules/quotes)<a id="rule-canonical-quotes" /> 🛠|🚨|🚨<a href="#rule-airbnb-quotes">?</a>|🚨<a href="#rule-google-quotes">?</a>|🚨<a href="#rule-standard-quotes">?</a>|🚨|
|[`radix`](https://eslint.org/docs/rules/radix)<a id="rule-canonical-radix" />|🚨|🚨|👻|👻|🚨|
|`react-hooks/exhaustive-deps`<a id="rule-canonical-react-hooks/exhaustive-deps" /> 🛠|🚨|👻|👻|👻|👻|
|`react-hooks/rules-of-hooks`<a id="rule-canonical-react-hooks/rules-of-hooks" />|🚨|👻|👻|👻|👻|
|[`react/boolean-prop-naming`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md)<a id="rule-canonical-react/boolean-prop-naming" />|❌|❌|👻|👻|👻|
|[`react/button-has-type`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md)<a id="rule-canonical-react/button-has-type" />|🚨|🚨<a href="#rule-airbnb-react/button-has-type">?</a>|👻|👻|👻|
|[`react/default-props-match-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md)<a id="rule-canonical-react/default-props-match-prop-types" />|🚨|🚨<a href="#rule-airbnb-react/default-props-match-prop-types">?</a>|👻|👻|👻|
|[`react/destructuring-assignment`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md)<a id="rule-canonical-react/destructuring-assignment" /> 🛠|❌|🚨<a href="#rule-airbnb-react/destructuring-assignment">?</a>|👻|👻|👻|
|[`react/display-name`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md)<a id="rule-canonical-react/display-name" />|❌|❌|👻|👻|👻|
|[`react/forbid-component-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md)<a id="rule-canonical-react/forbid-component-props" />|🚨|❌|👻|👻|👻|
|[`react/forbid-dom-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md)<a id="rule-canonical-react/forbid-dom-props" />|❌|❌|👻|👻|👻|
|[`react/forbid-elements`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md)<a id="rule-canonical-react/forbid-elements" />|❌|❌|👻|👻|👻|
|[`react/forbid-foreign-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md)<a id="rule-canonical-react/forbid-foreign-prop-types" />|❌|⚠️<a href="#rule-airbnb-react/forbid-foreign-prop-types">?</a>|👻|👻|👻|
|[`react/forbid-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md)<a id="rule-canonical-react/forbid-prop-types" />|❌|🚨<a href="#rule-airbnb-react/forbid-prop-types">?</a>|👻|👻|👻|
|[`react/function-component-definition`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md)<a id="rule-canonical-react/function-component-definition" /> 🛠|🚨|🚨<a href="#rule-airbnb-react/function-component-definition">?</a>|👻|👻|👻|
|[`react/hook-use-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md)<a id="rule-canonical-react/hook-use-state" />|🚨|👻|👻|👻|👻|
|[`react/iframe-missing-sandbox`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md)<a id="rule-canonical-react/iframe-missing-sandbox" />|🚨|👻|👻|👻|👻|
|[`react/jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)<a id="rule-canonical-react/jsx-boolean-value" /> 🛠|🚨|🚨<a href="#rule-airbnb-react/jsx-boolean-value">?</a>|👻|👻|👻|
|[`react/jsx-child-element-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md)<a id="rule-canonical-react/jsx-child-element-spacing" />|❌|❌|👻|👻|👻|
|[`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)<a id="rule-canonical-react/jsx-closing-bracket-location" /> 🛠|🚨|🚨|👻|👻|👻|
|[`react/jsx-closing-tag-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md)<a id="rule-canonical-react/jsx-closing-tag-location" /> 🛠|❌|🚨<a href="#rule-airbnb-react/jsx-closing-tag-location">?</a>|👻|👻|👻|
|[`react/jsx-curly-brace-presence`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md)<a id="rule-canonical-react/jsx-curly-brace-presence" /> 🛠|🚨|🚨|👻|👻|👻|
|[`react/jsx-curly-newline`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md)<a id="rule-canonical-react/jsx-curly-newline" /> 🛠|🚨|🚨<a href="#rule-airbnb-react/jsx-curly-newline">?</a>|👻|👻|👻|
|[`react/jsx-curly-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)<a id="rule-canonical-react/jsx-curly-spacing" /> 🛠|🚨|🚨|👻|👻|👻|
|[`react/jsx-equals-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md)<a id="rule-canonical-react/jsx-equals-spacing" /> 🛠|🚨|🚨|👻|👻|👻|
|[`react/jsx-filename-extension`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)<a id="rule-canonical-react/jsx-filename-extension" />|❌|🚨<a href="#rule-airbnb-react/jsx-filename-extension">?</a>|👻|👻|👻|
|[`react/jsx-first-prop-new-line`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md)<a id="rule-canonical-react/jsx-first-prop-new-line" /> 🛠|🚨|🚨|👻|👻|👻|
|[`react/jsx-fragments`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md)<a id="rule-canonical-react/jsx-fragments" /> 🛠|🚨|🚨|👻|👻|👻|
|[`react/jsx-handler-names`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md)<a id="rule-canonical-react/jsx-handler-names" />|🚨|❌|👻|👻|👻|
|[`react/jsx-indent`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md)<a id="rule-canonical-react/jsx-indent" /> 🛠|🚨|🚨|👻|👻|👻|
|[`react/jsx-indent-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md)<a id="rule-canonical-react/jsx-indent-props" /> 🛠|🚨|🚨|👻|👻|👻|
|[`react/jsx-key`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md)<a id="rule-canonical-react/jsx-key" />|🚨|❌|👻|👻|👻|
|[`react/jsx-max-depth`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md)<a id="rule-canonical-react/jsx-max-depth" />|❌|❌|👻|👻|👻|
|[`react/jsx-max-props-per-line`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md)<a id="rule-canonical-react/jsx-max-props-per-line" /> 🛠|🚨|🚨<a href="#rule-airbnb-react/jsx-max-props-per-line">?</a>|👻|👻|👻|
|[`react/jsx-newline`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md)<a id="rule-canonical-react/jsx-newline" /> 🛠|🚨|❌|👻|👻|👻|
|[`react/jsx-no-bind`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)<a id="rule-canonical-react/jsx-no-bind" />|🚨|🚨<a href="#rule-airbnb-react/jsx-no-bind">?</a>|👻|👻|👻|
|[`react/jsx-no-comment-textnodes`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md)<a id="rule-canonical-react/jsx-no-comment-textnodes" />|🚨|🚨|👻|👻|👻|
|[`react/jsx-no-constructed-context-values`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md)<a id="rule-canonical-react/jsx-no-constructed-context-values" />|🚨|🚨|👻|👻|👻|
|[`react/jsx-no-duplicate-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md)<a id="rule-canonical-react/jsx-no-duplicate-props" />|🚨|🚨<a href="#rule-airbnb-react/jsx-no-duplicate-props">?</a>|👻|👻|👻|
|[`react/jsx-no-leaked-render`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md)<a id="rule-canonical-react/jsx-no-leaked-render" /> 🛠|👻|👻|👻|👻|👻|
|[`react/jsx-no-literals`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md)<a id="rule-canonical-react/jsx-no-literals" />|❌|❌|👻|👻|👻|
|[`react/jsx-no-script-url`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md)<a id="rule-canonical-react/jsx-no-script-url" />|🚨|🚨<a href="#rule-airbnb-react/jsx-no-script-url">?</a>|👻|👻|👻|
|[`react/jsx-no-target-blank`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md)<a id="rule-canonical-react/jsx-no-target-blank" /> 🛠|🚨|🚨<a href="#rule-airbnb-react/jsx-no-target-blank">?</a>|👻|👻|👻|
|[`react/jsx-no-undef`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md)<a id="rule-canonical-react/jsx-no-undef" />|🚨|🚨|👻|👻|👻|
|[`react/jsx-no-useless-fragment`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md)<a id="rule-canonical-react/jsx-no-useless-fragment" /> 🛠|🚨|🚨<a href="#rule-airbnb-react/jsx-no-useless-fragment">?</a>|👻|👻|👻|
|[`react/jsx-one-expression-per-line`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md)<a id="rule-canonical-react/jsx-one-expression-per-line" /> 🛠|❌|🚨<a href="#rule-airbnb-react/jsx-one-expression-per-line">?</a>|👻|👻|👻|
|[`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)<a id="rule-canonical-react/jsx-pascal-case" />|🚨|🚨<a href="#rule-airbnb-react/jsx-pascal-case">?</a>|👻|👻|👻|
|[`react/jsx-props-no-multi-spaces`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md)<a id="rule-canonical-react/jsx-props-no-multi-spaces" /> 🛠|🚨|🚨|👻|👻|👻|
|[`react/jsx-props-no-spreading`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md)<a id="rule-canonical-react/jsx-props-no-spreading" />|❌|🚨<a href="#rule-airbnb-react/jsx-props-no-spreading">?</a>|👻|👻|👻|
|[`react/jsx-sort-default-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md)<a id="rule-canonical-react/jsx-sort-default-props" /> ⛔️|👻|❌|👻|👻|👻|
|[`react/jsx-sort-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md)<a id="rule-canonical-react/jsx-sort-props" /> 🛠|🚨|❌|👻|👻|👻|
|[`react/jsx-space-before-closing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md)<a id="rule-canonical-react/jsx-space-before-closing" /> 🛠 ⛔️|👻|❌|👻|👻|👻|
|[`react/jsx-tag-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md)<a id="rule-canonical-react/jsx-tag-spacing" /> 🛠|🚨|🚨<a href="#rule-airbnb-react/jsx-tag-spacing">?</a>|👻|👻|👻|
|[`react/jsx-uses-react`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md)<a id="rule-canonical-react/jsx-uses-react" />|🚨|🚨|👻|👻|👻|
|[`react/jsx-uses-vars`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md)<a id="rule-canonical-react/jsx-uses-vars" />|🚨|🚨|👻|👻|👻|
|[`react/jsx-wrap-multilines`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md)<a id="rule-canonical-react/jsx-wrap-multilines" /> 🛠|❌|🚨<a href="#rule-airbnb-react/jsx-wrap-multilines">?</a>|👻|👻|👻|
|[`react/no-access-state-in-setstate`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md)<a id="rule-canonical-react/no-access-state-in-setstate" />|🚨|🚨|👻|👻|👻|
|[`react/no-adjacent-inline-elements`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md)<a id="rule-canonical-react/no-adjacent-inline-elements" />|❌|❌|👻|👻|👻|
|[`react/no-array-index-key`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md)<a id="rule-canonical-react/no-array-index-key" />|🚨|🚨|👻|👻|👻|
|[`react/no-arrow-function-lifecycle`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md)<a id="rule-canonical-react/no-arrow-function-lifecycle" /> 🛠|🚨|🚨|👻|👻|👻|
|[`react/no-children-prop`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md)<a id="rule-canonical-react/no-children-prop" />|🚨|🚨|👻|👻|👻|
|[`react/no-danger`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md)<a id="rule-canonical-react/no-danger" />|🚨|⚠️<a href="#rule-airbnb-react/no-danger">?</a>|👻|👻|👻|
|[`react/no-danger-with-children`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md)<a id="rule-canonical-react/no-danger-with-children" />|🚨|🚨|👻|👻|👻|
|[`react/no-deprecated`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md)<a id="rule-canonical-react/no-deprecated" />|🚨|🚨|👻|👻|👻|
|[`react/no-did-mount-set-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md)<a id="rule-canonical-react/no-did-mount-set-state" />|🚨|❌|👻|👻|👻|
|[`react/no-did-update-set-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md)<a id="rule-canonical-react/no-did-update-set-state" />|🚨|🚨|👻|👻|👻|
|[`react/no-direct-mutation-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md)<a id="rule-canonical-react/no-direct-mutation-state" />|🚨|❌|👻|👻|👻|
|[`react/no-find-dom-node`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md)<a id="rule-canonical-react/no-find-dom-node" />|🚨|🚨|👻|👻|👻|
|[`react/no-invalid-html-attribute`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md)<a id="rule-canonical-react/no-invalid-html-attribute" />|🚨|🚨|👻|👻|👻|
|[`react/no-is-mounted`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md)<a id="rule-canonical-react/no-is-mounted" />|🚨|🚨|👻|👻|👻|
|[`react/no-multi-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md)<a id="rule-canonical-react/no-multi-comp" />|❌|❌|👻|👻|👻|
|[`react/no-namespace`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-namespace.md)<a id="rule-canonical-react/no-namespace" />|🚨|🚨|👻|👻|👻|
|[`react/no-object-type-as-default-prop`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-object-type-as-default-prop.md)<a id="rule-canonical-react/no-object-type-as-default-prop" />|👻|👻|👻|👻|👻|
|[`react/no-redundant-should-component-update`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md)<a id="rule-canonical-react/no-redundant-should-component-update" />|🚨|🚨|👻|👻|👻|
|[`react/no-render-return-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md)<a id="rule-canonical-react/no-render-return-value" />|🚨|🚨|👻|👻|👻|
|[`react/no-set-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md)<a id="rule-canonical-react/no-set-state" />|🚨|❌|👻|👻|👻|
|[`react/no-string-refs`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)<a id="rule-canonical-react/no-string-refs" />|🚨|🚨|👻|👻|👻|
|[`react/no-this-in-sfc`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md)<a id="rule-canonical-react/no-this-in-sfc" />|🚨|🚨|👻|👻|👻|
|[`react/no-typos`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md)<a id="rule-canonical-react/no-typos" />|🚨|🚨|👻|👻|👻|
|[`react/no-unescaped-entities`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md)<a id="rule-canonical-react/no-unescaped-entities" />|❌|🚨<a href="#rule-airbnb-react/no-unescaped-entities">?</a>|👻|👻|👻|
|[`react/no-unknown-property`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md)<a id="rule-canonical-react/no-unknown-property" /> 🛠|🚨|🚨|👻|👻|👻|
|[`react/no-unsafe`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md)<a id="rule-canonical-react/no-unsafe" />|🚨|❌|👻|👻|👻|
|[`react/no-unstable-nested-components`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md)<a id="rule-canonical-react/no-unstable-nested-components" />|🚨|🚨|👻|👻|👻|
|[`react/no-unused-class-component-methods`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md)<a id="rule-canonical-react/no-unused-class-component-methods" />|🚨|🚨|👻|👻|👻|
|[`react/no-unused-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md)<a id="rule-canonical-react/no-unused-prop-types" />|🚨|🚨<a href="#rule-airbnb-react/no-unused-prop-types">?</a>|👻|👻|👻|
|[`react/no-unused-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md)<a id="rule-canonical-react/no-unused-state" />|🚨|🚨|👻|👻|👻|
|[`react/no-will-update-set-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md)<a id="rule-canonical-react/no-will-update-set-state" />|🚨|🚨|👻|👻|👻|
|[`react/prefer-es6-class`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md)<a id="rule-canonical-react/prefer-es6-class" />|🚨|🚨<a href="#rule-airbnb-react/prefer-es6-class">?</a>|👻|👻|👻|
|[`react/prefer-exact-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md)<a id="rule-canonical-react/prefer-exact-props" />|❌|🚨<a href="#rule-airbnb-react/prefer-exact-props">?</a>|👻|👻|👻|
|[`react/prefer-read-only-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md)<a id="rule-canonical-react/prefer-read-only-props" /> 🛠|🚨|❌|👻|👻|👻|
|[`react/prefer-stateless-function`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)<a id="rule-canonical-react/prefer-stateless-function" />|🚨|🚨|👻|👻|👻|
|[`react/prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md)<a id="rule-canonical-react/prop-types" />|🚨|🚨<a href="#rule-airbnb-react/prop-types">?</a>|👻|👻|👻|
|[`react/react-in-jsx-scope`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md)<a id="rule-canonical-react/react-in-jsx-scope" />|❌|🚨<a href="#rule-airbnb-react/react-in-jsx-scope">?</a>|👻|👻|👻|
|[`react/require-default-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md)<a id="rule-canonical-react/require-default-props" />|❌|🚨<a href="#rule-airbnb-react/require-default-props">?</a>|👻|👻|👻|
|[`react/require-optimization`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md)<a id="rule-canonical-react/require-optimization" />|❌|❌|👻|👻|👻|
|[`react/require-render-return`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md)<a id="rule-canonical-react/require-render-return" />|🚨|🚨|👻|👻|👻|
|[`react/self-closing-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)<a id="rule-canonical-react/self-closing-comp" /> 🛠|🚨|🚨|👻|👻|👻|
|[`react/sort-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)<a id="rule-canonical-react/sort-comp" />|🚨|🚨<a href="#rule-airbnb-react/sort-comp">?</a>|👻|👻|👻|
|[`react/sort-default-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-default-props.md)<a id="rule-canonical-react/sort-default-props" />|🚨|👻|👻|👻|👻|
|[`react/sort-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md)<a id="rule-canonical-react/sort-prop-types" /> 🛠|🚨|❌|👻|👻|👻|
|[`react/state-in-constructor`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md)<a id="rule-canonical-react/state-in-constructor" />|🚨|🚨|👻|👻|👻|
|[`react/static-property-placement`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md)<a id="rule-canonical-react/static-property-placement" />|🚨|🚨<a href="#rule-airbnb-react/static-property-placement">?</a>|👻|👻|👻|
|[`react/style-prop-object`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md)<a id="rule-canonical-react/style-prop-object" />|🚨|🚨|👻|👻|👻|
|[`react/void-dom-elements-no-children`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md)<a id="rule-canonical-react/void-dom-elements-no-children" />|🚨|🚨|👻|👻|👻|
|[`require-atomic-updates`](https://eslint.org/docs/rules/require-atomic-updates)<a id="rule-canonical-require-atomic-updates" />|🚨|❌|👻|👻|👻|
|[`require-await`](https://eslint.org/docs/rules/require-await)<a id="rule-canonical-require-await" />|❌|❌|👻|👻|👻|
|[`require-jsdoc`](https://eslint.org/docs/rules/require-jsdoc)<a id="rule-canonical-require-jsdoc" /> ⛔️|👻|❌|🚨<a href="#rule-google-require-jsdoc">?</a>|👻|👻|
|[`require-unicode-regexp`](https://eslint.org/docs/rules/require-unicode-regexp)<a id="rule-canonical-require-unicode-regexp" />|🚨|❌|👻|👻|👻|
|[`require-yield`](https://eslint.org/docs/rules/require-yield)<a id="rule-canonical-require-yield" />|🚨|🚨|👻|👻|🚨|
|[`rest-spread-spacing`](https://eslint.org/docs/rules/rest-spread-spacing)<a id="rule-canonical-rest-spread-spacing" /> 🛠|🚨|🚨|🚨<a href="#rule-google-rest-spread-spacing">?</a>|🚨|🚨|
|[`semi`](https://eslint.org/docs/rules/semi)<a id="rule-canonical-semi" /> 🛠|🚨|🚨|🚨<a href="#rule-google-semi">?</a>|🚨<a href="#rule-standard-semi">?</a>|🚨|
|[`semi-spacing`](https://eslint.org/docs/rules/semi-spacing)<a id="rule-canonical-semi-spacing" /> 🛠|🚨|🚨|🚨<a href="#rule-google-semi-spacing">?</a>|🚨|🚨|
|[`semi-style`](https://eslint.org/docs/rules/semi-style)<a id="rule-canonical-semi-style" /> 🛠|🚨|🚨|👻|👻|🚨|
|`simple-import-sort/exports`<a id="rule-canonical-simple-import-sort/exports" /> 🛠|🚨|👻|👻|👻|👻|
|`simple-import-sort/imports`<a id="rule-canonical-simple-import-sort/imports" /> 🛠|🚨|👻|👻|👻|👻|
|[`sort-imports`](https://eslint.org/docs/rules/sort-imports)<a id="rule-canonical-sort-imports" /> 🛠|❌|❌|👻|👻|👻|
|[`sort-keys`](https://eslint.org/docs/rules/sort-keys)<a id="rule-canonical-sort-keys" />|❌|❌|👻|👻|👻|
|[`sort-vars`](https://eslint.org/docs/rules/sort-vars)<a id="rule-canonical-sort-vars" /> 🛠|🚨|❌|👻|👻|👻|
|[`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks)<a id="rule-canonical-space-before-blocks" /> 🛠|🚨|🚨<a href="#rule-airbnb-space-before-blocks">?</a>|🚨<a href="#rule-google-space-before-blocks">?</a>|🚨|🚨|
|[`space-before-function-paren`](https://eslint.org/docs/rules/space-before-function-paren)<a id="rule-canonical-space-before-function-paren" /> 🛠|🚨|🚨<a href="#rule-airbnb-space-before-function-paren">?</a>|🚨<a href="#rule-google-space-before-function-paren">?</a>|🚨|🚨<a href="#rule-xo-space-before-function-paren">?</a>|
|[`space-in-parens`](https://eslint.org/docs/rules/space-in-parens)<a id="rule-canonical-space-in-parens" /> 🛠|🚨|🚨|👻|🚨|🚨|
|[`space-infix-ops`](https://eslint.org/docs/rules/space-infix-ops)<a id="rule-canonical-space-infix-ops" /> 🛠|🚨|🚨|👻|🚨|🚨|
|[`space-unary-ops`](https://eslint.org/docs/rules/space-unary-ops)<a id="rule-canonical-space-unary-ops" /> 🛠|🚨|🚨<a href="#rule-airbnb-space-unary-ops">?</a>|👻|🚨|🚨<a href="#rule-xo-space-unary-ops">?</a>|
|[`spaced-comment`](https://eslint.org/docs/rules/spaced-comment)<a id="rule-canonical-spaced-comment" /> 🛠|🚨|🚨<a href="#rule-airbnb-spaced-comment">?</a>|🚨|🚨<a href="#rule-standard-spaced-comment">?</a>|🚨<a href="#rule-xo-spaced-comment">?</a>|
|[`strict`](https://eslint.org/docs/rules/strict)<a id="rule-canonical-strict" /> 🛠|🚨|🚨|👻|👻|👻|
|[`switch-colon-spacing`](https://eslint.org/docs/rules/switch-colon-spacing)<a id="rule-canonical-switch-colon-spacing" /> 🛠|🚨|🚨|🚨<a href="#rule-google-switch-colon-spacing">?</a>|👻|🚨|
|[`symbol-description`](https://eslint.org/docs/rules/symbol-description)<a id="rule-canonical-symbol-description" />|🚨|🚨|👻|🚨|🚨|
|[`template-curly-spacing`](https://eslint.org/docs/rules/template-curly-spacing)<a id="rule-canonical-template-curly-spacing" /> 🛠|🚨|🚨<a href="#rule-airbnb-template-curly-spacing">?</a>|👻|🚨|🚨<a href="#rule-xo-template-curly-spacing">?</a>|
|[`template-tag-spacing`](https://eslint.org/docs/rules/template-tag-spacing)<a id="rule-canonical-template-tag-spacing" /> 🛠|🚨|🚨|👻|🚨|🚨|
|`typescript-sort-keys/interface`<a id="rule-canonical-typescript-sort-keys/interface" /> 🛠|🚨|👻|👻|👻|👻|
|`typescript-sort-keys/string-enum`<a id="rule-canonical-typescript-sort-keys/string-enum" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicode-bom`](https://eslint.org/docs/rules/unicode-bom)<a id="rule-canonical-unicode-bom" /> 🛠|🚨|🚨|👻|🚨|🚨|
|[`unicorn/better-regex`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-regex.md)<a id="rule-canonical-unicorn/better-regex" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/catch-error-name`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/catch-error-name.md)<a id="rule-canonical-unicorn/catch-error-name" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/consistent-destructuring`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-destructuring.md)<a id="rule-canonical-unicorn/consistent-destructuring" /> 🛠|❌|👻|👻|👻|👻|
|[`unicorn/consistent-function-scoping`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-scoping.md)<a id="rule-canonical-unicorn/consistent-function-scoping" />|🚨|👻|👻|👻|👻|
|[`unicorn/custom-error-definition`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/custom-error-definition.md)<a id="rule-canonical-unicorn/custom-error-definition" /> 🛠|❌|👻|👻|👻|👻|
|[`unicorn/empty-brace-spaces`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/empty-brace-spaces.md)<a id="rule-canonical-unicorn/empty-brace-spaces" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/error-message`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/error-message.md)<a id="rule-canonical-unicorn/error-message" />|🚨|👻|👻|👻|👻|
|[`unicorn/escape-case`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/escape-case.md)<a id="rule-canonical-unicorn/escape-case" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/expiring-todo-comments`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md)<a id="rule-canonical-unicorn/expiring-todo-comments" />|❌|👻|👻|👻|👻|
|[`unicorn/explicit-length-check`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/explicit-length-check.md)<a id="rule-canonical-unicorn/explicit-length-check" /> 🛠|❌|👻|👻|👻|👻|
|[`unicorn/filename-case`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md)<a id="rule-canonical-unicorn/filename-case" />|❌|👻|👻|👻|👻|
|[`unicorn/import-index`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/import-index.md)<a id="rule-canonical-unicorn/import-index" /> ⛔️|🚨|👻|👻|👻|👻|
|[`unicorn/import-style`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/import-style.md)<a id="rule-canonical-unicorn/import-style" />|❌|👻|👻|👻|👻|
|[`unicorn/new-for-builtins`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/new-for-builtins.md)<a id="rule-canonical-unicorn/new-for-builtins" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/no-abusive-eslint-disable`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-abusive-eslint-disable.md)<a id="rule-canonical-unicorn/no-abusive-eslint-disable" />|🚨|👻|👻|👻|👻|
|[`unicorn/no-array-callback-reference`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-callback-reference.md)<a id="rule-canonical-unicorn/no-array-callback-reference" />|❌|👻|👻|👻|👻|
|[`unicorn/no-array-for-each`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md)<a id="rule-canonical-unicorn/no-array-for-each" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/no-array-instanceof`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-instanceof.md)<a id="rule-canonical-unicorn/no-array-instanceof" /> ⛔️|👻|👻|👻|👻|👻|
|[`unicorn/no-array-method-this-argument`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-method-this-argument.md)<a id="rule-canonical-unicorn/no-array-method-this-argument" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/no-array-push-push`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-push-push.md)<a id="rule-canonical-unicorn/no-array-push-push" /> 🛠|❌|👻|👻|👻|👻|
|[`unicorn/no-array-reduce`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reduce.md)<a id="rule-canonical-unicorn/no-array-reduce" />|🚨|👻|👻|👻|👻|
|[`unicorn/no-await-expression-member`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-expression-member.md)<a id="rule-canonical-unicorn/no-await-expression-member" /> 🛠|❌|👻|👻|👻|👻|
|[`unicorn/no-console-spaces`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-console-spaces.md)<a id="rule-canonical-unicorn/no-console-spaces" /> 🛠|❌|👻|👻|👻|👻|
|[`unicorn/no-document-cookie`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-document-cookie.md)<a id="rule-canonical-unicorn/no-document-cookie" />|🚨|👻|👻|👻|👻|
|[`unicorn/no-empty-file`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-empty-file.md)<a id="rule-canonical-unicorn/no-empty-file" />|🚨|👻|👻|👻|👻|
|[`unicorn/no-fn-reference-in-iterator`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-fn-reference-in-iterator.md)<a id="rule-canonical-unicorn/no-fn-reference-in-iterator" /> ⛔️|👻|👻|👻|👻|👻|
|[`unicorn/no-for-loop`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-for-loop.md)<a id="rule-canonical-unicorn/no-for-loop" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/no-hex-escape`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-hex-escape.md)<a id="rule-canonical-unicorn/no-hex-escape" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/no-instanceof-array`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-instanceof-array.md)<a id="rule-canonical-unicorn/no-instanceof-array" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/no-invalid-remove-event-listener`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-remove-event-listener.md)<a id="rule-canonical-unicorn/no-invalid-remove-event-listener" />|🚨|👻|👻|👻|👻|
|[`unicorn/no-keyword-prefix`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-keyword-prefix.md)<a id="rule-canonical-unicorn/no-keyword-prefix" />|❌|👻|👻|👻|👻|
|[`unicorn/no-lonely-if`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-lonely-if.md)<a id="rule-canonical-unicorn/no-lonely-if" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/no-negated-condition`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negated-condition.md)<a id="rule-canonical-unicorn/no-negated-condition" /> 🛠|👻|👻|👻|👻|👻|
|[`unicorn/no-nested-ternary`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nested-ternary.md)<a id="rule-canonical-unicorn/no-nested-ternary" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/no-new-array`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-array.md)<a id="rule-canonical-unicorn/no-new-array" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/no-new-buffer`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-buffer.md)<a id="rule-canonical-unicorn/no-new-buffer" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/no-null`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md)<a id="rule-canonical-unicorn/no-null" /> 🛠|❌|👻|👻|👻|👻|
|[`unicorn/no-object-as-default-parameter`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-object-as-default-parameter.md)<a id="rule-canonical-unicorn/no-object-as-default-parameter" />|🚨|👻|👻|👻|👻|
|[`unicorn/no-process-exit`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-process-exit.md)<a id="rule-canonical-unicorn/no-process-exit" />|❌|👻|👻|👻|👻|
|[`unicorn/no-reduce`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-reduce.md)<a id="rule-canonical-unicorn/no-reduce" /> ⛔️|👻|👻|👻|👻|👻|
|[`unicorn/no-static-only-class`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-static-only-class.md)<a id="rule-canonical-unicorn/no-static-only-class" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/no-thenable`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-thenable.md)<a id="rule-canonical-unicorn/no-thenable" />|🚨|👻|👻|👻|👻|
|[`unicorn/no-this-assignment`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-this-assignment.md)<a id="rule-canonical-unicorn/no-this-assignment" />|🚨|👻|👻|👻|👻|
|[`unicorn/no-typeof-undefined`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-typeof-undefined.md)<a id="rule-canonical-unicorn/no-typeof-undefined" /> 🛠|👻|👻|👻|👻|👻|
|[`unicorn/no-unnecessary-await`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-await.md)<a id="rule-canonical-unicorn/no-unnecessary-await" /> 🛠|👻|👻|👻|👻|👻|
|[`unicorn/no-unreadable-array-destructuring`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-array-destructuring.md)<a id="rule-canonical-unicorn/no-unreadable-array-destructuring" /> 🛠|❌|👻|👻|👻|👻|
|[`unicorn/no-unreadable-iife`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-iife.md)<a id="rule-canonical-unicorn/no-unreadable-iife" />|🚨|👻|👻|👻|👻|
|[`unicorn/no-unsafe-regex`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-regex.md)<a id="rule-canonical-unicorn/no-unsafe-regex" />|🚨|👻|👻|👻|👻|
|[`unicorn/no-unused-properties`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unused-properties.md)<a id="rule-canonical-unicorn/no-unused-properties" />|🚨|👻|👻|👻|👻|
|[`unicorn/no-useless-fallback-in-spread`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-fallback-in-spread.md)<a id="rule-canonical-unicorn/no-useless-fallback-in-spread" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/no-useless-length-check`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-length-check.md)<a id="rule-canonical-unicorn/no-useless-length-check" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/no-useless-promise-resolve-reject`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-promise-resolve-reject.md)<a id="rule-canonical-unicorn/no-useless-promise-resolve-reject" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/no-useless-spread`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-spread.md)<a id="rule-canonical-unicorn/no-useless-spread" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/no-useless-switch-case`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-switch-case.md)<a id="rule-canonical-unicorn/no-useless-switch-case" />|❌|👻|👻|👻|👻|
|[`unicorn/no-useless-undefined`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md)<a id="rule-canonical-unicorn/no-useless-undefined" /> 🛠|❌|👻|👻|👻|👻|
|[`unicorn/no-zero-fractions`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-zero-fractions.md)<a id="rule-canonical-unicorn/no-zero-fractions" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/number-literal-case`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/number-literal-case.md)<a id="rule-canonical-unicorn/number-literal-case" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/numeric-separators-style`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/numeric-separators-style.md)<a id="rule-canonical-unicorn/numeric-separators-style" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-add-event-listener`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-add-event-listener.md)<a id="rule-canonical-unicorn/prefer-add-event-listener" /> 🛠|❌|👻|👻|👻|👻|
|[`unicorn/prefer-array-find`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-find.md)<a id="rule-canonical-unicorn/prefer-array-find" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-array-flat`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat.md)<a id="rule-canonical-unicorn/prefer-array-flat" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-array-flat-map`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat-map.md)<a id="rule-canonical-unicorn/prefer-array-flat-map" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-array-index-of`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-index-of.md)<a id="rule-canonical-unicorn/prefer-array-index-of" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-array-some`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-some.md)<a id="rule-canonical-unicorn/prefer-array-some" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-at`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-at.md)<a id="rule-canonical-unicorn/prefer-at" /> 🛠|❌|👻|👻|👻|👻|
|[`unicorn/prefer-code-point`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-code-point.md)<a id="rule-canonical-unicorn/prefer-code-point" />|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-dataset`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dataset.md)<a id="rule-canonical-unicorn/prefer-dataset" /> ⛔️|👻|👻|👻|👻|👻|
|[`unicorn/prefer-date-now`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-date-now.md)<a id="rule-canonical-unicorn/prefer-date-now" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-default-parameters`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-default-parameters.md)<a id="rule-canonical-unicorn/prefer-default-parameters" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-dom-node-append`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-append.md)<a id="rule-canonical-unicorn/prefer-dom-node-append" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-dom-node-dataset`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-dataset.md)<a id="rule-canonical-unicorn/prefer-dom-node-dataset" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-dom-node-remove`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-remove.md)<a id="rule-canonical-unicorn/prefer-dom-node-remove" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-dom-node-text-content`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-text-content.md)<a id="rule-canonical-unicorn/prefer-dom-node-text-content" />|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-event-key`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-event-key.md)<a id="rule-canonical-unicorn/prefer-event-key" /> ⛔️|👻|👻|👻|👻|👻|
|[`unicorn/prefer-event-target`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-event-target.md)<a id="rule-canonical-unicorn/prefer-event-target" />|👻|👻|👻|👻|👻|
|[`unicorn/prefer-exponentiation-operator`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-exponentiation-operator.md)<a id="rule-canonical-unicorn/prefer-exponentiation-operator" /> ⛔️|👻|👻|👻|👻|👻|
|[`unicorn/prefer-export-from`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-export-from.md)<a id="rule-canonical-unicorn/prefer-export-from" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-flat-map`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-flat-map.md)<a id="rule-canonical-unicorn/prefer-flat-map" /> ⛔️|👻|👻|👻|👻|👻|
|[`unicorn/prefer-includes`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-includes.md)<a id="rule-canonical-unicorn/prefer-includes" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-json-parse-buffer`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-json-parse-buffer.md)<a id="rule-canonical-unicorn/prefer-json-parse-buffer" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-keyboard-event-key`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-keyboard-event-key.md)<a id="rule-canonical-unicorn/prefer-keyboard-event-key" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-logical-operator-over-ternary`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-logical-operator-over-ternary.md)<a id="rule-canonical-unicorn/prefer-logical-operator-over-ternary" />|👻|👻|👻|👻|👻|
|[`unicorn/prefer-math-trunc`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-trunc.md)<a id="rule-canonical-unicorn/prefer-math-trunc" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-modern-dom-apis`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-dom-apis.md)<a id="rule-canonical-unicorn/prefer-modern-dom-apis" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-modern-math-apis`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-math-apis.md)<a id="rule-canonical-unicorn/prefer-modern-math-apis" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-module`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md)<a id="rule-canonical-unicorn/prefer-module" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-native-coercion-functions`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-native-coercion-functions.md)<a id="rule-canonical-unicorn/prefer-native-coercion-functions" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-negative-index`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-negative-index.md)<a id="rule-canonical-unicorn/prefer-negative-index" /> 🛠|❌|👻|👻|👻|👻|
|[`unicorn/prefer-node-append`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-append.md)<a id="rule-canonical-unicorn/prefer-node-append" /> ⛔️|👻|👻|👻|👻|👻|
|[`unicorn/prefer-node-protocol`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md)<a id="rule-canonical-unicorn/prefer-node-protocol" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-node-remove`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-remove.md)<a id="rule-canonical-unicorn/prefer-node-remove" /> ⛔️|👻|👻|👻|👻|👻|
|[`unicorn/prefer-number-properties`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-properties.md)<a id="rule-canonical-unicorn/prefer-number-properties" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-object-from-entries`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-from-entries.md)<a id="rule-canonical-unicorn/prefer-object-from-entries" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-object-has-own`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-has-own.md)<a id="rule-canonical-unicorn/prefer-object-has-own" /> ⛔️|❌|👻|👻|👻|👻|
|[`unicorn/prefer-optional-catch-binding`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-optional-catch-binding.md)<a id="rule-canonical-unicorn/prefer-optional-catch-binding" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-prototype-methods`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-prototype-methods.md)<a id="rule-canonical-unicorn/prefer-prototype-methods" /> 🛠|❌|👻|👻|👻|👻|
|[`unicorn/prefer-query-selector`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-query-selector.md)<a id="rule-canonical-unicorn/prefer-query-selector" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-reflect-apply`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-reflect-apply.md)<a id="rule-canonical-unicorn/prefer-reflect-apply" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-regexp-test`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-regexp-test.md)<a id="rule-canonical-unicorn/prefer-regexp-test" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-replace-all`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-replace-all.md)<a id="rule-canonical-unicorn/prefer-replace-all" /> ⛔️|👻|👻|👻|👻|👻|
|[`unicorn/prefer-set-has`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-has.md)<a id="rule-canonical-unicorn/prefer-set-has" /> 🛠|❌|👻|👻|👻|👻|
|[`unicorn/prefer-set-size`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-size.md)<a id="rule-canonical-unicorn/prefer-set-size" /> 🛠|👻|👻|👻|👻|👻|
|[`unicorn/prefer-spread`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-spread.md)<a id="rule-canonical-unicorn/prefer-spread" /> 🛠|❌|👻|👻|👻|👻|
|[`unicorn/prefer-starts-ends-with`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-starts-ends-with.md)<a id="rule-canonical-unicorn/prefer-starts-ends-with" /> ⛔️|👻|👻|👻|👻|👻|
|[`unicorn/prefer-string-replace-all`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-replace-all.md)<a id="rule-canonical-unicorn/prefer-string-replace-all" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-string-slice`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-slice.md)<a id="rule-canonical-unicorn/prefer-string-slice" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-string-starts-ends-with`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-starts-ends-with.md)<a id="rule-canonical-unicorn/prefer-string-starts-ends-with" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-string-trim-start-end`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-trim-start-end.md)<a id="rule-canonical-unicorn/prefer-string-trim-start-end" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prefer-switch`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-switch.md)<a id="rule-canonical-unicorn/prefer-switch" /> 🛠|❌|👻|👻|👻|👻|
|[`unicorn/prefer-ternary`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-ternary.md)<a id="rule-canonical-unicorn/prefer-ternary" /> 🛠|❌|👻|👻|👻|👻|
|[`unicorn/prefer-text-content`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-text-content.md)<a id="rule-canonical-unicorn/prefer-text-content" /> ⛔️|👻|👻|👻|👻|👻|
|[`unicorn/prefer-top-level-await`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-top-level-await.md)<a id="rule-canonical-unicorn/prefer-top-level-await" />|❌|👻|👻|👻|👻|
|[`unicorn/prefer-trim-start-end`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-trim-start-end.md)<a id="rule-canonical-unicorn/prefer-trim-start-end" /> ⛔️|👻|👻|👻|👻|👻|
|[`unicorn/prefer-type-error`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-type-error.md)<a id="rule-canonical-unicorn/prefer-type-error" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/prevent-abbreviations`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md)<a id="rule-canonical-unicorn/prevent-abbreviations" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/regex-shorthand`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/regex-shorthand.md)<a id="rule-canonical-unicorn/regex-shorthand" /> ⛔️|👻|👻|👻|👻|👻|
|[`unicorn/relative-url-style`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/relative-url-style.md)<a id="rule-canonical-unicorn/relative-url-style" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/require-array-join-separator`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-array-join-separator.md)<a id="rule-canonical-unicorn/require-array-join-separator" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/require-number-to-fixed-digits-argument`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-number-to-fixed-digits-argument.md)<a id="rule-canonical-unicorn/require-number-to-fixed-digits-argument" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/require-post-message-target-origin`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-post-message-target-origin.md)<a id="rule-canonical-unicorn/require-post-message-target-origin" />|🚨|👻|👻|👻|👻|
|[`unicorn/string-content`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/string-content.md)<a id="rule-canonical-unicorn/string-content" /> 🛠|❌|👻|👻|👻|👻|
|[`unicorn/switch-case-braces`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-braces.md)<a id="rule-canonical-unicorn/switch-case-braces" /> 🛠|👻|👻|👻|👻|👻|
|[`unicorn/template-indent`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/template-indent.md)<a id="rule-canonical-unicorn/template-indent" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/text-encoding-identifier-case`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/text-encoding-identifier-case.md)<a id="rule-canonical-unicorn/text-encoding-identifier-case" /> 🛠|🚨|👻|👻|👻|👻|
|[`unicorn/throw-new-error`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/throw-new-error.md)<a id="rule-canonical-unicorn/throw-new-error" /> 🛠|🚨|👻|👻|👻|👻|
|[`use-isnan`](https://eslint.org/docs/rules/use-isnan)<a id="rule-canonical-use-isnan" />|🚨|🚨|👻|🚨<a href="#rule-standard-use-isnan">?</a>|🚨|
|[`valid-jsdoc`](https://eslint.org/docs/rules/valid-jsdoc)<a id="rule-canonical-valid-jsdoc" /> 🛠 ⛔️|👻|❌|🚨<a href="#rule-google-valid-jsdoc">?</a>|👻|👻|
|[`valid-typeof`](https://eslint.org/docs/rules/valid-typeof)<a id="rule-canonical-valid-typeof" />|🚨|🚨|👻|🚨|🚨<a href="#rule-xo-valid-typeof">?</a>|
|[`vars-on-top`](https://eslint.org/docs/rules/vars-on-top)<a id="rule-canonical-vars-on-top" />|🚨|🚨|👻|👻|👻|
|[`wrap-iife`](https://eslint.org/docs/rules/wrap-iife)<a id="rule-canonical-wrap-iife" /> 🛠|🚨|🚨<a href="#rule-airbnb-wrap-iife">?</a>|👻|🚨<a href="#rule-standard-wrap-iife">?</a>|🚨<a href="#rule-xo-wrap-iife">?</a>|
|[`wrap-regex`](https://eslint.org/docs/rules/wrap-regex)<a id="rule-canonical-wrap-regex" /> 🛠|❌|❌|👻|👻|👻|
|[`yield-star-spacing`](https://eslint.org/docs/rules/yield-star-spacing)<a id="rule-canonical-yield-star-spacing" /> 🛠|🚨|🚨<a href="#rule-airbnb-yield-star-spacing">?</a>|🚨<a href="#rule-google-yield-star-spacing">?</a>|🚨<a href="#rule-standard-yield-star-spacing">?</a>|🚨<a href="#rule-xo-yield-star-spacing">?</a>|
|[`yml/block-mapping`](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping.html)<a id="rule-canonical-yml/block-mapping" /> 🛠|🚨|👻|👻|👻|👻|
|[`yml/block-mapping-colon-indicator-newline`](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-colon-indicator-newline.html)<a id="rule-canonical-yml/block-mapping-colon-indicator-newline" /> 🛠|👻|👻|👻|👻|👻|
|[`yml/block-mapping-question-indicator-newline`](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-question-indicator-newline.html)<a id="rule-canonical-yml/block-mapping-question-indicator-newline" /> 🛠|🚨|👻|👻|👻|👻|
|[`yml/block-sequence`](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence.html)<a id="rule-canonical-yml/block-sequence" /> 🛠|🚨|👻|👻|👻|👻|
|[`yml/block-sequence-hyphen-indicator-newline`](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence-hyphen-indicator-newline.html)<a id="rule-canonical-yml/block-sequence-hyphen-indicator-newline" /> 🛠|🚨|👻|👻|👻|👻|
|[`yml/file-extension`](https://ota-meshi.github.io/eslint-plugin-yml/rules/file-extension.html)<a id="rule-canonical-yml/file-extension" />|👻|👻|👻|👻|👻|
|[`yml/flow-mapping-curly-newline`](https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-newline.html)<a id="rule-canonical-yml/flow-mapping-curly-newline" /> 🛠|🚨|👻|👻|👻|👻|
|[`yml/flow-mapping-curly-spacing`](https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-spacing.html)<a id="rule-canonical-yml/flow-mapping-curly-spacing" /> 🛠|🚨|👻|👻|👻|👻|
|[`yml/flow-sequence-bracket-newline`](https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-newline.html)<a id="rule-canonical-yml/flow-sequence-bracket-newline" /> 🛠|🚨|👻|👻|👻|👻|
|[`yml/flow-sequence-bracket-spacing`](https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-spacing.html)<a id="rule-canonical-yml/flow-sequence-bracket-spacing" /> 🛠|🚨|👻|👻|👻|👻|
|[`yml/indent`](https://ota-meshi.github.io/eslint-plugin-yml/rules/indent.html)<a id="rule-canonical-yml/indent" /> 🛠|🚨|👻|👻|👻|👻|
|[`yml/key-name-casing`](https://ota-meshi.github.io/eslint-plugin-yml/rules/key-name-casing.html)<a id="rule-canonical-yml/key-name-casing" />|❌|👻|👻|👻|👻|
|[`yml/key-spacing`](https://ota-meshi.github.io/eslint-plugin-yml/rules/key-spacing.html)<a id="rule-canonical-yml/key-spacing" /> 🛠|🚨|👻|👻|👻|👻|
|[`yml/no-empty-document`](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-document.html)<a id="rule-canonical-yml/no-empty-document" />|🚨|👻|👻|👻|👻|
|[`yml/no-empty-key`](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-key.html)<a id="rule-canonical-yml/no-empty-key" />|🚨|👻|👻|👻|👻|
|[`yml/no-empty-mapping-value`](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-mapping-value.html)<a id="rule-canonical-yml/no-empty-mapping-value" />|🚨|👻|👻|👻|👻|
|[`yml/no-empty-sequence-entry`](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-sequence-entry.html)<a id="rule-canonical-yml/no-empty-sequence-entry" />|🚨|👻|👻|👻|👻|
|[`yml/no-irregular-whitespace`](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-irregular-whitespace.html)<a id="rule-canonical-yml/no-irregular-whitespace" />|🚨|👻|👻|👻|👻|
|[`yml/no-multiple-empty-lines`](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-multiple-empty-lines.html)<a id="rule-canonical-yml/no-multiple-empty-lines" /> 🛠|🚨|👻|👻|👻|👻|
|[`yml/no-tab-indent`](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-tab-indent.html)<a id="rule-canonical-yml/no-tab-indent" />|🚨|👻|👻|👻|👻|
|[`yml/plain-scalar`](https://ota-meshi.github.io/eslint-plugin-yml/rules/plain-scalar.html)<a id="rule-canonical-yml/plain-scalar" /> 🛠|❌|👻|👻|👻|👻|
|[`yml/quotes`](https://ota-meshi.github.io/eslint-plugin-yml/rules/quotes.html)<a id="rule-canonical-yml/quotes" /> 🛠|🚨|👻|👻|👻|👻|
|[`yml/require-string-key`](https://ota-meshi.github.io/eslint-plugin-yml/rules/require-string-key.html)<a id="rule-canonical-yml/require-string-key" />|🚨|👻|👻|👻|👻|
|[`yml/sort-keys`](https://ota-meshi.github.io/eslint-plugin-yml/rules/sort-keys.html)<a id="rule-canonical-yml/sort-keys" /> 🛠|🚨|👻|👻|👻|👻|
|[`yml/sort-sequence-values`](https://ota-meshi.github.io/eslint-plugin-yml/rules/sort-sequence-values.html)<a id="rule-canonical-yml/sort-sequence-values" /> 🛠|❌|👻|👻|👻|👻|
|[`yml/spaced-comment`](https://ota-meshi.github.io/eslint-plugin-yml/rules/spaced-comment.html)<a id="rule-canonical-yml/spaced-comment" /> 🛠|🚨|👻|👻|👻|👻|
|[`yml/vue-custom-block/no-parsing-error`](https://ota-meshi.github.io/eslint-plugin-yml/rules/vue-custom-block/no-parsing-error.html)<a id="rule-canonical-yml/vue-custom-block/no-parsing-error" />|🚨|👻|👻|👻|👻|
|[`yoda`](https://eslint.org/docs/rules/yoda)<a id="rule-canonical-yoda" /> 🛠|🚨|🚨<a href="#rule-airbnb-yoda">?</a>|👻|🚨|🚨<a href="#rule-xo-yoda">?</a>|
<!-- END compare -->