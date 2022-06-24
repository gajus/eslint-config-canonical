const prettier = require('eslint-config-prettier');

prettier.rules = {
  ...prettier.rules,
  ...require('./configurations/prettier').rules,
};

module.exports = prettier;
