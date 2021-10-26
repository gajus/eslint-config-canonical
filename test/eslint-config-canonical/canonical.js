/* eslint-disable import/no-dynamic-require */

const test = require('ava');
const {builtinRules} = require('eslint/use-at-your-own-risk');

const configurationNames = [
  'ava',
  'browser',
  'eslintrc',
  'flowtype',
  'jest',
  'json',

  // 'jsx-a11y',
  'lodash',
  'mocha',
  'module',
  'node',
  'react',
  'yaml',
];

const getPluginRuleNames = (pluginName) => {
  const dependencyName = pluginName.startsWith('@') ? pluginName + '/eslint-plugin' : 'eslint-plugin-' + pluginName;

  return Object.keys(require(dependencyName).rules).map((ruleName) => {
    return pluginName + '/' + ruleName;
  });
};

const main = async () => {
  for (const configurationName of configurationNames) {
    const configuration = require('../../' + configurationName);

    const supportedRuleNames = [
      ...builtinRules.keys(),
    ];

    for (const pluginName of configuration.plugins) {
      supportedRuleNames.push(...getPluginRuleNames(pluginName));
    }

    for (const configurationRuleName of Object.keys(configuration.rules)) {
      test('"' + configurationName + '" configuration has "' + configurationRuleName + '" rule', (t) => {
        t.true(supportedRuleNames.includes(configurationRuleName));
      });
    }
  }
};

main();
