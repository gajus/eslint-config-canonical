/* eslint-disable no-console */

const {
  readFileSync,
  writeFileSync,
} = require('fs');
const {
  resolve,
} = require('path');
const {
  isRuleEnabled,
  getRuleLink,
  getRuleConfiguration,
  getConfigurationRules,
  getLoadedRules,
} = require('./utilities');

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

  const markdownLines = [
    '<!-- START compare -->',
    '|Rule|CN|[AB](https://www.npmjs.com/package/eslint-config-airbnb)|[GG](https://www.npmjs.com/package/eslint-config-google)|[SD](https://www.npmjs.com/package/eslint-config-standard)|[XO](https://github.com/xojs/eslint-config-xo)|',
    '|---|---|---|---|---|---|',
  ];

  for (const ruleName of ruleNames) {
    markdownLines.push(
      '|' + getRuleLink(ruleName) + (loadedRules[ruleName]?.meta?.fixable ? ' 🛠' : '') + (loadedRules[ruleName]?.meta?.deprecated ? ' ⛔️' : '') +
      '|' + getRuleConfiguration(canonicalRules, ruleName) +
      '|' + getRuleConfiguration(airbnbRules, ruleName) +
      '|' + getRuleConfiguration(googleRules, ruleName) +
      '|' + getRuleConfiguration(standardRules, ruleName) +
      '|' + getRuleConfiguration(xoRules, ruleName) +
      '|',
    );
  }

  markdownLines.push('<!-- END compare -->');

  const README_PATH = resolve(__dirname, '../README.md');

  writeFileSync(README_PATH, readFileSync(README_PATH, 'UTF-8').replace(/<!-- START compare -->[\S\s]+<!-- END compare -->/u, markdownLines.join('\n')));

  const ignoreDisabled = [
    'camelcase',
    'capitalized-comments',
    'class-methods-use-this',
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
    'no-else-return',
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
    'react/no-unescaped-entities',
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

  const ignoreUnused = [
    // Deprecated in documentation.
    // Not reflected in meta.
    'jsx-a11y/no-onchange',
  ];

  for (const ruleName of ruleNames) {
    if (
      !ignoreUnused.includes(ruleName) &&
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
