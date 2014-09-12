'use strict';

module.exports = function(app) {
    app.service('portfolioModel', function() {
        this.getCopy = function() {
            return [
                {
                    title: 'Noet.com',
                    description: 'Noet, Logos Bible Software&rsquo;s philosophy/classics division, is a suite of tools and texts for better scholarship in the humanities. I wrote almost all of Noet.com&mdash;its <a href="http://noet.com/" target="_blank">home</a> and <a href="http://noet.com/about/" target="_blank">about</a> pages, the <a href="http://noet.com/404" target="_blank">404</a>, and&nbsp;more.',
                    url: 'http://noet.com/'
                },
                {
                    title: 'Posts on Blog.Logos.com',
                    description: 'I&rsquo;ve written <a href="http://blog.logos.com/author/david-davidson/" target="_blank">around 50 posts</a> on the Logos blog: evergreen content, hard-sell marketing copy, promotion of both Noet and the core Logos product, and more. Here are a few&nbsp;favorites:',
                    bullets: [
                        {
                            title: 'Why You Should Care about Math',
                            description: 'Tasked with promoting Noet&rsquo;s fairly obscure <a href="https://www.logos.com/product/34182/greek-mathematical-works-collection" target="_blank">Greek Mathematical Works Collection</a>, I opted for a content- and research-heavy approach that would bore casual readers but appeal to the truly passionate. The gamble paid off: the post exceeded its revenue goals, got strong social traction (18 tweets, 44 likes), and was even <a href="https://twitter.com/DiscoverAMSI/status/407676230134407168" target="_blank">tweeted out by the Australian Mathematical Sciences Institute</a>!',
                            url: 'http://blog.logos.com/2013/11/greek-math-pythagoras-plato-zeno-aristotle/'
                        },
                        {
                            title: 'Last Chance! Don&rsquo;t Miss Your Introductory Savings on Noet Bundles',
                            description: 'This was a hard-sell post at the end of an introductory promotional period. As such, its only goal was to make money <em>today</em>. Since I&rsquo;d already exhausted the core features and benefits, I used this last post as an opportunity to address objections&nbsp;head-on.',
                            url: 'http://blog.logos.com/2014/01/noet-bundles-last-chance-introductory-savings/'
                        },
                        {
                            title: 'Why Philosophy Matters',
                            description: 'Like the first post, this was an evergreen brand-builder. The challenge was to 1.) demonstrate to Logos&rsquo;s Christian audience that secular philosophy is legitimately interesting, and 2.) not alarm non-Christian readers (Noet&rsquo;s eventual target market) with an overly Christian voice. The post succeeded in keeping everyone happy, and it also owned the #1 Google ranking for &ldquo;Why philosophy matters&rdquo; for at least half a year.',
                            url: 'http://blog.logos.com/2013/10/why-philosophy-matters/'
                        }
                    ]
                },
                {
                    title: 'CopyAnswers.com',
                    description: 'A year or two ago, I wrote a series of training posts for fellow marketers at Logos; for reference, I put them online. These posts sum up my editorial philosophy, which emphasizes clarity, simplicity, and concision.',
                    url: 'http://www.copyanswers.com/'
                }
            ];
        };

        this.getProjects = function() {
            return [
                {
                    title: 'DavidDavidson.io',
                    description: 'This is the source of the site you&rsquo;re reading right now&mdash;it&rsquo;s an Angular app running on Node, deployed to Heroku. I&rsquo;ve tried to incorporate best practices: CommonJS-style modular code, MVC, etc. <a href="https://github.com/david-davidson/DavidDavidson.io" target="_blank">Take a look!</a>',
                    technologies: [
                        {
                            bullet: 'AngularJS'
                        },
                        {
                            bullet: 'Node.js'
                        },
                        {
                            bullet: 'Browserify / modular design'
                        },
                        {
                            bullet: 'Sass/SCSS'
                        },
                        {
                            bullet: 'Grunt'
                        },
                        {
                            bullet: 'Heroku'
                        }
                    ],
                    image: '../images/site.png',
                    url: 'https://github.com/david-davidson/DavidDavidson.io'
                },
                {
                    title: 'Along the Way',
                    description: 'This was a five-day group project in Code Fellows&rsquo; full-stack-JS accelerator. It&rsquo;s a minimal Backbone app that takes start and end points, uses the Google Maps API to build a route, uses the Yelp API to find points of interest along it, and renders a map that shows both your route and the possible places to visit along the way. (<a href="http://localhost-3000.herokuapp.com/" target="_blank">Give it a try</a>.)',
                    technologies: [
                        {
                            bullet: 'Backbone'
                        },
                        {
                            bullet: 'Node.js'
                        },
                        {
                            bullet: 'Express'
                        },
                        {
                            bullet: 'Handlebars'
                        },
                        {
                            bullet: 'Google Maps and Yelp APIs'
                        },
                        {
                            bullet: 'Mocha and Sinon'
                        },
                        {
                            bullet: 'Sass/SCSS'
                        },
                        {
                            bullet: 'Grunt'
                        },
                        {
                            bullet: 'Browserify'
                        },
                        {
                            bullet: 'Heroku'
                        }

                    ],
                    image: '../images/alongTheWay.png',
                    url: 'https://github.com/Localhost3000/along-the-way'
                },
                {
                    title: 'ZipperComputer.com views',
                    description: 'When Zipper Computer outgrew our boring old WordPress site, we decided to build an awesome replacement using the PHP framework Laravel. I helped design the new site, and then helped build the new <a href="http://zippercomputer.com/enterprise-web-design" target="_blank">web-design</a> and <a href="http://zippercomputer.com/growth-web-consulting" target="_blank">growth-consulting</a> views. We leaned pretty heavily on Foundation and jQuery for responsive design, with Blade for templating.',
                    technologies: [
                        {
                            bullet: 'Laravel'
                        },
                        {
                            bullet: 'Foundation'
                        },
                        {
                            bullet: 'Sass/SCSS'
                        },
                        {
                            bullet: 'PHP'
                        },
                        {
                            bullet: 'jQuery'
                        },
                        {
                            bullet: "Blade"
                        }
                    ],
                    image: '../images/zipper-square.png',
                    url: 'http://zippercomputer.com/'
                },
                {
                    title: 'linktagger.py',
                    description: 'This was a hobby project to 1.) learn some Python and 2.) automate one of the boring parts of my previous work in marketing: Google link tagging. It uses regular expressions to build tagged links automatically, all at once.',
                    technologies: [
                        {
                            bullet: 'Python'
                        },
                        {
                            bullet: 'Regular expressions'
                        }
                    ],
                    image: '../images/linktagger.png',
                    url: 'https://github.com/david-davidson/linktagger.py'
                },
                {
                    title: 'Bible Search Chrome extension',
                    description: 'This is the project that won my team the Shipping prize at Logos Bible Software&rsquo;s staff hackathon, summer &rsquo;13&mdash;it&rsquo;s a Chrome-extension wrapper for Logos&rsquo;s Biblia.com API. It was an early project for me, so I worked exclusively on the front end: HTML and CSS. (I also got my first taste of Git!)',
                    technologies: [
                        {
                            bullet: 'HTML'
                        },
                        {
                            bullet: 'CSS'
                        }
                    ],
                    image: '../images/bibleSearch.png',
                    url: 'https://chrome.google.com/webstore/detail/bible-search/enlaminhpdcdeemcnfnecpjbafhhajff?hl=en-US'
                },
                // {
                //     title: 'Waycross.com',
                //     description: 'Waycross.com is a pixel-for-pixel WordPress clone of a flat HTML/CSS site. I started with Underscores, a minimal starter theme, and built it into a fully editable site with separate menus and headers for separate pages, a custom blog template, and more.',
                //     technologies: [
                //         {
                //             bullet: 'WordPress'
                //         },
                //         {
                //             bullet: 'Underscores'
                //         },
                //         {
                //             bullet: 'PHP'
                //         }
                //     ],
                //     image: '../images/waycross-square.png',
                //     url: 'http://waycross.com/',
                // },
                // {
                //     title: 'BloomYogaNW.com',
                //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, veniam, quod voluptatibus iure magnam eum nemo veritatis atque totam officiis. Dignissimos, voluptatum, sapiente reiciendis nemo beatae facilis fuga sed aliquam ab repellat deserunt debitis laborum numquam ut eaque ea inventore facere nesciunt eligendi unde minima animi pariatur! Delectus, error, velit?',
                //     technologies: [
                //         {
                //             bullet: 'WordPress'
                //         },
                //         {
                //             bullet: 'Foundation'
                //         },
                //         {
                //             bullet: 'Sass/SCSS'
                //         },
                //         {
                //             bullet: 'PHP'
                //         },
                //         {
                //             bullet: 'Advanced Custom Fields'
                //         }
                //     ],
                //     image: '../images/bloom-square.png',
                //     url: 'http://www.bloomyoganw.com/'
                // },
                {
                    title: 'SublimeScript',
                    description: 'SublimeScript is an Autohotkey_L script (Windows only) that runs in the background and gives Sublime Text some of hotkeys you know from Microsoft Word&mdash;Ctrl-B for bold (&lt;strong&gt;), Ctrl-I for italics (&lt;em&gt;), plus much more. I include it here not because it&rsquo;s a terribly impressive project, but because it&rsquo;s where I taught myself to code. :)',
                    technologies: [
                        {
                            bullet: 'Autohotkey_L'
                        }
                    ],
                    image: '../images/sublimeScript.png',
                    url: 'https://github.com/david-davidson/SublimeScript'
                }
            ];
        };
    });
};