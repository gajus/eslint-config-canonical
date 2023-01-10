/* eslint-disable canonical/filename-match-exported */

const typescript = require('./configurations/typescript-typed-linting');

typescript.rules = {
  ...require('./configurations/typescript-typed-linting').rules,
};

module.exports = typescript;
