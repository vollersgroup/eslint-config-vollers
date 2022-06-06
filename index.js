module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: ["ember"],
  extends: [
    "eslint:recommended",
    "plugin:ember/recommended",
    "prettier/prettier",
  ],
  env: {
    browser: true,
  },
  rules: {
    'ember/closure-actions': 'off',
    "ember/no-get": "off",
    'ember/no-side-effects': 'off',
    'ember/no-observers': 'off',
    'ember/no-deeply-nested-dependent-keys-with-each': 'off'
  },
  overrides: [
    //graphql files
    {
      "files": ["*.graphql"],
      "parser": "@graphql-eslint/eslint-plugin",
      "plugins": ["@graphql-eslint"],
      "rules": {
        "@graphql-eslint/known-type-names": "error"
      }
    },
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js'
      ],
      parserOptions: {
        sourceType: "script",
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ["node"],
      rules: Object.assign(
        {},
        require('eslint-plugin-node').configs.recommended.rules,
        {
          // add your custom rules and overrides for node files here

          // this can be removed once the following is fixed
          // https://github.com/mysticatea/eslint-plugin-node/issues/77
          'node/no-unpublished-require': 'off'
        }
      )
    }
  ]
};
