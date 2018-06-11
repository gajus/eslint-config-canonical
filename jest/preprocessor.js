// this is here because eslint-plugin-ava and eslint-plugin-unicorn use require.extensions (something that was deprecated in Node v0.10.0)
// and Jest doesn't support that API. Basically this just sticks a mock to the top of the relevant file.
module.exports = {
  process(src, path) {
    return `
require.extensions = { '.js': function () {} };
${src}`
  },
}