import unicornPlugin from 'eslint-plugin-unicorn';

export const recommended = {
  plugins: {
    unicorn: unicornPlugin,
  },
  rules: {
    'unicorn/prefer-module': 2,
  },
};
