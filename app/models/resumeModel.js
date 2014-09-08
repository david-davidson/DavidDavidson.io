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
                            bullet: 'Built ZipperComputer.com&rsquo;s web-design and growth-consulting views using Laravel, Foundation, Blade, and more'
                        },
                        {
                            bullet: 'Helped style the UI of Waycross&rsquo;s new in-house stock-data web app (written in Yii and AngularJS), mostly using SCSS and JavaScript'
                        },
                        {
                            bullet: 'Built BloomYogaNW.com&mdash;a WordPress site and custom theme&mdash;using Advanced Custom Fields, SCSS, and Foundation'
                        },
                        {
                            bullet: 'Built Waycross.com, a pixel-for-pixel WordPress clone of a flat HTML/CSS site'
                        },
                        {
                            bullet: 'FPO'
                        },
                        {
                            bullet: 'Automated part of the Waycross app&rsquo;s backend using Cron, Bash, PHP, SQL, and more',
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
                            bullet: 'Wrote web copy, blog posts, emails, and social copy for <a href="http://noet.com/" target="_blank">Noet</a>, Logos&rsquo;s philosophy/classics division'
                        },
                        {
                            bullet: 'Helped Logos avoid public errors by checking links, names, prices, dates, and everything else that can go&nbsp;wrong'
                        },
                        {
                            bullet: 'Researched and wrote marketing style guide (based on <em>The Chicago Manual of&nbsp;Style</em>)'
                        },
                        {
                            bullet: 'Helped optimize email subject lines for higher open&nbsp;rates'
                        },
                        {
                            bullet: 'Won company-wide, peer-nominated Elegance and Service&nbsp;awards'
                        },
                        {
                            bullet: 'Won (team) Shipping prize in company-wide hackathon'
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
                            bullet: 'Guaranteed compliance with Brenn-White&rsquo;s custom style&nbsp;guide'
                        }
                    ]
                },
                {
                    title: 'Assistant instructor of English (<em>auxiliar de&nbsp;conversaci&oacute;n</em>)',
                    who: '<a href="http://www.safamadrid.com/" target="_blank">Colegio Sagrada Familia</a>',
                    details: 'September 2010&ndash;June&nbsp;2011, Madrid, Spain',
                    bullets: [
                        {
                            bullet: 'Created and delivered English lessons for students ages 7&ndash;17'
                        },
                        {
                            bullet: 'Learned to adapt quickly to new environments—in this case, a new job, language, and country'
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