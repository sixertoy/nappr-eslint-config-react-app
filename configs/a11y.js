/**
 * A11Y Rules
 * Inherited from Create-react-app config
 */
module.exports = {
  rules: {
    'jsx-a11y/alt-text': [
      2,
      {
        area: [],
        elements: ['img', 'object', 'area', 'input[type="image"]'],
        img: [],
        'input[type="image"]': [],
        object: [],
      },
    ],
    'jsx-a11y/anchor-has-content': [
      2,
      {
        components: [],
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      2,
      {
        aspects: ['noHref', 'invalidHref', 'preferButton'],
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'jsx-a11y/aria-role': [
      2,
      {
        ignoreNonDOM: false,
      },
    ],
    'jsx-a11y/autocomplete-valid': [
      0,
      {
        inputComponents: [],
      },
    ],
    'jsx-a11y/control-has-associated-label': [
      2,
      {
        controlComponents: [],
        depth: 5,
        ignoreElements: [
          'button',
          'audio',
          'canvas',
          'embed',
          'input',
          'textarea',
          'tr',
          'video'
        ],
        ignoreRoles: [
          'grid',
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'row',
          'tablist',
          'toolbar',
          'tree',
          'treegrid',
        ],
        labelAttributes: ['label'],
      },
    ],
    'jsx-a11y/heading-has-content': [
      2,
      {
        components: [''],
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      1,
      {
        assert: 'htmlFor',
      },
    ],
    'jsx-a11y/lang': 2,
    'jsx-a11y/media-has-caption': [
      2,
      {
        audio: [],
        track: [],
        video: [],
      },
    ],
    'jsx-a11y/no-autofocus': [
      2,
      {
        ignoreNonDOM: true,
      },
    ],
    'jsx-a11y/no-distracting-elements': [
      2,
      {
        elements: ['marquee', 'blink'],
      },
    ],
    'jsx-a11y/no-onchange': 0,
  }
};
