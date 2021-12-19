const base = require('./configurations/eslintrc');

module.exports = {
  ...base,
  rules: {
    ...base.rules,
    'canonical/filename-match-regex': 0,
  },
};
