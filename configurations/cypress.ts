import cypress from 'eslint-plugin-cypress/flat';
import tseslint from 'typescript-eslint';

export const recommended = tseslint.config({
  languageOptions: {
    globals: cypress.configs.recommended.languageOptions.globals,
  },
  plugins: {
    cypress,
  },
  rules: {
    'cypress/assertion-before-screenshot': 2,
    'cypress/no-assigning-return-values': 2,
    'cypress/no-async-tests': 2,
    'cypress/no-force': 2,
    'cypress/no-pause': 2,
    'cypress/no-unnecessary-waiting': 2,
    'import/unambiguous': 0,
  },
});
