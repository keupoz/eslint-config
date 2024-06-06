# @keupoz/eslint-config

[![NPM Version](https://img.shields.io/npm/v/@keupoz/eslint-config)](https://www.npmjs.com/package/@keupoz/eslint-config)

Personal ESLint config based on [antfu's config](https://github.com/antfu/eslint-config).

- Semi colons are enabled
- Stricter bracket style disallowing braceless expressions hanging down
- Import sorting is handled by Perfectionist with a consistent order
- Union types sorting enabled (handled by Perfectionist)
- Added optional Tailwind support

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
  // Enable the ESlint flat config support
  // (remove this if your ESLint extension above v3.0.5)
  "eslint.experimental.useFlatConfig": true,

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
    { "rule": "style/*", "severity": "off" },
    { "rule": "format/*", "severity": "off" },
    { "rule": "*-indent", "severity": "off" },
    { "rule": "*-spacing", "severity": "off" },
    { "rule": "*-spaces", "severity": "off" },
    { "rule": "*-order", "severity": "off" },
    { "rule": "*-dangle", "severity": "off" },
    { "rule": "*-newline", "severity": "off" },
    { "rule": "*quotes", "severity": "off" },
    { "rule": "*semi", "severity": "off" }
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
    "astro"
  ],

  // Set up rulers based on antfu settings
  "editor.rulers": [120]
}
```
