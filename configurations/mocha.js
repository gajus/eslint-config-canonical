import mochaPlugin from 'eslint-plugin-mocha';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export const recommended = tseslint.config({
  languageOptions: {
    globals: globals.mocha,
  },
  plugins: {
    mocha: mochaPlugin,
  },
  rules: {
    'mocha/handle-done-callback': 2,
    'mocha/max-top-level-suites': [
      2,
      {
        limit: 1,
      },
    ],
    'mocha/no-async-describe': 2,
    'mocha/no-empty-description': 2,
    'mocha/no-exclusive-tests': 2,
    'mocha/no-exports': 2,
    'mocha/no-global-tests': 2,
    'mocha/no-hooks': 0,
    'mocha/no-hooks-for-single-case': 2,
    'mocha/no-identical-title': 2,
    'mocha/no-mocha-arrows': 0,
    'mocha/no-nested-tests': 2,
    'mocha/no-pending-tests': 2,
    'mocha/no-return-and-callback': 2,
    'mocha/no-return-from-async': 2,
    'mocha/no-setup-in-describe': 2,
    'mocha/no-sibling-hooks': 2,
    'mocha/no-skipped-tests': 2,
    'mocha/no-synchronous-tests': 0,
    'mocha/no-top-level-hooks': 2,
    'mocha/prefer-arrow-callback': 0,
    'mocha/valid-suite-description': 0,
    'mocha/valid-test-description': 0,
  },
});
