const { src, dest, watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

// Конфигурация
const path = require('./config/path');

// Задачи
const html = require('./tasks/html');
const scss = require('./tasks/scss');
const js = require('./tasks/js');
const clear = require('./tasks/clear');

// Сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: './public',
    },
  });
};

// Наблюдатель
const watcher = () => {
  watch(path.html.watch, html).on('all', browserSync.reload);
  watch(path.scss.watch, scss).on('all', browserSync.reload);
  watch(path.js.watch, js).on('all', browserSync.reload);
};

exports.html = html;
exports.scss = scss;
exports.js = js;

const build = series(clear, parallel(html, scss, js));
const dev = series(build, parallel(watcher, server));

exports.dev = dev;
exports.build = build;