module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': [
    'airbnb'
  ],
  'parser': 'babel-eslint',
  "parserOptions": {
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "jsx": true,
      "impliedStrict": true,
    }
  },
  'rules': {
    // Disabled just while learning
    'react/jsx-one-expression-per-line': 'off',
    'react/button-has-type': 'off',
    // Permanent preferences
    'no-nested-ternary': 'off',
    'no-console': 'off',
  }
}