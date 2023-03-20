# Incompatible rules

This section of the documentation highlights differences in configuration between individual rules in each ruleset.

For a high-level overview of differences between rulesets refer to the [Table of Comparison](#table-of-comparison).

<!-- START incompatibleRules -->
### AirBnb Incompatible Rules
<table>
<tr>
  <th colspan="2" align="left">
    <code>jsx-a11y/anchor-has-content</code>
    (<a href="#rule-canonical-jsx-a11y/anchor-has-content">back to comparison table 👆</a>)
    <a id="rule-airbnb-jsx-a11y/anchor-has-content" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "components": []
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>jsx-a11y/aria-role</code>
    (<a href="#rule-canonical-jsx-a11y/aria-role">back to comparison table 👆</a>)
    <a id="rule-airbnb-jsx-a11y/aria-role" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "ignoreNonDOM": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>jsx-a11y/alt-text</code>
    (<a href="#rule-canonical-jsx-a11y/alt-text">back to comparison table 👆</a>)
    <a id="rule-airbnb-jsx-a11y/alt-text" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "area": [],
    "elements": [
      "img",
      "object",
      "area",
      "input[type=\"image\"]"
    ],
    "img": [],
    "input[type=\"image\"]": [],
    "object": []
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>jsx-a11y/label-has-associated-control</code>
    (<a href="#rule-canonical-jsx-a11y/label-has-associated-control">back to comparison table 👆</a>)
    <a id="rule-airbnb-jsx-a11y/label-has-associated-control" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "assert": "both",
    "controlComponents": [],
    "depth": 25,
    "labelAttributes": [],
    "labelComponents": []
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>jsx-a11y/control-has-associated-label</code>
    (<a href="#rule-canonical-jsx-a11y/control-has-associated-label">back to comparison table 👆</a>)
    <a id="rule-airbnb-jsx-a11y/control-has-associated-label" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "controlComponents": [],
    "depth": 5,
    "ignoreElements": [
      "audio",
      "canvas",
      "embed",
      "input",
      "textarea",
      "tr",
      "video"
    ],
    "ignoreRoles": [
      "grid",
      "listbox",
      "menu",
      "menubar",
      "radiogroup",
      "row",
      "tablist",
      "toolbar",
      "tree",
      "treegrid"
    ],
    "labelAttributes": [
      "label"
    ]
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>jsx-a11y/interactive-supports-focus</code>
    (<a href="#rule-canonical-jsx-a11y/interactive-supports-focus">back to comparison table 👆</a>)
    <a id="rule-airbnb-jsx-a11y/interactive-supports-focus" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "tabbable": [
      "button",
      "checkbox",
      "link",
      "searchbox",
      "spinbutton",
      "switch",
      "textbox"
    ]
  }
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>jsx-a11y/heading-has-content</code>
    (<a href="#rule-canonical-jsx-a11y/heading-has-content">back to comparison table 👆</a>)
    <a id="rule-airbnb-jsx-a11y/heading-has-content" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "components": [
      ""
    ]
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>jsx-a11y/lang</code>
    (<a href="#rule-canonical-jsx-a11y/lang">back to comparison table 👆</a>)
    <a id="rule-airbnb-jsx-a11y/lang" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>jsx-a11y/no-distracting-elements</code>
    (<a href="#rule-canonical-jsx-a11y/no-distracting-elements">back to comparison table 👆</a>)
    <a id="rule-airbnb-jsx-a11y/no-distracting-elements" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "elements": [
      "marquee",
      "blink"
    ]
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>jsx-a11y/no-static-element-interactions</code>
    (<a href="#rule-canonical-jsx-a11y/no-static-element-interactions">back to comparison table 👆</a>)
    <a id="rule-airbnb-jsx-a11y/no-static-element-interactions" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "allowExpressionValues": true,
    "handlers": [
      "onClick",
      "onMouseDown",
      "onMouseUp",
      "onKeyPress",
      "onKeyDown",
      "onKeyUp"
    ]
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "handlers": [
      "onClick",
      "onMouseDown",
      "onMouseUp",
      "onKeyPress",
      "onKeyDown",
      "onKeyUp"
    ]
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>jsx-a11y/no-noninteractive-element-interactions</code>
    (<a href="#rule-canonical-jsx-a11y/no-noninteractive-element-interactions">back to comparison table 👆</a>)
    <a id="rule-airbnb-jsx-a11y/no-noninteractive-element-interactions" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "alert": [
      "onKeyUp",
      "onKeyDown",
      "onKeyPress"
    ],
    "body": [
      "onError",
      "onLoad"
    ],
    "dialog": [
      "onKeyUp",
      "onKeyDown",
      "onKeyPress"
    ],
    "handlers": [
      "onClick",
      "onError",
      "onLoad",
      "onMouseDown",
      "onMouseUp",
      "onKeyPress",
      "onKeyDown",
      "onKeyUp"
    ],
    "iframe": [
      "onError",
      "onLoad"
    ],
    "img": [
      "onError",
      "onLoad"
    ]
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "handlers": [
      "onClick",
      "onMouseDown",
      "onMouseUp",
      "onKeyPress",
      "onKeyDown",
      "onKeyUp"
    ]
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>jsx-a11y/no-autofocus</code>
    (<a href="#rule-canonical-jsx-a11y/no-autofocus">back to comparison table 👆</a>)
    <a id="rule-airbnb-jsx-a11y/no-autofocus" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "ignoreNonDOM": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>jsx-a11y/media-has-caption</code>
    (<a href="#rule-canonical-jsx-a11y/media-has-caption">back to comparison table 👆</a>)
    <a id="rule-airbnb-jsx-a11y/media-has-caption" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "audio": [],
    "track": [],
    "video": []
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>jsx-a11y/no-interactive-element-to-noninteractive-role</code>
    (<a href="#rule-canonical-jsx-a11y/no-interactive-element-to-noninteractive-role">back to comparison table 👆</a>)
    <a id="rule-airbnb-jsx-a11y/no-interactive-element-to-noninteractive-role" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "canvas": [
      "img"
    ],
    "tr": [
      "none",
      "presentation"
    ]
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "tr": [
      "none",
      "presentation"
    ]
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>jsx-a11y/no-noninteractive-element-to-interactive-role</code>
    (<a href="#rule-canonical-jsx-a11y/no-noninteractive-element-to-interactive-role">back to comparison table 👆</a>)
    <a id="rule-airbnb-jsx-a11y/no-noninteractive-element-to-interactive-role" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "fieldset": [
      "radiogroup",
      "presentation"
    ],
    "li": [
      "menuitem",
      "option",
      "row",
      "tab",
      "treeitem"
    ],
    "ol": [
      "listbox",
      "menu",
      "menubar",
      "radiogroup",
      "tablist",
      "tree",
      "treegrid"
    ],
    "table": [
      "grid"
    ],
    "td": [
      "gridcell"
    ],
    "ul": [
      "listbox",
      "menu",
      "menubar",
      "radiogroup",
      "tablist",
      "tree",
      "treegrid"
    ]
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "li": [
      "menuitem",
      "option",
      "row",
      "tab",
      "treeitem"
    ],
    "ol": [
      "listbox",
      "menu",
      "menubar",
      "radiogroup",
      "tablist",
      "tree",
      "treegrid"
    ],
    "table": [
      "grid"
    ],
    "td": [
      "gridcell"
    ],
    "ul": [
      "listbox",
      "menu",
      "menubar",
      "radiogroup",
      "tablist",
      "tree",
      "treegrid"
    ]
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>jsx-a11y/no-noninteractive-tabindex</code>
    (<a href="#rule-canonical-jsx-a11y/no-noninteractive-tabindex">back to comparison table 👆</a>)
    <a id="rule-airbnb-jsx-a11y/no-noninteractive-tabindex" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "allowExpressionValues": true,
    "roles": [
      "tabpanel"
    ],
    "tags": []
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "roles": [
      "tabpanel"
    ],
    "tags": []
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>jsx-a11y/anchor-is-valid</code>
    (<a href="#rule-canonical-jsx-a11y/anchor-is-valid">back to comparison table 👆</a>)
    <a id="rule-airbnb-jsx-a11y/anchor-is-valid" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "aspects": [
      "noHref",
      "invalidHref",
      "preferButton"
    ],
    "components": [
      "Link"
    ],
    "specialLink": [
      "to"
    ]
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-underscore-dangle</code>
    (<a href="#rule-canonical-no-underscore-dangle">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-underscore-dangle" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allow": [
      "__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"
    ],
    "allowAfterSuper": false,
    "allowAfterThis": false,
    "allowAfterThisConstructor": false,
    "allowFunctionParams": true,
    "enforceInMethodNames": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>jsx-quotes</code>
    (<a href="#rule-canonical-jsx-quotes">back to comparison table 👆</a>)
    <a id="rule-airbnb-jsx-quotes" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "prefer-single"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "prefer-double"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>class-methods-use-this</code>
    (<a href="#rule-canonical-class-methods-use-this">back to comparison table 👆</a>)
    <a id="rule-airbnb-class-methods-use-this" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "enforceForClassFields": true,
    "exceptMethods": [
      "render",
      "getInitialState",
      "getDefaultProps",
      "getChildContext",
      "componentWillMount",
      "UNSAFE_componentWillMount",
      "componentDidMount",
      "componentWillReceiveProps",
      "UNSAFE_componentWillReceiveProps",
      "shouldComponentUpdate",
      "componentWillUpdate",
      "UNSAFE_componentWillUpdate",
      "componentDidUpdate",
      "componentWillUnmount",
      "componentDidCatch",
      "getSnapshotBeforeUpdate"
    ]
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/forbid-prop-types</code>
    (<a href="#rule-canonical-react/forbid-prop-types">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/forbid-prop-types" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "checkChildContextTypes": true,
    "checkContextTypes": true,
    "forbid": [
      "any",
      "array",
      "object"
    ]
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/jsx-boolean-value</code>
    (<a href="#rule-canonical-react/jsx-boolean-value">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/jsx-boolean-value" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "never"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "never",
  {
    "always": []
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/jsx-closing-tag-location</code>
    (<a href="#rule-canonical-react/jsx-closing-tag-location">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/jsx-closing-tag-location" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/jsx-max-props-per-line</code>
    (<a href="#rule-canonical-react/jsx-max-props-per-line">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/jsx-max-props-per-line" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "maximum": 3,
    "when": "multiline"
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "maximum": 1,
    "when": "multiline"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/jsx-no-bind</code>
    (<a href="#rule-canonical-react/jsx-no-bind">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/jsx-no-bind" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "allowArrowFunctions": true,
    "allowBind": false,
    "allowFunctions": false,
    "ignoreDOMComponents": false,
    "ignoreRefs": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowArrowFunctions": true,
    "allowBind": false,
    "allowFunctions": false,
    "ignoreDOMComponents": true,
    "ignoreRefs": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/jsx-no-duplicate-props</code>
    (<a href="#rule-canonical-react/jsx-no-duplicate-props">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/jsx-no-duplicate-props" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "ignoreCase": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/jsx-pascal-case</code>
    (<a href="#rule-canonical-react/jsx-pascal-case">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/jsx-pascal-case" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "ignore": [
      "h{}",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "a",
      "ul",
      "ol",
      "li",
      "img",
      "div",
      "span",
      "dl",
      "dt",
      "dd"
    ]
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowAllCaps": true,
    "ignore": []
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/no-danger</code>
    (<a href="#rule-canonical-react/no-danger">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/no-danger" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "warn"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/prefer-es6-class</code>
    (<a href="#rule-canonical-react/prefer-es6-class">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/prefer-es6-class" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/prop-types</code>
    (<a href="#rule-canonical-react/prop-types">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/prop-types" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "customValidators": [],
    "ignore": [],
    "skipUndeclared": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/react-in-jsx-scope</code>
    (<a href="#rule-canonical-react/react-in-jsx-scope">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/react-in-jsx-scope" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/jsx-wrap-multilines</code>
    (<a href="#rule-canonical-react/jsx-wrap-multilines">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/jsx-wrap-multilines" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "arrow": "parens-new-line",
    "assignment": "parens-new-line",
    "condition": "parens-new-line",
    "declaration": "parens-new-line",
    "logical": "parens-new-line",
    "prop": "parens-new-line",
    "return": "parens-new-line"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/jsx-indent</code>
    (<a href="#rule-canonical-react/jsx-indent">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/jsx-indent" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off",
  2
]</code></pre></td>
  <td><pre><code>[
  "error",
  2
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/jsx-no-target-blank</code>
    (<a href="#rule-canonical-react/jsx-no-target-blank">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/jsx-no-target-blank" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "enforceDynamicLinks": "always",
    "forms": false,
    "links": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/jsx-filename-extension</code>
    (<a href="#rule-canonical-react/jsx-filename-extension">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/jsx-filename-extension" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "extensions": [
      ".jsx"
    ]
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/no-unused-prop-types</code>
    (<a href="#rule-canonical-react/no-unused-prop-types">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/no-unused-prop-types" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "customValidators": [],
    "skipShapeProps": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/no-unescaped-entities</code>
    (<a href="#rule-canonical-react/no-unescaped-entities">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/no-unescaped-entities" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/jsx-tag-spacing</code>
    (<a href="#rule-canonical-react/jsx-tag-spacing">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/jsx-tag-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "afterOpening": "never",
    "beforeSelfClosing": "always",
    "closingSlash": "never"
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "afterOpening": "never",
    "beforeClosing": "never",
    "beforeSelfClosing": "always",
    "closingSlash": "never"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/require-default-props</code>
    (<a href="#rule-canonical-react/require-default-props">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/require-default-props" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "forbidDefaultForRequired": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/forbid-foreign-prop-types</code>
    (<a href="#rule-canonical-react/forbid-foreign-prop-types">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/forbid-foreign-prop-types" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "warn",
  {
    "allowInPropTypes": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/default-props-match-prop-types</code>
    (<a href="#rule-canonical-react/default-props-match-prop-types">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/default-props-match-prop-types" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowRequiredDefaults": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/jsx-one-expression-per-line</code>
    (<a href="#rule-canonical-react/jsx-one-expression-per-line">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/jsx-one-expression-per-line" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allow": "single-child"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/destructuring-assignment</code>
    (<a href="#rule-canonical-react/destructuring-assignment">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/destructuring-assignment" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/button-has-type</code>
    (<a href="#rule-canonical-react/button-has-type">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/button-has-type" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "button": true,
    "reset": false,
    "submit": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/jsx-curly-newline</code>
    (<a href="#rule-canonical-react/jsx-curly-newline">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/jsx-curly-newline" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "multiline": "consistent",
    "singleline": "consistent"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/static-property-placement</code>
    (<a href="#rule-canonical-react/static-property-placement">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/static-property-placement" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "property assignment"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>react/jsx-props-no-spreading</code>
    (<a href="#rule-canonical-react/jsx-props-no-spreading">back to comparison table 👆</a>)
    <a id="rule-airbnb-react/jsx-props-no-spreading" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "custom": "enforce",
    "exceptions": [],
    "explicitSpread": "ignore",
    "html": "enforce"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>import/no-unresolved</code>
    (<a href="#rule-canonical-import/no-unresolved">back to comparison table 👆</a>)
    <a id="rule-airbnb-import/no-unresolved" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "caseSensitive": true,
    "caseSensitiveStrict": false,
    "commonjs": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>import/named</code>
    (<a href="#rule-canonical-import/named">back to comparison table 👆</a>)
    <a id="rule-airbnb-import/named" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>import/no-extraneous-dependencies</code>
    (<a href="#rule-canonical-import/no-extraneous-dependencies">back to comparison table 👆</a>)
    <a id="rule-airbnb-import/no-extraneous-dependencies" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "devDependencies": true,
    "optionalDependencies": true,
    "peerDependencies": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "devDependencies": [
      "test/**",
      "tests/**",
      "spec/**",
      "**/__tests__/**",
      "**/__mocks__/**",
      "test.{js,jsx}",
      "test-*.{js,jsx}",
      "**/*{.,_}{test,spec}.{js,jsx}",
      "**/jest.config.js",
      "**/jest.setup.js",
      "**/vue.config.js",
      "**/webpack.config.js",
      "**/webpack.config.*.js",
      "**/rollup.config.js",
      "**/rollup.config.*.js",
      "**/gulpfile.js",
      "**/gulpfile.*.js",
      "**/Gruntfile{,.js}",
      "**/protractor.conf.js",
      "**/protractor.conf.*.js",
      "**/karma.conf.js"
    ],
    "optionalDependencies": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>import/extensions</code>
    (<a href="#rule-canonical-import/extensions">back to comparison table 👆</a>)
    <a id="rule-airbnb-import/extensions" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "never",
  {
    "ignorePackages": true,
    "pattern": {
      "json": "always",
      "svg": "always"
    }
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  "ignorePackages",
  {
    "js": "never",
    "jsx": "never",
    "mjs": "never"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>import/order</code>
    (<a href="#rule-canonical-import/order">back to comparison table 👆</a>)
    <a id="rule-airbnb-import/order" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "alphabetize": {
      "caseInsensitive": false,
      "order": "asc"
    },
    "groups": [
      "builtin",
      "external",
      "internal",
      "parent",
      "sibling",
      "index"
    ],
    "newlines-between": "never",
    "warnOnUnassignedImports": false
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "groups": [
      [
        "builtin",
        "external",
        "internal"
      ]
    ],
    "warnOnUnassignedImports": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>import/prefer-default-export</code>
    (<a href="#rule-canonical-import/prefer-default-export">back to comparison table 👆</a>)
    <a id="rule-airbnb-import/prefer-default-export" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>import/no-cycle</code>
    (<a href="#rule-canonical-import/no-cycle">back to comparison table 👆</a>)
    <a id="rule-airbnb-import/no-cycle" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "ignoreExternal": false,
    "maxDepth": "∞"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>import/no-useless-path-segments</code>
    (<a href="#rule-canonical-import/no-useless-path-segments">back to comparison table 👆</a>)
    <a id="rule-airbnb-import/no-useless-path-segments" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "commonjs": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>arrow-body-style</code>
    (<a href="#rule-canonical-arrow-body-style">back to comparison table 👆</a>)
    <a id="rule-airbnb-arrow-body-style" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "as-needed",
  {
    "requireReturnForObjectLiteral": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>generator-star-spacing</code>
    (<a href="#rule-canonical-generator-star-spacing">back to comparison table 👆</a>)
    <a id="rule-airbnb-generator-star-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "after": false,
    "before": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "after": true,
    "before": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-confusing-arrow</code>
    (<a href="#rule-canonical-no-confusing-arrow">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-confusing-arrow" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowParens": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>object-shorthand</code>
    (<a href="#rule-canonical-object-shorthand">back to comparison table 👆</a>)
    <a id="rule-airbnb-object-shorthand" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "always",
  {
    "avoidQuotes": true,
    "ignoreConstructors": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>prefer-arrow-callback</code>
    (<a href="#rule-canonical-prefer-arrow-callback">back to comparison table 👆</a>)
    <a id="rule-airbnb-prefer-arrow-callback" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowNamedFunctions": false,
    "allowUnboundThis": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>prefer-const</code>
    (<a href="#rule-canonical-prefer-const">back to comparison table 👆</a>)
    <a id="rule-airbnb-prefer-const" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "destructuring": "any",
    "ignoreReadBeforeAssign": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>prefer-destructuring</code>
    (<a href="#rule-canonical-prefer-destructuring">back to comparison table 👆</a>)
    <a id="rule-airbnb-prefer-destructuring" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "AssignmentExpression": {
      "array": true,
      "object": false
    },
    "VariableDeclarator": {
      "array": false,
      "object": true
    }
  },
  {
    "enforceForRenamedProperties": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>prefer-template</code>
    (<a href="#rule-canonical-prefer-template">back to comparison table 👆</a>)
    <a id="rule-airbnb-prefer-template" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>template-curly-spacing</code>
    (<a href="#rule-canonical-template-curly-spacing">back to comparison table 👆</a>)
    <a id="rule-airbnb-template-curly-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "never"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>yield-star-spacing</code>
    (<a href="#rule-canonical-yield-star-spacing">back to comparison table 👆</a>)
    <a id="rule-airbnb-yield-star-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "after": true,
    "before": false
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  "after"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-shadow</code>
    (<a href="#rule-canonical-no-shadow">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-shadow" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "builtinGlobals": false,
    "hoist": "all"
  }
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-unused-vars</code>
    (<a href="#rule-canonical-no-unused-vars">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-unused-vars" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "args": "after-used",
    "ignoreRestSiblings": true,
    "vars": "all"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-use-before-define</code>
    (<a href="#rule-canonical-no-use-before-define">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-use-before-define" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "classes": true,
    "functions": false,
    "variables": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "classes": true,
    "functions": true,
    "variables": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>brace-style</code>
    (<a href="#rule-canonical-brace-style">back to comparison table 👆</a>)
    <a id="rule-airbnb-brace-style" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "1tbs",
  {
    "allowSingleLine": false
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  "1tbs",
  {
    "allowSingleLine": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>camelcase</code>
    (<a href="#rule-canonical-camelcase">back to comparison table 👆</a>)
    <a id="rule-airbnb-camelcase" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "ignoreDestructuring": false,
    "ignoreGlobals": false,
    "ignoreImports": false,
    "properties": "never"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>comma-style</code>
    (<a href="#rule-canonical-comma-style">back to comparison table 👆</a>)
    <a id="rule-airbnb-comma-style" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "last"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "last",
  {
    "exceptions": {
      "ArrayExpression": false,
      "ArrayPattern": false,
      "ArrowFunctionExpression": false,
      "CallExpression": false,
      "FunctionDeclaration": false,
      "FunctionExpression": false,
      "ImportDeclaration": false,
      "NewExpression": false,
      "ObjectExpression": false,
      "ObjectPattern": false,
      "VariableDeclaration": false
    }
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>eol-last</code>
    (<a href="#rule-canonical-eol-last">back to comparison table 👆</a>)
    <a id="rule-airbnb-eol-last" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>func-names</code>
    (<a href="#rule-canonical-func-names">back to comparison table 👆</a>)
    <a id="rule-airbnb-func-names" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "never"
]</code></pre></td>
  <td><pre><code>[
  "warn"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>indent</code>
    (<a href="#rule-canonical-indent">back to comparison table 👆</a>)
    <a id="rule-airbnb-indent" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  2
]</code></pre></td>
  <td><pre><code>[
  "error",
  2,
  {
    "ArrayExpression": 1,
    "CallExpression": {
      "arguments": 1
    },
    "FunctionDeclaration": {
      "body": 1,
      "parameters": 1
    },
    "FunctionExpression": {
      "body": 1,
      "parameters": 1
    },
    "ImportDeclaration": 1,
    "ObjectExpression": 1,
    "SwitchCase": 1,
    "VariableDeclarator": 1,
    "flatTernaryExpressions": false,
    "ignoreComments": false,
    "ignoredNodes": [
      "JSXElement",
      "JSXElement > *",
      "JSXAttribute",
      "JSXIdentifier",
      "JSXNamespacedName",
      "JSXMemberExpression",
      "JSXSpreadAttribute",
      "JSXExpressionContainer",
      "JSXOpeningElement",
      "JSXClosingElement",
      "JSXFragment",
      "JSXOpeningFragment",
      "JSXClosingFragment",
      "JSXText",
      "JSXEmptyExpression",
      "JSXSpreadChild"
    ],
    "offsetTernaryExpressions": false,
    "outerIIFEBody": 1
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>keyword-spacing</code>
    (<a href="#rule-canonical-keyword-spacing">back to comparison table 👆</a>)
    <a id="rule-airbnb-keyword-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "after": true,
    "before": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "after": true,
    "before": true,
    "overrides": {
      "case": {
        "after": true
      },
      "return": {
        "after": true
      },
      "throw": {
        "after": true
      }
    }
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>lines-between-class-members</code>
    (<a href="#rule-canonical-lines-between-class-members">back to comparison table 👆</a>)
    <a id="rule-airbnb-lines-between-class-members" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "always",
  {
    "exceptAfterSingleLine": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>lines-around-directive</code>
    (<a href="#rule-canonical-lines-around-directive">back to comparison table 👆</a>)
    <a id="rule-airbnb-lines-around-directive" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "after": "always",
    "before": "always"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>max-len</code>
    (<a href="#rule-canonical-max-len">back to comparison table 👆</a>)
    <a id="rule-airbnb-max-len" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  100,
  2,
  {
    "ignoreComments": false,
    "ignoreRegExpLiterals": true,
    "ignoreStrings": true,
    "ignoreTemplateLiterals": true,
    "ignoreUrls": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>new-cap</code>
    (<a href="#rule-canonical-new-cap">back to comparison table 👆</a>)
    <a id="rule-airbnb-new-cap" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "capIsNew": false,
    "capIsNewExceptions": [
      "Immutable.Map",
      "Immutable.Set",
      "Immutable.List"
    ],
    "newIsCap": true,
    "newIsCapExceptions": [],
    "properties": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>newline-per-chained-call</code>
    (<a href="#rule-canonical-newline-per-chained-call">back to comparison table 👆</a>)
    <a id="rule-airbnb-newline-per-chained-call" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "ignoreChainWithDepth": 4
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-continue</code>
    (<a href="#rule-canonical-no-continue">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-continue" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-mixed-operators</code>
    (<a href="#rule-canonical-no-mixed-operators">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-mixed-operators" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowSamePrecedence": false,
    "groups": [
      [
        "%",
        "**"
      ],
      [
        "%",
        "+"
      ],
      [
        "%",
        "-"
      ],
      [
        "%",
        "*"
      ],
      [
        "%",
        "/"
      ],
      [
        "/",
        "*"
      ],
      [
        "&",
        "|",
        "<<",
        ">>",
        ">>>"
      ],
      [
        "==",
        "!=",
        "===",
        "!=="
      ],
      [
        "&&",
        "||"
      ]
    ]
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-multiple-empty-lines</code>
    (<a href="#rule-canonical-no-multiple-empty-lines">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-multiple-empty-lines" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "max": 1,
    "maxBOF": 0,
    "maxEOF": 1
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "max": 1,
    "maxBOF": 0,
    "maxEOF": 0
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-nested-ternary</code>
    (<a href="#rule-canonical-no-nested-ternary">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-nested-ternary" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-plusplus</code>
    (<a href="#rule-canonical-no-plusplus">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-plusplus" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-spaced-func</code>
    (<a href="#rule-canonical-no-spaced-func">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-spaced-func" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-trailing-spaces</code>
    (<a href="#rule-canonical-no-trailing-spaces">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-trailing-spaces" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "ignoreComments": false,
    "skipBlankLines": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-unneeded-ternary</code>
    (<a href="#rule-canonical-no-unneeded-ternary">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-unneeded-ternary" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "defaultAssignment": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>nonblock-statement-body-position</code>
    (<a href="#rule-canonical-nonblock-statement-body-position">back to comparison table 👆</a>)
    <a id="rule-airbnb-nonblock-statement-body-position" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "below"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "beside",
  {
    "overrides": {}
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>object-curly-spacing</code>
    (<a href="#rule-canonical-object-curly-spacing">back to comparison table 👆</a>)
    <a id="rule-airbnb-object-curly-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>object-curly-newline</code>
    (<a href="#rule-canonical-object-curly-newline">back to comparison table 👆</a>)
    <a id="rule-airbnb-object-curly-newline" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "ExportDeclaration": "always",
    "ImportDeclaration": "always",
    "ObjectExpression": {
      "minProperties": 1,
      "multiline": true
    },
    "ObjectPattern": {
      "minProperties": 1,
      "multiline": true
    }
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "ExportDeclaration": {
      "consistent": true,
      "minProperties": 4,
      "multiline": true
    },
    "ImportDeclaration": {
      "consistent": true,
      "minProperties": 4,
      "multiline": true
    },
    "ObjectExpression": {
      "consistent": true,
      "minProperties": 4,
      "multiline": true
    },
    "ObjectPattern": {
      "consistent": true,
      "minProperties": 4,
      "multiline": true
    }
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>object-property-newline</code>
    (<a href="#rule-canonical-object-property-newline">back to comparison table 👆</a>)
    <a id="rule-airbnb-object-property-newline" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "allowAllPropertiesOnSameLine": false,
    "allowMultiplePropertiesPerLine": false
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowAllPropertiesOnSameLine": true,
    "allowMultiplePropertiesPerLine": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>one-var-declaration-per-line</code>
    (<a href="#rule-canonical-one-var-declaration-per-line">back to comparison table 👆</a>)
    <a id="rule-airbnb-one-var-declaration-per-line" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>operator-linebreak</code>
    (<a href="#rule-canonical-operator-linebreak">back to comparison table 👆</a>)
    <a id="rule-airbnb-operator-linebreak" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "after"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "before",
  {
    "overrides": {
      "=": "none"
    }
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>padded-blocks</code>
    (<a href="#rule-canonical-padded-blocks">back to comparison table 👆</a>)
    <a id="rule-airbnb-padded-blocks" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "never"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "blocks": "never",
    "classes": "never",
    "switches": "never"
  },
  {
    "allowSingleLineBlocks": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>quote-props</code>
    (<a href="#rule-canonical-quote-props">back to comparison table 👆</a>)
    <a id="rule-airbnb-quote-props" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "as-needed",
  {
    "numbers": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  "as-needed",
  {
    "keywords": false,
    "numbers": false,
    "unnecessary": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>quotes</code>
    (<a href="#rule-canonical-quotes">back to comparison table 👆</a>)
    <a id="rule-airbnb-quotes" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "single"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "single",
  {
    "avoidEscape": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>space-before-blocks</code>
    (<a href="#rule-canonical-space-before-blocks">back to comparison table 👆</a>)
    <a id="rule-airbnb-space-before-blocks" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>space-before-function-paren</code>
    (<a href="#rule-canonical-space-before-function-paren">back to comparison table 👆</a>)
    <a id="rule-airbnb-space-before-function-paren" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "anonymous": "always",
    "asyncArrow": "always",
    "named": "never"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>space-unary-ops</code>
    (<a href="#rule-canonical-space-unary-ops">back to comparison table 👆</a>)
    <a id="rule-airbnb-space-unary-ops" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "nonwords": false,
    "words": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "nonwords": false,
    "overrides": {},
    "words": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>spaced-comment</code>
    (<a href="#rule-canonical-spaced-comment">back to comparison table 👆</a>)
    <a id="rule-airbnb-spaced-comment" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "always",
  {
    "block": {
      "balanced": true,
      "exceptions": [
        "-",
        "+"
      ],
      "markers": [
        "=",
        "!",
        ":",
        "::"
      ]
    },
    "line": {
      "exceptions": [
        "-",
        "+"
      ],
      "markers": [
        "=",
        "!",
        "/"
      ]
    }
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>global-require</code>
    (<a href="#rule-canonical-global-require">back to comparison table 👆</a>)
    <a id="rule-airbnb-global-require" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-buffer-constructor</code>
    (<a href="#rule-canonical-no-buffer-constructor">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-buffer-constructor" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-new-require</code>
    (<a href="#rule-canonical-no-new-require">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-new-require" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-path-concat</code>
    (<a href="#rule-canonical-no-path-concat">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-path-concat" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>getter-return</code>
    (<a href="#rule-canonical-getter-return">back to comparison table 👆</a>)
    <a id="rule-airbnb-getter-return" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowImplicit": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-await-in-loop</code>
    (<a href="#rule-canonical-no-await-in-loop">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-await-in-loop" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-cond-assign</code>
    (<a href="#rule-canonical-no-cond-assign">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-cond-assign" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-console</code>
    (<a href="#rule-canonical-no-console">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-console" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "warn"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-constant-condition</code>
    (<a href="#rule-canonical-no-constant-condition">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-constant-condition" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "warn"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-unreachable</code>
    (<a href="#rule-canonical-no-unreachable">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-unreachable" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>array-callback-return</code>
    (<a href="#rule-canonical-array-callback-return">back to comparison table 👆</a>)
    <a id="rule-airbnb-array-callback-return" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowImplicit": true,
    "checkForEach": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>curly</code>
    (<a href="#rule-canonical-curly">back to comparison table 👆</a>)
    <a id="rule-airbnb-curly" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "multi-line"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>default-case</code>
    (<a href="#rule-canonical-default-case">back to comparison table 👆</a>)
    <a id="rule-airbnb-default-case" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "commentPattern": "^no default$"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>dot-notation</code>
    (<a href="#rule-canonical-dot-notation">back to comparison table 👆</a>)
    <a id="rule-airbnb-dot-notation" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowKeywords": true,
    "allowPattern": ""
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>eqeqeq</code>
    (<a href="#rule-canonical-eqeqeq">back to comparison table 👆</a>)
    <a id="rule-airbnb-eqeqeq" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "always",
  {
    "null": "ignore"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>max-classes-per-file</code>
    (<a href="#rule-canonical-max-classes-per-file">back to comparison table 👆</a>)
    <a id="rule-airbnb-max-classes-per-file" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  1
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-alert</code>
    (<a href="#rule-canonical-no-alert">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-alert" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "warn"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-else-return</code>
    (<a href="#rule-canonical-no-else-return">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-else-return" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowElseIf": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-empty-function</code>
    (<a href="#rule-canonical-no-empty-function">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-empty-function" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allow": [
      "arrowFunctions",
      "functions",
      "methods"
    ]
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-global-assign</code>
    (<a href="#rule-canonical-no-global-assign">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-global-assign" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "exceptions": []
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-labels</code>
    (<a href="#rule-canonical-no-labels">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-labels" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowLoop": false,
    "allowSwitch": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-multi-spaces</code>
    (<a href="#rule-canonical-no-multi-spaces">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-multi-spaces" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "ignoreEOLComments": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-param-reassign</code>
    (<a href="#rule-canonical-no-param-reassign">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-param-reassign" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "props": false
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "ignorePropertyModificationsFor": [
      "acc",
      "accumulator",
      "e",
      "ctx",
      "context",
      "req",
      "request",
      "res",
      "response",
      "$scope",
      "staticContext"
    ],
    "props": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-redeclare</code>
    (<a href="#rule-canonical-no-redeclare">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-redeclare" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "builtinGlobals": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-return-assign</code>
    (<a href="#rule-canonical-no-return-assign">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-return-assign" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-return-await</code>
    (<a href="#rule-canonical-no-return-await">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-return-await" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-self-assign</code>
    (<a href="#rule-canonical-no-self-assign">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-self-assign" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "props": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-unused-expressions</code>
    (<a href="#rule-canonical-no-unused-expressions">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-unused-expressions" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowShortCircuit": false,
    "allowTaggedTemplates": false,
    "allowTernary": false,
    "enforceForJSX": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-void</code>
    (<a href="#rule-canonical-no-void">back to comparison table 👆</a>)
    <a id="rule-airbnb-no-void" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "allowAsStatement": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>prefer-promise-reject-errors</code>
    (<a href="#rule-canonical-prefer-promise-reject-errors">back to comparison table 👆</a>)
    <a id="rule-airbnb-prefer-promise-reject-errors" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowEmptyReject": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>wrap-iife</code>
    (<a href="#rule-canonical-wrap-iife">back to comparison table 👆</a>)
    <a id="rule-airbnb-wrap-iife" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "inside"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "outside",
  {
    "functionPrototypeMethods": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>yoda</code>
    (<a href="#rule-canonical-yoda">back to comparison table 👆</a>)
    <a id="rule-airbnb-yoda" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "never"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
</table>

### Google Incompatible Rules
<table>
<tr>
  <th colspan="2" align="left">
    <code>valid-jsdoc</code>
    (<a href="#rule-canonical-valid-jsdoc">back to comparison table 👆</a>)
    <a id="rule-google-valid-jsdoc" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "prefer": {
      "returns": "return"
    },
    "requireParamDescription": false,
    "requireParamType": true,
    "requireReturn": false,
    "requireReturnDescription": false,
    "requireReturnType": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>curly</code>
    (<a href="#rule-canonical-curly">back to comparison table 👆</a>)
    <a id="rule-google-curly" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "multi-line"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-invalid-this</code>
    (<a href="#rule-canonical-no-invalid-this">back to comparison table 👆</a>)
    <a id="rule-google-no-invalid-this" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-unused-vars</code>
    (<a href="#rule-canonical-no-unused-vars">back to comparison table 👆</a>)
    <a id="rule-google-no-unused-vars" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "args": "none"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>block-spacing</code>
    (<a href="#rule-canonical-block-spacing">back to comparison table 👆</a>)
    <a id="rule-google-block-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "never"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>brace-style</code>
    (<a href="#rule-canonical-brace-style">back to comparison table 👆</a>)
    <a id="rule-google-brace-style" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "1tbs",
  {
    "allowSingleLine": false
  }
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>camelcase</code>
    (<a href="#rule-canonical-camelcase">back to comparison table 👆</a>)
    <a id="rule-google-camelcase" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "ignoreDestructuring": false,
    "ignoreGlobals": false,
    "ignoreImports": false,
    "properties": "never"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>comma-dangle</code>
    (<a href="#rule-canonical-comma-dangle">back to comparison table 👆</a>)
    <a id="rule-google-comma-dangle" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "arrays": "always-multiline",
    "exports": "always-multiline",
    "functions": "always-multiline",
    "imports": "always-multiline",
    "objects": "always-multiline"
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  "always-multiline"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>comma-spacing</code>
    (<a href="#rule-canonical-comma-spacing">back to comparison table 👆</a>)
    <a id="rule-google-comma-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "after": true,
    "before": false
  }
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>comma-style</code>
    (<a href="#rule-canonical-comma-style">back to comparison table 👆</a>)
    <a id="rule-google-comma-style" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "last"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>computed-property-spacing</code>
    (<a href="#rule-canonical-computed-property-spacing">back to comparison table 👆</a>)
    <a id="rule-google-computed-property-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "never"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>func-call-spacing</code>
    (<a href="#rule-canonical-func-call-spacing">back to comparison table 👆</a>)
    <a id="rule-google-func-call-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "never"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>indent</code>
    (<a href="#rule-canonical-indent">back to comparison table 👆</a>)
    <a id="rule-google-indent" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  2
]</code></pre></td>
  <td><pre><code>[
  "error",
  2,
  {
    "CallExpression": {
      "arguments": 2
    },
    "FunctionDeclaration": {
      "body": 1,
      "parameters": 2
    },
    "FunctionExpression": {
      "body": 1,
      "parameters": 2
    },
    "MemberExpression": 2,
    "ObjectExpression": 1,
    "SwitchCase": 1,
    "flatTernaryExpressions": false,
    "ignoreComments": false,
    "ignoredNodes": [
      "ConditionalExpression"
    ],
    "offsetTernaryExpressions": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>key-spacing</code>
    (<a href="#rule-canonical-key-spacing">back to comparison table 👆</a>)
    <a id="rule-google-key-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "afterColon": true,
    "beforeColon": false
  }
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>keyword-spacing</code>
    (<a href="#rule-canonical-keyword-spacing">back to comparison table 👆</a>)
    <a id="rule-google-keyword-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "after": true,
    "before": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>linebreak-style</code>
    (<a href="#rule-canonical-linebreak-style">back to comparison table 👆</a>)
    <a id="rule-google-linebreak-style" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "unix"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>max-len</code>
    (<a href="#rule-canonical-max-len">back to comparison table 👆</a>)
    <a id="rule-google-max-len" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "code": 80,
    "ignorePattern": "goog.(module|require)",
    "ignoreUrls": true,
    "tabWidth": 2
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>new-cap</code>
    (<a href="#rule-canonical-new-cap">back to comparison table 👆</a>)
    <a id="rule-google-new-cap" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-multiple-empty-lines</code>
    (<a href="#rule-canonical-no-multiple-empty-lines">back to comparison table 👆</a>)
    <a id="rule-google-no-multiple-empty-lines" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "max": 1,
    "maxBOF": 0,
    "maxEOF": 1
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "max": 2
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>object-curly-spacing</code>
    (<a href="#rule-canonical-object-curly-spacing">back to comparison table 👆</a>)
    <a id="rule-google-object-curly-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>one-var</code>
    (<a href="#rule-canonical-one-var">back to comparison table 👆</a>)
    <a id="rule-google-one-var" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "never"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "const": "never",
    "let": "never",
    "var": "never"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>quote-props</code>
    (<a href="#rule-canonical-quote-props">back to comparison table 👆</a>)
    <a id="rule-google-quote-props" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "as-needed",
  {
    "numbers": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  "consistent"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>quotes</code>
    (<a href="#rule-canonical-quotes">back to comparison table 👆</a>)
    <a id="rule-google-quotes" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "single"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "single",
  {
    "allowTemplateLiterals": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>require-jsdoc</code>
    (<a href="#rule-canonical-require-jsdoc">back to comparison table 👆</a>)
    <a id="rule-google-require-jsdoc" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "require": {
      "ArrowFunctionExpression": false,
      "ClassDeclaration": true,
      "FunctionDeclaration": true,
      "FunctionExpression": false,
      "MethodDefinition": true
    }
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>semi</code>
    (<a href="#rule-canonical-semi">back to comparison table 👆</a>)
    <a id="rule-google-semi" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>semi-spacing</code>
    (<a href="#rule-canonical-semi-spacing">back to comparison table 👆</a>)
    <a id="rule-google-semi-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "after": true,
    "before": false
  }
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>space-before-blocks</code>
    (<a href="#rule-canonical-space-before-blocks">back to comparison table 👆</a>)
    <a id="rule-google-space-before-blocks" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>space-before-function-paren</code>
    (<a href="#rule-canonical-space-before-function-paren">back to comparison table 👆</a>)
    <a id="rule-google-space-before-function-paren" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "anonymous": "never",
    "asyncArrow": "always",
    "named": "never"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>switch-colon-spacing</code>
    (<a href="#rule-canonical-switch-colon-spacing">back to comparison table 👆</a>)
    <a id="rule-google-switch-colon-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "after": true,
    "before": false
  }
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>generator-star-spacing</code>
    (<a href="#rule-canonical-generator-star-spacing">back to comparison table 👆</a>)
    <a id="rule-google-generator-star-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "after": false,
    "before": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  "after"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>prefer-const</code>
    (<a href="#rule-canonical-prefer-const">back to comparison table 👆</a>)
    <a id="rule-google-prefer-const" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "destructuring": "all",
    "ignoreReadBeforeAssign": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>rest-spread-spacing</code>
    (<a href="#rule-canonical-rest-spread-spacing">back to comparison table 👆</a>)
    <a id="rule-google-rest-spread-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "never"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>yield-star-spacing</code>
    (<a href="#rule-canonical-yield-star-spacing">back to comparison table 👆</a>)
    <a id="rule-google-yield-star-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "after": true,
    "before": false
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  "after"
]</code></pre></td>
</tr>
</table>

### Standard Incompatible Rules
<table>
<tr>
  <th colspan="2" align="left">
    <code>no-var</code>
    (<a href="#rule-canonical-no-var">back to comparison table 👆</a>)
    <a id="rule-standard-no-var" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "warn"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>accessor-pairs</code>
    (<a href="#rule-canonical-accessor-pairs">back to comparison table 👆</a>)
    <a id="rule-standard-accessor-pairs" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "enforceForClassMembers": true,
    "getWithoutSet": false,
    "setWithoutGet": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>array-callback-return</code>
    (<a href="#rule-canonical-array-callback-return">back to comparison table 👆</a>)
    <a id="rule-standard-array-callback-return" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowImplicit": false,
    "checkForEach": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>brace-style</code>
    (<a href="#rule-canonical-brace-style">back to comparison table 👆</a>)
    <a id="rule-standard-brace-style" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "1tbs",
  {
    "allowSingleLine": false
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  "1tbs",
  {
    "allowSingleLine": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>camelcase</code>
    (<a href="#rule-canonical-camelcase">back to comparison table 👆</a>)
    <a id="rule-standard-camelcase" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allow": [
      "^UNSAFE_"
    ],
    "ignoreDestructuring": false,
    "ignoreGlobals": true,
    "ignoreImports": false,
    "properties": "never"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>comma-dangle</code>
    (<a href="#rule-canonical-comma-dangle">back to comparison table 👆</a>)
    <a id="rule-standard-comma-dangle" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "arrays": "always-multiline",
    "exports": "always-multiline",
    "functions": "always-multiline",
    "imports": "always-multiline",
    "objects": "always-multiline"
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "arrays": "never",
    "exports": "never",
    "functions": "never",
    "imports": "never",
    "objects": "never"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>computed-property-spacing</code>
    (<a href="#rule-canonical-computed-property-spacing">back to comparison table 👆</a>)
    <a id="rule-standard-computed-property-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "never"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "never",
  {
    "enforceForClassMembers": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>curly</code>
    (<a href="#rule-canonical-curly">back to comparison table 👆</a>)
    <a id="rule-standard-curly" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "multi-line"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>dot-notation</code>
    (<a href="#rule-canonical-dot-notation">back to comparison table 👆</a>)
    <a id="rule-standard-dot-notation" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowKeywords": true,
    "allowPattern": ""
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>eqeqeq</code>
    (<a href="#rule-canonical-eqeqeq">back to comparison table 👆</a>)
    <a id="rule-standard-eqeqeq" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "always",
  {
    "null": "ignore"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>generator-star-spacing</code>
    (<a href="#rule-canonical-generator-star-spacing">back to comparison table 👆</a>)
    <a id="rule-standard-generator-star-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "after": false,
    "before": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "after": true,
    "before": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>indent</code>
    (<a href="#rule-canonical-indent">back to comparison table 👆</a>)
    <a id="rule-standard-indent" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  2
]</code></pre></td>
  <td><pre><code>[
  "error",
  2,
  {
    "ArrayExpression": 1,
    "CallExpression": {
      "arguments": 1
    },
    "FunctionDeclaration": {
      "body": 1,
      "parameters": 1
    },
    "FunctionExpression": {
      "body": 1,
      "parameters": 1
    },
    "ImportDeclaration": 1,
    "MemberExpression": 1,
    "ObjectExpression": 1,
    "SwitchCase": 1,
    "VariableDeclarator": 1,
    "flatTernaryExpressions": false,
    "ignoreComments": false,
    "ignoredNodes": [
      "TemplateLiteral *",
      "JSXElement",
      "JSXElement > *",
      "JSXAttribute",
      "JSXIdentifier",
      "JSXNamespacedName",
      "JSXMemberExpression",
      "JSXSpreadAttribute",
      "JSXExpressionContainer",
      "JSXOpeningElement",
      "JSXClosingElement",
      "JSXFragment",
      "JSXOpeningFragment",
      "JSXClosingFragment",
      "JSXText",
      "JSXEmptyExpression",
      "JSXSpreadChild"
    ],
    "offsetTernaryExpressions": true,
    "outerIIFEBody": 1
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>lines-between-class-members</code>
    (<a href="#rule-canonical-lines-between-class-members">back to comparison table 👆</a>)
    <a id="rule-standard-lines-between-class-members" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "always",
  {
    "exceptAfterSingleLine": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>multiline-ternary</code>
    (<a href="#rule-canonical-multiline-ternary">back to comparison table 👆</a>)
    <a id="rule-standard-multiline-ternary" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "always-multiline"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>new-cap</code>
    (<a href="#rule-canonical-new-cap">back to comparison table 👆</a>)
    <a id="rule-standard-new-cap" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "capIsNew": false,
    "newIsCap": true,
    "properties": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-constant-condition</code>
    (<a href="#rule-canonical-no-constant-condition">back to comparison table 👆</a>)
    <a id="rule-standard-no-constant-condition" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "checkLoops": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-empty</code>
    (<a href="#rule-canonical-no-empty">back to comparison table 👆</a>)
    <a id="rule-standard-no-empty" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowEmptyCatch": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-extra-parens</code>
    (<a href="#rule-canonical-no-extra-parens">back to comparison table 👆</a>)
    <a id="rule-standard-no-extra-parens" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "functions"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-labels</code>
    (<a href="#rule-canonical-no-labels">back to comparison table 👆</a>)
    <a id="rule-standard-no-labels" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowLoop": false,
    "allowSwitch": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-mixed-operators</code>
    (<a href="#rule-canonical-no-mixed-operators">back to comparison table 👆</a>)
    <a id="rule-standard-no-mixed-operators" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowSamePrecedence": true,
    "groups": [
      [
        "==",
        "!=",
        "===",
        "!==",
        ">",
        ">=",
        "<",
        "<="
      ],
      [
        "&&",
        "||"
      ],
      [
        "in",
        "instanceof"
      ]
    ]
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-multiple-empty-lines</code>
    (<a href="#rule-canonical-no-multiple-empty-lines">back to comparison table 👆</a>)
    <a id="rule-standard-no-multiple-empty-lines" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "max": 1,
    "maxBOF": 0,
    "maxEOF": 1
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "max": 1,
    "maxEOF": 0
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-redeclare</code>
    (<a href="#rule-canonical-no-redeclare">back to comparison table 👆</a>)
    <a id="rule-standard-no-redeclare" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "builtinGlobals": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "builtinGlobals": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-return-assign</code>
    (<a href="#rule-canonical-no-return-assign">back to comparison table 👆</a>)
    <a id="rule-standard-no-return-assign" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "except-parens"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-self-assign</code>
    (<a href="#rule-canonical-no-self-assign">back to comparison table 👆</a>)
    <a id="rule-standard-no-self-assign" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "props": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-unneeded-ternary</code>
    (<a href="#rule-canonical-no-unneeded-ternary">back to comparison table 👆</a>)
    <a id="rule-standard-no-unneeded-ternary" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "defaultAssignment": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-unreachable</code>
    (<a href="#rule-canonical-no-unreachable">back to comparison table 👆</a>)
    <a id="rule-standard-no-unreachable" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-unused-expressions</code>
    (<a href="#rule-canonical-no-unused-expressions">back to comparison table 👆</a>)
    <a id="rule-standard-no-unused-expressions" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowShortCircuit": true,
    "allowTaggedTemplates": true,
    "allowTernary": true,
    "enforceForJSX": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-unused-vars</code>
    (<a href="#rule-canonical-no-unused-vars">back to comparison table 👆</a>)
    <a id="rule-standard-no-unused-vars" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "args": "none",
    "caughtErrors": "none",
    "ignoreRestSiblings": true,
    "vars": "all"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-use-before-define</code>
    (<a href="#rule-canonical-no-use-before-define">back to comparison table 👆</a>)
    <a id="rule-standard-no-use-before-define" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "classes": true,
    "functions": false,
    "variables": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "classes": false,
    "functions": false,
    "variables": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-useless-rename</code>
    (<a href="#rule-canonical-no-useless-rename">back to comparison table 👆</a>)
    <a id="rule-standard-no-useless-rename" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "ignoreDestructuring": false,
    "ignoreExport": false,
    "ignoreImport": false
  }
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-void</code>
    (<a href="#rule-canonical-no-void">back to comparison table 👆</a>)
    <a id="rule-standard-no-void" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "allowAsStatement": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>object-curly-newline</code>
    (<a href="#rule-canonical-object-curly-newline">back to comparison table 👆</a>)
    <a id="rule-standard-object-curly-newline" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "ExportDeclaration": "always",
    "ImportDeclaration": "always",
    "ObjectExpression": {
      "minProperties": 1,
      "multiline": true
    },
    "ObjectPattern": {
      "minProperties": 1,
      "multiline": true
    }
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "consistent": true,
    "multiline": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>object-curly-spacing</code>
    (<a href="#rule-canonical-object-curly-spacing">back to comparison table 👆</a>)
    <a id="rule-standard-object-curly-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>object-property-newline</code>
    (<a href="#rule-canonical-object-property-newline">back to comparison table 👆</a>)
    <a id="rule-standard-object-property-newline" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "allowAllPropertiesOnSameLine": false,
    "allowMultiplePropertiesPerLine": false
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowAllPropertiesOnSameLine": false,
    "allowMultiplePropertiesPerLine": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>one-var</code>
    (<a href="#rule-canonical-one-var">back to comparison table 👆</a>)
    <a id="rule-standard-one-var" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "never"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "initialized": "never"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>operator-linebreak</code>
    (<a href="#rule-canonical-operator-linebreak">back to comparison table 👆</a>)
    <a id="rule-standard-operator-linebreak" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "after"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "after",
  {
    "overrides": {
      ":": "before",
      "?": "before",
      "|>": "before"
    }
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>padded-blocks</code>
    (<a href="#rule-canonical-padded-blocks">back to comparison table 👆</a>)
    <a id="rule-standard-padded-blocks" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "never"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "blocks": "never",
    "classes": "never",
    "switches": "never"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>prefer-const</code>
    (<a href="#rule-canonical-prefer-const">back to comparison table 👆</a>)
    <a id="rule-standard-prefer-const" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "destructuring": "all",
    "ignoreReadBeforeAssign": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>quote-props</code>
    (<a href="#rule-canonical-quote-props">back to comparison table 👆</a>)
    <a id="rule-standard-quote-props" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "as-needed",
  {
    "numbers": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  "as-needed"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>quotes</code>
    (<a href="#rule-canonical-quotes">back to comparison table 👆</a>)
    <a id="rule-standard-quotes" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "single"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "single",
  {
    "allowTemplateLiterals": false,
    "avoidEscape": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>semi</code>
    (<a href="#rule-canonical-semi">back to comparison table 👆</a>)
    <a id="rule-standard-semi" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "never"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>spaced-comment</code>
    (<a href="#rule-canonical-spaced-comment">back to comparison table 👆</a>)
    <a id="rule-standard-spaced-comment" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "always",
  {
    "block": {
      "balanced": true,
      "exceptions": [
        "*"
      ],
      "markers": [
        "*package",
        "!",
        ",",
        ":",
        "::",
        "flow-include"
      ]
    },
    "line": {
      "markers": [
        "*package",
        "!",
        "/",
        ",",
        "="
      ]
    }
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>use-isnan</code>
    (<a href="#rule-canonical-use-isnan">back to comparison table 👆</a>)
    <a id="rule-standard-use-isnan" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "enforceForIndexOf": true,
    "enforceForSwitchCase": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>wrap-iife</code>
    (<a href="#rule-canonical-wrap-iife">back to comparison table 👆</a>)
    <a id="rule-standard-wrap-iife" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "inside"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "any",
  {
    "functionPrototypeMethods": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>yield-star-spacing</code>
    (<a href="#rule-canonical-yield-star-spacing">back to comparison table 👆</a>)
    <a id="rule-standard-yield-star-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "after": true,
    "before": false
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  "both"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>import/no-absolute-path</code>
    (<a href="#rule-canonical-import/no-absolute-path">back to comparison table 👆</a>)
    <a id="rule-standard-import/no-absolute-path" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "amd": false,
    "commonjs": true,
    "esmodule": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>node/handle-callback-err</code>
    (<a href="#rule-canonical-node/handle-callback-err">back to comparison table 👆</a>)
    <a id="rule-standard-node/handle-callback-err" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "^(err|error)$"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>promise/param-names</code>
    (<a href="#rule-canonical-promise/param-names">back to comparison table 👆</a>)
    <a id="rule-standard-promise/param-names" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
</table>

### XO Incompatible Rules
<table>
<tr>
  <th colspan="2" align="left">
    <code>comma-dangle</code>
    (<a href="#rule-canonical-comma-dangle">back to comparison table 👆</a>)
    <a id="rule-xo-comma-dangle" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "arrays": "always-multiline",
    "exports": "always-multiline",
    "functions": "always-multiline",
    "imports": "always-multiline",
    "objects": "always-multiline"
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  "always-multiline"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-await-in-loop</code>
    (<a href="#rule-canonical-no-await-in-loop">back to comparison table 👆</a>)
    <a id="rule-xo-no-await-in-loop" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-constant-condition</code>
    (<a href="#rule-canonical-no-constant-condition">back to comparison table 👆</a>)
    <a id="rule-xo-no-constant-condition" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-empty</code>
    (<a href="#rule-canonical-no-empty">back to comparison table 👆</a>)
    <a id="rule-xo-no-empty" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowEmptyCatch": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-unreachable</code>
    (<a href="#rule-canonical-no-unreachable">back to comparison table 👆</a>)
    <a id="rule-xo-no-unreachable" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-unsafe-negation</code>
    (<a href="#rule-canonical-no-unsafe-negation">back to comparison table 👆</a>)
    <a id="rule-xo-no-unsafe-negation" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "enforceForOrderingRelations": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-unsafe-optional-chaining</code>
    (<a href="#rule-canonical-no-unsafe-optional-chaining">back to comparison table 👆</a>)
    <a id="rule-xo-no-unsafe-optional-chaining" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "disallowArithmeticOperators": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>valid-typeof</code>
    (<a href="#rule-canonical-valid-typeof">back to comparison table 👆</a>)
    <a id="rule-xo-valid-typeof" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "requireStringLiterals": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "requireStringLiterals": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>accessor-pairs</code>
    (<a href="#rule-canonical-accessor-pairs">back to comparison table 👆</a>)
    <a id="rule-xo-accessor-pairs" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "enforceForClassMembers": true,
    "getWithoutSet": false,
    "setWithoutGet": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>array-callback-return</code>
    (<a href="#rule-canonical-array-callback-return">back to comparison table 👆</a>)
    <a id="rule-xo-array-callback-return" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowImplicit": true,
    "checkForEach": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>complexity</code>
    (<a href="#rule-canonical-complexity">back to comparison table 👆</a>)
    <a id="rule-xo-complexity" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  20
]</code></pre></td>
  <td><pre><code>[
  "warn"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-else-return</code>
    (<a href="#rule-canonical-no-else-return">back to comparison table 👆</a>)
    <a id="rule-xo-no-else-return" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowElseIf": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-redeclare</code>
    (<a href="#rule-canonical-no-redeclare">back to comparison table 👆</a>)
    <a id="rule-xo-no-redeclare" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "builtinGlobals": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-return-assign</code>
    (<a href="#rule-canonical-no-return-assign">back to comparison table 👆</a>)
    <a id="rule-xo-no-return-assign" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-return-await</code>
    (<a href="#rule-canonical-no-return-await">back to comparison table 👆</a>)
    <a id="rule-xo-no-return-await" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-self-assign</code>
    (<a href="#rule-canonical-no-self-assign">back to comparison table 👆</a>)
    <a id="rule-xo-no-self-assign" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "props": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-unused-expressions</code>
    (<a href="#rule-canonical-no-unused-expressions">back to comparison table 👆</a>)
    <a id="rule-xo-no-unused-expressions" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowShortCircuit": false,
    "allowTaggedTemplates": false,
    "allowTernary": false,
    "enforceForJSX": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-void</code>
    (<a href="#rule-canonical-no-void">back to comparison table 👆</a>)
    <a id="rule-xo-no-void" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "allowAsStatement": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-warning-comments</code>
    (<a href="#rule-canonical-no-warning-comments">back to comparison table 👆</a>)
    <a id="rule-xo-no-warning-comments" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "warn",
  {
    "location": "start",
    "terms": [
      "todo",
      "@toto"
    ]
  }
]</code></pre></td>
  <td><pre><code>[
  "warn"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>prefer-promise-reject-errors</code>
    (<a href="#rule-canonical-prefer-promise-reject-errors">back to comparison table 👆</a>)
    <a id="rule-xo-prefer-promise-reject-errors" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowEmptyReject": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>prefer-regex-literals</code>
    (<a href="#rule-canonical-prefer-regex-literals">back to comparison table 👆</a>)
    <a id="rule-xo-prefer-regex-literals" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "disallowRedundantWrapping": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>wrap-iife</code>
    (<a href="#rule-canonical-wrap-iife">back to comparison table 👆</a>)
    <a id="rule-xo-wrap-iife" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "inside"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "inside",
  {
    "functionPrototypeMethods": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>yoda</code>
    (<a href="#rule-canonical-yoda">back to comparison table 👆</a>)
    <a id="rule-xo-yoda" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "never"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-undef</code>
    (<a href="#rule-canonical-no-undef">back to comparison table 👆</a>)
    <a id="rule-xo-no-undef" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "typeof": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-unused-vars</code>
    (<a href="#rule-canonical-no-unused-vars">back to comparison table 👆</a>)
    <a id="rule-xo-no-unused-vars" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "args": "after-used",
    "argsIgnorePattern": "^_",
    "caughtErrors": "all",
    "caughtErrorsIgnorePattern": "^_$",
    "ignoreRestSiblings": true,
    "vars": "all"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-buffer-constructor</code>
    (<a href="#rule-canonical-no-buffer-constructor">back to comparison table 👆</a>)
    <a id="rule-xo-no-buffer-constructor" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-restricted-imports</code>
    (<a href="#rule-canonical-no-restricted-imports">back to comparison table 👆</a>)
    <a id="rule-xo-no-restricted-imports" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "domain",
  "freelist",
  "smalloc",
  "punycode",
  "sys",
  "querystring",
  "colors"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>array-bracket-newline</code>
    (<a href="#rule-canonical-array-bracket-newline">back to comparison table 👆</a>)
    <a id="rule-xo-array-bracket-newline" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "minItems": 1,
    "multiline": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  "consistent"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>array-element-newline</code>
    (<a href="#rule-canonical-array-element-newline">back to comparison table 👆</a>)
    <a id="rule-xo-array-element-newline" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "minItems": 1,
    "multiline": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  "consistent"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>camelcase</code>
    (<a href="#rule-canonical-camelcase">back to comparison table 👆</a>)
    <a id="rule-xo-camelcase" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "ignoreDestructuring": false,
    "ignoreGlobals": false,
    "ignoreImports": false,
    "properties": "always"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>computed-property-spacing</code>
    (<a href="#rule-canonical-computed-property-spacing">back to comparison table 👆</a>)
    <a id="rule-xo-computed-property-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "never"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "never",
  {
    "enforceForClassMembers": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>func-name-matching</code>
    (<a href="#rule-canonical-func-name-matching">back to comparison table 👆</a>)
    <a id="rule-xo-func-name-matching" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "considerPropertyDescriptor": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>indent</code>
    (<a href="#rule-canonical-indent">back to comparison table 👆</a>)
    <a id="rule-xo-indent" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  2
]</code></pre></td>
  <td><pre><code>[
  "error",
  "tab",
  {
    "SwitchCase": 1,
    "flatTernaryExpressions": false,
    "ignoreComments": false,
    "offsetTernaryExpressions": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>jsx-quotes</code>
    (<a href="#rule-canonical-jsx-quotes">back to comparison table 👆</a>)
    <a id="rule-xo-jsx-quotes" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "prefer-single"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>keyword-spacing</code>
    (<a href="#rule-canonical-keyword-spacing">back to comparison table 👆</a>)
    <a id="rule-xo-keyword-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "after": true,
    "before": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>lines-between-class-members</code>
    (<a href="#rule-canonical-lines-between-class-members">back to comparison table 👆</a>)
    <a id="rule-xo-lines-between-class-members" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "always",
  {
    "exceptAfterSingleLine": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>max-depth</code>
    (<a href="#rule-canonical-max-depth">back to comparison table 👆</a>)
    <a id="rule-xo-max-depth" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "warn"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>max-nested-callbacks</code>
    (<a href="#rule-canonical-max-nested-callbacks">back to comparison table 👆</a>)
    <a id="rule-xo-max-nested-callbacks" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "warn",
  4
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>max-params</code>
    (<a href="#rule-canonical-max-params">back to comparison table 👆</a>)
    <a id="rule-xo-max-params" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "warn",
  {
    "max": 4
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>max-statements-per-line</code>
    (<a href="#rule-canonical-max-statements-per-line">back to comparison table 👆</a>)
    <a id="rule-xo-max-statements-per-line" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "max": 1
  }
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>new-cap</code>
    (<a href="#rule-canonical-new-cap">back to comparison table 👆</a>)
    <a id="rule-xo-new-cap" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "capIsNew": true,
    "newIsCap": true,
    "properties": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-mixed-operators</code>
    (<a href="#rule-canonical-no-mixed-operators">back to comparison table 👆</a>)
    <a id="rule-xo-no-mixed-operators" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-multiple-empty-lines</code>
    (<a href="#rule-canonical-no-multiple-empty-lines">back to comparison table 👆</a>)
    <a id="rule-xo-no-multiple-empty-lines" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "max": 1,
    "maxBOF": 0,
    "maxEOF": 1
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "max": 1
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>object-curly-spacing</code>
    (<a href="#rule-canonical-object-curly-spacing">back to comparison table 👆</a>)
    <a id="rule-xo-object-curly-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "never"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>operator-linebreak</code>
    (<a href="#rule-canonical-operator-linebreak">back to comparison table 👆</a>)
    <a id="rule-xo-operator-linebreak" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "after"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "before"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>padded-blocks</code>
    (<a href="#rule-canonical-padded-blocks">back to comparison table 👆</a>)
    <a id="rule-xo-padded-blocks" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "never"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "never",
  {
    "allowSingleLineBlocks": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>quote-props</code>
    (<a href="#rule-canonical-quote-props">back to comparison table 👆</a>)
    <a id="rule-xo-quote-props" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "as-needed",
  {
    "numbers": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  "as-needed"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>space-before-function-paren</code>
    (<a href="#rule-canonical-space-before-function-paren">back to comparison table 👆</a>)
    <a id="rule-xo-space-before-function-paren" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "anonymous": "always",
    "asyncArrow": "always",
    "named": "never"
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>space-unary-ops</code>
    (<a href="#rule-canonical-space-unary-ops">back to comparison table 👆</a>)
    <a id="rule-xo-space-unary-ops" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "nonwords": false,
    "words": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>spaced-comment</code>
    (<a href="#rule-canonical-spaced-comment">back to comparison table 👆</a>)
    <a id="rule-xo-spaced-comment" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "always",
  {
    "block": {
      "balanced": true,
      "exceptions": [
        "-",
        "+",
        "*"
      ],
      "markers": [
        "!",
        "*"
      ]
    },
    "line": {
      "exceptions": [
        "-",
        "+",
        "*"
      ],
      "markers": [
        "!",
        "/",
        "=>"
      ]
    }
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>arrow-body-style</code>
    (<a href="#rule-canonical-arrow-body-style">back to comparison table 👆</a>)
    <a id="rule-xo-arrow-body-style" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>arrow-parens</code>
    (<a href="#rule-canonical-arrow-parens">back to comparison table 👆</a>)
    <a id="rule-xo-arrow-parens" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "always"
]</code></pre></td>
  <td><pre><code>[
  "error",
  "as-needed"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>generator-star-spacing</code>
    (<a href="#rule-canonical-generator-star-spacing">back to comparison table 👆</a>)
    <a id="rule-xo-generator-star-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "after": false,
    "before": true
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  "both"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-useless-computed-key</code>
    (<a href="#rule-canonical-no-useless-computed-key">back to comparison table 👆</a>)
    <a id="rule-xo-no-useless-computed-key" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "enforceForClassMembers": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>no-useless-rename</code>
    (<a href="#rule-canonical-no-useless-rename">back to comparison table 👆</a>)
    <a id="rule-xo-no-useless-rename" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "ignoreDestructuring": false,
    "ignoreExport": false,
    "ignoreImport": false
  }
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>prefer-arrow-callback</code>
    (<a href="#rule-canonical-prefer-arrow-callback">back to comparison table 👆</a>)
    <a id="rule-xo-prefer-arrow-callback" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "allowNamedFunctions": true,
    "allowUnboundThis": true
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>prefer-const</code>
    (<a href="#rule-canonical-prefer-const">back to comparison table 👆</a>)
    <a id="rule-xo-prefer-const" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "destructuring": "all",
    "ignoreReadBeforeAssign": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>prefer-destructuring</code>
    (<a href="#rule-canonical-prefer-destructuring">back to comparison table 👆</a>)
    <a id="rule-xo-prefer-destructuring" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "off"
]</code></pre></td>
  <td><pre><code>[
  "error",
  {
    "AssignmentExpression": {
      "array": false,
      "object": false
    },
    "VariableDeclarator": {
      "array": false,
      "object": true
    }
  },
  {
    "enforceForRenamedProperties": false
  }
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>template-curly-spacing</code>
    (<a href="#rule-canonical-template-curly-spacing">back to comparison table 👆</a>)
    <a id="rule-xo-template-curly-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  "never"
]</code></pre></td>
  <td><pre><code>[
  "error"
]</code></pre></td>
</tr>
<tr>
  <th colspan="2" align="left">
    <code>yield-star-spacing</code>
    (<a href="#rule-canonical-yield-star-spacing">back to comparison table 👆</a>)
    <a id="rule-xo-yield-star-spacing" />
  </th>
</tr>
<tr>
  <td><pre><code>[
  "error",
  {
    "after": true,
    "before": false
  }
]</code></pre></td>
  <td><pre><code>[
  "error",
  "both"
]</code></pre></td>
</tr>
</table>
<!-- END incompatibleRules -->
