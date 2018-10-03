//reference the required packages to make tasj running work

//import all of the required plugins / packages
var gulp = require('gulp');
var sass = require('gulp-sass');

// start writting your tasks!

//compile SASS

gulp.task('sass', function() {
        // define the gulp-sass task
    return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle : 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'))
});

//watch SASS files for changes compile

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
  });


  //image optimization

  var gulp = require('gulp');
  var imageop = require('gulp-image-optimization');

gulp.task('images', function(cb) {
    gulp.src(['src/**/*.png','src/**/*.jpg','src/**/*.gif','src/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('public/images')).on('end', cb).on('error', cb);
});

//serve the page with browsersync
gulp.task('serve', function() {
    browserSync,init({
        server: {
            baseDir: './',
            index: 'index.hyml'
        }
    });
});