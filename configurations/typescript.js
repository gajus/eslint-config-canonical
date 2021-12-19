module.exports = {
  overrides: [
    {
      files: [
        '*.ts',
        '*.tsx',
      ],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': 2,
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'typescript-sort-keys',
  ],
  rules: {
    '@babel/object-curly-spacing': 0,
    '@typescript-eslint/adjacent-overload-signatures': 2,
    '@typescript-eslint/array-type': [
      2,
      {
        default: 'array-simple',
      },
    ],
    '@typescript-eslint/await-thenable': 2,
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
    '@typescript-eslint/class-literal-property-style': [
      2,
      'fields',
    ],
    '@typescript-eslint/consistent-indexed-object-style': 0,
    '@typescript-eslint/consistent-type-assertions': [
      2,
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': [
      2,
      'type',
    ],
    '@typescript-eslint/consistent-type-exports': 2,
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
    '@typescript-eslint/method-signature-style': [
      2,
      'property',
    ],
    '@typescript-eslint/naming-convention': [
      2,
      {
        format: [
          'camelCase',
          'UPPER_CASE',
          'PascalCase',
        ],
        selector: 'variable',
      },
    ],
    '@typescript-eslint/no-base-to-string': [
      2,
      {
        ignoredTypeNames: [
          'RegExp',
        ],
      },
    ],
    '@typescript-eslint/no-confusing-non-null-assertion': 2,
    '@typescript-eslint/no-confusing-void-expression': [
      2,
      {
        ignoreArrowShorthand: true,
        ignoreVoidOperator: false,
      },
    ],
    '@typescript-eslint/no-duplicate-imports': 2,
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
    '@typescript-eslint/no-floating-promises': [
      2,
      {
        ignoreIIFE: true,
        ignoreVoid: true,
      },
    ],
    '@typescript-eslint/no-for-in-array': 2,
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
    '@typescript-eslint/no-meaningless-void-operator': [
      2,
      {
        checkNever: true,
      },
    ],
    '@typescript-eslint/no-misused-new': 2,
    '@typescript-eslint/no-misused-promises': [
      2,
      {
        checksConditionals: true,
        checksVoidReturn: true,
      },
    ],
    '@typescript-eslint/no-namespace': [
      2,
      {
        allowDeclarations: true,
      },
    ],
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 2,
    '@typescript-eslint/no-non-null-asserted-optional-chain': 2,
    '@typescript-eslint/no-non-null-assertion': 2,
    '@typescript-eslint/no-parameter-properties': 0,
    '@typescript-eslint/no-require-imports': 2,
    '@typescript-eslint/no-restricted-imports': 0,
    '@typescript-eslint/no-this-alias': [
      2,
      {
        allowDestructuring: true,
        allowedNames: [
          'self',
        ],
      },
    ],
    '@typescript-eslint/no-type-alias': 0,
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 0,
    '@typescript-eslint/no-unnecessary-condition': 0,
    '@typescript-eslint/no-unnecessary-qualifier': 2,
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
    '@typescript-eslint/object-curly-spacing': [
      2,
      'never',
    ],
    '@typescript-eslint/padding-line-between-statements': 0,
    '@typescript-eslint/prefer-as-const': 2,
    '@typescript-eslint/prefer-enum-initializers': 2,
    '@typescript-eslint/prefer-for-of': 2,
    '@typescript-eslint/prefer-function-type': 2,
    '@typescript-eslint/prefer-includes': 2,
    '@typescript-eslint/prefer-literal-enum-member': 2,
    '@typescript-eslint/prefer-namespace-keyword': 2,
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
    '@typescript-eslint/prefer-readonly-parameter-types': 0,
    '@typescript-eslint/prefer-reduce-type-parameter': 2,
    '@typescript-eslint/prefer-regexp-exec': 2,
    '@typescript-eslint/prefer-return-this-type': 2,
    '@typescript-eslint/prefer-string-starts-ends-with': 2,
    '@typescript-eslint/prefer-ts-expect-error': 2,
    '@typescript-eslint/promise-function-async': 0,
    '@typescript-eslint/require-array-sort-compare': [
      2,
      {
        ignoreStringArrays: false,
      },
    ],
    '@typescript-eslint/restrict-plus-operands': 0,
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/return-await': [
      2,
      'always',
    ],
    '@typescript-eslint/sort-type-union-intersection-members': 2,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/switch-exhaustiveness-check': 2,
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
    '@typescript-eslint/unbound-method': [
      2,
      {
        ignoreStatic: true,
      },
    ],
    '@typescript-eslint/unified-signatures': 2,
    'default-param-last': 0,
    'import/no-dynamic-require': 0,
    'jsdoc/require-property-type': 0,
    'no-duplicate-imports': 0,
    'no-undef': 0,
    'no-use-before-define': 0,
    'node/global-require': 0,
    'node/no-missing-import': 0,
    'typescript-sort-keys/interface': 2,
    'typescript-sort-keys/string-enum': 2,
  },
  settings: {
    jsdoc: {
      mode: 'typescript',
    },
    node: {
      tryExtensions: [
        '.ts',
        '.tsx',
        '.js',
        '.json',
      ],
    },
  },
};
