const { series, watch, parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');

function Sass(){
    return gulp.src('./Styles/Scss/**/*.scss')
        .pipe(sass())
        .pipe(csso())
        .pipe(gulp.dest('./Styles/Css'))
}

function WatchTask(){
    watch('./Styles/Scss/**/*.scss',
    series(Sass))
}

exports.default = series(
        parallel(Sass),
        WatchTask
    )