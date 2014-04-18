Portfolio.service('homeModel',
  function() {
    this.getSkills = function() {
      return [
        {
          title: 'Writing',
          description: 'I write blog posts, emails, ads, social, and more. I get to know new products, voices, and audiences quickly, but I&rsquo;m happiest selling books, software, and higher education.',
        },
        {
          title: 'Editing',
          description: 'I know <em>The Chicago Manual of Style</em>, and I&rsquo;m at home doing everything from dev editing to rewriting to proofreading. My work and disposition have won me company-wide peer-nominated awards.',
        },
        {
          title: 'More',
          bullets: [
            {
              bullet: 'Basic HTML, CSS, PHP, jQuery (I built this responsive site without templates or WYSIWYG&nbsp;tools)'
            },
            {
              bullet: 'Basic Google Analytics, Lyris, WordPress'
            },
            {
              bullet: 'Full Spanish proficiency'
            }
          ]
        }
      ]
    };
    this.getValues = function() {
      return [
        {
          title: 'Learning',
          description: 'I&rsquo;m reading <em>Garner&rsquo;s Modern American Usage</em> cover to cover. I&rsquo;m learning web design. I want work that pushes me to develop new skills constantly.'
        },
        {
          title: 'Effort',
          description: 'I have received texts from coworkers asking, &ldquo;Why are you still working at 9:17 p.m.?&rdquo; I have replied, &ldquo;#shipping.&rdquo;'
        },
        {
          title: 'Humility',
          description: 'I edit tactfully and with a sense of humor. It&rsquo;s not just about catching <span class="nobr">mistakes&mdash;</span>it&rsquo;s about doing awesome work together.'
        },
      ]
    }
  }
);