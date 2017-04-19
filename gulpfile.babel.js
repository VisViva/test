'use strict';

import gulp from 'gulp';
import webpack from 'webpack';
import path from 'path';
import sync from 'run-sequence';
import rename from 'gulp-rename';
import template from 'gulp-template';
import fs from 'fs';
import lodash from 'lodash';
import gutil from 'gulp-util';
import serve from 'browser-sync';
import del from 'del';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import historyApiFallback from 'connect-history-api-fallback';

let root = 'source';

let resolveToApp = (glob = '') => {
    return path.join(root, 'app', glob);
};

let resolveToComponents = (glob = '') => {
    return path.join(root, 'components', glob);
};

let paths = {
    js: resolveToComponents('**/*.js'),
    scss: resolveToApp('**/*.scss'),
    html: [
        resolveToApp('**/*.html'),
        path.join(root, 'index.html')
    ],
    entry: [
        'babel-polyfill',
        path.join(__dirname, root, 'app.js')
    ],
    output: root,
    dest: path.join(__dirname, 'dist')
};

gulp.task('build', ['clean'], (cb) => {
    const config = require('./webpack.prod.config');
    config.entry.app = paths.entry;
    webpack(config, (err, stats) => {
        if (err) {
            throw new gutil.PluginError("webpack", err);
        }
        gutil.log("[webpack]", stats.toString({
            chunks: false,
            errorDetails: true
        }));
        cb();
    });
});

gulp.task('serve', () => {
    const config = require('./webpack.dev.config');
    config.entry.app = [
        'webpack-hot-middleware/client?reload=true',
    ].concat(paths.entry);
    var compiler = webpack(config);
    serve({
        port: process.env.PORT || 3000,
        open: false,
        server: { baseDir: root },
        middleware: [
            historyApiFallback(),
            webpackDevMiddleware(compiler, {
                stats: {
                    chunks: false,
                    modules: false
                },
                publicPath: config.output.publicPath
            }),
            webpackHotMiddleware(compiler)
        ]
    });
});

gulp.task('watch', ['serve']);

gulp.task('clean', (cb) => {
    del([paths.dest]).then(function(paths) {
        gutil.log("[clean]", paths);
        cb();
    })
});

gulp.task('default', ['watch']);
