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
              {text: 'Whitepaper', link: 'https://docs.bifrost.codes/whitepaper'},
              {text: 'Wiki', link: 'https://docs.bifrost.codes/wiki'},
            ],
          },
          {text: 'GitHub', link: 'https://github.com/bifrost-codes'},
        ],
        sidebar: [
          {
            title: 'Events',
            collapsable: false,
            sidebarDepth: 3,
            children: [
              {
                title: 'Ongoing',
                collapsable: false,
                children: [
                  {
                    title: 'Node Event',
                    collapsable: true,
                    children: [
                      ['/en/events/ongoing/node-event-01-xxxxx.md', 'node 01'],
                    ],
                  },
                  {
                    title: 'AMA Event',
                    collapsable: true,
                    children: [
                      ['/en/events/ongoing/ama-event-01-xxxxx.md', 'ama 01'],
                      ['/en/events/ongoing/ama-event-02-xxxxx.md', 'ama 02'],
                    ],
                  },
                  {
                    title: 'Airdrop Event',
                    collapsable: true,
                    children: [
                      ['/en/events/ongoing/airdrop-event-01-xxxxx.md', 'airdrop 01'],
                    ],
                  },
                ],
              },
              {
                title: 'Finished',
                collapsable: false,
                children: [
                  {
                    title: 'Node Event',
                    collapsable: true,
                    children: [
                    ],
                  },
                  {
                    title: 'AMA Event',
                    collapsable: true,
                    children: [
                      ['/en/events/finished/ama-event-01-xxxxx.md', 'ama 01'],
                      ['/en/events/finished/ama-event-02-xxxxx.md', 'ama 02'],
                    ],
                  },
                  {
                    title: 'Airdrop Event',
                    collapsable: true,
                    children: [
                      ['/en/events/finished/airdrop-event-01-xxxxx.md', 'airdrop 01'],
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: 'Contribute',
            collapsable: false,
            sidebarDepth: 1,
            children: [
              ['/en/contribute/long-term.md', 'Long Term'],
            ],
          },
          {
            title: 'News',
            collapsable: false,
            sidebarDepth: 1,
            children: [
              ['/en/news/published.md', 'Published'],
            ],
          },
          {
            title: 'Help',
            collapsable: false,
            sidebarDepth: 1,
            children: [
              ['/en/help/faq.md', 'FAQ'],
            ],
          }
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
              {text: '白皮书', link: 'https://docs.bifrost.codes/whitepaper'},
              {text: '帮助文档', link: 'https://docs.bifrost.codes/wiki'},
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