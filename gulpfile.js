var gulp = require('gulp');

var sass = require('gulp-ruby-sass');

function startExpress() {

    var express = require('express');
    var app = express();

    app.use(express.static(__dirname));
    app.listen(4000);
}

gulp.task('sass', function(){
    gulp
        .src('./_assets/sass/*.scss')
        .pipe( sass({ sourcemap: true, style: 'compressed' }) )
        .pipe( gulp.dest('./assets/styles') );
});

gulp.task('default', [ 'sass' ], function() {
    startExpress();
});
