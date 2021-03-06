var gulp = require('./tools/gulp')([
    'watch',
    'serve',
    'minifycss',
    'bower',
    'bootstrap',
    'jshint',
    'mocha',
    'vendor',
    'jscs',
    'git',
]);

gulp.task('init', ['bower', 'bootstrap', 'git']);
gulp.task('build', ['vendor', 'minifycss']);
gulp.task('lint', ['jshint', 'jscs']);
gulp.task('test', ['lint', 'mocha']);
gulp.task('default', ['build', 'watch', 'serve']);
