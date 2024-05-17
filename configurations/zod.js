module.exports.recommended = {
  plugins: {
    zod: require('eslint-plugin-zod'),
  },
  rules: {
    'zod/prefer-enum': 2,
    'zod/require-strict': 2,
  },
};
