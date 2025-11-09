import unicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export const recommended = defineConfig({
  languageOptions: {
    globals: {
      ...globals.browser,
    },
  },
  plugins: {
    unicorn,
  },
  rules: {
    'unicorn/prefer-dom-node-append': 2,
    'unicorn/prefer-dom-node-dataset': 2,
    'unicorn/prefer-dom-node-remove': 2,
    'unicorn/prefer-dom-node-text-content': 2,
    'unicorn/prefer-keyboard-event-key': 2,
    'unicorn/prefer-modern-dom-apis': 2,
  },
});
