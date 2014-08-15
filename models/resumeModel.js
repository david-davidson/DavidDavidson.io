Portfolio.service('resumeModel',
    function() {
        this.getJobs = function() {
            return [
                {
                    title: 'Web development intern',
                    who: '<a href="http://zippercomputer.com/?utm_source=daviddavidson.io&utm_medium=web&utm_content=resume" target="_blank">Zipper Computer</a>',
                    when: 'October 2013&ndash;ongoing',
                    where: 'Seattle, WA',
                    id: 'zipper',
                    // summary: 'For the last half-year or so, I&rsquo;ve been building websites for a startup in Seattle'
                    bullets: [
                        {
                            bullet: 'Built the web-design and growth-consulting views for ZipperComputer.com using Laravel, Foundation, Blade (for templating), and more'
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
                    who: 'Logos Research Systems<br>(d.b.a. <a href="http://www.logos.com" target="_blank">Logos Bible Software</a>)',
                    when: 'May 2012&ndash;ongoing',
                    where: 'Bellingham, WA&nbsp;/<br />Seattle, WA (working from&nbsp;home)',
                    bullets: [
                        {
                            bullet: 'Edited blog posts, emails, ads, and more for a company on the <a href="http://www.deloitte.com/assets/Dcom-UnitedStates/Local%20Assets/Documents/TMT_us_tmt/us_tmt_fast500_rankings_111212.pdf" target="_blank">2012 Technology Fast 500</a>&nbsp;list'
                        },
                        {
                            bullet: 'Wrote for <a href="http://noet.com/" target="_blank">Logos&rsquo; philosophy/classics&nbsp;division</a>'
                        },
                        {
                            bullet: 'Help optimize email subject&nbsp;lines'
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
                    when: 'November 2011&ndash;April&nbsp;2012',
                    where: 'Brooklyn, NY (working from&nbsp;home)',
                    bullets: [
                        {
                            bullet: 'Proofread marketing copy (already translated into English) for German colleges and universities'
                        },
                        {
                            bullet: 'Checked facts, names, links,&nbsp;etc.'
                        },
                        {
                            bullet: 'Guaranteed compliance with the Brenn-White style&nbsp;guide'
                        },
                        {
                            bullet: 'Maintained an appealing prose style in, depending on the audience, British or American&nbsp;English'
                        }
                    ]
                },
                {
                    title: 'Assistant instructor of English (<em>auxiliar de&nbsp;conversaci&oacute;n</em>)',
                    who: '<a href="http://www.safamadrid.com/" target="_blank">Colegio Sagrada Familia</a>',
                    when: 'September 2010&ndash;June&nbsp;2011',
                    where: 'Madrid, Spain',
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
                    when: 'August 2009&ndash;May&nbsp;2010',
                    where: 'Salem, OR',
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
                    when: 'May&nbsp;2013',
                    where: 'Bellingham, WA'
                },
                {
                    title: 'MAT (M&aacute;ster en ense&ntilde;anza de la lengua, literatura, y cultura en el mundo&nbsp;hisp&aacute;nico)',
                    who: '<a href="http://www.institutofranklin.net/" target="_blank">Instituto Franklin, Universidad de Alcal&aacute; de Henares</a>',
                    when: 'June 2011',
                    where: 'Alcal&aacute; de Henares, Madrid, Spain',
                    GPA: '4.0 GPA'
                },
                {
                    title: 'BA, English &amp; Spanish double&nbsp;major',
                    who: '<a href="http://www.willamette.edu/" target="_blank">Willamette University</a>',
                    when: 'May 2010',
                    where: 'Salem, OR'
                }
            ];
        };
    }
);