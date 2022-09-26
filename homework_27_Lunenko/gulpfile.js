const { src, dest, series, parallel } = require('gulp');
// const fileinclude = require('gulp-file-include');
const del = require("del");
const { watch } = require('browser-sync');
const browserSync = require('browser-sync').create();

const clean = () => del(["dist"])

const html = function(cb) {
    src('src/*')
    .pipe(dest('dist'));

    cb();
}
exports.html = html
const transferFiles = cb => {
    src('node_modules/bootstrap/dist/css/bootstrap.min.css')
      .pipe(dest('dist/css/'));
    // src('node_modules/jquery/dist/jquery.min.js')
    //   .pipe(dest('dist/js/'));

//     src('node_modules/bootstrap/dist/js/bootstrap.min.js')
//       .pipe(dest('dist/js/'));
  
    cb();
}

const browser = () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    watch(["./src/index.html"], html);
}

exports.default = series(clean, transferFiles, html, parallel(browser));