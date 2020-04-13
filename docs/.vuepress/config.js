module.exports = {
  // 页面标题
  title: "will个人主页",
  // 网页描述
  description: "生活不止眼前的苟且还有诗和远方的田野",
  dest: "./myBlog",
  base: "/myBlog/",
  head: [
    // 页面icon
    ["link", { rel: "icon", href: "/logo.png" }],
  ],
  // 端口号
  port: 8000,
  markdown: {
    // 代码块行号
    lineNumbers: true,
  },
  themeConfig: {
    // 最后更新时间
    lastUpdated: "最后更新时间",
    // 所有页面自动生成侧边栏
    sidebar: "auto",
    // 仓库地址 页面不显示 github
    // repo: 'https://github.com/weixinfei123/myBlog.git',
    // 仓库链接label
    repoLabel: "gitHub",
    // 编辑链接
    editLinks: true,
    // 编辑链接label
    editLinkText: "编辑此页",
    // 导航
    nav: [
      {
        text: "学无止境",
        items: [
          { text: "JavaScript", link: "/keeplearning/JavaScript/" },
          { text: "Vue", link: "/keeplearning/vue/" },
          { text: "React", link: "/keeplearning/react/" },
        ],
      },
      { text: "面试指导", link: "/interview/" },
      {
        text: "书籍",
        items: [
          {
            text: "JavaScript书籍",
            items: [
              {
                text: "你不知道的javascript上",
                link: "/books/JavaScript/你不知道的javascript上.md",
              },
              {
                text: "你不知道的javascript中",
                link: "/books/JavaScript/你不知道的javascript中.md",
              },
              {
                text: "你不知道的javascript下",
                link: "/books/JavaScript/你不知道的javascript下.md",
              },
            ],
          },
          {
            text: "git书籍",
            items: [
              {
                text: "精通git",
                link: "/books/git/目录.md",
              },
            ],
          },
        ],
      },
      {
        text: "收藏夹",
        items: [
          { text: "开发工具", link: "/favorites/tool/" },
          { text: "网址收藏", link: "/favorites/website/" },
        ],
      },
      {text: '问题集锦', link: '/problem/'},
      { text: "基础配置功能", link: "/common/" },
    ],
    sidebar: {
      '/problem/': [
        {
          title: 'javascript问题',
          collapsable: true,
          children: [
            '/problem/javascript/js.md',
            '/problem/javascript/test.md',
          ]
        },
        {
          title: 'css问题',
          collapsable: true,
          children: [
            '/problem/css/css1.md',
            '/problem/css/css2.md'
          ]
        },
        {
          title: 'vue问题',
          collapsable: true,
          children: [
            '/problem/vue.md'
          ]
        },
        {
          title: 'uniapp问题',
          collapsable: true,
          children: [
            '/problem/uniapp.md'
          ]
        },
        {
          title: 'nginx问题',
          collapsable: true,
          children: [
            '/problem/nginx.md'
          ]
        },
        {
          title: 'git问题',
          collapsable: true,
          children: [
            '/problem/git.md'
          ]
        }
      ],
      '/keeplearning/JavaScript/': [
        {
          title: 'JavaScript异步编程',
          collapsable: false,
          children: [
            '/keeplearning/JavaScript/js-异步编程.md',
            '/keeplearning/JavaScript/js-解析call-apply-bind.md'
          ]
        },
        {
          title: 'JavaScript经典问题',
          collapsable: true,
          children: [
            '/keeplearning/JavaScript/js-problem.md'
          ]
        }
      ]
    }
  },
  configureWebpack: {
    resolve: {
      // 静态资源的别名
      alias: {
        "@vuepress": "../images/vuepress",
        "@vue": "../images/vue",
      },
    },
  },
};
