const {
  rules: typescriptRules,
} = require('@typescript-eslint/eslint-plugin');
const {
  builtinRules,
} = require('eslint/use-at-your-own-risk');

const builtinRuleNames = Object.keys(Object.fromEntries(builtinRules));
const typescriptRuleNames = Object.keys(typescriptRules);

const incompatibleRuleNames = [];

for (const typescriptRuleName of typescriptRuleNames) {
  if (builtinRuleNames.includes(typescriptRuleName)) {
    incompatibleRuleNames.push(typescriptRuleName);
  }
}

const eslintConfiguration = require('../configurations/eslintrc.json');

const appendRules = {};

for (const incompatibleRuleName of incompatibleRuleNames) {
  if (!eslintConfiguration.rules[incompatibleRuleName] === undefined) {
    continue;
  }

  appendRules[incompatibleRuleName] = 0;
  appendRules['@typescript-eslint/' + incompatibleRuleName] = eslintConfiguration.rules[incompatibleRuleName];
}

const orderedRules = Object.fromEntries(Object.entries(appendRules).sort());

// eslint-disable-next-line no-console -- CLI
console.log(JSON.stringify(orderedRules, '', '  '));
