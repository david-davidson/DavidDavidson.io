// Set up routing
var portfolioConfig = function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        controller: 'homeController',
        templateUrl: 'views/homeView.html'
    })
    .when('/resume', {
        controller: 'resumeController',
        templateUrl: 'views/resumeView.html'
    })
    .when('/copy', {
        controller: 'portfolioController',
        templateUrl: 'views/copyView.html'
    })
    .when('/portfolio', {
        controller: 'portfolioController',
        templateUrl: 'views/portfolioView.html'
    })
    .when('/contact', {
        controller: 'contactController',
        templateUrl: 'views/contactView.html'
    })
    .otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
};

// Set up the Portfolio namespace
var Portfolio = angular.module('Portfolio', []).config([
    '$routeProvider', '$locationProvider',
    portfolioConfig]);

// Directives

// Bullet points on /resume
Portfolio.directive('ddBullets', function() {
    return {
        restrict: 'E', // So we can invoke it as a standalone element
        templateUrl: 'views/directives/bulletsDirective.html'
    };
});

// Down arrows
Portfolio.directive('ddArrow', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/directives/arrowDirective.html'
    };
});

// Slider
Portfolio.directive('ddSlider', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/directives/sliderDirective.html',
        controller: 'sliderController'
    };
});
Portfolio.service('homeModel',
    function() {
        this.getSkills = function() {
            return [
                {
                    title: 'Web',
                    description: 'I&rsquo;ve worked with HTML, CSS/SCSS, JavaScript, AngularJS, PHP, WordPress, Laravel, Python, and Bash, as well as tools like Git and Grunt. I&rsquo;m especially fond of UX and the front&nbsp;end.'
                },
                {
                    title: 'Writing',
                    description: 'Writing and editing taught me to clarify complex concepts and communicate them to anybody. They also taught me what to look for in code: readability, structure, concision, consistency.'
                },
                {
                    title: 'Marketing',
                    description: 'Marketing, like UX and writing, is all about empathizing with the user. I write for my audience, not myself, and I&rsquo;m comfortable across marketing channels&mdash;ads, email, social, and&nbsp;more.'
                }
            ];
        };
        this.getValues = function() {
            return [
                {
                    title: 'Learning',
                    description: 'I&rsquo;ve picked up a range of <span class="nobr">skills&mdash;</span>Spanish, copyediting, <span class="nobr">marketing&mdash;</span>and, in the process, learned to master new ones quickly. I try keep learning every&nbsp;day.'
                },
                {
                    title: 'Effort',
                    description: 'My greatest asset isn&rsquo;t talent; it&rsquo;s my work ethic. I&rsquo;m happiest when I can dedicate myself to an interesting task, and I&rsquo;ll happily go above and beyond to get a job&nbsp;done.'
                },
                {
                    title: 'Humility',
                    description: 'As an editor, I believe in the importance of feedback; as a writer, I know I need it as much as anyone. I try to put myself in situations where I&rsquo;m the small&nbsp;fish.'
                }
            ];
        };
        this.getTestimonials = function() {
            return [
                {
                    testimonial: 'There are simply not enough David Davidsons in the world. I&rsquo;ve never met a kinder spirit&nbsp;.&nbsp;.&nbsp;. He makes those around him better, and he is an incredible asset to everyone he works with. You won&rsquo;t find anyone more dedicated. In my review, when asked to rate my dedication to my work, <strong>my boss asked me to rate it &lsquo;on a scale of 1 to David Davidson&rsquo; (true&nbsp;story)</strong>.',
                    from: 'Promotions coordinator at Logos'
                },
                {
                    testimonial: '[David&rsquo;s] meticulous attention to detail, tireless work ethic, and vigilance [set] him ahead of the pack. But what really sets David apart is his demeanor. His easy-going nature and genuine kindness make working with him unbelievably easy. <strong>In my professional career, there [have] only been a couple people who have felt irreplaceable, and David is one of&nbsp;them</strong>.',
                    from: 'MarCom team lead, Logos Research Systems'
                },
                {
                    testimonial: 'David&rsquo;s an incredible learner, always seeking growth and developing new skills. <strong>His breadth of knowledge and ability to learn quickly and efficiently never cease to amaze me</strong>.&nbsp;.&nbsp;.&nbsp;. He&rsquo;s not just smart, a learner, a teacher, and an expert in his field. If you surround David with the most intelligent people, he&rsquo;ll quickly distinguish himself with&nbsp;kindness.',
                    from: 'Targeted marketing coordinator at&nbsp;Logos'
                },
                {
                    testimonial: 'David contributes an extraordinary amount of value to every project he is [part] of. His copy writing and editing skills are unmatched by anyone I&rsquo;ve ever worked with. <strong>He continues to impress me with his tenacious appetite to improve</strong> in areas such as graphic design, HTML, and social&nbsp;media.',
                    from: 'Social media coordinator at&nbsp;Logos'
                },
                {
                    testimonial: 'As a freelance writer and marketer, I&rsquo;ve been edited by a lot of people, but I have never been edited by anyone better than David.&nbsp;.&nbsp;.&nbsp;. I love his unmatched attention to detail: no matter how closely I watched my copy, no matter how &ldquo;perfectly&rdquo; written, David always found ways to repair and improve it without affecting my voice and style.&nbsp;.&nbsp;.&nbsp;. David&rsquo;s knowledge of grammar, style, punctuation, and even typography seems encyclopedic.',
                    from: 'Community manager at visionSynergy'
                },
                {
                    testimonial: 'David is one of the most precise individuals that I have ever met. He is a one-man editing machine and has become an indispensable part of our marketing efforts. Above all else, <strong>David has an amazing thirst for knowledge and seeks every opportunity to become a better version of himself, all with a humble attitude and&nbsp;spirit</strong>.',
                    from: 'Marketing operations manager at&nbsp;Logos'
                },
                {
                    testimonial: 'David is <strong>that rare combination of exceptionally talented individual and incredibly enjoyable teammate</strong>. He&rsquo;s an expert at providing timely, accurate edits, and brings added interest and style to everything he works on. I highly recommend David for any organization that&rsquo;s looking for a personable, hard-working individual with great attention to detail. His work is nothing but&nbsp;impressive.',
                    from: 'Promotions specialist at&nbsp;Logos'
                },
                {
                    testimonial: 'At last! A writer/editor who values true and precise thought. David possesses a <strong>rare and fierce dedication to excellence</strong>. There are few writers and editors more trustworthy and driven than David Davidson.&nbsp;.&nbsp;.&nbsp;. Outstanding. David&rsquo;s an elegant writer, a discerning editor, and a really fun coworker who never fails to deliver smart, interesting, error-free&nbsp;copy.',
                    from: 'Special projects manager at&nbsp;Logos'
                },
                {
                    testimonial: 'David is the first person to recognize a job well done and celebrate with those around him. Whether it&rsquo;s finding a tricky typo or making bank on a blog post, David makes you feel like your accomplishments are worthwhile.&nbsp;.&nbsp;.&nbsp;. David is sincere in everything he does and cares about the people around him. <strong>Working with him is always a&nbsp;joy</strong>.',
                    from: 'Marketing communications editor at Logos'
                },
                {
                    testimonial: 'David exceeds my expectations every time I work with him. He does more than proof, edit or write. He looks at the underlying strategy and identifies ways to make the copy more effectively hit the mark. As a marketer, <strong>I&rsquo;ve worked with many staff and freelance copywriters and David has quickly become my top pick</strong>.',
                    from: 'Lead special projects manager at&nbsp;Logos'
                },
                {
                    testimonial: 'David Davidson is an incisive editor and writer. From copywriting to developmental and copy editing to proofreading, David does it all. He has quickly become an essential part of [Logos&rsquo;s] marketing efforts. He&rsquo;s also incredibly gracious and pleasant to work with. <strong>I would trust him with any prose or project</strong>.',
                    from: 'Noet product manager at&nbsp;Logos'
                },
                {
                    testimonial: 'As long as you don&rsquo;t mind people eating tinned fish&nbsp;.&nbsp;.&nbsp;. David Davidson is a perfect hire.<br><br>Skills include: corny hashtags&nbsp;.&nbsp;.&nbsp;. disgusting green smoothies&nbsp;.&nbsp;.&nbsp;.&nbsp;HTML.',
                    from: 'Irreverent coworkers at&nbsp;Logos'
                }
            ];
        };
    }
);
Portfolio.service('portfolioModel',
    function() {
        this.getCopy = function() {
            return [
                {
                    title: 'Noet.com',
                    description: ' * Noet is Logos for the classics',
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
Portfolio.service('resumeModel',
    function() {
        this.getJobs = function() {
            return [
                {
                    title: 'Web development intern',
                    who: '<a href="http://zippercomputer.com/?utm_source=daviddavidson.io&utm_medium=web&utm_content=resume" target="_blank">Zipper Computer</a>',
                    details: 'October 2013&ndash;June 2014, Seattle, WA',
                    id: 'zipper',
                    // summary: 'For the last half-year or so, I&rsquo;ve been building websites for a startup in Seattle'
                    bullets: [
                        {
                            bullet: 'Built the web-design and growth-consulting views for ZipperComputer.com using Laravel, Foundation, Blade, and more'
                        },
                        {
                            bullet: 'Built Waycross.com, a pixel-for-pixel WordPress clone of a flat HTML/CSS site'
                        },
                        {
                            bullet: 'Built BloomYogaNW.com&mdash;a WordPress site and custom theme&mdash;using Advanced Custom Fields, SCSS, and Foundation'
                        },
                        {
                            bullet: 'Helped style the UI of Waycross&rsquo;s new in-house stock-data web app (written in Yii and AngularJS), mostly using SCSS and JavaScript'
                        },
                        {
                            bullet: 'FPO'
                        },
                        {
                            bullet: 'Automated part of the Waycross backend',
                            children: [
                                {
                                    grandchild: 'A crontab regularly fires a Bash script, which queries a SQL database to see if a run&rsquo;s scheduled.'
                                },
                                {
                                    grandchild: 'If one is, the Bash script tells a Windows VM to start a batch script.'
                                },
                                {
                                    grandchild: 'The batch script starts a series of Autohotkey scripts, which download several CSVs&rsquo; worth of stock data.'
                                },
                                {
                                    grandchild: 'The Bash script notices the new files, fires Yii commands to upload them to the web app, marks the run as complete in SQL, and keeps waiting&nbsp;.&nbsp;.&nbsp;.'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'Marketing communications editor &amp; associate&nbsp;copywriter',
                    who: '<a href="http://www.logos.com" target="_blank">Logos Bible Software</a>',
                    details: 'May 2012&ndash;August 2014, Bellingham and Seattle, WA',
                    bullets: [
                        {
                            bullet: 'Edited blog posts, emails, ads, and more for a company on the <a href="http://www.deloitte.com/assets/Dcom-UnitedStates/Local%20Assets/Documents/TMT_us_tmt/us_tmt_fast500_rankings_111212.pdf" target="_blank">2012 Technology Fast 500</a>&nbsp;list'
                        },
                        {
                            bullet: 'Wrote for <a href="http://noet.com/" target="_blank">Logos&rsquo; philosophy/classics&nbsp;division</a>'
                        },
                        {
                            bullet: 'Helped optimize email subject lines for higher open&nbsp;rates'
                        },
                        {
                            bullet: 'Checked links, names, prices, dates, and everything else that can go&nbsp;wrong'
                        },
                        {
                            bullet: 'Researched and wrote marketing style guide (based on <em>The Chicago Manual of&nbsp;Style</em>)'
                        },
                        {
                            bullet: 'Won company-wide peer-nominated Elegance and Service&nbsp;awards'
                        },
                        {
                            bullet: 'Won (team) Shipping category in company-wide hackathon for front-end work on the <a href="https://chrome.google.com/webstore/detail/bible-search/enlaminhpdcdeemcnfnecpjbafhhajff?hl=en" target="_blank">Bible Search Chrome&nbsp;extension</a>'
                        }
                    ]
                },
                {
                    title: 'Proofreader (freelance)',
                    who: '<a href="http://www.brenn-white.com/" target="_blank">The Brenn-White Group</a>',
                    details: 'November 2011&ndash;April&nbsp;2012, Brooklyn, NY (remote)',
                    bullets: [
                        {
                            bullet: 'Proofread translated marketing copy for German colleges and universities'
                        },
                        {
                            bullet: 'Checked facts, names, links,&nbsp;etc.'
                        },
                        {
                            bullet: 'Guaranteed compliance with the Brenn-White style&nbsp;guide'
                        },
                        {
                            bullet: 'Maintained an appealing prose style in British or American&nbsp;English'
                        }
                    ]
                },
                {
                    title: 'Assistant instructor of English (<em>auxiliar de&nbsp;conversaci&oacute;n</em>)',
                    who: '<a href="http://www.safamadrid.com/" target="_blank">Colegio Sagrada Familia</a>',
                    details: 'September 2010&ndash;June&nbsp;2011, Madrid, Spain',
                    bullets: [
                        {
                            bullet: 'Created and delivered lessons in British and American English for students ages 7&ndash;17'
                        },
                        {
                            bullet: 'Taught conversational American usage alongside the formal&nbsp;curriculum'
                        },
                        {
                            bullet: 'Tutored colleagues to extend English fluency within the&nbsp;faculty'
                        }
                    ]
                },
                {
                    title: 'Writing consultant',
                    who: '<a href="http://www.willamette.edu/dept/wcenter/index.html" target="_blank">Willamette University Writing Center</a>',
                    details: 'August 2009&ndash;May&nbsp;2010, Salem, OR',
                    bullets: [
                        {
                            bullet: 'Edited fellow students&rsquo; academic papers and grant&nbsp;proposals'
                        },
                        {
                            bullet: 'Taught argument theory, emphasizing logic and&nbsp;rhetoric'
                        },
                        {
                            bullet: 'Tutored writers <span title="Yes, hyphenated even as an adverb.">one-on-one for the duration of the composition&nbsp;process'
                        },
                        {
                            bullet: 'Helped professors of politics and mathematics work persuasive writing into their&nbsp;curricula'
                        }
                    ]
                }
            ];
        };
        this.getSchools = function() {
            return [
                {
                    title: 'Certificate in web design&nbsp;&amp; development',
                    who: '<a href="http://www.acadweb.wwu.edu/eesp/template/home_webdesign.shtml" target="_blank">Western Washington University</a>',
                    details: 'May&nbsp;2013, Bellingham, WA',
                },
                {
                    title: 'MAT (M&aacute;ster en ense&ntilde;anza de la lengua, literatura y cultura en el mundo&nbsp;hisp&aacute;nico)',
                    who: '<a href="http://www.institutofranklin.net/" target="_blank">Instituto Franklin, Universidad de Alcal&aacute; de Henares</a>',
                    details: 'June 2011, Alcal&aacute; de Henares, Madrid, Spain, <strong>4.0 GPA</strong>'
                },
                {
                    title: 'BA, English &amp; Spanish double&nbsp;major',
                    who: '<a href="http://www.willamette.edu/" target="_blank">Willamette University</a>',
                    details: 'May 2010, Salem, OR',
                }
            ];
        };
    }
);
Portfolio.controller('contactController',
    ['$scope',
    function ($scope) {
    		console.log('contact controller fired');
        $scope.$on('$viewContentLoaded', setHeight());
    }
]);
Portfolio.controller('homeController',
    ['$scope', 'homeModel',
    function ($scope, homeModel) {
        console.log('homepage controller fired');
        $scope.skills = homeModel.getSkills();
        $scope.values = homeModel.getValues();
        $scope.testimonials = homeModel.getTestimonials();
        $scope.$on('$viewContentLoaded', setHeight());
    }
]);
Portfolio.controller('masterController',
    ['$scope', '$window', '$location', '$timeout',
    function ($scope, $window, $location, $timeout) {
        console.log('master controller fired!');
        $scope.$on('$routeChangeSuccess', function () {
            if ($location.path() == '/resume') {
                $scope.page = 'resume';
                $scope.title = 'R&eacute;sum&eacute; | David Davidson';
            }
            else if ($location.path() == '/copy') {
                $scope.page = 'copy';
                $scope.title = 'Portfolio | David Davidson';
            }
            else if ($location.path() == '/portfolio') {
                $scope.page = 'portfolio';
                $scope.title = 'Portfolio | David Davidson';
            }
            else if ($location.path() == '/contact') {
                $scope.page = 'contact';
                $scope.title = 'Contact | David Davidson';
            }
            else {
                $scope.page = 'home';
                $scope.title = 'David Davidson | web development, copywriting, marketing';
            }
        });
        $scope.today = new Date();
        // On its own, ng-mouseout fires closeDropDown() way too readily, so we add one more boolean: $scope.dropdownHover, which (on mouseout) we 1. set to false *before* the timeout and 2. then check again before actually hiding the dropdown
        $scope.hideDropdown = function() {
            if ($scope.dropdownHover === false) {
                $scope.dropdown = false;
            }
        };
        $scope.closeDropdown = function() {
            $scope.dropdownHover = false;
            $timeout($scope.hideDropdown, 750);
        };
        $scope.openDropdown = function() {
            $scope.dropdown = true;
            $scope.dropdownHover = true;
        };
        // Angular wrappers around some handy jQuery
        $scope.scrollToParent = function(parentId) {
            $('html, body').animate({scrollTop:$('#' + parentId).offset().top}, 500);
        };
        setHeight = function() { // Needs to be global!
            // Measure components
            var windowHeight = $(window).height();
            var navHeight = $('nav').height();
            var heroContentHeight = $('.heroContent').height();
            // Calculate heights
            var heroHeight = windowHeight - navHeight;
            if (heroContentHeight > heroHeight) {
                heroHeight = heroContentHeight;
            }
            var topMargin = (heroHeight - heroContentHeight) / 2.25; // Dividing by 2 exactly makes the content look just a little too low
            // Apply heights
            $('.heroWrapper').css({'height': heroHeight});
            $('.navPlaceholder').css({'height': navHeight});
            $('.heroContent').css({'margin-top': topMargin});
        };
        angular.element($window).bind('resize', function() {
            setHeight(); // Takes care of resizing for *all* views, though individual controllers make the call for initial sizing
        });
    }
]);
Portfolio.controller('portfolioController',
    ['$scope', 'portfolioModel',
    function ($scope, portfolioModel) {
        console.log('portfolio controller fired!');
        $scope.projects = portfolioModel.getProjects();
        $scope.filteredProjects = $scope.projects;
        $scope.copy = portfolioModel.getCopy();
        $scope.$watch('technology', function() {
             // To avoid a flicker on slow connections, we build the new array behind the scenes and then switch over all at once, rather than emptying and rebuilding it while it's live in the view.
            function filterNewProjects() {
                var newProjects = [];
                angular.forEach($scope.projects, function(project) {
                    var found = false;
                    // Since we only need one match, let's stop looping after we find it: some, not forEach
                    found = project.technologies.some(function(technologies) {
                        return (technologies.bullet.toLowerCase().indexOf($scope.technology.toLowerCase()) != -1);
                    });
                    if (found) {
                        newProjects.push(project);
                    }
                });
                return newProjects;
            }
            // Don't filter when there's nothing to filter against, just to keep the console happy:
            if (typeof $scope.technology != 'undefined') {
                $scope.filteredProjects = filterNewProjects();
            }
        });
        $scope.noContentVisible = function() {
            if ($scope.filteredProjects.length === 0) {
                return true;
            } else {
                return false;
            }
        };
        $scope.$on('$viewContentLoaded', setHeight());
    }
]);
Portfolio.controller('resumeController',
    ['$scope', 'resumeModel',
    function ($scope, resumeModel) {
        console.log('resume controller fired');
        $scope.jobs = resumeModel.getJobs();
        $scope.schools = resumeModel.getSchools();
        $scope.isEven = function(index) {
            if (index % 2 === 0) {
                return true;
            }
            else {
                return false;
            }
        };
        $scope.$on('$viewContentLoaded', setHeight());
    }
]);
Portfolio.controller('sliderController',
    ['$scope', '$timeout', 'homeModel',
    function ($scope, $timeout, homeModel) {
        // Get the testimonials
        console.log('slider controller fired');
        $scope.testimonials = homeModel.getTestimonials();
        $scope.currentIndex = 0;
        function next() {
            if ($scope.currentIndex == $scope.testimonials.length - 1) {
                // From final slide, tick over to first
                $scope.currentIndex = 0;
            }
            else {
                // Otherwise, just add one
                $scope.currentIndex++;
            }
        }
        // Fire when someone clicks a nav dot
        $scope.activate = function(index) {
            $scope.currentIndex = index;
            $scope.timer = 0;
        };
        // Build a one-second timer...
        $scope.timer = 0;
        function newTimer() {
            $scope.timer++;
            $timeout(newTimer, 1000);
        }
        // ... and start it
        newTimer();
        // When 15 seconds are up, change slides
        $scope.$watch('timer', function() {
            if ($scope.timer > 15) {
                $scope.timer = 0;
                next();
            }
        });
        // Hide all the testimonials as default
        $scope.$watch('currentIndex', function() {
            $scope.testimonials.forEach(function(item) {
                item.visible = false;
            });
            // Then show the current testimonial
            $scope.testimonials[$scope.currentIndex].visible = true;
        });
    }
]);