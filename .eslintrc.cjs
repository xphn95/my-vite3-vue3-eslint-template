module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'plugin:json/recommended',
    'plugin:markdown/recommended',
    'standard',
    './.eslintrc-auto-import.json'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-undef': 'off'
  },
  ignorePatterns: [
    '**/*.d.ts',
    '**/*.html'
  ]
}
