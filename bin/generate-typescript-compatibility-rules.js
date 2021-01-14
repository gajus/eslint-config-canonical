const fs = require('fs');
const path = require('path');

const incompatibleRules = [
  'brace-style',
  'comma-dangle',
  'comma-spacing',
  'default-param-last',
  'dot-notation',
  'func-call-spacing',
  'indent',
  'init-declarations',
  'keyword-spacing',
  'lines-between-class-members',
  'no-array-constructor',
  'no-dupe-class-members',
  'no-duplicate-imports',
  'no-empty-function',
  'no-extra-parens',
  'no-extra-semi',
  'no-implied-eval',
  'no-invalid-this',
  'no-loop-func',
  'no-loss-of-precision',
  'no-magic-numbers',
  'no-redeclare',
  'no-shadow',
  'no-throw-literal',
  'no-unused-expressions',
  'no-unused-vars',
  'no-use-before-define',
  'no-useless-constructor',
  'quotes',
  'require-await',
  'return-await',
  'semi',
  'space-before-function-paren',
  'space-infix-ops',
];

const eslintConfiguration = require('../configurations/eslintrc.json');

const appendRules = {};

for (const incompatibleRule of incompatibleRules) {
  appendRules[incompatibleRule] = 0;

  if (eslintConfiguration.rules[incompatibleRule]) {
    appendRules['@typescript-eslint/' + incompatibleRule] = eslintConfiguration.rules[incompatibleRule];
  }
}

console.log(JSON.stringify(appendRules));
