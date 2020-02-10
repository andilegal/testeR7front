let gulp = require("gulp");
let sass = require("gulp-sass");
let cleanCSS = require("gulp-clean-css");

gulp.task("sass", function() {
  return gulp
    .src("./public/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./public/css"));
});

gulp.task("css", () => {
  return gulp
    .src("public/css/*.css")

    .pipe(cleanCSS())

    .pipe(gulp.dest("public"));
});

gulp.task("default", function() {
  gulp.watch("public/css/*.css", function(evt) {
    gulp.task("style-css");
  });
});
