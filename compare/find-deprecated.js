/**
 * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/825
 * https://github.com/eslint/eslint/issues/15292
 */

const got = require('got');

const { getLoadedRules } = require('./utilities');

(async () => {
  const loadedRules = await getLoadedRules();

  const ruleNames = Object.keys(loadedRules);

  for (const ruleName of ruleNames) {
    if (loadedRules[ruleName]?.meta?.deprecated) {
      continue;
    }

    const ruleDocumentationUrl = loadedRules[ruleName]?.meta?.docs?.url;

    if (!ruleDocumentationUrl) {
      continue;
    }

    const response = await got(ruleDocumentationUrl, {
      resolveBodyOnly: true,
    });

    if (response.toLowerCase().includes('deprecated')) {
      // eslint-disable-next-line no-console
      console.warn(
        '⚠️  ' +
          ruleName +
          ' suspected improperly deprecated rule (' +
          ruleDocumentationUrl +
          ')',
      );
    }
  }
})();
