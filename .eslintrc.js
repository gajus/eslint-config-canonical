const base = require('./configurations/eslintrc.json');

module.exports = {
  ...base,
  overrides: [
    ...base.overrides || [],
    {
      files: ['.eslintrc.js', 'bin/generate-typescript-compatibility-rules.js'],
      rules: {
        'filenames/match-regex': 0,
      },
    },
  ],
  parserOptions: {
    ...base.parserOptions,
    requireConfigFile: false,
    sourceType: 'script',
  },
  rules: {
    ...base.rules,
    'import/no-commonjs': 0,
  },
};
