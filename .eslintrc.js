module.exports = {
  extends: [
    './configurations/eslintrc',
    './configurations/node',
  ],
  rules: {
    'canonical/filename-match-regex': 0,
    'node/global-require': 0,
  },
};
