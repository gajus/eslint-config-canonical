const typescript = require('./configurations/typescript');

typescript.rules = {
  ...typescript.rules,
  ...require('./configurations/typescript-compatibility').rules,
};

module.exports = typescript;
