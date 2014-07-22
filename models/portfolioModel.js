Portfolio.service('portfolioModel',
    function() {
        this.getCopy = function() {
            return [
                {
                    title: 'Noet.com',
                    description: ' * Noet is Logos for the classics. That&rsquo;s a weird position, b/c Christian audience doesn&rsquo;t like Noet, secular audience doesn&rsquo;t like presence of Christian parent company. So we gave Noet its own site, most of which I wrote, especially, the Home, About, etc., 404 pages. (Oh, and a much larger new site on the way, too!)',
                    url: 'http://noet.com/'
                },
                {
                    title: 'Posts on blog.logos.com',
                    description: '* Have written lots of stuff on the blog&mdash;long-form content, hard-sell marketing copy, promotion of both core Logos product and&mdash;personal fave&mdash;secular Noet offshoot.',
                    bullets: [
                        {
                            title: 'Why You Should Care about Math',
                            url: 'http://blog.logos.com/2013/11/greek-math-pythagoras-plato-zeno-aristotle/',
                            bullets: [
                                {
                                    bullet: 'Evergreen Big Content'
                                },
                                {
                                    bullet: 'Do Longtail right: obscure topic, devoted readers, deep research'
                                },
                                {
                                    bullet: 'Why successful? Achieved its immediate goal, was tweeted out by AMSI'
                                }
                            ]
                        },
                        {
                            title: 'Last Chance! Don&rsquo;t Miss Your Introductory Savings on Noet Bundles',
                            url: 'http://blog.logos.com/2014/01/noet-bundles-last-chance-introductory-savings/',
                            bullets: [
                                {
                                    bullet: 'Hard sell at close of promotional period: not trying to build brand, trying to make money today.'
                                },
                                {
                                    bullet: 'Picked out customer pain points, addressed them'
                                },
                                {
                                    bullet: 'Made money'
                                }
                            ]
                            // description: ' * Hard sell at close of promotional period: not trying to build brand, trying to make money today. * Picked out customer pain points, addressed them * Made money'
                        },
                        {
                            title: 'Why Philosophy Matters',
                            url: 'http://blog.logos.com/2013/10/why-philosophy-matters/',
                            bullets: [
                                {
                                    bullet: 'Like first one, evergreen brand-builder'
                                },
                                {
                                    bullet: 'Additional challenge tho: demonstrate to Christian audience that philosophy safe; demonstrate to secular readers that this brand not TOO christian.'
                                },
                                {
                                    bullet: 'success: voice toed that line, strong results for SEO (link to search results)'
                                }
                            ]
                            // description: ' * Like first one, evergreen brand-builder * Additional challenge tho: demonstrate to Christian audience that philosophy safe; demonstrate to secular readers that this brand not TOO christian. * success: voice toed that line, strong results for SEO (link to search results) '
                        },
                    ]
                },                
                {
                    title: 'Copyanswers.com',
                    description: ' * Way back when, produced series of training docs for coworkers; put them online (just a WP site) for reference. Note that I treat marketing style /  CMOS as authoritative: know that we&rsquo;re not really talking rite and rong here.',
                    bullets: [
                        {
                            bullet: 'one'
                        },
                        {
                            bullet: 'two'
                        },
                        {
                            bullet: 'three'
                        }
                    ],
                    url: 'http://www.copyanswers.com/'
                }
            ];
        };
        this.getProjects = function() {
            return [           
                {
                    title: 'Waycross.com',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam, quod voluptatibus iure magnam eum nemo veritatis atque totam officiis. Dignissimos, voluptatum, sapiente reiciendis nemo beatae facilis fuga sed aliquam ab repellat deserunt debitis laborum numquam ut eaque ea inventore facere nesciunt eligendi unde minima animi pariatur! Delectus, error, velit?',
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
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam, quod voluptatibus iure magnam eum nemo veritatis atque totam officiis. Dignissimos, voluptatum, sapiente reiciendis nemo beatae facilis fuga sed aliquam ab repellat deserunt debitis laborum numquam ut eaque ea inventore facere nesciunt eligendi unde minima animi pariatur! Delectus, error, velit?',
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
                        {
                            bullet: 'Advanced Custom Fields'
                        }
                    ],
                    image: '../images/bloom-square.png',
                    url: 'http://www.bloomyoganw.com/'
                },
                {
                    title: 'SublimeScript / SublimeScript.com',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam, quod voluptatibus iure magnam eum nemo veritatis atque totam officiis. Dignissimos, voluptatum, sapiente reiciendis nemo beatae facilis fuga sed aliquam ab repellat deserunt debitis laborum numquam ut eaque ea inventore facere nesciunt eligendi unde minima animi pariatur! Delectus, error, velit?',
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
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam, quod voluptatibus iure magnam eum nemo veritatis atque totam officiis. Dignissimos, voluptatum, sapiente reiciendis nemo beatae facilis fuga sed aliquam ab repellat deserunt debitis laborum numquam ut eaque ea inventore facere nesciunt eligendi unde minima animi pariatur! Delectus, error, velit?',
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
                        {
                            bullet: 'JavaScript'
                        },
                        {
                            bullet: "Blade"
                        }
                    ],
                    image: '../images/zipper-square.png',
                    url: 'http://zippercomputer.com/'
                },     
                // Maybe restore this once you can have 10 total, not 8?
                // {
                //     title: 'OverviewBible.com',
                //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam, quod voluptatibus iure magnam eum nemo veritatis atque totam officiis. Dignissimos, voluptatum, sapiente reiciendis nemo beatae facilis fuga sed aliquam ab repellat deserunt debitis laborum numquam ut eaque ea inventore facere nesciunt eligendi unde minima animi pariatur! Delectus, error, velit?',
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
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam, quod voluptatibus iure magnam eum nemo veritatis atque totam officiis. Dignissimos, voluptatum, sapiente reiciendis nemo beatae facilis fuga sed aliquam ab repellat deserunt debitis laborum numquam ut eaque ea inventore facere nesciunt eligendi unde minima animi pariatur! Delectus, error, velit?',
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
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam, quod voluptatibus iure magnam eum nemo veritatis atque totam officiis. Dignissimos, voluptatum, sapiente reiciendis nemo beatae facilis fuga sed aliquam ab repellat deserunt debitis laborum numquam ut eaque ea inventore facere nesciunt eligendi unde minima animi pariatur! Delectus, error, velit?',
                    technologies: [
                        {
                            bullet: 'AngularJS'
                        },
                        {
                            bullet: 'JavaScript'
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
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam, quod voluptatibus iure magnam eum nemo veritatis atque totam officiis. Dignissimos, voluptatum, sapiente reiciendis nemo beatae facilis fuga sed aliquam ab repellat deserunt debitis laborum numquam ut eaque ea inventore facere nesciunt eligendi unde minima animi pariatur! Delectus, error, velit?',
                    technologies: [
                        {
                            bullet: 'Python'
                        }
                    ],
                    image: '../images/linktagger.png',
                    url: 'https://github.com/david-davidson/linktagger.py'
                }
            ];
        };
    }
);