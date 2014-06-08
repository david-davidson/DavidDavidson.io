Portfolio.service('portfolioModel',
    function() {
        this.getCopy = function() {
            return [
                {
                    title: 'Posts on blog.logos.com',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, perspiciatis, nobis saepe officiis unde neque rerum blanditiis at. Nobis, quam, sint unde facilis maxime dolore voluptate officia libero excepturi cupiditate ipsum vitae repudiandae temporibus tempora a porro cumque. Omnis nulla blanditiis aut architecto suscipit exercitationem quae accusamus sunt optio praesentium.',
                    bullets: [
                        {
                            bullet: '<a href="test.com">Greek math</a>: this one was sweet',
                            url: 'test.com',
                            description: 'test'
                        },
                        {
                            bullet: 'Another post',
                            url: 'test.com',
                            description: 'test'
                        }
                    ]
                },                
                {
                    title: 'Noet.com',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, assumenda, nam, quae, fuga ab debitis nisi consequuntur commodi eum natus nesciunt repellat nihil minima et beatae! Saepe, aliquid, dolorum expedita in consectetur blanditiis vitae sit pariatur earum tenetur id esse voluptatibus autem libero praesentium molestiae cumque aliquam excepturi nulla impedit!',
                    url: 'test.com'
                },
                {
                    title: 'Copyanswers.com',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam, quod voluptatibus iure magnam eum nemo veritatis atque totam officiis. Dignissimos, voluptatum, sapiente reiciendis nemo beatae facilis fuga sed aliquam ab repellat deserunt debitis laborum numquam ut eaque ea inventore facere nesciunt eligendi unde minima animi pariatur! Delectus, error, velit?',
                    url: 'test.com'
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