const prettier = require('eslint-config-prettier');

prettier.plugins = [...require('./configurations/prettier').plugins];

prettier.rules = {
  ...prettier.rules,
  ...require('./configurations/prettier').rules,
};

module.exports = prettier;
