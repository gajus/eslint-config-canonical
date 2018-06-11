const CLIEngine = require('eslint').CLIEngine;
const config = require('../mocha');

const rulesDefinition = new CLIEngine({
  configFile: './mocha.js',
  useEslintrc: false
}).getRules();

describe('mocha config', () => {
  it('should use mocha plugin', () => {
    expect(config.plugins).toContain('mocha');
  });
  it('should use mocha env', () => {
    expect(config.env).toEqual({mocha: true});
  });

  Object.keys(config.rules || []).forEach((rule) => {
    it(`"${rule}" should be a valid rule`, () => {
      expect(rulesDefinition).toHaveRuleDefinition(rule);
    });
  });
});
