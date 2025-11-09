import importPlugin from 'eslint-plugin-import';
import nPlugin from 'eslint-plugin-n';
import unicornPlugin from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export const recommended = defineConfig({
  languageOptions: {
    globals: {
      ...globals.node,
    },
  },
  plugins: {
    // @ts-expect-error - not properly typed
    import: importPlugin,
    // eslint-disable-next-line id-length
    n: nPlugin,
    unicorn: unicornPlugin,
  },
  rules: {
    'n/callback-return': 2,
    'n/exports-style': [2, 'module.exports'],
    'n/file-extension-in-import': 0,
    'n/global-require': 2,
    'n/handle-callback-err': 2,
    'n/no-callback-literal': 2,
    'n/no-deprecated-api': 2,
    'n/no-exports-assign': 2,
    'n/no-extraneous-import': 2,
    'n/no-extraneous-require': 2,
    'n/no-missing-import': 0,
    'n/no-missing-require': 0,
    'n/no-mixed-requires': 0,
    'n/no-new-require': 2,
    'n/no-path-concat': 2,
    'n/no-process-env': 2,
    'n/no-process-exit': 2,
    'n/no-restricted-import': 0,
    'n/no-restricted-require': 0,
    'n/no-sync': 0,
    'n/no-unpublished-bin': 2,
    'n/no-unpublished-import': 0,
    'n/no-unpublished-require': 0,
    'n/no-unsupported-features/es-builtins': 0,
    'n/no-unsupported-features/es-syntax': 0,
    'n/no-unsupported-features/node-builtins': 0,
    'n/prefer-global/buffer': 2,
    'n/prefer-global/console': 2,
    'n/prefer-global/process': 2,
    'n/prefer-global/text-decoder': 2,
    'n/prefer-global/text-encoder': 2,
    'n/prefer-global/url': 2,
    'n/prefer-global/url-search-params': 2,
    'n/prefer-promises/dns': 2,
    'n/prefer-promises/fs': 2,
    'n/process-exit-as-throw': 2,
    'n/shebang': [
      2,
      {
        convertPath: {
          'src/**/*.js': ['^src/(.+?)\\.js$', 'dist/$1.js'],
        },
      },
    ],
    'unicorn/prefer-node-protocol': 2,
  },
});
