import auto from './configurations/auto.js';
import * as ava from './configurations/ava.js';
import * as node from './configurations/node.js';
import { defineConfig } from 'eslint/config';

export default defineConfig(
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
