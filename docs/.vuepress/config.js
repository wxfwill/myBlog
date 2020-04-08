module.exports = {
  // 页面标题
  title: 'will个人主页',
  // 网页描述
  description: '记录前端点点滴滴',
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
      { text: '前端面试之道',link: '/interview/'},
      { text: 'Js书籍', items: [
          { text: '你不知道的JavaScript(上)', link: '/books/你不知道的javascript上'}, 
          { text: '你不知道的JavaScript(中)', link: '/books/你不知道的javascript中'},
          { text: '你不知道的JavaScript(下)', link: '/books/你不知道的javascript下'}
        ]
      },
      { text: 'Vue', link: '/vue/'},
      { text: 'JavaScript', link: '/JavaScript/'},
      {text: 'css', link: '/css/'},
      { text: 'Webpack',link: '/webpack/'},
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