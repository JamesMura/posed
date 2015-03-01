var gulp = require('gulp');


module.exports = {
    deps: ['bower'],
    work: function() {
        return gulp.src('./client/bower_components/bootstrap/dist/fonts/**')
            .pipe(gulp.dest('./client/static/fonts/'));
    }
};
