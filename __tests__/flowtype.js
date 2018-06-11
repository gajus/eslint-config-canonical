const CLIEngine = require('eslint').CLIEngine;
const config = require('../flowtype');

const rulesDefinition = new CLIEngine({
  configFile: './flowtype.js',
  useEslintrc: false
}).getRules();

describe('flowtype config', () => {
  it('should use flowtype plugin', () => {
    expect(config.plugins).toContain('flowtype');
  });

  Object.keys(config.rules || []).forEach((rule) => {
    it(`"${rule}" should be a valid rule`, () => {
      expect(rulesDefinition).toHaveRuleDefinition(rule);
    });
  });
});
