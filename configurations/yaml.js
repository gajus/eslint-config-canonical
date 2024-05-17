module.exports.recommended = {
  files: ['*.yaml'],
  languageOptions: {
    parser: require('yaml-eslint-parser'),
  },
  plugins: {
    yml: require('eslint-plugin-yml'),
  },
  rules: {
    'yml/block-mapping': 2,
    'yml/block-mapping-question-indicator-newline': 2,
    'yml/block-sequence': [2, 'always'],
    'yml/block-sequence-hyphen-indicator-newline': 2,
    'yml/flow-mapping-curly-newline': 2,
    'yml/flow-mapping-curly-spacing': 2,
    'yml/flow-sequence-bracket-newline': 2,
    'yml/flow-sequence-bracket-spacing': 2,
    'yml/indent': [2, 2],
    'yml/key-name-casing': 0,
    'yml/key-spacing': 2,
    'yml/no-empty-document': 2,
    'yml/no-empty-key': 2,
    'yml/no-empty-mapping-value': 2,
    'yml/no-empty-sequence-entry': 2,
    'yml/no-irregular-whitespace': 2,
    'yml/no-multiple-empty-lines': [
      2,
      {
        max: 0,
      },
    ],
    'yml/no-tab-indent': 2,
    'yml/plain-scalar': 0,
    'yml/quotes': [
      2,
      {
        avoidEscape: true,
        prefer: 'single',
      },
    ],
    'yml/require-string-key': 2,
    'yml/sort-keys': [
      2,
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ],
    'yml/sort-sequence-values': 0,
    'yml/spaced-comment': 2,
    'yml/vue-custom-block/no-parsing-error': 2,
  },
};
