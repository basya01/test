const { src, dest } = require('gulp');

// Конфигурация
const path = require('../config/path');
const app = require('../config/app');

// Плагины
const fileInclude = require('gulp-file-include');
const htmlMin = require('gulp-htmlmin');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const html = () => {
  return src(path.html.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({ title: 'HTML', message: error.message })),
      }),
    )
    .pipe(fileInclude())
    .pipe(htmlMin(app.htmlMin))
    .pipe(dest(path.html.dest));
};

module.exports = html;
