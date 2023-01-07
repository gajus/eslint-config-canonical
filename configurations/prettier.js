module.exports = {
  plugins: [
    'prettier',
  ],
  rules: {
    'arrow-body-style': 0,
    'canonical/destructuring-property-newline': 0,
    'canonical/export-specifier-newline': 0,
    'canonical/import-specifier-newline': 0,
    'line-comment-position': 0,
    'no-inline-comments': 0,
    'prefer-arrow-callback': 0,
    'prettier/prettier': [
      2,
      {
        arrowParens: 'always',
        bracketSameLine: false,
        bracketSpacing: true,
        endOfLine: 'lf',
        printWidth: 80,
        proseWrap: 'preserve',
        quoteProps: 'as-needed',
        semi: true,
        singleAttributePerLine: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
      },
      {
        usePrettierrc: false,
      },
    ],
  },
};
