module.exports = {
  overrides: [
    {
      extends: [
        'canonical',
        'canonical/regexp',
        'canonical/jsdoc',
        'canonical/node',
        'canonical/prettier',
      ],
      files: ['*.js', '*.mjs', '*.cjs'],
    },
    {
      extends: [
        'canonical',
        'canonical/regexp',
        'canonical/jsdoc',
        'canonical/node',
        'canonical/typescript',
        'canonical/prettier',
      ],
      files: ['*.ts'],
    },
    {
      extends: [
        'canonical',
        'canonical/regexp',
        'canonical/jsdoc',
        'canonical/react',
        'canonical/typescript',
        'canonical/prettier',
      ],
      files: ['*.tsx'],
    },
    {
      extends: ['canonical/json'],
      files: '*.json',
    },
    {
      extends: ['canonical/yaml'],
      files: '*.yaml',
    },
    {
      extends: ['canonical/graphql'],
      files: '*.graphql',
    },
  ],
};
