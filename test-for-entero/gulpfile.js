
'use strict';

const   gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    debug = require('gulp-debug'),
    del = require('del'),
    newer = require('gulp-newer'),
    browserSync = require('browser-sync').create(),
    notify = require('gulp-notify'),
    include = require('gulp-file-include'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    postcss = require('gulp-postcss'),
    mqpacker = require("css-mqpacker"),
    autoprefixer = require('autoprefixer'),
    plumber = require('gulp-plumber'),
    svgSprite = require('gulp-svg-sprites'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    fs = require('fs'),
    babel = require('gulp-babel'); //транспилер для JS (ES-6)

var svg_src_array = [];

// Очистка директории —----------------------------------------------------
gulp.task('clean', function() {
    return del('build');
});

// Таски для основных файлов, css, js , шрифтов и картинок —---------------
//html
gulp.task('html', function() {
    return gulp.src('src/html/**/*.html', {since: gulp.lastRun('html')})
        .pipe(plumber({ errorHandler: notify.onError() }))
        .pipe(include())
        .pipe(newer('build'))
        .pipe(debug({ title: 'html:' }))
        .pipe(gulp.dest('build'))
});

//templates
gulp.task('html:all', function() {
    return gulp.src('src/html/*.html')
        .pipe(plumber({ errorHandler: notify.onError() }))
        .pipe(include())
        .pipe(debug({ title: 'html:' }))
        .pipe(gulp.dest('build'))
});

gulp.task('templates', function() {
    return gulp.src('src/html/templates/*.html', {since: gulp.lastRun('templates')})
        .pipe(plumber({ errorHandler: notify.onError() }))
        .pipe(include())
        .pipe(debug({ title: 'templates:' }))
});

//css
gulp.task('css', function() {
//    var processors = [
//        mqpacker,
//        autoprefixer()
//    ];
    return gulp.src('src/css/*.scss', {since: gulp.lastRun('css')})
        .pipe(plumber({ errorHandler: notify.onError() }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        //    .pipe(postcss(processors))
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        //    .pipe(cleanCSS({debug: true}, function(details) {
        //            console.log('original: ' + (details.stats.originalSize/1024).toFixed(2) + 'kb');
        //            console.log('minified: ' + (details.stats.minifiedSize/1024).toFixed(2) + 'kb');
        //        }))
        .pipe(debug({ title: 'css:' }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css'))
});

//js
gulp.task('js', function() {
    return gulp.src('src/js/*.js', {since: gulp.lastRun('js')})
        .pipe(plumber({ errorHandler: notify.onError() }))
        .pipe(newer('build/js'))
        .pipe(include())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        //    .pipe(uglify())
        .pipe(debug({ title: 'js:' }))
        .pipe(gulp.dest('build/js'))
});

//img
gulp.task('img', function() {
    return gulp.src('src/img/**/*.{jpg,jpeg,png,svg}', {since: gulp.lastRun('img')})
        .pipe(plumber({ errorHandler: notify.onError() }))
        .pipe(newer('build/img'))
        // .pipe(imagemin({
        //     progressive: true,
        //     svgoPlugins: [{ removeViewBox: false }],
        //     use: [pngquant()],
        //     interlaced: true
        // }))
        .pipe(debug({ title: 'img:' }))
        .pipe(gulp.dest('build/img'));
});

//pics
gulp.task('pics', function() {
    return gulp.src('src/css/pics/**/*.{jpg,jpeg,png,svg}', {since: gulp.lastRun('pics')})
        .pipe(plumber({ errorHandler: notify.onError() }))
        .pipe(newer('build/pics'))
        // .pipe(imagemin({
        //     progressive: true,
        //     svgoPlugins: [{ removeViewBox: false }],
        //     use: [pngquant()],
        //     interlaced: true
        // }))
        .pipe(debug({ title: 'pics:' }))
        .pipe(gulp.dest('build/css/pics/'))
});

//fonts
gulp.task('fonts', function() {
    return gulp.src('src/fonts/**/*.{ttf,eot,woff,woff2}', {since: gulp.lastRun('fonts')})
        .pipe(debug({ title: 'fonts:' }))
        .pipe(gulp.dest('build/fonts'))
});

// svg
gulp.task('svg', function () {
    return gulp.src('src/css/pics/svg/**/*.svg')
    // minify svg
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        // remove all fill and style declarations in out shapes
        .pipe(cheerio({
            run: function ($) {
                $('[style]').removeAttr('style');
            },
            parserOptions: { xmlMode: true }
        }))
        // cheerio plugin create unnecessary string '>', so replace it.
        .pipe(replace('&gt;', '>'))
        // build svg sprite
        .pipe(svgSprite({
                mode: "symbols",
                preview: false,
                selector: "icon-%f",
                svg: {
                    symbols: 'sprite.html'
                }
            }
        ))
        .pipe(gulp.dest('build/css/pics/svg'));
});


gulp.task('htmlFileNameParse', function () {
    return gulp.src('src/html/*.html')
        .on('data', function (file) {
            svg_src_array.push(file.stem);
            console.log(file.stem);
        });
});

// svg
gulp.task('svg__sprite', function (callback) {
    for (var i = 0; i < svg_src_array.length; i++) {
        var path = 'src/svg-for-sprite/svg-' + svg_src_array[i];
        if(fs.existsSync(path)){
            gulp.src('src/svg-for-sprite/svg-' + svg_src_array[i] + '/*.svg')
                .pipe(svgSprite({
                    mode: "symbols",
                    preview: false,
                    selector: "icon-%f",
                    svg: {
                        symbols: "svg-" + svg_src_array[i] + '.html'
                    }
                }))
                .pipe(gulp.dest("src/source/svg/"));
        } else {
            console.log(path + '!!!PATH DOES NOT EXIST!!!');
        }
    }
    return callback();
});

gulp.task('test', gulp.series('htmlFileNameParse','svg__sprite'));

//source
gulp.task('source', function() {
    return gulp.src('src/source/**/*.*', {since: gulp.lastRun('source')})
        .pipe(gulp.dest('build'));
});

// watch------------------------------------------—
gulp.task('watch', function() {
    gulp.watch('src/css/**/*.scss',
        gulp.series('css'));
    gulp.watch('src/html/*.html',
        gulp.series('html'));

    gulp.watch('src/html/templates/*.html', gulp.series('templates', 'html:all'));
    gulp.watch('src/js/**/*.js', gulp.series('js'));
    gulp.watch('src/css/pics/**/*.{jpg,jpeg,png,svg}', gulp.series('pics'));
    gulp.watch('src/img/**/*.{jpg,jpeg,png,svg}', gulp.series('img'));
    gulp.watch('src/source/**/*.{js,html}', gulp.series('source'));
    gulp.watch('src/fonts/**/*.{ttf,eot,woff,woff2}', gulp.series('fonts'));
});

// build —---------------------------------------------—
gulp.task('build', gulp.series(
    'clean',
    gulp.series('htmlFileNameParse','svg__sprite'),
    gulp.parallel('css', 'html', 'js', 'fonts', 'img', 'source', 'pics')));

// webserver —------------------------------------------
gulp.task('webserver', function() {
    browserSync.init({
        server: 'build'
    })

    browserSync.watch('build/**/*').on('change', browserSync.reload);
})

// dev —------------------------------------—
gulp.task('dev',
    gulp.series('build', gulp.parallel('watch', 'webserver'))
);


// Default —------------------------------------—
gulp.task('default',
    gulp.series(gulp.parallel('watch', 'webserver'))
);
