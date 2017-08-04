const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
 
gulp.task('default', () =>
    gulp.src('prestyle.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', "> 1% in US", "Safari >= 7"]
        }))
        .pipe(rename({
            basename: "style"
        }))
        .pipe(gulp.dest(''))
);