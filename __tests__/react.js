const CLIEngine = require('eslint').CLIEngine;
const config = require('../react');

const rulesDefinition = new CLIEngine({
  configFile: './react.js',
  useEslintrc: false
}).getRules();

describe('react config', () => {
  it('should use react plugin', () => {
    expect(config.plugins).toContain('react');
  });

  Object.keys(config.rules || []).forEach((rule) => {
    it(`"${rule}" should be a valid rule`, () => {
      expect(rulesDefinition).toHaveRuleDefinition(rule);
    });
  });
});
