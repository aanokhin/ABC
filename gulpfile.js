(function () {
  'use strict';
  const gulp = require('gulp');

  gulp.task('build', function () {
    console.log('building-------------');
    return gulp.src("./ttt", {read: false})
   // .pipe(plugins.clean())
  });

  // gulp.task("default", ["build"]);
}).call(this);
