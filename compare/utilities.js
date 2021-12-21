const {
  ESLint,
} = require('eslint');
const {
  builtinRules,
} = require('eslint/use-at-your-own-risk');

const getConfigurationPluginNames = async (configuration) => {
  const engine = new ESLint({
    baseConfig: configuration,
    useEslintrc: false,
  });

  return (await engine.calculateConfigForFile('./compare')).plugins;
};

const getPluginRules = (pluginName) => {
  const {
    rules,
  } = require(pluginName.startsWith('@') ? pluginName + '/eslint-plugin' : 'eslint-plugin-' + pluginName);

  return Object.fromEntries(Object.entries(rules).map(([
    ruleName,
    ruleConfiguration,
  ]) => {
    return [
      pluginName + '/' + ruleName,
      ruleConfiguration,
    ];
  }));
};

const configurationNames = [
  'airbnb',
  'google',
  'standard',
  'canonical',
  'canonical/ava',
  'canonical/browser',
  'canonical/flowtype',
  'canonical/jest',
  'canonical/json',
  'canonical/lodash',
  'canonical/mocha',
  'canonical/module',
  'canonical/node',
  'canonical/react',
  'canonical/typescript',
  'canonical/yaml',
];

const getLoadedRules = async () => {
  const usedPluginNames = [];

  for (const configurationName of configurationNames) {
    const configurationUsedPluginNames = await getConfigurationPluginNames({
      extends: [
        configurationName,
      ],
      root: true,
    });

    for (const configurationUsedPluginName of configurationUsedPluginNames) {
      if (!usedPluginNames.includes(configurationUsedPluginNames)) {
        usedPluginNames.push(configurationUsedPluginName);
      }
    }
  }

  let loadedRules = {
    ...Object.fromEntries(builtinRules),
  };

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

const getRuleLink = (ruleName) => {
  if (!ruleName.includes('/')) {
    return '[`' + ruleName + '`](https://eslint.org/docs/rules/' + ruleName + ')';
  }

  if (ruleName.startsWith('fp/')) {
    return '[`' + ruleName + '`](https://github.com/jfmengels/eslint-plugin-fp/blob/master/docs/rules/' + ruleName.replace(/^fp\//u, '') + '.md)';
  }

  if (ruleName.startsWith('ava/')) {
    return '[`' + ruleName + '`](https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/' + ruleName.replace(/^ava\//u, '') + '.md)';
  }

  if (ruleName.startsWith('canonical/')) {
    return '[`' + ruleName + '`](https://github.com/gajus/eslint-plugin-canonical#eslint-plugin-canonical-rules-' + ruleName.replace(/^canonical\//u, '') + ')';
  }

  if (ruleName.startsWith('eslint-comments/')) {
    return '[`' + ruleName + '`](https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/' + ruleName.replace(/^eslint-comments\//u, '') + '.md)';
  }

  if (ruleName.startsWith('unicorn/')) {
    return '[`' + ruleName + '`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/' + ruleName.replace(/^unicorn\//u, '') + '.md)';
  }

  if (ruleName.startsWith('flowtype/')) {
    return '[`' + ruleName + '`](https://github.com/gajus/eslint-plugin-flowtype/#eslint-plugin-flowtype-rules-' + ruleName.replace(/^flowtype\//u, '') + ')';
  }

  if (ruleName.startsWith('jsdoc/')) {
    return '[`' + ruleName + '`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-' + ruleName.replace(/^jsdoc\//u, '') + ')';
  }

  if (ruleName.startsWith('import/')) {
    return '[`' + ruleName + '`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/' + ruleName.replace(/^import\//u, '') + '.md)';
  }

  if (ruleName.startsWith('react/')) {
    return '[`' + ruleName + '`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/' + ruleName.replace(/^react\//u, '') + '.md)';
  }

  if (ruleName.startsWith('promise/')) {
    return '[`' + ruleName + '`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/' + ruleName.replace(/^promise\//u, '') + '.md)';
  }

  if (ruleName.startsWith('lodash/')) {
    return '[`' + ruleName + '`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/' + ruleName.replace(/^lodash\//u, '') + '.md)';
  }

  if (ruleName.startsWith('mocha/')) {
    return '[`' + ruleName + '`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/' + ruleName.replace(/^mocha\//u, '') + '.md)';
  }

  if (ruleName.startsWith('node/')) {
    return '[`' + ruleName + '`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/' + ruleName.replace(/^node\//u, '') + '.md)';
  }

  if (ruleName.startsWith('jsx-a11y/')) {
    return '[`' + ruleName + '`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/' + ruleName.replace(/^jsx-a11y\//u, '') + '.md)';
  }

  if (ruleName.startsWith('jest/')) {
    return '[`' + ruleName + '`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/' + ruleName.replace(/^jest\//u, '') + '.md)';
  }

  if (ruleName.startsWith('jsonc/')) {
    return '[`' + ruleName + '`](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/' + ruleName.replace(/^jsonc\//u, '') + '.html)';
  }

  if (ruleName.startsWith('@typescript-eslint/')) {
    return '[`' + ruleName + '`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/' + ruleName.replace(/^@typescript-eslint\//u, '') + '.md)';
  }

  if (ruleName.startsWith('yml/')) {
    return '[`' + ruleName + '`](https://ota-meshi.github.io/eslint-plugin-yml/rules/' + ruleName.replace(/^yml\//u, '') + '.html)';
  }

  return '`' + ruleName + '`';
};

const isRuleEnabled = (ruleValue) => {
  if (ruleValue === 1 || ruleValue === 'warn') {
    return true;
  }

  if (ruleValue === 2 || ruleValue === 'error') {
    return true;
  }

  return false;
};

const normalizeConfiguration = (configuration) => {
  if (!configuration) {
    return [
      'off',
    ];
  }

  const nextConfiguration = [
    ...configuration,
  ];

  if (typeof nextConfiguration[0] === 'number') {
    if (nextConfiguration[0] === 0) {
      nextConfiguration[0] = 'off';
    } else if (nextConfiguration[0] === 1) {
      nextConfiguration[0] = 'warn';
    } else if (nextConfiguration[0] === 2) {
      nextConfiguration[0] = 'error';
    }
  }

  return nextConfiguration;
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

module.exports = {
  getConfigurationRules,
  getLoadedRules,
  getRuleConfiguration,
  getRuleLink,
  isRuleEnabled,
  normalizeConfiguration,
};
