/**
 * Created with JetBrains WebStorm.
 * User: illuSioN4ng
 * Date: 2017/3/27
 * Description:
 */
// gulpfile.js
var path = require('path'),
    gulp = require('gulp'),
    htmlmini = require('gulp-html-minify'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    csso = require('gulp-csso'),
    filter = require('gulp-filter'),
    RevAll = require('gulp-rev-all'),
    del = require('del');

gulp.task('default',['del'], function () {
    var jsFilter = filter('dev/**/*.js',{restore:true}),
        cssFilter = filter('dev/**/*.css',{restore:true}),
        htmlFilter = filter(['dev/**/*.html'],{restore:true});
    gulp.src('dev/index.html')
        .pipe(useref())                         // 解析html中的构建块
        .pipe(jsFilter)                         // 过滤所有js
        .pipe(uglify({
            preserveComments: 'all' //保留所有注释
        }))                         // 压缩js
        .pipe(jsFilter.restore)
        .pipe(cssFilter)                        // 过滤所有css
        .pipe(csso())                           // 压缩优化css
        .pipe(cssFilter.restore)
        .pipe(RevAll.revision({                 // 生成版本号
            dontRenameFile: ['.html'],          // 不给 html 文件添加版本号
            dontUpdateReference: ['.html'],      // 不给文件里链接的html加版本号
            transformFilename: function (file, hash) {
                // var ext = path.extname(file.path);
                // return hash.substr(0, 5) + '.'  + path.basename(file.path, ext) + ext; // 3410c.filename.ext
                return hash.substr(0, 16) + path.extname(file.path);
            }
        }))
        .pipe(htmlFilter)                       // 过滤所有html
        .pipe(htmlmini())                       // 压缩html
        .pipe(htmlFilter.restore)
        .pipe(gulp.dest('./test'));
});

gulp.task('del',function () {
    del('./test/*');                               // 构建前先删除dist文件里的旧版本
});