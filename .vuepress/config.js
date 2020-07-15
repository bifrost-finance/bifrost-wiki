module.exports =  {
  base: '/wiki/',
  title: 'Bifrost Wiki',
  description: 'A parachain designed for staking\'s liquidity. 为 Staking 提供流动性的跨链网络。',
  markdown: {
    lineNumbers: true,
  },
  head: [
    [
      'link',
      {
        rel: 'shortcut icon',
        href: '/favicon_icon.png',
      },
    ],
  ],
  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'Bifrost Wiki',
      description: 'A parachain designed for staking\'s liquidity',
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
          {
            text: 'Home',
            link: 'https://bifrost.finance',
          },
          {
            text: 'Translate',
            link: 'http://wiki-translate.bifrost.finance/',
          },
          {
            text: 'Documentation',
            items: [
              {
                text: 'Developer',
                link: 'https://docs.bifrost.finance/developer',
              },
              {
                text: 'Whitepaper',
                link: 'https://docs.bifrost.finance/whitepaper',
              },
              {
                text: 'Wiki',
                link: 'https://docs.bifrost.finance/wiki',
              },
            ],
          },
          {
            text: 'GitHub',
            link: 'https://github.com/bifrost-finance',
          },
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
                children: [],
              },
              {
                title: 'Finished',
                collapsable: false,
                children: [
                  {
                    title: 'Node Event',
                    collapsable: false,
                    children: [
                      [
                        '/en/events/finished/event-03.md',
                        'Node Event | Bifrost Asgard CC1',
                      ],
                      [
                        '/en/events/finished/event-09.md',
                        'Node Event | POC2 Testnet',
                      ],
                    ],
                  },
                  {
                    title: 'Airdrop Giveaway',
                    collapsable: false,
                    children: [
                      [
                        '/en/events/finished/event-01.md',
                        'KSM Twitter Airdrop',
                      ],
                      [
                        '/en/events/finished/event-08.md',
                        'MATH & KSM Twitter Airdrop',
                      ],
                    ],
                  },
                  {
                    title: 'AMA Event',
                    collapsable: false,
                    children: [
                      [
                        '/en/events/finished/event-11.md',
                        'AMA | Bifrost',
                      ],
                      [
                        '/en/events/finished/event-10.md',
                        'AMA | LianDu × Bifrost',
                      ],
                      [
                        '/en/events/finished/event-06.md',
                        'AMA | Polkadot Round Table',
                      ],
                      [
                        '/en/events/finished/event-05.md',
                        'AMA | Polkaworld × Phala x Bifrost',
                      ],
                      [
                        '/en/events/finished/event-02.md',
                        'AMA | Hotbit x Bifrost',
                      ],
                      [
                        '/en/events/finished/event-12.md',
                        'AMA | Substrate China Day',
                      ],
                      [
                        '/en/events/finished/event-13.md',
                        'AMA | LianTuan x Bifrost',
                      ],
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: 'Contribution',
            collapsable: false,
            sidebarDepth: 1,
            children: [
              [
                '/en/contribution/long-term.md',
                'Long Term',
              ],
            ],
          },
          {
            title: 'News',
            collapsable: false,
            sidebarDepth: 1,
            children: [
              {
                title: 'AMA Articles',
                collapsable: false,
                children: [
                  [
                    '/en/news/ama-01.md',
                    'Article One',
                  ],
                  [
                    '/en/news/ama-02.md',
                    'Article Two',
                  ],
                  [
                    '/en/news/ama-03.md',
                    'Article Three',
                  ],
                  [
                    '/en/news/ama-04.md',
                    'Article Four',
                  ],
                  [
                    '/en/news/ama-05.md',
                    'Article Five',
                  ],
                  [
                    '/en/news/ama-06.md',
                    'Article Six',
                  ],
                  [
                    '/en/news/ama-07.md',
                    'Article Seven',
                  ],
                  ],
              },
              {
                    title: 'Media Report',
                    collapsable: false,
                    children: [
                      [
                        '/en/news/published.md',
                        'PolkaWorld Exclusive Interview',
                      ],
                    ],
              },
            ],
          },
          {
            title: 'Help',
            collapsable: false,
            sidebarDepth: 1,
            children: [
              [
                '/en/help/faq.md',
                'FAQ',
              ],
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
          {
            text: '首页',
            link: 'https://bifrost.finance',
          },
          {
            text: '翻译',
            link: 'http://wiki-translate.bifrost.finance/',
          },
          {
            text: '文档',
            items: [
              {
                text: 'Developer',
                link: 'https://docs.bifrost.finance/developer',
              },
              {
                text: 'Whitepaper',
                link: 'https://docs.bifrost.finance/whitepaper',
              },
              {
                text: 'Wiki',
                link: 'https://docs.bifrost.finance/wiki',
              },
            ],
          },
          {
            text: 'GitHub',
            link: 'https://github.com/bifrost-finance',
          },
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
                children: [],
              },
              {
                title: 'Finished',
                collapsable: false,
                children: [
                  {
                    title: '节点活动',
                    collapsable: false,
                    children: [
                      [
                        '/zh/events/finished/event-09.md',
                        'POC2 早鸟节点',
                      ],
                      [
                        '/zh/events/finished/event-03.md',
                        'Asgard 节点活动',
                      ],
                    ],
                  },
                  {
                    title: '空投活动',
                    collapsable: false,
                    children: [
                      [
                        '/zh/events/finished/event-08.md',
                        'KSM 空投第一期',
                      ],
                      [
                        '/zh/events/finished/event-01.md',
                        'KSM 空投第二期',
                      ],
                    ],
                  },
                  {
                    title: 'AMA 活动',
                    collapsable: false,
                    children: [
                      [
                        '/zh/events/finished/event-11.md',
                        'Bifrost AMA（第一期）',
                      ],
                      [
                        '/zh/events/finished/event-10.md',
                        '链读 X Bifrost（第二期）',
                      ],
                      [
                        '/zh/events/finished/event-06.md',
                        '波卡圆桌会（第三期）',
                      ],
                      [
                        '/zh/events/finished/event-05.md',
                        'Phala X Bifrost（第四期）',
                      ],
                      [
                        '/zh/events/finished/event-02.md',
                        'HotTalk X Bifrost（第五期）',
                      ],
                      [
                        '/zh/events/finished/event-12.md',
                        'Substrate China Day（第六期）',
                      ],
                      [
                        '/zh/events/finished/event-13.md',
                        '链团 X Bifrost（第七期）',
                      ],
                    ],
                  },
                  {
                    title: '其他',
                    collapsable: false,
                    children: [
                      [
                        '/zh/events/finished/event-04.md',
                        '有奖征文',
                      ],
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: 'Contribution',
            collapsable: false,
            sidebarDepth: 1,
            children: [
              [
                '/zh/contribution/long-term.md',
                'Long Term',
              ],
              [
                '/zh/contribution/join-us.md',
                '加入我们',
              ],
            ],
          },
          {
            title: 'News',
            collapsable: false,
            sidebarDepth: 1,
            children: [
              {
                title: 'AMA 文章',
                collapsable: false,
                children: [
                  [
                    '/zh/news/ama-01.md',
                    'AMA 问答汇总（第一期）',
                  ],
                  [
                    '/zh/news/ama-02.md',
                    'AMA 问答汇总（第二期）',
                  ],
                  [
                    '/zh/news/ama-03.md',
                    'AMA 问答汇总（第三期）',
                  ],
                  [
                    '/zh/news/ama-04.md',
                    'AMA 问答汇总（第四期）',
                  ],
                  [
                    '/zh/news/ama-05.md',
                    'AMA 问答汇总（第五期）',
                  ],
                  [
                    '/zh/news/ama-06.md',
                    'AMA 问答汇总（第六期）',
                  ],
                  [
                    '/zh/news/ama-07.md',
                    'AMA 问答汇总（第七期）',
                  ],
                ],
              },
              {
                title: '媒体报导',
                collapsable: false,
                children: [
                  [
                    '/zh/news/published.md',
                    'PolkaWorld 专访',
                  ],
                ],
              },
            ],
          },
          {
            title: 'Help',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              {
                title: 'FAQ',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  [
                    '/zh/help/faq.md',
                    '常见问题',
                  ],
                ],
              },
              {
                title: '教程',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  [
                    '/zh/help/eos-testnet-account-register.md',
                    'EOS 测试网账号创建 & 测试币领取教程',
                  ],
                  [
                    '/zh/help/bnc-wallet-register-tutorials.md',
                    'BNC 钱包地址创建教程',
                  ],
                  [
                    '/zh/help/wiki-translation-register-tutorials.md',
                    'Crowdin Wiki 翻译注册教程',
                  ],
                  [
                    '/zh/help/node-general-tutorial.md',
                    'Bifrost 节点通用教程',
                  ],
                ],
              },
            ],
          },
        ],
      },
    },
  },
};