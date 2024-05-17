/* eslint-disable no-console */
/* eslint-disable complexity */

const { writeFile, readFile } = require('node:fs/promises');
const { resolve } = require('node:path');
const stringify = require('safe-stable-stringify');
const {
  isRuleEnabled,
  getRuleLink,
  getRuleConfiguration,
  getConfigurationRules,
  getLoadedRules,
  normalizeConfiguration,
} = require('./utilities');

const getIncompatibleRuleNames = (canonicalRules, comparedRules) => {
  const incompatibleRuleNames = [];

  for (const ruleName of Object.keys(comparedRules)) {
    if (!isRuleEnabled(comparedRules[ruleName]?.[0])) {
      continue;
    }

    const canonicalRuleConfiguration = stringify(
      normalizeConfiguration(canonicalRules[ruleName]),
      null,
      '  ',
    );
    const comparedRuleConfiguration = stringify(
      normalizeConfiguration(comparedRules[ruleName]),
      null,
      '  ',
    );

    if (canonicalRuleConfiguration === comparedRuleConfiguration) {
      continue;
    }

    incompatibleRuleNames.push(ruleName);
  }

  return incompatibleRuleNames;
};

const createIncompatibleRuleSummary = (
  urlSafeName,
  comparedName,
  canonicalRules,
  comparedRules,
) => {
  // We are ignoring these rules because their configuration is breaking table layout.
  const ignoreRuleNames = [
    'no-restricted-globals',
    'no-restricted-syntax',
    'capitalized-comments',
    'react/sort-comp',
    'no-restricted-properties',
  ];

  const rows = [];

  const incompatibleRuleNames = getIncompatibleRuleNames(
    canonicalRules,
    comparedRules,
  );

  for (const incompatibleRuleName of incompatibleRuleNames) {
    if (ignoreRuleNames.includes(incompatibleRuleName)) {
      continue;
    }

    const canonicalRuleConfiguration = stringify(
      normalizeConfiguration(canonicalRules[incompatibleRuleName]),
      null,
      '  ',
    );
    const comparedRuleConfiguration = stringify(
      normalizeConfiguration(comparedRules[incompatibleRuleName]),
      null,
      '  ',
    );

    rows.push(
      `
<tr>
  <th colspan="2" align="left">
    <code>${incompatibleRuleName}</code>
    (<a href="#rule-canonical-${incompatibleRuleName}">back to comparison table 👆</a>)
    <a id="rule-${urlSafeName}-${incompatibleRuleName}" />
  </th>
</tr>
<tr>
  <td><pre><code>${canonicalRuleConfiguration}</code></pre></td>
  <td><pre><code>${comparedRuleConfiguration}</code></pre></td>
</tr>
    `.trim(),
    );
  }

  return [
    '### ' + comparedName + ' Incompatible Rules',
    '<table>',
    ...rows,
    '</table>',
  ].join('\n');
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
      'canonical/next',
      'canonical/node',
      'canonical/react',
      'canonical/typescript',
      'canonical/yaml',

      // The order is important!
      // The last ruleset overrides rules in previous rulesets.
      // This affects rules that are overridden in specific configs, e.g.
      // typescript disabled no-duplicate-imports but enables @import/no-duplicates.
      'canonical',
    ],
  });

  const airbnbRules = await getConfigurationRules({
    extends: ['airbnb'],
  });

  const googleRules = await getConfigurationRules({
    extends: ['google'],
  });

  const standardRules = await getConfigurationRules({
    extends: ['standard'],
  });

  const xoRules = await getConfigurationRules({
    extends: ['xo'],
  });

  const ruleNames = Object.keys(loadedRules);

  const markdownLines = [
    '<!-- START compare -->',
    '|Rule|CN|[AB](https://www.npmjs.com/package/eslint-config-airbnb)|[GG](https://www.npmjs.com/package/eslint-config-google)|[SD](https://www.npmjs.com/package/eslint-config-standard)|[XO](https://github.com/xojs/eslint-config-xo)|',
    '|---|---|---|---|---|---|',
  ];

  let fixableRuleCount = 0;

  const airbnbIncompatibleRuleNames = getIncompatibleRuleNames(
    canonicalRules,
    airbnbRules,
  );
  const googleIncompatibleRuleNames = getIncompatibleRuleNames(
    canonicalRules,
    googleRules,
  );
  const standardIncompatibleRuleNames = getIncompatibleRuleNames(
    canonicalRules,
    standardRules,
  );
  const xoIncompatibleRuleNames = getIncompatibleRuleNames(
    canonicalRules,
    xoRules,
  );

  for (const ruleName of ruleNames) {
    if (loadedRules[ruleName]?.meta?.fixable) {
      fixableRuleCount++;
    }

    markdownLines.push(
      '|' +
        getRuleLink(ruleName) +
        '<a id="rule-canonical-' +
        ruleName +
        '" />' +
        (loadedRules[ruleName]?.meta?.fixable ? ' 🛠' : '') +
        (loadedRules[ruleName]?.meta?.deprecated ? ' ⛔️' : '') +
        '|' +
        getRuleConfiguration(canonicalRules, ruleName) +
        '|' +
        getRuleConfiguration(airbnbRules, ruleName) +
        (airbnbIncompatibleRuleNames.includes(ruleName)
          ? '<a href="#rule-airbnb-' + ruleName + '">?</a>'
          : '') +
        '|' +
        getRuleConfiguration(googleRules, ruleName) +
        (googleIncompatibleRuleNames.includes(ruleName)
          ? '<a href="#rule-google-' + ruleName + '">?</a>'
          : '') +
        '|' +
        getRuleConfiguration(standardRules, ruleName) +
        (standardIncompatibleRuleNames.includes(ruleName)
          ? '<a href="#rule-standard-' + ruleName + '">?</a>'
          : '') +
        '|' +
        getRuleConfiguration(xoRules, ruleName) +
        (xoIncompatibleRuleNames.includes(ruleName)
          ? '<a href="#rule-xo-' + ruleName + '">?</a>'
          : '') +
        '|',
    );
  }

  markdownLines.push('<!-- END compare -->');

  const README_PATH = resolve(__dirname, '../COMPARISON_TABLE.md');

  await writeFile(
    README_PATH,
    (await readFile(README_PATH, 'utf8')).replace(
      /<!-- START compare -->[\s\S]+<!-- END compare -->/u,
      markdownLines.join('\n'),
    ),
  );

  await writeFile(
    README_PATH,
    (await readFile(README_PATH, 'utf8')).replace(
      /<!-- START incompatibleRules -->[\s\S]+<!-- END incompatibleRules -->/u,
      '<!-- START incompatibleRules -->\n' +
        [
          createIncompatibleRuleSummary(
            'airbnb',
            'AirBnb',
            canonicalRules,
            airbnbRules,
          ),
          createIncompatibleRuleSummary(
            'google',
            'Google',
            canonicalRules,
            googleRules,
          ),
          createIncompatibleRuleSummary(
            'standard',
            'Standard',
            canonicalRules,
            standardRules,
          ),
          createIncompatibleRuleSummary('xo', 'XO', canonicalRules, xoRules),
        ].join('\n\n') +
        '\n<!-- END incompatibleRules -->',
    ),
  );

  const ignoreDisabled = [
    'camelcase',
    'capitalized-comments',
    'class-methods-use-this',
    'import/named',
    'import/no-unresolved',
    'import/prefer-default-export',
    'jsx-a11y/control-has-associated-label',
    'jsx-a11y/lang',
    'jsx-a11y/no-autofocus',
    'max-classes-per-file',
    'max-depth',
    'max-len',
    'max-nested-callbacks',
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
      (isRuleEnabled(airbnbRules[ruleName]?.[0]) ||
        isRuleEnabled(googleRules[ruleName]?.[0]) ||
        isRuleEnabled(standardRules[ruleName]?.[0]) ||
        isRuleEnabled(xoRules[ruleName]?.[0]))
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
    if (loadedRules[ruleName]?.meta?.deprecated && canonicalRules[ruleName]) {
      console.warn('deprecated rule "' + ruleName + '"');
    }
  }

  console.log(
    'Canonical rules: ' +
      Object.keys(canonicalRules).length +
      ' (' +
      Math.round(
        (fixableRuleCount / Object.keys(canonicalRules).length) * 100,
      ) +
      '% auto-fixable)',
  );
  console.log('Airbnb rules: ' + Object.keys(airbnbRules).length);
  console.log('Google rules: ' + Object.keys(googleRules).length);
  console.log('Standard rules: ' + Object.keys(standardRules).length);
  console.log('XO rules: ' + Object.keys(xoRules).length);
})();
