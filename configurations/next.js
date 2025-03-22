import nextPlugin from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';

export const recommended = tseslint.config({
  plugins: {
    next: nextPlugin,
  },
  rules: {
    'next/google-font-display': 1,
    'next/google-font-preconnect': 1,
    'next/inline-script-id': 2,
    'next/link-passhref': 1,
    'next/next-script-for-ga': 1,
    'next/no-css-tags': 1,
    'next/no-document-import-in-page': 2,
    'next/no-duplicate-head': 2,
    'next/no-head-import-in-document': 2,
    'next/no-html-link-for-pages': 1,
    'next/no-img-element': 1,
    'next/no-page-custom-font': 1,
    'next/no-script-in-document': 2,
    'next/no-script-in-head': 2,
    'next/no-server-import-in-page': 2,
    'next/no-sync-scripts': 1,
    'next/no-title-in-document-head': 1,
    'next/no-typos': 1,
    'next/no-unwanted-polyfillio': 1,
  },
});
