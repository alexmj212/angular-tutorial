var gulp = require("gulp");
var ts = require("gulp-typescript");
var webServer = require("gulp-webserver");
var tsProject = ts.createProject("src/tsconfig.json");

gulp.task("typescript", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task("static", function (){
    gulp.src("src/index.html").pipe(gulp.dest("dist"));
    gulp.src("src/systemjs-angular-loader.js").pipe(gulp.dest("dist"));
    gulp.src("src/systemjs.config.js").pipe(gulp.dest("dist"));
});

gulp.task("styles", function() {
    return gulp.src("src/app/styles/*.css").pipe(gulp.dest("dist/app/styles"));
});

gulp.task("templates", function() {
    return gulp.src("src/app/templates/*.html").pipe(gulp.dest("dist/app/templates"));
});

gulp.task("watch", function(){
    console.log("Watching for changing files...");
    return gulp.watch("src/**/*", ["build"]);
});

gulp.task("serve", ["build"], function(){
    gulp.src(['./dist','./'])
        .pipe(webServer({
            fallback: 'index.html',
            livereload: true,
            open:true
        }));
})

gulp.task("build", ["typescript", "static", "styles", "templates"]);

gulp.task("default", ["build", "serve", "watch"]);