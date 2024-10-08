# @keupoz/eslint-config

[![NPM Version](https://img.shields.io/npm/v/@keupoz/eslint-config)](https://www.npmjs.com/package/@keupoz/eslint-config)

Personal ESLint config based on [antfu's config](https://github.com/antfu/eslint-config).

- Semi colons are enabled
- Stricter bracket style disallowing braceless expressions hanging down
- Import sorting is handled by Perfectionist with a consistent order
- Union types sorting enabled (handled by Perfectionist)

## Usage

```javascript
// eslint.config.mjs
import keupoz from '@keupoz/eslint-config';

export default keupoz({
  // All original options are supported.
  // `stylistic` and `rules` options are extended instead of being completely overriden.
});
```

```jsonc
// .vscode/settings.json
{
  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.defaultFormatter": null,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off", "fixable": true },
    { "rule": "format/*", "severity": "off", "fixable": true },
    { "rule": "*-indent", "severity": "off", "fixable": true },
    { "rule": "*-spacing", "severity": "off", "fixable": true },
    { "rule": "*-spaces", "severity": "off", "fixable": true },
    { "rule": "*-order", "severity": "off", "fixable": true },
    { "rule": "*-dangle", "severity": "off", "fixable": true },
    { "rule": "*-newline", "severity": "off", "fixable": true },
    { "rule": "*quotes", "severity": "off", "fixable": true },
    { "rule": "*semi", "severity": "off", "fixable": true }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "gql",
    "graphql",
    "astro",
    "svelte",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss"
  ]
}
```
