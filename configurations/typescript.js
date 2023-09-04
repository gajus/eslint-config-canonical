// Omit `.d.ts` because 1) TypeScript compilation already confirms that
// types are resolved, and 2) it would mask an unresolved
// `.ts`/`.tsx`/`.js`/`.jsx` implementation.
const typescriptExtensions = ['.ts', '.tsx', '.js', '.jsx'];

module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': 2,
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'typescript-sort-keys'],
  rules: {
    '@babel/object-curly-spacing': 0,
    '@typescript-eslint/adjacent-overload-signatures': 2,
    '@typescript-eslint/array-type': [
      2,
      {
        default: 'array-simple',
      },
    ],
    '@typescript-eslint/ban-ts-comment': [
      2,
      {
        'ts-check': true,
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': false,
        'ts-nocheck': false,
      },
    ],
    '@typescript-eslint/ban-tslint-comment': 2,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/class-literal-property-style': [2, 'fields'],
    '@typescript-eslint/consistent-indexed-object-style': 0,
    '@typescript-eslint/consistent-type-assertions': [
      2,
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': [2, 'type'],
    '@typescript-eslint/consistent-type-imports': [
      2,
      {
        prefer: 'type-imports',
      },
    ],
    '@typescript-eslint/default-param-last': 2,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/member-delimiter-style': [
      2,
      {
        multiline: {
          delimiter: 'comma',
          requireLast: true,
        },
        overrides: {
          interface: {
            multiline: {
              delimiter: 'semi',
              requireLast: true,
            },
          },
        },
        singleline: {
          delimiter: 'comma',
          requireLast: true,
        },
      },
    ],
    '@typescript-eslint/member-ordering': 0,
    '@typescript-eslint/method-signature-style': [2, 'property'],
    '@typescript-eslint/naming-convention': [
      2,
      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        selector: 'variable',
      },
    ],
    '@typescript-eslint/no-confusing-non-null-assertion': 2,
    '@typescript-eslint/no-dynamic-delete': 2,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: false,
      },
    ],
    '@typescript-eslint/no-explicit-any': [
      2,
      {
        ignoreRestArgs: true,
      },
    ],
    '@typescript-eslint/no-extra-non-null-assertion': 2,
    '@typescript-eslint/no-extraneous-class': 2,
    '@typescript-eslint/no-inferrable-types': [
      2,
      {
        ignoreParameters: true,
        ignoreProperties: true,
      },
    ],
    '@typescript-eslint/no-invalid-void-type': [
      2,
      {
        allowAsThisParameter: true,
        allowInGenericTypeArguments: true,
      },
    ],
    '@typescript-eslint/no-misused-new': 2,
    '@typescript-eslint/no-namespace': [
      2,
      {
        allowDeclarations: true,
      },
    ],
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 2,
    '@typescript-eslint/no-non-null-asserted-optional-chain': 2,
    '@typescript-eslint/no-non-null-assertion': 2,
    '@typescript-eslint/no-require-imports': 2,
    '@typescript-eslint/no-restricted-imports': 0,
    '@typescript-eslint/no-this-alias': [
      2,
      {
        allowDestructuring: true,
        allowedNames: ['self'],
      },
    ],
    '@typescript-eslint/no-type-alias': 0,
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 0,
    '@typescript-eslint/no-unnecessary-condition': 0,
    '@typescript-eslint/no-unnecessary-type-arguments': 0,
    '@typescript-eslint/no-unnecessary-type-assertion': 0,
    '@typescript-eslint/no-unnecessary-type-constraint': 2,
    '@typescript-eslint/no-unsafe-argument': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-unsafe-return': 0,
    '@typescript-eslint/no-var-requires': 2,
    '@typescript-eslint/non-nullable-type-assertion-style': 0,
    '@typescript-eslint/object-curly-spacing': [2, 'never'],
    '@typescript-eslint/padding-line-between-statements': 0,
    '@typescript-eslint/prefer-as-const': 2,
    '@typescript-eslint/prefer-enum-initializers': 2,
    '@typescript-eslint/prefer-for-of': 2,
    '@typescript-eslint/prefer-function-type': 2,
    '@typescript-eslint/prefer-literal-enum-member': 2,
    '@typescript-eslint/prefer-namespace-keyword': 2,
    '@typescript-eslint/prefer-optional-chain': 2,
    '@typescript-eslint/prefer-readonly-parameter-types': 0,
    '@typescript-eslint/prefer-ts-expect-error': 2,
    '@typescript-eslint/restrict-plus-operands': 0,
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/triple-slash-reference': [
      2,
      {
        lib: 'never',
        path: 'never',
        types: 'never',
      },
    ],
    '@typescript-eslint/type-annotation-spacing': 2,
    '@typescript-eslint/typedef': 0,
    '@typescript-eslint/unified-signatures': 2,
    'canonical/prefer-inline-type-import': 2,
    'default-param-last': 0,
    'import/no-duplicates': 2,
    'import/no-dynamic-require': 0,
    'jsdoc/require-property-type': 0,
    'no-duplicate-imports': 0,
    'no-undef': 0,
    'no-use-before-define': 0,
    'node/global-require': 0,
    'node/no-missing-import': 0,
    'spaced-comment': [
      2,
      'always',
      {
        markers: ['/'],
      },
    ],
    'typescript-sort-keys/interface': 2,
    'typescript-sort-keys/string-enum': 2,
  },
  settings: {
    'import/extensions': typescriptExtensions,
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        extensions: typescriptExtensions,
      },
    },
    jsdoc: {
      mode: 'typescript',
    },
    node: {
      tryExtensions: ['.ts', '.tsx', '.js', '.json'],
    },
  },
};
