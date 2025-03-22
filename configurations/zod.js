import zodPlugin from 'eslint-plugin-zod';
import tseslint from 'typescript-eslint';

export const recommended = tseslint.config({
  plugins: {
    zod: zodPlugin,
  },
  rules: {
    'zod/prefer-enum': 2,
    'zod/require-strict': 2,
  },
});
