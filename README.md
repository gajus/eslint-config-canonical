# Canonical ESLint Config

[![Travis build status](http://img.shields.io/travis/gajus/eslint-config-canonical/master.svg?style=flat-square)](https://app.travis-ci.com/github/gajus/eslint-config-canonical)
[![NPM version](http://img.shields.io/npm/v/eslint-config-canonical.svg?style=flat-square)](https://www.npmjs.org/package/eslint-config-canonical)

The most comprehensive code style guide.

Canonical consists of 1,000+ rules (40% auto-fixable), some of which are [custom written](https://github.com/gajus/eslint-plugin-canonical) for Canonical. Canonical goal is to reduce noise in code version control and promote use of the latest ES features.

## Usage

Most projects should simply extend from [`canonical/auto`](#canonicalauto-ruleset):

```ts
// eslint.config.js
import auto from 'eslint-config-canonical/configurations/auto';

export default [
  ...auto
];
```

## Rulesets

> **Note** Most projects should just use [`canonical/auto`](#canonicalauto-ruleset) and override settings when necessary for individual frameworks or file patterns (e.g. vitest vs ava).

This package includes the following rulesets:

* [`canonical`](./configurations/eslintrc.js) – The Canonical code style guide.
* [`canonical/ava`](./configurations/ava.js) – for projects that use [AVA](https://ava.li/).
* [`canonical/browser`](./configurations/browser.js) – for projects that use DOM and other browser APIs.
* [`canonical/cypress`](./configurations/cypress.js) – for projects that use [Cypress](https://cypress.io/).
* [`canonical/flowtype`](./configurations/flowtype.js) – for projects that use [Flowtype](https://flowtype.org/).
* [`canonical/graphql`](./configurations/graphql.js) – for projects that use [GraphQL](https://graphql.org/).
* [`canonical/jest`](./configurations/jest.js) – for projects that use [jest](https://facebook.github.io/jest/).
* [`canonical/jsdoc`](./configurations/jsdoc.js) – for projects that use [JSDoc](https://jsdoc.app/).
* [`canonical/json`](./configurations/json.js) – for projects that use JSON.
* [`canonical/jsx-a11y`](./configurations/jsx-a11y.js) – for projects that use [React](https://facebook.github.io/react/) and want to include [accessibility checks](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y).
* [`canonical/lodash`](./configurations/lodash.js) – for projects that use [lodash](https://lodash.com/).
* [`canonical/mocha`](./configurations/mocha.js) – for projects that use [Mocha](https://mochajs.org/).
* [`canonical/module`](./configurations/module.js) – for projects that use ESM modules.
* [`canonical/next`](./configurations/next.js) – for projects that use [Next.js](https://nextjs.org/).
* [`canonical/node`](./configurations/node.js) – for projects that use Node.js.
* [`canonical/prettier`](./configurations/prettier.js) – applies [Prettier](https://prettier.io/) formatting.
* [`canonical/react`](./configurations/react.js) – for projects that use [React](https://facebook.github.io/react/).
* [`canonical/regexp`](./configurations/regexp.js) – for projects that use regular expressions.
* [`canonical/typescript-type-checking`](./configurations/typescript-type-checking.js) – for projects that use [TypeScript](http://typescriptlang.org/) and want additional rules that require type information (rules using type information take longer to run).
* [`canonical/typescript`](./configurations/typescript.js) – for projects that use [TypeScript](http://typescriptlang.org/).
* [`canonical/vitest`](./configurations/vitest.js) – for projects that use [Vitest](https://vitest.dev/).
* [`canonical/yaml`](./configurations/yaml.js) – for projects that use YAML.
* [`canonical/zod`](./configurations/zod.js) – for projects that use [Zod](https://github.com/colinhacks/zod).

## `canonical/auto` ruleset

[`canonical/auto`](./configurations/auto.js) is a special ruleset that uses [overrides](https://eslint.org/docs/user-guide/configuring/configuration-files#how-do-overrides-work) to only apply relevant style guides. This reduces the linting time and the number of false-positives.

`canonical/auto` can be fine-tuned using `overrides` just like any other ESLint ruleset, e.g.

```json
{
  "extends": [
    "canonical/auto"
  ],
  "overrides": [
    {
      "extends": [
        "canonical/jsx-a11y"
      ],
      "files": "*.tsx"
    },
    {
      "extends": [
        "canonical/vitest"
      ],
      "files": "*.test.{ts,tsx}"
    }
  ],
  "root": true
}
```

### Compatibility with Prettier

For the most part, Prettier and Canonical are already compatible. There are only a few transformations that are incompatible, e.g. Prettier enforces line-length and Canonical does not. As such, there is no good reason to use both. However, if you wish to use Prettier, you can do so by using `canonical/prettier` ruleset, which uses [`eslint-plugin-prettier`](https://www.npmjs.com/package/eslint-plugin-prettier) to apply Prettier formatting after applying Canonical rules.

```json
{
  "extends": [
    "canonical",
    "canonical/jsdoc",
    "canonical/regexp",
    "canonical/react",
    "canonical/typescript",
    "canonical/jest",
    "canonical/prettier"
  ]
}
```

> **Note** The reason for using Prettier as an ESLint plugin (as opposed to a separate tool) is because having multiple tools that apply formatting complicates IDE and other tooling setup.

> **Note** Your local `.prettierrc` is going to be ignored when using `canonical/prettier`.

### Compatibility with other style guides

Since Canonical style guide includes more rules than any other style guide, you can have your codebase compatible with a specific style guide (e.g. [airbnb](https://www.npmjs.com/package/eslint-config-airbnb)) and benefit from Canonical for rules that are not covered by the other guide. All you have to do is extend from the Canonical style guide before extending from the desired style guide, e.g.

```json
{
  "extends": [
    "canonical",
    "canonical/jsdoc",
    "canonical/regexp",
    "canonical/react",
    "airbnb"
  ]
}
```

## Integrations

### Visual Studio Code

Use the [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension that Microsoft provides officially.

Example `.vscode/settings.json`:

```json
{
  "eslint.validate": [
    "css",
    "html",
    "javascript",
    "javascriptreact",
    "json",
    "markdown",
    "typescript",
    "typescriptreact",
    "yaml"
  ]
}
```

The setting below turns on _Auto Fix_ for all providers including ESLint:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.formatOnSave": true
}
```

Additionally, we found it that being explicit about which formatter you are using for each file improves DX:

```json
{
  "[css][html][javascript][javascriptreact][json][markdown][typescript][typescriptreact][yaml]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  }
}
```

While not required if you've configured explicit formatter for each file type, I advise that you explicitly disable `prettier` extension in your project:

```json
{
  "prettier.enable": false,
}
```

Sharing these settings in your project should be sufficient to prevent local settings accidentally overriding the desired formatter behavior.

## Benchmark

### Canonical vs Prettier

This benchmark compares running ESLint using Canonical style guide against a project with 3,000+ files VS linting the same project using Prettier.

```
System:
  OS: macOS 11.6
  CPU: (16) x64 Intel(R) Core(TM) i9-9980HK CPU @ 2.40GHz
  Memory: 64.00 GB
npmPackages:
  eslint: 8.1.0
  prettier: 2.4.1
```

As you may expect, Prettier is going to complete checks quicker – this is because it runs a lot fewer transforms and it only runs style checks (as opposed to static analyses).

The first time you run ESLint, it will take significantly more time. However, if you enable [`--cache`](https://eslint.org/docs/user-guide/command-line-interface#--cache), then the follow up checks will complete in no time.

```bash
$ time prettier src
27.06s user
1.74s system
166% cpu
17.335 total

$ eslint --cache src
182.43s user
9.13s system
126% cpu
2:31.22 total

$ eslint --cache src
1.96s user
0.39s system
107% cpu
2.188 total
```

Using ESLint cache will dramatically improve ESLint running time by ensuring that only changed files are linted. This is useful if you are using ESLint to run `pre-commit` / `pre-push` [git hooks](https://git-scm.com/docs/githooks) or otherwise depend on these checks completing in real-time.

Additionally, if performance is a consideration, you may consider:

* [`jest-eslint-runner`](https://github.com/jest-community/jest-runner-eslint)
* [Integrations](#integrations)

These options provide near instant feedback just how you are used to when using Prettier.

## Table of Comparison

[COMPARISON_TABLE.md](./COMPARISON_TABLE.md)

## Versioning Policy

All breaking changes will bump the major version as per the semver convention. Therefore, every new rule addition will increase the major version.

## Development

First, run `npm install` and then `npm run setup-dev`. Then, any time that ESLint dependencies are updated you must:

1. Run `npm run generate-typescript-compatibility-rules` script. It disables and override any TypeScript rules that are incompatible with ESLint built-in rules.
1. Run `npm run compare` script. It generates ruleset comparison table, updates README.md, and identifies rules that are not configured.

## Incompatible rules

[INCOMPATIBLE_RULES.md](./INCOMPATIBLE_RULES.md)
