module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
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
    "plugin:prettier/recommended",
  ],
  env: {
    browser: true,
  },
  rules: {
    "ember/no-mixins": "off",
    "ember/no-get": "off",
    "ember/use-ember-data-rfc-395-imports": "off",
    "ember/require-computed-property-dependencies": "off",
  },
  overrides: [
    // node files
    {
      files: [
        ".eslintrc.js",
        ".template-lintrc.js",
        "ember-cli-build.js",
        "make-a-release.js",
        "testem.js",
        "blueprints/*/index.js",
        "config/**/*.js",
        "tests/dummy/config/**/*.js",
        "lib/**/*.js",
        "index.js",
      ],
      parserOptions: {
        sourceType: "script",
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ["node"],
    },
    {
      files: ["**/tests/**/*.js", "**/engine.js", "**/app.js", "**/index.js"],
      rules: {
        "ember/avoid-leaking-state-in-ember-objects": "off",
      },
    },
  ],
};
