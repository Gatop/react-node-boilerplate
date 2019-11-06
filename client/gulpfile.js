'use strict';

const gulp = require('gulp'),
    sassLint = require('gulp-sass-lint'),
    livereload = require('gulp-livereload'),
    eslint = require('gulp-eslint');

gulp.task('sass-lint', function () {
  return gulp.src('src/**/*.s+(a|c)ss')
    .pipe(sassLint({
      configFile: '.sass-lint.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('eslint', function() {
  return gulp.src('src/**/*.js')
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(eslint.failAfterError());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/**/*.s+(a|c)ss', gulp.series('sass-lint'));
  gulp.watch('src/**/*.js', gulp.series('eslint'));
});
