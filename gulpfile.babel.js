import gulp from 'gulp';

require('require-dir')('./gulp');

gulp.task('start', gulp.series(
  'copy',
  gulp.parallel('postcss', 'webpack'),
  'handlebars',
  'serve'
));
