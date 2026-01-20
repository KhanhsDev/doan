import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

import eslintJs from '@eslint/js';
import eslintTs from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';

import globals from 'globals';

// ----------------------------------------------------------------------

/**
 * @rules common
 * from 'react', 'eslint-plugin-react-hooks'...
 */
const commonRules = () => ({
  ...reactHooksPlugin.configs.recommended.rules,

  'func-names': 1,
  'no-bitwise': 1,
  'no-empty': 1,
  'no-unused-vars': 0,
  'object-shorthand': 1,
  'no-useless-rename': 1,
  'default-case-last': 2,
  'consistent-return': 2,
  'no-constant-condition': 1,
  'default-case': [2, { commentPattern: '^no default$' }],
  'lines-around-directive': [2, { before: 'always', after: 'always' }],
  'arrow-body-style': 0,

  // react
  'react/jsx-key': 0,
  'react/prop-types': 0,
  'react/display-name': 0,
  'react/no-children-prop': 0,
  'react/jsx-boolean-value': 2,
  'react/self-closing-comp': 2,
  'react/react-in-jsx-scope': 0,
  'react-hooks/exhaustive-deps': 0,
  'react/jsx-no-useless-fragment': [1, { allowExpressions: true }],
  'react/jsx-curly-brace-presence': [2, { props: 'never', children: 'never' }],

  // typescript
  '@typescript-eslint/no-shadow': 1,
  '@typescript-eslint/no-unused-expressions': 1,
  '@typescript-eslint/no-explicit-any': 0,
  '@typescript-eslint/no-empty-object-type': 0,
  '@typescript-eslint/consistent-type-imports': 1,
  '@typescript-eslint/no-unused-vars': [1, { args: 'none' }],
});

/**
 * @rules import
 */
const importRules = () => ({
  ...importPlugin.configs.recommended.rules,

  'import/named': 0,
  'import/export': 0,
  'import/default': 0,
  'import/namespace': 0,
  'import/no-named-as-default': 0,
  'import/no-named-as-default-member': 0,
  'import/newline-after-import': 2,
  'import/no-cycle': [
    0,
    {
      maxDepth: '∞',
      ignoreExternal: false,
      allowUnsafeDynamicCyclicDependency: false,
    },
  ],
});

/**
 * @rules unused imports
 */
const unusedImportsRules = () => ({
  'unused-imports/no-unused-imports': 1,
  'unused-imports/no-unused-vars': [
    0,
    {
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'after-used',
      argsIgnorePattern: '^_',
    },
  ],
});

/**
 * @rules sort imports/exports
 */
const sortImportsRules = () => {
  const customGroups = {
    auth: ['custom-auth'],
    hooks: ['custom-hooks'],
    utils: ['custom-utils'],
    types: ['custom-types'],
    routes: ['custom-routes'],
    sections: ['custom-sections'],
    components: ['custom-components'],
    constant: ['custom-constants'],
    react: ['custom-react'],
  };

  return {
    'perfectionist/sort-named-imports': [1, { type: 'line-length', order: 'asc' }],
    'perfectionist/sort-named-exports': [1, { type: 'line-length', order: 'asc' }],
    'perfectionist/sort-exports': [
      1,
      {
        order: 'asc',
        type: 'line-length',
        groupKind: 'values-first',
      },
    ],
    'perfectionist/sort-imports': [
      2,
      {
        order: 'asc',
        ignoreCase: true,
        type: 'line-length',
        environment: 'node',
        newlinesBetween: 'always',
        internalPattern: ['^src/.+'],
        groups: [
          customGroups.react,
          ['builtin', 'external'],
          'type',
          customGroups.routes,
          customGroups.types,
          customGroups.constant,
          customGroups.utils,
          customGroups.hooks,
          'internal',
          customGroups.components,
          customGroups.sections,
          customGroups.auth,
          ['parent', 'sibling', 'index'],
          ['parent-type', 'sibling-type', 'index-type'],
          'object',
          'unknown',
        ],
        customGroups: {
          value: {
            [customGroups.auth]: ['^src/auth/.+'],
            [customGroups.react]: ['react'],
            [customGroups.hooks]: ['hooks/.+'],
            [customGroups.utils]: ['utils/.+'],
            [customGroups.types]: ['interfaces/.+'],
            [customGroups.routes]: ['^src/routes/.+'],
            [customGroups.sections]: ['^src/sections/.+'],
            [customGroups.components]: ['components/.+'],
            [customGroups.constant]: ['global'],
          },
        },
      },
    ],
  };
};

/**
 * Custom ESLint configuration
 */
const customConfig = {
  plugins: {
    'react-hooks': reactHooksPlugin,
    'unused-imports': unusedImportsPlugin,
    perfectionist: perfectionistPlugin,
    import: importPlugin,
  },
  settings: {
    ...importPlugin.configs.typescript.settings,
    'import/resolver': {
      ...importPlugin.configs.typescript.settings['import/resolver'],
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    ...commonRules(),
    ...importRules(),
    ...unusedImportsRules(),
    ...sortImportsRules(),
  },
};

// ----------------------------------------------------------------------

export default [
  // ✅ FIX: eslint-plugin-import FALSE POSITIVE
  {
    files: ['eslint.config.mjs'],
    rules: {
      'import/no-unresolved': 'off',
    },
  },

  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },

  {
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'dist/',
      'build/',
      '.env*',
      '.cache/',
      '.parcel-cache/',
      '.nuxt/',
      '.vscode/',
      '.idea/',
      '*.min.js',
      '*.min.css',
      '*.tsbuildinfo',
      'public/charting_library/',
      'certificates/',
      '*.pem',
      'next.config.js',
      'postcss.config.js',
      'tailwind.config.ts',
      'svgo.config.js',
      'custom.d.ts',
      'next-env.d.ts',
      'Dockerfile*',
      './src/instrumentation.ts',
      './src/utils/sc-codec-min-bin.js',
      './src/components/TradingView/charting_library.js',
      './src/components/TradingView/charting_library.d.ts',
    ],
  },

  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    settings: {
      react: { version: 'detect' },
    },
  },

  eslintJs.configs.recommended,
  ...eslintTs.configs.recommended,
  reactPlugin.configs.flat.recommended,
  customConfig,
];
