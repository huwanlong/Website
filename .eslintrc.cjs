/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  rules: {
    // 'no-console': 'off',
    // 'import/no-unresolved': 'off',
    // 'import/extensions': 'off',
    // 'import/no-absolute-path': 'off',
    // 'import/no-extraneous-dependencies': 'off',
    // 'vue/no-multiple-template-root': 'off',
    // 'linebreak-style': ['error', 'unix'],
    // 'no-param-reassign': [
    //   'error',
    //   {
    //     props: true,
    //     ignorePropertyModificationsFor: ['state', 'config']
    //   }
    // ]
  }
}
