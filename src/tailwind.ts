import { FlatCompat } from '@eslint/eslintrc';

export function defineTailwind() {
  const compat = new FlatCompat();

  return compat.config({
    // https://github.com/francoismassart/eslint-plugin-tailwindcss
    extends: ['plugin:tailwindcss/recommended'],
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  });
}
