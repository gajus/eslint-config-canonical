const {
  ESLint,
} = require('eslint');

const getRules = async (configuration) => {
  const engine = new ESLint({
    baseConfig: configuration,
    useEslintrc: false,
  });

  return (await engine.calculateConfigForFile('./compare')).rules;
};

(async () => {
  const canonicalRules = await getRules({
    extends: [
      'canonical',
      'canonical/ava',
      'canonical/flowtype',
      'canonical/jest',
      'canonical/lodash',
      'canonical/mocha',
      'canonical/react',
      'canonical/typescript',
    ],
  });

  const airbnbRules = await getRules({
    extends: [
      'airbnb',
    ],
  });

  const googleRules = await getRules({
    extends: [
      'google',
    ],
  });

  const standardRules = await getRules({
    extends: [
      'standard',
    ],
  });

  const ruleNames = [
    ...new Set([
      ...Object.keys(canonicalRules),
      ...Object.keys(airbnbRules),
      ...Object.keys(googleRules),
      ...Object.keys(standardRules),
    ]),
  ]
    .sort();

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

    if (ruleName.startsWith('unicorn/')) {
      return '[`' + ruleName + '`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/' + ruleName.replace(/^unicorn\//, '') + '.md)';
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
