var gulp = require('gulp');
var _ = require('lodash');
var wrench = require('wrench');
var sync = require('run-sequence');


var options = {
  client:'./app/client/',
  server:'./app/server/',
  src: './app/client/main.js',
  dist: './dist/',
  main:'./app/',
  drive:"/Users/osama.alghanmi/Google Drive/",
  components:'app/**/*.component.js',
  tmp: '.tmp',
  test:'app/**/*.spec.js',
  errorHandler: function(title) {
    return function(err) {
      console.log(err.toString());
      this.emit('end');
    };
  }
};

wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file)(options);
});

gulp.task('default', function(done){
  sync('webpack:build-dev', 'serve:client' , 'watch', done);
});
