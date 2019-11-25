module.exports = {
  extends: './base.js',
  plugins: [
    'prefer-let',
    'unicorn',
    'node'
  ],
  rules: {
    'node/no-unsupported-features/node-builtins': ['error', {
      ignores: ['worker_threads']
    }],
    'node/no-unsupported-features/es-builtins': 'error',
    'node/no-unsupported-features/es-syntax': ['error', {
      ignores: ['modules', 'dynamicImport']
    }],

    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/no-for-loop': 'error',

    'prefer-let/prefer-let': 'error',

    'prefer-exponentiation-operator': 'error',
    'template-curly-spacing': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'no-dupe-class-members': 'error',
    'no-this-before-super': 'error',
    'prefer-rest-params': 'error',
    'constructor-super': 'error',
    'object-shorthand': 'error',
    'no-setter-return': 'error',
    'require-yield': 'error',
    'arrow-spacing': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'no-var': 'error'
  },
  env: {
    es6: true
  },
  parserOptions: {
    sourceType: 'module'
  }
}
