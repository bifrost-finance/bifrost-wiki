module.exports = {
  base: '/wiki/',
  title: 'Bifrost Wiki',
  description: "A parachain designed for staking's liquidity. 为 Staking 提供流动性的跨链网络。",
  markdown: {
    lineNumbers: true,
  },
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon_icon.png' }]
  ],
  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'Bifrost Wiki',
      description: "A parachain designed for staking's liquidity",
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Bifrost Wiki',
      description: '为 Staking 提供流动性的跨链网络',
    },
  },
  themeConfig: {
    displayAllHeaders: true,
    search: true,
    locales: {
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit Page',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
        },
        nav: [
          {text: 'Home', link: 'https://bifrost.codes'},
          {
            text: 'Documentation',
            items: [
              {text: 'Developer', link: 'https://docs.bifrost.codes/developer'},
              {text: 'Wiki', link: 'https://docs.bifrost.codes/wiki'},
              {text: 'Whitepaper', link: 'https://docs.bifrost.codes/whitepaper'},
            ],
          },
          {text: 'GitHub', link: 'https://github.com/bifrost-codes'},
        ],
        sidebar: [
          {
            title: 'Category 1',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/en/category-1/page-1.md', 'Page 1'],
            ],
          },
        ],
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '编辑此页',
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用。',
            buttonText: '刷新',
          },
        },
        nav: [
          {text: '首页', link: 'https://bifrost.codes'},
          {
            text: '文档',
            items: [
              {text: '开发文档', link: 'https://docs.bifrost.codes/developer'},
              {text: '帮助文档', link: 'https://docs.bifrost.codes/wiki'},
              {text: '白皮书', link: 'https://docs.bifrost.codes/whitepaper'},
            ],
          },
          {text: 'GitHub', link: 'https://github.com/bifrost-codes'},
        ],
        sidebar: [
          {
            title: '分类一',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              ['/zh/category-1/page-1.md', '页面一'],
            ],
          },
        ],
      },
    },
  },
};