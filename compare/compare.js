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

const ruleNames = [
  ...new Set([
    ...Object.keys(canonicalEngine.config.baseConfig.rules),
    ...Object.keys(airbnbEngine.config.baseConfig.rules)
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

const getRuleConfiguration = (ruleset, ruleName) => {
  if (ruleset[ruleName] === undefined) {
    return 'N/A 👻';
  }

  if (ruleset[ruleName] === 1) {
    return 'warn ⚠️';
  }

  if (ruleset[ruleName] === 2) {
    return 'error 🚨';
  }

  return JSON.stringify(ruleset[ruleName]);
};

const engines = [
  canonicalEngine,
  airbnbEngine
];

for (const ruleName of ruleNames) {
  console.log('|' + getRuleLink(ruleName, engines) + '|' + getRuleConfiguration(canonicalEngine.config.baseConfig.rules, ruleName) + '|' + getRuleConfiguration(airbnbEngine.config.baseConfig.rules, ruleName) + '|');
}
