import * as canonical from './canonical.js';
import * as graphql from './graphql.js';
import * as jsdoc from './jsdoc.js';
import * as json from './json.js';
import * as prettier from './prettier.js';
import * as reactHooks from './react-hooks.js';
import * as react from './react.js';
import * as regexp from './regexp.js';
import * as typescript from './typescript.js';
import * as yaml from './yaml.js';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  jsdoc.recommended,
  canonical.recommended,
  typescript.recommended,
  regexp.recommended,
  react.recommended,
  reactHooks.recommended,
  prettier.recommended,
  json.recommended,
  yaml.recommended,
  graphql.recommended,
);
