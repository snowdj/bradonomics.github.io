var gulp        = require('gulp'),
    shell       = require('gulp-shell'),
    rename      = require('gulp-rename'),
    newer       = require('gulp-newer'),
    imagemin    = require('gulp-imagemin'),
    browserSync = require('browser-sync');


//* Images
gulp.task('images', function () {
    return gulp.src('./_images/*.{png,jpg,gif}')
        // .pipe(watch('./_images/**/*'))
        // .pipe(newer('./_images/*.{png,jpg,gif}'))
        .pipe(imagemin())
        .pipe(gulp.dest('./images/'));
});


//* BrowserSync
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: '_site/'
    }
  });
  gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});


//* Run Jekyll build and serve commands
gulp.task('build', shell.task(['jekyll build --config _config-dev.yml --watch']));


// Default task (build and serve)
gulp.task('default', ['build', 'browser-sync']);
