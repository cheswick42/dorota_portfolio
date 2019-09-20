const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css
function style() {
    //1.finding scss file. use 2 asterisks to find any scss file
    return gulp.src('./dist/scss/**/*.scss')
        //2.  pass file through sass compiler
        .pipe(sass())
        //3.  save compiled css
        .pipe(gulp.dest('./dist/css'));
}

exports.style = style;