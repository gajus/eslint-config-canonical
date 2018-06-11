expect.extend({
  toHaveRuleDefinition (received, expected) {
    const pass = Boolean(received.get(expected));
    const message = pass ?
      () => this.utils.matcherHint('.not.toHaveRuleDefinition') + `\n\nRule "${expected}" should not be valid` :
      () => this.utils.matcherHint('.toHaveRuleDefinition') + `\n\nRule "${expected}" is not a valid`;

    return {
      actual: received,
      message,
      pass
    };
  }
});
