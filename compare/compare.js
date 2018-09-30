const CLIEngine = require('eslint').CLIEngine;

const getEngineForConfiguration = (configuration) => {
  const engine = new CLIEngine({
    baseConfig: configuration,
    useEslintrc: false
  });

  return engine;
};

const canonicalEngine = getEngineForConfiguration({
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

const airbnbEngine = getEngineForConfiguration({
  extends: [
    'airbnb'
  ]
});

const googleEngine = getEngineForConfiguration({
  extends: [
    'google'
  ]
});

const standardEngine = getEngineForConfiguration({
  extends: [
    'standard'
  ]
});

const ruleNames = [
  ...new Set([
    ...Object.keys(canonicalEngine.config.baseConfig.rules),
    ...Object.keys(airbnbEngine.config.baseConfig.rules),
    ...Object.keys(googleEngine.config.baseConfig.rules),
    ...Object.keys(standardEngine.config.baseConfig.rules)
  ])
]
  .sort();

const getRuleLink = (ruleName, engines) => {
  for (const engine of engines) {
    const subjectRule = engine.getRules().get(ruleName);

    if (subjectRule && subjectRule.meta && subjectRule.meta.docs && subjectRule.meta.docs.url) {
      return '[`' + ruleName + '`](' + subjectRule.meta.docs.url + ')';
    }
  }

  return '`' + ruleName + '`';
};

const describeRuleValue = (ruleValue) => {
  if (ruleValue === undefined) {
    return 'N/A 👻';
  }

  if (ruleValue === 0 || ruleValue === 'off') {
    return 'off';
  }

  if (ruleValue === 1 || ruleValue === 'warn') {
    return 'warn ⚠️';
  }

  if (ruleValue === 2 || ruleValue === 'error') {
    return 'error 🚨';
  }

  return false;
};

const getRuleConfiguration = (ruleset, ruleName) => {
  const ruleValueDescription = describeRuleValue(ruleset[ruleName]);

  if (ruleValueDescription) {
    return ruleValueDescription;
  }

  return describeRuleValue(ruleset[ruleName][0]);
};

const engines = [
  canonicalEngine,
  airbnbEngine,
  googleEngine,
  standardEngine
];

for (const ruleName of ruleNames) {
  console.log('|' + getRuleLink(ruleName, engines) + '|' + getRuleConfiguration(canonicalEngine.config.baseConfig.rules, ruleName) + '|' + getRuleConfiguration(airbnbEngine.config.baseConfig.rules, ruleName) + '|' + getRuleConfiguration(googleEngine.config.baseConfig.rules, ruleName) + '|' + getRuleConfiguration(standardEngine.config.baseConfig.rules, ruleName) + '|');
}
