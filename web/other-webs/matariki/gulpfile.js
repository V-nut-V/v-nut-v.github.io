var gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
webpack = require('webpack-stream'),
babel = require('gulp-babel'),
browserSync = require('browser-sync').create(),

paths = {
  webpages: './public/**/*.html',
  styles: './private/styles/**/*.sass',
  scripts: './private/js/**/*.js'
};


//gulp-style task -----------------------
gulp.task('styles', () => {
  return gulp.src('./private/styles/*.sass')
             .pipe(sass({includePaths: require('node-normalize-scss').includePaths}).on('error', sass.logError))
             .pipe(autoprefixer())
             .pipe(gulp.dest('./public/css'));
});

gulp.task('cssInject', ['styles'], () => {
  return gulp.src('./public/css/**/*.css')
             .pipe(browserSync.stream());
});

//gulp-scripts task -----------------------
gulp.task('scripts', () => {
  return gulp.src('./private/js/master.js')
             .pipe(webpack({
               output: {
                 filename: 'master.js'
               }
             }))
             .pipe(babel({
               presets: ['env']
             }))
             .pipe(gulp.dest('./public/js'));
});

gulp.task('scriptsRefresh', ['scripts'], () => {
  browserSync.reload();
});

//gulp-watch task -----------------------
gulp.task('default', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "public"
    }
  });

  gulp.watch(paths.webpages, () => { browserSync.reload(); });
  gulp.watch(paths.styles, ['cssInject']);
  gulp.watch(paths.scripts, ['scriptsRefresh']);

});
