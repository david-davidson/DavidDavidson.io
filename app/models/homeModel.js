Portfolio.service('homeModel',
    function() {
        this.getSkills = function() {
            return [
                {
                    title: 'Front end',
                    description: 'I&rsquo;ve worked with AngularJS, Backbone, jQuery, and Sass/SCSS. I&rsquo;m especially interested in UX: the intersection between copy, code, and design.'
                },
                {
                    title: 'Back end',
                    description: 'I&rsquo;m comfortable with Node.js, Express, and REST APIs, and I&rsquo;m getting to know MongoDB. Time to ship? I&rsquo;ve deployed apps to both EC2 and Heroku.'
                },
                {
                    title: 'Marketing',
                    description: 'As a former copywriter and marketer, I think about app performance not only in terms of code, but also in terms of usability, branding, and conversion: business-wide goals.'
                }
            ];
        };
        this.getTestimonials = function() {
            return [
                {
                    testimonial: '[David&rsquo;s] meticulous attention to detail, tireless work ethic, and vigilance [set] him ahead of the pack. But what really sets David apart is his demeanor. His easy-going nature and genuine kindness make working with him unbelievably easy. <strong>In my professional career, there [have] only been a couple people who have felt irreplaceable, and David is one of&nbsp;them</strong>.',
                    from: 'MarCom team lead, Logos Bible Software'
                },
                {
                    testimonial: 'There are simply not enough David Davidsons in the world. I&rsquo;ve never met a kinder spirit&nbsp;.&nbsp;.&nbsp;. He makes those around him better, and he is an incredible asset to everyone he works with. You won&rsquo;t find anyone more dedicated. In my review, when asked to rate my dedication to my work, <strong>my boss asked me to rate it &lsquo;on a scale of 1 to David Davidson&rsquo; (true&nbsp;story)</strong>.',
                    from: 'Promotions coordinator at Logos'
                },
                {
                    testimonial: 'David&rsquo;s an incredible learner, always seeking growth and developing new skills. <strong>His breadth of knowledge and ability to learn quickly and efficiently never cease to amaze me</strong>.&nbsp;.&nbsp;.&nbsp;. He&rsquo;s not just smart, a learner, a teacher, and an expert in his field. If you surround David with the most intelligent people, he&rsquo;ll quickly distinguish himself with&nbsp;kindness.',
                    from: 'Targeted marketing coordinator at&nbsp;Logos'
                },
                // {
                //     testimonial: 'As a freelance writer and marketer, I&rsquo;ve been edited by a lot of people, but I have never been edited by anyone better than David.&nbsp;.&nbsp;.&nbsp;. I love his unmatched attention to detail: no matter how closely I watched my copy, no matter how &ldquo;perfectly&rdquo; written, David always found ways to repair and improve it without affecting my voice and style.&nbsp;.&nbsp;.&nbsp;. David&rsquo;s knowledge of grammar, style, punctuation, and even typography seems encyclopedic.',
                //     from: 'Community manager at visionSynergy'
                // },
                {
                    testimonial: 'David is one of the most precise individuals that I have ever met. He is a one-man editing machine and has become an indispensable part of our marketing efforts. Above all else, <strong>David has an amazing thirst for knowledge and seeks every opportunity to become a better version of himself, all with a humble attitude and&nbsp;spirit</strong>.',
                    from: 'Marketing operations manager at&nbsp;Logos'
                },
                {
                    testimonial: 'David is <strong>that rare combination of exceptionally talented individual and incredibly enjoyable teammate</strong>. He&rsquo;s an expert at providing timely, accurate edits, and brings added interest and style to everything he works on. I highly recommend David for any organization that&rsquo;s looking for a personable, hard-working individual with great attention to detail. His work is nothing but&nbsp;impressive.',
                    from: 'Promotions specialist at&nbsp;Logos'
                },
                {
                    testimonial: 'David is the first person to recognize a job well done and celebrate with those around him. Whether it&rsquo;s finding a tricky typo or making bank on a blog post, David makes you feel like your accomplishments are worthwhile.&nbsp;.&nbsp;.&nbsp;. David is sincere in everything he does and cares about the people around him. <strong>Working with him is always a&nbsp;joy</strong>.',
                    from: 'Marketing communications editor at Logos'
                },
                {
                    testimonial: 'At last! A writer/editor who values true and precise thought. David possesses a <strong>rare and fierce dedication to excellence</strong>. There are few writers and editors more trustworthy and driven than David Davidson.&nbsp;.&nbsp;.&nbsp;. Outstanding. David&rsquo;s an elegant writer, a discerning editor, and a really fun coworker who never fails to deliver smart, interesting, error-free&nbsp;copy.',
                    from: 'Special projects manager at&nbsp;Logos'
                },
                {
                    testimonial: '<strong>David contributes an extraordinary amount of value to every project he is [part] of</strong>. His copy writing and editing skills are unmatched by anyone I&rsquo;ve ever worked with. He continues to impress me with his tenacious appetite to improve in areas such as graphic design, HTML, and social&nbsp;media.',
                    from: 'Social media coordinator at&nbsp;Logos'
                },
                {
                    testimonial: 'David exceeds my expectations every time I work with him. He does more than proof, edit or write. He looks at the underlying strategy and identifies ways to make the copy more effectively hit the mark. As a marketer, <strong>I&rsquo;ve worked with many staff and freelance copywriters and David has quickly become my top pick</strong>.',
                    from: 'Lead special projects manager at&nbsp;Logos'
                },
                // {
                //     testimonial: 'David Davidson is an incisive editor and writer. From copywriting to developmental and copy editing to proofreading, David does it all. He has quickly become an essential part of [Logos&rsquo;s] marketing efforts. He&rsquo;s also incredibly gracious and pleasant to work with. <strong>I would trust him with any prose or project</strong>.',
                //     from: 'Noet product manager at&nbsp;Logos'
                // },
                {
                    testimonial: 'As long as you don&rsquo;t mind people eating tinned fish&nbsp;.&nbsp;.&nbsp;. David Davidson is a perfect hire.<br><br>Skills include: corny hashtags&nbsp;.&nbsp;.&nbsp;. disgusting green smoothies&nbsp;.&nbsp;.&nbsp;.&nbsp;HTML.',
                    from: 'Irreverent coworkers at&nbsp;Logos'
                }
            ];
        };
    }
);