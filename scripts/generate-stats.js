import {
  getAutoRules,
  getCanonicalRules,
  getLoadedRules,
  isRuleFixable,
} from './utilities.js';

const formatRuleStats = (label, rules, loadedRules) => {
  const configuredRuleNames = Object.keys(rules);
  const fixableRuleCount = configuredRuleNames.filter((ruleName) => {
    return isRuleFixable(loadedRules[ruleName]);
  }).length;
  const configuredCount = configuredRuleNames.length;
  const fixablePercent =
    configuredCount === 0
      ? 0
      : Math.round((fixableRuleCount / configuredCount) * 100);

  return `${label}: ${configuredCount} (${fixablePercent}% auto-fixable)`;
};

const [autoRules, canonicalRules, loadedRules] = await Promise.all([
  getAutoRules(),
  getCanonicalRules(),
  getLoadedRules(),
]);

console.log(formatRuleStats('Auto rules', autoRules, loadedRules));
console.log(
  formatRuleStats('All configurations', canonicalRules, loadedRules),
);
