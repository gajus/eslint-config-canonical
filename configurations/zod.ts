import zodPlugin from 'eslint-plugin-zod';
import { defineConfig } from 'eslint/config';

export const recommended = defineConfig({
  plugins: {
    zod: zodPlugin,
  },
  rules: {
    'zod/array-style': [2, { style: 'function' }],
    'zod/no-number-schema-with-int': 2,
    'zod/no-optional-and-default-together': 2,
    'zod/require-schema-suffix': [2, { suffix: 'ZodSchema' }],
    'zod/no-any-schema': 2,
    'zod/prefer-meta': 2,
    'zod/prefer-meta-last': 2,
    'zod/prefer-enum-over-literal-union': 2,
    'zod/consistent-object-schema-type': [
      2,
      {
        allow: ['strictObject'],
      },
    ],
  },
});
