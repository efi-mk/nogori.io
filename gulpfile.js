var gulp = require('gulp');
var del = require('del');


var gulpTypescript = require('gulp-typescript');
var gulpSourceMap = require('gulp-sourcemaps');

// Location of app data
var appDev = 'assets/app/';
// Publish results to here
var appProd = 'public/js/app/';
var vendor = 'public/js/vendor/';

// Access to the type script compilation props.
var tsConfog = gulpTypescript.createProject('tsconfig.json');


gulp.task('clean', function() {
    del(appProd + '/**/*');
});


// Compile & copy ts files.
gulp.task('build-ts', function () {
   return gulp.src(appDev + '**/*.ts')
       .pipe(gulpSourceMap.init())
       .pipe(gulpTypescript(tsConfog))
       .pipe(gulpSourceMap.write())
       .pipe(gulp.dest(appProd));
});

// Copy html + css files to destination folder.
gulp.task('build-html-css', function () {
    return gulp.src([appDev + '**/*.html', appDev + '**/*.css'])
        .pipe(gulp.dest(appProd));
});

gulp.task('watch', function () {
    gulp.watch(appDev + "**/*.ts", ['build-ts']);
    gulp.watch(appDev + "**/*.{html, css}", ['build-html-css']);
});

gulp.task('vendor', function() {
    gulp.src('node_modules/@angular/**')
        .pipe(gulp.dest(vendor + '/@angular'));

    gulp.src('node_modules/es6-shim/**')
        .pipe(gulp.dest(vendor + '/es6-shim'));

    //reflect metadata
    gulp.src('node_modules/reflect-metadata/**')
        .pipe(gulp.dest(vendor + '/reflect-metadata/'));

    //rxjs
    gulp.src('node_modules/rxjs/**')
        .pipe(gulp.dest(vendor + '/rxjs/'));

    //systemjs
    gulp.src('node_modules/systemjs/**')
        .pipe(gulp.dest(vendor + '/systemjs/'));

    //ng2-bootstrap
    gulp.src('node_modules/ng2-bootstrap/**')
        .pipe(gulp.dest(vendor + '/ng2-bootstrap/'));

    //moment
    gulp.src('node_modules/moment/**')
        .pipe(gulp.dest(vendor + '/moment/'));

    //zonejs
    return gulp.src('node_modules/zone.js/**')
        .pipe(gulp.dest(vendor + '/zone.js/'));
});


gulp.task('default', ['watch', 'build-ts', 'build-html-css', 'vendor']);
gulp.task('build', ['build-ts', 'build-html-css', 'vendor']);