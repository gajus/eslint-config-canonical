module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'jsx-a11y',
  ],
  rules: {
    'jsx-a11y/alt-text': 2,
    'jsx-a11y/anchor-has-content': 2,
    'jsx-a11y/anchor-is-valid': 2,
    'jsx-a11y/aria-activedescendant-has-tabindex': 2,
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/aria-proptypes': 2,
    'jsx-a11y/aria-role': 2,
    'jsx-a11y/aria-unsupported-elements': 2,
    'jsx-a11y/autocomplete-valid': 2,
    'jsx-a11y/click-events-have-key-events': 2,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/heading-has-content': 2,
    'jsx-a11y/html-has-lang': 2,
    'jsx-a11y/iframe-has-title': 2,
    'jsx-a11y/img-redundant-alt': 2,
    'jsx-a11y/interactive-supports-focus': [
      2,
      {
        tabbable: [
          'button',
          'checkbox',
          'link',
          'searchbox',
          'spinbutton',
          'switch',
          'textbox',
        ],
      },
    ],
    'jsx-a11y/label-has-associated-control': 2,
    'jsx-a11y/lang': 0,
    'jsx-a11y/media-has-caption': 2,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/no-access-key': 2,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-distracting-elements': 2,
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [
      2,
      {
        canvas: [
          'img',
        ],
        tr: [
          'none',
          'presentation',
        ],
      },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': [
      2,
      {
        alert: [
          'onKeyUp',
          'onKeyDown',
          'onKeyPress',
        ],
        body: [
          'onError',
          'onLoad',
        ],
        dialog: [
          'onKeyUp',
          'onKeyDown',
          'onKeyPress',
        ],
        handlers: [
          'onClick',
          'onError',
          'onLoad',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
        iframe: [
          'onError',
          'onLoad',
        ],
        img: [
          'onError',
          'onLoad',
        ],
      },
    ],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      2,
      {
        fieldset: [
          'radiogroup',
          'presentation',
        ],
        li: [
          'menuitem',
          'option',
          'row',
          'tab',
          'treeitem',
        ],
        ol: [
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'tablist',
          'tree',
          'treegrid',
        ],
        table: [
          'grid',
        ],
        td: [
          'gridcell',
        ],
        ul: [
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'tablist',
          'tree',
          'treegrid',
        ],
      },
    ],
    'jsx-a11y/no-noninteractive-tabindex': [
      2,
      {
        allowExpressionValues: true,
        roles: [
          'tabpanel',
        ],
        tags: [],
      },
    ],
    'jsx-a11y/no-redundant-roles': 2,
    'jsx-a11y/no-static-element-interactions': [
      2,
      {
        allowExpressionValues: true,
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'jsx-a11y/scope': 2,
    'jsx-a11y/tabindex-no-positive': 2,
  },
};
