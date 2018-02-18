var gulp = require('gulp'),
watch = require('gulp-watch'),
sass = require('gulp-sass'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
webpack = require('webpack'),
browserSync = require('browser-sync').create();

gulp.task('styles', function() {
  return gulp.src('./web/sass/*.sass')
    .pipe(sass({includePaths: require('node-normalize-scss').includePaths}).on('error', sass.logError))
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest('./web/css'));
});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./web/css/**/*.css')
    .pipe(browserSync.stream());
});

gulp.task('scripts', function(callback) {
  webpack(require('./webpack.config.js'), function(err, status) {
    if(err) {
      console.log(err.toString());
    }
    console.log(status.toString());
    callback();
  });
});

gulp.task('scriptsRefresh',['scripts'], function() {
  browserSync.reload();
});

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "web"
    }
  });

  watch('./web/**/*.html', function() {
    browserSync.reload();
  });

  watch('./web/sass/**/*.sass', function() {
    gulp.start('cssInject');
  });

  watch('./web/scripts/source/**/*.js', function() {
    gulp.start('scriptsRefresh');
  });
});
