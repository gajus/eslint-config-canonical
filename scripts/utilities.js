import { existsSync, realpathSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { builtinRules } from 'eslint/use-at-your-own-risk';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));

const resolveCanonicalPackageRoot = () => {
  const candidates = [
    join(scriptDirectory, 'node_modules/eslint-config-canonical'),
    join(scriptDirectory, '../node_modules/eslint-config-canonical'),
  ];

  for (const candidate of candidates) {
    if (existsSync(candidate)) {
      return realpathSync(candidate);
    }
  }

  throw new Error(
    'eslint-config-canonical is not linked. Run `npm run setup-dev` first.',
  );
};

const requireFromCanonical = createRequire(
  join(resolveCanonicalPackageRoot(), 'package.json'),
);

const flattenConfig = (configuration) => {
  return [configuration].flat(Infinity).filter((block) => {
    return block && typeof block === 'object';
  });
};

const getPluginNamesFromFlatConfig = (flatConfig) => {
  const pluginNames = new Set();

  for (const block of flattenConfig(flatConfig)) {
    if (!block.plugins) {
      continue;
    }

    for (const pluginName of Object.keys(block.plugins)) {
      pluginNames.add(pluginName);
    }
  }

  return [...pluginNames];
};

const getRulesFromFlatConfig = (flatConfig) => {
  const rules = {};

  for (const block of flattenConfig(flatConfig)) {
    if (!block.rules) {
      continue;
    }

    Object.assign(rules, block.rules);
  }

  return rules;
};

const getPluginPackageName = (pluginName) => {
  if (pluginName.startsWith('@')) {
    // @scope or @scope/name -> @scope/eslint-plugin[-name]
    const [scope, name] = pluginName.split('/');

    if (name) {
      return `${scope}/eslint-plugin-${name}`;
    }

    return `${scope}/eslint-plugin`;
  }

  return 'eslint-plugin-' + pluginName;
};

const getPluginRules = (pluginName) => {
  const plugin = requireFromCanonical(getPluginPackageName(pluginName));
  const rules = plugin.rules || {};

  return Object.fromEntries(
    Object.entries(rules).map(([ruleName, ruleConfiguration]) => {
      return [pluginName + '/' + ruleName, ruleConfiguration];
    }),
  );
};

export const canonicalConfigurationNames = [
  'canonical',
  'ava',
  'browser',
  'jest',
  'json',
  'jsx-a11y',
  'lodash',
  'mocha',
  'module',
  'next',
  'node',
  'react',
  'react-hooks',
  'typescript',
  'yaml',
  'graphql',
  'jsdoc',
  'prettier',
  'regexp',
  'vitest',
  'zod',
];

export const loadCanonicalRecommended = async (name) => {
  const subpath = name === 'canonical' ? 'canonical' : name;

  try {
    const mod = await import(`eslint-config-canonical/${subpath}`);

    return flattenConfig(mod.recommended ?? mod.default);
  } catch (error) {
    throw new Error(
      `Could not load eslint-config-canonical/${subpath}. Run \`npm run setup-dev\` and \`npm run build\` first.`,
      { cause: error },
    );
  }
};

export const getCanonicalRules = async () => {
  const rules = {};

  for (const configurationName of canonicalConfigurationNames) {
    const flatConfig = await loadCanonicalRecommended(configurationName);

    Object.assign(rules, getRulesFromFlatConfig(flatConfig));
  }

  return rules;
};

export const getAutoRules = async () => {
  const flatConfig = await loadCanonicalRecommended('auto');

  return getRulesFromFlatConfig(flatConfig);
};

export const getLoadedRules = async () => {
  const usedPluginNames = new Set();

  for (const configurationName of canonicalConfigurationNames) {
    const flatConfig = await loadCanonicalRecommended(configurationName);

    for (const pluginName of getPluginNamesFromFlatConfig(flatConfig)) {
      usedPluginNames.add(pluginName);
    }
  }

  let loadedRules = {
    ...Object.fromEntries(builtinRules),
  };

  for (const usedPluginName of usedPluginNames) {
    try {
      loadedRules = {
        ...loadedRules,
        ...getPluginRules(usedPluginName),
      };
    } catch (error) {
      // Some plugin keys (e.g. language plugins) are not require()-able packages.
      if (error.code !== 'MODULE_NOT_FOUND') {
        throw error;
      }
    }
  }

  return Object.fromEntries(
    Object.entries(loadedRules).toSorted((a, b) => {
      return a[0].localeCompare(b[0]);
    }),
  );
};

export const isRuleEnabled = (ruleValue) => {
  if (Array.isArray(ruleValue)) {
    return isRuleEnabled(ruleValue[0]);
  }

  return (
    ruleValue === 1 ||
    ruleValue === 'warn' ||
    ruleValue === 2 ||
    ruleValue === 'error'
  );
};

export const isRuleFixable = (rule) => {
  return Boolean(rule?.meta?.fixable);
};
