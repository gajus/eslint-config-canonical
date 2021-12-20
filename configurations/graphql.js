module.exports = {
  parser: '@graphql-eslint/eslint-plugin',
  plugins: [
    '@graphql-eslint',
  ],
  rules: {
    '@graphql-eslint/input-name': 2,
    '@graphql-eslint/naming-convention': [
      2,
      {
        EnumTypeDefinition: 'PascalCase',
        EnumValueDefinition: 'UPPER_CASE',
        FieldDefinition: 'camelCase',
        InputObjectTypeDefinition: 'PascalCase',
        InputValueDefinition: 'camelCase',
        InterfaceTypeDefinition: 'PascalCase',
        leadingUnderscore: 'allow',
        ObjectTypeDefinition: 'PascalCase',
        ScalarTypeDefinition: 'PascalCase',
        UnionTypeDefinition: 'PascalCase',
      },
    ],
    '@graphql-eslint/no-case-insensitive-enum-values-duplicates': 2,
    '@graphql-eslint/no-hashtag-description': 2,
    '@graphql-eslint/require-deprecation-reason': 2,
  },
};
