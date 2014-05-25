var gulp = require('gulp');

var paths = {
    sass: '_assets/sass/**/*.scss'
};

function startExpress() {
    var express = require('express');
    var app = express();

    app.use( express.static( __dirname ) );
    app.listen( 4000 );
}

gulp.task('sasslint', function() {
    var scsslint = require('gulp-scsslint');

    return gulp
        .src( paths.sass )
        .pipe( scsslint() )
        .pipe( scsslint.reporter() )
        .pipe( scsslint.reporter('fail') );
});


gulp.task('sass', [ 'sasslint' ], function() {
    var sass = require('gulp-ruby-sass');

    return gulp
        .src( paths.sass )
        .pipe( sass({ sourcemap: true, style: 'compressed' }) )
        .pipe( gulp.dest('assets/styles') );
});

gulp.task('watch', function() {
    gulp.watch( paths.sass, [ 'sass' ] );
});

gulp.task('default', [ 'sass', 'watch' ], function() {
    startExpress();
});
