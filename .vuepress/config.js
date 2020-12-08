module.exports = {
  base: '/',
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
                link: 'https://developer.bifrost.finance',
              },
              {
                text: 'Whitepaper',
                link: 'https://whitepaper.bifrost.finance',
              },
              {
                text: 'Wiki',
                link: 'https://wiki.bifrost.finance',
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
                        'Airdrop | KSM Twitter ',
                      ],
                      [
                        '/en/events/finished/event-08.md',
                        'Airdrop | MATH & KSM Twitter ',
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
                    'AMA Article One',
                  ],
                  [
                    '/en/news/ama-02.md',
                    'AMA Article Two',
                  ],
                  [
                    '/en/news/ama-03.md',
                    'AMA Article Three',
                  ],
                  [
                    '/en/news/ama-04.md',
                    'AMA Article Four',
                  ],
                  [
                    '/en/news/ama-05.md',
                    'AMA Article Five',
                  ],
                  [
                    '/en/news/ama-06.md',
                    'AMA Article Six',
                  ],
                  [
                    '/en/news/ama-07.md',
                    'AMA Article Seven',
                  ],
                ],
              },
              {
                title: 'Exclusive Interview',
                collapsable: false,
                children: [
                  [
                    '/en/news/published.md',
                    'PolkaWorld',
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
                title: 'Turtorials',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  [
                    '/en/help/node-general-tutorial.md',
                    'Node Running Turtorial',
                  ],
                  [
                    '/en/help/validator-tutorial.md',
                    'Validator Turtorial',
                  ],
                  [
                    '/en/help/eos-testnet-account-register.md',
                    'EOS Jungle Testnet Account Register Turtorials',
                  ],
                  [
                    '/en/help/eos-transfer-tutorial.md',
                    'EOS Jungle Testnet Cross-chain Transfer Turtorial',
                  ],
                  [
                    '/en/help/bnc-wallet-register-tutorials.md',
                    'Bifrost Address Register',
                  ],
                  [
                    '/en/help/wiki-translation-register-tutorials.md',
                    'WiKi Translation Turtorial',
                  ],
                ],
              },
              {
                title: 'FAQ',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  [
                    '/en/help/faq.md',
                    'FAQ',
                  ],
                ],
              },
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
                link: 'https://developer.bifrost.finance',
              },
              {
                text: 'Whitepaper',
                link: 'https://whitepaper.bifrost.finance',
              },
              {
                text: 'Wiki',
                link: 'https://wiki.bifrost.finance',
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
                children: [
                  {
                    title: '节点活动',
                    collapsable: false,
                    children: [
                    ],
                  },
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
                      [
                        '/zh/events/finished/event-09.md',
                        'POC2 早鸟节点',
                      ],
                      [
                        '/zh/events/finished/event-03.md',
                        'Asgard 激励测试网',
                      ],
                      [
                        '/zh/events/finished/event-07.md',
                        'Asgard CC2 激励测试网',
                      ],
                      [
                        '/zh/events/finished/event-20.md',
                        'Asgard CC3 激励测试网',
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
                      [
                        '/zh/events/finished/event-14.md',
                        'Doter × Bifrost × 币乎（第八期）',
                      ],
                      [
                        '/zh/events/finished/event-15.md',
                        '阿苏区块链 × Bifrost（第九期）',
                      ],
                      [
                        '/zh/events/finished/event-16.md',
                        'MXC 抹茶 × Bifrost（第十期）',
                      ],
                      [
                        '/zh/events/finished/event-17.md',
                        'Bifrost 海外首期 AMA（第十一期）',
                      ],
                      [
                        '/zh/events/finished/event-18.md',
                        'BlueMountainLabs × Bifrost（第十二期）',
                      ],
                      [
                        '/zh/events/finished/event-23.md',
                        'DeFiG0 × Bifrost（第十三期）',
                      ],
                    ],
                  },
                  {
                    title: '其他活动',
                    collapsable: false,
                    children: [
                      [
                        '/zh/events/finished/event-04.md',
                        '有奖征文',
                      ],
                      [
                        '/zh/events/finished/event-21.md',
                        '视频大赛',
                      ],
                      [
                        '/zh/events/finished/event-22.md',
                        'Meme 创意大赛',
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
            sidebarDepth: 0,
            children: [
              [
                '/zh/contribution/long-term.md',
                'Long Term',
              ],
              [
                '/zh/contribution/join-us.md',
                '加入我们',
              ],
              [
                '/zh/contribution/Wiki-contribution.md',
                'Bifrost 长期贡献奖励公示',
              ],
            ],
          },
          {
            title: 'News',
            collapsable: false,
            sidebarDepth: 1,
            children: [
              {
                title: '线下活动',
                collapsable: false,
                children: [
                  {
                    title: '波卡中国行',
                    collapsable: false,
                    children: [
                      [
                        '/zh/news/ama-14.md',
                        '波卡中国行-上海站',
                      ],
                      [
                        '/zh/news/ama-21.md',
                        '波卡中国行-南京站',
                      ],
                    ],
                  },
                  {
                    title: '厦门区块链周',
                    collapsable: false,
                    children: [
                      [
                        '/zh/news/ama-12.md',
                        '开放金融大会',
                      ],
                      [
                        '/zh/news/ama-13.md',
                        'PolkaVerse-厦门站',
                      ],
                    ],
                  },
                  {
                    title: '其他活动',
                    collapsable: false,
                    children: [
                      [
                        '/zh/news/ama-15.md',
                        '金色沙龙 & PolkaVerse',
                      ],
                      [
                        '/zh/news/ama-16.md',
                        'DEFI创新者大会',
                      ],
                    ],
                  },
                ],
              },
              {
                title: '线上活动',
                collapsable: false,
                children: [
                  {
                    title: '媒体 AMA',
                    collapsable: false,
                    children: [
                      [
                        '/zh/news/ama-07.md',
                        '链团',
                      ],
                      [
                        '/zh/news/ama-10.md',
                        '鸵鸟区块链',
                      ],
                      [
                        '/zh/news/ama-11.md',
                        'Cointelegraph 中文',
                      ],
                      [
                        '/zh/news/ama-20.md',
                        '火星财经',
                      ],
                      [
                        '/zh/news/ama-02.md',
                        '链读',
                      ],
                      [
                        '/zh/news/ama-03.md',
                        '链读 & PolkaBase',
                      ],
                    ],
                  },
                  {
                    title: '钱包 AMA',
                    collapsable: false,
                    children: [
                      [
                        '/zh/news/ama-08.md',
                        'Hyperpay',
                      ],
                      [
                        '/zh/news/ama-09.md',
                        'Mathwallet',
                      ],
                    ],
                  },
                  {
                    title: 'Exchange AMA',
                    collapsable: false,
                    children: [
                      [
                        '/zh/news/ama-05.md',
                        'HotTalk',
                      ],
                      [
                        '/zh/news/ama-17.md',
                        'MXC 抹茶',
                      ],
                      [
                        '/zh/news/ama-18.md',
                        'BigOne 币格',
                      ],
                      [
                        '/zh/news/ama-22.md',
                        'CoinW 币赢',
                      ],
                    ],
                  },
                  {
                    title: '社区 AMA',
                    collapsable: false,
                    children: [
                      [
                        '/zh/news/ama-24.md',
                        'DeFiG0',
                      ],
                    ],
                  },
                  {
                    title: '其他活动',
                    collapsable: false,
                    children: [
                      [
                        '/zh/news/ama-01.md',
                        'AMA 问答汇总（第一期）',
                      ],
                      [
                        '/zh/news/ama-04.md',
                        'AMA 问答汇总（第二期）',
                      ],
                      [
                        '/zh/news/ama-06.md',
                        'AMA 问答汇总（第三期）',
                      ],
                      [
                        '/zh/news/ama-19.md',
                        'AMA 问答汇总（第四期）',
                      ],
                    ],
                  },
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
                    '/zh/help/node-general-tutorial.md',
                    'Bifrost 节点通用教程',
                  ],
                  [
                    '/zh/help/validator-tutorial.md',
                    'Validator 验证人教程',
                  ],
                  [
                    '/zh/help/eos-testnet-account-register.md',
                    'EOS 测试账号创建 & 测试币领取教程',
                  ],
                  [
                    '/zh/help/eos-transfer-tutorial.md',
                    'EOS 测试网跨链转账教程',
                  ],
                  [
                    '/zh/help/token-vtoken-tutorial.md',
                    'Token 转 vToken 教程',
                  ],
                  [
                    '/zh/help/bnc-wallet-register-tutorials.md',
                    'Bifrost 地址创建教程',
                  ],
                  [
                    '/zh/help/wiki-translation-register-tutorials.md',
                    'Crowdin Wiki 翻译注册教程',
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