/* eslint-disable no-console */

const {
  ESLint,
} = require('eslint');
const {
  builtinRules,
} = require('eslint/use-at-your-own-risk');

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
  const {rules} = require(pluginName.startsWith('@') ? pluginName + '/eslint-plugin' : 'eslint-plugin-' + pluginName);

  return Object.fromEntries(Object.entries(rules).map(([ruleName, ruleConfiguration]) => {
    return [pluginName + '/' + ruleName, ruleConfiguration];
  }));
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
    // eslint-disable-next-line max-len
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
    ],
  });

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

(async () => {
  const loadedRules = await getLoadedRules();

  const canonicalRules = await getConfigurationRules({
    extends: [
      'canonical/ava',
      'canonical/browser',
      'canonical/flowtype',
      'canonical/jest',
      'canonical/json',
      'canonical/jsx-a11y',
      'canonical/lodash',
      'canonical/mocha',
      'canonical/module',
      'canonical/node',
      'canonical/react',
      'canonical/typescript',
      'canonical/yaml',

      // The order is important!
      // The last ruleset overrides rules in previous rulesets.
      // This affects rules that are overridden in specific configs, e.g.
      // typescript disabled no-duplicate-imports but enables @typescript-eslint/no-duplicate-imports.
      'canonical',
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

  const xoRules = await getConfigurationRules({
    extends: [
      'xo',
    ],
  });

  const ruleNames = Object.keys(loadedRules);

  for (const ruleName of ruleNames) {
    console.log(
      '|' + getRuleLink(ruleName) + (loadedRules[ruleName]?.meta?.deprecated ? ' ⛔️' : '') +
      '|' + getRuleConfiguration(canonicalRules, ruleName) +
      '|' + getRuleConfiguration(airbnbRules, ruleName) +
      '|' + getRuleConfiguration(googleRules, ruleName) +
      '|' + getRuleConfiguration(standardRules, ruleName) +
      '|' + getRuleConfiguration(xoRules, ruleName) +
      '|',
    );
  }

  const ignoreDisabled = [
    'camelcase',
    'capitalized-comments',
    'import/named',
    'import/no-unresolved',
    'import/prefer-default-export',
    'jsx-a11y/control-has-associated-label',
    'jsx-a11y/lang',
    'max-classes-per-file',
    'max-params',
    'multiline-ternary',
    'new-cap',
    'newline-per-chained-call',
    'no-await-in-loop',
    'no-continue',
    'no-empty-function',
    'no-invalid-this',
    'no-mixed-operators',
    'no-nested-ternary',
    'no-plusplus',
    'no-restricted-globals',
    'no-restricted-imports',
    'no-restricted-properties',
    'no-restricted-syntax',
    'no-return-await',
    'no-underscore-dangle',
    'object-curly-spacing',
    'prefer-template',
    'react/destructuring-assignment',
    'react/forbid-foreign-prop-types',
    'react/forbid-prop-types',
    'react/jsx-filename-extension',
    'react/jsx-one-expression-per-line',
    'react/jsx-props-no-spreading',
    'react/jsx-wrap-multilines',
    'react/react-in-jsx-scope',
    'react/require-default-props',
  ];

  for (const ruleName of ruleNames) {
    if (
      !ignoreDisabled.includes(ruleName) &&
      loadedRules[ruleName]?.meta?.deprecated !== true &&
      !isRuleEnabled(canonicalRules[ruleName]?.[0]) &&
      (
        isRuleEnabled(airbnbRules[ruleName]?.[0]) ||
        isRuleEnabled(googleRules[ruleName]?.[0]) ||
        isRuleEnabled(standardRules[ruleName]?.[0]) ||
        isRuleEnabled(xoRules[ruleName]?.[0])
      )
    ) {
      console.warn('disabled rule "' + ruleName + '"', {
        airbnb: airbnbRules[ruleName],
        canonical: canonicalRules[ruleName],
        google: googleRules[ruleName],
        standard: standardRules[ruleName],
        xo: xoRules[ruleName],
      });
    }
  }

  for (const ruleName of ruleNames) {
    if (
      loadedRules[ruleName]?.meta?.deprecated !== true &&
      !canonicalRules[ruleName]
    ) {
      console.warn('unused rule "' + ruleName + '"', {
        airbnb: airbnbRules[ruleName],
        google: googleRules[ruleName],
        standard: standardRules[ruleName],
        xo: xoRules[ruleName],
      });
    }
  }

  for (const ruleName of ruleNames) {
    if (
      loadedRules[ruleName]?.meta?.deprecated &&
      canonicalRules[ruleName]
    ) {
      console.warn('deprecated rule "' + ruleName + '"');
    }
  }

  console.log('Canonical rules: ' + Object.keys(canonicalRules).length);
  console.log('Airbnb rules: ' + Object.keys(airbnbRules).length);
  console.log('Google rules: ' + Object.keys(googleRules).length);
  console.log('Standard rules: ' + Object.keys(standardRules).length);
  console.log('XO rules: ' + Object.keys(xoRules).length);
})();
