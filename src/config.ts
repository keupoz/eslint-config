import antfu, { type OptionsConfig, type TypedFlatConfigItem } from '@antfu/eslint-config';
import { defineTailwind } from './tailwind';

type AntfuOptions = OptionsConfig & TypedFlatConfigItem;

export interface ConfigOptions extends Partial<AntfuOptions> {
  /**
   * Patterns for option 'internal-pattern' of 'perfectionist/sort-imports' rule
   * @default []
   */
  importsInternalPattern?: string[];

  /** Enable 'eslint-plugin-tailwindcss' plugin */
  tailwind?: boolean;
}

export function defineConfig(options: ConfigOptions = {}): ReturnType<typeof antfu> {
  const { importsInternalPattern = [], tailwind, stylistic, rules, ...overrides } = options;

  const config = antfu({
    stylistic: typeof stylistic === 'boolean'
      ? stylistic
      : {
          semi: true,
          ...stylistic,
        },
    formatters: true,
    isInEditor: false,
    rules: {
      'curly': ['error', 'all'],
      'style/brace-style': ['error', '1tbs'],
      'import/order': ['off'],
      'perfectionist/sort-imports': ['error', {
        'type': 'natural',
        'internal-pattern': importsInternalPattern,
        'newlines-between': 'never',
        'groups': [
          'type',
          ['builtin', 'external'],
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'object',
          'style',
          'unknown',
        ],
      }],
      'perfectionist/sort-union-types': ['error', {
        'type': 'natural',
        'nullable-last': true,
      }],
      ...rules,
    },
    ...overrides,
  });

  if (tailwind) {
    config.append(defineTailwind());
  }

  return config;
}
