Portfolio.service('portfolioModel',
    function() {
        this.getProjects = function() {
            return [           
                {
                    title: 'Waycross.com',
                    description: 'FPO',
                    technologies: [
                        {
                            bullet: 'WordPress'
                        },
                        {
                            bullet: 'PHP'
                        }
                    ],
                    image: '../images/waycross-square.png',
                    url: 'http://waycross.com/',
                },
                {
                    title: 'BloomYogaNW.com',
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
                    image: '../images/bloom-square.png',
                    url: 'http://www.bloomyoganw.com/'
                },
                {
                    title: 'SublimeScript/SublimeScript.com',
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
                {
                    title: 'ZipperComputer.com views',
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
                    image: '../images/zipper-square.png',
                    url: 'http://zippercomputer.com/'
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
                //     image: '',
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
                    image: '../images/site.png',
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
                }
                // {
                //     title: 'All my Github projects',
                //     description: 'FPO',
                //     technologies: [
                //         {
                //             bullet: 'Autohotkey_L'
                //         },
                //         {
                //             bullet: 'Bash'
                //         },
                //         {
                //             bullet: 'Python'
                //         },
                //         {
                //             bullet: 'Javascript/AngularJS'
                //         },
                //     ],
                //     image: '../images/Octocat.png',
                //     url: 'https://github.com/david-davidson'
                // }
            ]
        }
    }
);