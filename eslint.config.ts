import auto from './configurations/auto';
import * as ava from './configurations/ava';
import * as node from './configurations/node';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  node.recommended,
  ...auto,
  ava.recommended,
  {
    rules: {
      'n/global-require': 0,
    },
  },
  {
    ignores: ['**/package-lock.json', '**/pnpm-lock.yaml', '**/dist'],
  },
);
