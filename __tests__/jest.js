const CLIEngine = require('eslint').CLIEngine;
const config = require('../jest');

const rulesDefinition = new CLIEngine({
  configFile: './jest.js',
  useEslintrc: false
}).getRules();

describe('jest config', () => {
  it('should use jest plugin', () => {
    expect(config.plugins).toContain('jest');
  });
  it('should use jest env', () => {
    expect(config.env).toEqual({jest: true});
  });

  Object.keys(config.rules || []).forEach((rule) => {
    it(`"${rule}" should be a valid rule`, () => {
      expect(rulesDefinition).toHaveRuleDefinition(rule);
    });
  });
});
