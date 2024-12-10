module.exports = {
  types: [
    { value: 'feat', name: 'feat:     新特性' },
    { value: 'fix', name: 'fix:      修复bug' },
    { value: 'docs', name: 'docs:     文档变更' },
    { value: 'style', name: 'style:    代码格式(不影响代码运行的变动)' },
    { value: 'refactor', name: 'refactor: 重构(既不是增加feature，也不是修复bug)' },
    { value: 'perf', name: 'perf:     性能优化' },
    { value: 'test', name: 'test:     增加测试' },
    { value: 'chore', name: 'chore:    构建过程或辅助工具的变动' },
    { value: 'revert', name: 'revert:   回退' }
  ],
  scopes: [],
  messages: {
    type: '选择一种提交类型:',
    scope: '\n指定一个scope(可选):',
    subject: '短说明:\n',
    body: '详细说明(可选). 使用 "|" 换行:\n',
    breaking: 'Breaking Changes(可选):\n',
    footer: '关闭的issues(可选). 例如: #31, #34:\n',
    confirmCommit: '确认提交说明正确?'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['scope', 'body', 'breaking', 'footer']
};