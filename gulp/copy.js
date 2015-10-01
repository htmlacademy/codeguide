import fs from 'fs-extra';
import gulp from 'gulp';

let files = 'app/!(css|js|templates)/**/*';

gulp.task('clean', fs.emptyDir.bind(null, 'build'));

gulp.task('copy', gulp.series('clean', () => {
  return gulp.src(files, {dot: true})
    .pipe(gulp.dest('build'));
}));
