/**
 * @type {}
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    'xo',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.mjs'],
  overrides: [
    {

      env: {
        node: true,
      },

      files: [
        '.eslintrc.{js,cjs}',
        'vite.config.ts',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      extends: [
        'xo-typescript',
      ],
      files: [
        'src/**/*.ts',
      ],
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    indent: ['error', 2],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error', // Or "error"
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
};
