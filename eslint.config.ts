import auto from './configurations/auto.js';
import * as ava from './configurations/ava.js';
import * as node from './configurations/node.js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  node.recommended,
  ...auto,
  ava.recommended,
  {
    rules: {
      'canonical/filename-match-regex': 0,
      'n/global-require': 0,
    },
  },
  {
    ignores: ['**/package-lock.json', '**/pnpm-lock.yaml', '**/dist', '**/.*'],
  },
);
