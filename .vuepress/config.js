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
          {text: 'Home', link: 'https://bifrost.finance'},
          {
            text: 'Documentation',
            items: [
              {text: 'Developer', link: 'https://docs.bifrost.finance/developer'},
              {text: 'Whitepaper', link: 'https://docs.bifrost.finance/whitepaper'},
              {text: 'Wiki', link: 'https://docs.bifrost.finance/wiki'},
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
                ],
              },
              {
                title: 'Finished',
                collapsable: false,
                children: [
                  ['/en/events/finished/event-01.md', 'Airdrop Twitter KSM'],
                  ['/en/events/finished/event-02.md', 'AMA Hotbit x Bifrost'],
                  ['/en/events/finished/event-03.md', 'Node Bifrost Asgard'],
                  ['/en/events/finished/event-04.md', 'Prize essay'],
                  ['/en/events/finished/event-05.md', 'Polkaworld × Phala x Bifrost'],
                  ['/en/events/finished/event-06.md', 'Liandu x Bifrost'],
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
          {text: '首页', link: 'https://bifrost.finance'},
          {
            text: '文档',
            items: [
              {text: 'Developer', link: 'https://docs.bifrost.finance/developer'},
              {text: 'Whitepaper', link: 'https://docs.bifrost.finance/whitepaper'},
              {text: 'Wiki', link: 'https://docs.bifrost.finance/wiki'},
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
                  ['/zh/events/ongoing/event-07.md', '活动7'],
                ],
              },
              {
                title: 'Finished',
                collapsable: false,
                children: [
                  {
                      title: '节点活动',
                      collapsable: false,
                      children: [
                        ['/zh/events/finished/event-03.md', 'Asgard 节点活动'],
                        ['/zh/events/finished/event-09.md', 'POC2 早鸟节点'],
                      ],
                  },
                  {
                      title: '空投活动',
                      collapsable: false,
                      children: [
                        ['/zh/events/finished/event-01.md', 'KSM 空投第二期'],
                        ['/zh/events/finished/event-08.md', 'KSM 空投第一期'],
                      ],
                  },
                  {
                      title: 'AMA 活动',
                      collapsable: false,
                      children: [
                        ['/zh/events/finished/event-02.md', 'HotTalk X Bifrost（第五期）'],
                        ['/zh/events/finished/event-05.md', 'Phala X Bifrost（第四期）'],
                        ['/zh/events/finished/event-06.md', '波卡圆桌会（第三期）'],
                        ['/zh/events/finished/event-10.md', '链读 X Bifrost（第二期）'],
                        ['/zh/events/finished/event-11.md', 'Bifrost AMA（第一期）'],
                      ],
                  },
                  {
                      title: '其他',
                      collapsable: false,
                      children: [
                        ['/zh/events/finished/event-04.md', '有奖征文'],
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
              ['/zh/contribute/long-term.md', 'Long Term'],
            ],
          },
          {
            title: 'News',
            collapsable: false,
            sidebarDepth: 1,
            children: [
              ['/zh/news/published.md', 'Published'],
            ],
          },
          {
            title: 'Help',
            collapsable: false,
            sidebarDepth: 1,
            children: [
              ['/zh/help/faq.md', 'FAQ'],
            ],
          }
        ],
      },
    },
  },
};