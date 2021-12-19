try {
  // eslint-disable-next-line import/no-unassigned-import
  require('@rushstack/eslint-patch/modern-module-resolution');
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error);
}

module.exports = require('./configurations/eslintrc');
