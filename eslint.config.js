import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  rules: {
    'no-console': ['error', { allow: ['log', 'warn', 'error'] }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  },
})
