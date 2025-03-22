import unicornPlugin from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

export const recommended = tseslint.config({
  plugins: {
    unicorn: unicornPlugin,
  },
  rules: {
    'unicorn/prefer-module': 2,
  },
});
