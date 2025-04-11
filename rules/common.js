module.exports = {
  extends: ['airbnb', 'prettier', 'eslint:recommended'],
  rules: {
    'max-len': ['error', 150],
    'no-restricted-globals': 2,
    camelcase: 0,
    'no-return-assign': 0,
    'no-plusplus': 0,
    'no-eval': 0,
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    curly: ['error', 'all'],
    'consistent-return': 'error',
    'no-restricted-imports': [
      'error',
      {
        paths: ['lodash'],
        patterns: ['!lodash/*'],
      },
    ],
    'arrow-body-style': 'off',
    'no-unsafe-optional-chaining': 'off',
    'default-param-last': 'off',
  },
};
