module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 关闭名称校验
     'vue/multi-word-component-names': 'off',
     //关闭混合空格和制表符
     "no-mixed-spaces-and-tabs": 'off',
     //关闭标签闭合
     'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
     //解决axios问题
     'no-unused-vars': 'warn',
     'vue/no-unused-vars': "off", 
  }
}
