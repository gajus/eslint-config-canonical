import zodPlugin from 'eslint-plugin-zod';
import { defineConfig } from 'eslint/config';

export const recommended = defineConfig({
  plugins: {
    // @ts-expect-error - not properly typed
    zod: zodPlugin,
  },
  rules: {
    'zod/prefer-enum': 2,
    'zod/require-strict': 2,
  },
});
