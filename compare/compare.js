const CLIEngine = require('eslint').CLIEngine;

const getRulesForConfig = (configuration) => {
  const engine = new CLIEngine({
    baseConfig: configuration,
    useEslintrc: false
  });

  return engine.config.baseConfig.rules;
};

const canonicalRules = getRulesForConfig({
  extends: [
    'canonical',
    'canonical/ava',
    'canonical/flowtype',
    'canonical/jest',
    'canonical/lodash',
    'canonical/mocha',
    'canonical/react'
  ]
});

const airbnbRules = getRulesForConfig({
  extends: [
    'airbnb'
  ]
});

const ruleNames = [
  ...new Set([
    ...Object.keys(canonicalRules),
    ...Object.keys(airbnbRules)
  ])
]
  .sort();

const getRuleConfiguration = (ruleset, ruleName) => {
  if (ruleset[ruleName] === undefined) {
    return 'N/A';
  }

  if (ruleset[ruleName] === 1) {
    return 'warn';
  }

  if (ruleset[ruleName] === 2) {
    return 'error';
  }

  return JSON.stringify(ruleName);
};

for (const ruleName of ruleNames) {
  console.log('|' + ruleName + '|' + getRuleConfiguration(canonicalRules, ruleName) + '|' + getRuleConfiguration(airbnbRules, ruleName) + '|');
}
