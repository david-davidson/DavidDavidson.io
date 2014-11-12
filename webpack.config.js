module.exports = {
    entry: './app/app.js',
    output: {
        filename: './dist/scripts.js'       
    },
    resolve: {
        // Tells webpack to query these directories for modules
        modulesDirectories: [
            './bower_components', 
            './node_modules'
        ]
    },
};