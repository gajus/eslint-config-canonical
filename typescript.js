const typescript = require('./configurations/typescript.json');

typescript.rules = {
  ...typescript.rules,
  ...require('./configurations/typescript-compatibility.json').rules,
};

module.exports = typescript;
