module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-hooks', 'prettier'], // Added 'prettier' to the plugins array
  rules: {
    'prettier/prettier': 'error',
    // Other rules...
  },
};
