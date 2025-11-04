import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export const recommended = tseslint.config({
  files: ['**/*.{js,jsx,ts,tsx}'],
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
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
