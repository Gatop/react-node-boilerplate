'use strict';

const gulp = require('gulp'),
    sassLint = require('gulp-sass-lint'),
    livereload = require('gulp-livereload');

gulp.task('sass-lint', function () {
  return gulp.src('src/**/*.s+(a|c)ss')
    .pipe(sassLint({
      configFile: '.sass-lint.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/**/*.s+(a|c)ss', gulp.series('sass-lint'));
});
