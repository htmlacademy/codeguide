import gulp from 'gulp';

const bs = require('browser-sync').create('kit');

gulp.task('serve', () => {
  bs.init({
    server: 'build/',
    notify: false,
    open: false,
    ui: false
  });

  gulp.watch(
    'app/css/**/*.css',
    gulp.series('postcss')
  );

  gulp.watch(
    'app/js/**/*.js',
    gulp.series('webpack')
  );

  gulp.watch(
    'app/templates/**/*.{hbs,js}',
    gulp.series('handlebars')
  );

  gulp.watch(
    'app/img/**/*.{jpg,png,svg,gif}',
    gulp.series('handlebars')
  );
});
