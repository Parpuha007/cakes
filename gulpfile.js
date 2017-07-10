var gulp = require('gulp'),
	sass = require('gulp-sass');
	browserSync = require('browser-sync');


gulp.task('styles', function () {
	gulp.src('app/assets/sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('app/dist/styles'));
});

gulp.task('watch', function() {
	gulp.watch('app/assets/sass/*.scss', ['styles']);
	gulp.watch('app/dist/styles/*.css', browserSync.reload);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "./app"
    },
    port: 9000,
    open: true,
    notify: false
  });
});

gulp.task('default', ['styles', 'watch', 'browserSync']);
