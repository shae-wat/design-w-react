var gulp = require('gulp')
  , gulpNodemon = require('gulp-nodemon')
  , gulpWatch = require('gulp-watch')
  , babel = require("gulp-babel")
  , es2015 = require('babel-preset-es2015');

const dirs = {
  src: 'src',
  dest: 'build'
};

const sassPaths = {
  src: `${dirs.src}/app.scss`,
  dest: `${dirs.dest}/styles/`
};

 gulp.task('watch-jsx', ['jsx'], function() {
  gulpWatch('**/*.jsx', { ignored: 'dist/' }, function() {
    gulp.start('jsx')
  })
})
 
gulp.task('jsx', function() {
  return gulp.src('./app/index.js')
             .pipe(babel({
                  presets: [es2015]
              }))
             .pipe(gulp.dest('dist'))
})
 
gulp.task('node', ['watch-jsx'], function() {
  gulpNodemon({
    script: 'dist/app/index.js',
    ignore: ['gulpfile.js'],
    ext: 'js jsx'
  })
})
 
gulp.task('default', function() {
  gulp.start('node')
})
