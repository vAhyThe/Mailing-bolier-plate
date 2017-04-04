var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css'),
    replace = require('gulp-replace-task'),
    minifyHTML = require('gulp-minify-html'),
    livereload = require('gulp-livereload');


gulp.task('process', function () {
    return gulp.src('*.html')
        .pipe(inlineCss())
        .pipe(replace({
            patterns: [
                {
                    match: 'ctaLink',
                    replacement: 'http://usertechnologies.com/'
                }
            ]
        }))
        .pipe(minifyHTML({
            quotes: true
        }))
        .pipe(gulp.dest('build/'));
});


/* Watcher */

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('*.html', ['process']);

    gulp.watch(["build/*.html"], function(change) {
        if (change.type == 'changed' || change.type == 'added') { // this check fixes error with vim
            livereload.changed(change.path);
        }
    })
});



/* Prefered command-line tasks */

gulp.task('default', ['watch', 'process']);

