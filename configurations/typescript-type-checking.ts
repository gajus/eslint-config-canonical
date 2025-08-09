import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import tseslint from 'typescript-eslint';

export const recommended = tseslint.config({
  plugins: {
    '@typescript-eslint': typescriptEslintPlugin,
  },
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
    '@typescript-eslint/no-unnecessary-qualifier': 2,
    '@typescript-eslint/prefer-includes': 2,
    '@typescript-eslint/prefer-nullish-coalescing': [
      2,
      {
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true,
      },
    ],
    '@typescript-eslint/prefer-optional-chain': 2,
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
    // disabled until the following issue is resolved
    // https://github.com/eslint-functional/eslint-plugin-functional/issues/946
    'functional/prefer-immutable-types': 0,
    'functional/type-declaration-immutability': [
      2,
      {
        rules: [
          {
            comparator: 'AtLeast',
            identifiers: 'I?Immutable.+',
            immutability: 'Immutable',
          },
          {
            comparator: 'AtLeast',
            identifiers: 'I?ReadonlyDeep.+',
            immutability: 'ReadonlyDeep',
          },
          {
            comparator: 'AtLeast',
            fixer: [
              {
                pattern: '^(Array|Map|Set)<(.+)>$',
                replace: 'Readonly$1<$2>',
              },
              {
                pattern: '^(.+)$',
                replace: 'Readonly<$1>',
              },
            ],
            identifiers: 'I?Readonly.+',
            immutability: 'ReadonlyShallow',
          },
          {
            comparator: 'AtMost',
            fixer: [
              {
                pattern: '^Readonly(Array|Map|Set)<(.+)>$',
                replace: '$1<$2>',
              },
              {
                pattern: '^Readonly<(.+)>$',
                replace: '$1',
              },
            ],
            identifiers: 'I?Mutable.+',
            immutability: 'Mutable',
          },
        ],
      },
    ],
  },
});
