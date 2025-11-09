import reactHooksPlugin from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';

export const recommended = defineConfig({
  files: ['**/*.{js,jsx,ts,tsx}'],
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    // @ts-expect-error - not properly typed
    'react-hooks': reactHooksPlugin,
  },
  rules: {
    'react-hooks/component-hook-factories': 2,
    'react-hooks/error-boundaries': 2,
    'react-hooks/exhaustive-deps': 2,
    'react-hooks/immutability': 2,
    'react-hooks/preserve-manual-memoization': 2,
    'react-hooks/purity': 2,
    'react-hooks/refs': 2,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/set-state-in-effect': 2,
    'react-hooks/set-state-in-render': 2,
    'react-hooks/static-components': 2,
    'react-hooks/unsupported-syntax': 2,
    'react-hooks/use-memo': 2,
  },
});
