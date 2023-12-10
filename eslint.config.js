import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'curly': ['error', 'multi-line'],
    'node/prefer-global/process': 'off',
  },
})
