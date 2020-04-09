module.exports = {
  // 页面标题
  title: 'will个人主页',
  // 网页描述
  description: '生活不止眼前的苟且还有诗和远方的田野',
  dest: './myBlog',
  base: '/myBlog/',
  head: [
    // 页面icon
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  // 端口号
  port: 8000,
  markdown: {
    // 代码块行号
    lineNumbers: true
  },
  themeConfig: {
    // 最后更新时间
    lastUpdated: '最后更新时间',
    // 所有页面自动生成侧边栏
    sidebar: 'auto',
    // 仓库地址
    repo: 'https://github.com/weixinfei123/myBlog.git',
    // 仓库链接label
    repoLabel: 'gitHub',
    // 编辑链接
    editLinks: true,
    // 编辑链接label
    editLinkText: '编辑此页',
    // 导航
    nav: [
      { text: '面试指导',link: '/interview/'},
      {
        text: 'MVVM', items: [
          {text: 'Vue', link: '/mvvm/vue/'},
          {text: 'React', link: '/mvvm/react/'}
        ]
      },
      { text: '工具', link: '/tool/'},
      { text: 'JavaScript', link: '/JavaScript/'},
      { text: '基础配置功能',link: '/common/'}
  ]},
  configureWebpack: {
    resolve: {
      // 静态资源的别名
      alias: {
        '@vuepress': '../images/vuepress',
        '@vue': '../images/vue'
      }
    }
  }
}