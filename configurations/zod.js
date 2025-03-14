import zodPlugin from 'eslint-plugin-zod';

export const recommended = {
  plugins: {
    zod: zodPlugin,
  },
  rules: {
    'zod/prefer-enum': 2,
    'zod/require-strict': 2,
  },
};
