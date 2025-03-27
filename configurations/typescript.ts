import * as typescriptCompatibility from './typescript-compatibility.js';
import stylisticPlugin from '@stylistic/eslint-plugin';
import eslintPlugin from '@typescript-eslint/eslint-plugin';
import * as eslintParser from '@typescript-eslint/parser';
import canonicalPlugin from 'eslint-plugin-canonical';
import functionalPlugin from 'eslint-plugin-functional';
import tseslint from 'typescript-eslint';

export const recommended = tseslint.config({
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    parser: eslintParser,
    parserOptions: {
      project: true,
    },
  },
  plugins: {
    '@stylistic': stylisticPlugin,
    '@typescript-eslint': eslintPlugin,
    canonical: canonicalPlugin,
    functional: functionalPlugin,
  },
  rules: {
    '@stylistic/member-delimiter-style': [
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
          requireLast: false,
        },
      },
    ],
    '@stylistic/type-annotation-spacing': [
      2,
      {
        after: true,
        before: false,
        overrides: {
          arrow: {
            after: true,
            before: true,
          },
        },
      },
    ],
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
    '@typescript-eslint/no-parameter-properties': 0,
    '@typescript-eslint/no-require-imports': 2,
    '@typescript-eslint/no-restricted-imports': 0,
    '@typescript-eslint/no-this-alias': [
      2,
      {
        allowDestructuring: true,
        allowedNames: ['self'],
      },
    ],
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
    '@typescript-eslint/prefer-as-const': 2,
    '@typescript-eslint/prefer-enum-initializers': 2,
    '@typescript-eslint/prefer-for-of': 2,
    '@typescript-eslint/prefer-function-type': 2,
    '@typescript-eslint/prefer-literal-enum-member': 2,
    '@typescript-eslint/prefer-namespace-keyword': 2,
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
    '@typescript-eslint/typedef': 0,
    '@typescript-eslint/unified-signatures': 2,
    'canonical/prefer-inline-type-import': 2,
    'default-param-last': 0,
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
    'import/no-dynamic-require': 0,
    'jsdoc/require-property-type': 0,
    'n/global-require': 0,
    'n/no-missing-import': 0,
    'no-duplicate-imports': 0,
    'no-undef': 0,
    'no-use-before-define': 0,
    'spaced-comment': [
      2,
      'always',
      {
        markers: ['/'],
      },
    ],
    ...typescriptCompatibility.recommended[0].rules,
  },
  settings: {
    'import/extensions': ['.ts', '.tsx'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        extensions: ['.ts', '.tsx'],
      },
    },
    jsdoc: {
      mode: 'typescript',
    },
    node: {
      tryExtensions: ['.ts', '.tsx', '.js', '.json'],
    },
  },
});
