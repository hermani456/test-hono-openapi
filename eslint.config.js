import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: {
    css: true,
    html: true,
    markdown: true,
  },
  typescript: true,
  prettier: true, // Enable Prettier integration
  rules: {
    'no-console': ['error', { allow: ['log', 'warn', 'error'] }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'style/arrow-parens': 'off', // Turn off conflicting rule with Prettier
    'style/brace-style': 'off', // Turn off conflicting rule with Prettier
  },
})
