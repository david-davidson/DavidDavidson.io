Portfolio.service('resumeModel',
  function() {
    this.getJobs = function() {
      return [
        {
          title: 'Web development intern',
          who: '<a href="http://zippercomputer.com/?utm_source=daviddavidson.io&utm_medium=web&utm_content=resume" target="_blank">Zipper Computer</a>',
          when: 'October <span class="nobr">2013&ndash;</span>ongoing',
          where: 'Seattle, WA',
          bullets: [
            {
              bullet: 'Waycross (pixel-for-pixel WP clone built on underscores)'
            },
            {
              bullet: 'Bloom (new WP theme built on FoundationPress, Advanced Custom Fields, SCSS, Foundation)'
            },
            {
              bullet: 'Code for products page on GearheadEngines.com?'
            },
            {
              bullet: 'SEO\'d Gearhead satellite sites?'
            },
            {
              bullet: 'Views for zippercomputer.com (Laravel, SCSS, Foundation)'
            },
            {
              bullet: 'Waycross automation project',
              children: [
                {
                  child: 'Crontab fires bash script, which queries SQL database to see to if a run scheduled'
                },
                {
                  child: 'If run scheduled, script sends command to Windows VM, which starts a batch file, which starts a series of Autohotkey scripts'
                },
                {
                  child: 'Autohotkey scripts automate download of multiple CSVs, put them in shared folder'
                },
                {
                  child: 'Bash script notices that the files have arrived, fires Yii (PHP) command to upload them into SQL table, marks run as complete, keeps waiting'
                },
              ]
            },
          ]
        },
        {
          title: 'Marketing communications editor &amp; associate&nbsp;copywriter',
          who: 'Logos Research Systems<br>(d.b.a. <a href="http://www.logos.com" target="_blank">Logos Bible Software</a>)',
          when: 'May <span class="nobr">2012</span>&ndash;ongoing',
          where: 'Bellingham, WA&nbsp;/<br />Seattle, WA (working from&nbsp;home)',
          bullets: [
            {
              bullet: 'Edit blog posts, emails, ads, and more for a company on the <a href="http://www.deloitte.com/assets/Dcom-UnitedStates/Local%20Assets/Documents/TMT_us_tmt/us_tmt_fast500_rankings_111212.pdf" target="_blank">2012 Technology Fast 500</a>&nbsp;list',
            },
            {
              bullet: 'Write for <a href="http://noet.com/" target="_blank">our philosophy/classics&nbsp;division</a>',
            },
            {
              bullet: 'Check links, names, prices, dates, and everything else that can go&nbsp;wrong',
            },
            {
              bullet: 'Make some edits directly using HTML/CSS (email) and WordPress&nbsp;(blog)',
            },
            {
              bullet: 'Help optimize email subject&nbsp;lines',
            },
            {
              bullet: 'Researched and wrote marketing style guide (based on <em>The Chicago Manual of&nbsp;Style</em>)',
            },
            {
              bullet: 'Quickly learned audience&rsquo;s language and habits (I&rsquo;m not&nbsp;Christian)',
            },
            {
              bullet: 'Won company-wide peer-nominated <span itemprop="award">Elegance</span> and <span itemprop="award">Service</span>&nbsp;awards',
            },
            {
              bullet: 'Won (team) Shipping category in company-wide hackathon for front-end work on the <a href="https://chrome.google.com/webstore/detail/bible-search/enlaminhpdcdeemcnfnecpjbafhhajff?hl=en" target="_blank">Bible Search Chrome&nbsp;extension</a>',
            },
          ]
        },
        {
          title: 'Proofreader (freelance)',
          who: '<a href="http://www.brenn-white.com/" target="_blank">The Brenn-White Group</a>',
          when: 'November <span class="nobr">2011</span>&ndash;April&nbsp;2012',
          where: 'Brooklyn, NY (working from&nbsp;home)',
          bullets: [
            {
              bullet: 'Proofread marketing copy (already translated into English) for German colleges and universities',
            },
            {
              bullet: 'Checked facts, names, links,&nbsp;etc.',
            },
            {
              bullet: 'Guaranteed compliance with the Brenn-White style&nbsp;guide',
            },
            {
              bullet: 'Maintained an appealing prose style in, depending on the audience, British or American&nbsp;English',
            },
          ]
        },
        {
          title: 'Assistant instructor of English (<em>auxiliar de&nbsp;conversaci&oacute;n</em>)',
          who: '<a href="http://www.safamadrid.com/" target="_blank">Colegio Sagrada Familia</a>',
          when: 'September <span class="nobr">2010</span>&ndash;June&nbsp;2011',
          where: 'Madrid, Spain',
          bullets: [
            {
              bullet: 'Created and delivered lessons in British and American English for students <span class="nobr">ages 7&ndash;17</span>',
            },
            {
              bullet: 'Taught conversational American usage alongside the formal&nbsp;curriculum',
            },
            {
              bullet: 'Tutored colleagues to extend English fluency within the&nbsp;faculty',
            },
          ]
        },
        {
          title: 'Writing consultant',
          who: '<a href="http://www.willamette.edu/dept/wcenter/index.html" target="_blank">Willamette University Writing&nbsp;Center</a>',
          when: 'August <span class="nobr">2009</span>&ndash;May&nbsp;2010',
          where: 'Salem, OR',
          bullets: [
            {
              bullet: 'Edited fellow students&rsquo; academic papers and grant&nbsp;proposals',
            },
            {
              bullet: 'Taught argument theory, emphasizing logic and&nbsp;rhetoric',
            },
            {
              bullet: 'Tutored writers <span title="Yes, hyphenated even as an adverb.">one-on-one</span> for the duration of the composition&nbsp;process',
            },
            {
              bullet: 'Helped professors of politics and mathematics work persuasive writing into their&nbsp;curricula'
            }
          ]
        },
      ]
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
          who: '<a href="http://www.institutofranklin.net/" target="_blank">Instituto Franklin, Universidad de Alcal&aacute; de&nbsp;Henares</a>',
          when: 'June 2011',
          where: 'Alcal&aacute; de Henares, Madrid,&nbsp;Spain',
          GPA: '4.0 GPA'
        },
        {
          title: 'BA, English &amp; Spanish double&nbsp;major',
          who: '<a href="http://www.willamette.edu/" target="_blank">Willamette University</a>',
          when: 'May 2010',
          where: 'Salem, OR'
        }
      ]
    }
  }
);