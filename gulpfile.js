var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('autoprefixer-core'),
    postcss = require('gulp-postcss');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');


gulp.task('styles', function(){
  gulp.src(['scss/**/*.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass())
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 version'] }) ]))
    .pipe(gulp.dest('css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('css/'));
});


gulp.task('default', function(){
  gulp.watch("scss/**/*.scss", ['styles']);
});