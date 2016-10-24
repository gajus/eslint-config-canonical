# Canonical ESLint Config

[![Travis build status](http://img.shields.io/travis/gajus/eslint-config-canonical/master.svg?style=flat-square)](https://travis-ci.org/gajus/eslint-config-canonical)
[![NPM version](http://img.shields.io/npm/v/eslint-config-canonical.svg?style=flat-square)](https://www.npmjs.org/package/eslint-config-canonical)

Canonical is the most comprehensive code style guide. It consists of more than 800 rules, some of which are custom written for Canonical (e.g. [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc), [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype)).

The goal of the Canonical style guide is to reduce noise in code version control and promote use of the latest ES features.

## Usage

This package includes the following configurations:

* [`canonical`](./configurations/eslintrc.json) – The Canonical code style guide.
* [`canonical/lodash`](./configurations/lodash.json) – To be used in addition to "canonical" configuration by projects that use [lodash](https://lodash.com/).

Example:

```json
{
  "extends": [
    "canonical",
    "canonical/lodash"
  ]
}
```
