module.exports = {
    base: '/',
    title: 'Bifrost Wiki',
    description: 'Bifrost Wiki Documentation',
    markdown: {
        lineNumbers: true,
    },
    head: [
        ['link', { rel: 'shortcut icon', href: '/icon.png' }]
    ],
    locales: {
        '/en/': {
            lang: 'en-US',
            title: 'Bifrost Wiki',
            description: "Bifrost Wiki Documentation",
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
                          {text: 'Developer', link: 'https://developer.bifrost.finance'},
                          {text: 'Whitepaper',  link: 'https://whitepaper.bifrost.finance'},
                          {text: 'Wiki', link: 'https://wiki.bifrost.finance'},
                        ],
                    },
                    {text: 'GitHub', link: 'https://github.com/bifrost-finance'},
                ],
                sidebar: [

                    {
                        title: 'General',
                        collapsable: true,
                        sidebarDepth: 0,
                        children: [
                            {
                                title: 'Getting Started',
                                children: [
                                    {title:'What is Bifrost', path:'/en/general/start/what.md'},
                                    {title:'Why Bifrost?', path:'/en/general/start/why.md'},
                                    {title:'How does Bifrost work?', path:'/en/general/start/how.md'},
                                    {title:'Why should you use Bifrost?', path:'/en/general/start/use.md'}
                                ],
                            },
                            {
                                title: 'Frequently Asked Questions (FAQs)',
                                children: [
                                    {title:'Launch', path:'en/general/faq/launch.md'},
                                    {title:'Roadmap', path:'en/general/faq/roadmap.md'},
                                ],
                            },
                            {title:'Glossary', path:'/en/general/glossary.md'},
                        ],
                    },


                    {
                        title: 'Learn',
                        collapsable: true,
                        sidebarDepth: 0,
                        children: [
                            {title:'Launch Phases', path:'/en/learn/launch.md'},
                            {
                                title: 'Basics',
                                children: [
                                    {title:'Participants', path:'/en/learn/participant.md'},
                                    {title:'Bifrost Native Token (BNC)', path:'/en/learn/bnc.md'},
                                    {title:'Create BNC Account', path:'/en/learn/create.md'},
                                    {title:'Query BNC Information', path:'/en/learn/query.md'},
                                    {title:'vToken', path:'/en/learn/vtoken.md'},
                                    {title:'vsToken & vsBound', path:'/en/learn/vstoken.md'},
                                    // {title:'vsBond', path:'/en/learn/vsBond.md'},
                                    {title:'Risk Control', path:'/en/learn/risk.md'},
                                ],
                            },
                        ],
                    },

                    {
                        title: 'DevOps',
                        collapsable: true,
                        sidebarDepth: 0,
                        children: [
                            ['/en/devops/environment.md', 'Environment'],
                            ['/en/devops/build.md', 'Build & Run'],
                            ['/en/devops/rococo.md', 'Rococo'],
                            ['/en/devops/asgard.md', 'Asgard'],
                            ['/en/devops/poa.md', 'PoA Network'],
                            ['/en/devops/bifrostJS.md', 'BifrostJS'],
                            ['/en/devops/misc.md', 'Miscellaneous'],
                        ],
                    },

                    {
                        title: 'Research',
                        collapsable: true,
                        sidebarDepth: 0,
                        children: [
                            ['/en/research/zenlink.md', 'Zenlink'],
                            ['/en/research/bancor.md', 'Bancor'],
                            ['/en/research/balancer.md', 'Balancer'],
                        ],
                    },

                    {
                        title: 'Publicity',
                        collapsable: true,
                        sidebarDepth: 0,
                        children: [
                            {title:'Token Distribution', path:'/en/publicity/token.md'},
                            {title:'Progress', path:'/en/publicity/progress.md'},
                            {title:'Contribute', path:'/en/publicity/contribute.md'},
                            {title:'ETH 2.0 Deposit History', path:'/en/publicity/history.md'},
                            {title:'Activity', path:'/en/publicity/activity.md'},
                        ],
                    },

                    {
                        title: 'Governance',
                        collapsable: true,
                        sidebarDepth: 0,
                        children: [
                            ['/en/governance/vote.md', 'Vote'],
                        ],
                    },

                ],
            },
        },
    },
}
