import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';

gulp.task('default', ['build']);

gulp.task('clean', () => del('out'));

gulp.task('build', ['clean'], () =>
  gulp.src('src/**', { base: 'src' })
  .pipe(babel())
  .pipe(gulp.dest('out'))
);
