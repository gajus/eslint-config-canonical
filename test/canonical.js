const test = require('ava');
const CLIEngine = require('eslint').CLIEngine;

const configurations = [
  'ava',
  'eslintrc',
  'flowtype',
  'jest',
  'lodash',
  'mocha',
  'react',
];

for (const configuration of configurations) {
  const config = require('../' + configuration);

  const rulesDefinition = new CLIEngine({
    configFile: './' + configuration + '.js',
    useEslintrc: false
  })
    .getRules();

  const ruleNames = Object.keys(config.rules || []);

  for (const ruleName of ruleNames) {
    test('plugin "' + configuration + '" has "' + ruleName + '" rule', (t) => {
      const pluginHasRule = rulesDefinition.has(ruleName);

      t.true(pluginHasRule);
    });
  }

  test('plugin "' + configuration + '" does not have "does-not-exist" rule', (t) => {
    const pluginHasRule = rulesDefinition.has('does-not-exist');

    t.true(pluginHasRule === false);
  });
}
