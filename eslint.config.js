module.exports = [
  require('./configurations/node').recommended,
  ...require('./configurations/auto'),
  require('./configurations/ava').recommended,
  {
    rules: {
      'n/global-require': 0,
    },
  },
  {
    ignores: ['**/package-lock.json', '**/pnpm-lock.yaml'],
  },
];
