module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-recommended", "prettier", "prettier/vue", "eslint:recommended"],
  rules: {
    // Override some rules
  }, 
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
};
