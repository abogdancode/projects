/**
 * Created by AlexBogdan on 28.10.2016.
 */
var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass');

gulp.task('default', function () {
    return gulp.src('scss/*.scss')
        
        .pipe(sass())
        .pipe(autoprefixer({ browsers: ['last 15 versions','> 1%', 'IE 9'], cascade: false }))
        .pipe(cleanCSS({compatibility: 'ie9'}))
        .pipe(gulp.dest('app/'));
});

gulp.task('watch', function () {
    gulp.watch("scss/*.scss",["default"])
});