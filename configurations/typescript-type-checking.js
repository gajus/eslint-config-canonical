module.exports = {
  rules: {
    '@typescript-eslint/await-thenable': 2,
    '@typescript-eslint/consistent-type-exports': [
      2,
      {
        fixMixedExportsWithInlineTypeSpecifier: true,
      },
    ],
    '@typescript-eslint/dot-notation': 2,
    '@typescript-eslint/no-base-to-string': [
      2,
      {
        ignoredTypeNames: ['RegExp'],
      },
    ],
    '@typescript-eslint/no-confusing-void-expression': [
      2,
      {
        ignoreArrowShorthand: true,
        ignoreVoidOperator: false,
      },
    ],
    '@typescript-eslint/no-floating-promises': [
      2,
      {
        ignoreIIFE: true,
        ignoreVoid: true,
      },
    ],
    '@typescript-eslint/no-for-in-array': 2,
    '@typescript-eslint/no-implied-eval': 2,
    '@typescript-eslint/no-meaningless-void-operator': [
      2,
      {
        checkNever: true,
      },
    ],
    '@typescript-eslint/no-misused-promises': [
      2,
      {
        checksConditionals: true,
        checksVoidReturn: {
          arguments: true,
          attributes: false,
          properties: true,
          returns: true,
          variables: true,
        },
      },
    ],
    '@typescript-eslint/no-throw-literal': 2,
    '@typescript-eslint/no-unnecessary-qualifier': 2,
    '@typescript-eslint/prefer-includes': 2,
    '@typescript-eslint/prefer-nullish-coalescing': [
      2,
      {
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true,
      },
    ],
    '@typescript-eslint/prefer-readonly': [
      2,
      {
        onlyInlineLambdas: true,
      },
    ],
    '@typescript-eslint/prefer-reduce-type-parameter': 2,
    '@typescript-eslint/prefer-regexp-exec': 2,
    '@typescript-eslint/prefer-return-this-type': 2,
    '@typescript-eslint/prefer-string-starts-ends-with': 2,
    '@typescript-eslint/promise-function-async': 2,
    '@typescript-eslint/require-array-sort-compare': [
      2,
      {
        ignoreStringArrays: false,
      },
    ],
    '@typescript-eslint/return-await': [2, 'always'],
    '@typescript-eslint/switch-exhaustiveness-check': 2,
    '@typescript-eslint/unbound-method': [
      2,
      {
        ignoreStatic: true,
      },
    ],
  },
};
