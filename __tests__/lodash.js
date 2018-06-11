const CLIEngine = require('eslint').CLIEngine;
const config = require('../lodash');

const rulesDefinition = new CLIEngine({
  configFile: './lodash.js',
  useEslintrc: false
}).getRules();

describe('lodash config', () => {
  it('should use lodash plugin', () => {
    expect(config.plugins).toContain('lodash');
  });

  Object.keys(config.rules || []).forEach((rule) => {
    it(`"${rule}" should be a valid rule`, () => {
      expect(rulesDefinition).toHaveRuleDefinition(rule);
    });
  });
});
