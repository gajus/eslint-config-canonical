# Canonical ESLint Config

[![NPM version](http://img.shields.io/npm/v/eslint-config-canonical.svg?style=flat-square)](https://www.npmjs.org/package/eslint-config-canonical)

The most comprehensive code style guide.

Canonical consists of 1,100+ rules (30% auto-fixable), some of which are [custom written](https://github.com/gajus/eslint-plugin-canonical) for Canonical. Canonical goal is to reduce noise in code version control and promote use of the latest ES features.

## Usage

Most projects should simply extend from [`canonical/auto`](#canonicalauto-ruleset):

```ts
// eslint.config.ts
import { defineConfig } from 'eslint/config';
import auto from 'eslint-config-canonical/auto';

export default defineConfig(auto);
```

## Rulesets

> **Note** Most projects should just use [`canonical/auto`](#canonicalauto-ruleset) and override settings when necessary for individual frameworks or file patterns (e.g. vitest vs ava).

This package includes the following rulesets:

- [`canonical/auto`](./configurations/auto.ts) – The Canonical code style guide.
- [`canonical/ava`](./configurations/ava.ts) – for projects that use [AVA](https://ava.li/).
- [`canonical/browser`](./configurations/browser.ts) – for projects that use DOM and other browser APIs.
- [`canonical/graphql`](./configurations/graphql.ts) – for projects that use [GraphQL](https://graphql.org/).
- [`canonical/jest`](./configurations/jest.ts) – for projects that use [jest](https://facebook.github.io/jest/).
- [`canonical/jsdoc`](./configurations/jsdoc.ts) – for projects that use [JSDoc](https://jsdoc.app/).
- [`canonical/json`](./configurations/json.ts) – for projects that use JSON.
- [`canonical/jsx-a11y`](./configurations/jsx-a11y.ts) – for projects that use [React](https://facebook.github.io/react/) and want to include [accessibility checks](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y).
- [`canonical/lodash`](./configurations/lodash.ts) – for projects that use [lodash](https://lodash.com/).
- [`canonical/mocha`](./configurations/mocha.ts) – for projects that use [Mocha](https://mochajs.org/).
- [`canonical/module`](./configurations/module.ts) – for projects that use ESM modules.
- [`canonical/next`](./configurations/next.ts) – for projects that use [Next.js](https://nextjs.org/).
- [`canonical/node`](./configurations/node.ts) – for projects that use Node.js.
- [`canonical/prettier`](./configurations/prettier.ts) – applies [Prettier](https://prettier.io/) formatting.
- [`canonical/react`](./configurations/react.ts) – for projects that use [React](https://facebook.github.io/react/).
- [`canonical/react-hooks`](./configurations/react-hooks.ts) – for projects that use [React Hooks](https://react.dev/reference/react/hooks).
- [`canonical/regexp`](./configurations/regexp.ts) – for projects that use regular expressions.
- [`canonical/typescript-type-checking`](./configurations/typescript-type-checking.ts) – for projects that use [TypeScript](http://typescriptlang.org/) and want additional rules that require type information (rules using type information take longer to run).
- [`canonical/typescript`](./configurations/typescript.ts) – for projects that use [TypeScript](http://typescriptlang.org/).
- [`canonical/vitest`](./configurations/vitest.ts) – for projects that use [Vitest](https://vitest.dev/).
- [`canonical/yaml`](./configurations/yaml.ts) – for projects that use YAML.
- [`canonical/zod`](./configurations/zod.ts) – for projects that use [Zod](https://github.com/colinhacks/zod).

## `canonical/auto` ruleset

[`canonical/auto`](./configurations/auto.ts) is a special ruleset that uses a set of predefined scoped rulesets to only apply relevant style guides. This reduces the linting time and the number of false-positives.

`canonical/auto` can be fine-tuned using [`files` and `ignores`](https://eslint.org/docs/latest/use/configure/configuration-files#specify-files-and-ignores) just like any other ESLint ruleset, e.g.

```ts
import { defineConfig } from "eslint/config";
import auto from "eslint-config-canonical/auto";

export default defineConfig(auto, {
  files: ["**/*.{ts,tsx}"],
  rules: { "canonical/prefer-inline-type-import": 0 },
});
```

### Compatibility with Prettier

For the most part, Prettier and Canonical are already compatible. There are only a few transformations that are incompatible, e.g. Prettier enforces line-length and Canonical does not. As such, there is no good reason to use both. However, if you wish to use Prettier, you can do so by using `canonical/prettier` ruleset, which uses [`eslint-plugin-prettier`](https://www.npmjs.com/package/eslint-plugin-prettier) to apply Prettier formatting after applying Canonical rules.

```ts
import { defineConfig } from "eslint/config";
import auto from "eslint-config-canonical/auto";
import { recommended as prettier } from "eslint-config-canonical/prettier";

export default defineConfig(auto, prettier);
```

> **Note** The reason for using Prettier as an ESLint plugin (as opposed to a separate tool) is because having multiple tools that apply formatting complicates IDE and other tooling setup.

> **Note** Your local `.prettierrc` is going to be ignored when using `canonical/prettier`.

### Compatibility with other style guides

Since Canonical style guide includes more rules than any other style guide, you can have your codebase compatible with a specific style guide (e.g. [airbnb](https://www.npmjs.com/package/eslint-config-airbnb)) and benefit from Canonical for rules that are not covered by the other guide. All you have to do is extend from the Canonical style guide before extending from the desired style guide, e.g.

```ts
import { defineConfig } from "eslint/config";
import eslintConfigESLint from "eslint-config-eslint";
import { recommended as vitest } from "eslint-config-canonical/vitest";
import { recommended as zod } from "eslint-config-canonical/zod";

export default defineConfig(
  eslintConfigESLint,
  {
    files: [
      "**/*.?(component-){spec,test}.{js,mjs,cjs,jsx}",
      "**/{__mocks__,__tests__}/**/*.{js,mjs,cjs,jsx}",
      "**/vitest.config.{js,mjs,cjs}",
    ],
    extends: vitest,
  },
  { files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"], extends: zod },
);
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
  "editor.codeActionsOnSave": { "source.fixAll.eslint": true },
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
{ "prettier.enable": false }
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

- [`jest-eslint-runner`](https://github.com/jest-community/jest-runner-eslint)
- [Integrations](#integrations)

These options provide near instant feedback just how you are used to when using Prettier.

## Versioning Policy

All breaking changes will bump the major version as per the semver convention. Therefore, every new rule addition will increase the major version.

## Development

First, run `npm install` and then `npm run setup-dev`. Then, any time that ESLint dependencies are updated, run `npm run generate-typescript-compatibility-rules`.

### Scripts

| Script                                               | Description                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run setup-dev`                                  | Builds the package, links it locally, installs `scripts/` dependencies, and links `eslint-config-canonical` into `scripts/` so maintenance tools can import the local configs.                                                                                                           |
| `npm run generate-typescript-compatibility-rules` | Regenerates `configurations/typescript-compatibility.ts`: for each `@typescript-eslint` rule that `extendsBaseRule`, disables the core ESLint rule and applies Canonical's configuration to the TypeScript equivalent, then runs `eslint --fix` on the file. Run this after updating ESLint or TypeScript-ESLint dependencies. |
| `npm run generate-stats`                             | Prints configured rule counts and the share of rules that are auto-fixable (auto config vs all configurations).                                                                                                                                                                          |
| `npm run find-deprecated`                            | Scans loaded rule docs for rules that look deprecated in documentation but are not marked deprecated in rule metadata.                                                                                                                                                                   |
