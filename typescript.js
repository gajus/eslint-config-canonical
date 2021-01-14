const config = require('./configurations/typescript.json');

config.rules = {
  ...config.rules,
  ...require('./configurations/typescript-compatibility.json').rules,
};

module.exports = config;
