module.exports = {
    entry: [
        './tests/controllers/globalControllerTests.js',
        './tests/controllers/homeControllerTests.js',
        './tests/controllers/portfolioControllerTests.js',
        './tests/controllers/resumeControllerTests.js',
        './tests/controllers/sliderControllerTests.js'
    ],
    output: {
        filename: './tests/testBundle.js'       
    },
    resolve: {
        // Tells webpack to query these directories for modules
        modulesDirectories: [
            './bower_components', 
            './node_modules'
        ]
    },
};