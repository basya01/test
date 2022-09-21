const { src, dest } = require('gulp');

// Конфигурация
const path = require('../config/path');

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');


const js = () => {
  return src(path.js.src, { sourcemaps: true })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({ title: 'JS', message: error.message })),
      }),
    )
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest(path.js.dest, { sourcemaps: true }));
};

module.exports = js;
