module.exports.recommended = {
  plugins: {
    vitest: require('eslint-plugin-vitest'),
  },
  rules: {
    'vitest/expect-expect': 2,
    'vitest/lower-case-title': 0,
    'vitest/max-nested-describe': 2,
    'vitest/no-conditional-tests': 2,
    'vitest/no-disabled-tests': 2,
    'vitest/no-focused-tests': [
      2,
      {
        fixable: false,
      },
    ],
    'vitest/no-identical-title': 2,
  },
};
