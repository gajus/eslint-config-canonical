import prettierPlugin from 'eslint-plugin-prettier';

export const recommended = {
  files: ['**/*.{js,jsx,cjs,mjs,ts,tsx}'],
  plugins: {
    prettier: prettierPlugin,
  },
  rules: {
    '@stylistic/array-bracket-newline': 0,
    '@stylistic/array-element-newline': 0,
    '@stylistic/brace-style': 0,
    '@stylistic/comma-dangle': 0,
    '@stylistic/generator-star-spacing': 0,
    '@stylistic/implicit-arrow-linebreak': 0,
    '@stylistic/indent': 0,
    '@stylistic/jsx-quotes': 0,
    '@stylistic/line-comment-position': 0,
    '@stylistic/linebreak-style': 0,
    '@stylistic/member-delimiter-style': 0,
    '@stylistic/no-confusing-arrow': 0,
    '@stylistic/no-extra-parens': 0,
    '@stylistic/nonblock-statement-body-position': 0,
    '@stylistic/object-curly-newline': 0,
    '@stylistic/object-property-newline': 0,
    '@stylistic/operator-linebreak': 0,
    '@stylistic/quotes': 0,
    '@stylistic/space-before-function-paren': 0,
    '@stylistic/space-in-parens': 0,
    '@typescript-eslint/indent': 0,
    'arrow-body-style': 0,
    'canonical/destructuring-property-newline': 0,
    'canonical/export-specifier-newline': 0,
    'canonical/import-specifier-newline': 0,
    'function-paren-newline': 0,
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
    'react/jsx-curly-newline': 0,
    'unicorn/template-indent': 0,
  },
};
