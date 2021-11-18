const base = require('./configurations/eslintrc.json');

module.exports = {
  ...base,
  parserOptions: {
    ...base.parserOptions,
    requireConfigFile: false,
    sourceType: 'script',
  },
  rules: {
    ...base.rules,
    'canonical/filename-match-regex': 0,
  },
};
