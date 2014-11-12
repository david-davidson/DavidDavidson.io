module.exports = {
    entry: [
        './test/controllers/globalControllerTests.js',
        './test/controllers/homeControllerTests.js',
        './test/controllers/portfolioControllerTests.js',
        './test/controllers/resumeControllerTests.js',
        './test/controllers/sliderControllerTests.js'
    ],
    output: {
        filename: './test/testBundle.js'       
    },
    resolve: {
        // Tells webpack to query these directories for modules
        modulesDirectories: [
            './bower_components', 
            './node_modules'
        ]
    },
};