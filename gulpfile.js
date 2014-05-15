var gulp = require('gulp');

var sass = require('gulp-ruby-sass');

gulp.task('sass', function(){
    gulp
        .src('./_assets/sass/*.scss')
        .pipe( sass({ sourcemap: true, style: 'compressed' }) )
        .pipe( gulp.dest('./assets/styles') );
});

gulp.task('default', [ 'sass' ]);
