/* eslint-disable canonical/filename-match-exported */

const typescript = require('./configurations/typescript-type-checking');

typescript.rules = {
  ...require('./configurations/typescript-type-checking').rules,
};

module.exports = typescript;
