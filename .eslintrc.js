module.exports = {
  extends: [
    './configurations/eslintrc',
    './configurations/node',
    './configurations/prettier',
  ],
  rules: {
    'canonical/filename-match-regex': 0,
    'n/global-require': 0,
  },
};
