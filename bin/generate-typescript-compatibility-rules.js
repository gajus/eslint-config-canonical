import eslintConfiguration from '../configurations/eslintrc';
import typescriptRules from '@typescript-eslint/eslint-plugin';
import { builtinRules } from 'eslint/use-at-your-own-risk';

const builtinRuleNames = Object.keys(Object.fromEntries(builtinRules));
const typescriptRuleNames = Object.keys(typescriptRules);

const incompatibleRuleNames = [];

for (const typescriptRuleName of typescriptRuleNames) {
  if (builtinRuleNames.includes(typescriptRuleName)) {
    incompatibleRuleNames.push(typescriptRuleName);
  }
}

const appendRules = {};

for (const incompatibleRuleName of incompatibleRuleNames) {
  if (!eslintConfiguration.rules[incompatibleRuleName] === undefined) {
    continue;
  }

  appendRules[incompatibleRuleName] = 0;
  appendRules['@typescript-eslint/' + incompatibleRuleName] =
    eslintConfiguration.rules[incompatibleRuleName];
}

const orderedRules = {
  rules: Object.fromEntries(Object.entries(appendRules).sort()),
};

// eslint-disable-next-line no-console
console.log('export default ' + JSON.stringify(orderedRules, '', '  '));
