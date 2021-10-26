const {
  ESLint,
} = require('eslint');

/**
 * Determines what rules are going to be used for a given ESLint configuration.
 */
const getConfigurationRules = async (configuration) => {
  const engine = new ESLint({
    baseConfig: configuration,
    useEslintrc: false,
  });

  return (await engine.calculateConfigForFile('./compare')).rules;
};

const getConfigurationPluginNames = async (configuration) => {
  const engine = new ESLint({
    baseConfig: configuration,
    useEslintrc: false,
  });

  return (await engine.calculateConfigForFile('./compare')).plugins;
};

const getPluginRules = (pluginName) => {
  // eslint-disable-next-line import/no-dynamic-require
  const rules = require(pluginName.startsWith('@') ? pluginName + '/eslint-plugin' : 'eslint-plugin-' + pluginName).rules;

  return Object.fromEntries(Object.entries(rules).map(([ruleName, ruleConfiguration]) => {
    return [pluginName + '/' + ruleName, ruleConfiguration];
  }));
};

const getRuleLink = (ruleName) => {
  if (!ruleName.includes('/')) {
    return '[`' + ruleName + '`](https://eslint.org/docs/rules/' + ruleName + ')';
  }

  if (ruleName.startsWith('fp/')) {
    return '[`' + ruleName + '`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/' + ruleName.replace(/^fp\//, '') + '.md)';
  }

  if (ruleName.startsWith('ava/')) {
    return '[`' + ruleName + '`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/' + ruleName.replace(/^ava\//, '') + '.md)';
  }

  if (ruleName.startsWith('canonical/')) {
    return '[`' + ruleName + '`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-' + ruleName.replace(/^canonical\//, '') + ')';
  }

  if (ruleName.startsWith('eslint-comments/')) {
    return '[`' + ruleName + '`](https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/' + ruleName.replace(/^eslint-comments\//, '') + '.md)';
  }

  if (ruleName.startsWith('unicorn/')) {
    return '[`' + ruleName + '`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/' + ruleName.replace(/^unicorn\//, '') + '.md)';
  }

  if (ruleName.startsWith('flowtype/')) {
    return '[`' + ruleName + '`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-' + ruleName.replace(/^flowtype\//, '') + ')';
  }

  if (ruleName.startsWith('jsdoc/')) {
    return '[`' + ruleName + '`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-' + ruleName.replace(/^jsdoc\//, '') + ')';
  }

  if (ruleName.startsWith('import/')) {
    return '[`' + ruleName + '`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/' + ruleName.replace(/^import\//, '') + '.md)';
  }

  if (ruleName.startsWith('react/')) {
    return '[`' + ruleName + '`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/' + ruleName.replace(/^react\//, '') + '.md)';
  }

  if (ruleName.startsWith('promise/')) {
    return '[`' + ruleName + '`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/' + ruleName.replace(/^promise\//, '') + '.md)';
  }

  if (ruleName.startsWith('lodash/')) {
    return '[`' + ruleName + '`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/' + ruleName.replace(/^lodash\//, '') + '.md)';
  }

  if (ruleName.startsWith('mocha/')) {
    return '[`' + ruleName + '`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/' + ruleName.replace(/^mocha\//, '') + '.md)';
  }

  if (ruleName.startsWith('node/')) {
    return '[`' + ruleName + '`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/' + ruleName.replace(/^node\//, '') + '.md)';
  }

  if (ruleName.startsWith('jsx-a11y/')) {
    return '[`' + ruleName + '`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/' + ruleName.replace(/^jsx-a11y\//, '') + '.md)';
  }

  if (ruleName.startsWith('jest/')) {
    return '[`' + ruleName + '`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/' + ruleName.replace(/^jest\//, '') + '.md)';
  }

  if (ruleName.startsWith('@typescript-eslint/')) {
    // eslint-disable-next-line max-len
    return '[`' + ruleName + '`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/' + ruleName.replace(/^@typescript-eslint\//, '') + '.md)';
  }

  return '`' + ruleName + '`';
};

const describeRuleValue = (ruleValue) => {
  if (ruleValue === undefined) {
    return '👻';
  }

  if (ruleValue === 0 || ruleValue === 'off') {
    return '❌';
  }

  if (ruleValue === 1 || ruleValue === 'warn') {
    return '⚠️';
  }

  if (ruleValue === 2 || ruleValue === 'error') {
    return '🚨';
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

const getLoadedRules = async () => {
  const usedPluginNames = await getConfigurationPluginNames({
    extends: [
      'airbnb',
      'google',
      'standard',
      'canonical',
      'canonical/ava',
      'canonical/flowtype',
      'canonical/jest',
      'canonical/lodash',
      'canonical/mocha',
      'canonical/node',
      'canonical/react',
      'canonical/typescript',
    ],
  });

  let loadedRules = {};

  for (const usedPluginName of usedPluginNames) {
    loadedRules = {
      ...loadedRules,
      ...getPluginRules(usedPluginName),
    };
  }

  return Object.fromEntries(
    Object.entries(loadedRules)
      .sort((a, b) => {
        return a[0].localeCompare(b[0]);
      }),
  );
};

(async () => {
  const loadedRules = await getLoadedRules();

  const canonicalRules = await getConfigurationRules({
    extends: [
      'canonical',
      'canonical/ava',
      'canonical/flowtype',
      'canonical/jest',
      'canonical/lodash',
      'canonical/mocha',
      'canonical/node',
      'canonical/react',
      'canonical/typescript',
    ],
  });

  const airbnbRules = await getConfigurationRules({
    extends: [
      'airbnb',
    ],
  });

  const googleRules = await getConfigurationRules({
    extends: [
      'google',
    ],
  });

  const standardRules = await getConfigurationRules({
    extends: [
      'standard',
    ],
  });

  const ruleNames = Object.keys(loadedRules);

  for (const ruleName of ruleNames) {
    // eslint-disable-next-line no-console -- CLI
    console.log(
      '|' + getRuleLink(ruleName) +
      '|' + getRuleConfiguration(canonicalRules, ruleName) +
      '|' + getRuleConfiguration(airbnbRules, ruleName) +
      '|' + getRuleConfiguration(googleRules, ruleName) +
      '|' + getRuleConfiguration(standardRules, ruleName) +
      '|',
    );
  }
})();
