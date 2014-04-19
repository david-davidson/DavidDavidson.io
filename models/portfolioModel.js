Portfolio.service('portfolioModel',
    function() {
        this.getProjects = function() {
            return [
                {
                    title: 'Zipper Computer',
                    description: 'FPO',
                    technologies: [
                        {
                            bullet: 'Laravel'
                        },
                        {
                            bullet: 'Foundation'
                        },
                        {
                            bullet: 'SCSS'
                        },
                        {
                            bullet: 'PHP'
                        },
                    ],
                    image: '../images/zipper.png',
                    url: 'http://zippercomputer.com/'
                },                
                {
                    title: 'Waycross Investment',
                    description: 'FPO',
                    technologies: [
                        {
                            bullet: 'WordPress'
                        },
                        {
                            bullet: 'PHP'
                        }
                    ],
                    image: '../images/waycross.png',
                    url: 'http://waycross.com/',
                },
                {
                    title: 'Bloom Yoga',
                    description: 'FPO',
                    technologies: [
                        {
                            bullet: 'WordPress'
                        },
                        {
                            bullet: 'Foundation'
                        },
                        {
                            bullet: 'SCSS'
                        },
                        {
                            bullet: 'PHP'
                        },
                    ],
                    image: '../images/bloom.png',
                    url: 'http://www.bloomyoganw.com/'
                },
                {
                    title: 'SublimeScript',
                    description: 'FPO',
                    technologies: [
                        {
                            bullet: 'HTML/CSS'
                        },
                        {
                            bullet: 'PHP'
                        },
                        {
                            bullet: 'Autohotkey_L'
                        }
                    ],
                    image: '../images/sublimeScript.png',
                    url: 'http://sublimescript.com/'
                },
                // Maybe restore this once you can have 10 total, not 8?
                // {
                //     title: 'OverviewBible.com',
                //     description: 'FPO',
                //     technologies: [
                //         {
                //             bullet: 'WordPress'
                //         },
                //         {
                //             bullet: 'PHP'
                //         }
                //     ],
                //     url: 'http://overviewbible.com/',
                // },      
                {
                    title: 'Bible Search Chrome extension',
                    description: 'FPO',
                    technologies: [
                        {
                            bullet: 'HTML/CSS'
                        }
                    ],
                    image: '../images/bibleSearch.png',
                    url: 'https://chrome.google.com/webstore/detail/bible-search/enlaminhpdcdeemcnfnecpjbafhhajff?hl=en-US'
                },
                {
                    title: 'DavidDavidson.io',
                    description: 'FPO',
                    technologies: [
                        {
                            bullet: 'AngularJS'
                        },
                        {
                            bullet: 'SCSS'
                        }
                    ],
                    url: 'https://github.com/david-davidson/DavidDavidson.io'
                },
                {
                    title: 'linktagger.py',
                    description: 'FPO',
                    technologies: [
                        {
                            bullet: 'Python'
                        }
                    ],
                    image: '../images/linktagger.png',
                    url: 'https://github.com/david-davidson/linktagger.py'
                },
                {
                    title: 'github profile',
                    description: 'FPO',
                    technologies: [
                        {
                            bullet: 'Autohotkey_L'
                        },
                        {
                            bullet: 'Bash'
                        },
                        {
                            bullet: 'Python'
                        },
                        {
                            bullet: 'Javascript/AngularJS'
                        },
                    ],
                    url: 'https://github.com/david-davidson'
                }
            ]
        }
    }
);