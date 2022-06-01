import gulp from 'gulp';
import server from 'gulp-server-livereload'
gulp.task('build', function (callback) {
  console.log('Construyendo el sitio');
  setTimeout(callback, 1200);
});

gulp.task('serve', function (callback) {
  console.log('Serve el sitio');
  gulp.src('www')
    .pipe(server({
      livereload: true,
      open: true
    }))
});

gulp.task('default', gulp.series('build', 'serve'))

