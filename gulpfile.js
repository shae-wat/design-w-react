var gulp = require('gulp')
  , gulpReact = require('gulp-react')
  , gulpNodemon = require('gulp-nodemon')
  , babel = require("gulp-babel")

gulp.task("default", function () {
  return gulp.src("index.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('jsx', function() {
  return gulp.src('*.jsx')
             .pipe(gulpReact())
             .pipe(gulp.dest('lib'))
})
 
gulp.task('node', ['jsx'], function() {
  gulpNodemon({
    script: 'lib/index.js',
    ext: 'js'
  })
})
