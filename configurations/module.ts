import unicornPlugin from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';

export const recommended = defineConfig({
  plugins: {
    unicorn: unicornPlugin,
  },
  rules: {
    'unicorn/prefer-module': 2,
  },
});
