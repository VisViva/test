module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai'],
        files: [{ pattern: 'spec.bundle.js', watched: false }],
        exclude: [],
        plugins: [
            require("karma-chai"),
            require("karma-phantomjs-launcher"),
            require("karma-mocha"),
            require("karma-mocha-reporter"),
            require("karma-sourcemap-loader"),
            require("karma-webpack")
        ],
        preprocessors: { 'spec.bundle.js': ['webpack', 'sourcemap'] },
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    { test: /\.js/, exclude: [/app\/lib/, /node_modules/], loader: 'babel' },
                    { test: /\.html/, loader: 'raw' },
                    { test: /\.scss$/, loader: 'style!css!sass' },
                    { test: /\.css$/, loader: 'style!css' }
                ]
            }
        },
        webpackServer: {
            noInfo: true
        },
        reporters: ['mocha'],
        port: 9000,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};
