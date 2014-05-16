var gulp = require('gulp');

var paths = {
    sass: '_assets/sass/*.scss'
};

function startExpress() {
    var express = require('express');
    var app = express();

    app.use( express.static( __dirname ) );
    app.listen( 4000 );
}

gulp.task('sass', function() {
    var sass = require('gulp-ruby-sass');

    gulp
        .src( paths.sass )
        .pipe( sass({ sourcemap: true, style: 'compressed' }) )
        .pipe( gulp.dest('./assets/styles') );
});

gulp.task('watch', function() {
    gulp.watch( paths.sass, [ 'sass' ] );
});

gulp.task('default', [ 'sass' ], function() {
    startExpress();
});
