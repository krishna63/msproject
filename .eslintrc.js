module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'spellcheck'
  ],
  rules: {
    "spellcheck/spell-checker": [2,
       {
           "comments": true,
           "strings": true,
           "identifiers": true,
           "lang": "en_US",
           "skipWords": [
               "dict",
               "aff",
               "hunspellchecker",
               "hunspell",
               "utils"
           ],
           "skipIfMatch": [
               "http://[^s]*",
               "^[-\\w]+\/[-\\w\\.]+$" //For MIME Types
           ],
           "skipWordIfMatch": [
               "^foobar.*$" // words that begin with foobar will not be checked
           ],
           "minLength": 3
        }
    ]
  },
};
