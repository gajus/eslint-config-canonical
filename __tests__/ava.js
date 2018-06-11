const CLIEngine = require('eslint').CLIEngine;
const config = require('../ava');

const rulesDefinition = new CLIEngine({
  configFile: './ava.js',
  useEslintrc: false
}).getRules();

describe('ava config', () => {
  Object.keys(config.rules || []).forEach((rule) => {
    it(`"${rule}" should be a valid rule`, () => {
      expect(rulesDefinition).toHaveRuleDefinition(rule);
    });
  });
});
