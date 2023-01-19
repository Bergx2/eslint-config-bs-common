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
    'no-restricted-imports': [
      'error',
      {
        paths: ['lodash'],
        patterns: ['!lodash/*'],
      },
    ],
  },
};
