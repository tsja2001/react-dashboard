module.exports = {
  env: { browser: true, es2020: true },
  overrides: [
    {
      files: ['*.cjs'],
      env: {
        commonjs: true,
        jest: true
      }
    }
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    // 需要先定义props的类型, 否则会报错
    'react/prop-types': 'off'
  }
}
