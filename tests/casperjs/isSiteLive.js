casper.test.begin('The site is up and running', 2, function(test) {
    casper.start('http://localhost:3000', function() {
        test.assertHttpStatus(200);
        test.assertTitle('David Davidson | web development, copywriting, marketing', 'The title looks right');
    }).run(function() {
        test.done();
    });
});