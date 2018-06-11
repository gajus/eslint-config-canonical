const CLIEngine = require('eslint').CLIEngine;
const config = require('../index');

const rulesDefinition = new CLIEngine({
  configFile: './index.js',
  useEslintrc: false
}).getRules();

describe('eslintrc config', () => {
  Object.keys(config.rules || []).forEach((rule) => {
    it(`"${rule}" should be a valid rule`, () => {
      expect(rulesDefinition).toHaveRuleDefinition(rule);
    });
  });
});
