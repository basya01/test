const pathScr = './src';
const pathDest = './public';

module.exports = {
  root: pathDest,
  html: {
    src: pathScr + '/html/*.html',
    watch: pathScr + '/html/**/*.html',
    dest: pathDest,
  },
  scss: {
    src: pathScr + '/scss/*.scss',
    watch: pathScr + '/scss/**/*.scss',
    dest: pathDest + '/css',
  },
  js: {
    src: pathScr + '/js/*.js',
    watch: pathScr + '/js/**/*.js',
    dest: pathDest + '/js',
  },
};
